import { motion } from "framer-motion";

export function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-base text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}
