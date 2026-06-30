import { createServerFn } from "@tanstack/react-start";

export type GhUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  company: string | null;
  blog: string | null;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  created_at: string;
  html_url: string;
};

export type GhRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  size: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  topics?: string[];
};

export type GithubData = {
  user: GhUser;
  repos: GhRepo[];
  languageBytes: Record<string, number>;
  totals: {
    stars: number;
    forks: number;
    repos: number;
    originalRepos: number;
    topics: string[];
  };
};

const headers = (userToken?: string) => {
  const token = userToken || process.env.GITHUB_TOKEN;
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "CodeDNA",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

async function gh<T>(url: string, token?: string): Promise<T> {
  const res = await fetch(url, { headers: headers(token) });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub ${res.status}: ${body.slice(0, 200)}`);
  }
  return res.json() as Promise<T>;
}

export const fetchGithubProfile = createServerFn({ method: "GET" })
  .inputValidator((d: { username: string; token?: string }) => {
    const u = String(d?.username || "").trim();
    if (!u || !/^[a-zA-Z0-9-]{1,39}$/.test(u)) throw new Error("Invalid username");
    let token: string | undefined;
    if (d?.token) {
      const t = String(d.token).trim();
      if (t.length > 0) {
        if (t.length > 255 || !/^(gh[pousr]_[A-Za-z0-9_]+|github_pat_[A-Za-z0-9_]+)$/.test(t)) {
          throw new Error("Invalid token");
        }
        token = t;
      }
    }
    return { username: u, token };
  })
  .handler(async ({ data }): Promise<GithubData> => {
    const { username, token } = data;
    const user = await gh<GhUser>(`https://api.github.com/users/${username}`, token);
    const repos = await gh<GhRepo[]>(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`,
      token
    );

    // Aggregate languages from top ~15 non-fork repos by stars in parallel
    const top = repos
      .filter((r) => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 15);

    const langResults = await Promise.all(
      top.map(async (r) => {
        try {
          return await gh<Record<string, number>>(
            `https://api.github.com/repos/${r.full_name}/languages`,
            token
          );
        } catch {
          return {} as Record<string, number>;
        }
      })
    );
    const languageBytes: Record<string, number> = {};
    for (const lr of langResults) {
      for (const [lang, bytes] of Object.entries(lr)) {
        languageBytes[lang] = (languageBytes[lang] || 0) + bytes;
      }
    }

    const original = repos.filter((r) => !r.fork);
    const totals = {
      stars: original.reduce((s, r) => s + r.stargazers_count, 0),
      forks: original.reduce((s, r) => s + r.forks_count, 0),
      repos: original.length,
      originalRepos: original.length,
      topics: Array.from(new Set(original.flatMap((r) => r.topics || []))).slice(0, 30),
    };

    return { user, repos, languageBytes, totals };
  });
