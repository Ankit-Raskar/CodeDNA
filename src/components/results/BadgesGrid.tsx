import { motion } from "framer-motion";
import type { Achievement } from "@/lib/personality";
import { FiAward, FiStar, FiZap, FiCode, FiClock, FiTerminal, FiTarget, FiActivity, FiShield, FiHeart } from "react-icons/fi";

const RARITY = {
  Common: { label: "Common", grad: "from-slate-400 to-slate-500", ring: "ring-slate-200", shadow: "" },
  Rare: { label: "Rare", grad: "from-blue-400 to-indigo-500", ring: "ring-blue-200", shadow: "shadow-blue-200/50" },
  Epic: { label: "Epic", grad: "from-fuchsia-500 to-purple-600", ring: "ring-fuchsia-300", shadow: "shadow-fuchsia-300/50" },
  Legendary: { label: "Legendary", grad: "from-amber-300 via-orange-400 to-yellow-500", ring: "ring-amber-200", shadow: "shadow-amber-400/60 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]" },
};

const ICONS: Record<string, any> = {
  react: FiCode,
  opensource: FiHeart,
  ai: FiZap,
  night: FiClock,
  hackathon: FiActivity,
  addict: FiTerminal,
  polyglot: FiAward,
  bug: FiShield,
  legendary: FiStar,
  consistent: FiTarget,
};

export function BadgesGrid({ badges }: { badges: Achievement[] }) {
  const fireConfetti = async (e: React.MouseEvent<HTMLDivElement>, earned: boolean) => {
    if (!earned) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x, y },
      colors: ["#6366F1", "#06B6D4", "#F59E0B", "#EC4899", "#8B5CF6"]
    });
  };

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {badges.map((b, i) => {
        const r = RARITY[b.rarity] || RARITY.Common;
        const Icon = ICONS[b.id] || FiAward;
        return (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 30, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05, type: "spring" }}
            whileHover={{ y: -6, rotate: 0.5 }}
            onClick={(e) => fireConfetti(e, b.earned)}
            className={`card-soft relative overflow-hidden rounded-3xl p-6 cursor-pointer ${b.earned ? "" : "opacity-50 grayscale hover:grayscale-0 transition-all duration-300"}`}
          >
            {b.earned && (
              <>
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${r.grad}`} />
                <div className={`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br opacity-20 blur-2xl ${r.grad}`} />
              </>
            )}
            
            {b.earned && b.rarity === "Legendary" && (
               <div className="absolute inset-0 border-2 border-amber-300/40 rounded-3xl animate-pulse pointer-events-none" />
            )}

            <div className="relative flex items-start gap-4">
              <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${r.grad} text-foreground text-2xl shadow-lg ring-4 ${r.ring} ${r.shadow}`}>
                <Icon className="drop-shadow" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className={`font-display text-lg font-bold ${b.earned && b.rarity === "Legendary" ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500" : ""}`}>
                    {b.name}
                  </h3>
                  {b.earned ? (
                    <span className={`rounded-full bg-gradient-to-r ${r.grad} px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground shadow`}>{r.label}</span>
                  ) : (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Locked</span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-slate-500">{b.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
