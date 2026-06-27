import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/github.functions-B8PG96Ll.js
var headers = (userToken) => {
	const token = userToken || process.env.GITHUB_TOKEN;
	return {
		Accept: "application/vnd.github+json",
		"X-GitHub-Api-Version": "2022-11-28",
		"User-Agent": "CodeDNA",
		...token ? { Authorization: `Bearer ${token}` } : {}
	};
};
async function gh(url, token) {
	const res = await fetch(url, { headers: headers(token) });
	if (!res.ok) {
		const body = await res.text().catch(() => "");
		throw new Error(`GitHub ${res.status}: ${body.slice(0, 200)}`);
	}
	return res.json();
}
var fetchGithubProfile_createServerFn_handler = createServerRpc({
	id: "57504de59668c746398ed2a22a09681e6ed95ca26fefcfcd28da57e0f0ef85c8",
	name: "fetchGithubProfile",
	filename: "src/lib/github.functions.ts"
}, (opts) => fetchGithubProfile.__executeServer(opts));
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
}).handler(fetchGithubProfile_createServerFn_handler, async ({ data }) => {
	const { username, token } = data;
	const user = await gh(`https://api.github.com/users/${username}`, token);
	const repos = await gh(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`, token);
	const top = repos.filter((r) => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 15);
	const langResults = await Promise.all(top.map(async (r) => {
		try {
			return await gh(`https://api.github.com/repos/${r.full_name}/languages`, token);
		} catch {
			return {};
		}
	}));
	const languageBytes = {};
	for (const lr of langResults) for (const [lang, bytes] of Object.entries(lr)) languageBytes[lang] = (languageBytes[lang] || 0) + bytes;
	const original = repos.filter((r) => !r.fork);
	return {
		user,
		repos,
		languageBytes,
		totals: {
			stars: original.reduce((s, r) => s + r.stargazers_count, 0),
			forks: original.reduce((s, r) => s + r.forks_count, 0),
			repos: original.length,
			originalRepos: original.length,
			topics: Array.from(new Set(original.flatMap((r) => r.topics || []))).slice(0, 30)
		}
	};
});
//#endregion
export { fetchGithubProfile_createServerFn_handler };
