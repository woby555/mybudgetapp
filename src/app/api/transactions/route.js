import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      amount,
      transaction_date,
      category_id,
      budget_id,
      description,
    } = body;

    // Validate required fields
    if (
      amount === undefined ||
      !transaction_date ||
      !category_id ||
      !budget_id ||
      description === undefined
    ) {
      return new Response(
        JSON.stringify({ error: "Missing one or more required fields" }),
        { status: 400 }
      );
    }

    // Validate types
    const parsedAmount = parseFloat(amount);
    const parsedCategoryId = parseInt(category_id);
    const parsedBudgetId = parseInt(budget_id);
    const parsedDate = new Date(transaction_date);

    if (isNaN(parsedAmount) || parsedAmount < 0) {
      return new Response(JSON.stringify({ error: "Invalid amount" }), { status: 400 });
    }

    if (isNaN(parsedCategoryId)) {
      return new Response(JSON.stringify({ error: "Invalid category_id" }), { status: 400 });
    }

    if (isNaN(parsedBudgetId)) {
      return new Response(JSON.stringify({ error: "Invalid budget_id" }), { status: 400 });
    }

    if (isNaN(parsedDate.getTime())) {
      return new Response(JSON.stringify({ error: "Invalid transaction_date" }), { status: 400 });
    }

    const newTransaction = await prisma.transactions.create({
      data: {
        amount: parsedAmount,
        transaction_date: parsedDate,
        category_id: parsedCategoryId,
        budget_id: parsedBudgetId,
        user_id: parseInt(session.user.id),
        description,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return new Response(JSON.stringify(newTransaction), { status: 201 });
  } catch (error) {
    console.error("Error creating transaction:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create transaction" }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
