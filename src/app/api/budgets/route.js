import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, amount, start_date, end_date } = await request.json();

  if (!name || !amount) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const startDate = start_date ? new Date(start_date) : null;
  const endDate = end_date ? new Date(end_date) : null;

  try {
    const budget = await prisma.budgets.create({
      data: {
        name,
        amount: parseFloat(amount),
        start_date: startDate,
        end_date: endDate,
        user_id: parseInt(session.user.id),
        created_at: new Date().toISOString(),
      },
    });

    return NextResponse.json(budget, { status: 201 });
  } catch (error) {
    console.error("Error creating budget:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const {
    budget_id,
    new_name,
    new_amount,
    new_start_date,
    new_end_date,
  } = await req.json();

  // Validate budget_id and new_name minimally (adjust stricter validation as needed)
  if (
    !budget_id ||
    !new_name ||
    typeof new_name !== "string" ||
    new_name.trim().length === 0
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const existingBudget = await prisma.budgets.findFirst({
      where: {
        budget_id: parseInt(budget_id),
        user_id: parseInt(session.user.id),
      },
    });

    if (!existingBudget) {
      return NextResponse.json({ error: "Budget not found or unauthorized" }, { status: 404 });
    }

    const updateData = {
      name: new_name.trim(),
    };

    if (new_amount !== undefined) {
      const parsedAmount = parseFloat(new_amount);
      if (isNaN(parsedAmount) || parsedAmount < 0) {
        return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
      }
      updateData.amount = parsedAmount;
    }

    if (new_start_date) {
      const parsedStartDate = new Date(new_start_date);
      if (isNaN(parsedStartDate.getTime())) {
        return NextResponse.json({ error: "Invalid start date" }, { status: 400 });
      }
      updateData.start_date = parsedStartDate;
    }

    if (new_end_date) {
      const parsedEndDate = new Date(new_end_date);
      if (isNaN(parsedEndDate.getTime())) {
        return NextResponse.json({ error: "Invalid end date" }, { status: 400 });
      }
      updateData.end_date = parsedEndDate;
    }

    const updatedBudget = await prisma.budgets.update({
      where: { budget_id: parseInt(budget_id) },
      data: updateData,
    });

    return NextResponse.json(
      { message: "Budget updated successfully", budget: updatedBudget },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error updating budget:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

