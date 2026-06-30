import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";

import { fetchGithubProfile } from "@/lib/github.functions";
import { generateAIInsights } from "@/lib/groq.functions";
import { buildAISummary, calcLevel, computeAchievements, computeBadges } from "@/lib/personality";
import { getStoredToken } from "@/components/TokenInput";
import { RateLimitModal } from "@/components/RateLimitModal";

import { LoadingScreen } from "@/components/LoadingScreen";
import { SearchBar } from "@/components/SearchBar";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { IdentityCard } from "@/components/results/IdentityCard";
import { SectionTitle } from "@/components/results/SectionTitle";
import { ArchetypeReveal } from "@/components/results/ArchetypeReveal";
import { ArchetypeRevealOverlay } from "@/components/results/ArchetypeRevealOverlay";
import { AvatarGenerator } from "@/components/results/AvatarGenerator";
import { BadgesGrid } from "@/components/results/BadgesGrid";
import { XPSystem } from "@/components/results/XPSystem";
import { StatsGrid } from "@/components/results/StatsGrid";
import { Charts } from "@/components/results/Charts";
import { LanguageBubbles } from "@/components/results/LanguageBubbles";
import { AIMentorChat } from "@/components/results/AIMentorChat";
import { CareerPath } from "@/components/results/CareerPath";
import { PersonalityCards } from "@/components/results/PersonalityCards";
import { Timeline } from "@/components/results/Timeline";
import { Constellation } from "@/components/results/Constellation";
import { TradingCard } from "@/components/results/TradingCard";
import { Wrapped } from "@/components/results/Wrapped";
import { Yearbook } from "@/components/results/Yearbook";
import { DnaHelix } from "@/components/results/DnaHelix";
import { computeArchetype } from "@/lib/archetype";

export const Route = createFileRoute("/results/$username")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.username} · CodeDNA` },
      { name: "description", content: `Developer Personality Report for @${params.username} — stats, badges, AI insights.` },
      { property: "og:title", content: `${params.username}'s Developer DNA` },
      { property: "og:description", content: `Decoded GitHub personality, level, top languages, and AI-generated insights.` },
    ],
  }),
  component: Results,
});

function ScrollSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {children}
    </motion.section>
  );
}

