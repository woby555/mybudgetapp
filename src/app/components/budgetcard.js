"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BudgetChartWrapper from "./wrapperpiechart";

export default function BudgetCard({ budget, transactions }) {
  const router = useRouter();

  const [deleteTarget, setDeleteTarget] = useState(null);

  const budgetTransactions = transactions.filter((tx) => {
    const date = new Date(tx.transaction_date);
    return (
      (!budget.start_date || date >= new Date(budget.start_date)) &&
      (!budget.end_date || date <= new Date(budget.end_date))
    );
  });

  const spent = budgetTransactions.reduce((sum, tx) => {
    const amount = parseFloat(tx.amount);
    if (tx.categories && tx.categories.type === "income") {
      return sum - amount; // income increases remaining, reduces spent
    } else {
      return sum + amount; // expense increases spent
    }
  }, 0);

  const roundedSpent = parseFloat(Number(spent.toFixed(2)));
  const roundedRemaining = parseFloat(
    (Number(budget.amount) - roundedSpent).toFixed(2)
  );

  // Ensure remaining is not negative
  const displaySpent = roundedRemaining < 0 ? 0 : roundedSpent;

  const onDeleteTransaction = async (transactionId) => {
    try {
      const res = await fetch(
        `/api/deletetransaction?transaction_id=${transactionId}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to delete transaction");
      }
      setDeleteTarget(null);
      router.refresh();
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const confirmDelete = () => {
    if (deleteTarget) {
      onDeleteTransaction(deleteTarget.transaction_id);
      setDeleteTarget(null); // close modal
    }
    router.refresh(); // refresh the page to reflect changes
  };

  return (
    <>
      <div className="justify-center mb-4 text-base-content">
        <div className="relative max-w-6xl p-8 bg-white border-gray-400 rounded-lg shadow-md border-3">
          <div>
            <Link href={`/viewbudget?budget_id=${budget.budget_id}`}>
              <div className="px-0 text-lg font-bold text-gray-500 underline text-underline">
                {budget.name}
              </div>
            </Link>
            <div className="text-sm text-gray-500">
              {budget.start_date
                ? new Date(budget.start_date).toLocaleDateString()
                : "No start date"}{" "}
              to{" "}
              {budget.end_date
                ? new Date(budget.end_date).toLocaleDateString()
                : "No end date"}
            </div>
            <div className="mb-2 text-3xl font-bold">
              ${budget.amount} +
              <span className="text-lg font-normal text-gray-500">
                $
                {(roundedRemaining < 0
                  ? 0
                  : roundedRemaining - budget.amount
                ).toFixed(2)}
              </span>
            </div>

            <Link
              href={`/addtransaction?budget_id=${budget.budget_id}`}
              className="mt-4 btn btn-primary">
              Add Transaction
            </Link>
            <div className="flex items-center justify-between mt-4">
              <div className="text-lg font-medium text-red-500">
                ${displaySpent} Spent
              </div>
              <div className="text-lg font-medium text-green-600">
                ${roundedRemaining} Remaining
              </div>
            </div>
          </div>

          {/* Flex container for Pie Chart and Transaction List */}
          <div className="flex gap-6 mt-6">
            {/* Budget Pie Chart */}
            <div className="flex-1">
              <BudgetChartWrapper spent={spent} remaining={roundedRemaining} />
            </div>

            {/* Transaction List Section */}
            <div className="flex-1 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
              <h3 className="mb-2 text-lg font-semibold">Transactions</h3>
              <ul className="space-y-2">
                {budgetTransactions.length > 0 ? (
                  budgetTransactions.map((tx, index) => (
                    <li
                      key={
                        tx.transaction_id || `${tx.transaction_date}-${index}`
                      }
                      className="relative p-2 text-sm border-b">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            ${tx.amount}
                          </div>
                          <div
                            className={`text-sm font-medium ${
                              tx.categories
                                ? tx.categories.type === "income"
                                  ? "text-green-500"
                                  : "text-red-500"
                                : "text-gray-500"
                            }`}>
                            {tx.categories
                              ? tx.categories.type.charAt(0).toUpperCase() +
                                tx.categories.type.slice(1)
                              : "Uncategorized"}
                          </div>
                          <div className="mt-1 text-gray-600">
                            {tx.description}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">
                            {
                              new Date(tx.transaction_date)
                                .toISOString()
                                .split("T")[0]
                            }
                          </div>
                          <button
                            className="text-sm font-bold text-red-500 hover:text-red-700"
                            onClick={() => setDeleteTarget(tx)}
                            title="Delete">
                            ✕
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="text-sm text-gray-500">
                    No transactions found
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {deleteTarget && (
        <dialog id="delete_modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Confirm Deletion</h3>
            <p className="py-4">
              Are you sure you want to delete the transaction "
              <span className="font-semibold">{deleteTarget.description}</span>"
              for ${deleteTarget.amount}?
            </p>
            <div className="modal-action">
              <button className="btn btn-error" onClick={confirmDelete}>
                Yes, delete
              </button>
              <button className="btn" onClick={() => setDeleteTarget(null)}>
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
