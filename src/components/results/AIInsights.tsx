import { motion } from "framer-motion";
import { FiTarget, FiAlertTriangle, FiTrendingUp, FiCompass, FiZap } from "react-icons/fi";
import type { AIInsights as TInsights } from "@/lib/groq.functions";

const GROUPS: Array<{ title: string; key: keyof Pick<TInsights, "strengths" | "weaknesses" | "learn_next" | "career_paths" | "project_ideas">; icon: React.ReactNode; intro: string }> = [
  { title: "Your strengths", key: "strengths", icon: <FiTarget />, intro: "Here's where you really shine 👇" },
  { title: "Watch-outs", key: "weaknesses", icon: <FiAlertTriangle />, intro: "Honest feedback, said with love." },
  { title: "Learn next", key: "learn_next", icon: <FiTrendingUp />, intro: "If I were you, I'd explore these." },
  { title: "Career paths", key: "career_paths", icon: <FiCompass />, intro: "Roles that fit your DNA." },
  { title: "Project ideas", key: "project_ideas", icon: <FiZap />, intro: "Build one of these next weekend." },
];

function Bubble({ side, children, delay }: { side: "left" | "right"; children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, x: side === "left" ? -10 : 10 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.4 }}
      className={`flex items-end gap-3 ${side === "right" ? "flex-row-reverse" : ""}`}
    >
      {side === "left" && (
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl grad-primary text-foreground shadow">🤖</div>
      )}
      <div className={`max-w-2xl rounded-3xl px-5 py-4 text-sm leading-relaxed shadow-sm ${side === "left" ? "rounded-bl-md bg-white border border-border" : "rounded-br-md grad-primary text-foreground"}`}>
        {children}
      </div>
    </motion.div>
  );
}

export function AIInsightsView({ insights }: { insights: TInsights }) {
  return (
    <div className="space-y-5">
      <Bubble side="left" delay={0}>
        <p className="font-semibold text-foreground">Hey! I'm your AI mentor.</p>
        <p className="mt-1 text-muted-foreground">I read every repo. Here's what your code tells me about you.</p>
      </Bubble>

      <Bubble side="right" delay={0.05}>
        <p className="text-xs font-semibold uppercase tracking-widest opacity-80">My verdict</p>
        <p className="mt-1 font-display text-xl font-bold">{insights.tagline}</p>
      </Bubble>

      {GROUPS.map((g, i) => (
        <Bubble key={g.key} side="left" delay={0.1 + i * 0.05}>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-primary">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10">{g.icon}</span>
            {g.title}
          </div>
          <p className="mb-2 text-xs italic text-muted-foreground">{g.intro}</p>
          <ul className="space-y-1.5">
            {insights[g.key].map((it, j) => (
              <li key={j} className="flex gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </Bubble>
      ))}
    </div>
  );
}
