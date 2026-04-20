import { Moon, Sun, Wrench, Globe, Languages } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { CURRENCIES } from "../lib/currency";
import { Language, TRANSLATIONS } from "../lib/i18n";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  currency: string;
  onCurrencyChange: (code: string) => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export function Navbar({ 
  isDarkMode, 
  toggleDarkMode, 
  currency, 
  onCurrencyChange,
  lang,
  onLangChange
}: NavbarProps) {
  const t = TRANSLATIONS[lang];

  return (
    <nav className="sticky top-0 z-30 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Wrench className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight leading-none">{t.navbar.hubName}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium mr-4">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.navbar.home}</a>
              <a href="#tools" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.navbar.tools}</a>
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.navbar.about}</a>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full border dark:border-gray-700">
              <Languages className="w-3.5 h-3.5 text-gray-500" />
              <select 
                value={lang}
                onChange={(e) => onLangChange(e.target.value as Language)}
                className="bg-transparent text-xs font-bold outline-none cursor-pointer pr-1"
              >
                <option value="en" className="dark:bg-gray-900">EN</option>
                <option value="hi" className="dark:bg-gray-900">हिन्दी</option>
              </select>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full border dark:border-gray-700">
              <Globe className="w-3.5 h-3.5 text-gray-500" />
              <select 
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value)}
                className="bg-transparent text-xs font-bold outline-none cursor-pointer pr-1"
              >
                {CURRENCIES.map(c => (
                  <option key={c.code} value={c.code} className="dark:bg-gray-900">{c.code} ({c.symbol})</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => {
                console.log("Theme toggle clicked. Current mode:", isDarkMode ? "dark" : "light");
                toggleDarkMode();
              }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 active:scale-95 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm"
              aria-label="Toggle dark mode"
            >
              <motion.div
                initial={false}
                animate={{ 
                  rotate: isDarkMode ? 360 : 0,
                  scale: [1, 1.2, 1] 
                }}
                transition={{ duration: 0.5, ease: "anticipate" }}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
