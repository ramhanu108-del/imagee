import React, { useState } from "react";
import { formatCurrency, CURRENCIES } from "../lib/currency";

const FEATURES = [
  { id: "auth", name: "User Authentication", cost: 1200 },
  { id: "payments", name: "Payment Integration", cost: 1500 },
  { id: "cms", name: "CMS Admin Panel", cost: 2000 },
  { id: "mobile", name: "Responsive Mobile UI", cost: 1000 },
  { id: "seo", name: "SEO Optimization", cost: 800 },
  { id: "api", name: "3rd Party API Sync", cost: 1800 },
];

export default function WebsiteCost({ currency }: { currency: string }) {
  const [pages, setPages] = useState<number>(5);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const basePrice = pages * 300;
  const featuresPrice = FEATURES
    .filter(f => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.cost, 0);

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-black mb-2 dark:text-blue-400">Website Cost Calculator</h2>
        <p className="text-sm text-gray-500">Estimate the development cost for your next web project in seconds.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Number of Pages</label>
          <input
            type="range"
            min="1"
            max="50"
            value={pages}
            onChange={(e) => setPages(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="text-right font-bold">{pages} Pages</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {FEATURES.map(feature => (
            <button
              key={feature.id}
              onClick={() => toggleFeature(feature.id)}
              className={`p-4 border rounded-xl text-left transition-all ${
                selectedFeatures.includes(feature.id)
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 ring-1 ring-blue-500"
                : "dark:border-gray-800 dark:bg-black hover:border-blue-300"
              }`}
            >
              <div className="text-sm font-bold">{feature.name}</div>
              <div className="text-xs text-gray-500">+{formatCurrency(feature.cost, currency)}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-500/20 flex flex-col items-center">
        <span className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-2">Estimated Project Cost</span>
        <div className="text-5xl font-black">{formatCurrency(basePrice + featuresPrice, currency)}</div>
        <p className="mt-4 text-[10px] text-blue-200">Price based on average agency rates in 2026.</p>
      </div>

      <article className="prose prose-sm dark:prose-invert max-w-none text-xs text-gray-400">
        <p>
          Determining website development costs depends on complexity, features, and the number of pages. 
          A simple landing page might cost less, while a full-scale e-commerce platform with custom APIs and authentication requires more development hours and expertise.
        </p>
      </article>
    </div>
  );
}
