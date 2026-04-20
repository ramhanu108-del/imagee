import React, { useState } from 'react';
import { RefreshCw, Copy, Check, User, Heart, Star, Flame, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function InstaBioGenerator() {
  const [name, setName] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [bios, setBios] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const stylishChars: Record<string, string> = {
    'a': 'α', 'b': 'в', 'c': '¢', 'd': '∂', 'e': 'є', 'f': 'ƒ', 'g': 'g', 'h': 'н', 'i': 'ι', 'j': 'נ',
    'k': 'к', 'l': 'ℓ', 'm': 'м', 'n': 'и', 'o': 'σ', 'p': 'ρ', 'q': 'q', 'r': 'я', 's': 'ѕ', 't': 'т',
    'u': 'υ', 'v': 'ν', 'w': 'ω', 'x': 'χ', 'y': 'у', 'z': 'z',
    'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I', 'J': 'J'
  };

  const applyStyle = (text: string) => {
    return text.split('').map(char => stylishChars[char] || char).join('');
  };

  const generateBios = () => {
    setIsGenerating(true);
    setBios([]);
    
    setTimeout(() => {
      const results: string[] = [];
      const baseName = name.trim() || 'Your Name';
      const baseHobbies = hobbies.trim() || 'Travel | Photography | Vibes';
      const items = baseHobbies.split(/[|,]/).map(i => i.trim());

      // Variation 1: Minimalist Symbols
      results.push(`✨ ${baseName} ✨\n${items.join(' • ')}\nDM for Collabs 📩\n📍 Earth`);

      // Variation 2: Fun & Energetic
      results.push(`🔥 ${applyStyle(baseName)} 🔥\nLiving my best life 💫\n${items.map(i => `📍 ${i}`).join('\n')}\n👇 Check my latest post`);

      // Variation 3: Professional & Clean
      results.push(`${baseName.toUpperCase()}\n${baseHobbies}\nBeliever 🕊️ | Dreamer 🌌\nStay Positive ⚡`);

      // Variation 4: Creative Symbols
      results.push(`╔══════════════╗\n  ${baseName}\n╚══════════════╝\n${items.map(i => `⚡ ${i}`).join('\n')}\nKeep Shining ✨`);

      // Variation 5: Aesthetic
      results.push(`☾ ${applyStyle(baseName)} ☽\n${items.join(' ⬩ ')}\nSpread Love ❤️\nEnjoy the journey 🌊`);

      setBios(results);
      setIsGenerating(false);
    }, 800);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Alex"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all font-sans"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
              Hobbies / Interests
            </label>
            <div className="relative">
              <Heart className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Travel, Gym, NFT"
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all font-sans"
              />
            </div>
          </div>
        </div>

        <button
          onClick={generateBios}
          disabled={isGenerating}
          className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-rose-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isGenerating ? (
            <RefreshCw className="w-5 h-5 animate-spin" />
          ) : (
            <Sparkles className="w-5 h-5" />
          )}
          {bios.length > 0 ? 'Generate More Bios' : 'Generate Stylish Bios'}
        </button>
      </div>

      {bios.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {bios.map((bio, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-start font-mono gap-4 group hover:border-pink-500 transition-colors shadow-sm"
            >
              <pre className="flex-1 whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-sans">
                {bio}
              </pre>
              <button
                onClick={() => copyToClipboard(bio, idx)}
                className="shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-900/10 hover:text-pink-600 transition-all text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Bio
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
