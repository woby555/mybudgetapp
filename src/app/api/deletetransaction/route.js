import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";

export async function DELETE(req) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    
    const { searchParams } = new URL(req.url);
    const transactionId = parseInt(searchParams.get("transaction_id"));
    const userId = parseInt(session.user.id);
    
    if (isNaN(transactionId)) {
        return new Response(JSON.stringify({ error: "Invalid or missing transaction_id" }), { status: 400 });
    }
    
    try {
        const transaction = await prisma.transactions.findFirst({
        where: {
            user_id: userId,
            transaction_id: transactionId,
        },
        });
    
        if (!transaction) {
        return new Response(JSON.stringify({ error: "Transaction not found" }), { status: 404 });
        }
    
        await prisma.transactions.delete({
        where: {
            transaction_id: transactionId,
        },
        });
    
        return new Response(JSON.stringify({ message: "Transaction deleted successfully" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error("API error:", err);
        return new Response(JSON.stringify({ error: "Error deleting transaction" }), { status: 500 });
    }
    }