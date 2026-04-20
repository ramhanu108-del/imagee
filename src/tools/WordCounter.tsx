import React, { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const charsNoSpaces = text.replace(/\s+/g, "").length;
  const paragraphs = text.trim() ? text.split(/\n+/).filter((p) => p.trim() !== "").length : 0;
  const sentences = text.trim() ? text.split(/[.?!]+/).filter((s) => s.trim() !== "").length : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: "Words", value: words },
          { label: "Characters", value: characters },
          { label: "Sentences", value: sentences },
          { label: "Paragraphs", value: paragraphs },
          { label: "No Spaces", value: charsNoSpaces },
        ].map((stat, idx) => (
          <div key={idx} className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-full h-64 p-4 border rounded-xl dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
      
      <div className="flex justify-end">
        <button
          onClick={() => setText("")}
          className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors font-medium"
        >
          Clear Text
        </button>
      </div>
    </div>
  );
}
