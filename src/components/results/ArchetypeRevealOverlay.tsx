import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import type { Archetype } from "@/lib/archetype";
import { RARITY_STYLE } from "@/lib/archetype";

/**
 * Full-screen cinematic reveal that takes over once when analysis lands.
 * Sequence: dim → "Class Unlocked" eyebrow → card flips in → stats animate → CTA.
 */
export function ArchetypeRevealOverlay({
  archetype,
  username,
  storageKey,
}: {
  archetype: Archetype;
  username: string;
  storageKey?: string;
}) {
  const [open, setOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const r = RARITY_STYLE[archetype.rarity];

  useEffect(() => {
    const key = storageKey || `codedna_reveal_${username}`;
    if (typeof window === "undefined") return;
    // Use a window-scoped guard so React Strict Mode's double-invoke
    // doesn't trip the sessionStorage check and skip scheduling the flip.
    const w = window as unknown as { __codednaReveal?: Set<string> };
    w.__codednaReveal = w.__codednaReveal || new Set<string>();
    if (sessionStorage.getItem(key) && !w.__codednaReveal.has(key)) return;
    w.__codednaReveal.add(key);
    sessionStorage.setItem(key, "1");
    setOpen(true);
    // Card flips a beat after mount
    const t1 = setTimeout(() => setFlipped(true), 700);
    // Confetti when card lands
    const t2 = setTimeout(async () => {
      const colors = [archetype.color, archetype.color2, r.color];
      const confetti = (await import("canvas-confetti")).default;
      confetti({ particleCount: 140, spread: 90, origin: { y: 0.55 }, colors, scalar: 1.1 });
      setTimeout(() => confetti({ particleCount: 80, angle: 60, spread: 60, origin: { x: 0 }, colors }), 250);
      setTimeout(() => confetti({ particleCount: 80, angle: 120, spread: 60, origin: { x: 1 }, colors }), 250);
    }, 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [archetype.color, archetype.color2, r.color, storageKey, username]);

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="reveal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background text-foreground"
        >
          {/* Radial backdrop pulse */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 45%, ${archetype.color}40 0%, transparent 55%)`,
            }}
            animate={{ opacity: [0.4, 0.9, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Sweeping rays */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${r.color}80 30deg, transparent 60deg, transparent 180deg, ${archetype.color2}80 210deg, transparent 240deg)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 mx-6 flex w-full max-w-2xl flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: -20, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.5em" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-2 text-[11px] font-bold uppercase text-cyan-300"
            >
              ━ Developer Class Unlocked ━
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-sm text-foreground/60"
            >
              @{username}
            </motion.p>

            {/* Flipping card */}
            <div className="my-8 [perspective:1400px]">
              <motion.div
                initial={{ rotateY: 180, scale: 0.8, opacity: 0 }}
                animate={{
                  rotateY: flipped ? 0 : 180,
                  scale: flipped ? 1 : 0.95,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 70,
                  damping: 14,
                }}
                className="relative h-[420px] w-[300px] [transform-style:preserve-3d]"
              >
                {/* Back of card */}
                <div
                  className="absolute inset-0 rounded-[28px] [backface-visibility:hidden]"
                  style={{
                    transform: "rotateY(180deg)",
                    background:
                      "repeating-linear-gradient(45deg, #1e293b, #1e293b 12px, #0f172a 12px, #0f172a 24px)",
                    boxShadow: `0 30px 70px ${r.glow}`,
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="grid h-full w-full place-items-center text-7xl opacity-30">🧬</div>
                </div>
                {/* Front of card */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-[28px] p-[2px] [backface-visibility:hidden]"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
                    boxShadow: `0 30px 80px ${r.glow}, 0 0 60px ${r.glow}`,
                  }}
                >
                  <div className="relative flex h-full w-full flex-col items-center justify-between rounded-[26px] bg-background p-6">
                    {/* Holographic shine */}
                    <motion.div
                      aria-hidden
                      initial={{ x: "-110%" }}
                      animate={{ x: "120%" }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
                      className="pointer-events-none absolute inset-y-0 w-1/2"
                      style={{
                        background:
                          "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
                      }}
                    />
                    <div className="z-10 flex w-full items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/70">
                      <span>codeDNA</span>
                      <span style={{ color: r.color }}>{r.label}</span>
                    </div>

                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={flipped ? { scale: 1, rotate: 0 } : { scale: 0 }}
                      transition={{ delay: 1.1, type: "spring", stiffness: 140, damping: 12 }}
                      className="grid h-32 w-32 place-items-center rounded-3xl text-7xl"
                      style={{
                        background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})`,
                        boxShadow: `0 20px 50px ${r.glow}`,
                      }}
                    >
                      {archetype.emoji}
                    </motion.div>

                    <div className="z-10 text-center">
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={flipped ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.35 }}
                        className="font-display text-2xl font-black leading-tight"
                      >
                        {archetype.name}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={flipped ? { opacity: 1 } : {}}
                        transition={{ delay: 1.5 }}
                        className="mt-1 text-[11px] font-bold uppercase tracking-[0.3em]"
                        style={{ color: r.color }}
                      >
                        {archetype.rarity}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={flipped ? { opacity: 1 } : {}}
                        transition={{ delay: 1.7 }}
                        className="mt-3 text-xs italic text-foreground/70"
                      >
                        &ldquo;{archetype.tagline}&rdquo;
                      </motion.p>
                    </div>

                    <div className="z-10 w-full">
                      <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-foreground/60">
                        <span>Power</span>
                        <span>{archetype.power}/100</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={flipped ? { width: `${archetype.power}%` } : {}}
                          transition={{ delay: 1.9, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${archetype.color}, ${r.color})`,
                            boxShadow: `0 0 12px ${r.glow}`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={flipped ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.1, duration: 0.5 }}
              onClick={close}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-900 shadow-[0_20px_60px_-10px_rgba(255,255,255,0.4)] transition"
            >
              See your full chronicle
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={flipped ? { opacity: 1 } : {}}
              transition={{ delay: 2.4 }}
              onClick={close}
              className="mt-3 text-[11px] uppercase tracking-widest text-foreground/40 hover:text-foreground/70"
            >
              Skip
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}