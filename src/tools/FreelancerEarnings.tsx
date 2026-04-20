import React, { useState } from "react";
import { formatCurrency, CURRENCIES } from "../lib/currency";

export default function FreelancerEarnings({ currency }: { currency: string }) {
  const [rate, setRate] = useState<string>("50");
  const [hours, setHours] = useState<string>("40");

  const hourlyRate = parseFloat(rate) || 0;
  const weeklyHours = parseFloat(hours) || 0;

  const weeklyIncome = hourlyRate * weeklyHours;
  const monthlyIncome = weeklyIncome * 4.33; // Average weeks in month
  const yearlyIncome = weeklyIncome * 52;
  const currentCurrency = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-black mb-2 dark:text-green-400">Freelancer Earning Calculator</h2>
        <p className="text-sm text-gray-500">Calculate your potential monthly and yearly income based on hourly rates.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase">Hourly Rate ({currentCurrency.symbol})</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full p-4 border rounded-2xl dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-green-500 font-bold"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase">Hours Per Week</label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full p-4 border rounded-2xl dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-green-500 font-bold"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 border dark:border-gray-800 rounded-2xl">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Monthly Income</span>
            <div className="text-2xl font-black text-green-600 dark:text-green-400">
              {formatCurrency(Math.round(monthlyIncome), currency)}
            </div>
          </div>
          <div className="p-6 bg-green-600 text-white rounded-2xl shadow-lg shadow-green-500/20">
            <span className="text-[10px] font-bold text-green-100 uppercase">Yearly Gross</span>
            <div className="text-3xl font-black">
              {formatCurrency(Math.round(yearlyIncome), currency)}
            </div>
          </div>
        </div>
      </div>

      <article className="prose prose-sm dark:prose-invert max-w-none text-xs text-gray-400">
        <p>
          Freelancers and contractors often calculate their income differently than salaried employees. 
          By defining an hourly rate and set working hours, you can better plan your budget and tax requirements. 
          Don't forget to account for unpaid holidays and expenses!
        </p>
      </article>
    </div>
  );
}
