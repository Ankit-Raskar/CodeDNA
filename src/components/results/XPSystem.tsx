import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Achievement } from "@/lib/personality";

function AnimatedCounter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let animationFrame: number;
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
}

export function XPSystem({ level, pct, xp, achievements, archetype }: {
  level: number; pct: number; xp: number; achievements: Achievement[]; archetype: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f172a]/80 p-8 shadow-2xl backdrop-blur-xl md:p-12">
      <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 opacity-50" />
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
      <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-[80px]" />

      <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">Developer Class</p>
          <h3 className="mt-2 font-display text-4xl font-black text-white drop-shadow-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{archetype}</h3>
          <p className="mt-3 text-sm font-medium text-white/60"><AnimatedCounter value={xp} /> XP earned</p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative grid h-32 w-32 place-items-center rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-[0_0_40px_rgba(99,102,241,0.5)] border border-white/20"
        >
          <div className="absolute inset-0 rounded-3xl bg-black/20" />
          <div className="relative text-center leading-none">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Level</p>
            <p className="font-display text-5xl font-black drop-shadow-md">{level}</p>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-10">
        <div className="mb-3 flex justify-between text-xs font-bold uppercase tracking-wider text-white/70">
          <span>Level {level}</span>
          <span>Level {level + 1}</span>
        </div>
        <div className="relative h-4 overflow-hidden rounded-full bg-black/50 border border-white/10 shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
            className="relative h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
          >
            <motion.div 
              animate={{ x: ["-100%", "200%"] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2" 
            />
          </motion.div>
        </div>
        <p className="mt-3 text-right text-xs font-bold text-cyan-400"><AnimatedCounter value={pct} />% to next level</p>
      </div>

      <div className="relative z-10 mt-12">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">Achievements</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group flex items-center gap-4 rounded-2xl border p-4 text-sm transition-all duration-300 ${a.earned ? "border-amber-400/30 bg-gradient-to-br from-amber-500/10 to-transparent shadow-[0_10px_30px_-10px_rgba(251,191,36,0.3)] backdrop-blur-sm" : "border-white/5 bg-white/5 opacity-50 grayscale"}`}
            >
              <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-xl transition-transform duration-500 group-hover:rotate-12 ${a.earned ? "bg-gradient-to-br from-amber-300 to-orange-500 text-white shadow-lg border border-white/20" : "bg-black/40 text-white/30 border border-white/10"}`}>
                🏆
              </div>
              <div className="min-w-0 flex-1">
                <p className={`truncate font-bold ${a.earned ? "text-amber-100" : "text-white/50"}`}>{a.name}</p>
                <p className={`truncate text-xs mt-0.5 ${a.earned ? "text-amber-200/70" : "text-white/30"}`}>{a.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
