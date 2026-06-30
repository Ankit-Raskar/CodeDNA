import { useMemo, useState, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { GithubData } from "@/lib/github.functions";
import { topLanguages } from "@/lib/personality";

const COLORS = [
  { hex: "#6366F1", name: "indigo" },
  { hex: "#06B6D4", name: "cyan" },
  { hex: "#8B5CF6", name: "violet" },
  { hex: "#F59E0B", name: "amber" },
  { hex: "#22C55E", name: "green" },
  { hex: "#EF4444", name: "red" },
  { hex: "#EC4899", name: "pink" },
  { hex: "#0EA5E9", name: "sky" }
];

export function LanguageBubbles({ data }: { data: GithubData }) {
  const langs = useMemo(() => topLanguages(data.languageBytes, 8), [data.languageBytes]);
  const [hover, setHover] = useState<string | null>(null);

  // Mouse tracking for the container glassmorphism
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Pack bubbles in a row using simple physics-like layout
  const W = 720, H = 320;
  const positions = useMemo(() => {
    const placed: { x: number; y: number; r: number; lang: typeof langs[0]; color: typeof COLORS[0] }[] = [];
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
    <div 
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/60 p-6 md:p-8 shadow-xl backdrop-blur-xl transition-colors hover:bg-[#0f172a]/80"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10 mb-6 flex items-end justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground drop-shadow-sm">Language Distribution</h3>
          <p className="mt-1 text-sm text-foreground/50">
            A breakdown of your most actively written code.
          </p>
        </div>
        {hover && (
          <motion.div
            key={hover}
            initial={{ opacity: 0, scale: 0.9, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-foreground shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md"
          >
            {hover}
          </motion.div>
        )}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="relative z-10 h-[300px] w-full md:h-[360px] overflow-visible cursor-crosshair">
        <defs>
          {COLORS.map(c => (
            <radialGradient id={`grad-${c.name}`} key={c.name} cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="30%" stopColor={c.hex} stopOpacity="0.8" />
              <stop offset="100%" stopColor={c.hex} stopOpacity="0.1" />
            </radialGradient>
          ))}
          <filter id="orbGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {positions.map((p, i) => (
          <g 
            key={p.lang.name} 
            onMouseEnter={() => setHover(`${p.lang.name} · ${p.lang.pct}%`)} 
            onMouseLeave={() => setHover(null)}
          >
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill={`url(#grad-${p.color.name})`}
              stroke={p.color.hex}
              strokeWidth={1.5}
              strokeOpacity={0.5}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 140, damping: 15 }}
              whileHover={{ scale: 1.15 }}
              style={{ originX: `${p.x}px`, originY: `${p.y}px`, filter: "url(#orbGlow)" }}
            />
            {/* Center dot for visual anchor */}
            <circle cx={p.x} cy={p.y} r={1.5} fill="#fff" opacity={0.4} style={{ pointerEvents: "none" }} />
            <text
              x={p.x}
              y={p.y - Math.min(10, p.r * 0.2)}
              textAnchor="middle"
              className="font-display font-black tracking-tight"
              fontSize={Math.max(10, Math.min(20, p.r * 0.4))}
              fill="#ffffff"
              style={{ pointerEvents: "none", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
            >
              {p.lang.name}
            </text>
            {p.r > 25 && (
              <text
                x={p.x}
                y={p.y + Math.min(16, p.r * 0.35)}
                textAnchor="middle"
                className="font-bold"
                fontSize={Math.max(9, Math.min(14, p.r * 0.25))}
                fill="rgba(255,255,255,0.7)"
                style={{ pointerEvents: "none", textShadow: "0 1px 5px rgba(0,0,0,0.8)" }}
              >
                {p.lang.pct}%
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
