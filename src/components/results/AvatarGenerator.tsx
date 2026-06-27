import { useMemo } from "react";
import { motion } from "framer-motion";
import type { GithubData } from "@/lib/github.functions";
import type { Archetype } from "@/lib/archetype";

// Deterministic small hash for stable choices
function hash(s: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const ACCESSORIES = ["⚡", "🔥", "✨", "💫", "🌟", "🎯", "🛡", "🗡", "🔮", "👑"];
const BACKGROUNDS = [
  ["#6366F1", "#06B6D4"],
  ["#8B5CF6", "#EC4899"],
  ["#F59E0B", "#EF4444"],
  ["#22C55E", "#06B6D4"],
  ["#0EA5E9", "#8B5CF6"],
  ["#F472B6", "#A855F7"],
];

export function AvatarGenerator({
  data,
  archetype,
}: {
  data: GithubData;
  archetype: Archetype;
}) {
  const seed = useMemo(() => hash(data.user.login), [data.user.login]);
  const bg = BACKGROUNDS[seed % BACKGROUNDS.length];
  const acc = ACCESSORIES[(seed >> 4) % ACCESSORIES.length];
  const acc2 = ACCESSORIES[(seed >> 8) % ACCESSORIES.length];

  const orbiters = Array.from({ length: 6 }).map((_, i) => {
    const angle = (i / 6) * Math.PI * 2 + (seed % 100) / 100;
    return {
      angle,
      delay: i * 0.4,
      color: ["#6366F1", "#06B6D4", "#8B5CF6", "#F59E0B", "#22C55E", "#EC4899"][i],
    };
  });

  return (
    <div className="card-soft relative overflow-hidden rounded-[32px] p-8 md:p-10">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: bg[0] }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: bg[1] }}
      />

      <div className="relative grid items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto h-64 w-64 md:h-72 md:w-72">
          {/* Orbits */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {orbiters.map((o, i) => {
              const r = 130;
              const x = 50 + (Math.cos(o.angle) * r) / 2.6;
              const y = 50 + (Math.sin(o.angle) * r) / 2.6;
              return (
                <motion.span
                  key={i}
                  className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    background: o.color,
                    boxShadow: `0 0 16px ${o.color}`,
                  }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2.4, delay: o.delay, repeat: Infinity }}
                />
              );
            })}
          </motion.div>

          {/* Ring */}
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-dashed"
            style={{ borderColor: archetype.color }}
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Avatar with glow */}
          <div className="absolute inset-8 rounded-full p-1" style={{
            background: `linear-gradient(135deg, ${bg[0]}, ${bg[1]})`,
            boxShadow: `0 0 60px ${archetype.color}80`,
          }}>
            <img
              src={data.user.avatar_url}
              alt={data.user.login}
              crossOrigin="anonymous"
              className="h-full w-full rounded-full border-4 border-white object-cover"
            />
          </div>

          {/* Accessory badges */}
          <motion.div
            className="absolute right-2 top-4 grid h-12 w-12 place-items-center rounded-full text-2xl shadow-xl"
            style={{ background: "white" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {acc}
          </motion.div>
          <motion.div
            className="absolute -bottom-1 left-4 grid h-10 w-10 place-items-center rounded-full text-xl shadow-xl"
            style={{ background: "white" }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.4, delay: 0.6, repeat: Infinity }}
          >
            {acc2}
          </motion.div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Your developer avatar
          </p>
          <h3 className="mt-2 font-display text-3xl font-black md:text-4xl">
            {data.user.name || data.user.login}
          </h3>
          <p className="mt-2 text-base text-muted-foreground">
            Procedurally generated from your GitHub footprint —{" "}
            <span className="font-semibold" style={{ color: archetype.color }}>
              {archetype.name}
            </span>{" "}
            class.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <Stat label="Aura" value={acc} />
            <Stat label="Sigil" value={acc2} />
            <Stat label="Rank" value={archetype.rarity[0]} />
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            One of a kind. No two GitHub fingerprints generate the same avatar.
          </p>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-3">
      <div className="text-2xl">{value}</div>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
