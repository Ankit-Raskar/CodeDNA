import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as DNABackground } from "./DNABackground-ujJ4xva5.mjs";
import { i as motion } from "../_libs/framer-motion.mjs";
import { C as FiGithub, I as FiStar, a as FiAward, g as FiCpu, i as FiArrowRight, t as FiActivity } from "../_libs/react-icons.mjs";
import { n as TokenInput, t as SearchBar } from "./TokenInput-CLsIjYn9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CCLV2esA.js
var import_jsx_runtime = require_jsx_runtime();
var POPULAR = [
	"gaearon",
	"torvalds",
	"sindresorhus",
	"vercel",
	"Ankit-Raskar"
];
function Feature({ icon, title, sub, i }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: { delay: i * .07 },
		whileHover: { y: -4 },
		className: "card-soft rounded-3xl p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl grad-primary text-white shadow-lg",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-bold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: sub
			})
		]
	});
}
function Home() {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DNABackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/",
					className: "flex items-center gap-2 font-display text-lg font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-xl grad-primary text-base",
						children: "🧬"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Code"
					}), "DNA"] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://github.com",
					target: "_blank",
					rel: "noreferrer",
					className: "hidden items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground sm:inline-flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiGithub, {}), " Powered by GitHub + Groq"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-12 text-center md:pt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .7 },
						className: "card-soft mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-pulse-glow rounded-full bg-accent" }), "Developer Personality Analyzer"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .05
						},
						className: "font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block",
								children: "🧬"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "CodeDNA"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .15
						},
						className: "mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight md:text-4xl",
						children: [
							"Turn any GitHub profile into a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-warm",
								children: "Developer Personality Report"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .22
						},
						className: "mt-4 max-w-xl text-base text-muted-foreground md:text-lg",
						children: "Discover your coding personality, strengths, achievements, and future career path."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TokenInput, { autoFocus: typeof window !== "undefined" && window.location.hash === "#token" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: .4 },
						className: "mt-5 flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => navigate({
								to: "/results/$username",
								params: { username: "gaearon" }
							}),
							className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white",
							children: ["Try Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowRight, { className: "h-3.5 w-3.5" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-wider",
							children: "Try these profiles:"
						}), POPULAR.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => navigate({
								to: "/results/$username",
								params: { username: u }
							}),
							className: "rounded-full border border-border bg-white/60 px-3 py-1 text-sm font-medium hover:bg-white hover:text-primary",
							children: ["@", u]
						}, u))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 mx-auto mt-28 grid max-w-6xl gap-4 px-6 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						i: 0,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiAward, {}),
						title: "RPG-style XP",
						sub: "Earn badges, level up, unlock achievements."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						i: 1,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiActivity, {}),
						title: "Wrapped slides",
						sub: "Your year on GitHub, story-by-story."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						i: 2,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCpu, {}),
						title: "AI mentor",
						sub: "Strengths, gaps, project ideas, careers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						i: 3,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiStar, {}),
						title: "Shareable DNA card",
						sub: "One-click PNG export for socials."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative z-10 mx-auto mt-24 max-w-7xl px-6 py-10 text-center text-xs text-muted-foreground",
				children: "Built with TanStack Start · GitHub API · Groq llama-3.3-70b"
			})
		]
	});
}
//#endregion
export { Home as component };
