import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";

export async function DELETE(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    const { transaction_ids } = await req.json();

    if (!Array.isArray(transaction_ids)) {
      return new Response(JSON.stringify({ error: "Invalid input" }), { status: 400 });
    }

    await prisma.transactions.deleteMany({
      where: {
        transaction_id: { in: transaction_ids },
        user_id: parseInt(session.user.id),
      },
    });

    return new Response(JSON.stringify({ message: "Deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Delete error:", error);
    return new Response(JSON.stringify({ error: "Failed to delete" }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
