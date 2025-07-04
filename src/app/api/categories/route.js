import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const categories = await prisma.categories.findMany({
      where: { user_id: parseInt(session.user.id) },
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error retrieving categories:", error);
    return NextResponse.json({ error: "Failed to retrieve categories" }, { status: 500 });
  }
}

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, type } = await req.json();

  if (!name || !type) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const newCategory = await prisma.categories.create({
      data: {
        name,
        type,
        user_id: parseInt(session.user.id),
        created_at: new Date().toISOString(),
      },
    });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
  }
}

export async function PATCH(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { category_id, new_name, new_type } = await req.json();

  if (
    !category_id ||
    !new_name ||
    typeof new_name !== "string" ||
    new_name.trim().length === 0 ||
    !new_type ||
    (new_type !== "income" && new_type !== "expense")
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const existingCategory = await prisma.categories.findFirst({
      where: {
        category_id: parseInt(category_id),
        user_id: parseInt(session.user.id),
      },
    });

    if (!existingCategory) {
      return NextResponse.json({ error: "Category not found or unauthorized" }, { status: 404 });
    }

    const updatedCategory = await prisma.categories.update({
      where: { category_id: parseInt(category_id) },
      data: {
        name: new_name,
        type: new_type,
      },
    });

    return NextResponse.json(
      { message: "Category updated successfully", category: updatedCategory },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json({ error: "Failed to update category" }, { status: 500 });
  }
}

export async function DELETE(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("id");
  const categoryId = parseInt(idParam);

  if (isNaN(categoryId)) {
    return NextResponse.json({ error: "Invalid category ID" }, { status: 400 });
  }

  try {
    await prisma.categories.delete({
      where: { category_id: categoryId },
    });

    return NextResponse.json({ message: "Category deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}
