import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { useState, type ReactNode } from "react";
import { FiArrowLeft, FiArrowRight, FiGithub } from "react-icons/fi";
import { z } from "zod";

import { fetchGithubProfile, type GithubData } from "@/lib/github.functions";
import { calcLevel, topLanguages } from "@/lib/personality";
import { computeArchetype, RARITY_STYLE, type Archetype } from "@/lib/archetype";
import { DNABackground } from "@/components/DNABackground";

const searchSchema = z.object({
  a: z.string().optional().default(""),
  b: z.string().optional().default(""),
});

export const Route = createFileRoute("/compare")({
  validateSearch: (s: Record<string, unknown>) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Developer Battle · CodeDNA" },
      { name: "description", content: "Compare two GitHub developers head-to-head. Stats, archetypes, languages, XP." },
    ],
  }),
  component: ComparePage,
});

function useDev(username: string) {
  return useQuery({
    queryKey: ["gh", username],
    enabled: !!username && username.length > 0,
    queryFn: () => fetchGithubProfile({ data: { username } }),
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
}

function UserInput({
  side, value, onSubmit,
}: { side: "A" | "B"; value: string; onSubmit: (v: string) => void }) {
  const [v, setV] = useState(value);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (v.trim()) onSubmit(v.trim()); }}
      className="card-soft flex items-center gap-2 rounded-2xl p-2"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl grad-primary text-sm font-black text-white">
        {side}
      </span>
      <FiGithub className="ml-1 text-muted-foreground" />
      <input
        value={v}
        onChange={(e) => setV(e.target.value)}
        placeholder="github username"
        className="min-w-0 flex-1 bg-transparent px-1 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
      />
      <button className="rounded-xl grad-primary px-3 py-1.5 text-xs font-bold text-white">
        Load
      </button>
    </form>
  );
}

type Stat = { label: string; a: number | string; b: number | string; winner: "a" | "b" | "tie"; suffix?: string };

function buildStats(a: GithubData, b: GithubData): Stat[] {
  const la = calcLevel(a);
  const lb = calcLevel(b);
  const pick = (av: number, bv: number): "a" | "b" | "tie" =>
    av > bv ? "a" : bv > av ? "b" : "tie";
  const langA = Object.keys(a.languageBytes).length;
  const langB = Object.keys(b.languageBytes).length;
  return [
    { label: "Level", a: la.level, b: lb.level, winner: pick(la.level, lb.level) },
    { label: "Total XP", a: la.xp.toLocaleString(), b: lb.xp.toLocaleString(), winner: pick(la.xp, lb.xp) },
    { label: "Repositories", a: a.totals.repos, b: b.totals.repos, winner: pick(a.totals.repos, b.totals.repos) },
    { label: "Stars earned", a: a.totals.stars.toLocaleString(), b: b.totals.stars.toLocaleString(), winner: pick(a.totals.stars, b.totals.stars) },
    { label: "Forks", a: a.totals.forks, b: b.totals.forks, winner: pick(a.totals.forks, b.totals.forks) },
    { label: "Languages", a: langA, b: langB, winner: pick(langA, langB) },
    { label: "Followers", a: a.user.followers, b: b.user.followers, winner: pick(a.user.followers, b.user.followers) },
  ];
}

