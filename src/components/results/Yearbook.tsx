import { motion } from "framer-motion";
import type { GithubData } from "@/lib/github.functions";
import type { AIInsights } from "@/lib/groq.functions";
import { topLanguages } from "@/lib/personality";

export function Yearbook({ data, insights }: { data: GithubData; insights: AIInsights }) {
  const lang = topLanguages(data.languageBytes, 1)[0];
  const top = [...data.repos].filter((r) => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count)[0];
  const monthCounts: Record<string, number> = {};
  for (const r of data.repos) {
    const m = new Date(r.pushed_at).toLocaleString("en", { month: "long" });
    monthCounts[m] = (monthCounts[m] || 0) + 1;
  }
  const bestMonth = Object.entries(monthCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
  const career = insights.career_paths[0] || "Senior Engineer";
  const mission = insights.project_ideas[0] || "Ship something you'll be proud of.";

  const entries = [
    { label: "Most-used language", value: lang?.name || "—" },
    { label: "Biggest achievement", value: top ? `${top.name} (★${top.stargazers_count})` : "Just getting started" },
    { label: "Most productive month", value: bestMonth },
    { label: "Future role prediction", value: career },
    { label: "Next mission", value: mission },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="card-soft relative overflow-hidden rounded-[28px] p-8 md:p-12"
      style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent 0, transparent 47px, rgba(99,102,241,0.08) 48px)" }}
    >
      <div className="absolute left-12 top-0 h-full w-px bg-rose-300/60" />
      <div className="absolute left-16 top-0 h-full w-px bg-rose-300/60" />

      <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-amber-300 to-pink-400 blur-xl opacity-50" />
          <img src={data.user.avatar_url} alt="" className="relative h-36 w-36 rounded-3xl border-4 border-white object-cover shadow-xl" />
        </div>
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-rose-500">Class of {new Date().getFullYear()} · Developer Yearbook</p>
          <h3 className="mt-2 font-display text-4xl font-black md:text-5xl">{data.user.name || data.user.login}</h3>
          <p className="mt-1 text-sm italic text-muted-foreground">"{insights.tagline}"</p>
        </div>
      </div>

      <div className="relative mt-10 grid gap-4 md:grid-cols-2">
        {entries.map((e, i) => (
          <motion.div
            key={e.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="rounded-2xl border-2 border-dashed border-rose-200 bg-white/70 p-4 backdrop-blur"
          >
            <p className="text-[11px] font-bold uppercase tracking-widest text-rose-500">{e.label}</p>
            <p className="mt-1 font-display text-lg font-bold">{e.value}</p>
          </motion.div>
        ))}
      </div>

      <p className="relative mt-8 text-center font-display text-sm italic text-muted-foreground">
        ✍️ Signed by the AI mentor — keep shipping.
      </p>
    </motion.div>
  );
}
