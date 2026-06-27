import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { GithubData } from "@/lib/github.functions";
import { topLanguages } from "@/lib/personality";

const COLORS = ["#6366F1", "#06B6D4", "#8B5CF6", "#F59E0B", "#22C55E", "#EF4444", "#EC4899", "#0EA5E9"];

export function LanguageBubbles({ data }: { data: GithubData }) {
  const langs = useMemo(() => topLanguages(data.languageBytes, 8), [data.languageBytes]);
  const [hover, setHover] = useState<string | null>(null);

  // Pack bubbles in a row using simple physics-like layout
  const W = 720, H = 320;
  const positions = useMemo(() => {
    const placed: { x: number; y: number; r: number; lang: typeof langs[0]; color: string }[] = [];
    const max = Math.max(1, ...langs.map((l) => l.pct));
    langs.forEach((l, i) => {
      const r = 24 + (l.pct / max) * 70;
      // deterministic pseudo-random position
      const seed = (i * 9301 + 49297) % 233280;
      const rx = (seed / 233280) * (W - r * 2) + r;
      const ry = ((seed * 31) % 233280) / 233280 * (H - r * 2) + r;
      placed.push({ x: rx, y: ry, r, lang: l, color: COLORS[i % COLORS.length] });
    });
    // simple separation pass
    for (let pass = 0; pass < 60; pass++) {
      for (let i = 0; i < placed.length; i++) {
        for (let j = i + 1; j < placed.length; j++) {
          const a = placed[i], b = placed[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
          const overlap = a.r + b.r + 6 - d;
          if (overlap > 0) {
            const ux = dx / d, uy = dy / d;
            a.x -= (ux * overlap) / 2;
            a.y -= (uy * overlap) / 2;
            b.x += (ux * overlap) / 2;
            b.y += (uy * overlap) / 2;
          }
        }
        placed[i].x = Math.max(placed[i].r, Math.min(W - placed[i].r, placed[i].x));
        placed[i].y = Math.max(placed[i].r, Math.min(H - placed[i].r, placed[i].y));
      }
    }
    return placed;
  }, [langs]);

  return (
    <div className="card-soft relative overflow-hidden rounded-3xl p-6 md:p-8">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h3 className="font-display text-xl font-bold">Language Bubbles</h3>
          <p className="text-sm text-muted-foreground">
            Each bubble is a language. Bigger = more of your code.
          </p>
        </div>
        {hover && (
          <motion.div
            key={hover}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-full bg-muted px-3 py-1 text-xs font-semibold"
          >
            {hover}
          </motion.div>
        )}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-[300px] w-full md:h-[360px]">
        {positions.map((p, i) => (
          <g key={p.lang.name} onMouseEnter={() => setHover(`${p.lang.name} · ${p.lang.pct}%`)} onMouseLeave={() => setHover(null)} style={{ cursor: "pointer" }}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill={p.color}
              fillOpacity={0.18}
              stroke={p.color}
              strokeWidth={2}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 140 }}
              whileHover={{ scale: 1.08 }}
              style={{ originX: `${p.x}px`, originY: `${p.y}px`, filter: `drop-shadow(0 4px 16px ${p.color}55)` }}
            />
            <text
              x={p.x}
              y={p.y - 2}
              textAnchor="middle"
              className="font-display text-sm font-bold"
              fill={p.color}
              style={{ pointerEvents: "none" }}
            >
              {p.lang.name}
            </text>
            <text
              x={p.x}
              y={p.y + 14}
              textAnchor="middle"
              className="text-[10px] font-semibold"
              fill={p.color}
              opacity={0.85}
              style={{ pointerEvents: "none" }}
            >
              {p.lang.pct}%
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
