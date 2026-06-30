import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DNABackground } from "@/components/DNABackground";
import { SearchBar } from "@/components/SearchBar";
import { TokenInput } from "@/components/TokenInput";
import { FiActivity, FiAward, FiCpu, FiStar, FiArrowRight, FiGithub } from "react-icons/fi";

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
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl grad-primary text-white shadow-lg">{icon}</div>
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
    </motion.div>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen overflow-hidden">
      <DNABackground />

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
          className="card-soft mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-accent" />
          Developer Personality Analyzer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05 }}
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          Discover your coding personality, strengths, achievements, and future career path.
        </motion.p>

        <SearchBar />
        <TokenInput autoFocus={typeof window !== "undefined" && window.location.hash === "#token"} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-5 flex items-center gap-2"
        >
          <button
            onClick={() => navigate({ to: "/results/$username", params: { username: "gaearon" } })}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white"
          >
            Try Demo <FiArrowRight className="h-3.5 w-3.5" />
          </button>
        </motion.div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="text-xs uppercase tracking-wider">Try these profiles:</span>
          {POPULAR.map((u) => (
            <button
              key={u}
              onClick={() => navigate({ to: "/results/$username", params: { username: u } })}
              className="rounded-full border border-border bg-white/60 px-3 py-1 text-sm font-medium hover:bg-white hover:text-primary"
            >
              @{u}
            </button>
          ))}
        </div>
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
