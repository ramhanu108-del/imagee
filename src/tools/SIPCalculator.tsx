import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency, CURRENCIES } from "../lib/currency";

export default function SIPCalculator({ currency }: { currency: string }) {
  const [monthly, setMonthly] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [years, setYears] = useState<string>("");

  const P = parseFloat(monthly) || 0;
  const i = (parseFloat(rate) || 0) / 100 / 12;
  const n = (parseFloat(years) || 0) * 12;

  let futureValue = 0;
  let investedAmount = P * n;
  
  const chartData = [];
  if (i > 0 && P > 0) {
    for (let month = 1; month <= n; month++) {
      const fv = P * ((Math.pow(1 + i, month) - 1) / i) * (1 + i);
      if (month % 12 === 0 || month === n) {
        chartData.push({
          year: month / 12,
          value: Math.round(fv),
          invested: P * month
        });
      }
    }
    futureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  }

  const wealthGained = futureValue - investedAmount;
  const currentCurrency = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-black mb-2 dark:text-green-400">SIP Calculator</h2>
        <p className="text-sm text-gray-500">Calculate future returns on your Systematic Investment Plan investments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Monthly Investment ({currentCurrency.symbol})</label>
          <input
            type="number"
            value={monthly}
            onChange={(e) => setMonthly(e.target.value)}
            placeholder="5000"
            className="w-full p-3 bg-white dark:bg-black border rounded-xl dark:border-gray-800 outline-none focus:ring-2 focus:ring-green-500 font-bold"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Return Rate (% p.a)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="12"
            className="w-full p-3 bg-white dark:bg-black border rounded-xl dark:border-gray-800 outline-none focus:ring-2 focus:ring-green-500 font-bold"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Duration (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="10"
            className="w-full p-3 bg-white dark:bg-black border rounded-xl dark:border-gray-800 outline-none focus:ring-2 focus:ring-green-500 font-bold"
          />
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-3xl border dark:border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <span className="text-xs text-gray-500">Invested Amount</span>
            <div className="text-xl font-bold">{formatCurrency(investedAmount, currency)}</div>
          </div>
          <div>
            <span className="text-xs text-gray-500">Wealth Gained</span>
            <div className="text-xl font-bold text-green-600">{formatCurrency(Math.round(wealthGained), currency)}</div>
          </div>
          <div>
            <span className="text-xs text-gray-500">Future Value</span>
            <div className="text-2xl font-black text-green-500">{formatCurrency(Math.round(futureValue), currency)}</div>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
              <XAxis dataKey="year" stroke="#9ca3af" label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111827', border: 'none', borderRadius: '12px', color: '#fff' }}
                itemStyle={{ color: '#10b981' }}
                formatter={(value: number) => formatCurrency(value, currency)}
              />
              <Area type="monotone" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
              <Area type="monotone" dataKey="invested" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.05} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <article className="prose prose-sm dark:prose-invert max-w-none text-xs text-gray-400">
        <p>
          SIP or Systematic Investment Plan is a method of investing a fixed sum in mutual funds regularly. 
          This calculator uses compounding interest to show how small regular savings can grow into a substantial corpus over time. 
          Ideal for long-term financial planning in India.
        </p>
      </article>
    </div>
  );
}
