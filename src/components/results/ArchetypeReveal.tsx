import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Archetype } from "@/lib/archetype";
import { RARITY_STYLE } from "@/lib/archetype";

export function ArchetypeReveal({ archetype }: { archetype: Archetype }) {
  const r = RARITY_STYLE[archetype.rarity];
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });
  const shineX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <div className="relative mt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, type: "spring", stiffness: 80, bounce: 0.4 }}
        className="relative mx-auto max-w-3xl"
        style={{ perspective: 1500 }}
      >
        {/* Holographic frame */}
        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
          className="relative overflow-hidden rounded-[40px] p-1.5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute inset-0 z-0 bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2}, ${r.color})` }} />
          
          <div className="relative z-10 overflow-hidden rounded-[36px] bg-background p-8 text-foreground md:p-12 border border-border" style={{ transform: "translateZ(30px)" }}>
            
            {/* Interactive glare */}
            <motion.div 
              className="pointer-events-none absolute inset-0 z-50 opacity-30 mix-blend-overlay"
              style={{
                background: "radial-gradient(circle at 50% 50%, white 0%, transparent 50%)",
                backgroundSize: "200% 200%",
                backgroundPositionX: shineX,
                backgroundPositionY: shineY,
              }}
            />

            {/* Animated holographic shine */}
            <motion.div
              aria-hidden
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-y-0 w-1/2 z-20"
              style={{
                background:
                  "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-[80px]"
              style={{ background: archetype.color, opacity: 0.5 }}
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-[80px]"
              style={{ background: archetype.color2, opacity: 0.45 }}
            />

            <div className="relative z-10 flex items-start justify-between gap-4" style={{ transform: "translateZ(20px)" }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-foreground/70">
                Your archetype · unlocked
              </p>
              <motion.span
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 140 }}
                className="rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-foreground shadow-xl border border-border"
                style={{
                  background: `linear-gradient(135deg, ${r.color}, ${archetype.color2})`,
                  boxShadow: `0 0 30px ${r.glow}`,
                }}
              >
                {archetype.rarity} · {r.label}
              </motion.span>
            </div>

            <div className="relative z-10 mt-10 flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:text-left" style={{ transform: "translateZ(40px)" }}>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="grid h-36 w-36 shrink-0 place-items-center rounded-[32px] text-8xl md:h-48 md:w-48 border-[3px] border-border"
                style={{
                  background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})`,
                  boxShadow: `0 25px 60px -10px ${r.glow}, inset 0 0 40px rgba(255,255,255,0.2)`,
                }}
              >
                <motion.span
                  animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.4))" }}
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
                  className="font-display text-5xl font-black leading-tight text-foreground drop-shadow-lg md:text-7xl"
                >
                  {archetype.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-4 text-xl italic text-foreground/90 drop-shadow-md md:text-2xl"
                >
                  &ldquo;{archetype.tagline}&rdquo;
                </motion.p>
                <p className="mt-3 text-base text-foreground/70 leading-relaxed max-w-lg">{archetype.description}</p>
              </div>
            </div>

            {/* Power meter */}
            <div className="relative z-10 mt-12" style={{ transform: "translateZ(20px)" }}>
              <div className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-foreground/80">
                <span>Power level</span>
                <span className="text-foreground drop-shadow-md">{archetype.power} / 100</span>
              </div>
              <div className="mt-3 h-3.5 overflow-hidden rounded-full bg-card border border-border shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${archetype.power}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full relative overflow-hidden"
                  style={{
                    background: `linear-gradient(90deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
                    boxShadow: `0 0 20px ${r.glow}`,
                  }}
                >
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2" 
                  />
                </motion.div>
              </div>
            </div>

            {/* Class unlocks */}
            {archetype.unlocked.length > 0 && (
              <div className="relative z-10 mt-10" style={{ transform: "translateZ(30px)" }}>
                <p className="text-[11px] font-bold uppercase tracking-widest text-foreground/60 mb-4">
                  Classes unlocked
                </p>
                <div className="flex flex-wrap gap-3">
                  {archetype.unlocked.map((u, i) => (
                    <motion.span
                      key={u}
                      initial={{ opacity: 0, y: 15, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + i * 0.1, type: "spring", stiffness: 200 }}
                      className="rounded-full border border-border bg-gradient-to-r from-white/10 to-transparent px-4 py-2 text-sm font-bold text-foreground shadow-lg backdrop-blur-md"
                    >
                      <span className="text-cyan-400 mr-1">✦</span> {u}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
