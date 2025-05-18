"use client";

import { useState, useEffect } from "react";

export default function EditableTransactionsTable({ initialTransactions, refetchTransactions }) {
  const [transactions, setTransactions] = useState(initialTransactions || []);
  const [editedTransactions, setEditedTransactions] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setTransactions(initialTransactions || []);
  }, [initialTransactions]);

  const handleChange = (index, field, value) => {
    const updated = [...transactions];
    updated[index][field] = value;
    setTransactions(updated);

    // Track edits
    setEditedTransactions((prev) => ({
      ...prev,
      [updated[index].transaction_id]: updated[index],
    }));
  };

  const handleSave = async () => {
    if (Object.keys(editedTransactions).length === 0) {
      setMessage("No changes to save.");
      return;
    }

    setIsSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/update-transactions", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          transactions: Object.values(editedTransactions),
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Save failed");

      setMessage("Changes saved successfully!");
      setEditedTransactions({});

      if (typeof refetchTransactions === "function") {
        refetchTransactions();
      }
    } catch (err) {
      console.error("Save error:", err);
      setMessage("Error saving changes.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Transactions</h3>

      <div className="overflow-x-auto">
        <table className="table w-full bg-white shadow rounded">
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={tx.transaction_id}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    value={tx.description}
                    onChange={(e) => handleChange(index, "description", e.target.value)}
                    className="input input-bordered w-full"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={tx.amount}
                    onChange={(e) => handleChange(index, "amount", e.target.value)}
                    className="input input-bordered w-full"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={tx.categories?.name || ""}
                    onChange={(e) =>
                      handleChange(index, "category_name", e.target.value)
                    }
                    className="input input-bordered w-full"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={tx.transaction_date?.split("T")[0] || ""}
                    onChange={(e) =>
                      handleChange(index, "transaction_date", e.target.value)
                    }
                    className="input input-bordered w-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={handleSave}
          className="btn btn-primary"
          disabled={isSaving}
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
        {message && <p className="text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
}
