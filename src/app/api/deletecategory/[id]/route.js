import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function DELETE(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  const categoryId = parseInt(id);

  if (isNaN(categoryId)) {
    return NextResponse.json({ error: "Invalid category ID" }, { status: 400 });
  }

  try {
    await prisma.categories.delete({
      where: { category_id: categoryId },
    });

    return NextResponse.json({ message: "Category deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}
