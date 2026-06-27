import { createServerFn } from "@tanstack/react-start";

export type AIInsights = {
  archetype: string;
  tagline: string;
  strengths: string[];
  weaknesses: string[];
  learn_next: string[];
  career_paths: string[];
  project_ideas: string[];
  personalities: {
    game_character: string;
    avenger: string;
    city: string;
    animal: string;
    weapon: string;
    movie: string;
  };
};

const FALLBACK: AIInsights = {
  archetype: "Code Explorer",
  tagline: "Forever curious, forever shipping.",
  strengths: ["Versatile across stacks", "Consistent contributor", "Pragmatic problem solver"],
  weaknesses: ["Could deepen system design", "Limited public docs", "Sparse test coverage"],
  learn_next: ["Distributed systems", "Type theory", "Performance profiling"],
  career_paths: ["Full-stack engineer", "Developer advocate", "Founding engineer"],
  project_ideas: ["Open-source CLI for daily devtools", "AI-powered code review bot", "Realtime collaborative editor"],
  personalities: {
    game_character: "Link from Zelda — resourceful explorer",
    avenger: "Iron Man — builds the suit, then iterates",
    city: "Tokyo — dense, layered, always moving",
    animal: "Octopus — parallel problem solver",
    weapon: "Katana — precise and elegant",
    movie: "The Matrix — sees patterns others don't",
  },
};

export const generateAIInsights = createServerFn({ method: "POST" })
  .inputValidator((d: { summary: string }) => ({ summary: String(d?.summary || "").slice(0, 4000) }))
  .handler(async ({ data }): Promise<AIInsights> => {
    const key = process.env.GROQ_API_KEY;
    if (!key) return FALLBACK;

    const system = `You are a witty senior engineer profiling a developer based on their public GitHub stats. Respond ONLY with valid JSON matching this exact TypeScript type, no prose, no markdown:
{
  "archetype": string,                  // 2-4 word developer class, e.g. "Frontend Wizard"
  "tagline": string,                    // one punchy sentence
  "strengths": string[3-5],             // short concrete bullet phrases
  "weaknesses": string[3-5],            // honest but kind
  "learn_next": string[3-5],            // technologies / topics
  "career_paths": string[3-5],
  "project_ideas": string[3-5],         // ideas inspired by their stack
  "personalities": {
    "game_character": string,           // "X — short reason"
    "avenger": string,
    "city": string,
    "animal": string,
    "weapon": string,
    "movie": string
  }
}`;

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          temperature: 0.8,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: system },
            { role: "user", content: `Developer GitHub summary:\n${data.summary}` },
          ],
        }),
      });
      if (!res.ok) {
        console.error("Groq error", res.status, await res.text().catch(() => ""));
        return FALLBACK;
      }
      const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
      const content = json.choices?.[0]?.message?.content || "{}";
      const parsed = JSON.parse(content) as Partial<AIInsights>;
      return { ...FALLBACK, ...parsed, personalities: { ...FALLBACK.personalities, ...(parsed.personalities || {}) } };
    } catch (e) {
      console.error("Groq exception", e);
      return FALLBACK;
    }
  });
