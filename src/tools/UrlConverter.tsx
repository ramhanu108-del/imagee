import React, { useState } from "react";
import { Link, Link2Off, Copy } from "lucide-react";

export default function UrlConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = () => {
    setOutput(encodeURIComponent(input));
  };

  const decode = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch (e) {
      alert("Invalid URL for decoding.");
    }
  };

  const copyResult = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Input URL/Text</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste URL or encoded string here..."
          className="w-full h-32 p-4 border rounded-xl dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={encode}
          className="py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20"
        >
          <Link className="w-4 h-4" /> Encode URL
        </button>
        <button
          onClick={decode}
          className="py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/20"
        >
          <Link2Off className="w-4 h-4" /> Decode URL
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Output</label>
          <button
            onClick={copyResult}
            disabled={!output}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline disabled:opacity-30"
          >
            <Copy className={`w-3 h-3 ${copied ? "text-green-500" : ""}`} /> {copied ? "Copied" : "Copy Output"}
          </button>
        </div>
        <textarea
          value={output}
          readOnly
          className="w-full h-32 p-4 border rounded-xl bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 outline-none resize-none font-mono text-gray-600 dark:text-gray-400"
        />
      </div>
    </div>
  );
}
