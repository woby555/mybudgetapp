import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";

export async function DELETE(req) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    try{
        const { category_id } = await req.json();
        const parsedCategoryId = parseInt(category_id);

        if (isNaN(parsedCategoryId)) {
            return new Response(JSON.stringify({ error: "Invalid category_id" }), { status: 400 });
        }

        // Check if the category exists for the user
        const category = await prisma.categories.findUnique({
            where: {
                category_id: parsedCategoryId,
                user_id: parseInt(session.user.id),
            },
        });

        if (!category) {
            return new Response(JSON.stringify({ error: "Category not found" }), { status: 404 });
        }

        // Delete the category
        await prisma.categories.delete({
            where: {
                category_id: parsedCategoryId,
            },
        });

        return new Response(JSON.stringify({ message: "Category deleted successfully" }), { status: 200 });

    }

    catch (error) {
        console.error("Delete category error:", error);
        return new Response(JSON.stringify({ error: "Failed to delete category" }), { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}