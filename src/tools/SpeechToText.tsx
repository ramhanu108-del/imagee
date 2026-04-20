import React, { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Copy, Trash2 } from "lucide-react";

export default function SpeechToText() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [copied, setCopied] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event: any) => {
        let currentTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript((prev) => prev + currentTranscript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setTranscript("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const copyToClipboard = () => {
    if (!transcript) return;
    navigator.clipboard.writeText(transcript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={transcript}
          readOnly
          placeholder={isListening ? "Listening... Speak now." : "Click the button and start speaking..."}
          className={`w-full h-64 p-6 border rounded-2xl bg-white dark:bg-gray-800 dark:border-gray-700 outline-none resize-none text-lg transition-all ${isListening ? 'ring-2 ring-blue-500 border-transparent shadow-lg shadow-blue-500/10' : ''}`}
        />
        {isListening && (
          <div className="absolute top-4 right-4">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={toggleListening}
          className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-bold transition-all ${
            isListening 
            ? "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20" 
            : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
          }`}
        >
          {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          {isListening ? "Stop Listening" : "Start Voice Input"}
        </button>
      </div>

      <div className="flex justify-between items-center px-2">
        <button
          onClick={() => setTranscript("")}
          disabled={!transcript || isListening}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-red-500 transition-colors disabled:opacity-30"
        >
          <Trash2 className="w-4 h-4" /> Clear Transcript
        </button>
        <button
          onClick={copyToClipboard}
          disabled={!transcript}
          className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors disabled:opacity-30"
        >
          <Copy className={`w-4 h-4 ${copied ? "text-green-500" : ""}`} />
          {copied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
      
      <p className="text-xs text-center text-gray-400">
        Requires microphone permission. Best experimental results in Chrome.
      </p>
    </div>
  );
}
