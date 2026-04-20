import React, { useState } from "react";
import { formatCurrency, CURRENCIES } from "../lib/currency";

export default function CreditCardInterest({ currency }: { currency: string }) {
  const [balance, setBalance] = useState<string>("");
  const [apr, setApr] = useState<string>("");
  const [minimum, setMinimum] = useState<string>("");

  const P = parseFloat(balance) || 0;
  const R = (parseFloat(apr) || 0) / 100 / 365;
  const days = 30; // Standard month

  const monthlyInterest = P * R * days;
  const currentCurrency = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-black mb-2 dark:text-purple-400">Credit Card Interest Calculator</h2>
        <p className="text-sm text-gray-500">Calculate how much interest you pay on your unpaid credit card balance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Unpaid Balance ({currentCurrency.symbol})</label>
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder="2500"
            className="w-full p-4 border rounded-2xl dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500 font-bold"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Annual APR (%)</label>
          <input
            type="number"
            value={apr}
            onChange={(e) => setApr(e.target.value)}
            placeholder="24"
            className="w-full p-4 border rounded-2xl dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500 font-bold"
          />
        </div>
      </div>

      <div className="p-8 bg-purple-50 dark:bg-purple-900/10 rounded-3xl border border-purple-100 dark:border-purple-900/30 text-center">
        <span className="text-sm text-gray-500 font-medium">Interest Added This Month</span>
        <div className="text-4xl font-black text-purple-600 dark:text-purple-400 my-2">
          {formatCurrency(monthlyInterest, currency)}
        </div>
        <p className="text-xs text-gray-400">Total balance next month: {formatCurrency(P + monthlyInterest, currency)}</p>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-900/20 text-xs text-amber-700 dark:text-amber-400">
        <strong>Tip:</strong> Paying only the minimum balance keeps you in debt longer. Even an extra $50/month can save thousands in interest over time.
      </div>

      <article className="prose prose-sm dark:prose-invert max-w-none text-xs text-gray-400">
        <p>
          Credit card interest is typically calculated daily based on your Annual Percentage Rate (APR). 
          This tool estimates the monthly interest charged if you carry a balance. High-interest debt can compound quickly, making it harder to pay off the principal.
        </p>
      </article>
    </div>
  );
}
