import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMapPin, FiUsers, FiGitBranch, FiStar, FiExternalLink } from "react-icons/fi";
import type { GithubData } from "@/lib/github.functions";

export function IdentityCard({ data }: { data: GithubData }) {
  const { user, totals } = data;
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 140, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 140, damping: 14 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      style={{ perspective: 1200 }}
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Your Developer Passport</p>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="card-soft relative overflow-hidden rounded-[28px] p-8 md:p-10"
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-6 top-6 rounded-full border border-border bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          CodeDNA · 2026
        </div>

        <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center" style={{ transform: "translateZ(40px)" }}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl grad-primary opacity-70 blur-md" />
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              src={user.avatar_url}
              alt={user.login}
              className="relative h-32 w-32 rounded-3xl border-4 border-white object-cover shadow-2xl md:h-40 md:w-40"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">{user.name || user.login}</h1>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground hover:text-primary">
                @{user.login} <FiExternalLink className="h-3 w-3" />
              </a>
            </div>
            {user.bio && <p className="mt-3 max-w-2xl text-base text-muted-foreground">{user.bio}</p>}
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
              {user.location && <Tag icon={<FiMapPin />}>{user.location}</Tag>}
              <Tag icon={<FiUsers />}>{user.followers.toLocaleString()} followers</Tag>
              <Tag icon={<FiUsers />}>{user.following.toLocaleString()} following</Tag>
              <Tag icon={<FiGitBranch />}>{totals.repos} repos</Tag>
              <Tag icon={<FiStar />}>{totals.stars.toLocaleString()} stars</Tag>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function Tag({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5">
      {icon} {children}
    </span>
  );
}
