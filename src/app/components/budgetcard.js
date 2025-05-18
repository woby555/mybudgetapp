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

  const spent = budgetTransactions.reduce(
    (sum, tx) => sum + parseFloat(tx.amount),
    0
  );
  const roundedSpent = parseFloat(Number(spent.toFixed(2)));
  const roundedRemaining = parseFloat(
    (Number(budget.amount) - roundedSpent).toFixed(2)
  );

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
        <div className="max-w-6xl bg-white p-8 rounded-lg shadow-md border-3 border-gray-400 relative">
          <div>
            <div className="text-lg font-bold text-gray-500 text-underline">
              {budget.name}
            </div>
            <div className="text-3xl font-bold mb-2">${budget.amount}</div>

            <Link
                href={`/addtransaction?budget_id=${budget.budget_id}`}
                className="btn btn-primary mt-4">
                Add Transaction
              </Link>
            <div className="flex items-center justify-between mt-4">
              <div className="text-lg font-medium text-red-500">
                ${roundedSpent} Spent
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
            <div className="flex-1 bg-white p-4 rounded-lg shadow-lg border border-gray-300">
              <h3 className="text-lg font-semibold mb-2">Transactions</h3>
              <ul className="space-y-2">
                {budgetTransactions.length > 0 ? (
                  budgetTransactions.map((tx, index) => (
                    <li
                      key={
                        tx.transaction_id || `${tx.transaction_date}-${index}`
                      }
                      className="text-sm p-2 border-b relative">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-gray-900 font-medium">
                            ${tx.amount}
                          </div>
                          <div className="text-gray-600 mt-1">
                            {tx.description}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-500 text-sm">
                            {new Date(tx.transaction_date).toLocaleDateString()}
                          </div>
                          <button
                            className="text-red-500 hover:text-red-700 text-sm font-bold"
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
            <h3 className="font-bold text-lg">Confirm Deletion</h3>
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
