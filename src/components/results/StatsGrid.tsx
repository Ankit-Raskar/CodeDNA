import { motion } from "framer-motion";
import type { GithubData } from "@/lib/github.functions";
import { FiGitBranch, FiStar, FiUsers, FiGitPullRequest, FiCode, FiCalendar, FiAward, FiClock } from "react-icons/fi";

function Stat({ label, value, icon, grad, i }: { label: string; value: string | number; icon: React.ReactNode; grad: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      whileHover={{ y: -4 }}
      className="card-soft rounded-3xl p-5"
    >
      <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${grad} text-white shadow`}>{icon}</div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-3xl font-bold">{value}</p>
    </motion.div>
  );
}

export function StatsGrid({ data }: { data: GithubData }) {
  const langs = Object.keys(data.languageBytes).length;
  const created = new Date(data.user.created_at);
  const years = Math.max(1, Math.floor((Date.now() - +created) / (1000 * 60 * 60 * 24 * 365)));
  const mostUpdated = [...data.repos].sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at))[0];
  const monthName = mostUpdated ? new Date(mostUpdated.pushed_at).toLocaleString("en", { month: "long", year: "numeric" }) : "—";
  const avgStars = data.totals.repos ? Math.round((data.totals.stars / data.totals.repos) * 10) / 10 : 0;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <Stat i={0} grad="from-indigo-500 to-violet-500" icon={<FiGitBranch />} label="Repositories" value={data.totals.repos} />
      <Stat i={1} grad="from-amber-400 to-orange-500" icon={<FiStar />} label="Total Stars" value={data.totals.stars.toLocaleString()} />
      <Stat i={2} grad="from-cyan-400 to-blue-500" icon={<FiUsers />} label="Followers" value={data.user.followers.toLocaleString()} />
      <Stat i={3} grad="from-fuchsia-500 to-pink-500" icon={<FiGitPullRequest />} label="Forks" value={data.totals.forks.toLocaleString()} />
      <Stat i={4} grad="from-emerald-400 to-teal-500" icon={<FiCode />} label="Languages" value={langs} />
      <Stat i={5} grad="from-rose-400 to-red-500" icon={<FiCalendar />} label="Years on GitHub" value={years} />
      <Stat i={6} grad="from-yellow-400 to-amber-500" icon={<FiAward />} label="Avg ★ per repo" value={avgStars} />
      <Stat i={7} grad="from-violet-500 to-indigo-500" icon={<FiClock />} label="Last push" value={monthName} />
    </div>
  );
}
