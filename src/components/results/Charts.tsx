import { motion } from "framer-motion";
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
} from "recharts";
import type { GithubData } from "@/lib/github.functions";
import { activityRadar, repoTimeline, topLanguages } from "@/lib/personality";

const COLORS = ["#6366F1", "#06B6D4", "#8B5CF6", "#F59E0B", "#22C55E", "#EF4444", "#a78bfa", "#67e8f9"];

function ChartCard({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="card-soft rounded-3xl p-6"
    >
      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</h3>
      <div className="h-72">{children}</div>
    </motion.div>
  );
}

const tooltipStyle = {
  background: "rgba(255,255,255,0.97)",
  border: "1px solid #E2E8F0",
  borderRadius: 12,
  color: "#0F172A",
  fontSize: 12,
  boxShadow: "0 10px 30px -10px rgba(15,23,42,0.18)",
};

export function Charts({ data }: { data: GithubData }) {
  const langs = topLanguages(data.languageBytes, 8);
  const timeline = repoTimeline(data);
  const radar = activityRadar(data);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <ChartCard title="Language Composition">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={langs} dataKey="value" nameKey="name" innerRadius={55} outerRadius={100} stroke="#fff" strokeWidth={3} paddingAngle={2}>
              {langs.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} formatter={(v, n) => [`${Math.round(Number(v) / 1024)} KB`, String(n)]} />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          {langs.map((l, i) => (
            <span key={l.name} className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 font-medium">
              <span className="h-2 w-2 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
              {l.name} <span className="text-muted-foreground">{l.pct}%</span>
            </span>
          ))}
        </div>
      </ChartCard>

      <ChartCard title="Coding Radar" delay={0.1}>
        <ResponsiveContainer>
          <RadarChart data={radar}>
            <PolarGrid stroke="#E2E8F0" />
            <PolarAngleAxis dataKey="axis" tick={{ fill: "#64748B", fontSize: 12, fontWeight: 600 }} />
            <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
            <Radar name="Score" dataKey="value" stroke="#6366F1" strokeWidth={2} fill="#6366F1" fillOpacity={0.35} />
            <Tooltip contentStyle={tooltipStyle} />
          </RadarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Contribution Mountains" delay={0.15}>
        <ResponsiveContainer>
          <AreaChart data={timeline}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{ fill: "#64748B", fontSize: 12 }} />
            <YAxis tick={{ fill: "#64748B", fontSize: 12 }} allowDecimals={false} />
            <Tooltip contentStyle={tooltipStyle} />
            <Area type="monotone" dataKey="count" stroke="#6366F1" strokeWidth={2.5} fill="url(#g1)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Top Repositories by Stars" delay={0.2}>
        <div className="h-full space-y-2 overflow-y-auto pr-1">
          {[...data.repos].filter((r) => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 8).map((r) => {
            const max = Math.max(1, ...data.repos.map((x) => x.stargazers_count));
            const w = Math.max(4, (r.stargazers_count / max) * 100);
            return (
              <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="block rounded-2xl border border-border bg-white p-3 transition hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center justify-between text-sm">
                  <span className="truncate font-semibold">{r.name}</span>
                  <span className="ml-2 font-medium text-amber-600">★ {r.stargazers_count.toLocaleString()}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full grad-primary" style={{ width: `${w}%` }} />
                </div>
                {r.description && <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{r.description}</p>}
              </a>
            );
          })}
        </div>
      </ChartCard>
    </div>
  );
}
