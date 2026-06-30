import { motion } from "framer-motion";
import type { AIInsights } from "@/lib/groq.functions";

const META: Array<{ key: keyof AIInsights["personalities"]; label: string; emoji: string; grad: string; bg: string }> = [
  { key: "game_character", label: "Game Character", emoji: "🎮", grad: "from-fuchsia-500 to-violet-600", bg: "from-fuchsia-50 to-violet-50" },
  { key: "avenger", label: "Superhero", emoji: "🦸", grad: "from-red-500 to-amber-500", bg: "from-red-50 to-amber-50" },
  { key: "city", label: "City", emoji: "🏙️", grad: "from-sky-500 to-indigo-600", bg: "from-sky-50 to-indigo-50" },
  { key: "startup", label: "Startup", emoji: "🚀", grad: "from-blue-500 to-cyan-500", bg: "from-blue-50 to-cyan-50" },
  { key: "programming_language", label: "Language", emoji: "💻", grad: "from-yellow-500 to-orange-500", bg: "from-yellow-50 to-orange-50" },
  { key: "animal", label: "Animal", emoji: "🦊", grad: "from-emerald-500 to-teal-600", bg: "from-emerald-50 to-teal-50" },
];

export function PersonalityCards({ p }: { p: AIInsights["personalities"] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {META.map((m, i) => (
        <motion.div
          key={m.key}
          initial={{ opacity: 0, rotateY: -25, y: 30 }}
          whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.6, type: "spring" }}
          whileHover={{ y: -8, rotateZ: -1 }}
          style={{ perspective: 1000 }}
          className={`card-soft relative overflow-hidden rounded-3xl bg-gradient-to-br ${m.bg} p-6`}
        >
          <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.grad}`} />
          <div className="absolute -right-6 -top-6 text-8xl opacity-20">{m.emoji}</div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">If you were a</p>
          <h3 className="mt-1 font-display text-2xl font-bold">{m.label}</h3>
          <p className={`mt-4 inline-block rounded-2xl bg-gradient-to-r ${m.grad} bg-clip-text text-base font-bold text-transparent`}>
            {p[m.key]}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
