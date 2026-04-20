import { Quote } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Language, TRANSLATIONS } from "../lib/i18n";

interface QuoteSectionProps {
  lang: Language;
}

const QUOTES = [
  { text: "The unexamined life is not worth living.", author: "Socrates" },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
  { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
  { text: "Happiness is not an ideal of reason, but of imagination.", author: "Immanuel Kant" },
];

export function QuoteSection({ lang }: QuoteSectionProps) {
  const [index, setIndex] = useState(0);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="quotes" className="py-20 bg-blue-50 dark:bg-blue-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-bold mb-10 text-gray-800 dark:text-gray-200">
          {lang === 'hi' ? 'महान दार्शनिकों का ज्ञान' : 'Wisdom from Great Philosophers'}
        </h2>
        
        <div className="relative h-48 md:h-32 flex items-center justify-center">
          <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-200 dark:text-blue-800/30 opacity-50 z-0" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="z-10 w-full"
            >
              <blockquote className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 italic mb-4">
                "{QUOTES[index].text}"
              </blockquote>
              <div className="text-blue-600 dark:text-blue-400 font-semibold">
                — {QUOTES[index].author}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
