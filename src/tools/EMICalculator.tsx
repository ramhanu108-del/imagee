import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { formatCurrency, CURRENCIES } from "../lib/currency";

export default function EMICalculator({ currency }: { currency: string }) {
  const [loan, setLoan] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [tenure, setTenure] = useState<string>("");

  const P = parseFloat(loan) || 0;
  const R = (parseFloat(rate) || 0) / 12 / 100;
  const N = (parseFloat(tenure) || 0) * 12;

  let emi = 0;
  if (P > 0 && R > 0 && N > 0) {
    emi = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
  }

  const totalPayment = emi * N;
  const totalInterest = totalPayment - P;

  const data = [
    { name: "Principal", value: P },
    { name: "Interest", value: Math.max(0, totalInterest) },
  ];

  const currentCurrency = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];
  const COLORS = ["#2563eb", "#f59e0b"];

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-black mb-2 dark:text-blue-400">Free EMI Calculator Online</h2>
        <p className="text-sm text-gray-500">Calculate your monthly loan payments easily with our accurate EMI tool.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Loan Amount ({currentCurrency.symbol})</label>
          <input
            type="number"
            value={loan}
            onChange={(e) => setLoan(e.target.value)}
            placeholder="50000"
            className="w-full p-3 bg-white dark:bg-black border rounded-xl dark:border-gray-800 outline-none focus:ring-2 focus:ring-blue-500 font-bold"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Interest Rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="10.5"
            className="w-full p-3 bg-white dark:bg-black border rounded-xl dark:border-gray-800 outline-none focus:ring-2 focus:ring-blue-500 font-bold"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Tenure (Years)</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="5"
            className="w-full p-3 bg-white dark:bg-black border rounded-xl dark:border-gray-800 outline-none focus:ring-2 focus:ring-blue-500 font-bold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 dark:bg-gray-900/50 p-6 rounded-3xl border dark:border-gray-800">
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-sm text-gray-500">Monthly EMI</span>
            <div className="text-3xl font-black text-blue-600 dark:text-blue-400">
              {formatCurrency(emi, currency)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-gray-500">Total Interest</span>
              <div className="font-bold text-amber-600">{formatCurrency(Math.max(0, totalInterest), currency)}</div>
            </div>
            <div>
              <span className="text-xs text-gray-500">Total Payment</span>
              <div className="font-bold">{formatCurrency(Math.max(0, totalPayment), currency)}</div>
            </div>
          </div>
        </div>

        <div className="h-48 text-black">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => formatCurrency(value, currency)} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <article className="prose prose-sm dark:prose-invert max-w-none text-xs text-gray-400">
        <p>
          An EMI (Equated Monthly Installment) calculator helps you determine the fixed amount you need to pay back to a lender each month. 
          This tool is essential for planning personal loans, home loans, or car loans. Simply input your principal, interest rate, and duration to see a clear breakdown of interest versus principal.
        </p>
      </article>
    </div>
  );
}
