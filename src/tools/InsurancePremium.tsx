import React, { useState } from "react";
import { formatCurrency, CURRENCIES } from "../lib/currency";

export default function InsurancePremium({ currency }: { currency: string }) {
  const [age, setAge] = useState<string>("30");
  const [coverage, setCoverage] = useState<string>("500000");
  const [smoker, setSmoker] = useState<boolean>(false);

  const calculatePremium = () => {
    const baseRate = 100; // Base rate at age 18
    const ageFactor = Math.max(0, (parseInt(age) - 18) * 10);
    const coverageFactor = (parseInt(coverage) / 100000) * 50;
    const smokerFactor = smoker ? 1.5 : 1;
    
    return (baseRate + ageFactor + coverageFactor) * smokerFactor;
  };

  const premium = calculatePremium();
  const currentCurrency = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-black mb-2 dark:text-cyan-400">Insurance Premium Estimator</h2>
        <p className="text-sm text-gray-500">Get a quick estimate on your life or health insurance monthly premiums.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase">Your Age</label>
            <input
              type="range"
              min="18"
              max="80"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="text-right font-bold">{age} Years</div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase">Coverage Amount ({currentCurrency.symbol})</label>
            <select 
              value={coverage}
              onChange={(e) => setCoverage(e.target.value)}
              className="w-full p-3 border rounded-xl dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 font-bold"
            >
              <option value="100000">{formatCurrency(100000, currency)}</option>
              <option value="250000">{formatCurrency(250000, currency)}</option>
              <option value="500000">{formatCurrency(500000, currency)}</option>
              <option value="1000000">{formatCurrency(1000000, currency)}</option>
            </select>
          </div>

          <label className="flex items-center gap-3 p-4 border rounded-xl dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <input 
              type="checkbox" 
              checked={smoker}
              onChange={(e) => setSmoker(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
            />
            <span className="text-sm font-bold">Tobacco / Smoker User?</span>
          </label>
        </div>

        <div className="flex flex-col items-center justify-center p-8 bg-cyan-50 dark:bg-cyan-900/10 rounded-3xl border border-cyan-100 dark:border-cyan-900/30">
          <span className="text-sm text-gray-500 mb-2">Estimated Monthly Premium</span>
          <div className="text-5xl font-black text-cyan-600 dark:text-cyan-400">
            {formatCurrency(premium, currency)}
          </div>
          <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest text-center">
            *This is an estimate. Actual rates depend on medical checks and policy type.
          </p>
        </div>
      </div>

      <article className="prose prose-sm dark:prose-invert max-w-none text-xs text-gray-400">
        <p>
          Calculating insurance premiums involves assessing risk factors like age, health habits (smoking), and desired coverage. 
          Generally, the younger and healthier you are, the lower your premium will be. This tool provides a baseline for term life insurance estimation.
        </p>
      </article>
    </div>
  );
}
