import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { DNABackground } from "./DNABackground";

const STEPS = [
  { emoji: "🧬", text: "Sequencing repositories", sub: "Pulling commits, stars, forks…" },
  { emoji: "⚡", text: "Analyzing coding behavior", sub: "Decoding patterns across years…" },
  { emoji: "🧠", text: "Discovering your strengths", sub: "Cross-referencing languages & topics…" },
  { emoji: "🤖", text: "Consulting AI mentor", sub: "Letting the LLM whisper insights…" },
  { emoji: "🚀", text: "Building your developer profile", sub: "Forging the trading card…" },
];
const STEP_MS = 2200;

const SNIPPETS = [
  "const dna = await sequence(profile)",
  "if (commits > 1000) badge.unlock()",
  "personality.train(github.history)",
  "ai.whisper('What kind of dev?')",
  "export default DeveloperDNA",
  "level.up({ xp: 9999 })",
  "archetype === 'Frontend Wizard'",
];

function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          initial={{
            opacity: 0,
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
          }}
          animate={{
            y: [null, `${Math.random() * 100 - 30}vh`],
            opacity: [0, Math.random() * 0.8 + 0.2, 0],
            scale: [0, Math.random() + 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          style={{
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
            boxShadow: `0 0 ${Math.random() * 15 + 5}px rgba(255,255,255,0.9)`,
          }}
        />
      ))}
    </div>
  );
}

export function LoadingScreen({ username }: { username: string }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t0 = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - t0;
      const total = STEP_MS * STEPS.length;
      const p = Math.min(0.97, elapsed / total); // never quite finishes — real fetch ends it
      setProgress(p);
      const idx = Math.min(STEPS.length - 1, Math.floor(elapsed / STEP_MS));
      setStep(idx);
    }, 40);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <DNABackground density={1.6} />
      </div>
      {/* Radial vignette */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,6,23,0.9)_85%)]" />
      
      {/* Particles */}
      <Particles />

      {/* Animated gradient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }}
        animate={{ x: [0, 80, 0], y: [0, -40, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }}
        animate={{ x: [0, -60, 0], y: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating code snippets */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {SNIPPETS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: [0, 0.55, 0], y: -160 }}
            transition={{ duration: 7, delay: i * 1.1, repeat: Infinity, ease: "easeOut" }}
            className="absolute font-mono text-xs text-cyan-300/70"
            style={{ left: `${10 + (i * 17) % 70}%`, top: `${60 + (i * 11) % 30}%` }}
          >
            {s}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-6 w-full max-w-2xl rounded-[36px] border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl md:p-14">
        {/* DNA helix loader */}
        <div className="relative mx-auto mb-10 h-40 w-40">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {Array.from({ length: 18 }).map((_, i) => {
              const a = (i / 18) * Math.PI * 2;
              const r = 70;
              const x = 80 + Math.cos(a) * r - 8;
              const y = 80 + Math.sin(a) * r - 8;
              return (
                <motion.span
                  key={i}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.6, delay: i * 0.06, repeat: Infinity }}
                  className="absolute h-4 w-4 rounded-full"
                  style={{
                    left: x, top: y,
                    background: i % 2 ? "#06B6D4" : "#A855F7",
                    boxShadow: `0 0 18px ${i % 2 ? "#06B6D4" : "#A855F7"}`,
                  }}
                />
              );
            })}
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 grid place-items-center text-5xl"
          >
            🧬
          </motion.div>
        </div>

        <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-cyan-300/80">
          Developer DNA · Sequencing
        </p>
        <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">
          Decoding{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            @{username}
          </span>
        </h2>
        <p className="mt-2 text-sm text-foreground/60">Reading the developer genome — this takes a few seconds.</p>

        <div className="mt-10 h-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center justify-center gap-1"
            >
              <div className="flex items-center gap-3 text-lg font-semibold">
                <span className="text-2xl">{STEPS[step].emoji}</span>
                <span>{STEPS[step].text}</span>
              </div>
              <p className="text-xs text-foreground/50">{STEPS[step].sub}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stage dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {STEPS.map((_, j) => (
            <div
              key={j}
              className="h-1.5 flex-1 max-w-[64px] overflow-hidden rounded-full bg-white/10"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 transition-all duration-300"
                style={{ width: j < step ? "100%" : j === step ? "60%" : "0%" }}
              />
            </div>
          ))}
        </div>

        {/* Master progress bar */}
        <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 transition-all duration-200"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
          <div className="absolute inset-0 shine opacity-40" />
        </div>
        <div className="mt-2 text-right text-[10px] font-mono uppercase tracking-widest text-foreground/40">
          {Math.round(progress * 100).toString().padStart(2, "0")}% · stage {step + 1}/{STEPS.length}
        </div>
      </div>
    </main>
  );
}
