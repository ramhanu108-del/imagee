import React, { useState } from "react";

const CONVERSIONS = {
  length: {
    units: ["Meters", "Kilometers", "Centimeters", "Millimeters", "Inches", "Feet", "Yards", "Miles"],
    toBase: (val: number, unit: string) => {
      const base: any = { Meters: 1, Kilometers: 1000, Centimeters: 0.01, Millimeters: 0.001, Inches: 0.0254, Feet: 0.3048, Yards: 0.9144, Miles: 1609.34 };
      return val * base[unit];
    },
    fromBase: (val: number, unit: string) => {
      const base: any = { Meters: 1, Kilometers: 0.001, Centimeters: 100, Millimeters: 1000, Inches: 39.3701, Feet: 3.28084, Yards: 1.09361, Miles: 0.000621371 };
      return val * base[unit];
    }
  },
  weight: {
    units: ["Kilograms", "Grams", "Milligrams", "Pounds", "Ounces"],
    toBase: (val: number, unit: string) => {
      const base: any = { Kilograms: 1, Grams: 0.001, Milligrams: 0.000001, Pounds: 0.453592, Ounces: 0.0283495 };
      return val * base[unit];
    },
    fromBase: (val: number, unit: string) => {
      const base: any = { Kilograms: 1, Grams: 1000, Milligrams: 1000000, Pounds: 2.20462, Ounces: 35.274 };
      return val * base[unit];
    }
  },
} as const;

export default function UnitConverter() {
  const [category, setCategory] = useState<keyof typeof CONVERSIONS>("length");
  const [value, setValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState(CONVERSIONS.length.units[0]);
  const [toUnit, setToUnit] = useState(CONVERSIONS.length.units[1]);

  const handleCategoryChange = (cat: keyof typeof CONVERSIONS) => {
    setCategory(cat);
    setFromUnit(CONVERSIONS[cat].units[0]);
    setToUnit(CONVERSIONS[cat].units[1]);
  };

  const numValue = parseFloat(value) || 0;
  const result = CONVERSIONS[category].fromBase(CONVERSIONS[category].toBase(numValue, fromUnit), toUnit);

  return (
    <div className="space-y-8">
      <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
        {(Object.keys(CONVERSIONS) as Array<keyof typeof CONVERSIONS>).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`flex-1 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
              category === cat ? "bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400" : "text-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">From {fromUnit}</label>
            <div className="flex flex-col gap-2">
               <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="0"
                className="w-full px-4 py-4 text-2xl font-black border rounded-2xl bg-white dark:bg-black border-gray-200 dark:border-gray-800 outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-300"
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full px-4 py-2 text-sm border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 outline-none"
              >
                {CONVERSIONS[category].units.map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">To {toUnit}</label>
            <div className="flex flex-col gap-2">
               <div className="w-full px-4 py-4 text-2xl font-black bg-gray-50 dark:bg-black text-blue-600 dark:text-blue-500 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-inner">
                {numValue ? result.toLocaleString(undefined, { maximumFractionDigits: 6 }) : "0"}
              </div>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full px-4 py-2 text-sm border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 outline-none"
              >
                {CONVERSIONS[category].units.map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
