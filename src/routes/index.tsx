import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DNABackground } from "@/components/DNABackground";
import { SearchBar } from "@/components/SearchBar";
import { TokenInput } from "@/components/TokenInput";
import { FiActivity, FiAward, FiCpu, FiStar, FiArrowRight, FiGithub, FiTerminal } from "react-icons/fi";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeDNA — Turn any GitHub profile into a Developer Personality Report" },
      { name: "description", content: "Discover your coding personality, strengths, achievements, and future career path. GitHub Wrapped meets RPG character sheet." },
    ],
  }),
  component: Home,
});

const POPULAR = ["gaearon", "torvalds", "sindresorhus", "vercel", "Ankit-Raskar"];

function Feature({ icon, title, sub, i }: { icon: React.ReactNode; title: string; sub: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: i * 0.07 }}
      whileHover={{ y: -4 }}
      className="card-soft rounded-3xl p-6"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl grad-primary text-foreground shadow-lg">{icon}</div>
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
    </motion.div>
  );
}

function HeroDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute -right-[10%] top-[40%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
      
      {/* Floating GitHub Icons */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] text-foreground/5 text-8xl md:left-[15%] md:top-[30%]"
      >
        <FiGithub />
      </motion.div>
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[5%] top-[15%] text-foreground/5 text-6xl md:right-[20%] md:top-[25%]"
      >
        <FiTerminal />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-[20%] bottom-[30%] text-foreground/5 text-5xl md:left-[25%] md:bottom-[20%]"
      >
        <FiGithub />
      </motion.div>
    </div>
  );
}

function TypingSubtitle() {
  const subtitleText = "Discover your coding personality, strengths, achievements, and future career path.";
  return (
    <motion.h2
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.02, delayChildren: 0.3 } }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg flex flex-wrap justify-center gap-[0.3em]"
    >
      {subtitleText.split(" ").map((word, i) => (
        <span key={i} className="inline-flex">
          {word.split("").map((char, j) => (
            <motion.span key={j} variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0 }
            }}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen overflow-hidden">
      <DNABackground />
      <HeroDecorations />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-xl grad-primary text-base">🧬</span>
          <span><span className="text-gradient">Code</span>DNA</span>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground sm:inline-flex">
          <FiGithub /> Powered by GitHub + Groq
        </a>
      </nav>

      <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-12 text-center md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card-soft mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur-xl"
        >
          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-accent" />
          Developer Personality Analyzer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
        >
          <span className="inline-block">🧬</span> <span className="text-gradient">CodeDNA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight md:text-4xl"
        >
          Turn any GitHub profile into a <span className="text-gradient-warm">Developer Personality Report</span>.
        </motion.p>

        <TypingSubtitle />

        <div className="relative mt-8 w-full max-w-md">
          <SearchBar />
          <TokenInput autoFocus={typeof window !== "undefined" && window.location.hash === "#token"} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Try Example Profiles</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {POPULAR.map((u) => (
              <button
                key={u}
                onClick={() => navigate({ to: "/results/$username", params: { username: u } })}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-border/50 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-md transition-all hover:border-primary/50 hover:bg-white/10 hover:text-primary hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
              >
                <FiGithub className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                {u}
                <FiArrowRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto mt-28 grid max-w-6xl gap-4 px-6 md:grid-cols-4">
        <Feature i={0} icon={<FiAward />} title="RPG-style XP" sub="Earn badges, level up, unlock achievements." />
        <Feature i={1} icon={<FiActivity />} title="Wrapped slides" sub="Your year on GitHub, story-by-story." />
        <Feature i={2} icon={<FiCpu />} title="AI mentor" sub="Strengths, gaps, project ideas, careers." />
        <Feature i={3} icon={<FiStar />} title="Shareable DNA card" sub="One-click PNG export for socials." />
      </section>

      <footer className="relative z-10 mx-auto mt-24 max-w-7xl px-6 py-10 text-center text-xs text-muted-foreground">
        Built with TanStack Start · GitHub API · Groq llama-3.3-70b
      </footer>
    </main>
  );
}

