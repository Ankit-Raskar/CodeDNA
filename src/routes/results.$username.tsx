import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

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

function Results() {
  const { username } = useParams({ from: "/results/$username" });

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
      <ConfettiBurst trigger={!!insights} />
      <ArchetypeRevealOverlay archetype={archetype} username={username} />
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6">
        <Link to="/" className="flex items-center gap-2 text-sm">
          <span className="grid h-8 w-8 place-items-center rounded-xl grad-primary text-base">🧬</span>
          <span className="font-display font-bold">CodeDNA</span>
        </Link>
        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="hidden w-full max-w-md md:block">
            <SearchBar initial={username} compact />
          </div>
          <Link
            to="/compare"
            search={{ a: username, b: "" }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-white"
          >
            ⚔ Compare
          </Link>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl space-y-28 px-6 md:space-y-32"
      >
        <IdentityCard data={data} />

        <section>
          <SectionTitle eyebrow="Section 02" title="Your Archetype" sub="The rare class your code reveals — collect them all." />
          <ArchetypeReveal archetype={archetype} />
        </section>

        <section>
          <SectionTitle eyebrow="Section 03" title="Developer Avatar" sub="A one-of-one identity, generated from your repos." />
          <AvatarGenerator data={data} archetype={archetype} />
        </section>

        <section>
          <SectionTitle eyebrow="Section 04" title="Badges" sub="Achievements unlocked across your journey." />
          <BadgesGrid badges={badges} />
        </section>

        <section>
          <SectionTitle eyebrow="Section 05" title="Developer XP" sub="Your RPG profile. Level up by shipping more open source." />
          <XPSystem level={level.level} pct={level.pct} xp={level.xp} achievements={achievements} archetype={archetypeName} />
        </section>

        <section>
          <SectionTitle eyebrow="Section 06" title="GitHub Wrapped" sub="Your year in code, one story at a time." />
          <Wrapped data={data} />
        </section>

        <section>
          <SectionTitle eyebrow="Section 07" title="Coding DNA" sub="Your signature traits, encoded in a double helix." />
          <DnaHelix data={data} />
        </section>

        <section>
          <SectionTitle eyebrow="Section 08" title="Language Bubbles" sub="The composition of your coding voice." />
          <LanguageBubbles data={data} />
        </section>

        <section>
          <SectionTitle eyebrow="Section 09" title="Repository Galaxy" sub="Every repo is a star. Click one to visit it." />
          <Constellation data={data} />
        </section>

        <section>
          <SectionTitle eyebrow="Section 10" title="The Numbers" />
          <StatsGrid data={data} />
          <div className="mt-5">
            <Charts data={data} />
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Section 11" title="AI Mentor" sub={ai.isLoading ? "Consulting the AI mentor…" : "Trained on your repos · ask anything"} />
          {insights ? (
            <AIMentorChat insights={insights} />
          ) : (
            <div className="card-soft rounded-3xl p-8 text-center text-sm text-muted-foreground">
              Analyzing developer personality…
            </div>
          )}
        </section>

        <section>
          <SectionTitle eyebrow="Section 12" title="Future Path" sub="Where your code is taking you next." />
          <CareerPath data={data} />
        </section>

        {insights && (
          <section>
            <SectionTitle eyebrow="Section 13" title="If You Were…" sub="Fun personality projections from your code." />
            <PersonalityCards p={insights.personalities} />
          </section>
        )}

        <section>
          <SectionTitle eyebrow="Section 14" title="Developer Timeline" />
          <Timeline data={data} />
        </section>

        {insights && (
          <>
            <section>
              <SectionTitle eyebrow="Section 15" title="Developer Yearbook" sub="The signed page. Print-ready memories." />
              <Yearbook data={data} insights={insights} />
            </section>

            <section>
              <SectionTitle eyebrow="Section 16" title="Your Trading Card" sub="Hover to tilt. Download to flex." />
              <TradingCard
                data={data}
                insights={insights}
                level={level.level}
                archetype={archetype}
                badges={badges.filter((b) => b.earned).map((b) => `${b.icon} ${b.name}`)}
              />
            </section>
          </>
        )}
      </motion.div>

      <footer className="mx-auto mt-24 max-w-7xl px-6 text-center text-xs text-muted-foreground">
        Data from GitHub · Insights by Groq · Built with TanStack Start
      </footer>
    </main>
  );
}
