import React, { useState } from "react";
import { formatCurrency } from "../lib/currency";

export default function AdsROICalculator({ currency }: { currency: string }) {
  const [spend, setSpend] = useState<string>("1000");
  const [cpc, setCpc] = useState<string>("1.5");
  const [cr, setCr] = useState<string>("3"); // Conversion Rate
  const [value, setValue] = useState<string>("150"); // Revenue per conversion

  const s = parseFloat(spend) || 0;
  const c = parseFloat(cpc) || 0;
  const r = (parseFloat(cr) || 0) / 100;
  const v = parseFloat(value) || 0;

  const clicks = c > 0 ? s / c : 0;
  const conversions = clicks * r;
  const revenue = conversions * v;
  const profit = revenue - s;
  const roi = s > 0 ? (profit / s) * 100 : 0;

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-black mb-2 dark:text-blue-400">Google Ads ROI Calculator</h2>
        <p className="text-sm text-gray-500">Analyze your PPC campaign performance and return on investment.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase">Ad Spend</label>
          <input type="number" value={spend} onChange={e => setSpend(e.target.value)} className="w-full p-2 border rounded-lg dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-blue-500 font-bold" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase">Avg. CPC</label>
          <input type="number" value={cpc} onChange={e => setCpc(e.target.value)} className="w-full p-2 border rounded-lg dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-blue-500 font-bold" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase">Conv. Rate (%)</label>
          <input type="number" value={cr} onChange={e => setCr(e.target.value)} className="w-full p-2 border rounded-lg dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-blue-500 font-bold" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase">Sale Value</label>
          <input type="number" value={value} onChange={e => setValue(e.target.value)} className="w-full p-2 border rounded-lg dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-blue-500 font-bold" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border dark:border-gray-700 shadow-xl shadow-blue-500/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center">
          <div>
            <div className="text-xs text-gray-400 uppercase font-bold">Clicks</div>
            <div className="text-2xl font-black">{Math.round(clicks).toLocaleString()}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase font-bold">Conversions</div>
            <div className="text-2xl font-black">{conversions.toFixed(1)}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase font-bold text-blue-500">Revenue</div>
            <div className="text-2xl font-black text-blue-500">{formatCurrency(Math.round(revenue), currency)}</div>
          </div>
          <div>
            <div className={`text-xs uppercase font-bold ${profit >= 0 ? "text-green-500" : "text-red-500"}`}>Profit</div>
            <div className={`text-2xl font-black ${profit >= 0 ? "text-green-500" : "text-red-500"}`}>{formatCurrency(Math.round(profit), currency)}</div>
          </div>
        </div>

        <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
          <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Return on Investment</div>
          <div className="text-6xl font-black text-blue-600 dark:text-blue-400">{roi.toFixed(0)}%</div>
        </div>
      </div>

      <article className="prose prose-sm dark:prose-invert max-w-none text-xs text-gray-400">
        <p>
          ROI (Return on Investment) in Google Ads helps you understand if your PPC campaigns are profitable. 
          It compares the revenue generated from your sales with the amount spent on clicks. A positive ROI means you're making more than you spend, 
          which is crucial for scaling any digital advertising business.
        </p>
      </article>
    </div>
  );
}
