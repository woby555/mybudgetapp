import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";

export async function POST(request){
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response("Unauthorized", { status: 401 });
    }

    const {name, amount, start_date, end_date} = await request.json();

    if (!name || !amount || !start_date || !end_date) {
        return new Response("Missing required fields", { status: 400 });
    }   

    try{
        const budget = await prisma.budgets.create({
            data: {
                name,
                amount: parseFloat(amount),
                start_date: new Date(start_date),
                end_date: new Date(end_date),
                user_id: parseInt(session.user.id),
                created_at: new Date().toISOString(),
            },
        });
        return new Response(JSON.stringify(budget), { status: 201 });
    }
    catch (error) {
        console.error("Error creating budget:", error);
        return new Response("Internal Server Error", { status: 500 });
    }

    
}