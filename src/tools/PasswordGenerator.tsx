import { Copy, RefreshCw } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let chars = "";
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (chars.length === 0) {
      setPassword("");
      return;
    }

    let generated = "";
    for (let i = 0; i < length; i++) {
      generated += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(generated);
    setCopied(false);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full px-4 py-3 pr-24 font-mono text-lg border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-600 outline-none"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <button
            onClick={generatePassword}
            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
            title="Regenerate"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
          <button
            onClick={copyToClipboard}
            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
            title="Copy"
          >
            <Copy className={`w-5 h-5 ${copied ? "text-green-500" : ""}`} />
          </button>
        </div>
      </div>

      <div>
        <label className="flex justify-between text-sm font-medium mb-4">
          <span>Password Length</span>
          <span className="text-blue-600 dark:text-blue-400 font-bold">{length}</span>
        </label>
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-3">
        {[
          { label: "Uppercase Letters", state: includeUppercase, setState: setIncludeUppercase },
          { label: "Lowercase Letters", state: includeLowercase, setState: setIncludeLowercase },
          { label: "Numbers", state: includeNumbers, setState: setIncludeNumbers },
          { label: "Symbols", state: includeSymbols, setState: setIncludeSymbols },
        ].map((item, idx) => (
          <label key={idx} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={item.state}
              onChange={(e) => item.setState(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm font-medium">{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
