import React, { useState } from 'react';
import { RefreshCw, Copy, Check, MessageCircle, Sparkles, Trophy, Laugh } from 'lucide-react';
import { motion } from 'motion/react';

type Tone = 'Funny' | 'Motivational' | 'Cool';

export default function InstaCaptionGenerator() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState<Tone>('Cool');
  const [captions, setCaptions] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const templates: Record<Tone, string[]> = {
    Funny: [
      "I'm not lazy, I'm just on energy saving mode for {topic}. 🔋",
      "Life is short, smile while you still have teeth and {topic}. 😁",
      "{topic} is the only therapy I need. (And maybe a million dollars). 💸",
      "I put the 'pro' in procrastinating {topic}. 😎",
      "Doing {topic} because adulting is hard. 🙅‍♂️",
      "My hobbies include {topic} and overthinking. 🤔",
      "If {topic} was an Olympic sport, I'd have a gold medal. 🥇",
      "Just another day of pretending to be an expert in {topic}. 🤡"
    ],
    Motivational: [
      "The only limit to your {topic} is your mind. ✨",
      "Don't stop until you're proud of your {topic}. 🔥",
      "Transforming my life through {topic}. One step at a time. 💪",
      "Your {topic} journey begins with a single step. Start today. 🌟",
      "Dream big, work hard, and master {topic}. 🚀",
      "Consistency is the key to {topic} success. 🔑",
      "Let your {topic} be your signature. ✒️",
      "Push yourself, because no one else is going to do it for your {topic}. 💥"
    ],
    Cool: [
      "Keeping it simple with {topic}. 🌊",
      "{topic} vibes only. ✌️",
      "Less talk, more {topic}. 🤫",
      "Mastering the art of {topic}. 🎨",
      "Escaping the ordinary through {topic}. 🌌",
      "Living my best life with {topic}. 🥂",
      "Stay focused on your {topic}. 🎯",
      "Chasing sunsets and {topic}. 🌅"
    ]
  };

  const generateCaptions = () => {
    setIsGenerating(true);
    setCaptions([]);
    
    setTimeout(() => {
      const selectedTemplates = templates[tone];
      const randomized = [...selectedTemplates].sort(() => 0.5 - Math.random());
      const baseTopic = topic.trim() || 'this moment';
      
      const results = randomized.slice(0, 6).map(t => t.replace(/{topic}/g, baseTopic));
      setCaptions(results);
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
              What is your post about?
            </label>
            <input
              type="text"
              placeholder="e.g. travel, workout, pizza, morning"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all font-sans"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Select Tone
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Funny', 'Motivational', 'Cool'] as Tone[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`py-2.5 rounded-xl border flex items-center justify-center gap-2 transition-all font-medium ${
                    tone === t 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-500'
                  }`}
                >
                  {t === 'Funny' && <Laugh className="w-4 h-4" />}
                  {t === 'Motivational' && <Trophy className="w-4 h-4" />}
                  {t === 'Cool' && <Sparkles className="w-4 h-4" />}
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generateCaptions}
            disabled={isGenerating}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <MessageCircle className="w-5 h-5" />
            )}
            {captions.length > 0 ? 'Generate More Captions' : 'Generate Captions'}
          </button>
        </div>
      </div>

      {captions.length > 0 && (
        <div className="space-y-3">
          {captions.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col gap-2 group hover:border-blue-500 transition-colors shadow-sm"
            >
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{cap}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => copyToClipboard(cap, idx)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:text-blue-600 transition-all text-xs font-semibold text-gray-500"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-500" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Caption
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
