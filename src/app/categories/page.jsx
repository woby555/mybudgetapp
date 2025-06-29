"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [editTarget, setEditTarget] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/getcategories");
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      } else {
        console.error("Failed to load categories");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch(
        `/api/deletecategory/${deleteTarget.category_id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        await fetchCategories(); // Refresh data after delete
        setDeleteTarget(null);
      } else {
        console.error("Failed to delete category");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDeleteTarget(null);
    }
  };

  const handleEdit = async (category) => {
    if (!category || !category.category_id) return;
    try {
      const res = await fetch(`/api/editcategory`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category_id: category.category_id,
          new_name: category.name,
          new_type: category.type,
        }),
      });
      if (res.ok) {
        await fetchCategories(); // ✅ Refresh after edit
        setEditTarget(null);
      } else {
        console.error("Failed to update category");
      }
    } catch (err) {
      console.error(err);
    }
  }; // <-- ✅ Closing brace for handleEdit function

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <h1 className="ml-4 text-4xl font-semibold leading-tight">Categories</h1>

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
                  <button
                    onClick={() => setEditTarget(category)}
                    className="btn btn-primary btn-sm mr-2">
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteTarget(category)}
                    className="btn btn-error btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          {categories.length === 0 && (
            <div className="text-center text-gray-500">
              No categories found. Please create a category.
            </div>
          )}
        </div>

        <Link href="/dashboard" className="mt-4 mb-4 ml-4 btn btn-secondary">
          Back to Dashboard
        </Link>
      </div>

      {deleteTarget && (
        <dialog id="delete_modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Confirm Deletion</h3>
            <p className="py-4">
              Are you sure you want to delete the category "
              <span className="font-semibold">{deleteTarget.name}</span>"?
              <span>
                ⛔ This action will cause all transactions under this category
                to become <b>uncategorized</b>.⛔
              </span>
            </p>
            <div className="modal-action">
              <button className="btn btn-error" onClick={confirmDelete}>
                Yes, delete
              </button>
              <button className="btn" onClick={() => setDeleteTarget(null)}>
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}

      {editTarget && (
        <dialog id="edit_modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Edit Category</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEdit(editTarget);
              }}
              className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={editTarget.name}
                  onChange={(e) =>
                    setEditTarget({ ...editTarget, name: e.target.value })
                  }
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Type</label>
                <select
                  value={editTarget.type}
                  onChange={(e) =>
                    setEditTarget({ ...editTarget, type: e.target.value })
                  }
                  className="select select-bordered w-full"
                  required>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setEditTarget(null)}>
                  Cancel
                </button>
              </div>
            </form>

            <div className="modal-action">
              <button className="btn" onClick={() => setEditTarget(null)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
