import React, { useState } from "react";
import { formatCurrency, CURRENCIES } from "../lib/currency";

export default function TaxCalculator({ currency }: { currency: string }) {
  const [income, setIncome] = useState<string>("");

  const calculateTax = (sal: number) => {
    // 2024-25 New Tax Regime (Simplified)
    const taxableIncome = Math.max(0, sal - 75000);
    if (taxableIncome <= 700000) return 0;

    let tax = 0;
    if (taxableIncome > 1500000) tax += (taxableIncome - 1500000) * 0.30;
    if (taxableIncome > 1200000) tax += (Math.min(taxableIncome, 1500000) - 1200000) * 0.20;
    if (taxableIncome > 1000000) tax += (Math.min(taxableIncome, 1200000) - 1000000) * 0.15;
    if (taxableIncome > 700000) tax += (Math.min(taxableIncome, 1000000) - 700000) * 0.10;
    if (taxableIncome > 300000) tax += (Math.min(taxableIncome, 700000) - 300000) * 0.05;

    return tax * 1.04;
  };

  const salVal = parseFloat(income) || 0;
  const taxVal = calculateTax(salVal);
  const takeHome = salVal - taxVal;
  const currentCurrency = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-black mb-2 dark:text-red-400">Income Tax Calculator 2026</h2>
        <p className="text-sm text-gray-500">Calculate your income tax for FY 2024-25 (New Regime) easily.</p>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-400 uppercase">Annual Gross Salary ({currentCurrency.symbol})</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="1200000"
          className="w-full p-4 text-2xl font-black bg-white dark:bg-black border rounded-2xl dark:border-gray-800 outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30">
          <span className="text-xs font-bold text-red-600 uppercase tracking-tighter">Total Income Tax</span>
          <div className="text-3xl font-black text-red-600">{formatCurrency(Math.round(taxVal), currency)}</div>
        </div>
        <div className="p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-900/30">
          <span className="text-xs font-bold text-green-600 uppercase tracking-tighter">Estimated Take Home</span>
          <div className="text-3xl font-black text-green-600">{formatCurrency(Math.round(takeHome / 12), currency)}/mo</div>
        </div>
      </div>

      <div className="overflow-hidden border dark:border-gray-800 rounded-2xl">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-900 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Income Slab</th>
              <th className="px-4 py-3">Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-800">
            <tr>
                   <td className="px-4 py-3">Up to ₹3,00,000</td>
                   <td className="px-4 py-3">NIL</td>
            </tr>
            <tr>
                   <td className="px-4 py-3">₹3,00,001 - ₹7,00,000</td>
                   <td className="px-4 py-3">5%</td>
            </tr>
            <tr>
                   <td className="px-4 py-3">₹7,00,001 - ₹10,00,000</td>
                   <td className="px-4 py-3">10%</td>
            </tr>
            <tr>
                   <td className="px-4 py-3">Above ₹15,00,000</td>
                   <td className="px-4 py-3">30%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <article className="prose prose-sm dark:prose-invert max-w-none text-xs text-gray-400">
        <p>
          The Income Tax Calculator India allows individuals to estimate their tax liability under the New Tax Regime (FY 2024-25 / AY 2025-26). 
          It includes the standard deduction of ₹75,000 and the Section 87A rebate for income up to ₹7 Lakhs. Perfect for early financial year planning.
        </p>
      </article>
    </div>
  );
}
