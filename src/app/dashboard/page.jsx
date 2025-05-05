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

  const userId = parseInt(session.user.id);

  const budgets = await prisma.budgets.findMany({
    where: { user_id: userId },
    orderBy: { created_at: "desc" },
  });

  const transactions = await prisma.transactions.findMany({
    where: { user_id: userId },
  });

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
    },
  });

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
    <h1 className="text-4xl font-semibold leading-tight ml-4">
      <span className="block">Dashboard</span>
    </h1>
  
    <p className="text-2xl mt-2 text-black ml-4">
      Welcome back, {session.user.name}!
    </p>
  
    <div className="flex gap-4 ml-4 mt-4">
      <Link href="/createbudget" className="btn btn-primary">
        Create a Budget
      </Link>
      <Link href="/createcategory" className="btn btn-secondary">
        Create a Category
      </Link>
    </div>
  
    <div className="flex-col flex-wrap gap-2 mt-4 px-4">
      {budgets.map((budget) => {
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
  
        const remaining = budget.amount.toNumber() - spent;
  
        return (
          <div key={budget.budget_id} className="justify-center mb-4">
            <div className="max-w-6xl bg-white p-8 rounded-lg shadow-md border-3 border-gray-400">
              <div className="">
                <div className="text-3xl font-bold mb-2">
                  ${budget.amount.toFixed(2)}
                </div>
                <div className="text-sm text-gray-500">{budget.name}</div>
  
                <div className="flex items-center justify-between mt-4">
                  <div className="text-lg font-medium text-red-500">
                    ${spent.toFixed(2)} Spent
                  </div>
                  <div className="text-lg font-medium text-green-600">
                    ${remaining.toFixed(2)} Remaining
                  </div>
                </div>
                <Link
                  href={`/addtransaction?budget_id=${budget.budget_id}`}
                  className="btn btn-primary mt-4">
                  Add Transaction
                </Link>
              </div>
              {/* Flexbox container for Pie Chart and Transaction List */}
              <div className="flex gap-6 mt-6">
                {/* Budget Pie Chart */}
                <div className="flex-1">
                  <BudgetChartWrapper spent={spent} remaining={remaining} />
                </div>
  
                {/* Transaction List Section */}
                <div className="flex-1 bg-white p-4 rounded-lg shadow-lg border border-gray-300">
                  <h3 className="text-lg font-semibold mb-2">Transactions</h3>
                  <ul className="space-y-2">
                    {budgetTransactions.length > 0 ? (
                      budgetTransactions.map((tx, index) => (
                        <li
                          key={
                            tx.transaction_id ||
                            `${tx.transaction_date}-${index}`
                          }
                          className="text-sm p-2 border-b">
                          <div className="flex justify-between">
                            <div className="text-gray-900 font-medium">
                              ${parseFloat(tx.amount).toFixed(2)}
                            </div>
                            <div className="text-gray-500">
                              {new Date(tx.transaction_date).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="text-gray-600 mt-1">
                            {tx.description || "No description"}
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
        );
      })}
    </div>
  
    <h2 className="text-xl font-semibold mb-4 ml-4">Recent Transactions</h2>
  
    <ul className="divide-y divide-gray-300 ml-4 mr-4">
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
