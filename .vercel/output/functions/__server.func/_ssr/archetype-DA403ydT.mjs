import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BkpZn8YL.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/archetype-DA403ydT.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchGithubProfile = createServerFn({ method: "GET" }).inputValidator((d) => {
	const u = String(d?.username || "").trim();
	if (!u || !/^[a-zA-Z0-9-]{1,39}$/.test(u)) throw new Error("Invalid username");
	let token;
	if (d?.token) {
		const t = String(d.token).trim();
		if (t.length > 0) {
			if (t.length > 255 || !/^(gh[pousr]_[A-Za-z0-9_]+|github_pat_[A-Za-z0-9_]+)$/.test(t)) throw new Error("Invalid token");
			token = t;
		}
	}
	return {
		username: u,
		token
	};
}).handler(createSsrRpc("57504de59668c746398ed2a22a09681e6ed95ca26fefcfcd28da57e0f0ef85c8"));
function topLanguages(bytes, n = 6) {
	const total = Object.values(bytes).reduce((a, b) => a + b, 0) || 1;
	return Object.entries(bytes).sort((a, b) => b[1] - a[1]).slice(0, n).map(([name, value]) => ({
		name,
		value,
		pct: Math.round(value / total * 100)
	}));
}
function computeBadges(data) {
	const langs = Object.keys(data.languageBytes);
	const has = (re) => langs.some((l) => re.test(l)) || data.totals.topics.some((t) => re.test(t));
	const frontend = has(/^(JavaScript|TypeScript|HTML|CSS|Vue|Svelte)$/i) || has(/react|vue|svelte|next|tailwind/i);
	const backend = has(/^(Go|Rust|Java|Kotlin|Ruby|PHP|C#|Elixir|Scala)$/i) || has(/api|server|backend|django|rails|spring/i);
	const ai = has(/python/i) && has(/ai|ml|llm|nlp|pytorch|tensorflow|openai|huggingface/i);
	const ops = has(/docker|kubernetes|terraform|ansible|devops|infra/i);
	const systems = has(/^(C|C\+\+|Rust|Zig|Assembly)$/i);
	const open = data.totals.stars >= 50 || data.totals.forks >= 20;
	const hack = data.repos.length >= 30;
	const night = (() => {
		return data.repos.filter((r) => Date.now() - +new Date(r.pushed_at) < 1e3 * 60 * 60 * 24 * 60).length >= 8;
	})();
	return [
		{
			id: "frontend",
			name: "Frontend Wizard",
			icon: "🧙",
			description: "Conjures interfaces from CSS and caffeine.",
			earned: frontend
		},
		{
			id: "backend",
			name: "System Architect",
			icon: "🏗",
			description: "Designs the rooms behind the curtain.",
			earned: backend || systems
		},
		{
			id: "ai",
			name: "AI Researcher",
			icon: "🧠",
			description: "Whispers prompts to large language models.",
			earned: ai
		},
		{
			id: "open",
			name: "Open Source Adventurer",
			icon: "⚡",
			description: "Ships code the world can stand on.",
			earned: open
		},
		{
			id: "fullstack",
			name: "Full Stack Explorer",
			icon: "🚀",
			description: "Equally at home in pixels and pipes.",
			earned: frontend && backend
		},
		{
			id: "ops",
			name: "Infra Druid",
			icon: "🌿",
			description: "Tames clouds with YAML incantations.",
			earned: ops
		},
		{
			id: "night",
			name: "Night Owl",
			icon: "🌙",
			description: "Pushes commits while the world sleeps.",
			earned: night
		},
		{
			id: "hack",
			name: "Hackathon Warrior",
			icon: "🔥",
			description: "Ships projects faster than coffee cools.",
			earned: hack
		},
		{
			id: "bug",
			name: "Bug Hunter",
			icon: "🐞",
			description: "Hunts regressions before they breed.",
			earned: data.totals.forks >= 5
		}
	];
}
function computeAchievements(data) {
	const yearsActive = Math.max(1, Math.floor((Date.now() - +new Date(data.user.created_at)) / (1e3 * 60 * 60 * 24 * 365)));
	return [
		{
			id: "first",
			name: "First Light",
			description: "Created a GitHub account",
			earned: true
		},
		{
			id: "10repos",
			name: "Repository Collector",
			description: "Created 10+ repositories",
			earned: data.totals.repos >= 10
		},
		{
			id: "50repos",
			name: "Code Addict",
			description: "50+ repositories",
			earned: data.totals.repos >= 50
		},
		{
			id: "100repos",
			name: "Legendary Builder",
			description: "100+ repositories",
			earned: data.totals.repos >= 100
		},
		{
			id: "stars100",
			name: "Starlit",
			description: "100+ total stars",
			earned: data.totals.stars >= 100
		},
		{
			id: "stars1k",
			name: "Open Source Hero",
			description: "1000+ total stars",
			earned: data.totals.stars >= 1e3
		},
		{
			id: "polyglot",
			name: "Polyglot",
			description: "5+ languages used",
			earned: Object.keys(data.languageBytes).length >= 5
		},
		{
			id: "veteran",
			name: `${yearsActive}-Year Veteran`,
			description: `Coding on GitHub for ${yearsActive}+ years`,
			earned: yearsActive >= 3
		},
		{
			id: "ai-future",
			name: "Future AI Engineer",
			description: "Built AI-related projects",
			earned: data.totals.topics.some((t) => /ai|ml|llm|gpt|openai/i.test(t))
		}
	];
}
function calcLevel(data) {
	const xp = data.totals.repos * 80 + data.totals.stars * 25 + data.totals.forks * 15 + Object.keys(data.languageBytes).length * 60 + data.user.followers * 8;
	const level = Math.max(1, Math.floor(Math.sqrt(xp) / 4));
	const nextLevelXp = Math.pow((level + 1) * 4, 2);
	const prevLevelXp = Math.pow(level * 4, 2);
	return {
		xp,
		level,
		pct: Math.min(100, Math.max(0, Math.round((xp - prevLevelXp) / (nextLevelXp - prevLevelXp) * 100))),
		nextLevelXp,
		prevLevelXp
	};
}
function buildAISummary(data) {
	const langs = topLanguages(data.languageBytes, 8).map((l) => `${l.name} ${l.pct}%`).join(", ");
	const topRepos = [...data.repos].filter((r) => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6).map((r) => `${r.name} (${r.language || "n/a"}, ★${r.stargazers_count}) — ${r.description?.slice(0, 80) || "no description"}`).join("\n");
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
function repoTimeline(data) {
	const byYear = {};
	for (const r of data.repos) {
		const y = new Date(r.created_at).getFullYear().toString();
		byYear[y] = (byYear[y] || 0) + 1;
	}
	return Object.entries(byYear).sort(([a], [b]) => +a - +b).map(([year, count]) => ({
		year,
		count
	}));
}
function activityRadar(data) {
	const langs = Object.keys(data.languageBytes);
	const has = (re) => langs.some((l) => re.test(l)) || data.totals.topics.some((t) => re.test(t));
	const score = (b, base = 60) => b ? base + Math.min(40, data.totals.stars / 20) : 30 + Math.min(30, data.totals.repos);
	return [
		{
			axis: "Frontend",
			value: score(has(/javascript|typescript|html|css|react|vue|svelte/i))
		},
		{
			axis: "Backend",
			value: score(has(/go|rust|java|kotlin|python|ruby|php|c#|node/i))
		},
		{
			axis: "AI/ML",
			value: score(has(/python|ai|ml|llm|pytorch|tensorflow/i), 40)
		},
		{
			axis: "DevOps",
			value: score(has(/docker|kubernetes|terraform|devops|infra/i), 40)
		},
		{
			axis: "Mobile",
			value: score(has(/swift|kotlin|flutter|react.native|android|ios/i), 35)
		},
		{
			axis: "Systems",
			value: score(has(/^(c|c\+\+|rust|zig)$/i), 35)
		}
	];
}
var RARITY_STYLE = {
	Common: {
		color: "#94A3B8",
		glow: "rgba(148,163,184,0.6)",
		label: "★"
	},
	Uncommon: {
		color: "#22C55E",
		glow: "rgba(34,197,94,0.65)",
		label: "★★"
	},
	Rare: {
		color: "#3B82F6",
		glow: "rgba(59,130,246,0.7)",
		label: "★★★"
	},
	Epic: {
		color: "#A855F7",
		glow: "rgba(168,85,247,0.75)",
		label: "★★★★"
	},
	Legendary: {
		color: "#F59E0B",
		glow: "rgba(245,158,11,0.8)",
		label: "★★★★★"
	},
	Mythic: {
		color: "#EC4899",
		glow: "rgba(236,72,153,0.9)",
		label: "✦✦✦✦✦✦"
	}
};
function rarityForScore(score) {
	if (score >= 95) return "Mythic";
	if (score >= 80) return "Legendary";
	if (score >= 60) return "Epic";
	if (score >= 40) return "Rare";
	if (score >= 20) return "Uncommon";
	return "Common";
}
function computeArchetype(data) {
	const langs = Object.keys(data.languageBytes);
	const has = (re) => langs.some((l) => re.test(l)) || data.totals.topics.some((t) => re.test(t));
	const frontend = has(/javascript|typescript|html|css|react|vue|svelte|tailwind/i);
	const backend = has(/go|rust|java|kotlin|ruby|php|c#|node|python|elixir|scala/i);
	const ai = has(/python/i) && has(/ai|ml|llm|gpt|pytorch|tensorflow|openai|huggingface/i);
	const ops = has(/docker|kubernetes|terraform|ansible|devops|infra/i);
	const systems = has(/^(c|c\+\+|rust|zig)$/i);
	const mobile = has(/swift|kotlin|flutter|react.native|android|ios/i);
	const unlocked = [];
	if (frontend) unlocked.push("Frontend");
	if (backend) unlocked.push("Backend");
	if (ai) unlocked.push("AI");
	if (ops) unlocked.push("DevOps");
	if (systems) unlocked.push("Systems");
	if (mobile) unlocked.push("Mobile");
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
		color = "#8B5CF6";
		color2 = "#EC4899";
	} else if (frontend && backend && ops) {
		id = "fullstack-legend";
		name = "Fullstack Legend";
		emoji = "🚀";
		tagline = "Frontend to infra — you own it all.";
		description = "Equally fluent in pixels, pipes, and pipelines.";
		color = "#6366F1";
		color2 = "#F59E0B";
	} else if (systems) {
		id = "low-level-wizard";
		name = "Low-Level Wizard";
		emoji = "🔮";
		tagline = "You bend silicon to your will.";
		description = "Lives near the metal. Memory-safe, mostly.";
		color = "#EF4444";
		color2 = "#0F172A";
	} else if (frontend) {
		id = "frontend-wizard";
		name = "Frontend Wizard";
		emoji = "🧙";
		tagline = "Conjures interfaces from CSS and caffeine.";
		description = "Pixels obey you. Lighthouse fears you.";
		color = "#06B6D4";
		color2 = "#8B5CF6";
	} else if (backend) {
		id = "backend-monk";
		name = "Backend Monk";
		emoji = "🏗";
		tagline = "Quiet engines, loud uptime.";
		description = "Designs the rooms behind the curtain.";
		color = "#22C55E";
		color2 = "#0EA5E9";
	} else if (ops) {
		id = "infra-druid";
		name = "Infra Druid";
		emoji = "🌿";
		tagline = "Tames clouds with YAML incantations.";
		description = "Reads Helm charts like poetry.";
		color = "#10B981";
		color2 = "#6366F1";
	} else if (mobile) {
		id = "mobile-nomad";
		name = "Mobile Nomad";
		emoji = "📱";
		tagline = "Ships joy in 100MB or less.";
		description = "Pixel-perfect across every notch.";
		color = "#F472B6";
		color2 = "#8B5CF6";
	}
	const lc = Object.keys(data.languageBytes).length;
	const power = Math.min(100, Math.round(Math.log10(data.totals.stars + 1) * 18 + Math.log10(data.totals.repos + 1) * 14 + lc * 3 + Math.log10(data.user.followers + 1) * 10));
	const rarity = rarityForScore(power);
	return {
		id,
		name,
		rarity,
		emoji,
		tagline,
		description,
		color,
		color2,
		power,
		unlocked
	};
}
function predictCareer(data) {
	const t = topLanguages(data.languageBytes, 3).map((l) => l.name);
	const has = (re) => t.some((l) => re.test(l)) || data.totals.topics.some((x) => re.test(x));
	const ai = has(/python|ai|ml|llm|tensor|pytorch/i);
	const fe = has(/javascript|typescript|react|vue|svelte|css|html/i);
	const be = has(/go|rust|java|kotlin|node|ruby|php/i);
	const sys = has(/^(c|c\+\+|rust|zig)$/i);
	const ops = has(/docker|kubernetes|terraform|devops/i);
	const roles = [];
	const now = (/* @__PURE__ */ new Date()).getFullYear();
	if (fe && be) roles.push({
		title: "Staff Fullstack Engineer",
		year: `${now + 1}`,
		chance: 78,
		emoji: "🚀",
		why: "You ship both pixels and APIs."
	});
	if (ai) roles.push({
		title: "Founding AI Engineer",
		year: `${now + 2}`,
		chance: 72,
		emoji: "🧠",
		why: "Your repos read like a research lab."
	});
	if (sys) roles.push({
		title: "Systems Engineer @ Big Tech",
		year: `${now + 2}`,
		chance: 64,
		emoji: "🛠",
		why: "You operate one layer below most devs."
	});
	if (ops) roles.push({
		title: "Platform / SRE Lead",
		year: `${now + 2}`,
		chance: 60,
		emoji: "☁️",
		why: "You make infra invisible."
	});
	if (fe) roles.push({
		title: "Design Engineer",
		year: `${now + 1}`,
		chance: 58,
		emoji: "🎨",
		why: "Your UI work has taste."
	});
	if (be) roles.push({
		title: "Tech Lead, Backend",
		year: `${now + 2}`,
		chance: 56,
		emoji: "🏗",
		why: "Solid services, solid patterns."
	});
	roles.push({
		title: "Indie Hacker / Founder",
		year: `${now + 3}`,
		chance: 50,
		emoji: "🦄",
		why: "You already ship like one."
	});
	roles.push({
		title: "Open-Source Maintainer",
		year: `${now + 1}`,
		chance: 45 + Math.min(40, data.totals.stars / 20),
		emoji: "🌟",
		why: "People already use your code."
	});
	return roles.sort((a, b) => b.chance - a.chance).slice(0, 4).map((r) => ({
		...r,
		chance: Math.min(95, Math.round(r.chance))
	}));
}
//#endregion
export { computeAchievements as a, createSsrRpc as c, repoTimeline as d, topLanguages as f, calcLevel as i, fetchGithubProfile as l, activityRadar as n, computeArchetype as o, buildAISummary as r, computeBadges as s, RARITY_STYLE as t, predictCareer as u };
