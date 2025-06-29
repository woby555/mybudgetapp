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

    const { category_id, new_name, new_type } = await req.json();

    // Basic input validation
    if (
        !category_id ||
        !new_name ||
        typeof new_name !== "string" ||
        new_name.trim().length === 0 ||
        !new_type ||
        (new_type !== "income" && new_type !== "expense")
    ) {
        return new Response(JSON.stringify({ error: "Invalid input" }), {
            status: 400,
        });
    }

    const user_id = parseInt(session.user.id);

    try {
        // Ensure the category exists and belongs to this user
        const existingCategory = await prisma.categories.findFirst({
            where: {
                category_id: parseInt(category_id),
                user_id: user_id,
            },
        });

        if (!existingCategory) {
            return new Response(
                JSON.stringify({ error: "Category not found or unauthorized" }),
                { status: 404 }
            );
        }

        // Update both name and type
        const updatedCategory = await prisma.categories.update({
            where: { category_id: parseInt(category_id) },
            data: {
                name: new_name,
                type: new_type,
            },
        });

        return new Response(
            JSON.stringify({
                message: "Category updated successfully",
                category: updatedCategory,
            }),
            { status: 200 }
        );
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Server error" }), {
            status: 500,
        });
    }
}
