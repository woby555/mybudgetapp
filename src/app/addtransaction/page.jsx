"use client";

import { useEffect, useState } from "react";
import "../globals.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import BudgetCard from "../components/budgetcard";

export default function CreateBudget() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [transaction_date, setTransactionDate] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const searchParams = useSearchParams();
  const budget_id = searchParams.get("budget_id");

  const [budgetData, setBudgetData] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/getcategories");
        const data = await res.json();
        if (res.ok) setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    const fetchBudget = async () => {
      if (!budget_id) return;
      try {
        const res = await fetch(`/api/gettransactionbudget?budget_id=${budget_id}`);
    
        const text = await res.text();
        if (!res.ok) {
          console.error("Budget fetch failed:", text);
          return;
        }
    
        const data = JSON.parse(text);
        setBudgetData(data);
      } catch (err) {
        console.error("Error fetching budget:", err);
      }
    };

    fetchCategories();
    fetchBudget();
  }, [budget_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseFloat(amount),
          transaction_date,
          category_id: parseInt(category),
          budget_id: parseInt(budget_id),
          description
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create transaction");
      } else {
        setSuccess("Added transaction!");
        setTimeout(() => router.push("/dashboard"), 1500);
      }
    } catch (err) {
      setError("An error occurred while submitting the form");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-row gap-12 min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border-3 border-gray-300 mb-80">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">
          Add a transaction:
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Amount:
            </label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Category:
            </label>
            <select
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2">
              Description:
            </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2">
              Starting day:
            </label>
            <input
              type="date"
              name="transaction_date"
              value={transaction_date}
              onChange={(e) => setTransactionDate(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Add Transaction
          </button>
        </form>
      </div>

            {budgetData && (
        <div className="w-full max-w-4xl mb-8">
          <BudgetCard budget={budgetData.budget} transactions={budgetData.transactions} />
        </div>
      )}
    </div>
  );
}
