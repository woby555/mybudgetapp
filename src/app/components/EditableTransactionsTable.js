"use client";

import { useState, useEffect } from "react";

let newRowCounter = 0;

export default function EditableTransactionsTable({
  initialTransactions,
  refetchTransactions,
  categories,
  budget_id,
}) {
  const [transactions, setTransactions] = useState(initialTransactions || []);
  const [editedTransactions, setEditedTransactions] = useState({});
  const [deletedTransactionIds, setDeletedTransactionIds] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setTransactions(initialTransactions || []);
  }, [initialTransactions]);

  const handleChange = (index, field, value) => {
    const updated = [...transactions];
    updated[index][field] = value;
    setTransactions(updated);

    const id = updated[index].transaction_id;

    // ✅ Ensure budget_id is inside the transaction object
    setEditedTransactions((prev) => ({
      ...prev,
      [id]: {
        ...updated[index],
        budget_id: updated[index].budget_id ?? budget_id,
      },
    }));

    console.log("Edited transaction:", {
      ...updated[index],
      budget_id: updated[index].budget_id ?? budget_id,
    });
  };

  const handleAddRow = () => {
    const newTransaction = {
      transaction_id: `new-${++newRowCounter}`,
      description: "",
      amount: "",
      category_id: "",
      transaction_date: "",
      budget_id: budget_id, // ✅ Assign upfront
    };

    setTransactions((prev) => [...prev, newTransaction]);

    // Track immediately in editedTransactions
    setEditedTransactions((prev) => ({
      ...prev,
      [newTransaction.transaction_id]: newTransaction,
    }));
  };

  const handleDeleteRow = (index) => {
    const tx = transactions[index];

    if (typeof tx.transaction_id === "number") {
      setDeletedTransactionIds((prev) => [...prev, tx.transaction_id]);
    }

    setTransactions((prev) => prev.filter((_, i) => i !== index));
    setEditedTransactions((prev) => {
      const updated = { ...prev };
      delete updated[tx.transaction_id];
      return updated;
    });
  };

  const handleSave = async () => {
    if (
      Object.keys(editedTransactions).length === 0 &&
      deletedTransactionIds.length === 0
    ) {
      setMessage("No changes to save.");
      return;
    }

    setIsSaving(true);
    setMessage(null);

    try {
      const newTxs = [];
      const existingTxs = [];

      Object.values(editedTransactions).forEach((tx) => {
        if (
          typeof tx.transaction_id === "string" &&
          tx.transaction_id.startsWith("new-")
        ) {
          newTxs.push(tx);
        } else {
          existingTxs.push(tx);
        }
      });

      // ✅ DEBUG LOG: Check what's being sent
      newTxs.forEach((tx) =>
        console.log("Creating transaction with payload:", tx)
      );

      for (const newTx of newTxs) {
        const response = await fetch("/api/transactions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: parseFloat(newTx.amount),
            transaction_date: newTx.transaction_date,
            category_id: parseInt(newTx.category_id),
            budget_id: newTx.budget_id,
            description: newTx.description,
          }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Failed to create transaction");
        }
      }

      if (existingTxs.length > 0) {
        await fetch("/api/update-transactions", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ transactions: existingTxs }),
        });
      }

      if (deletedTransactionIds.length > 0) {
        await fetch("/api/delete-transactions", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ transaction_ids: deletedTransactionIds }),
        });
      }

      setMessage("Changes saved successfully!");
      setEditedTransactions({});
      setDeletedTransactionIds([]);
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
      <h3 className="mb-2 text-lg font-semibold">Transactions</h3>

      <div className="overflow-x-auto">
        <table className="table w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Action</th>
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
                    onChange={(e) =>
                      handleChange(index, "description", e.target.value)
                    }
                    className="w-full input input-bordered"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={tx.amount}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "amount",
                        e.target.value === "" ? "" : parseFloat(e.target.value)
                      )
                    }
                    className="w-full input input-bordered"
                  />
                </td>
                <td>
                  <select
                    value={tx.category_id || ""}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "category_id",
                        parseInt(e.target.value)
                      )
                    }
                    className="w-full select select-bordered"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat.category_id} value={cat.category_id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="date"
                    value={tx.transaction_date?.split("T")[0] || ""}
                    onChange={(e) =>
                      handleChange(index, "transaction_date", e.target.value)
                    }
                    className="w-full input input-bordered"
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteRow(index)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <button onClick={handleAddRow} className="btn btn-secondary">
          Add Row
        </button>
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
