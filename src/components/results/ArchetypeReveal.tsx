import { motion } from "framer-motion";
import type { Archetype } from "@/lib/archetype";
import { RARITY_STYLE } from "@/lib/archetype";

export function ArchetypeReveal({ archetype }: { archetype: Archetype }) {
  const r = RARITY_STYLE[archetype.rarity];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
        className="relative mx-auto max-w-3xl"
        style={{ perspective: 1200 }}
      >
        {/* Holographic frame */}
        <div
          className="relative overflow-hidden rounded-[36px] p-1"
          style={{
            backgroundImage: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
            boxShadow: `0 30px 80px -20px ${r.glow}`,
          }}
        >
          <div className="relative overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white md:p-12">
            {/* Animated holographic shine */}
            <motion.div
              aria-hidden
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-y-0 w-1/2"
              style={{
                background:
                  "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
              style={{ background: archetype.color, opacity: 0.45 }}
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
              style={{ background: archetype.color2, opacity: 0.4 }}
            />

            <div className="relative flex items-start justify-between gap-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-white/70">
                Your archetype · unlocked
              </p>
              <motion.span
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 140 }}
                className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]"
                style={{
                  background: `linear-gradient(135deg, ${r.color}, ${archetype.color2})`,
                  boxShadow: `0 0 30px ${r.glow}`,
                }}
              >
                {archetype.rarity} · {r.label}
              </motion.span>
            </div>

            <div className="relative mt-8 flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:text-left">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="grid h-32 w-32 shrink-0 place-items-center rounded-[28px] text-7xl md:h-40 md:w-40"
                style={{
                  background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})`,
                  boxShadow: `0 25px 60px -10px ${r.glow}`,
                }}
              >
                <motion.span
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {archetype.emoji}
                </motion.span>
              </motion.div>
              <div className="flex-1">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="font-display text-4xl font-black leading-tight md:text-6xl"
                >
                  {archetype.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-3 text-lg italic text-white/85 md:text-xl"
                >
                  &ldquo;{archetype.tagline}&rdquo;
                </motion.p>
                <p className="mt-2 text-sm text-white/65">{archetype.description}</p>
              </div>
            </div>

            {/* Power meter */}
            <div className="relative mt-10">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white/70">
                <span>Power level</span>
                <span>{archetype.power} / 100</span>
              </div>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${archetype.power}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
                    boxShadow: `0 0 20px ${r.glow}`,
                  }}
                />
              </div>
            </div>

            {/* Class unlocks */}
            {archetype.unlocked.length > 0 && (
              <div className="relative mt-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/60">
                  Classes unlocked
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {archetype.unlocked.map((u, i) => (
                    <motion.span
                      key={u}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + i * 0.06 }}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur"
                    >
                      ✦ {u}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
