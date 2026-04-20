import React, { useState } from "react";
import { Copy, RefreshCw, Hash } from "lucide-react";

export default function ColorPicker() {
  const [color, setColor] = useState("#3B82F6");
  const [copied, setCopied] = useState(false);

  const generateRandom = () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
    setCopied(false);
  };

  const copyHex = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-6">
        <div 
          className="w-full h-48 rounded-3xl shadow-inner border-4 border-white dark:border-gray-700 transition-colors duration-500"
          style={{ backgroundColor: color }}
        />
        
        <div className="w-full flex items-center gap-4">
          <div className="relative flex-1">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Hash className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={color.toUpperCase()}
              onChange={(e) => {
                const val = e.target.value.startsWith('#') ? e.target.value : `#${e.target.value}`;
                if (/^#[0-9A-F]{0,6}$/i.test(val)) {
                  setColor(val);
                }
              }}
              className="w-full pl-10 pr-4 py-3 font-mono text-xl font-bold border rounded-2xl dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={copyHex}
            className="p-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl transition-all"
            title="Copy HEX"
          >
            <Copy className={`w-6 h-6 ${copied ? "text-green-500" : ""}`} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={generateRandom}
          className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
        >
          <RefreshCw className="w-5 h-5" /> Random Color
        </button>
        <div className="relative">
           <input 
            type="color" 
            value={color.length === 7 ? color : "#000000"} 
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-full absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl text-sm font-medium text-gray-500 hover:border-blue-500 transition-colors pointer-events-none">
            Choose Manually
          </div>
        </div>
      </div>
    </div>
  );
}
