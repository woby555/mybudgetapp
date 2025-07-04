'use client';

import { useState } from 'react';
import "../globals.css";
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function CreateCategory() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('income');

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const res = await fetch("/api/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            type,
        }),
    });

    const data = await res.json();
    if (!res.ok) {
        setError(data.error || "Something went wrong!");
    } else {
        setSuccess("Added category!");
        router.push("/categories");
    }
  };

return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white border-gray-300 rounded-lg shadow-md border-3 mb-80">
            <h2 className="mb-6 text-2xl font-bold text-center text-black">Create a category:</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-black">Name of budget:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-bold text-black">Type:</label>
                    <select
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                        className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                {error && <p className="mb-4 text-red-500">{error}</p>}
                {success && <p className="mb-4 text-green-500">{success}</p>}

                <button
                    type="submit"
                    className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
);
}
