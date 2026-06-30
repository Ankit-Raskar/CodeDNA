import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMapPin, FiUsers, FiGitBranch, FiStar, FiExternalLink } from "react-icons/fi";
import type { GithubData } from "@/lib/github.functions";

function AnimatedCounter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let animationFrame: number;
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
}

export function IdentityCard({ data }: { data: GithubData }) {
  const { user, totals } = data;
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  
  // Deeper 3D effect
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 150, damping: 15 });
  const shineX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ perspective: 1500 }}
      className="mt-12"
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Your Developer Passport</p>
      
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-[32px] border border-border bg-card p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-2xl md:p-12"
      >
        {/* Dynamic lighting effects */}
        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[100px]" />
        
        {/* Shine effect based on mouse position */}
        <motion.div 
          className="pointer-events-none absolute inset-0 z-20 opacity-20"
          style={{
            background: "linear-gradient(105deg, transparent 20%, white 25%, transparent 30%)",
            backgroundSize: "200% 200%",
            backgroundPositionX: shineX,
          }}
        />

        <div className="absolute right-8 top-8 rounded-full border border-border bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-foreground/70 shadow-inner backdrop-blur-md">
          CodeDNA · 2026
        </div>

        <div className="relative z-10 flex flex-col items-start gap-10 md:flex-row md:items-center" style={{ transform: "translateZ(50px)" }}>
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 opacity-60 blur-xl" />
            <motion.img
              initial={{ scale: 0.85, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={user.avatar_url}
              alt={user.login}
              className="relative h-36 w-36 rounded-3xl border-[3px] border-border object-cover shadow-2xl md:h-48 md:w-48"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="font-display text-4xl font-black tracking-tight text-foreground md:text-6xl drop-shadow-lg">{user.name || user.login}</h1>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/10 px-4 py-1.5 text-xs font-semibold text-foreground/80 transition-all hover:bg-white/20 hover:text-foreground backdrop-blur-md">
                @{user.login} <FiExternalLink className="h-3 w-3" />
              </a>
            </div>
            {user.bio && <p className="mt-4 max-w-2xl text-lg text-foreground/70 leading-relaxed font-medium drop-shadow-sm" style={{ transform: "translateZ(30px)" }}>{user.bio}</p>}
            
            <div className="mt-8 flex flex-wrap gap-3" style={{ transform: "translateZ(20px)" }}>
              {user.location && <Tag icon={<FiMapPin />}>{user.location}</Tag>}
              <Tag icon={<FiUsers />}><AnimatedCounter value={user.followers} /> followers</Tag>
              <Tag icon={<FiUsers />}><AnimatedCounter value={user.following} /> following</Tag>
              <Tag icon={<FiGitBranch />}><AnimatedCounter value={totals.repos} /> repos</Tag>
              <Tag icon={<FiStar />}><AnimatedCounter value={totals.stars} /> stars</Tag>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function Tag({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground/90 shadow-lg backdrop-blur-md transition-all hover:bg-white/10">
      <span className="text-cyan-400">{icon}</span> 
      <span>{children}</span>
    </span>
  );
}
