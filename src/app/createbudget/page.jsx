'use client';

import { useState } from 'react';
import "../globals.css";
import { useRouter } from 'next/navigation';

export default function CreateBudget() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/budgets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          amount: parseFloat(amount),
          start_date,
          end_date,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to create budget');
      } else {
        setSuccess('Added budget!');
        setTimeout(() => router.push('/dashboard'), 1500);
      }
    } catch (err) {
      setError('An error occurred while submitting the form');
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white border-gray-300 rounded-lg shadow-md border-3 mb-80">
        <h2 className="mb-6 text-2xl font-bold text-center text-black">Create a budget:</h2>

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
            <label className="block mb-2 text-sm font-bold text-black">Amount:</label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-black">Starting day:</label>
            <input
              type="date"
              name="start_date"
              value={start_date}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-black">Ending day:</label>
            <input
              type="date"
              name="end_date"
              value={end_date}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="mb-4 text-red-500">{error}</p>}
          {success && <p className="mb-4 text-green-500">{success}</p>}

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Budget
          </button>
        </form>
      </div>
    </div>
  );
}
