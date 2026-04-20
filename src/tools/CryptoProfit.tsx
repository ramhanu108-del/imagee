import React, { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency, CURRENCIES } from "../lib/currency";

export default function CryptoProfit({ currency }: { currency: string }) {
  const [buyPrice, setBuyPrice] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");

  const b = parseFloat(buyPrice) || 0;
  const s = parseFloat(sellPrice) || 0;
  const q = parseFloat(quantity) || 0;

  const cost = b * q;
  const revenue = s * q;
  const profit = revenue - cost;
  const roi = cost > 0 ? (profit / cost) * 100 : 0;
  const currentCurrency = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-black mb-2 dark:text-yellow-400">Crypto Profit Calculator</h2>
        <p className="text-sm text-gray-500">Calculate your gains or losses on cryptocurrency trades.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Buy Price ({currentCurrency.symbol})</label>
          <input
            type="number"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
            className="w-full p-3 border rounded-xl dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-yellow-500 font-bold"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Sell Price ({currentCurrency.symbol})</label>
          <input
            type="number"
            value={sellPrice}
            onChange={(e) => setSellPrice(e.target.value)}
            className="w-full p-3 border rounded-xl dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-yellow-500 font-bold"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-3 border rounded-xl dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-yellow-500 font-bold"
          />
        </div>
      </div>

      <div className={`p-8 rounded-3xl border transition-colors ${profit >= 0 ? "bg-green-50 border-green-100 dark:bg-green-900/10 dark:border-green-900/30" : "bg-red-50 border-red-100 dark:bg-red-900/10 dark:border-red-900/30"}`}>
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold text-gray-500 uppercase mb-2">Total Profit / Loss</span>
          <div className={`text-5xl font-black flex items-center gap-2 ${profit >= 0 ? "text-green-600" : "text-red-600"}`}>
            {profit >= 0 ? <TrendingUp /> : <TrendingDown />}
            {formatCurrency(Math.abs(profit), currency)}
          </div>
          <div className={`mt-2 font-bold ${profit >= 0 ? "text-green-500" : "text-red-500"}`}>
            {profit >= 0 ? "+" : "-"}{roi.toFixed(2)}% ROI
          </div>
        </div>
      </div>

      <article className="prose prose-sm dark:prose-invert max-w-none text-xs text-gray-400">
        <p>
          Cryptocurrency trading involves high volatility. This profit calculator helps investors understand their net position after a trade. 
          Remember to subtract exchange fees and account for potential taxes on capital gains.
        </p>
      </article>
    </div>
  );
}
