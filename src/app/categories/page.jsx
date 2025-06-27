import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import Link from "next/link";

export default async function CategoriesPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const userId = parseInt(session.user.id);

  const categories = await prisma.categories.findMany({
    where: { user_id: userId },
    orderBy: { created_at: "desc" },
  });

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <h1 className="ml-4 text-4xl font-semibold leading-tight">
        <span className="block">Categories</span>
      </h1>

      <Link href="/dashboard" className="mt-4 mb-4 ml-4 btn btn-secondary">
        Back to Dashboard
      </Link>

      <Link href="/createcategory" className="btn btn-secondary ml-4">
        Create a Category
      </Link>

      <div className="overflow-x-auto mt-4">
        <table className="table w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.category_id}>
                <td>{category.name}</td>
                <td>
                  {category.type.charAt(0).toUpperCase() +
                    category.type.slice(1)}
                </td>
                <td>
                  <Link
                    href={`/editcategory/${category.category_id}`}
                    className="btn btn-primary btn-sm mr-2">
                    Edit
                  </Link>
                  <Link
                    href={`/deletecategory/${category.category_id}`}
                    className="btn btn-error btn-sm">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
