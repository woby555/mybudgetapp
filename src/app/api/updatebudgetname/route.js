import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";

export async function PATCH(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const { budget_id, new_name } = await req.json();

  if (
    !budget_id ||
    !new_name ||
    typeof new_name !== "string" ||
    new_name.trim().length === 0
  ) {
    return new Response(JSON.stringify({ error: "Invalid input" }), {
      status: 400,
    });
  }

  const user_id = parseInt(session.user.id);

  try {
    // Check that the budget exists and belongs to the user
    const existingBudget = await prisma.budgets.findFirst({
      where: {
        budget_id: parseInt(budget_id),
        user_id: user_id,
      },
    });

    if (!existingBudget) {
      return new Response(
        JSON.stringify({ error: "Budget not found or unauthorized" }),
        { status: 404 }
      );
    }

    // Update the budget name
    const updatedBudget = await prisma.budgets.update({
      where: { budget_id: parseInt(budget_id) },
      data: { name: new_name },
    });

    return new Response(
      JSON.stringify({
        message: "Budget name updated successfully",
        budget: updatedBudget,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
