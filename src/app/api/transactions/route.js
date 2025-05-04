import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";
import { parse } from "path";

export async function POST(req) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const {amount, transaction_date, category_id, budget_id, description } = await req.json();

    if (!amount || !transaction_date || !category_id || !budget_id || !description) {
        const errorResponse = { error: "Missing required fields" };
        console.log("Response JSON:", errorResponse); // Log the JSON object
        return new Response(JSON.stringify(errorResponse), { status: 400 });
    }
    
    try {
        const newTransaction = await prisma.transactions.create({
            data: {
                amount: parseFloat(amount),
                transaction_date: new Date(transaction_date),
                category_id: parseInt(category_id),
                user_id: parseInt(session.user.id),
                description: description,
                created_at: new Date().toISOString(), 
                updated_at: new Date().toISOString(),
                budget_id: parseInt(budget_id),
            },
        });
        return new Response(JSON.stringify(newTransaction), { status: 201 });
    } catch (error) {
        console.error("Error creating transaction:", error);
        return new Response(JSON.stringify({ error: "Failed to create transaction" }), { status: 500 });
    }
}