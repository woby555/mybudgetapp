"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BudgetChartWrapper from "./wrapperpiechart";

export default function BudgetCard({ budget, transactions }) {
  const router = useRouter();

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [editTarget, setEditTarget] = useState(null);

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
      const res = await fetch("/api/transactions", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transaction_ids: [transactionId] }),
      });

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
              <div className="px-0 text-3xl font-bold text-gray-500 underline text-underline">
                {budget.name}
              </div>
            </Link>
            <div className="text-sm text-gray-500">
              {budget.start_date
                ? new Date(budget.start_date).toISOString().split("T")[0]
                : "No start date"}{" "}
              to{" "}
              {budget.end_date
                ? new Date(budget.end_date).toISOString().split("T")[0]
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

            <button
              className="mt-4 btn btn-primary"
              onClick={() => setEditTarget(budget)}>
              Edit Budget
            </button>
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
              <h3 className="mb-2 text-lg font-semibold">
                Transactions (Top 5 Most Recent)
              </h3>
              <ul className="space-y-2">
                {budgetTransactions.length > 0 ? (
                  [...budgetTransactions]
                    .sort((a, b) => {
                      const dateDiff =
                        new Date(b.transaction_date) -
                        new Date(a.transaction_date);
                      if (dateDiff !== 0) {
                        return dateDiff;
                      } else {
                        return b.transaction_id - a.transaction_id;
                      }
                    })
                    .slice(0, 5)
                    .map((tx, index) => (
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

      {/* Edit Modal */}
      {editTarget && (
        <dialog id="edit_modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Edit Budget</h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const newName = e.target.budget_name.value;
                if (!newName || newName.trim() === "") return;

                try {
                  const res = await fetch("/api/budgets", {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      budget_id: editTarget.budget_id,
                      new_name: newName,
                      new_amount: parseFloat(e.target.budget_amount.value),
                      new_start_date: e.target.start_date.value,
                      new_end_date: e.target.end_date.value,
                    }),
                  });

                  if (!res.ok) {
                    throw new Error("Failed to update budget");
                  }

                  setEditTarget(null);
                  router.refresh();
                } catch (error) {
                  console.error("Error updating budget:", error);
                }
              }}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Budget Name:
                </label>
                <input
                  type="text"
                  name="budget_name"
                  defaultValue={editTarget.name}
                  required
                  className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block mt-4 mb-2 text-sm font-bold text-gray-700">
                  Budget Amount:
                </label>
                <input
                  type="number"
                  name="budget_amount"
                  defaultValue={editTarget.amount}
                  required
                  className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="block mt-4 mb-2 text-sm font-bold text-gray-700">
                  Start Date:
                </label>
                <input
                  type="date"
                  name="start_date"
                  defaultValue={
                    editTarget.start_date
                      ? new Date(editTarget.start_date)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="block mt-4 mb-2 text-sm font-bold text-gray-700">
                  End Date:
                </label>
                <input
                  type="date"
                  name="end_date"
                  defaultValue={
                    editTarget.end_date
                      ? new Date(editTarget.end_date)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setEditTarget(null)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}
