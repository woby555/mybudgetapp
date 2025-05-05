import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const budgetId = parseInt(searchParams.get("budget_id"));
  const userId = parseInt(session.user.id);

  if (isNaN(budgetId)) {
    return new Response(JSON.stringify({ error: "Invalid or missing budget_id" }), { status: 400 });
  }

  try {
    const budget = await prisma.budgets.findFirst({
      where: {
        user_id: userId,
        budget_id: budgetId,
      },
    });

    if (!budget) {
      return new Response(JSON.stringify({ error: "Budget not found" }), { status: 404 });
    }

    const transactions = await prisma.transactions.findMany({
      where: {
        user_id: userId,
        budget_id: budgetId,
      },
    });

    return new Response(JSON.stringify({ budget, transactions }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API error:", err);
    return new Response(JSON.stringify({ error: "Error fetching budget" }), { status: 500 });
  }
}
