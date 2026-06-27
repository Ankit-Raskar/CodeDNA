import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/groq.functions-Dr55mgpc.js
var FALLBACK = {
	archetype: "Code Explorer",
	tagline: "Forever curious, forever shipping.",
	strengths: [
		"Versatile across stacks",
		"Consistent contributor",
		"Pragmatic problem solver"
	],
	weaknesses: [
		"Could deepen system design",
		"Limited public docs",
		"Sparse test coverage"
	],
	learn_next: [
		"Distributed systems",
		"Type theory",
		"Performance profiling"
	],
	career_paths: [
		"Full-stack engineer",
		"Developer advocate",
		"Founding engineer"
	],
	project_ideas: [
		"Open-source CLI for daily devtools",
		"AI-powered code review bot",
		"Realtime collaborative editor"
	],
	personalities: {
		game_character: "Link from Zelda — resourceful explorer",
		avenger: "Iron Man — builds the suit, then iterates",
		city: "Tokyo — dense, layered, always moving",
		animal: "Octopus — parallel problem solver",
		weapon: "Katana — precise and elegant",
		movie: "The Matrix — sees patterns others don't"
	}
};
var generateAIInsights_createServerFn_handler = createServerRpc({
	id: "75a7bcecec6992c0c89c5610e4b245c2d39fd0e1dc375ff36de8ac416d069df5",
	name: "generateAIInsights",
	filename: "src/lib/groq.functions.ts"
}, (opts) => generateAIInsights.__executeServer(opts));
var generateAIInsights = createServerFn({ method: "POST" }).inputValidator((d) => ({ summary: String(d?.summary || "").slice(0, 4e3) })).handler(generateAIInsights_createServerFn_handler, async ({ data }) => {
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
				Authorization: `Bearer ${key}`
			},
			body: JSON.stringify({
				model: "llama-3.3-70b-versatile",
				temperature: .8,
				response_format: { type: "json_object" },
				messages: [{
					role: "system",
					content: system
				}, {
					role: "user",
					content: `Developer GitHub summary:\n${data.summary}`
				}]
			})
		});
		if (!res.ok) {
			console.error("Groq error", res.status, await res.text().catch(() => ""));
			return FALLBACK;
		}
		const content = (await res.json()).choices?.[0]?.message?.content || "{}";
		const parsed = JSON.parse(content);
		return {
			...FALLBACK,
			...parsed,
			personalities: {
				...FALLBACK.personalities,
				...parsed.personalities || {}
			}
		};
	} catch (e) {
		console.error("Groq exception", e);
		return FALLBACK;
	}
});
//#endregion
export { generateAIInsights_createServerFn_handler };
