import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as DNABackground } from "./DNABackground-ujJ4xva5.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { V as FiTerminal, _ as FiCpu, a as FiAward, i as FiArrowRight, t as FiActivity, w as FiGithub, z as FiStar } from "../_libs/react-icons.mjs";
import { n as TokenInput, t as SearchBar } from "./TokenInput-DQ5ttJ_x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D0Uvsjyn.js
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
				className: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl grad-primary text-foreground shadow-lg",
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
function HeroDecorations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-[10%] top-[40%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					y: [
						0,
						-30,
						0
					],
					x: [
						0,
						10,
						0
					],
					rotate: [
						0,
						5,
						0
					]
				},
				transition: {
					duration: 7,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "absolute left-[10%] top-[20%] text-foreground/5 text-8xl md:left-[15%] md:top-[30%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiGithub, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					y: [
						0,
						40,
						0
					],
					x: [
						0,
						-15,
						0
					],
					rotate: [
						0,
						-10,
						0
					]
				},
				transition: {
					duration: 9,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1
				},
				className: "absolute right-[5%] top-[15%] text-foreground/5 text-6xl md:right-[20%] md:top-[25%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiTerminal, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					y: [
						0,
						-20,
						0
					],
					rotate: [
						0,
						15,
						0
					]
				},
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2
				},
				className: "absolute left-[20%] bottom-[30%] text-foreground/5 text-5xl md:left-[25%] md:bottom-[20%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiGithub, {})
			})
		]
	});
}
function TypingSubtitle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
		variants: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					staggerChildren: .02,
					delayChildren: .3
				}
			}
		},
		initial: "hidden",
		whileInView: "visible",
		viewport: { once: true },
		className: "mt-4 max-w-xl text-base text-muted-foreground md:text-lg flex flex-wrap justify-center gap-[0.3em]",
		children: "Discover your coding personality, strengths, achievements, and future career path.".split(" ").map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex",
			children: word.split("").map((char, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				variants: {
					hidden: {
						opacity: 0,
						y: 5
					},
					visible: {
						opacity: 1,
						y: 0
					}
				},
				children: char
			}, j))
		}, i))
	});
}
function Home() {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DNABackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroDecorations, {}),
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
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .7 },
						className: "card-soft mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-pulse-glow rounded-full bg-accent" }), "Developer Personality Analyzer"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							scale: .95,
							filter: "blur(10px)"
						},
						whileInView: {
							opacity: 1,
							scale: 1,
							filter: "blur(0px)"
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							delay: .05,
							ease: "easeOut"
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
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingSubtitle, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-8 w-full max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TokenInput, { autoFocus: typeof window !== "undefined" && window.location.hash === "#token" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: .8 },
						className: "mt-8 flex flex-col items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
							children: "Try Example Profiles"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center justify-center gap-2",
							children: POPULAR.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => navigate({
									to: "/results/$username",
									params: { username: u }
								}),
								className: "group relative flex items-center gap-2 overflow-hidden rounded-full border border-border/50 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-md transition-all hover:border-primary/50 hover:bg-white/10 hover:text-primary hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiGithub, { className: "h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" }),
									u,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowRight, { className: "h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" })
								]
							}, u))
						})]
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
