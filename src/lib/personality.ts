import type { GithubData } from "./github.functions";

export type Badge = {
  id: string;
  name: string;
  icon: string;
  description: string;
  earned: boolean;
};

export type Achievement = { id: string; name: string; description: string; earned: boolean };

export function topLanguages(bytes: Record<string, number>, n = 6) {
  const total = Object.values(bytes).reduce((a, b) => a + b, 0) || 1;
  return Object.entries(bytes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([name, value]) => ({ name, value, pct: Math.round((value / total) * 100) }));
}

export function computeBadges(data: GithubData): Badge[] {
  const langs = Object.keys(data.languageBytes);
  const has = (re: RegExp) => langs.some((l) => re.test(l)) || data.totals.topics.some((t) => re.test(t));
  const frontend = has(/^(JavaScript|TypeScript|HTML|CSS|Vue|Svelte)$/i) || has(/react|vue|svelte|next|tailwind/i);
  const backend = has(/^(Go|Rust|Java|Kotlin|Ruby|PHP|C#|Elixir|Scala)$/i) || has(/api|server|backend|django|rails|spring/i);
  const ai = has(/python/i) && has(/ai|ml|llm|nlp|pytorch|tensorflow|openai|huggingface/i);
  const ops = has(/docker|kubernetes|terraform|ansible|devops|infra/i);
  const systems = has(/^(C|C\+\+|Rust|Zig|Assembly)$/i);
  const open = data.totals.stars >= 50 || data.totals.forks >= 20;
  const hack = data.repos.length >= 30;
  const night = (() => {
    // proxy: many pushes in evening months — fallback to "owl" if many recent updates
    const recent = data.repos.filter((r) => Date.now() - +new Date(r.pushed_at) < 1000 * 60 * 60 * 24 * 60).length;
    return recent >= 8;
  })();

  const list: Badge[] = [
    { id: "frontend", name: "Frontend Wizard", icon: "🧙", description: "Conjures interfaces from CSS and caffeine.", earned: frontend },
    { id: "backend", name: "System Architect", icon: "🏗", description: "Designs the rooms behind the curtain.", earned: backend || systems },
    { id: "ai", name: "AI Researcher", icon: "🧠", description: "Whispers prompts to large language models.", earned: ai },
    { id: "open", name: "Open Source Adventurer", icon: "⚡", description: "Ships code the world can stand on.", earned: open },
    { id: "fullstack", name: "Full Stack Explorer", icon: "🚀", description: "Equally at home in pixels and pipes.", earned: frontend && backend },
    { id: "ops", name: "Infra Druid", icon: "🌿", description: "Tames clouds with YAML incantations.", earned: ops },
    { id: "night", name: "Night Owl", icon: "🌙", description: "Pushes commits while the world sleeps.", earned: night },
    { id: "hack", name: "Hackathon Warrior", icon: "🔥", description: "Ships projects faster than coffee cools.", earned: hack },
    { id: "bug", name: "Bug Hunter", icon: "🐞", description: "Hunts regressions before they breed.", earned: data.totals.forks >= 5 },
  ];
  return list;
}

export function computeAchievements(data: GithubData): Achievement[] {
  const yearsActive = Math.max(1, Math.floor((Date.now() - +new Date(data.user.created_at)) / (1000 * 60 * 60 * 24 * 365)));
  return [
    { id: "first", name: "First Light", description: "Created a GitHub account", earned: true },
    { id: "10repos", name: "Repository Collector", description: "Created 10+ repositories", earned: data.totals.repos >= 10 },
    { id: "50repos", name: "Code Addict", description: "50+ repositories", earned: data.totals.repos >= 50 },
    { id: "100repos", name: "Legendary Builder", description: "100+ repositories", earned: data.totals.repos >= 100 },
    { id: "stars100", name: "Starlit", description: "100+ total stars", earned: data.totals.stars >= 100 },
    { id: "stars1k", name: "Open Source Hero", description: "1000+ total stars", earned: data.totals.stars >= 1000 },
    { id: "polyglot", name: "Polyglot", description: "5+ languages used", earned: Object.keys(data.languageBytes).length >= 5 },
    { id: "veteran", name: `${yearsActive}-Year Veteran`, description: `Coding on GitHub for ${yearsActive}+ years`, earned: yearsActive >= 3 },
    { id: "ai-future", name: "Future AI Engineer", description: "Built AI-related projects", earned: data.totals.topics.some((t) => /ai|ml|llm|gpt|openai/i.test(t)) },
  ];
}

export function calcLevel(data: GithubData) {
  // XP formula: weighted sum
  const xp =
    data.totals.repos * 80 +
    data.totals.stars * 25 +
    data.totals.forks * 15 +
    Object.keys(data.languageBytes).length * 60 +
    data.user.followers * 8;
  // level grows ~ sqrt
  const level = Math.max(1, Math.floor(Math.sqrt(xp) / 4));
  const nextLevelXp = Math.pow((level + 1) * 4, 2);
  const prevLevelXp = Math.pow(level * 4, 2);
  const pct = Math.min(100, Math.max(0, Math.round(((xp - prevLevelXp) / (nextLevelXp - prevLevelXp)) * 100)));
  return { xp, level, pct, nextLevelXp, prevLevelXp };
}

export function buildAISummary(data: GithubData) {
  const langs = topLanguages(data.languageBytes, 8)
    .map((l) => `${l.name} ${l.pct}%`)
    .join(", ");
  const topRepos = [...data.repos]
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map((r) => `${r.name} (${r.language || "n/a"}, ★${r.stargazers_count}) — ${r.description?.slice(0, 80) || "no description"}`)
    .join("\n");
  return `Username: ${data.user.login}
Name: ${data.user.name || "n/a"}
Bio: ${data.user.bio || "n/a"}
Joined: ${data.user.created_at}
Followers: ${data.user.followers}, Following: ${data.user.following}
Public repos: ${data.user.public_repos}, Original: ${data.totals.repos}, Stars: ${data.totals.stars}, Forks: ${data.totals.forks}
Top languages: ${langs}
Top topics: ${data.totals.topics.slice(0, 12).join(", ") || "none"}
Top repos:
${topRepos}`;
}

export function repoTimeline(data: GithubData) {
  // group by year of creation
  const byYear: Record<string, number> = {};
  for (const r of data.repos) {
    const y = new Date(r.created_at).getFullYear().toString();
    byYear[y] = (byYear[y] || 0) + 1;
  }
  return Object.entries(byYear).sort(([a], [b]) => +a - +b).map(([year, count]) => ({ year, count }));
}

export function activityRadar(data: GithubData) {
  const langs = Object.keys(data.languageBytes);
  const has = (re: RegExp) => langs.some((l) => re.test(l)) || data.totals.topics.some((t) => re.test(t));
  const score = (b: boolean, base = 60) => (b ? base + Math.min(40, data.totals.stars / 20) : 30 + Math.min(30, data.totals.repos));
  return [
    { axis: "Frontend", value: score(has(/javascript|typescript|html|css|react|vue|svelte/i)) },
    { axis: "Backend", value: score(has(/go|rust|java|kotlin|python|ruby|php|c#|node/i)) },
    { axis: "AI/ML", value: score(has(/python|ai|ml|llm|pytorch|tensorflow/i), 40) },
    { axis: "DevOps", value: score(has(/docker|kubernetes|terraform|devops|infra/i), 40) },
    { axis: "Mobile", value: score(has(/swift|kotlin|flutter|react.native|android|ios/i), 35) },
    { axis: "Systems", value: score(has(/^(c|c\+\+|rust|zig)$/i), 35) },
  ];
}
