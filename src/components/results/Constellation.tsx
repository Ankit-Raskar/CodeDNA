import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, GitFork, ExternalLink, X } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import type { GithubData, GhRepo } from "@/lib/github.functions";

const LANG_COLORS: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3B82F6",
  Python: "#22C55E",
  Go: "#67E8F9",
  Rust: "#F97316",
  Java: "#A78BFA",
  Ruby: "#F472B6",
  "C++": "#FB923C",
  C: "#94A3B8",
  HTML: "#FB7185",
  CSS: "#60A5FA",
  Shell: "#FDE68A",
  Other: "#C4B5FD",
};

const colorFor = (lang: string | null) => LANG_COLORS[lang || "Other"] || "#A78BFA";

export function Constellation({ data }: { data: GithubData }) {
  const repos = useMemo(
    () =>
      [...data.repos]
        .filter((r) => !r.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 80),
    [data.repos]
  );

  const [hover, setHover] = useState<GhRepo | null>(null);
  const [clickedRepo, setClickedRepo] = useState<GhRepo | null>(null);
  const [activeLang, setActiveLang] = useState<string | null>(null);

  const W = 900, H = 560;
  const cx = W / 2, cy = H / 2;
  const maxStars = Math.max(1, ...repos.map((r) => r.stargazers_count));

  // Language stats
  const langCounts = useMemo(() => {
    const m = new Map<string, number>();
    repos.forEach((r) => {
      const l = r.language || "Other";
      m.set(l, (m.get(l) || 0) + 1);
    });
    return Array.from(m.entries()).sort((a, b) => b[1] - a[1]);
  }, [repos]);

  const langs = langCounts.map(([l]) => l);
  const armAngle: Record<string, number> = {};
  langs.forEach((l, i) => (armAngle[l] = (i / Math.max(1, langs.length)) * Math.PI * 2));

  // Spiral galaxy positions
  const positions = useMemo(() => {
    return repos.map((r, idx) => {
      const lang = r.language || "Other";
      const seed = (r.id * 9301 + 49297) % 233280;
      const rand1 = seed / 233280;
      const seed2 = (r.id * 1103515245 + 12345) % 2147483648;
      const rand2 = (seed2 / 2147483648) % 1;

      const starsNorm = r.stargazers_count / maxStars; // 0..1
      const t = 0.15 + (1 - starsNorm) * 0.85;
      const baseR = 60 + t * (Math.min(W, H) / 2 - 80);
      const spiral = (baseR / 60) * 0.65;
      const armSpread = (rand1 - 0.5) * 0.55;
      const a = (armAngle[lang] || 0) + spiral + armSpread;
      const x = cx + Math.cos(a) * baseR;
      const y = cy + Math.sin(a) * baseR * 0.62;
      const size = 2.4 + Math.pow(starsNorm, 0.55) * 13;
      return { r, x, y, size, lang, idx, rand2 };
    });
  }, [repos, maxStars]);

  const topNamed = positions.slice(0, 6);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(120%_90%_at_20%_0%,#1e1b4b_0%,#0b1027_45%,#05060f_100%)] p-4 text-foreground shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] md:p-6">
      {/* Nebula clouds */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-indigo-500/25 blur-3xl animate-blob" />
        <div className="absolute -right-20 top-10 h-[380px] w-[380px] rounded-full bg-fuchsia-500/20 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      {/* Twinkling stars background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 140 }).map((_, i) => {
          const size = ((i * 7) % 3) + 1;
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${(i * 53) % 100}%`,
                top: `${(i * 79) % 100}%`,
                width: size,
                height: size,
                boxShadow: size > 1 ? "0 0 6px rgba(255,255,255,0.9)" : undefined,
              }}
              animate={{ opacity: [0.1, 0.9, 0.1] }}
              transition={{ duration: 2 + ((i * 13) % 30) / 10, delay: (i % 9) * 0.2, repeat: Infinity }}
            />
          );
        })}
        {/* Shooting stars */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.span
            key={`s${i}`}
            className="absolute h-px w-28 bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{ x: "-10%", y: `${15 + i * 28}%`, opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 1, 0] }}
            transition={{ duration: 1.6, delay: 2 + i * 3, repeat: Infinity, repeatDelay: 5 + i * 2 }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
          <span className="font-mono uppercase tracking-[0.22em] text-foreground/70">Live Galaxy</span>
          <span className="text-foreground/40">·</span>
          <span className="text-foreground/70">{repos.length} repos</span>
          <span className="text-foreground/40">·</span>
          <span className="text-foreground/70">{langs.length} languages</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-foreground/50">
          <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-white" />small repo</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-white" />core star</span>
        </div>
      </div>

      {/* Galaxy canvas with zoom/pan */}
      <div className="relative h-[420px] w-full md:h-[520px] overflow-hidden rounded-2xl">
        <TransformWrapper
          initialScale={1}
          minScale={0.4}
          maxScale={4}
          centerOnInit={true}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* Zoom Controls */}
              <div className="absolute right-3 top-3 z-20 flex flex-col gap-1.5 rounded-xl border border-white/10 bg-black/60 p-1.5 backdrop-blur-md">
                <button
                  onClick={() => zoomIn()}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-foreground/70 hover:bg-white/20 hover:text-foreground transition-colors font-bold text-lg"
                >
                  +
                </button>
                <button
                  onClick={() => zoomOut()}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-foreground/70 hover:bg-white/20 hover:text-foreground transition-colors font-bold text-xl"
                >
                  −
                </button>
                <button
                  onClick={() => resetTransform()}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-[9px] font-bold text-foreground/70 hover:bg-white/20 hover:text-foreground transition-colors"
                >
                  FIT
                </button>
              </div>

              <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
                <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" style={{ minWidth: W, minHeight: H }}>
                  <defs>
                    <radialGradient id="core">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                      <stop offset="20%" stopColor="#A5B4FC" stopOpacity="0.55" />
                      <stop offset="55%" stopColor="#6366F1" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="halo">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
                    </radialGradient>
                    <filter id="starGlow">
                      <feGaussianBlur stdDeviation="2.6" result="b" />
                      <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="bigGlow">
                      <feGaussianBlur stdDeviation="6" result="b" />
                      <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>

                  <g>
                    {/* Galactic halo + core */}
                    <ellipse cx={cx} cy={cy} rx={W / 2.1} ry={H / 2.3} fill="url(#halo)" />
                    <circle cx={cx} cy={cy} r={140} fill="url(#core)" />

                    {/* Orbital rings */}
                    {[110, 180, 250, 320].map((r, i) => (
                      <ellipse
                        key={r}
                        cx={cx}
                        cy={cy}
                        rx={r}
                        ry={r * 0.62}
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeDasharray={i % 2 ? "2 6" : "1 4"}
                      />
                    ))}

                    {/* Connection lines per language arm */}
                    {langs.map((l) => {
                      const pts = positions.filter((p) => p.lang === l);
                      if (pts.length < 2) return null;
                      const sorted = [...pts].sort((a, b) => Math.hypot(a.x - cx, a.y - cy) - Math.hypot(b.x - cx, b.y - cy));
                      const d = sorted.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
                      const dim = activeLang && activeLang !== l ? 0.05 : (activeLang === l ? 0.6 : 0.3);
                      return (
                        <path
                          key={l}
                          d={d}
                          stroke={colorFor(l)}
                          strokeOpacity={dim}
                          strokeWidth={activeLang === l ? 2 : 1}
                          fill="none"
                          style={{ filter: activeLang === l ? "drop-shadow(0 0 4px rgba(255,255,255,0.5))" : "none" }}
                        />
                      );
                    })}

                    {/* Stars (repos) */}
                    {positions.map((p, i) => {
                      const dim = activeLang && activeLang !== p.lang;
                      const c = colorFor(p.lang);
                      return (
                        <motion.g
                          key={p.r.id}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: dim ? 0.15 : 1, scale: 1 }}
                          animate={{ opacity: dim ? 0.15 : 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (i % 30) * 0.02, duration: 0.4 }}
                        >
                          {/* halo glow */}
                          <motion.circle
                            cx={p.x}
                            cy={p.y}
                            r={p.size + 5}
                            fill={c}
                            opacity={0.18}
                            animate={{ r: [p.size + 5, p.size + 11, p.size + 5], opacity: [0.12, 0.35, 0.12] }}
                            transition={{ duration: 3 + (i % 5) * 0.4, delay: (i % 7) * 0.2, repeat: Infinity }}
                            style={{ pointerEvents: "none" }}
                          />
                          {/* star */}
                          <motion.circle
                            cx={p.x}
                            cy={p.y}
                            r={p.size}
                            fill={c}
                            filter={p.size > 7 ? "url(#bigGlow)" : "url(#starGlow)"}
                            whileHover={{ scale: 1.9 }}
                            onMouseEnter={() => setHover(p.r)}
                            onMouseLeave={() => setHover(null)}
                            onClick={() => setClickedRepo(p.r)}
                            style={{ cursor: "pointer", transformOrigin: `${p.x}px ${p.y}px` }}
                          />
                          {/* sparkle for big stars */}
                          {p.size > 9 && (
                            <g opacity={0.85} style={{ pointerEvents: "none" }}>
                              <line x1={p.x - p.size * 1.8} y1={p.y} x2={p.x + p.size * 1.8} y2={p.y} stroke={c} strokeWidth={0.6} />
                              <line x1={p.x} y1={p.y - p.size * 1.8} x2={p.x} y2={p.y + p.size * 1.8} stroke={c} strokeWidth={0.6} />
                            </g>
                          )}
                        </motion.g>
                      );
                    })}

                    {/* Labels for top repos */}
                    {topNamed.map((p) => (
                      <g key={`l-${p.r.id}`} style={{ pointerEvents: "none" }}>
                        <text
                          x={p.x + p.size + 8}
                          y={p.y + 3}
                          fill="rgba(255,255,255,0.85)"
                          fontSize={11}
                          fontFamily="ui-monospace, monospace"
                          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
                        >
                          {p.r.name}
                        </text>
                        <text
                          x={p.x + p.size + 8}
                          y={p.y + 16}
                          fill="rgba(255,255,255,0.45)"
                          fontSize={9}
                        >
                          ★ {p.r.stargazers_count}
                        </text>
                      </g>
                    ))}
                  </g>
                </svg>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>

        {/* Hover tooltip */}
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="pointer-events-none absolute left-6 top-4 z-10 max-w-xs rounded-2xl border border-white/15 bg-background/85 p-3 backdrop-blur-md shadow-2xl"
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: colorFor(hover.language) }} />
              <p className="text-sm font-bold">{hover.name}</p>
              <ExternalLink className="ml-auto h-3 w-3 text-foreground/50" />
            </div>
            <div className="mt-1 flex items-center gap-3 text-[11px] text-foreground/60">
              <span>{hover.language || "—"}</span>
              <span className="inline-flex items-center gap-1"><Star className="h-3 w-3" />{hover.stargazers_count}</span>
              <span className="inline-flex items-center gap-1"><GitFork className="h-3 w-3" />{hover.forks_count ?? 0}</span>
            </div>
            {hover.description && <p className="mt-1.5 line-clamp-2 text-xs text-foreground/80">{hover.description}</p>}
          </motion.div>
        )}

        {/* Click popup */}
        <AnimatePresence>
          {clickedRepo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="absolute bottom-4 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 rounded-2xl border border-white/20 bg-card/95 p-5 shadow-2xl backdrop-blur-xl"
            >
              <button
                onClick={() => setClickedRepo(null)}
                className="absolute right-3 top-3 text-foreground/50 hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5">
                  <Star className="h-5 w-5 text-amber-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="truncate font-display font-bold text-foreground">{clickedRepo.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-foreground/50">
                    <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {clickedRepo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork className="h-3 w-3" /> {clickedRepo.forks_count}</span>
                    <span className="truncate">{clickedRepo.language}</span>
                  </div>
                </div>
              </div>
              {clickedRepo.description && (
                <p className="mt-3 line-clamp-3 text-sm text-foreground/70">{clickedRepo.description}</p>
              )}
              <div className="mt-4">
                <a
                  href={clickedRepo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-white/10 py-2.5 text-xs font-bold text-foreground transition-colors hover:bg-white/20"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> View on GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend / filter */}
      <div className="relative mt-4 flex flex-wrap gap-2 px-1 text-xs">
        <button
          onClick={() => setActiveLang(null)}
          className={`rounded-full border px-3 py-1 transition ${
            !activeLang ? "border-white/40 bg-white/15 text-foreground" : "border-white/10 bg-white/5 text-foreground/60 hover:bg-white/10"
          }`}
        >
          All
        </button>
        {langCounts.slice(0, 10).map(([l, n]) => {
          const active = activeLang === l;
          return (
            <button
              key={l}
              onClick={() => setActiveLang(active ? null : l)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 transition ${
                active ? "border-white/40 bg-white/15 text-foreground" : "border-white/10 bg-white/5 text-foreground/70 hover:bg-white/10"
              }`}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: colorFor(l), boxShadow: `0 0 8px ${colorFor(l)}` }} />
              <span className="font-medium">{l}</span>
              <span className="text-foreground/40">{n}</span>
            </button>
          );
        })}
      </div>

      <p className="relative mt-3 px-1 text-[11px] text-foreground/40">
        Tip: hover a star for details · click to open repo popup · use +/− or scroll to zoom.
      </p>
    </div>
  );
}
