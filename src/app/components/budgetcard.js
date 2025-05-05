import BudgetChartWrapper from "./wrapperpiechart";

export default function BudgetCard({ budget, transactions }) {
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

  const roundedSpent = parseFloat(spent.toFixed(2));

  const roundedRemaining = parseFloat(
    (Number(budget.amount) - roundedSpent).toFixed(2)
  );

  return (
    <div className="justify-center mb-4 text-base-content">
      <div className="max-w-6xl bg-white p-8 rounded-lg shadow-md border-3 border-gray-400 relative">
        <div>
          <div className="text-3xl font-bold mb-2">${budget.amount}</div>
          <div className="text-sm text-gray-500">{budget.name}</div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-lg font-medium text-red-500">
              ${spent} Spent
            </div>
            <div className="text-lg font-medium text-green-600">
              ${roundedRemaining} Remaining
            </div>
          </div>
        </div>

        {/* Flex container for Pie Chart and Transaction List */}
        <div className="flex gap-6 mt-6">
          {/* Budget Pie Chart */}
          <div className="flex-1">
            <BudgetChartWrapper spent={spent} remaining={roundedRemaining} />
          </div>

          {/* Transaction List Section */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-lg border border-gray-300">
            <h3 className="text-lg font-semibold mb-2">Transactions</h3>
            <ul className="space-y-2">
              {budgetTransactions.length > 0 ? (
                budgetTransactions.map((tx, index) => (
                  <li
                    key={tx.id || `${tx.transaction_date}-${index}`}
                    className="text-sm p-2 border-b">
                    <div className="flex justify-between">
                      <div className="text-gray-900 font-medium">
                        ${tx.amount}
                      </div>
                      <div className="text-gray-500">
                        {new Date(tx.transaction_date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-gray-600 mt-1">{tx.description}</div>
                  </li>
                ))
              ) : (
                <div className="text-sm text-gray-500">No transactions found</div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
