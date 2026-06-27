import type { GithubData } from "./github.functions";
import { topLanguages } from "./personality";

export type Rarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary" | "Mythic";

export type Archetype = {
  id: string;
  name: string;
  rarity: Rarity;
  emoji: string;
  tagline: string;
  description: string;
  color: string; // primary
  color2: string; // accent
  power: number; // 0-100
  unlocked: string[]; // unlocked classes (e.g. "Frontend", "AI")
};

const RARITY_RANK: Record<Rarity, number> = {
  Common: 0,
  Uncommon: 1,
  Rare: 2,
  Epic: 3,
  Legendary: 4,
  Mythic: 5,
};

export const RARITY_STYLE: Record<Rarity, { color: string; glow: string; label: string }> = {
  Common: { color: "#94A3B8", glow: "rgba(148,163,184,0.6)", label: "★" },
  Uncommon: { color: "#22C55E", glow: "rgba(34,197,94,0.65)", label: "★★" },
  Rare: { color: "#3B82F6", glow: "rgba(59,130,246,0.7)", label: "★★★" },
  Epic: { color: "#A855F7", glow: "rgba(168,85,247,0.75)", label: "★★★★" },
  Legendary: { color: "#F59E0B", glow: "rgba(245,158,11,0.8)", label: "★★★★★" },
  Mythic: { color: "#EC4899", glow: "rgba(236,72,153,0.9)", label: "✦✦✦✦✦✦" },
};

function rarityForScore(score: number): Rarity {
  if (score >= 95) return "Mythic";
  if (score >= 80) return "Legendary";
  if (score >= 60) return "Epic";
  if (score >= 40) return "Rare";
  if (score >= 20) return "Uncommon";
  return "Common";
}

