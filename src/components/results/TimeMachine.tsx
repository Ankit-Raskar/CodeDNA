import { motion } from "framer-motion";
import { FiClock, FiTarget, FiZap, FiCode } from "react-icons/fi";
import type { GithubData } from "@/lib/github.functions";
import { calcLevel, topLanguages } from "@/lib/personality";

export function TimeMachine({ data }: { data: GithubData }) {
  const currentLevel = calcLevel(data);
  const futureLevel = currentLevel.level + 12;
  const futureRepos = Math.floor(data.totals.repos * 1.4 + 5);
  const topLangs = topLanguages(data.languageBytes, 3);
  
  const futureRole = topLangs.some(l => l.name.includes("Python") || l.name.includes("Jupyter")) 
    ? "AI Systems Architect"
    : topLangs.some(l => l.name.includes("TypeScript") || l.name.includes("JavaScript"))
      ? "Principal Full-Stack Engineer"
      : topLangs.some(l => l.name.includes("Rust") || l.name.includes("Go") || l.name.includes("C++"))
        ? "Core Systems Engineer"
        : "Senior Developer";

  const technologiesToLearn = [
    "WebAssembly",
    "Distributed Edge Computing",
    "Agentic AI Workflows",
    "Advanced System Design"
  ];

  return (
    <div className="card-soft relative overflow-hidden rounded-[40px] p-8 md:p-12 text-slate-900 border border-indigo-100 shadow-2xl bg-white/70 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-50 pointer-events-none" />
      
      {/* Decorative timeline background */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-200 to-transparent -translate-x-1/2 opacity-50 hidden md:block" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ rotate: -180, opacity: 0, scale: 0 }}
          whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg mb-6"
        >
          <FiClock className="h-8 w-8" />
        </motion.div>
        
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-500 mb-2">Developer Time Machine</h2>
        <h3 className="font-display text-4xl font-black mb-12 text-center text-slate-800 tracking-tight">You in One Year</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 bg-white/60 rounded-3xl p-6 shadow-sm border border-slate-100"
          >
            <div className="flex items-center gap-3 text-indigo-600 mb-2">
              <FiTarget className="h-6 w-6" />
              <h4 className="font-bold uppercase tracking-widest text-xs">Future Role</h4>
            </div>
            <p className="text-3xl font-black text-slate-800 leading-tight">{futureRole}</p>
            
            <div className="mt-4 pt-4 border-t border-slate-200/60">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Projected Stats</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-600 font-semibold">Level</span>
                <span className="text-xl font-black text-indigo-600">{futureLevel}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-semibold">Repositories</span>
                <span className="text-xl font-black text-purple-600">{futureRepos}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 bg-slate-900 rounded-3xl p-6 shadow-xl text-white border border-slate-800"
          >
            <div className="flex items-center gap-3 text-cyan-400 mb-2">
              <FiZap className="h-6 w-6" />
              <h4 className="font-bold uppercase tracking-widest text-xs text-cyan-300">New Skills Acquired</h4>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {technologiesToLearn.map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 mb-3">
                <FiCode className="text-purple-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-purple-300">Suggested Project</span>
              </div>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                A globally distributed real-time dashboard powered by AI agents, built with your top languages.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
