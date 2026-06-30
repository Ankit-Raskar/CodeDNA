import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { GithubData } from "@/lib/github.functions";
import { FiGitBranch, FiStar, FiUsers, FiGitPullRequest, FiCode, FiCalendar, FiAward, FiClock } from "react-icons/fi";

function AnimatedCounter({ value, isNumber }: { value: string | number, isNumber: boolean }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isNumber || typeof value !== "number") return;
    let animationFrame: number;
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      // For decimals vs integers
      const isDecimal = value % 1 !== 0;
      const currentVal = easeOutQuart * value;
      setCount(isDecimal ? parseFloat(currentVal.toFixed(1)) : Math.floor(currentVal));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, isNumber]);
  
  if (!isNumber) return <span>{value}</span>;
  return <span>{count.toLocaleString()}</span>;
}

function Stat({ label, value, icon, grad, i, color }: { label: string; value: string | number; icon: React.ReactNode; grad: string; i: number, color: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isNumeric = typeof value === "number" || !isNaN(Number(value?.toString().replace(/,/g, '')));
  const numValue = isNumeric && typeof value === "string" ? Number(value.replace(/,/g, '')) : value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl backdrop-blur-xl transition-colors hover:bg-card hover:border-border"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${color}15,
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 flex flex-col items-start">
        <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${grad} text-foreground shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-border text-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
          {icon}
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">{label}</p>
        <p className="mt-1 font-display text-3xl font-black text-foreground drop-shadow-md">
          <AnimatedCounter value={isNumeric ? numValue : value} isNumber={isNumeric} />
        </p>
      </div>
    </motion.div>
  );
}

export function StatsGrid({ data }: { data: GithubData }) {
  const langs = Object.keys(data.languageBytes).length;
  const created = new Date(data.user.created_at);
  const years = Math.max(1, Math.floor((Date.now() - +created) / (1000 * 60 * 60 * 24 * 365)));
  const mostUpdated = [...data.repos].sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at))[0];
  const monthName = mostUpdated ? new Date(mostUpdated.pushed_at).toLocaleString("en", { month: "short", year: "numeric" }) : "—";
  const avgStars = data.totals.repos ? Math.round((data.totals.stars / data.totals.repos) * 10) / 10 : 0;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
      <Stat i={0} grad="from-indigo-500 to-violet-500" color="rgba(99, 102, 241, 1)" icon={<FiGitBranch />} label="Repositories" value={data.totals.repos} />
      <Stat i={1} grad="from-amber-400 to-orange-500" color="rgba(245, 158, 11, 1)" icon={<FiStar />} label="Total Stars" value={data.totals.stars} />
      <Stat i={2} grad="from-cyan-400 to-blue-500" color="rgba(6, 182, 212, 1)" icon={<FiUsers />} label="Followers" value={data.user.followers} />
      <Stat i={3} grad="from-fuchsia-500 to-pink-500" color="rgba(217, 70, 239, 1)" icon={<FiGitPullRequest />} label="Forks" value={data.totals.forks} />
      <Stat i={4} grad="from-emerald-400 to-teal-500" color="rgba(16, 185, 129, 1)" icon={<FiCode />} label="Languages" value={langs} />
      <Stat i={5} grad="from-rose-400 to-red-500" color="rgba(244, 63, 94, 1)" icon={<FiCalendar />} label="Years Active" value={years} />
      <Stat i={6} grad="from-yellow-400 to-amber-500" color="rgba(250, 204, 21, 1)" icon={<FiAward />} label="Avg ★ / repo" value={avgStars} />
      <Stat i={7} grad="from-violet-500 to-indigo-500" color="rgba(139, 92, 246, 1)" icon={<FiClock />} label="Last push" value={monthName} />
    </div>
  );
}
