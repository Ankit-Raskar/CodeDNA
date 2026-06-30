import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay, FiMaximize2, FiX } from "react-icons/fi";
import type { GithubData } from "@/lib/github.functions";
import { topLanguages } from "@/lib/personality";

type Slide = { eyebrow: string; big: string; sub: string; emoji: string; bgClass: string };

function buildSlides(data: GithubData): Slide[] {
  const year = new Date().getFullYear();
  const thisYearRepos = data.repos.filter((r) => new Date(r.created_at).getFullYear() === year);
  const lang = topLanguages(data.languageBytes, 1)[0];

  const monthCounts: Record<string, number> = {};
  for (const r of data.repos.filter((x) => new Date(x.pushed_at).getFullYear() === year)) {
    const m = new Date(r.pushed_at).toLocaleString("en", { month: "long" });
    monthCounts[m] = (monthCounts[m] || 0) + 1;
  }
  const bestMonth = Object.entries(monthCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

  const activeDays = new Set(data.repos.map((r) => new Date(r.pushed_at).toDateString())).size;
  const starsThisYear = thisYearRepos.reduce((s, r) => s + r.stargazers_count, 0);

  return [
    { eyebrow: "This year", big: `${thisYearRepos.length}`, sub: `repositories created in ${year}`, emoji: "📦", bgClass: "from-blue-600 via-indigo-800 to-purple-900" },
    { eyebrow: "Favorite language", big: lang?.name || "—", sub: `${lang?.pct ?? 0}% of your code`, emoji: "💻", bgClass: "from-fuchsia-600 via-pink-700 to-rose-900" },
    { eyebrow: "Active days", big: `${activeDays}`, sub: `days you pushed code`, emoji: "📅", bgClass: "from-emerald-500 via-teal-700 to-cyan-900" },
    { eyebrow: "Most productive month", big: bestMonth, sub: `you shipped the most then`, emoji: "🔥", bgClass: "from-orange-500 via-red-700 to-rose-900" },
    { eyebrow: "Stars earned", big: (starsThisYear || data.totals.stars).toLocaleString(), sub: "stars on your work", emoji: "⭐", bgClass: "from-amber-400 via-yellow-600 to-orange-800" },
  ];
}

const SLIDE_MS = 5000;

export function Wrapped({ data }: { data: GithubData }) {
  const slides = buildSlides(data);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fs, setFs] = useState(false);

  useEffect(() => {
    setProgress(0);
    if (paused) return;
    const start = Date.now();
    const id = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / SLIDE_MS);
      setProgress(p);
      if (p >= 1) setI((x) => (x + 1) % slides.length);
    }, 40);
    return () => clearInterval(id);
  }, [i, paused, slides.length]);

  const go = (d: number) => setI((p) => (p + d + slides.length) % slides.length);
  const s = slides[i];

  useEffect(() => {
    if (!fs) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); go(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      else if (e.key === "Escape") setFs(false);
      else if (e.key.toLowerCase() === "p") setPaused((p) => !p);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [fs, slides.length]);

  const SlideCanvas = (
    <div className={fs ? "relative h-full w-full max-w-[min(720px,90vw)]" : "relative mx-auto max-w-3xl"}>
      {/* Stories-style progress bars */}
      <div className={`absolute inset-x-6 z-20 flex gap-2 ${fs ? "top-8" : "top-6"}`}>
        {slides.map((_, j) => (
          <div key={j} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/20 backdrop-blur-sm">
            <div
              className="h-full rounded-full bg-white transition-[width] ease-linear"
              style={{ width: j < i ? "100%" : j === i ? `${progress * 100}%` : "0%" }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={
            fs
              ? `relative aspect-[9/16] h-[min(90vh,800px)] w-auto overflow-hidden rounded-[40px] bg-gradient-to-br ${s.bgClass} text-foreground shadow-2xl`
              : `relative aspect-[9/14] max-h-[78vh] overflow-hidden rounded-[40px] bg-gradient-to-br ${s.bgClass} text-foreground shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:aspect-[16/10]`
          }
        >
          {/* Animated Blob Backgrounds */}
          <motion.div
            className="absolute -top-[30%] -left-[30%] w-[160%] h-[160%] rounded-full opacity-60 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

          <motion.div
            key={`emoji-${i}`}
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 0.15, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="pointer-events-none absolute -right-12 -top-12 text-[22rem] leading-none drop-shadow-2xl md:-right-8 md:-top-8"
          >
            {s.emoji}
          </motion.div>

          <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="mb-auto mt-16"
            >
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.4em] text-foreground backdrop-blur-md md:text-sm border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                {s.eyebrow}
              </span>
            </motion.div>

            <motion.p
              key={`big-${i}`}
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
              className={`font-display font-black leading-[0.9] tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] ${fs ? "text-[6rem] md:text-[9rem]" : "text-6xl md:text-[8rem]"}`}
              style={{ textWrap: "balance" }}
            >
              {s.big}
            </motion.p>
            <motion.p
              key={`sub-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 text-2xl font-bold text-foreground/90 drop-shadow-md md:text-4xl"
            >
              {s.sub}
            </motion.p>

            <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-foreground/60">
                codeDNA · {i + 1}/{slides.length}
              </p>
              <button
                onClick={() => setPaused((p) => !p)}
                className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-foreground backdrop-blur-md transition-all hover:bg-white/30 hover:scale-110 border border-white/20"
                aria-label={paused ? "Play" : "Pause"}
              >
                {paused ? <FiPlay className="ml-1 h-5 w-5" /> : <FiPause className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button onClick={() => go(-1)} aria-label="Previous" className={`absolute top-1/2 z-30 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-foreground transition-all hover:scale-110 hover:bg-white/20 ${fs ? "-left-20" : "left-0 md:-left-7"}`}>
        <FiChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={() => go(1)} aria-label="Next" className={`absolute top-1/2 z-30 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-foreground transition-all hover:scale-110 hover:bg-white/20 ${fs ? "-right-20" : "right-0 md:-right-7"}`}>
        <FiChevronRight className="h-6 w-6" />
      </button>

      <button aria-label="Previous tap" onClick={() => go(-1)} className="absolute inset-y-0 left-0 z-20 w-1/3 md:hidden cursor-w-resize" />
      <button aria-label="Next tap" onClick={() => go(1)} className="absolute inset-y-0 right-0 z-20 w-1/3 md:hidden cursor-e-resize" />
    </div>
  );

  return (
    <div className="relative">
      <div className="mb-8 flex justify-center">
        <button
          onClick={() => { setFs(true); setI(0); setPaused(false); }}
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-black shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
          <FiMaximize2 className="h-5 w-5 transition-transform group-hover:rotate-12" /> Play Full-Screen
        </button>
      </div>
      {!fs && SlideCanvas}

      <AnimatePresence>
        {fs && (
          <motion.div
            key="fs-wrapped"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80"
          >
            <button
              onClick={() => setFs(false)}
              aria-label="Close"
              className="absolute right-8 top-8 z-[130] grid h-14 w-14 place-items-center rounded-full bg-white/10 text-foreground backdrop-blur-xl transition-all hover:bg-white/20 hover:scale-110 border border-white/20"
            >
              <FiX className="h-6 w-6" />
            </button>
            <p className="absolute bottom-8 left-1/2 z-[130] -translate-x-1/2 text-[11px] font-bold uppercase tracking-[0.4em] text-foreground/50">
              ← → navigate · space pause · esc close
            </p>
            {SlideCanvas}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
