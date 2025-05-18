"use client";

import { useEffect, useState } from "react";
import "../globals.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import BudgetCard from "../components/budgetcard";
import { useSession } from "next-auth/react";
import EditableTransactionsTable from "../components/EditableTransactionsTable";

export default function ViewBudget() {
  const searchParams = useSearchParams();
  const budget_id = searchParams.get("budget_id");

  const [budgetData, setBudgetData] = useState(null);
  const [categories, setCategories] = useState([]);

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
  

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <h1 className="text-4xl font-semibold leading-tight ml-4">
        <span className="block">View Budget</span>
      </h1>

      {budgetData && (
        <>
          <div className="w-full max-w-full mb-8">
            <BudgetCard
              budget={budgetData.budget}
              transactions={budgetData.transactions}
            />
          </div>

          <div className="flex-1 bg-white p-4 rounded-lg shadow-lg border border-gray-300 overflow-x-auto">
            <EditableTransactionsTable
              initialTransactions={budgetData.transactions}
              categories={categories}
              refetchTransactions={fetchBudget}
            />
          </div>
        </>
      )}
    </div>
  );
}
