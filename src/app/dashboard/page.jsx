import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import BudgetChartWrapper from "../components/wrapperpiechart";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const userId = parseInt(session.user.id); // Adjust if you're storing userId differently

  const budget = await prisma.budgets.findFirst({
    where: { user_id: userId },
    orderBy: { created_at: "desc" },
  });

  const totalSpent = await prisma.transactions.aggregate({
    where: {
      user_id: userId,
      transaction_date: {
        gte: budget?.start_date || undefined,
        lte: budget?.end_date || undefined,
      },
    },
    _sum: { amount: true },
  });

  const recentTransactions = await prisma.transactions.findMany({
    where: {
      user_id: userId,
    },
    orderBy: {
      transaction_date: "desc",
    },
    take: 5, // show the 5 most recent transactions
    include: {
      categories: true, // include category name
    },
  });

  const spent = Number(totalSpent._sum.amount || 0);
  const remaining = (budget?.amount?.toNumber?.() || 0) - spent;

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <h1 className="text-4xl font-semibold leading-tight ml-4">
        <span className="block">Dashboard</span>
      </h1>

      <p className="text-2xl mt-2 text-black ml-4">
        Welcome back, {session.user.name}!
      </p>

      <Link href="/createbudget" className="btn btn-primary mt-4 ml-95">
        Create a Budget
      </Link>

      <Link href="/createcategory" className="btn btn-primary mt-4 ml-4">
        Create a Category
      </Link>

      <div className=" ml-95 justify-center min-h-screen">
        <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-md border-3 border-gray-400 mb-80">
          <div className="p-4 mt-6">
            <div className="text-3xl font-bold mb-2">
              ${budget?.amount?.toFixed?.(2)}
            </div>
            <div className="text-sm text-gray-500">Monthly Budget</div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-lg font-medium text-red-500">
                ${spent.toFixed(2)} Spent
              </div>
              <div className="text-lg font-medium text-green-600">
                ${remaining.toFixed(2)} Remaining
              </div>
            </div>

            <Link href="/addtransaction" className="btn btn-primary mt-4">
              Add Transaction
            </Link>
          </div>
          <div className="flex justify-center mt-6">
            <BudgetChartWrapper spent={spent} remaining={remaining} />
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4 ml-2">Recent Transactions</h2>
      <ul className="divide-y divide-gray-300">
        {recentTransactions.map((tx) => (
          <li
            key={tx.transaction_id}
            className="p-4 flex justify-between items-center">
            <div>
              <div className="font-medium">
                {tx.description || "No description"}
              </div>
              <div className="text-sm text-gray-500">
                {tx.categories?.name || "Uncategorized"} ·{" "}
                {new Date(tx.transaction_date).toLocaleDateString()}
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
