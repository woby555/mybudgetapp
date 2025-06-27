"use client";

import { useEffect, useState } from "react";
import "../globals.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import BudgetCard from "../components/budgetcard";
import { useSession } from "next-auth/react";
import EditableTransactionsTable from "../components/EditableTransactionsTable";
import Link from "next/link";

export default function ViewBudget() {
  const searchParams = useSearchParams();
  const budget_id = searchParams.get("budget_id");

  const [budgetData, setBudgetData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [newBudgetName, setNewBudgetName] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchBudget = async () => {
      if (!budget_id) return;
      try {
        const res = await fetch(
          `/api/gettransactionbudget?budget_id=${budget_id}`
        );

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
    fetchBudget();
  }, [budget_id]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/getcategories");
        const text = await res.text();
        if (!res.ok) {
          console.error("Categories fetch failed:", text);
          return;
        }

        const data = JSON.parse(text);
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const fetchBudget = async () => {
    if (!budget_id) return;
    try {
      const res = await fetch(
        `/api/gettransactionbudget?budget_id=${budget_id}`
      );
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

  const handleSaveBudgetName = async () => {
    if (!budget_id || !newBudgetName.trim()) {
      alert("Please enter a valid budget name.");
      return;
    }

    try {
      const res = await fetch("/api/updatebudgetname", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ budget_id, new_name: newBudgetName }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Budget name updated successfully!");
        setBudgetData((prev) => ({
          ...prev,
          budget: { ...prev.budget, name: newBudgetName },
        }));
      } else {
        alert(data.error || "Error updating budget name");
      }
    } catch (err) {
      console.error("Error saving budget name:", err);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <h1 className="ml-4 text-4xl font-semibold leading-tight">
        <span className="block">View Budget</span>
      </h1>
      <Link href="/dashboard" className="mt-4 mb-4 ml-4 btn btn-secondary">
        Back to Dashboard
      </Link>

      {budgetData && (
        <>
          <div className="flex gap-4">
            <div className="flex flex-col flex-grow max-w-full gap-4 overflow-y-auto w-full max-w-full mb-8 ml-4">
              <BudgetCard
                budget={budgetData.budget}
                transactions={budgetData.transactions}
              />
            </div>
            <div className="w-[500px] h-fit bg-base-100 shadow rounded-box mr-100 p-4 border-3 border-gray-400">
              <Link href="/categories" className="mb-4 text-2xl font-semibold">Categories</Link>
              <ul className="space-y-2">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <li
                      key={category.category_id}
                      className="flex items-center justify-between p-3 border-b last:border-b-0">
                      <div className="font-medium">{category.name}</div>
                      <span
                        className={`mt-1 text-sm font-semibold ${
                          category.type === "income"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}>
                        {category.type === "income" ? "↑ Income" : "↓ Expense"}
                      </span>
                    </li>
                  ))
                ) : (
                  <div className="text-sm text-gray-500">
                    No categories found
                  </div>
                )}
              </ul>
            </div>
          </div>
          <div className="p-4 mb-6 ml-4 text-lg font-semibold bg-white border border-gray-300 rounded-lg shadow-lg max-w-fit">
            <label htmlFor="budgetName" className="font-bold">
              Update Budget Name:
            </label>
            <input
              id="budgetName"
              name="budgetName"
              type="text"
              placeholder="Enter new budget name..."
              value={newBudgetName} // Bind input value to the state
              onChange={(e) => setNewBudgetName(e.target.value)} // Handle input changes
              className="w-64 ml-2 input input-bordered input-sm"
              required
            />
            <button
              type="submit"
              className="ml-2 btn btn-primary btn-sm"
              onClick={handleSaveBudgetName}>
              Save
            </button>
          </div>

          <div className="flex-1 p-4 ml-4 overflow-x-auto bg-white border border-gray-300 rounded-lg shadow-lg">
            <EditableTransactionsTable
              initialTransactions={budgetData.transactions}
              categories={categories}
              refetchTransactions={fetchBudget}
              budget_id={parseInt(budget_id)}
            />
          </div>
        </>
      )}
    </div>
  );
}
