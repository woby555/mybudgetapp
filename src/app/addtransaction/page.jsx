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
        const res = await fetch("/api/categories");
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
    <div className="flex flex-row min-h-screen gap-12 px-4 py-8 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white border-gray-300 rounded-lg shadow-md border-3 mb-80">
        <h2 className="mb-6 text-2xl font-bold text-center text-black">
          Add a transaction:
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-black">
              Amount:
            </label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-black">
              Category:
            </label>
            <select
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-black">
              Description:
            </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-black">
              Starting day:
            </label>
            <input
              type="date"
              name="transaction_date"
              value={transaction_date}
              onChange={(e) => setTransactionDate(e.target.value)}
              required
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="mb-4 text-red-500">{error}</p>}
          {success && <p className="mb-4 text-green-500">{success}</p>}

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
