import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { GithubData } from "@/lib/github.functions";
import { topLanguages } from "@/lib/personality";

const NODE_COLORS = ["#6366F1", "#06B6D4", "#8B5CF6", "#F59E0B", "#22C55E", "#EF4444"];

export function DnaHelix({ data }: { data: GithubData }) {
  const nodes = useMemo(() => {
    const langs = topLanguages(data.languageBytes, 6).map((l) => l.name);
    while (langs.length < 6) langs.push(["AI", "Backend", "Design", "DevOps"][langs.length % 4]);
    return langs.slice(0, 6);
  }, [data]);

  const [hover, setHover] = useState<number | null>(null);

  const W = 600, H = 460;
  const cx = W / 2;
  const amp = 110;

  return (
    <div className="card-soft relative overflow-hidden rounded-3xl p-6 md:p-8">
      <div className="absolute -right-16 top-10 h-60 w-60 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-60 w-60 rounded-full bg-accent/15 blur-3xl" />

      <svg viewBox={`0 0 ${W} ${H}`} className="relative mx-auto h-[420px] w-full max-w-2xl">
        <defs>
          <linearGradient id="strand1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="strand2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        {/* rails */}
        {[0, 1].map((s) => {
          const pts: string[] = [];
          for (let i = 0; i <= 60; i++) {
            const t = (i / 60) * Math.PI * 3 + (s ? Math.PI : 0);
            const y = 30 + (i / 60) * (H - 60);
            const x = cx + Math.sin(t) * amp;
            pts.push(`${i === 0 ? "M" : "L"}${x},${y}`);
          }
          return <path key={s} d={pts.join(" ")} stroke={`url(#strand${s + 1})`} strokeWidth={3} fill="none" strokeLinecap="round" />;
        })}

        {/* rungs + nodes */}
        {nodes.map((label, i) => {
          const idx = i + 1;
          const t = (idx / 7) * Math.PI * 3;
          const y = 30 + (idx / 7) * (H - 60);
          const x1 = cx + Math.sin(t) * amp;
          const x2 = cx + Math.sin(t + Math.PI) * amp;
          const color = NODE_COLORS[i % NODE_COLORS.length];
          const isHover = hover === i;
          return (
            <g key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} style={{ cursor: "pointer" }}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeOpacity={0.35} strokeWidth={1.5} />
              <motion.circle
                cx={x1} cy={y} r={isHover ? 14 : 10} fill={color}
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring" }}
                style={{ filter: `drop-shadow(0 0 8px ${color})` }}
              />
              <motion.circle
                cx={x2} cy={y} r={isHover ? 14 : 10} fill="#fff" stroke={color} strokeWidth={3}
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.05, type: "spring" }}
              />
              <text x={x1 < cx ? x1 - 14 : x1 + 14} y={y + 4} textAnchor={x1 < cx ? "end" : "start"} className="font-display text-xs font-bold" fill={color}>
                {label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {nodes.map((n, i) => (
          <span key={n} className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full" style={{ background: NODE_COLORS[i % NODE_COLORS.length] }} />
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}