function Results() {
  const { username } = useParams({ from: "/results/$username" });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const gh = useQuery({
    queryKey: ["gh", username],
    queryFn: () => fetchGithubProfile({ data: { username, token: getStoredToken() } }),
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });

  const ai = useQuery({
    queryKey: ["ai", username],
    enabled: !!gh.data,
    queryFn: () => generateAIInsights({ data: { summary: buildAISummary(gh.data!) } }),
    staleTime: 1000 * 60 * 30,
  });

  if (gh.isLoading) return <LoadingScreen username={username} />;
  if (gh.isError || !gh.data) {
    const msg = (gh.error as Error)?.message || "";
    const is404 = msg.includes("404");
    const isRate = msg.includes("403") || msg.toLowerCase().includes("rate");
    const hasToken = !!getStoredToken();

    if (isRate) {
      return (
        <main className="relative min-h-screen px-6">
          <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-6">
            <Link to="/" className="flex items-center gap-2 text-sm">
              <span className="grid h-8 w-8 place-items-center rounded-xl grad-primary text-base">🧬</span>
              <span className="font-display font-bold"><span className="text-gradient">Code</span>DNA</span>
            </Link>
          </nav>
          <RateLimitModal
            open
            hasToken={hasToken}
            onClose={() => window.history.back()}
            onAddToken={() => { window.location.href = "/#token"; }}
            onTryDemo={() => { window.location.href = "/results/gaearon"; }}
            onTryAgain={() => gh.refetch()}
          />
        </main>
      );
    }

    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="card-soft max-w-md rounded-3xl p-10 text-center">
          <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl grad-primary text-3xl text-white shadow">
            {is404 ? "🔍" : "⚠️"}
          </div>
          <h1 className="font-display text-2xl font-bold">
            {is404 ? "User not found" : "Couldn't analyze"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {is404 ? `No GitHub user called @${username}.` : "Something went wrong. Try again."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full grad-primary px-5 py-2.5 text-sm font-semibold text-white">
              <FiArrowLeft /> Back home
            </Link>
          </div>
        </div>
      </main>
    );
  }


  const data = gh.data;
  const badges = computeBadges(data);
  const achievements = computeAchievements(data);
  const level = calcLevel(data);
  const insights = ai.data ?? null;
  const archetype = computeArchetype(data);
  const archetypeName = insights?.archetype || archetype.name;

  return (
    <main className="relative min-h-screen pb-32">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 origin-left z-50 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
        style={{ scaleX }}
      />
      <ConfettiBurst trigger={!!insights} />
      <ArchetypeRevealOverlay archetype={archetype} username={username} />
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 relative z-10">
        <Link to="/" className="flex items-center gap-2 text-sm group">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-base shadow-inner transition-all group-hover:bg-white/20">🧬</span>
          <span className="font-display font-bold tracking-wider text-white">CodeDNA</span>
        </Link>
        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="hidden w-full max-w-md md:block">
            <SearchBar initial={username} compact />
          </div>
          <Link
            to="/compare"
            search={{ a: username, b: "" }}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 backdrop-blur-md transition-all shadow-lg"
          >
            ⚔ Compare
          </Link>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl space-y-32 px-6 md:space-y-40 relative z-0"
      >
        <div className="relative pt-10">
          <IdentityCard data={data} />
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to explore</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <FiChevronDown className="h-5 w-5 text-cyan-400" />
            </motion.div>
          </motion.div>
        </div>

        <ScrollSection>
          <SectionTitle eyebrow="Section 02" title="Your Archetype" sub="The rare class your code reveals — collect them all." />
          <ArchetypeReveal archetype={archetype} />
        </ScrollSection>

        <ScrollSection>
          <SectionTitle eyebrow="Section 03" title="Developer Avatar" sub="A one-of-one identity, generated from your repos." />
          <AvatarGenerator data={data} archetype={archetype} />
        </ScrollSection>

        <ScrollSection>
          <SectionTitle eyebrow="Section 04" title="Badges" sub="Achievements unlocked across your journey." />
          <BadgesGrid badges={badges} />
        </ScrollSection>

        <ScrollSection>
          <SectionTitle eyebrow="Section 05" title="Developer XP" sub="Your RPG profile. Level up by shipping more open source." />
          <XPSystem level={level.level} pct={level.pct} xp={level.xp} achievements={achievements} archetype={archetypeName} />
        </ScrollSection>

        <ScrollSection>
          <SectionTitle eyebrow="Section 06" title="GitHub Wrapped" sub="Your year in code, one story at a time." />
          <Wrapped data={data} />
        </ScrollSection>

        <ScrollSection>
          <SectionTitle eyebrow="Section 07" title="Coding DNA" sub="Your signature traits, encoded in a double helix." />
          <DnaHelix data={data} />
        </ScrollSection>

        <ScrollSection>
          <SectionTitle eyebrow="Section 08" title="Language Bubbles" sub="The composition of your coding voice." />
          <LanguageBubbles data={data} />
        </ScrollSection>

        <ScrollSection>
          <SectionTitle eyebrow="Section 09" title="Repository Galaxy" sub="Every repo is a star. Click one to visit it." />
          <Constellation data={data} />
        </ScrollSection>

        <ScrollSection>
          <SectionTitle eyebrow="Section 10" title="The Numbers" />
          <StatsGrid data={data} />
          <div className="mt-5">
            <Charts data={data} />
          </div>
        </ScrollSection>

        <ScrollSection>
          <SectionTitle eyebrow="Section 11" title="AI Mentor" sub={ai.isLoading ? "Consulting the AI mentor…" : "Trained on your repos · ask anything"} />
          {insights ? (
            <AIMentorChat insights={insights} />
          ) : (
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f172a]/60 p-8 shadow-2xl backdrop-blur-xl md:p-12 text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="mx-auto w-12 h-12 text-3xl mb-4">🧠</motion.div>
              <p className="text-white/70 font-semibold tracking-wider uppercase text-sm">Consulting AI Mentor...</p>
            </div>
          )}
        </ScrollSection>

        <ScrollSection>
          <SectionTitle eyebrow="Section 12" title="Future Path" sub="Where your code is taking you next." />
          <CareerPath data={data} />
        </ScrollSection>

        {insights && (
          <ScrollSection>
            <SectionTitle eyebrow="Section 13" title="If You Were…" sub="Fun personality projections from your code." />
            <PersonalityCards p={insights.personalities} />
          </ScrollSection>
        )}

        <ScrollSection>
          <SectionTitle eyebrow="Section 14" title="Developer Timeline" />
          <Timeline data={data} />
        </ScrollSection>

        {insights && (
          <>
            <ScrollSection>
              <SectionTitle eyebrow="Section 15" title="Developer Yearbook" sub="The signed page. Print-ready memories." />
              <Yearbook data={data} insights={insights} />
            </ScrollSection>

            <ScrollSection>
              <SectionTitle eyebrow="Section 16" title="Your Trading Card" sub="Hover to tilt. Download to flex." />
              <TradingCard
                data={data}
                insights={insights}
                level={level.level}
                archetype={archetype}
                badges={badges.filter((b) => b.earned).map((b) => `${b.icon} ${b.name}`)}
              />
            </ScrollSection>
          </>
        )}
      </motion.div>

      <footer className="mx-auto mt-32 max-w-7xl px-6 text-center text-xs font-bold uppercase tracking-widest text-white/30 pb-10">
        Data from GitHub · Insights by Groq · Built with TanStack Start
      </footer>
    </main>
  );
}
