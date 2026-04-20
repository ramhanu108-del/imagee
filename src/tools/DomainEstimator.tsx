import React, { useState } from "react";
import { Search, Info } from "lucide-react";
import { formatCurrency } from "../lib/currency";

export default function DomainEstimator({ currency }: { currency: string }) {
  const [domain, setDomain] = useState<string>("");

  const estimateValue = (name: string) => {
    if (!name || !name.includes(".")) return 0;
    
    let score = 500;
    const [label, extension] = name.split(".");
    
    // Length bonus
    if (label.length <= 4) score += 5000;
    else if (label.length <= 8) score += 1000;

    // Extension bonus
    const ex: any = { com: 1000, org: 500, net: 400, ai: 2000, io: 1500 };
    score += ex[extension.toLowerCase()] || 0;

    // Keyword check (mock)
    const keywords = ["pay", "buy", "crypto", "smart", "ai", "money"];
    if (keywords.some(k => label.includes(k))) score *= 1.5;

    return Math.floor(score);
  };

  const value = estimateValue(domain);

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-black mb-2 dark:text-orange-400">Domain Value Estimator</h2>
        <p className="text-sm text-gray-500">Get a heuristic estimate of your domain name's market value.</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="example.com"
          className="w-full pl-12 pr-4 py-4 text-xl font-bold border rounded-2xl dark:bg-black dark:border-gray-800 outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
        />
      </div>

      <div className="flex flex-col items-center justify-center p-12 bg-gray-50 dark:bg-gray-900 border-2 border-dashed dark:border-gray-800 rounded-3xl">
        {value > 0 ? (
          <>
            <span className="text-xs font-bold text-gray-500 uppercase mb-2">Estimated Market Value</span>
            <div className="text-5xl font-black text-orange-600 dark:text-orange-500">
              {formatCurrency(value, currency)}+
            </div>
          </>
        ) : (
          <div className="text-gray-400 flex flex-col items-center gap-2">
            <Info className="w-8 h-8 opacity-20" />
            <p className="text-sm">Enter a valid domain to see estimate</p>
          </div>
        )}
      </div>

      <article className="prose prose-sm dark:prose-invert max-w-none text-xs text-gray-400">
        <p>
          Domain valuation is based on various factors: brandability, length, extension (.com is king), and keyword search volume. 
          While this tool provides a baseline estimate, actual sales depend on marketplace demand and negotiation.
        </p>
      </article>
    </div>
  );
}
