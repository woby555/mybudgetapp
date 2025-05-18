// File: app/api/gettransactionbudget/route.js

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const url = new URL(req.url);
  const budget_id = parseInt(url.searchParams.get("budget_id"));

  if (isNaN(budget_id)) {
    return new Response(JSON.stringify({ error: "Invalid budget_id" }), {
      status: 400,
    });
  }

  const user_id = parseInt(session.user.id);

  try {
    const budget = await prisma.budgets.findUnique({
      where: { budget_id, user_id },
    });

    if (!budget) {
      return new Response(JSON.stringify({ error: "Budget not found" }), {
        status: 404,
      });
    }

    const transactions = await prisma.transactions.findMany({
      where: { budget_id, user_id },
      include: { categories: true },
      orderBy: { transaction_date: "desc" },
    });

    return new Response(JSON.stringify({ budget, transactions }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
