"use client";

import { useEffect, useState } from "react";
import "../globals.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import BudgetCard from "../components/budgetcard";
import { useSession } from "next-auth/react";

export default function ViewBudget() {
  const searchParams = useSearchParams();
  const budget_id = searchParams.get("budget_id");

  const [budgetData, setBudgetData] = useState(null);

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

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <h1 className="text-4xl font-semibold leading-tight ml-4">
        <span className="block">View Budget</span>
      </h1>

      {budgetData && (
        <div className="w-full max-w-full mb-8">
          <BudgetCard
            budget={budgetData.budget}
            transactions={budgetData.transactions}
          />
        </div>
      )}

      <div className="flex-1 bg-white p-4 rounded-lg shadow-lg border border-gray-300 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-2">Transactions</h3>

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
              {budgetData?.transactions?.map((tx, index) => (
                <tr key={tx.transaction_id}>
                  <td>{index + 1}</td>
                  <td>{tx.description}</td>
                  <td>${parseFloat(tx.amount).toFixed(2)}</td>
                  <td>{tx.categories?.name || "Uncategorized"}</td>
                  <td>{new Date(tx.transaction_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
}
