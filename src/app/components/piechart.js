'use client';

import { PieChart, Pie, Cell, Legend } from 'recharts';
import dynamic from 'next/dynamic';

const COLORS = ['#3b82f6', '#60a5fa']; // Blue shades

export default function BudgetPieChart({ spent, remaining }) {
  const data = [
    { name: 'Spent', value: spent },
    { name: 'Remaining', value: remaining },
  ];

  return (
    <div className="flex justify-center mt-6">
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
}