export function computeArchetype(data: GithubData): Archetype {
  const langs = Object.keys(data.languageBytes);
  const has = (re: RegExp) =>
    langs.some((l) => re.test(l)) || data.totals.topics.some((t) => re.test(t));

  const frontend = has(/javascript|typescript|html|css|react|vue|svelte|tailwind/i);
  const backend = has(/go|rust|java|kotlin|ruby|php|c#|node|python|elixir|scala/i);
  const ai = has(/python/i) && has(/ai|ml|llm|gpt|pytorch|tensorflow|openai|huggingface/i);
  const ops = has(/docker|kubernetes|terraform|ansible|devops|infra/i);
  const systems = has(/^(c|c\+\+|rust|zig)$/i);
  const mobile = has(/swift|kotlin|flutter|react.native|android|ios/i);

  const unlocked: string[] = [];
  if (frontend) unlocked.push("Frontend");
  if (backend) unlocked.push("Backend");
  if (ai) unlocked.push("AI");
  if (ops) unlocked.push("DevOps");
  if (systems) unlocked.push("Systems");
  if (mobile) unlocked.push("Mobile");

  // Decide primary archetype
  let id = "explorer";
  let name = "Code Explorer";
  let emoji = "🧭";
  let tagline = "Forever curious, forever shipping.";
  let description = "You touch every layer of the stack and leave a trail of side-projects.";
  let color = "#6366F1";
  let color2 = "#06B6D4";

  if (ai && backend) {
    id = "ai-architect";
    name = "AI Architect";
    emoji = "🧠";
    tagline = "You design the brains behind the product.";
    description = "Trains models, ships APIs, dreams in tokens.";
    color = "#8B5CF6"; color2 = "#EC4899";
  } else if (frontend && backend && ops) {
    id = "fullstack-legend";
    name = "Fullstack Legend";
    emoji = "🚀";
    tagline = "Frontend to infra — you own it all.";
    description = "Equally fluent in pixels, pipes, and pipelines.";
    color = "#6366F1"; color2 = "#F59E0B";
  } else if (systems) {
    id = "low-level-wizard";
    name = "Low-Level Wizard";
    emoji = "🔮";
    tagline = "You bend silicon to your will.";
    description = "Lives near the metal. Memory-safe, mostly.";
    color = "#EF4444"; color2 = "#0F172A";
  } else if (frontend) {
    id = "frontend-wizard";
    name = "Frontend Wizard";
    emoji = "🧙";
    tagline = "Conjures interfaces from CSS and caffeine.";
    description = "Pixels obey you. Lighthouse fears you.";
    color = "#06B6D4"; color2 = "#8B5CF6";
  } else if (backend) {
    id = "backend-monk";
    name = "Backend Monk";
    emoji = "🏗";
    tagline = "Quiet engines, loud uptime.";
    description = "Designs the rooms behind the curtain.";
    color = "#22C55E"; color2 = "#0EA5E9";
  } else if (ops) {
    id = "infra-druid";
    name = "Infra Druid";
    emoji = "🌿";
    tagline = "Tames clouds with YAML incantations.";
    description = "Reads Helm charts like poetry.";
    color = "#10B981"; color2 = "#6366F1";
  } else if (mobile) {
    id = "mobile-nomad";
    name = "Mobile Nomad";
    emoji = "📱";
    tagline = "Ships joy in 100MB or less.";
    description = "Pixel-perfect across every notch.";
    color = "#F472B6"; color2 = "#8B5CF6";
  }

  // Power score 0..100 blends stars, repos, langs, followers
  const lc = Object.keys(data.languageBytes).length;
  const power = Math.min(
    100,
    Math.round(
      Math.log10(data.totals.stars + 1) * 18 +
        Math.log10(data.totals.repos + 1) * 14 +
        lc * 3 +
        Math.log10(data.user.followers + 1) * 10,
    ),
  );
  const rarity = rarityForScore(power);

  return { id, name, rarity, emoji, tagline, description, color, color2, power, unlocked };
}

export function compareRarity(a: Rarity, b: Rarity) {
  return RARITY_RANK[a] - RARITY_RANK[b];
}

// Career prediction: pick top 3 ordered roles + the next step
export function predictCareer(data: GithubData) {
  const t = topLanguages(data.languageBytes, 3).map((l) => l.name);
  const has = (re: RegExp) =>
    t.some((l) => re.test(l)) || data.totals.topics.some((x) => re.test(x));
  const ai = has(/python|ai|ml|llm|tensor|pytorch/i);
  const fe = has(/javascript|typescript|react|vue|svelte|css|html/i);
  const be = has(/go|rust|java|kotlin|node|ruby|php/i);
  const sys = has(/^(c|c\+\+|rust|zig)$/i);
  const ops = has(/docker|kubernetes|terraform|devops/i);

  const roles: { title: string; year: string; chance: number; emoji: string; why: string }[] = [];
  const now = new Date().getFullYear();

  if (fe && be) roles.push({ title: "Staff Fullstack Engineer", year: `${now + 1}`, chance: 78, emoji: "🚀", why: "You ship both pixels and APIs." });
  if (ai) roles.push({ title: "Founding AI Engineer", year: `${now + 2}`, chance: 72, emoji: "🧠", why: "Your repos read like a research lab." });
  if (sys) roles.push({ title: "Systems Engineer @ Big Tech", year: `${now + 2}`, chance: 64, emoji: "🛠", why: "You operate one layer below most devs." });
  if (ops) roles.push({ title: "Platform / SRE Lead", year: `${now + 2}`, chance: 60, emoji: "☁️", why: "You make infra invisible." });
  if (fe) roles.push({ title: "Design Engineer", year: `${now + 1}`, chance: 58, emoji: "🎨", why: "Your UI work has taste." });
  if (be) roles.push({ title: "Tech Lead, Backend", year: `${now + 2}`, chance: 56, emoji: "🏗", why: "Solid services, solid patterns." });
  roles.push({ title: "Indie Hacker / Founder", year: `${now + 3}`, chance: 50, emoji: "🦄", why: "You already ship like one." });
  roles.push({ title: "Open-Source Maintainer", year: `${now + 1}`, chance: 45 + Math.min(40, data.totals.stars / 20), emoji: "🌟", why: "People already use your code." });

  return roles
    .sort((a, b) => b.chance - a.chance)
    .slice(0, 4)
    .map((r) => ({ ...r, chance: Math.min(95, Math.round(r.chance)) }));
}
