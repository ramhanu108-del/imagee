import React from "react";

interface AdPlaceholderProps {
  id: string;
  className?: string;
  type?: 'banner' | 'in-grid' | 'sidebar' | 'content';
}

export function AdPlaceholder({ id, className = "", type = 'banner' }: AdPlaceholderProps) {
  const getSizing = () => {
    switch (type) {
      case 'banner': return 'min-h-[90px] md:min-h-[250px] w-full';
      case 'sidebar': return 'min-h-[600px] w-full hidden lg:block';
      case 'in-grid': return 'min-h-[250px] w-full';
      case 'content': return 'min-h-[100px] w-full my-8';
      default: return 'min-h-[90px] w-full';
    }
  };

  return (
    <div 
      id={id} 
      className={`bg-gray-100/50 dark:bg-gray-800/30 border-2 border-dashed border-gray-200 dark:border-gray-700/50 rounded-2xl flex items-center justify-center overflow-hidden transition-all ${getSizing()} ${className}`}
    >
      <div className="flex flex-col items-center gap-1 opacity-20">
        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Sponsored Content</div>
        <div className="text-xs font-bold text-gray-400">AdSlot: {id}</div>
      </div>
    </div>
  );
}