function BattleCard({
  data, archetype, side,
}: { data: GithubData; archetype: Archetype; side: "A" | "B" }) {
  const r = RARITY_STYLE[archetype.rarity];
  const top = topLanguages(data.languageBytes, 5);
  const level = calcLevel(data);
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "A" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
      className="relative overflow-hidden rounded-[32px] p-[2px]"
      style={{
        backgroundImage: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
        boxShadow: `0 30px 80px -20px ${r.glow}`,
      }}
    >
      <div className="relative h-full overflow-hidden rounded-[30px] bg-slate-950 p-6 text-white md:p-8">
        <motion.div
          aria-hidden
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute inset-y-0 w-1/2"
          style={{ background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full blur-3xl"
          style={{ background: archetype.color, opacity: 0.4 }}
        />

        <div className="relative flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white/80">
            Fighter {side}
          </span>
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest"
            style={{ background: r.color, color: "#0b1020" }}
          >
            {archetype.rarity} · {r.label}
          </span>
        </div>

        <div className="relative mt-5 flex items-center gap-4">
          <img
            src={data.user.avatar_url}
            alt={data.user.login}
            className="h-20 w-20 rounded-2xl border-2 border-white/20 object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-lg font-bold">{data.user.name || data.user.login}</p>
            <p className="truncate text-sm text-white/60">@{data.user.login}</p>
            <div className="mt-2 flex items-center gap-2">
              <span
                className="grid h-7 w-7 place-items-center rounded-lg text-base"
                style={{ background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})` }}
              >
                {archetype.emoji}
              </span>
              <span className="text-sm font-bold">{archetype.name}</span>
            </div>
          </div>
        </div>

        <div className="relative mt-5 grid grid-cols-3 gap-2 text-center">
          {[
            { l: "LVL", v: level.level },
            { l: "★", v: data.totals.stars.toLocaleString() },
            { l: "REPOS", v: data.totals.repos },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-white/5 p-3">
              <div className="text-xl font-black">{s.v}</div>
              <div className="text-[9px] uppercase tracking-widest text-white/50">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="relative mt-4">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/60">
            <span>Power</span><span>{archetype.power}/100</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${archetype.power}%` }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${archetype.color}, ${r.color})` }}
            />
          </div>
        </div>

        <div className="relative mt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Top languages</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {top.map((l) => (
              <span key={l.name} className="rounded-full bg-white/10 px-2 py-0.5 text-[11px]">
                {l.name} · {l.pct}%
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatLine({ s }: { s: Stat }) {
  const winA = s.winner === "a";
  const winB = s.winner === "b";
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-border/40 py-3 last:border-b-0">
      <div className={`text-right text-xl font-black tabular-nums md:text-2xl ${winA ? "text-foreground" : "text-muted-foreground/60"}`}>
        {s.a}
        {winA && <span className="ml-2 inline-block rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-emerald-600">+1</span>}
      </div>
      <div className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
        {s.label}
      </div>
      <div className={`text-left text-xl font-black tabular-nums md:text-2xl ${winB ? "text-foreground" : "text-muted-foreground/60"}`}>
        {winB && <span className="mr-2 inline-block rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-emerald-600">+1</span>}
        {s.b}
      </div>
    </div>
  );
}

function StatusCard({ children }: { children: ReactNode }) {
  return (
    <div className="card-soft grid min-h-[420px] place-items-center rounded-[32px] p-10 text-center text-sm text-muted-foreground">
      {children}
    </div>
  );
}

function ComparePage() {
  const { a, b } = Route.useSearch();
  const navigate = useNavigate({ from: "/compare" });
  const qa = useDev(a);
  const qb = useDev(b);

  const setA = (v: string) => navigate({ search: (p: { a?: string; b?: string }) => ({ ...p, a: v }) });
  const setB = (v: string) => navigate({ search: (p: { a?: string; b?: string }) => ({ ...p, b: v }) });

  const archA = qa.data ? computeArchetype(qa.data) : null;
  const archB = qb.data ? computeArchetype(qb.data) : null;
  const stats = qa.data && qb.data ? buildStats(qa.data, qb.data) : null;

  const winsA = stats?.filter((s) => s.winner === "a").length ?? 0;
  const winsB = stats?.filter((s) => s.winner === "b").length ?? 0;
  const overall = winsA === winsB ? "tie" : winsA > winsB ? "a" : "b";

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <DNABackground density={0.8} />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6">
        <Link to="/" className="flex items-center gap-2 text-sm">
          <FiArrowLeft />
          <span className="font-display font-bold">CodeDNA</span>
        </Link>
        <span className="rounded-full border border-border bg-white/70 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
          ⚔ Battle Mode
        </span>
      </nav>

      <section className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl font-black md:text-7xl"
        >
          Developer <span className="text-gradient">Battle</span>
        </motion.h1>
        <p className="mt-3 text-muted-foreground">
          Pit two GitHub profiles head-to-head. Whose chronicle wins?
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <UserInput side="A" value={a} onSubmit={setA} />
          <div className="grid h-12 w-12 place-items-center justify-self-center rounded-full bg-slate-900 text-sm font-black uppercase text-white shadow-lg">
            VS
          </div>
          <UserInput side="B" value={b} onSubmit={setB} />
        </div>

        {(!a || !b) && (
          <p className="mt-4 text-xs text-muted-foreground">
            Try: <button onClick={() => { setA("gaearon"); setB("torvalds"); }} className="font-bold text-foreground underline-offset-2 hover:underline">gaearon vs torvalds</button>
          </p>
        )}
      </section>

      <section className="relative z-10 mx-auto mt-12 grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        <div>
          {!a ? (
            <StatusCard>Enter a username on the left to summon Fighter A.</StatusCard>
          ) : qa.isLoading ? (
            <StatusCard>Summoning @{a}…</StatusCard>
          ) : qa.isError || !qa.data ? (
            <StatusCard>Couldn&apos;t find @{a}.</StatusCard>
          ) : (
            <BattleCard data={qa.data} archetype={archA!} side="A" />
          )}
        </div>
        <div>
          {!b ? (
            <StatusCard>Enter a username on the right to summon Fighter B.</StatusCard>
          ) : qb.isLoading ? (
            <StatusCard>Summoning @{b}…</StatusCard>
          ) : qb.isError || !qb.data ? (
            <StatusCard>Couldn&apos;t find @{b}.</StatusCard>
          ) : (
            <BattleCard data={qb.data} archetype={archB!} side="B" />
          )}
        </div>
      </section>

      <AnimatePresence>
        {stats && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 mx-auto mt-10 max-w-4xl px-6"
          >
            <div className="card-soft rounded-[32px] p-6 md:p-10">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                  Stat-by-stat
                </p>
                <div className="text-xs font-bold">
                  {winsA} <span className="text-muted-foreground">vs</span> {winsB}
                </div>
              </div>
              <div>
                {stats.map((s) => <StatLine key={s.label} s={s} />)}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
                className="mt-8 grid place-items-center"
              >
                {overall === "tie" ? (
                  <div className="rounded-2xl border border-border bg-muted px-5 py-3 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Result</p>
                    <p className="text-2xl font-black">It&apos;s a tie 🤝</p>
                  </div>
                ) : (
                  <div
                    className="rounded-2xl px-6 py-4 text-center text-white shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, ${(overall === "a" ? archA : archB)!.color}, ${(overall === "a" ? archA : archB)!.color2})`,
                    }}
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Winner</p>
                    <p className="mt-1 text-3xl font-black">
                      @{overall === "a" ? qa.data!.user.login : qb.data!.user.login}
                    </p>
                    <p className="mt-1 text-xs text-white/80">
                      Took {Math.max(winsA, winsB)} of {stats.length} stats
                    </p>
                  </div>
                )}
              </motion.div>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <Link
                  to="/results/$username"
                  params={{ username: qa.data!.user.login }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-xs font-bold hover:bg-muted"
                >
                  @{qa.data!.user.login} chronicle <FiArrowRight />
                </Link>
                <Link
                  to="/results/$username"
                  params={{ username: qb.data!.user.login }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-xs font-bold hover:bg-muted"
                >
                  @{qb.data!.user.login} chronicle <FiArrowRight />
                </Link>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}