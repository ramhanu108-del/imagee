import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Timer } from "lucide-react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center gap-8 py-4">
      <div className="relative flex items-center justify-center">
        <div className="text-6xl md:text-8xl font-mono font-black tracking-tighter tabular-nums text-blue-600 dark:text-blue-400">
          {formatTime(time)}
        </div>
        <Timer className="absolute -top-12 opacity-10 w-24 h-24 text-gray-400" />
      </div>

      <div className="flex gap-4 w-full">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-lg transition-all ${
            isRunning 
            ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 hover:bg-amber-200" 
            : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
          }`}
        >
          {isRunning ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
          {isRunning ? "Pause" : "Start"}
        </button>
        
        <button
          onClick={() => { setIsRunning(false); setTime(0); }}
          className="px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl transition-all"
        >
          <RotateCcw className="w-6 h-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
}
