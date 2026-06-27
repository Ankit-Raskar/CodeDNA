import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay, FiMaximize2, FiX } from "react-icons/fi";
import type { GithubData } from "@/lib/github.functions";
import { topLanguages } from "@/lib/personality";

type Slide = { eyebrow: string; big: string; sub: string; emoji: string; grad: string };

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
    { eyebrow: "This year", big: `${thisYearRepos.length}`, sub: `repositories created in ${year}`, emoji: "📦", grad: "from-indigo-500 via-purple-500 to-pink-500" },
    { eyebrow: "Favorite language", big: lang?.name || "—", sub: `${lang?.pct ?? 0}% of your code`, emoji: "💻", grad: "from-cyan-500 via-blue-500 to-indigo-600" },
    { eyebrow: "Active days", big: `${activeDays}`, sub: `days you pushed code`, emoji: "📅", grad: "from-emerald-400 via-teal-500 to-cyan-500" },
    { eyebrow: "Most productive month", big: bestMonth, sub: `you shipped the most then`, emoji: "🔥", grad: "from-orange-500 via-red-500 to-pink-500" },
    { eyebrow: "Stars earned", big: (starsThisYear || data.totals.stars).toLocaleString(), sub: "stars on your work", emoji: "⭐", grad: "from-amber-400 via-orange-500 to-rose-500" },
  ];
}

const SLIDE_MS = 4200;

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
      <div className={`absolute inset-x-6 z-10 flex gap-1.5 ${fs ? "top-6" : "top-4"}`}>
        {slides.map((_, j) => (
          <div key={j} className="h-1 flex-1 overflow-hidden rounded-full bg-white/25">
            <div
              className="h-full rounded-full bg-white transition-[width]"
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
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.5 }}
          className={
            fs
              ? `relative aspect-[9/16] h-[min(90vh,800px)] w-auto overflow-hidden rounded-[36px] bg-gradient-to-br ${s.grad} p-10 text-white shadow-2xl`
              : `relative aspect-[9/14] max-h-[78vh] overflow-hidden rounded-[36px] bg-gradient-to-br ${s.grad} p-8 text-white shadow-2xl md:aspect-[16/10] md:p-16`
          }
        >
          <motion.div
            key={`emoji-${i}`}
            initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 0.18, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-none absolute -right-12 -top-16 text-[18rem] leading-none md:-right-8 md:-top-8"
          >
            {s.emoji}
          </motion.div>
          <motion.div
            className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-white/15 blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative flex h-full flex-col justify-end">
            <motion.p
              key={`e-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-white/80 md:text-sm"
            >
              {s.eyebrow}
            </motion.p>
            <motion.p
              key={`big-${i}`}
              initial={{ scale: 0.7, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 14 }}
              className={`mt-3 font-display font-black leading-[0.95] ${fs ? "text-[8rem] md:text-[12rem]" : "text-7xl md:text-[10rem]"}`}
            >
              {s.big}
            </motion.p>
            <motion.p
              key={`sub-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-5 text-xl font-medium text-white/90 md:text-3xl"
            >
              {s.sub}
            </motion.p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/50">
              codeDNA · {i + 1}/{slides.length}
            </p>

            <button
              onClick={() => setPaused((p) => !p)}
              className="absolute right-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25"
              aria-label={paused ? "Play" : "Pause"}
            >
              {paused ? <FiPlay /> : <FiPause />}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <button onClick={() => go(-1)} aria-label="Previous" className={`absolute top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white shadow-lg hover:bg-muted ${fs ? "-left-16" : "left-0 md:-left-6"}`}>
        <FiChevronLeft />
      </button>
      <button onClick={() => go(1)} aria-label="Next" className={`absolute top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white shadow-lg hover:bg-muted ${fs ? "-right-16" : "right-0 md:-right-6"}`}>
        <FiChevronRight />
      </button>

      <button aria-label="Previous tap" onClick={() => go(-1)} className="absolute inset-y-0 left-0 z-0 w-1/3 md:hidden" />
      <button aria-label="Next tap" onClick={() => go(1)} className="absolute inset-y-0 right-0 z-0 w-1/3 md:hidden" />
    </div>
  );

  return (
    <div className="relative">
      <div className="mb-4 flex justify-center">
        <button
          onClick={() => { setFs(true); setI(0); setPaused(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800"
        >
          <FiMaximize2 /> Play full-screen Wrapped
        </button>
      </div>
      {!fs && SlideCanvas}

      <AnimatePresence>
        {fs && (
          <motion.div
            key="fs-wrapped"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black"
          >
            <button
              onClick={() => setFs(false)}
              aria-label="Close"
              className="absolute right-5 top-5 z-[130] grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
            >
              <FiX />
            </button>
            <p className="absolute bottom-5 left-1/2 z-[130] -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/40">
              ← → arrow keys · space pause · esc close
            </p>
            {SlideCanvas}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
