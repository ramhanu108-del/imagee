import React, { useState } from 'react';
import { RefreshCw, Copy, Check, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function InstaUsernameGenerator() {
  const [keyword, setKeyword] = useState('');
  const [usernames, setUsernames] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const coolWords = [
    'vibes', 'daily', 'official', 'real', 'king', 'queen', 'glam', 'fit', 
    'explore', 'adventure', 'creative', 'studio', 'art', 'life', 'magic', 
    'stellar', 'luxe', 'pure', 'solo', 'world', 'hub', 'box', 'zone', 'style'
  ];

  const generateUsernames = () => {
    setIsGenerating(true);
    setUsernames([]);
    
    setTimeout(() => {
      const results: string[] = [];
      const base = keyword.trim().toLowerCase().replace(/\s+/g, '_') || 'user';
      
      for (let i = 0; i < 15; i++) {
        const randomWord = coolWords[Math.floor(Math.random() * coolWords.length)];
        const randomNumber = Math.floor(Math.random() * 99);
        const structure = Math.floor(Math.random() * 6);
        
        let name = '';
        switch (structure) {
          case 0: name = `${base}_${randomWord}`; break;
          case 1: name = `${randomWord}.${base}`; break;
          case 2: name = `${base}${randomNumber}`; break;
          case 3: name = `the_${base}_${randomWord}`; break;
          case 4: name = `${base}_hq`; break;
          case 5: name = `${randomWord}_${base}_${randomNumber}`; break;
        }
        results.push(name);
      }
      
      setUsernames(results);
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
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
              Keyword (Optional)
            </label>
            <div className="relative">
              <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Travel, Fitness, Art"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          <button
            onClick={generateUsernames}
            disabled={isGenerating}
            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <RefreshCw className="w-5 h-5" />
            )}
            {usernames.length > 0 ? 'Generate More' : 'Generate Usernames'}
          </button>
        </div>
      </div>

      {usernames.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {usernames.map((name, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 flex items-center justify-between group hover:border-blue-500 transition-colors"
            >
              <span className="font-medium text-gray-800 dark:text-gray-200">@{name}</span>
              <button
                onClick={() => copyToClipboard(name, idx)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-500"
              >
                {copiedIndex === idx ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
