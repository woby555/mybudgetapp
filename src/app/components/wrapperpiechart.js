'use client';

import dynamic from 'next/dynamic';

const PieChart = dynamic(() => import('./piechart'), { ssr: false });

export default function BudgetChartWrapper({ spent, remaining }) {
  return <PieChart spent={spent} remaining={remaining} />;
}