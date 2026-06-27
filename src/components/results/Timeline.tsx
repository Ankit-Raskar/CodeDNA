import { motion } from "framer-motion";
import type { GithubData } from "@/lib/github.functions";

export function Timeline({ data }: { data: GithubData }) {
  const created = new Date(data.user.created_at);
  const sorted = [...data.repos].sort((a, b) => +new Date(a.created_at) - +new Date(b.created_at));
  const first = sorted[0];
  const latest = sorted[sorted.length - 1];

  const yearCounts: Record<string, number> = {};
  for (const r of data.repos) {
    const y = new Date(r.created_at).getFullYear().toString();
    yearCounts[y] = (yearCounts[y] || 0) + 1;
  }
  const bestYear = Object.entries(yearCounts).sort((a, b) => b[1] - a[1])[0];

  const events = [
    { date: created.toLocaleDateString(), title: "Joined GitHub", sub: `Account created ${created.getFullYear()}`, emoji: "🌱" },
    first && { date: new Date(first.created_at).toLocaleDateString(), title: `First repo: ${first.name}`, sub: first.description || first.language || "—", emoji: "🚀" },
    bestYear && { date: bestYear[0], title: `Most productive year`, sub: `${bestYear[1]} repositories created`, emoji: "🔥" },
    latest && { date: new Date(latest.created_at).toLocaleDateString(), title: `Latest repo: ${latest.name}`, sub: latest.description || latest.language || "—", emoji: "✨" },
  ].filter(Boolean) as Array<{ date: string; title: string; sub: string; emoji: string }>;

  return (
    <div className="card-soft rounded-3xl p-8 md:p-10">
      <ol className="relative ml-3 space-y-7 border-l-2 border-dashed border-primary/30 pl-8">
        {events.map((e, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[44px] grid h-9 w-9 place-items-center rounded-2xl grad-primary text-base shadow-lg ring-4 ring-white">
              {e.emoji}
            </span>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">{e.date}</p>
            <p className="mt-1 font-display text-lg font-bold">{e.title}</p>
            <p className="text-sm text-muted-foreground">{e.sub}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
