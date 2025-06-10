import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import BudgetChartWrapper from "../components/wrapperpiechart";
import BudgetCard from "../components/budgetcard";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const userId = parseInt(session.user.id);

  const budgets = await prisma.budgets.findMany({
    where: { user_id: userId },
    orderBy: { created_at: "desc" },
  });

  const categories = await prisma.categories.findMany({
    where: { user_id: userId },
    orderBy: { created_at: "desc" },
  });

  const transactions = await prisma.transactions.findMany({
    where: { user_id: userId },
  });

  const plainTransactions = transactions.map((tx) => ({
    ...tx,
    amount: parseFloat(tx.amount), // or tx.amount.toNumber()
  }));

  const recentTransactions = await prisma.transactions.findMany({
    where: {
      user_id: userId,
    },
    orderBy: {
      transaction_date: "desc",
    },
    take: 5,
    include: {
      categories: true,
      budgets: true,
    },
  });

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <h1 className="ml-4 text-4xl font-semibold leading-tight">
        <span className="block">Dashboard</span>
      </h1>

      <p className="mt-2 ml-4 text-2xl text-black">
        Welcome back, {session.user.name}!
      </p>

      <div className="flex gap-4 mt-4 ml-4">
        <Link href="/createbudget" className="btn btn-primary">
          Create a Budget
        </Link>
        <Link href="/createcategory" className="btn btn-secondary">
          Create a Category
        </Link>
      </div>

      <h2 className="mt-8 mb-4 ml-4 text-xl font-semibold">Your Budgets</h2>
      <div className="flex gap-4 mb-4 ml-4">
        <div className="flex flex-col flex-grow max-w-full gap-6 overflow-y-auto">
          {budgets.map((budget) => (
            <BudgetCard
              key={budget.budget_id}
              budget={{
                ...budget,
                amount: budget.amount.toNumber(), // convert Decimal to number
              }}
              transactions={plainTransactions}
            />
          ))}
        </div>
        <div className="w-[300px] h-fit bg-base-100 shadow rounded-box mr-100 p-4 border-3 border-gray-400">
          <h1 className="mb-4 text-2xl font-semibold">Categories</h1>
          <ul className="space-y-2">
            {categories.length > 0 ? (
              categories.map((category) => (
                <li
                  key={category.category_id}
                  className="flex items-center justify-between p-3 border-b last:border-b-0">
                  <div className="font-medium">{category.name}</div>
                </li>
              ))
            ) : (
              <div className="text-sm text-gray-500">No categories found</div>
            )}
          </ul>
        </div>
      </div>

      <h2 className="mb-4 ml-4 text-xl font-semibold">Recent Transactions</h2>

      <ul className="ml-4 mr-4 text-xl shadow list bg-base-100 rounded-box">
        {recentTransactions.map((tx) => (
          <li
            key={tx.transaction_id}
            className="flex items-center justify-between p-4 border-b list-item last:border-b-0">
            <div>
              <div className="font-medium">
                {tx.description || "No description"}
              </div>
              <div className="text-sm text-gray-500">
                {tx.budgets?.name || "No Budget"} ·{" "}
                {tx.categories?.name || "Uncategorized"} ·{" "}
                {new Date(tx.transaction_date).toISOString().split("T")[0]}
              </div>
            </div>
            <div
              className={`font-semibold ${
                tx.amount > 0 ? "text-red-500" : "text-green-500"
              }`}>
              ${parseFloat(tx.amount).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
