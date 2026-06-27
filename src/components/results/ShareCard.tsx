import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiShare2, FiCopy, FiLinkedin } from "react-icons/fi";
import type { GithubData } from "@/lib/github.functions";
import type { AIInsights } from "@/lib/groq.functions";
import { topLanguages } from "@/lib/personality";

export function ShareCard({ data, insights, level, archetype, badges }: {
  data: GithubData; insights: AIInsights; level: number; archetype: string; badges: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const langs = topLanguages(data.languageBytes, 4);

  const exportPng = async (copy = false) => {
    if (!ref.current) return;
    setBusy(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(ref.current, { backgroundColor: null, scale: 2, useCORS: true });
      if (copy) {
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          try { await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]); } catch {}
        });
      } else {
        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = url;
        a.download = `codedna-${data.user.login}.png`;
        a.click();
      }
    } finally {
      setBusy(false);
    }
  };

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: `CodeDNA — ${data.user.login}`, url }); } catch {}
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  const linkedin = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
  };

  return (
    <div>
      <div className="flex justify-center">
        <div ref={ref} className="relative w-full max-w-md overflow-hidden rounded-[28px] p-7 text-white" style={{ backgroundImage: "linear-gradient(135deg,#6366F1 0%,#8B5CF6 50%,#06B6D4 100%)" }}>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.25em] text-white/90">
              <span>🧬 CodeDNA</span>
              <span className="rounded-full bg-white/20 px-2.5 py-1">Lvl {level}</span>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <img src={data.user.avatar_url} crossOrigin="anonymous" alt="" className="h-16 w-16 rounded-2xl border-2 border-white/40 shadow-xl" />
              <div className="min-w-0">
                <p className="truncate font-display text-xl font-bold">{data.user.name || data.user.login}</p>
                <p className="truncate text-xs text-white/80">@{data.user.login}</p>
              </div>
            </div>
            <p className="mt-6 font-display text-3xl font-black leading-tight">{archetype}</p>
            <p className="mt-1 text-sm text-white/85">{insights.tagline}</p>

            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <Mini label="Repos" v={data.totals.repos} />
              <Mini label="Stars" v={data.totals.stars} />
              <Mini label="Langs" v={Object.keys(data.languageBytes).length} />
            </div>

            <div className="mt-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Top languages</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {langs.map((l) => (
                  <span key={l.name} className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium backdrop-blur">
                    {l.name} <span className="text-white/70">{l.pct}%</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Top badges</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {badges.slice(0, 4).map((b) => (
                  <span key={b} className="rounded-full bg-white/25 px-2.5 py-1 text-xs font-semibold backdrop-blur">{b}</span>
                ))}
              </div>
            </div>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">codedna.app · your dna decoded</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => exportPng(false)} disabled={busy}
          className="glow-primary grad-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60">
          <FiDownload /> {busy ? "Rendering…" : "Download PNG"}
        </motion.button>
        <button onClick={() => exportPng(true)} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium hover:bg-muted">
          <FiCopy /> Copy image
        </button>
        <button onClick={linkedin} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium hover:bg-muted">
          <FiLinkedin /> Share on LinkedIn
        </button>
        <button onClick={share} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium hover:bg-muted">
          <FiShare2 /> Share link
        </button>
      </div>
    </div>
  );
}

function Mini({ label, v }: { label: string; v: number }) {
  return (
    <div className="rounded-xl bg-white/20 p-2.5 backdrop-blur">
      <p className="font-display text-lg font-black">{v.toLocaleString()}</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">{label}</p>
    </div>
  );
}
