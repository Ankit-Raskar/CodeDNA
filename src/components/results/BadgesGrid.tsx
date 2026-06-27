import { motion } from "framer-motion";
import type { Badge } from "@/lib/personality";

const RARITY: Record<string, { label: string; grad: string; ring: string }> = {
  frontend: { label: "Rare", grad: "from-indigo-500 to-violet-500", ring: "ring-indigo-200" },
  backend: { label: "Epic", grad: "from-fuchsia-500 to-purple-600", ring: "ring-fuchsia-200" },
  ai: { label: "Legendary", grad: "from-amber-400 to-pink-500", ring: "ring-amber-200" },
  open: { label: "Mythic", grad: "from-cyan-400 to-blue-600", ring: "ring-cyan-200" },
  fullstack: { label: "Epic", grad: "from-emerald-400 to-teal-600", ring: "ring-emerald-200" },
  ops: { label: "Rare", grad: "from-lime-400 to-green-600", ring: "ring-lime-200" },
  night: { label: "Rare", grad: "from-slate-500 to-indigo-700", ring: "ring-slate-200" },
  hack: { label: "Epic", grad: "from-orange-400 to-red-500", ring: "ring-orange-200" },
  bug: { label: "Common", grad: "from-rose-400 to-pink-500", ring: "ring-rose-200" },
};

export function BadgesGrid({ badges }: { badges: Badge[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {badges.map((b, i) => {
        const r = RARITY[b.id] || { label: "Common", grad: "from-slate-400 to-slate-600", ring: "ring-slate-200" };
        return (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 30, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05, type: "spring" }}
            whileHover={{ y: -6, rotate: 0.5 }}
            className={`card-soft relative overflow-hidden rounded-3xl p-6 ${b.earned ? "" : "opacity-50 grayscale"}`}
          >
            {b.earned && (
              <>
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${r.grad}`} />
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br opacity-30 blur-2xl" style={{ backgroundImage: `linear-gradient(135deg, var(--primary), var(--accent))` }} />
              </>
            )}
            <div className="relative flex items-start gap-4">
              <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${r.grad} text-2xl shadow-lg ring-4 ${r.ring}`}>
                <span className="drop-shadow">{b.icon}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-bold">{b.name}</h3>
                  {b.earned ? (
                    <span className={`rounded-full bg-gradient-to-r ${r.grad} px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow`}>{r.label}</span>
                  ) : (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Locked</span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
