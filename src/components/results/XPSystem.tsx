import { motion } from "framer-motion";
import type { Achievement } from "@/lib/personality";

export function XPSystem({ level, pct, xp, achievements, archetype }: {
  level: number; pct: number; xp: number; achievements: Achievement[]; archetype: string;
}) {
  return (
    <div className="card-soft relative overflow-hidden rounded-3xl p-8 md:p-10">
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Developer Class</p>
          <h3 className="mt-2 font-display text-4xl font-bold text-gradient md:text-5xl">{archetype}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{xp.toLocaleString()} XP earned</p>
        </div>
        <div className="grid h-28 w-28 place-items-center rounded-3xl grad-primary text-white shadow-xl ring-4 ring-indigo-100">
          <div className="text-center leading-none">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Level</p>
            <p className="font-display text-4xl font-black">{level}</p>
          </div>
        </div>
      </div>

      <div className="relative mt-7">
        <div className="mb-2 flex justify-between text-xs font-medium text-muted-foreground">
          <span>Level {level}</span>
          <span>Level {level + 1}</span>
        </div>
        <div className="relative h-4 overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="relative h-full grad-primary"
          >
            <div className="absolute inset-0 shine" />
          </motion.div>
        </div>
        <p className="mt-2 text-right text-xs font-semibold text-primary">{pct}% to next level</p>
      </div>

      <div className="relative mt-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Achievements</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -2 }}
              className={`flex items-center gap-3 rounded-2xl border p-3 text-sm transition ${a.earned ? "border-amber-200 bg-gradient-to-br from-amber-50 to-white" : "border-border bg-muted/40 opacity-60"}`}
            >
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg ${a.earned ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow" : "bg-muted text-muted-foreground"}`}>🏆</span>
              <div className="min-w-0">
                <p className="truncate font-semibold">{a.name}</p>
                <p className="truncate text-xs text-muted-foreground">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
