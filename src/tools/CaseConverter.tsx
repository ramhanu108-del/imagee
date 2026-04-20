import { Copy } from "lucide-react";
import React, { useState } from "react";
import { Language, TRANSLATIONS } from "../lib/i18n";

interface CaseConverterProps {
  lang: Language;
}

export default function CaseConverter({ lang }: CaseConverterProps) {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[lang];

  const getWords = (str: string) => {
    // This regex splits by spaces, underscores, hyphens and camelCase
    return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || [];
  };

  const convert = (type: string) => {
    if (!text) return;
    
    let newText = text;
    const words = getWords(text);

    switch (type) {
      case "upper":
        newText = words.map(w => w.toUpperCase()).join(" ");
        break;
      case "lower":
        newText = words.map(w => w.toLowerCase()).join(" ");
        break;
      case "title":
        newText = words
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ");
        break;
      case "sentence":
        const sentence = words.map(w => w.toLowerCase()).join(" ");
        newText = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        break;
      case "camel":
        newText = words
          .map((word, index) => {
            const low = word.toLowerCase();
            return index === 0 ? low : low.charAt(0).toUpperCase() + low.slice(1);
          })
          .join("");
        break;
      case "snake":
        newText = words.map((x) => x.toLowerCase()).join("_");
        break;
    }
    setText(newText);
  };

  const copyToClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t.toolCommon.typePlaceholder}
          className="w-full h-48 p-4 border rounded-xl dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-gray-700/80 backdrop-blur rounded-lg shadow-sm hover:text-blue-600 transition-colors"
          title={t.ui.copy}
        >
          <div className="relative">
            {copied && (
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap">
                {t.ui.copied}
              </span>
            )}
            <Copy className={`w-4 h-4 ${copied ? "text-green-500" : ""}`} />
          </div>
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {[
          { label: t.toolCommon.uppercase, id: "upper" },
          { label: t.toolCommon.lowercase, id: "lower" },
          { label: t.toolCommon.titleCase, id: "title" },
          { label: t.toolCommon.sentenceCase, id: "sentence" },
          { label: t.toolCommon.camelCase, id: "camel" },
          { label: t.toolCommon.snakeCase, id: "snake" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => convert(btn.id)}
            disabled={!text}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium rounded-lg disabled:opacity-50 transition-colors"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
