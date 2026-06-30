import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiRefreshCw, FiCopy, FiCheck } from "react-icons/fi";
import type { AIInsights } from "@/lib/groq.functions";

export function AIFeedback({ insights }: { insights: AIInsights }) {
  const [mode, setMode] = useState<"roast" | "encourage">("roast");
  
  // Local state to keep track of the current item index to show
  const [roastIndex, setRoastIndex] = useState(0);
  const [encourageIndex, setEncourageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const roasts = insights.roasts || ["You write code like a caffeinated squirrel."];
  const encouragements = insights.encouragement || ["Your code structure shows great promise."];

  const currentText = mode === "roast" 
    ? roasts[roastIndex % roasts.length] 
    : encouragements[encourageIndex % encouragements.length];

  const handleNext = () => {
    if (mode === "roast") {
      setRoastIndex(prev => prev + 1);
    } else {
      setEncourageIndex(prev => prev + 1);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-soft relative overflow-hidden rounded-[32px] p-8 mt-12 bg-white/50">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-indigo-50/50 to-purple-50/50 mix-blend-overlay" />
      
      <div className="relative flex flex-col items-center z-10">
        
        {/* Toggle Buttons */}
        <div className="flex bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-slate-200/50 mb-8 shadow-sm">
          <button 
            onClick={() => setMode("roast")}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
              mode === "roast" 
                ? "bg-rose-500 text-foreground shadow-md" 
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Roast Me 🔥
          </button>
          <button 
            onClick={() => setMode("encourage")}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
              mode === "encourage" 
                ? "bg-indigo-500 text-foreground shadow-md" 
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Encourage Me 💙
          </button>
        </div>

        {/* Content Box */}
        <div className="w-full max-w-2xl min-h-[160px] flex items-center justify-center p-8 rounded-3xl bg-white shadow-inner border border-slate-100 mb-8 relative">
          {mode === "roast" && (
             <div className="absolute top-4 left-4 text-4xl opacity-10">🔥</div>
          )}
          {mode === "encourage" && (
             <div className="absolute top-4 right-4 text-4xl opacity-10">💙</div>
          )}
          
          <AnimatePresence mode="wait">
            <motion.p
              key={currentText}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              className="text-2xl md:text-3xl font-display font-black text-center text-slate-800 tracking-tight leading-tight"
            >
              "{currentText}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleNext}
            className="group flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
          >
            <FiRefreshCw className="transition-transform group-hover:rotate-180 duration-500" />
            Generate More
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
          >
            {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
