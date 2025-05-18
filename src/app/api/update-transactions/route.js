import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";

export async function PUT(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    const body = await req.json();
    const { transactions } = body;

    if (!Array.isArray(transactions)) {
      return new Response(JSON.stringify({ error: "Invalid data format" }), { status: 400 });
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

      // If a category name is provided instead, resolve it
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
        },
      });

      results.push(updatedTx);
    }

    return new Response(JSON.stringify({ message: "Updated", results }), { status: 200 });
  } catch (err) {
    console.error("Batch update error:", err);
    return new Response(JSON.stringify({ error: "Failed to update transactions" }), {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
