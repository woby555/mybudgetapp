import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";

export async function POST(req){
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const {name, type} = await req.json();

    if (!name || !type) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    try {
        const newCategory = await prisma.categories.create({
            data: {
                name,
                type,
                user_id: parseInt(session.user.id),
                created_at: new Date().toISOString(), // Converts to ISO 8601 format, compatible with Postgres' timestamp
            },
        });
        return new Response(JSON.stringify(newCategory), { status: 201 });
    }
    catch (error) {
        console.error("Error creating category:", error);
        return new Response(JSON.stringify({ error: "Failed to create category" }), { status: 500 });
    }


}