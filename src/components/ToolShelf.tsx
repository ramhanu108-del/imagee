import React from 'react';
import { motion } from 'motion/react';
import { Language, TRANSLATIONS } from '../lib/i18n';

interface ToolShelfProps {
  title: string;
  tools: any[];
  onSelectTool: (tool: any) => void;
  lang: Language;
}

export function ToolShelf({ title, tools, onSelectTool, lang }: ToolShelfProps) {
  const t = TRANSLATIONS[lang];

  if (tools.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-black">{title}</h2>
      </div>
      <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const name = t.tools[tool.nameKey as keyof typeof t.tools];
          
          return (
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              key={`${title}-${tool.id}`}
              onClick={() => onSelectTool(tool)}
              className="flex-shrink-0 w-64 p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm line-clamp-1">{name}</h3>
              </div>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                {tool.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
