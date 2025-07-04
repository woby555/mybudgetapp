import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const budget_id = parseInt(url.searchParams.get("budget_id"));

  if (isNaN(budget_id)) {
    return NextResponse.json({ error: "Invalid budget_id" }, { status: 400 });
  }

  try {
    const budget = await prisma.budgets.findUnique({
      where: { budget_id, user_id: parseInt(session.user.id) },
    });

    if (!budget) {
      return NextResponse.json({ error: "Budget not found" }, { status: 404 });
    }

    const transactions = await prisma.transactions.findMany({
      where: { budget_id, user_id: parseInt(session.user.id) },
      include: { categories: true },
      orderBy: { transaction_date: "asc" },
    });

    return NextResponse.json({ budget, transactions }, { status: 200 });
  } catch (err) {
    console.error("Error retrieving transactions:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { amount, transaction_date, category_id, budget_id, description } = body;

    if (
      amount === undefined ||
      !transaction_date ||
      !category_id ||
      !budget_id ||
      description === undefined
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const parsedAmount = parseFloat(amount);
    const parsedCategoryId = parseInt(category_id);
    const parsedBudgetId = parseInt(budget_id);
    const parsedDate = new Date(transaction_date);

    if (isNaN(parsedAmount) || parsedAmount < 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }
    if (isNaN(parsedCategoryId)) {
      return NextResponse.json({ error: "Invalid category_id" }, { status: 400 });
    }
    if (isNaN(parsedBudgetId)) {
      return NextResponse.json({ error: "Invalid budget_id" }, { status: 400 });
    }
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json({ error: "Invalid transaction_date" }, { status: 400 });
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

    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error) {
    console.error("Error creating transaction:", error);
    return NextResponse.json({ error: "Failed to create transaction" }, { status: 500 });
  }
}

export async function PUT(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { transactions } = body;

    if (!Array.isArray(transactions)) {
      return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
    }

    const results = [];

    for (const tx of transactions) {
      const {
        transaction_id,
        description,
        amount,
        transaction_date,
        category_id,
        category_name,
      } = tx;

      let final_category_id = category_id ?? null;

      // Resolve category by name if needed
      if (!category_id && category_name) {
        const category = await prisma.categories.findFirst({
          where: {
            name: category_name,
            user_id: parseInt(session.user.id),
          },
        });
        if (category) {
          final_category_id = category.category_id;
        }
      }

      const updatedTx = await prisma.transactions.update({
        where: { transaction_id },
        data: {
          description,
          amount: parseFloat(amount),
          transaction_date: new Date(transaction_date),
          category_id: final_category_id,
          updated_at: new Date(),
        },
      });

      results.push(updatedTx);
    }

    return NextResponse.json({ message: "Updated", results }, { status: 200 });
  } catch (err) {
    console.error("Batch update error:", err);
    return NextResponse.json({ error: "Failed to update transactions" }, { status: 500 });
  }
}

export async function DELETE(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { transaction_ids } = await req.json();

    if (!Array.isArray(transaction_ids)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    await prisma.transactions.deleteMany({
      where: {
        transaction_id: { in: transaction_ids },
        user_id: parseInt(session.user.id),
      },
    });

    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Failed to delete transactions" }, { status: 500 });
  }
}
