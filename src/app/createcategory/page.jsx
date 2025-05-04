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
        router.push("/dashboard"); // Redirect to dashboard or any other page
    }
  };

return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border-3 border-gray-300 mb-80">
            <h2 className="text-2xl font-bold mb-6 text-black text-center">Create a category:</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2">Name of budget:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-black text-sm font-bold mb-2">Type:</label>
                    <select
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-500 mb-4">{success}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
);
}
