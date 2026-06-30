import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiDownload, FiShare2, FiCopy, FiLinkedin } from "react-icons/fi";
import type { GithubData } from "@/lib/github.functions";
import type { AIInsights } from "@/lib/groq.functions";
import { topLanguages } from "@/lib/personality";
import type { Archetype } from "@/lib/archetype";
import { RARITY_STYLE } from "@/lib/archetype";
import { toast } from "sonner";

export function TradingCard({
  data,
  insights,
  level,
  archetype,
  badges,
}: {
  data: GithubData;
  insights: AIInsights;
  level: number;
  archetype: Archetype;
  badges: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const langs = topLanguages(data.languageBytes, 4);
  const r = RARITY_STYLE[archetype.rarity];

  // tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 180, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 180, damping: 16 });
  const shineX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);

  const onMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const exportPng = async (copy = false) => {
    if (!ref.current) return false;
    setBusy(true);
    try {
      const htmlToImage = await import("html-to-image");
      
      const blob = await htmlToImage.toBlob(ref.current, { backgroundColor: 'transparent', pixelRatio: 2 });
      if (!blob) throw new Error("Failed to generate blob");

      if (copy) {
        try { 
          await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]); 
          toast.success("Image copied to clipboard!");
          return true;
        } catch (err) { 
          console.error("Clipboard write failed:", err); 
          toast.error("Failed to copy image. You may need to grant clipboard permissions.");
          return false;
        }
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = `codedna-${data.user.login}.png`;
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 100);
        return true;
      }
    } catch (error) {
      console.error("Failed to export card:", error);
      toast.error("Failed to generate image.");
      return false;
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
      toast.success("Link copied to clipboard!");
    }
  };

  const linkedin = async () => {
    const success = await exportPng(true);
    if (success) {
      const text = encodeURIComponent(`Check out my CodeDNA profile! ${insights.tagline}\n\n${window.location.href}`);
      window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${text}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div>
      <div className="flex justify-center" style={{ perspective: 1400 }}>
        <motion.div
          ref={cardRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
          className="w-full max-w-sm"
        >
          {/* Card */}
          <div
            ref={ref}
            className="relative aspect-[5/7] w-full overflow-hidden rounded-[28px] p-1"
            style={{
              backgroundImage: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
              boxShadow: `0 40px 90px -20px ${r.glow}, 0 0 0 1px ${r.color}55`,
            }}
          >
            <div
              className="relative h-full w-full overflow-hidden rounded-[24px] text-white"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 0%, ${archetype.color}cc, transparent 55%), radial-gradient(circle at 80% 100%, ${archetype.color2}cc, transparent 55%), linear-gradient(160deg, #0F172A, #1E1B4B)`,
              }}
            >
              {/* Holographic shine */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 mix-blend-overlay"
                style={{
                  background: `linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.45) 50%, transparent 65%)`,
                  backgroundSize: "200% 100%",
                  backgroundPositionX: shineX,
                }}
              />
              {/* Noise texture overlay */}
              <div
                aria-hidden
                className="bg-noise pointer-events-none absolute inset-0 mix-blend-overlay opacity-50"
              />

              {/* Header */}
              <div className="relative flex items-center justify-between p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
                  🧬 CodeDNA
                </span>
                <span
                  className="rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest"
                  style={{
                    background: `linear-gradient(135deg, ${r.color}, ${archetype.color2})`,
                    boxShadow: `0 0 18px ${r.glow}`,
                  }}
                >
                  {archetype.rarity}
                </span>
              </div>

              {/* Avatar */}
              <div className="relative mx-auto h-32 w-32" style={{ transform: "translateZ(40px)" }}>
                <div
                  className="absolute inset-0 rounded-full p-1"
                  style={{
                    background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})`,
                    boxShadow: `0 0 40px ${archetype.color}80`,
                  }}
                >
                  <img
                    src={`${data.user.avatar_url}${data.user.avatar_url.includes('?') ? '&' : '?'}not-from-cache`}
                    alt={data.user.login}
                    crossOrigin="anonymous"
                    className="h-full w-full rounded-full border-4 border-white object-cover"
                  />
                </div>
                <div className="absolute -right-2 -bottom-2 grid h-10 w-10 place-items-center rounded-full bg-white text-xl shadow-xl">
                  {archetype.emoji}
                </div>
              </div>

              {/* Name/Class */}
              <div className="relative mt-4 px-5 text-center" style={{ transform: "translateZ(30px)" }}>
                <p className="font-display text-xl font-black leading-tight">{data.user.name || data.user.login}</p>
                <p className="text-[11px] text-white/70">@{data.user.login}</p>
                <p
                  className="mt-3 font-display text-2xl font-black"
                  style={{
                    background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {archetype.name}
                </p>
              </div>

              {/* Stats */}
              <div className="relative mx-5 mt-5 grid grid-cols-4 gap-1.5 text-center text-[11px]">
                <Stat label="LVL" v={level} />
                <Stat label="PWR" v={archetype.power} />
                <Stat label="REPO" v={data.totals.repos} />
                <Stat label="★" v={data.totals.stars} />
              </div>

              {/* Languages */}
              <div className="relative mx-5 mt-3">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/60">Top stack</p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {langs.map((l) => (
                    <span key={l.name} className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold backdrop-blur">
                      {l.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Move / tagline */}
              <div className="absolute inset-x-5 bottom-4">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/60">Signature move</p>
                <p className="mt-1 line-clamp-2 text-xs italic text-white/90">&ldquo;{insights.tagline}&rdquo;</p>
                <div className="mt-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-white/50">
                  <span>codedna · {new Date().getFullYear()}</span>
                  <span>{r.label}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => exportPng(false)} disabled={busy}
          className="glow-primary grad-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60">
          <FiDownload /> {busy ? "Rendering…" : "Download card"}
        </motion.button>
        <button onClick={() => exportPng(true)} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium hover:bg-muted">
          <FiCopy /> Copy image
        </button>
        <button onClick={linkedin} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium hover:bg-muted">
          <FiLinkedin /> LinkedIn
        </button>
        <button onClick={share} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium hover:bg-muted">
          <FiShare2 /> Share link
        </button>
      </div>

      {/* unused badges count to satisfy lint if needed */}
      <p className="sr-only">{badges.length} badges</p>
    </div>
  );
}

function Stat({ label, v }: { label: string; v: number }) {
  return (
    <div className="rounded-lg bg-white/15 p-1.5 backdrop-blur">
      <p className="font-display text-sm font-black">{v.toLocaleString()}</p>
      <p className="text-[8px] font-bold uppercase tracking-widest text-white/70">{label}</p>
    </div>
  );
}
