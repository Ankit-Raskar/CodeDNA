import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { g as require_react_dom, h as Link, v as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { a as computeAchievements, c as createSsrRpc, d as repoTimeline, f as topLanguages, i as calcLevel, l as fetchGithubProfile, n as activityRadar, o as computeArchetype, r as buildAISummary, s as computeBadges, t as RARITY_STYLE, u as predictCareer } from "./archetype-DA403ydT.mjs";
import { t as DNABackground } from "./DNABackground-ujJ4xva5.mjs";
import { a as AnimatePresence, i as motion, n as useTransform, r as useMotionValue, t as useSpring } from "../_libs/framer-motion.mjs";
import { A as FiPlay, B as FiX, D as FiMapPin, E as FiLinkedin, I as FiStar, N as FiSend, O as FiMaximize2, P as FiShare2, R as FiUser, S as FiGitPullRequest, T as FiKey, _ as FiDownload, a as FiAward, d as FiChevronRight, h as FiCopy, i as FiArrowRight, j as FiRefreshCw, k as FiPause, m as FiCode, o as FiCalendar, p as FiClock, r as FiArrowLeft, u as FiChevronLeft, v as FiExternalLink, x as FiGitBranch, z as FiUsers } from "../_libs/react-icons.mjs";
import { r as getStoredToken, t as SearchBar } from "./TokenInput-CLsIjYn9.mjs";
import { t as confetti_module_default } from "../_libs/canvas-confetti.mjs";
import { a as XAxis, c as Radar, d as PolarRadiusAxis, f as PolarGrid, h as ResponsiveContainer, i as YAxis, l as Pie, m as Tooltip, n as RadarChart, o as Area, p as Cell, r as PieChart, s as CartesianGrid, t as AreaChart, u as PolarAngleAxis } from "../_libs/recharts+victory-vendor.mjs";
import { n as GitFork, r as ExternalLink, t as Star } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/results._username-DfjeKhIb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var generateAIInsights = createServerFn({ method: "POST" }).inputValidator((d) => ({ summary: String(d?.summary || "").slice(0, 4e3) })).handler(createSsrRpc("75a7bcecec6992c0c89c5610e4b245c2d39fd0e1dc375ff36de8ac416d069df5"));
function RateLimitModal({ open, hasToken, onClose, onAddToken, onTryDemo, onTryAgain }) {
	if (typeof document === "undefined") return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onClose,
		className: "fixed inset-0 z-[90] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			onClick: (e) => e.stopPropagation(),
			initial: {
				y: 40,
				opacity: 0,
				scale: .96
			},
			animate: {
				y: 0,
				opacity: 1,
				scale: 1
			},
			exit: {
				y: 40,
				opacity: 0,
				scale: .96
			},
			transition: {
				type: "spring",
				stiffness: 320,
				damping: 30
			},
			className: "relative w-full max-w-md rounded-t-3xl bg-white p-7 shadow-2xl sm:rounded-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					"aria-label": "Close",
					className: "absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-secondary text-muted-foreground transition hover:bg-accent hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiX, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl grad-primary text-3xl text-white shadow-lg",
					children: "⏳"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center font-display text-2xl font-bold",
					children: "GitHub API Limit Reached"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-sm text-muted-foreground",
					children: "GitHub's public API limit has been reached."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-2xl bg-secondary/60 p-4 text-sm text-foreground/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: "You can:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-1.5 space-y-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Wait a few minutes for the limit to reset" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Add your own GitHub Personal Access Token for instant access" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-col gap-2",
					children: [
						!hasToken && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onAddToken,
							className: "inline-flex items-center justify-center gap-2 rounded-full grad-primary px-5 py-3 text-sm font-semibold text-white shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiKey, {}), " Add Personal Token"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onTryDemo,
							className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiPlay, {}), " Try Demo Profile"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onTryAgain,
							className: "inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiRefreshCw, {}), " Try Again"]
						})
					]
				})
			]
		})
	}) }), document.body);
}
var STEPS = [
	{
		emoji: "🧬",
		text: "Sequencing repositories",
		sub: "Pulling commits, stars, forks…"
	},
	{
		emoji: "⚡",
		text: "Analyzing coding behavior",
		sub: "Decoding patterns across years…"
	},
	{
		emoji: "🧠",
		text: "Discovering your strengths",
		sub: "Cross-referencing languages & topics…"
	},
	{
		emoji: "🤖",
		text: "Consulting AI mentor",
		sub: "Letting the LLM whisper insights…"
	},
	{
		emoji: "🚀",
		text: "Building your developer profile",
		sub: "Forging the trading card…"
	}
];
var STEP_MS = 2200;
var SNIPPETS = [
	"const dna = await sequence(profile)",
	"if (commits > 1000) badge.unlock()",
	"personality.train(github.history)",
	"ai.whisper('What kind of dev?')",
	"export default DeveloperDNA",
	"level.up({ xp: 9999 })",
	"archetype === 'Frontend Wizard'"
];
function LoadingScreen({ username }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t0 = Date.now();
		const id = setInterval(() => {
			const elapsed = Date.now() - t0;
			const total = STEP_MS * STEPS.length;
			setProgress(Math.min(.97, elapsed / total));
			setStep(Math.min(STEPS.length - 1, Math.floor(elapsed / STEP_MS)));
		}, 40);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DNABackground, { density: 1.6 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,6,23,0.9)_85%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full blur-3xl",
				style: { background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" },
				animate: {
					x: [
						0,
						80,
						0
					],
					y: [
						0,
						-40,
						0
					],
					opacity: [
						.4,
						.7,
						.4
					]
				},
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-32 bottom-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl",
				style: { background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" },
				animate: {
					x: [
						0,
						-60,
						0
					],
					y: [
						0,
						50,
						0
					],
					opacity: [
						.3,
						.6,
						.3
					]
				},
				transition: {
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: SNIPPETS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					animate: {
						opacity: [
							0,
							.55,
							0
						],
						y: -160
					},
					transition: {
						duration: 7,
						delay: i * 1.1,
						repeat: Infinity,
						ease: "easeOut"
					},
					className: "absolute font-mono text-xs text-cyan-300/70",
					style: {
						left: `${10 + i * 17 % 70}%`,
						top: `${60 + i * 11 % 30}%`
					},
					children: s
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-6 w-full max-w-2xl rounded-[36px] border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl md:p-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mb-10 h-40 w-40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { rotate: 360 },
							transition: {
								duration: 5,
								repeat: Infinity,
								ease: "linear"
							},
							className: "absolute inset-0",
							children: Array.from({ length: 18 }).map((_, i) => {
								const a = i / 18 * Math.PI * 2;
								const r = 70;
								const x = 80 + Math.cos(a) * r - 8;
								const y = 80 + Math.sin(a) * r - 8;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									animate: {
										scale: [
											1,
											1.6,
											1
										],
										opacity: [
											.3,
											1,
											.3
										]
									},
									transition: {
										duration: 1.6,
										delay: i * .06,
										repeat: Infinity
									},
									className: "absolute h-4 w-4 rounded-full",
									style: {
										left: x,
										top: y,
										background: i % 2 ? "#06B6D4" : "#A855F7",
										boxShadow: `0 0 18px ${i % 2 ? "#06B6D4" : "#A855F7"}`
									}
								}, i);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { scale: [
								1,
								1.1,
								1
							] },
							transition: {
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut"
							},
							className: "absolute inset-0 grid place-items-center text-5xl",
							children: "🧬"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-[0.4em] text-cyan-300/80",
						children: "Developer DNA · Sequencing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-display text-4xl font-black md:text-5xl",
						children: [
							"Decoding",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent",
								children: ["@", username]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-white/60",
						children: "Reading the developer genome — this takes a few seconds."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 h-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 16
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -16
								},
								transition: { duration: .35 },
								className: "flex flex-col items-center justify-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-lg font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl",
										children: STEPS[step].emoji
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: STEPS[step].text })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-white/50",
									children: STEPS[step].sub
								})]
							}, step)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex items-center justify-center gap-2",
						children: STEPS.map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 flex-1 max-w-[64px] overflow-hidden rounded-full bg-white/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 transition-all duration-300",
								style: { width: j < step ? "100%" : j === step ? "60%" : "0%" }
							})
						}, j))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-6 h-2 overflow-hidden rounded-full bg-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 transition-all duration-200",
							style: { width: `${Math.round(progress * 100)}%` }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 shine opacity-40" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 text-right text-[10px] font-mono uppercase tracking-widest text-white/40",
						children: [
							Math.round(progress * 100).toString().padStart(2, "0"),
							"% · stage ",
							step + 1,
							"/",
							STEPS.length
						]
					})
				]
			})
		]
	});
}
function ConfettiBurst({ trigger }) {
	(0, import_react.useEffect)(() => {
		if (!trigger) return;
		const end = Date.now() + 800;
		const colors = [
			"#6366F1",
			"#06B6D4",
			"#8B5CF6",
			"#F59E0B",
			"#EC4899"
		];
		const frame = () => {
			confetti_module_default({
				particleCount: 4,
				angle: 60,
				spread: 70,
				origin: {
					x: 0,
					y: .7
				},
				colors,
				startVelocity: 55,
				scalar: 1.1
			});
			confetti_module_default({
				particleCount: 4,
				angle: 120,
				spread: 70,
				origin: {
					x: 1,
					y: .7
				},
				colors,
				startVelocity: 55,
				scalar: 1.1
			});
			if (Date.now() < end) requestAnimationFrame(frame);
		};
		confetti_module_default({
			particleCount: 140,
			spread: 90,
			origin: { y: .4 },
			colors,
			startVelocity: 45,
			scalar: 1.2
		});
		requestAnimationFrame(frame);
	}, [trigger]);
	return null;
}
function IdentityCard({ data }) {
	const { user, totals } = data;
	const ref = (0, import_react.useRef)(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rx = useSpring(useTransform(my, [-.5, .5], [6, -6]), {
		stiffness: 140,
		damping: 14
	});
	const ry = useSpring(useTransform(mx, [-.5, .5], [-8, 8]), {
		stiffness: 140,
		damping: 14
	});
	const onMove = (e) => {
		const r = ref.current?.getBoundingClientRect();
		if (!r) return;
		mx.set((e.clientX - r.left) / r.width - .5);
		my.set((e.clientY - r.top) / r.height - .5);
	};
	const onLeave = () => {
		mx.set(0);
		my.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: { duration: .6 },
		style: { perspective: 1200 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent",
			children: "Your Developer Passport"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref,
			onMouseMove: onMove,
			onMouseLeave: onLeave,
			style: {
				rotateX: rx,
				rotateY: ry,
				transformStyle: "preserve-3d"
			},
			className: "card-soft relative overflow-hidden rounded-[28px] p-8 md:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-6 top-6 rounded-full border border-border bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
					children: "CodeDNA · 2026"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col items-start gap-8 md:flex-row md:items-center",
					style: { transform: "translateZ(40px)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-1 rounded-3xl grad-primary opacity-70 blur-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							initial: {
								scale: .85,
								opacity: 0
							},
							animate: {
								scale: 1,
								opacity: 1
							},
							transition: {
								type: "spring",
								stiffness: 120
							},
							src: user.avatar_url,
							alt: user.login,
							className: "relative h-32 w-32 rounded-3xl border-4 border-white object-cover shadow-2xl md:h-40 md:w-40"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-3xl font-bold tracking-tight md:text-5xl",
									children: user.name || user.login
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: user.html_url,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground hover:text-primary",
									children: [
										"@",
										user.login,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiExternalLink, { className: "h-3 w-3" })
									]
								})]
							}),
							user.bio && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-base text-muted-foreground",
								children: user.bio
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground",
								children: [
									user.location && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiMapPin, {}),
										children: user.location
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiUsers, {}),
										children: [user.followers.toLocaleString(), " followers"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiUsers, {}),
										children: [user.following.toLocaleString(), " following"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiGitBranch, {}),
										children: [totals.repos, " repos"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiStar, {}),
										children: [totals.stars.toLocaleString(), " stars"]
									})
								]
							})
						]
					})]
				})
			]
		})]
	});
}
function Tag({ icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5",
		children: [
			icon,
			" ",
			children
		]
	});
}
function SectionTitle({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 14
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: { duration: .5 },
		className: "mb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.22em] text-accent",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl",
				children: title
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-base text-muted-foreground",
				children: sub
			})
		]
	});
}
function ArchetypeReveal({ archetype }) {
	const r = RARITY_STYLE[archetype.rarity];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				scale: .9,
				rotateX: -20
			},
			whileInView: {
				opacity: 1,
				scale: 1,
				rotateX: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			transition: {
				duration: .8,
				type: "spring",
				stiffness: 90
			},
			className: "relative mx-auto max-w-3xl",
			style: { perspective: 1200 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-[36px] p-1",
				style: {
					backgroundImage: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
					boxShadow: `0 30px 80px -20px ${r.glow}`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							"aria-hidden": true,
							initial: { x: "-100%" },
							animate: { x: "200%" },
							transition: {
								duration: 4,
								repeat: Infinity,
								ease: "linear"
							},
							className: "pointer-events-none absolute inset-y-0 w-1/2",
							style: { background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl",
							style: {
								background: archetype.color,
								opacity: .45
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl",
							style: {
								background: archetype.color2,
								opacity: .4
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-[0.35em] text-white/70",
								children: "Your archetype · unlocked"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
								initial: {
									scale: 0,
									rotate: -20
								},
								whileInView: {
									scale: 1,
									rotate: 0
								},
								viewport: { once: true },
								transition: {
									delay: .4,
									type: "spring",
									stiffness: 140
								},
								className: "rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]",
								style: {
									background: `linear-gradient(135deg, ${r.color}, ${archetype.color2})`,
									boxShadow: `0 0 30px ${r.glow}`
								},
								children: [
									archetype.rarity,
									" · ",
									r.label
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-8 flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									scale: .5,
									opacity: 0
								},
								whileInView: {
									scale: 1,
									opacity: 1
								},
								viewport: { once: true },
								transition: {
									delay: .2,
									type: "spring",
									stiffness: 120
								},
								className: "grid h-32 w-32 shrink-0 place-items-center rounded-[28px] text-7xl md:h-40 md:w-40",
								style: {
									background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})`,
									boxShadow: `0 25px 60px -10px ${r.glow}`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									animate: { y: [
										0,
										-8,
										0
									] },
									transition: {
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut"
									},
									children: archetype.emoji
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
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
											delay: .45,
											duration: .5
										},
										className: "font-display text-4xl font-black leading-tight md:text-6xl",
										children: archetype.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
										initial: { opacity: 0 },
										whileInView: { opacity: 1 },
										viewport: { once: true },
										transition: { delay: .6 },
										className: "mt-3 text-lg italic text-white/85 md:text-xl",
										children: [
											"“",
											archetype.tagline,
											"”"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-white/65",
										children: archetype.description
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Power level" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [archetype.power, " / 100"] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-2.5 overflow-hidden rounded-full bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { width: 0 },
									whileInView: { width: `${archetype.power}%` },
									viewport: { once: true },
									transition: {
										duration: 1.4,
										delay: .7,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "h-full rounded-full",
									style: {
										background: `linear-gradient(90deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
										boxShadow: `0 0 20px ${r.glow}`
									}
								})
							})]
						}),
						archetype.unlocked.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-widest text-white/60",
								children: "Classes unlocked"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: archetype.unlocked.map((u, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
									initial: {
										opacity: 0,
										y: 10
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: { once: true },
									transition: { delay: .9 + i * .06 },
									className: "rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur",
									children: ["✦ ", u]
								}, u))
							})]
						})
					]
				})
			})
		})
	});
}
/**
* Full-screen cinematic reveal that takes over once when analysis lands.
* Sequence: dim → "Class Unlocked" eyebrow → card flips in → stats animate → CTA.
*/
function ArchetypeRevealOverlay({ archetype, username, storageKey }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	const r = RARITY_STYLE[archetype.rarity];
	(0, import_react.useEffect)(() => {
		const key = storageKey || `codedna_reveal_${username}`;
		if (typeof window === "undefined") return;
		const w = window;
		w.__codednaReveal = w.__codednaReveal || /* @__PURE__ */ new Set();
		if (sessionStorage.getItem(key) && !w.__codednaReveal.has(key)) return;
		w.__codednaReveal.add(key);
		sessionStorage.setItem(key, "1");
		setOpen(true);
		const t1 = setTimeout(() => setFlipped(true), 700);
		const t2 = setTimeout(() => {
			const colors = [
				archetype.color,
				archetype.color2,
				r.color
			];
			confetti_module_default({
				particleCount: 140,
				spread: 90,
				origin: { y: .55 },
				colors,
				scalar: 1.1
			});
			setTimeout(() => confetti_module_default({
				particleCount: 80,
				angle: 60,
				spread: 60,
				origin: { x: 0 },
				colors
			}), 250);
			setTimeout(() => confetti_module_default({
				particleCount: 80,
				angle: 120,
				spread: 60,
				origin: { x: 1 },
				colors
			}), 250);
		}, 1500);
		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
		};
	}, [
		archetype.color,
		archetype.color2,
		r.color,
		storageKey,
		username
	]);
	const close = () => setOpen(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .4 },
		className: "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950 text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				style: { background: `radial-gradient(circle at 50% 45%, ${archetype.color}40 0%, transparent 55%)` },
				animate: { opacity: [
					.4,
					.9,
					.5
				] },
				transition: {
					duration: 3,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 opacity-30",
				style: { background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${r.color}80 30deg, transparent 60deg, transparent 180deg, ${archetype.color2}80 210deg, transparent 240deg)` },
				animate: { rotate: 360 },
				transition: {
					duration: 20,
					repeat: Infinity,
					ease: "linear"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-6 flex w-full max-w-2xl flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: -20,
							letterSpacing: "0.1em"
						},
						animate: {
							opacity: 1,
							y: 0,
							letterSpacing: "0.5em"
						},
						transition: {
							duration: .7,
							delay: .2
						},
						className: "mb-2 text-[11px] font-bold uppercase text-cyan-300",
						children: "━ Developer Class Unlocked ━"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: -10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .45 },
						className: "text-sm text-white/60",
						children: ["@", username]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "my-8 [perspective:1400px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								rotateY: 180,
								scale: .8,
								opacity: 0
							},
							animate: {
								rotateY: flipped ? 0 : 180,
								scale: flipped ? 1 : .95,
								opacity: 1
							},
							transition: {
								duration: 1.1,
								delay: .2,
								type: "spring",
								stiffness: 70,
								damping: 14
							},
							className: "relative h-[420px] w-[300px] [transform-style:preserve-3d]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 rounded-[28px] [backface-visibility:hidden]",
								style: {
									transform: "rotateY(180deg)",
									background: "repeating-linear-gradient(45deg, #1e293b, #1e293b 12px, #0f172a 12px, #0f172a 24px)",
									boxShadow: `0 30px 70px ${r.glow}`,
									border: "1px solid rgba(255,255,255,0.08)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-full w-full place-items-center text-7xl opacity-30",
									children: "🧬"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 overflow-hidden rounded-[28px] p-[2px] [backface-visibility:hidden]",
								style: {
									backgroundImage: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
									boxShadow: `0 30px 80px ${r.glow}, 0 0 60px ${r.glow}`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex h-full w-full flex-col items-center justify-between rounded-[26px] bg-slate-950 p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											"aria-hidden": true,
											initial: { x: "-110%" },
											animate: { x: "120%" },
											transition: {
												duration: 3.5,
												repeat: Infinity,
												ease: "linear",
												delay: 1.5
											},
											className: "pointer-events-none absolute inset-y-0 w-1/2",
											style: { background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "z-10 flex w-full items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-white/70",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "codeDNA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: { color: r.color },
												children: r.label
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											initial: {
												scale: 0,
												rotate: -20
											},
											animate: flipped ? {
												scale: 1,
												rotate: 0
											} : { scale: 0 },
											transition: {
												delay: 1.1,
												type: "spring",
												stiffness: 140,
												damping: 12
											},
											className: "grid h-32 w-32 place-items-center rounded-3xl text-7xl",
											style: {
												background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})`,
												boxShadow: `0 20px 50px ${r.glow}`
											},
											children: archetype.emoji
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "z-10 text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
													initial: {
														opacity: 0,
														y: 10
													},
													animate: flipped ? {
														opacity: 1,
														y: 0
													} : {},
													transition: { delay: 1.35 },
													className: "font-display text-2xl font-black leading-tight",
													children: archetype.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
													initial: { opacity: 0 },
													animate: flipped ? { opacity: 1 } : {},
													transition: { delay: 1.5 },
													className: "mt-1 text-[11px] font-bold uppercase tracking-[0.3em]",
													style: { color: r.color },
													children: archetype.rarity
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
													initial: { opacity: 0 },
													animate: flipped ? { opacity: 1 } : {},
													transition: { delay: 1.7 },
													className: "mt-3 text-xs italic text-white/70",
													children: [
														"“",
														archetype.tagline,
														"”"
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "z-10 w-full",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-white/60",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Power" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [archetype.power, "/100"] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 h-1.5 overflow-hidden rounded-full bg-white/10",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
													initial: { width: 0 },
													animate: flipped ? { width: `${archetype.power}%` } : {},
													transition: {
														delay: 1.9,
														duration: 1.1,
														ease: [
															.16,
															1,
															.3,
															1
														]
													},
													className: "h-full rounded-full",
													style: {
														background: `linear-gradient(90deg, ${archetype.color}, ${r.color})`,
														boxShadow: `0 0 12px ${r.glow}`
													}
												})
											})]
										})
									]
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: flipped ? {
							opacity: 1,
							y: 0
						} : {},
						transition: {
							delay: 2.1,
							duration: .5
						},
						onClick: close,
						whileHover: { scale: 1.04 },
						whileTap: { scale: .97 },
						className: "group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-900 shadow-[0_20px_60px_-10px_rgba(255,255,255,0.4)] transition",
						children: ["See your full chronicle", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowRight, { className: "transition group-hover:translate-x-1" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						initial: { opacity: 0 },
						animate: flipped ? { opacity: 1 } : {},
						transition: { delay: 2.4 },
						onClick: close,
						className: "mt-3 text-[11px] uppercase tracking-widest text-white/40 hover:text-white/70",
						children: "Skip"
					})
				]
			})
		]
	}, "reveal") });
}
function hash(s) {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}
var ACCESSORIES = [
	"⚡",
	"🔥",
	"✨",
	"💫",
	"🌟",
	"🎯",
	"🛡",
	"🗡",
	"🔮",
	"👑"
];
var BACKGROUNDS = [
	["#6366F1", "#06B6D4"],
	["#8B5CF6", "#EC4899"],
	["#F59E0B", "#EF4444"],
	["#22C55E", "#06B6D4"],
	["#0EA5E9", "#8B5CF6"],
	["#F472B6", "#A855F7"]
];
function AvatarGenerator({ data, archetype }) {
	const seed = (0, import_react.useMemo)(() => hash(data.user.login), [data.user.login]);
	const bg = BACKGROUNDS[seed % BACKGROUNDS.length];
	const acc = ACCESSORIES[(seed >> 4) % ACCESSORIES.length];
	const acc2 = ACCESSORIES[(seed >> 8) % ACCESSORIES.length];
	const orbiters = Array.from({ length: 6 }).map((_, i) => {
		return {
			angle: i / 6 * Math.PI * 2 + seed % 100 / 100,
			delay: i * .4,
			color: [
				"#6366F1",
				"#06B6D4",
				"#8B5CF6",
				"#F59E0B",
				"#22C55E",
				"#EC4899"
			][i]
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-soft relative overflow-hidden rounded-[32px] p-8 md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl",
				style: { background: bg[0] }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl",
				style: { background: bg[1] }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid items-center gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto h-64 w-64 md:h-72 md:w-72",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute inset-0",
							animate: { rotate: 360 },
							transition: {
								duration: 20,
								repeat: Infinity,
								ease: "linear"
							},
							children: orbiters.map((o, i) => {
								const r = 130;
								const x = 50 + Math.cos(o.angle) * r / 2.6;
								const y = 50 + Math.sin(o.angle) * r / 2.6;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									className: "absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full",
									style: {
										left: `${x}%`,
										top: `${y}%`,
										background: o.color,
										boxShadow: `0 0 16px ${o.color}`
									},
									animate: { scale: [
										1,
										1.4,
										1
									] },
									transition: {
										duration: 2.4,
										delay: o.delay,
										repeat: Infinity
									}
								}, i);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute inset-4 rounded-full border-2 border-dashed",
							style: { borderColor: archetype.color },
							animate: { rotate: -360 },
							transition: {
								duration: 30,
								repeat: Infinity,
								ease: "linear"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-8 rounded-full p-1",
							style: {
								background: `linear-gradient(135deg, ${bg[0]}, ${bg[1]})`,
								boxShadow: `0 0 60px ${archetype.color}80`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: data.user.avatar_url,
								alt: data.user.login,
								crossOrigin: "anonymous",
								className: "h-full w-full rounded-full border-4 border-white object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute right-2 top-4 grid h-12 w-12 place-items-center rounded-full text-2xl shadow-xl",
							style: { background: "white" },
							animate: { y: [
								0,
								-6,
								0
							] },
							transition: {
								duration: 3,
								repeat: Infinity
							},
							children: acc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute -bottom-1 left-4 grid h-10 w-10 place-items-center rounded-full text-xl shadow-xl",
							style: { background: "white" },
							animate: { y: [
								0,
								-4,
								0
							] },
							transition: {
								duration: 2.4,
								delay: .6,
								repeat: Infinity
							},
							children: acc2
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground",
						children: "Your developer avatar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-3xl font-black md:text-4xl",
						children: data.user.name || data.user.login
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-base text-muted-foreground",
						children: [
							"Procedurally generated from your GitHub footprint —",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								style: { color: archetype.color },
								children: archetype.name
							}),
							" ",
							"class."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-3 gap-3 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$2, {
								label: "Aura",
								value: acc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$2, {
								label: "Sigil",
								value: acc2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$2, {
								label: "Rank",
								value: archetype.rarity[0]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs text-muted-foreground",
						children: "One of a kind. No two GitHub fingerprints generate the same avatar."
					})
				] })]
			})
		]
	});
}
function Stat$2({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-white p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-2xl",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
			children: label
		})]
	});
}
var RARITY = {
	frontend: {
		label: "Rare",
		grad: "from-indigo-500 to-violet-500",
		ring: "ring-indigo-200"
	},
	backend: {
		label: "Epic",
		grad: "from-fuchsia-500 to-purple-600",
		ring: "ring-fuchsia-200"
	},
	ai: {
		label: "Legendary",
		grad: "from-amber-400 to-pink-500",
		ring: "ring-amber-200"
	},
	open: {
		label: "Mythic",
		grad: "from-cyan-400 to-blue-600",
		ring: "ring-cyan-200"
	},
	fullstack: {
		label: "Epic",
		grad: "from-emerald-400 to-teal-600",
		ring: "ring-emerald-200"
	},
	ops: {
		label: "Rare",
		grad: "from-lime-400 to-green-600",
		ring: "ring-lime-200"
	},
	night: {
		label: "Rare",
		grad: "from-slate-500 to-indigo-700",
		ring: "ring-slate-200"
	},
	hack: {
		label: "Epic",
		grad: "from-orange-400 to-red-500",
		ring: "ring-orange-200"
	},
	bug: {
		label: "Common",
		grad: "from-rose-400 to-pink-500",
		ring: "ring-rose-200"
	}
};
function BadgesGrid({ badges }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
		children: badges.map((b, i) => {
			const r = RARITY[b.id] || {
				label: "Common",
				grad: "from-slate-400 to-slate-600",
				ring: "ring-slate-200"
			};
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30,
					scale: .9,
					rotate: -2
				},
				whileInView: {
					opacity: 1,
					y: 0,
					scale: 1,
					rotate: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .5,
					delay: i * .05,
					type: "spring"
				},
				whileHover: {
					y: -6,
					rotate: .5
				},
				className: `card-soft relative overflow-hidden rounded-3xl p-6 ${b.earned ? "" : "opacity-50 grayscale"}`,
				children: [b.earned && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${r.grad}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br opacity-30 blur-2xl",
					style: { backgroundImage: `linear-gradient(135deg, var(--primary), var(--accent))` }
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${r.grad} text-2xl shadow-lg ring-4 ${r.ring}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "drop-shadow",
							children: b.icon
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold",
								children: b.name
							}), b.earned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full bg-gradient-to-r ${r.grad} px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow`,
								children: r.label
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Locked"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: b.description
						})]
					})]
				})]
			}, b.id);
		})
	});
}
function XPSystem({ level, pct, xp, achievements, archetype }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-soft relative overflow-hidden rounded-3xl p-8 md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-accent",
						children: "Developer Class"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-4xl font-bold text-gradient md:text-5xl",
						children: archetype
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [xp.toLocaleString(), " XP earned"]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-28 w-28 place-items-center rounded-3xl grad-primary text-white shadow-xl ring-4 ring-indigo-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-bold uppercase tracking-widest opacity-80",
							children: "Level"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl font-black",
							children: level
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex justify-between text-xs font-medium text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Level ", level] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Level ", level + 1] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-4 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { width: 0 },
							whileInView: { width: `${pct}%` },
							viewport: { once: true },
							transition: {
								duration: 1.4,
								ease: "easeOut"
							},
							className: "relative h-full grad-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 shine" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-right text-xs font-semibold text-primary",
						children: [pct, "% to next level"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
					children: "Achievements"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: achievements.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -10
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						transition: { delay: i * .04 },
						whileHover: { y: -2 },
						className: `flex items-center gap-3 rounded-2xl border p-3 text-sm transition ${a.earned ? "border-amber-200 bg-gradient-to-br from-amber-50 to-white" : "border-border bg-muted/40 opacity-60"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg ${a.earned ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow" : "bg-muted text-muted-foreground"}`,
							children: "🏆"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-semibold",
								children: a.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: a.description
							})]
						})]
					}, a.id))
				})]
			})
		]
	});
}
function Stat$1({ label, value, icon, grad, i }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: { delay: i * .05 },
		whileHover: { y: -4 },
		className: "card-soft rounded-3xl p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${grad} text-white shadow`,
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-3xl font-bold",
				children: value
			})
		]
	});
}
function StatsGrid({ data }) {
	const langs = Object.keys(data.languageBytes).length;
	const created = new Date(data.user.created_at);
	const years = Math.max(1, Math.floor((Date.now() - +created) / (1e3 * 60 * 60 * 24 * 365)));
	const mostUpdated = [...data.repos].sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at))[0];
	const monthName = mostUpdated ? new Date(mostUpdated.pushed_at).toLocaleString("en", {
		month: "long",
		year: "numeric"
	}) : "—";
	const avgStars = data.totals.repos ? Math.round(data.totals.stars / data.totals.repos * 10) / 10 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-2 gap-4 md:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
				i: 0,
				grad: "from-indigo-500 to-violet-500",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiGitBranch, {}),
				label: "Repositories",
				value: data.totals.repos
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
				i: 1,
				grad: "from-amber-400 to-orange-500",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiStar, {}),
				label: "Total Stars",
				value: data.totals.stars.toLocaleString()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
				i: 2,
				grad: "from-cyan-400 to-blue-500",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiUsers, {}),
				label: "Followers",
				value: data.user.followers.toLocaleString()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
				i: 3,
				grad: "from-fuchsia-500 to-pink-500",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiGitPullRequest, {}),
				label: "Forks",
				value: data.totals.forks.toLocaleString()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
				i: 4,
				grad: "from-emerald-400 to-teal-500",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCode, {}),
				label: "Languages",
				value: langs
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
				i: 5,
				grad: "from-rose-400 to-red-500",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCalendar, {}),
				label: "Years on GitHub",
				value: years
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
				i: 6,
				grad: "from-yellow-400 to-amber-500",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiAward, {}),
				label: "Avg ★ per repo",
				value: avgStars
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
				i: 7,
				grad: "from-violet-500 to-indigo-500",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiClock, {}),
				label: "Last push",
				value: monthName
			})
		]
	});
}
var COLORS$1 = [
	"#6366F1",
	"#06B6D4",
	"#8B5CF6",
	"#F59E0B",
	"#22C55E",
	"#EF4444",
	"#a78bfa",
	"#67e8f9"
];
function ChartCard({ title, children, delay = 0 }) {
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
		transition: {
			duration: .5,
			delay
		},
		className: "card-soft rounded-3xl p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-72",
			children
		})]
	});
}
var tooltipStyle = {
	background: "rgba(255,255,255,0.97)",
	border: "1px solid #E2E8F0",
	borderRadius: 12,
	color: "#0F172A",
	fontSize: 12,
	boxShadow: "0 10px 30px -10px rgba(15,23,42,0.18)"
};
function Charts({ data }) {
	const langs = topLanguages(data.languageBytes, 8);
	const timeline = repoTimeline(data);
	const radar = activityRadar(data);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 lg:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ChartCard, {
				title: "Language Composition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: langs,
					dataKey: "value",
					nameKey: "name",
					innerRadius: 55,
					outerRadius: 100,
					stroke: "#fff",
					strokeWidth: 3,
					paddingAngle: 2,
					children: langs.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: COLORS$1[i % COLORS$1.length] }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					contentStyle: tooltipStyle,
					formatter: (v, n) => [`${Math.round(Number(v) / 1024)} KB`, String(n)]
				})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-2 text-xs",
					children: langs.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 font-medium",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 w-2 rounded-full",
								style: { background: COLORS$1[i % COLORS$1.length] }
							}),
							l.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [l.pct, "%"]
							})
						]
					}, l.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
				title: "Coding Radar",
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadarChart, {
					data: radar,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarGrid, { stroke: "#E2E8F0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarAngleAxis, {
							dataKey: "axis",
							tick: {
								fill: "#64748B",
								fontSize: 12,
								fontWeight: 600
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarRadiusAxis, {
							tick: false,
							axisLine: false,
							domain: [0, 100]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, {
							name: "Score",
							dataKey: "value",
							stroke: "#6366F1",
							strokeWidth: 2,
							fill: "#6366F1",
							fillOpacity: .35
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle })
					]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
				title: "Contribution Mountains",
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
					data: timeline,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "g1",
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "#6366F1",
								stopOpacity: .6
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "#06B6D4",
								stopOpacity: .05
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: "#E2E8F0",
							strokeDasharray: "3 3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "year",
							tick: {
								fill: "#64748B",
								fontSize: 12
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick: {
								fill: "#64748B",
								fontSize: 12
							},
							allowDecimals: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							type: "monotone",
							dataKey: "count",
							stroke: "#6366F1",
							strokeWidth: 2.5,
							fill: "url(#g1)"
						})
					]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
				title: "Top Repositories by Stars",
				delay: .2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full space-y-2 overflow-y-auto pr-1",
					children: [...data.repos].filter((r) => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 8).map((r) => {
						const max = Math.max(1, ...data.repos.map((x) => x.stargazers_count));
						const w = Math.max(4, r.stargazers_count / max * 100);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: r.html_url,
							target: "_blank",
							rel: "noreferrer",
							className: "block rounded-2xl border border-border bg-white p-3 transition hover:border-primary/40 hover:shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate font-semibold",
										children: r.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-2 font-medium text-amber-600",
										children: ["★ ", r.stargazers_count.toLocaleString()]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 h-1.5 overflow-hidden rounded-full bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full grad-primary",
										style: { width: `${w}%` }
									})
								}),
								r.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 line-clamp-1 text-xs text-muted-foreground",
									children: r.description
								})
							]
						}, r.id);
					})
				})
			})
		]
	});
}
var COLORS = [
	"#6366F1",
	"#06B6D4",
	"#8B5CF6",
	"#F59E0B",
	"#22C55E",
	"#EF4444",
	"#EC4899",
	"#0EA5E9"
];
function LanguageBubbles({ data }) {
	const langs = (0, import_react.useMemo)(() => topLanguages(data.languageBytes, 8), [data.languageBytes]);
	const [hover, setHover] = (0, import_react.useState)(null);
	const W = 720, H = 320;
	const positions = (0, import_react.useMemo)(() => {
		const placed = [];
		const max = Math.max(1, ...langs.map((l) => l.pct));
		langs.forEach((l, i) => {
			const r = 24 + l.pct / max * 70;
			const seed = (i * 9301 + 49297) % 233280;
			const rx = seed / 233280 * (W - r * 2) + r;
			const ry = seed * 31 % 233280 / 233280 * (H - r * 2) + r;
			placed.push({
				x: rx,
				y: ry,
				r,
				lang: l,
				color: COLORS[i % COLORS.length]
			});
		});
		for (let pass = 0; pass < 60; pass++) for (let i = 0; i < placed.length; i++) {
			for (let j = i + 1; j < placed.length; j++) {
				const a = placed[i], b = placed[j];
				const dx = b.x - a.x, dy = b.y - a.y;
				const d = Math.sqrt(dx * dx + dy * dy) || .01;
				const overlap = a.r + b.r + 6 - d;
				if (overlap > 0) {
					const ux = dx / d, uy = dy / d;
					a.x -= ux * overlap / 2;
					a.y -= uy * overlap / 2;
					b.x += ux * overlap / 2;
					b.y += uy * overlap / 2;
				}
			}
			placed[i].x = Math.max(placed[i].r, Math.min(W - placed[i].r, placed[i].x));
			placed[i].y = Math.max(placed[i].r, Math.min(H - placed[i].r, placed[i].y));
		}
		return placed;
	}, [langs]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-soft relative overflow-hidden rounded-3xl p-6 md:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-bold",
				children: "Language Bubbles"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Each bubble is a language. Bigger = more of your code."
			})] }), hover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: -6
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "rounded-full bg-muted px-3 py-1 text-xs font-semibold",
				children: hover
			}, hover)]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: `0 0 ${W} ${H}`,
			className: "h-[300px] w-full md:h-[360px]",
			children: positions.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				onMouseEnter: () => setHover(`${p.lang.name} · ${p.lang.pct}%`),
				onMouseLeave: () => setHover(null),
				style: { cursor: "pointer" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
						cx: p.x,
						cy: p.y,
						r: p.r,
						fill: p.color,
						fillOpacity: .18,
						stroke: p.color,
						strokeWidth: 2,
						initial: {
							scale: 0,
							opacity: 0
						},
						whileInView: {
							scale: 1,
							opacity: 1
						},
						viewport: { once: true },
						transition: {
							delay: i * .08,
							type: "spring",
							stiffness: 140
						},
						whileHover: { scale: 1.08 },
						style: {
							originX: `${p.x}px`,
							originY: `${p.y}px`,
							filter: `drop-shadow(0 4px 16px ${p.color}55)`
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: p.x,
						y: p.y - 2,
						textAnchor: "middle",
						className: "font-display text-sm font-bold",
						fill: p.color,
						style: { pointerEvents: "none" },
						children: p.lang.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
						x: p.x,
						y: p.y + 14,
						textAnchor: "middle",
						className: "text-[10px] font-semibold",
						fill: p.color,
						opacity: .85,
						style: { pointerEvents: "none" },
						children: [p.lang.pct, "%"]
					})
				]
			}, p.lang.name))
		})]
	});
}
function categoryAnswer(q, ins) {
	const t = q.toLowerCase();
	if (/strength|good|best/.test(t)) return {
		role: "ai",
		text: "Here's where you really shine 👇",
		rich: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			items: ins.strengths,
			color: "#22C55E"
		})
	};
	if (/weak|improve|bad|worst/.test(t)) return {
		role: "ai",
		text: "Honest, said with love:",
		rich: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			items: ins.weaknesses,
			color: "#F59E0B"
		})
	};
	if (/learn|study|next|grow/.test(t)) return {
		role: "ai",
		text: "If I were you, I'd explore:",
		rich: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			items: ins.learn_next,
			color: "#06B6D4"
		})
	};
	if (/career|job|role|work/.test(t)) return {
		role: "ai",
		text: "Roles that fit your DNA:",
		rich: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			items: ins.career_paths,
			color: "#8B5CF6"
		})
	};
	if (/idea|project|build|side/.test(t)) return {
		role: "ai",
		text: "Build one of these next weekend:",
		rich: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			items: ins.project_ideas,
			color: "#EC4899"
		})
	};
	if (/who|what|am i|archetype/.test(t)) return {
		role: "ai",
		text: `You're a ${ins.archetype}. ${ins.tagline}`
	};
	return {
		role: "ai",
		text: `Good question. Based on what I see in your repos: ${ins.tagline} You'd benefit most from leaning into ${ins.learn_next[0] || "deeper system design"}.`
	};
}
function List({ items, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-2 space-y-1.5",
		children: items.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
			initial: {
				opacity: 0,
				x: -8
			},
			animate: {
				opacity: 1,
				x: 0
			},
			transition: { delay: i * .05 },
			className: "flex gap-2 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full",
				style: { background: color }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s })]
		}, i))
	});
}
var SUGGESTIONS = [
	"What are my strengths?",
	"Where should I improve?",
	"What should I learn next?",
	"Which career fits me?",
	"Give me a project idea"
];
function AIMentorChat({ insights }) {
	const [messages, setMessages] = (0, import_react.useState)([{
		role: "ai",
		text: `Hey! I'm your AI mentor. I read every repo. You're a ${insights.archetype}.`
	}, {
		role: "ai",
		text: `My verdict: ${insights.tagline} Ask me anything below 👇`
	}]);
	const [input, setInput] = (0, import_react.useState)("");
	const [typing, setTyping] = (0, import_react.useState)(false);
	const scrollRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, typing]);
	const ask = (q) => {
		const text = q.trim();
		if (!text) return;
		setInput("");
		setMessages((m) => [...m, {
			role: "user",
			text
		}]);
		setTyping(true);
		setTimeout(() => {
			setMessages((m) => [...m, categoryAnswer(text, insights)]);
			setTyping(false);
		}, 650 + Math.random() * 400);
	};
	const initialSuggestions = (0, import_react.useMemo)(() => SUGGESTIONS, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-soft overflow-hidden rounded-[28px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-b border-border bg-gradient-to-r from-indigo-50 via-purple-50 to-cyan-50 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-2xl grad-primary text-white shadow",
						children: "🤖"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-bold",
						children: "AI Mentor"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground",
						children: "Trained on your repos · always honest"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-500" }), " online"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				className: "max-h-[480px] space-y-3 overflow-y-auto bg-white px-4 py-5 md:px-6 md:py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
					initial: false,
					children: [messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10,
							scale: .96
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						transition: { duration: .25 },
						className: `flex items-end gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-8 w-8 shrink-0 place-items-center rounded-xl text-white shadow ${m.role === "user" ? "bg-slate-900" : "grad-primary"}`,
							children: m.role === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiUser, { className: "h-4 w-4" }) : "🤖"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${m.role === "user" ? "rounded-br-md bg-slate-900 text-white" : "rounded-bl-md border border-border bg-white"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: m.text }), m.rich]
						})]
					}, i)), typing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						className: "flex items-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 place-items-center rounded-xl grad-primary text-white shadow",
							children: "🤖"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 rounded-2xl rounded-bl-md border border-border bg-white px-4 py-3",
							children: [
								0,
								1,
								2
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "h-1.5 w-1.5 rounded-full bg-primary",
								animate: { y: [
									0,
									-4,
									0
								] },
								transition: {
									duration: .8,
									delay: i * .12,
									repeat: Infinity
								}
							}, i))
						})]
					}, "typing")]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 border-t border-border bg-muted/40 px-4 py-3",
				children: initialSuggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => ask(s),
					className: "rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium hover:border-primary/40 hover:text-primary",
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					ask(input);
				},
				className: "flex items-center gap-2 border-t border-border bg-white p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Ask your mentor anything…",
					className: "flex-1 rounded-2xl border border-border bg-muted/40 px-4 py-2.5 text-sm outline-none focus:border-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "grid h-10 w-10 place-items-center rounded-2xl grad-primary text-white shadow hover:shadow-lg disabled:opacity-50",
					disabled: !input.trim(),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiSend, {})
				})]
			})
		]
	});
}
function CareerPath({ data }) {
	const roles = predictCareer(data);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-soft relative overflow-hidden rounded-[28px] p-6 md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-bold md:text-3xl",
						children: "Your future path"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted-foreground",
						children: "Where your code is taking you — predicted from your stack and trajectory."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-primary via-accent to-secondary md:left-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-8",
							children: roles.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								initial: {
									opacity: 0,
									x: i % 2 === 0 ? -30 : 30
								},
								whileInView: {
									opacity: 1,
									x: 0
								},
								viewport: {
									once: true,
									margin: "-50px"
								},
								transition: {
									delay: i * .1,
									duration: .5
								},
								className: `relative grid items-center gap-4 md:grid-cols-2 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-5 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-white ring-4 ring-primary md:left-1/2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `ml-12 md:ml-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left md:[direction:ltr]"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
												children: [
													r.year,
													" · ",
													r.chance,
													"% match"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 font-display text-xl font-bold md:text-2xl",
												children: [
													r.emoji,
													" ",
													r.title
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted-foreground",
												children: r.why
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `ml-12 md:ml-0 ${i % 2 === 0 ? "md:pl-12 md:[direction:ltr]" : "md:pr-12 md:text-right"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border bg-white p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Probability" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [r.chance, "%"] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2 h-2 overflow-hidden rounded-full bg-muted",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
													initial: { width: 0 },
													whileInView: { width: `${r.chance}%` },
													viewport: { once: true },
													transition: {
														duration: 1.2,
														delay: .15 + i * .08
													},
													className: "h-full grad-primary"
												})
											})]
										})
									})
								]
							}, r.title))
						})]
					})
				]
			})
		]
	});
}
var META = [
	{
		key: "game_character",
		label: "Game Character",
		emoji: "🎮",
		grad: "from-fuchsia-500 to-violet-600",
		bg: "from-fuchsia-50 to-violet-50"
	},
	{
		key: "avenger",
		label: "Superhero",
		emoji: "🦸",
		grad: "from-red-500 to-amber-500",
		bg: "from-red-50 to-amber-50"
	},
	{
		key: "city",
		label: "City",
		emoji: "🏙️",
		grad: "from-sky-500 to-indigo-600",
		bg: "from-sky-50 to-indigo-50"
	},
	{
		key: "animal",
		label: "Animal",
		emoji: "🦊",
		grad: "from-emerald-500 to-teal-600",
		bg: "from-emerald-50 to-teal-50"
	},
	{
		key: "weapon",
		label: "Weapon",
		emoji: "⚔️",
		grad: "from-slate-500 to-zinc-700",
		bg: "from-slate-50 to-zinc-50"
	},
	{
		key: "movie",
		label: "Movie",
		emoji: "🎬",
		grad: "from-pink-500 to-purple-600",
		bg: "from-pink-50 to-purple-50"
	}
];
function PersonalityCards({ p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
		children: META.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				rotateY: -25,
				y: 30
			},
			whileInView: {
				opacity: 1,
				rotateY: 0,
				y: 0
			},
			viewport: { once: true },
			transition: {
				delay: i * .08,
				duration: .6,
				type: "spring"
			},
			whileHover: {
				y: -8,
				rotateZ: -1
			},
			style: { perspective: 1e3 },
			className: `card-soft relative overflow-hidden rounded-3xl bg-gradient-to-br ${m.bg} p-6`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.grad}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-6 -top-6 text-8xl opacity-20",
					children: m.emoji
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
					children: "If you were a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-2xl font-bold",
					children: m.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-4 inline-block rounded-2xl bg-gradient-to-r ${m.grad} bg-clip-text text-base font-bold text-transparent`,
					children: p[m.key]
				})
			]
		}, m.key))
	});
}
function Timeline({ data }) {
	const created = new Date(data.user.created_at);
	const sorted = [...data.repos].sort((a, b) => +new Date(a.created_at) - +new Date(b.created_at));
	const first = sorted[0];
	const latest = sorted[sorted.length - 1];
	const yearCounts = {};
	for (const r of data.repos) {
		const y = new Date(r.created_at).getFullYear().toString();
		yearCounts[y] = (yearCounts[y] || 0) + 1;
	}
	const bestYear = Object.entries(yearCounts).sort((a, b) => b[1] - a[1])[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "card-soft rounded-3xl p-8 md:p-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative ml-3 space-y-7 border-l-2 border-dashed border-primary/30 pl-8",
			children: [
				{
					date: created.toLocaleDateString(),
					title: "Joined GitHub",
					sub: `Account created ${created.getFullYear()}`,
					emoji: "🌱"
				},
				first && {
					date: new Date(first.created_at).toLocaleDateString(),
					title: `First repo: ${first.name}`,
					sub: first.description || first.language || "—",
					emoji: "🚀"
				},
				bestYear && {
					date: bestYear[0],
					title: `Most productive year`,
					sub: `${bestYear[1]} repositories created`,
					emoji: "🔥"
				},
				latest && {
					date: new Date(latest.created_at).toLocaleDateString(),
					title: `Latest repo: ${latest.name}`,
					sub: latest.description || latest.language || "—",
					emoji: "✨"
				}
			].filter(Boolean).map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
				initial: {
					opacity: 0,
					x: -10
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { delay: i * .1 },
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -left-[44px] grid h-9 w-9 place-items-center rounded-2xl grad-primary text-base shadow-lg ring-4 ring-white",
						children: e.emoji
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-accent",
						children: e.date
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-lg font-bold",
						children: e.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: e.sub
					})
				]
			}, i))
		})
	});
}
var LANG_COLORS = {
	JavaScript: "#F7DF1E",
	TypeScript: "#3B82F6",
	Python: "#22C55E",
	Go: "#67E8F9",
	Rust: "#F97316",
	Java: "#A78BFA",
	Ruby: "#F472B6",
	"C++": "#FB923C",
	C: "#94A3B8",
	HTML: "#FB7185",
	CSS: "#60A5FA",
	Shell: "#FDE68A",
	Other: "#C4B5FD"
};
var colorFor = (lang) => LANG_COLORS[lang || "Other"] || "#A78BFA";
function Constellation({ data }) {
	const repos = (0, import_react.useMemo)(() => [...data.repos].filter((r) => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 80), [data.repos]);
	const [hover, setHover] = (0, import_react.useState)(null);
	const [activeLang, setActiveLang] = (0, import_react.useState)(null);
	const W = 900, H = 560;
	const cx = W / 2, cy = H / 2;
	const maxStars = Math.max(1, ...repos.map((r) => r.stargazers_count));
	const langCounts = (0, import_react.useMemo)(() => {
		const m = /* @__PURE__ */ new Map();
		repos.forEach((r) => {
			const l = r.language || "Other";
			m.set(l, (m.get(l) || 0) + 1);
		});
		return Array.from(m.entries()).sort((a, b) => b[1] - a[1]);
	}, [repos]);
	const langs = langCounts.map(([l]) => l);
	const armAngle = {};
	langs.forEach((l, i) => armAngle[l] = i / Math.max(1, langs.length) * Math.PI * 2);
	const positions = (0, import_react.useMemo)(() => {
		return repos.map((r, idx) => {
			const lang = r.language || "Other";
			const rand1 = (r.id * 9301 + 49297) % 233280 / 233280;
			const rand2 = (r.id * 1103515245 + 12345) % 2147483648 / 2147483648 % 1;
			const starsNorm = r.stargazers_count / maxStars;
			const baseR = 60 + (.15 + (1 - starsNorm) * .85) * (Math.min(W, H) / 2 - 80);
			const spiral = baseR / 60 * .65;
			const armSpread = (rand1 - .5) * .55;
			const a = (armAngle[lang] || 0) + spiral + armSpread;
			return {
				r,
				x: cx + Math.cos(a) * baseR,
				y: cy + Math.sin(a) * baseR * .62,
				size: 2.4 + Math.pow(starsNorm, .55) * 13,
				lang,
				idx,
				rand2
			};
		});
	}, [repos, maxStars]);
	const topNamed = positions.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(120%_90%_at_20%_0%,#1e1b4b_0%,#0b1027_45%,#05060f_100%)] p-4 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-indigo-500/25 blur-3xl animate-blob" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -right-20 top-10 h-[380px] w-[380px] rounded-full bg-fuchsia-500/20 blur-3xl animate-blob",
						style: { animationDelay: "2s" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-3xl animate-blob",
						style: { animationDelay: "4s" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: [Array.from({ length: 140 }).map((_, i) => {
					const size = i * 7 % 3 + 1;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "absolute rounded-full bg-white",
						style: {
							left: `${i * 53 % 100}%`,
							top: `${i * 79 % 100}%`,
							width: size,
							height: size,
							boxShadow: size > 1 ? "0 0 6px rgba(255,255,255,0.9)" : void 0
						},
						animate: { opacity: [
							.1,
							.9,
							.1
						] },
						transition: {
							duration: 2 + i * 13 % 30 / 10,
							delay: i % 9 * .2,
							repeat: Infinity
						}
					}, i);
				}), Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					className: "absolute h-px w-28 bg-gradient-to-r from-transparent via-white to-transparent",
					initial: {
						x: "-10%",
						y: `${15 + i * 28}%`,
						opacity: 0
					},
					animate: {
						x: "120%",
						opacity: [
							0,
							1,
							0
						]
					},
					transition: {
						duration: 1.6,
						delay: 2 + i * 3,
						repeat: Infinity,
						repeatDelay: 5 + i * 2
					}
				}, `s${i}`))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-3 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono uppercase tracking-[0.22em] text-white/70",
							children: "Live Galaxy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white/40",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-white/70",
							children: [repos.length, " repos"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white/40",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-white/70",
							children: [langs.length, " languages"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-[10px] text-white/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" }), "small repo"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-white" }), "core star"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: `0 0 ${W} ${H}`,
				className: "relative h-[420px] w-full md:h-[520px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
							id: "core",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#FFFFFF",
									stopOpacity: "0.9"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "20%",
									stopColor: "#A5B4FC",
									stopOpacity: "0.55"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "55%",
									stopColor: "#6366F1",
									stopOpacity: "0.18"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#0F172A",
									stopOpacity: "0"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
							id: "halo",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "#8B5CF6",
								stopOpacity: "0.22"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "#0F172A",
								stopOpacity: "0"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
							id: "starGlow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
								stdDeviation: "2.6",
								result: "b"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "b" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
							id: "bigGlow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
								stdDeviation: "6",
								result: "b"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "b" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx,
						cy,
						rx: W / 2.1,
						ry: H / 2.3,
						fill: "url(#halo)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx,
						cy,
						r: 140,
						fill: "url(#core)"
					}),
					[
						110,
						180,
						250,
						320
					].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx,
						cy,
						rx: r,
						ry: r * .62,
						fill: "none",
						stroke: "rgba(255,255,255,0.06)",
						strokeDasharray: i % 2 ? "2 6" : "1 4"
					}, r)),
					langs.map((l) => {
						const pts = positions.filter((p) => p.lang === l);
						if (pts.length < 2) return null;
						const d = [...pts].sort((a, b) => Math.hypot(a.x - cx, a.y - cy) - Math.hypot(b.x - cx, b.y - cy)).map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
						const dim = activeLang && activeLang !== l ? .06 : .28;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d,
							stroke: colorFor(l),
							strokeOpacity: dim,
							strokeWidth: 1,
							fill: "none"
						}, l);
					}),
					positions.map((p, i) => {
						const dim = activeLang && activeLang !== p.lang;
						const c = colorFor(p.lang);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
							initial: {
								opacity: 0,
								scale: 0
							},
							whileInView: {
								opacity: dim ? .15 : 1,
								scale: 1
							},
							animate: { opacity: dim ? .15 : 1 },
							viewport: { once: true },
							transition: {
								delay: i % 30 * .02,
								duration: .4
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
									cx: p.x,
									cy: p.y,
									r: p.size + 5,
									fill: c,
									opacity: .18,
									animate: {
										r: [
											p.size + 5,
											p.size + 11,
											p.size + 5
										],
										opacity: [
											.12,
											.35,
											.12
										]
									},
									transition: {
										duration: 3 + i % 5 * .4,
										delay: i % 7 * .2,
										repeat: Infinity
									},
									style: { pointerEvents: "none" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
									cx: p.x,
									cy: p.y,
									r: p.size,
									fill: c,
									filter: p.size > 7 ? "url(#bigGlow)" : "url(#starGlow)",
									whileHover: { scale: 1.9 },
									onMouseEnter: () => setHover(p.r),
									onMouseLeave: () => setHover(null),
									onClick: () => window.open(p.r.html_url, "_blank"),
									style: {
										cursor: "pointer",
										transformOrigin: `${p.x}px ${p.y}px`
									}
								}),
								p.size > 9 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									opacity: .85,
									style: { pointerEvents: "none" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: p.x - p.size * 1.8,
										y1: p.y,
										x2: p.x + p.size * 1.8,
										y2: p.y,
										stroke: c,
										strokeWidth: .6
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: p.x,
										y1: p.y - p.size * 1.8,
										x2: p.x,
										y2: p.y + p.size * 1.8,
										stroke: c,
										strokeWidth: .6
									})]
								})
							]
						}, p.r.id);
					}),
					topNamed.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						style: { pointerEvents: "none" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: p.x + p.size + 8,
							y: p.y + 3,
							fill: "rgba(255,255,255,0.85)",
							fontSize: 11,
							fontFamily: "ui-monospace, monospace",
							children: p.r.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
							x: p.x + p.size + 8,
							y: p.y + 16,
							fill: "rgba(255,255,255,0.45)",
							fontSize: 9,
							children: ["★ ", p.r.stargazers_count]
						})]
					}, `l-${p.r.id}`))
				]
			}),
			hover && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 6
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "pointer-events-none absolute left-6 top-16 z-10 max-w-xs rounded-2xl border border-white/15 bg-slate-950/85 p-3 backdrop-blur-md shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2.5 w-2.5 rounded-full",
								style: { background: colorFor(hover.language) }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold",
								children: hover.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-auto h-3 w-3 text-white/50" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center gap-3 text-[11px] text-white/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hover.language || "—" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3" }), hover.stargazers_count]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitFork, { className: "h-3 w-3" }), hover.forks_count ?? 0]
							})
						]
					}),
					hover.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 line-clamp-2 text-xs text-white/80",
						children: hover.description
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-4 flex flex-wrap gap-2 px-1 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveLang(null),
					className: `rounded-full border px-3 py-1 transition ${!activeLang ? "border-white/40 bg-white/15 text-white" : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"}`,
					children: "All"
				}), langCounts.slice(0, 10).map(([l, n]) => {
					const active = activeLang === l;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveLang(active ? null : l),
						className: `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 transition ${active ? "border-white/40 bg-white/15 text-white" : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 w-2 rounded-full",
								style: {
									background: colorFor(l),
									boxShadow: `0 0 8px ${colorFor(l)}`
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: l
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/40",
								children: n
							})
						]
					}, l);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-3 px-1 text-[11px] text-white/40",
				children: "Tip: hover a star for details, click to open the repo. Filter by language above."
			})
		]
	});
}
function TradingCard({ data, insights, level, archetype, badges }) {
	const ref = (0, import_react.useRef)(null);
	const cardRef = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const langs = topLanguages(data.languageBytes, 4);
	const r = RARITY_STYLE[archetype.rarity];
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rx = useSpring(useTransform(my, [-.5, .5], [10, -10]), {
		stiffness: 180,
		damping: 16
	});
	const ry = useSpring(useTransform(mx, [-.5, .5], [-14, 14]), {
		stiffness: 180,
		damping: 16
	});
	const shineX = useTransform(mx, [-.5, .5], ["0%", "100%"]);
	const onMove = (e) => {
		const rect = cardRef.current?.getBoundingClientRect();
		if (!rect) return;
		mx.set((e.clientX - rect.left) / rect.width - .5);
		my.set((e.clientY - rect.top) / rect.height - .5);
	};
	const onLeave = () => {
		mx.set(0);
		my.set(0);
	};
	const exportPng = async (copy = false) => {
		if (!ref.current) return false;
		setBusy(true);
		try {
			const blob = await (await import("../_libs/html-to-image.mjs").then((n) => n.t)).toBlob(ref.current, {
				backgroundColor: "transparent",
				pixelRatio: 2
			});
			if (!blob) throw new Error("Failed to generate blob");
			if (copy) try {
				await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
				toast.success("Image copied to clipboard!");
				return true;
			} catch (err) {
				console.error("Clipboard write failed:", err);
				toast.error("Failed to copy image. You may need to grant clipboard permissions.");
				return false;
			}
			else {
				const url = URL.createObjectURL(blob);
				const a = document.createElement("a");
				document.body.appendChild(a);
				a.href = url;
				a.download = `codedna-${data.user.login}.png`;
				a.click();
				document.body.removeChild(a);
				setTimeout(() => URL.revokeObjectURL(url), 100);
				return true;
			}
		} catch (error) {
			console.error("Failed to export card:", error);
			toast.error("Failed to generate image.");
			return false;
		} finally {
			setBusy(false);
		}
	};
	const share = async () => {
		const url = window.location.href;
		if (navigator.share) try {
			await navigator.share({
				title: `CodeDNA — ${data.user.login}`,
				url
			});
		} catch {}
		else {
			await navigator.clipboard.writeText(url);
			toast.success("Link copied to clipboard!");
		}
	};
	const linkedin = async () => {
		if (await exportPng(true)) {
			const text = encodeURIComponent(`Check out my CodeDNA profile! ${insights.tagline}\n\n${window.location.href}`);
			window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${text}`, "_blank", "noopener,noreferrer");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center",
			style: { perspective: 1400 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				ref: cardRef,
				onMouseMove: onMove,
				onMouseLeave: onLeave,
				style: {
					rotateX: rx,
					rotateY: ry,
					transformStyle: "preserve-3d"
				},
				className: "w-full max-w-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref,
					className: "relative aspect-[5/7] w-full overflow-hidden rounded-[28px] p-1",
					style: {
						backgroundImage: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
						boxShadow: `0 40px 90px -20px ${r.glow}, 0 0 0 1px ${r.color}55`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-full w-full overflow-hidden rounded-[24px] text-white",
						style: { backgroundImage: `radial-gradient(circle at 30% 0%, ${archetype.color}cc, transparent 55%), radial-gradient(circle at 80% 100%, ${archetype.color2}cc, transparent 55%), linear-gradient(160deg, #0F172A, #1E1B4B)` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								"aria-hidden": true,
								className: "pointer-events-none absolute inset-0 mix-blend-overlay",
								style: {
									background: `linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.45) 50%, transparent 65%)`,
									backgroundSize: "200% 100%",
									backgroundPositionX: shineX
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center justify-between p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-[0.3em] text-white/80",
									children: "🧬 CodeDNA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest",
									style: {
										background: `linear-gradient(135deg, ${r.color}, ${archetype.color2})`,
										boxShadow: `0 0 18px ${r.glow}`
									},
									children: archetype.rarity
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-auto h-32 w-32",
								style: { transform: "translateZ(40px)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 rounded-full p-1",
									style: {
										background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})`,
										boxShadow: `0 0 40px ${archetype.color}80`
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: `${data.user.avatar_url}${data.user.avatar_url.includes("?") ? "&" : "?"}not-from-cache`,
										alt: data.user.login,
										crossOrigin: "anonymous",
										className: "h-full w-full rounded-full border-4 border-white object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -right-2 -bottom-2 grid h-10 w-10 place-items-center rounded-full bg-white text-xl shadow-xl",
									children: archetype.emoji
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-4 px-5 text-center",
								style: { transform: "translateZ(30px)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl font-black leading-tight",
										children: data.user.name || data.user.login
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-white/70",
										children: ["@", data.user.login]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display text-2xl font-black",
										style: {
											background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})`,
											WebkitBackgroundClip: "text",
											backgroundClip: "text",
											color: "transparent"
										},
										children: archetype.name
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-5 mt-5 grid grid-cols-4 gap-1.5 text-center text-[11px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "LVL",
										v: level
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "PWR",
										v: archetype.power
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "REPO",
										v: data.totals.repos
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "★",
										v: data.totals.stars
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-5 mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[9px] font-bold uppercase tracking-widest text-white/60",
									children: "Top stack"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 flex flex-wrap gap-1",
									children: langs.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold backdrop-blur",
										children: l.name
									}, l.name))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-5 bottom-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] font-bold uppercase tracking-widest text-white/60",
										children: "Signature move"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 line-clamp-2 text-xs italic text-white/90",
										children: [
											"“",
											insights.tagline,
											"”"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-white/50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["codedna · ", (/* @__PURE__ */ new Date()).getFullYear()] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.label })]
									})
								]
							})
						]
					})
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap justify-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					whileHover: { scale: 1.04 },
					whileTap: { scale: .97 },
					onClick: () => exportPng(false),
					disabled: busy,
					className: "glow-primary grad-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiDownload, {}),
						" ",
						busy ? "Rendering…" : "Download card"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => exportPng(true),
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium hover:bg-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCopy, {}), " Copy image"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: linkedin,
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium hover:bg-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiLinkedin, {}), " LinkedIn"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: share,
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium hover:bg-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiShare2, {}), " Share link"]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "sr-only",
			children: [badges.length, " badges"]
		})
	] });
}
function Stat({ label, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-white/15 p-1.5 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm font-black",
			children: v.toLocaleString()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[8px] font-bold uppercase tracking-widest text-white/70",
			children: label
		})]
	});
}
function buildSlides(data) {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const thisYearRepos = data.repos.filter((r) => new Date(r.created_at).getFullYear() === year);
	const lang = topLanguages(data.languageBytes, 1)[0];
	const monthCounts = {};
	for (const r of data.repos.filter((x) => new Date(x.pushed_at).getFullYear() === year)) {
		const m = new Date(r.pushed_at).toLocaleString("en", { month: "long" });
		monthCounts[m] = (monthCounts[m] || 0) + 1;
	}
	const bestMonth = Object.entries(monthCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
	const activeDays = new Set(data.repos.map((r) => new Date(r.pushed_at).toDateString())).size;
	const starsThisYear = thisYearRepos.reduce((s, r) => s + r.stargazers_count, 0);
	return [
		{
			eyebrow: "This year",
			big: `${thisYearRepos.length}`,
			sub: `repositories created in ${year}`,
			emoji: "📦",
			grad: "from-indigo-500 via-purple-500 to-pink-500"
		},
		{
			eyebrow: "Favorite language",
			big: lang?.name || "—",
			sub: `${lang?.pct ?? 0}% of your code`,
			emoji: "💻",
			grad: "from-cyan-500 via-blue-500 to-indigo-600"
		},
		{
			eyebrow: "Active days",
			big: `${activeDays}`,
			sub: `days you pushed code`,
			emoji: "📅",
			grad: "from-emerald-400 via-teal-500 to-cyan-500"
		},
		{
			eyebrow: "Most productive month",
			big: bestMonth,
			sub: `you shipped the most then`,
			emoji: "🔥",
			grad: "from-orange-500 via-red-500 to-pink-500"
		},
		{
			eyebrow: "Stars earned",
			big: (starsThisYear || data.totals.stars).toLocaleString(),
			sub: "stars on your work",
			emoji: "⭐",
			grad: "from-amber-400 via-orange-500 to-rose-500"
		}
	];
}
var SLIDE_MS = 4200;
function Wrapped({ data }) {
	const slides = buildSlides(data);
	const [i, setI] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [fs, setFs] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setProgress(0);
		if (paused) return;
		const start = Date.now();
		const id = setInterval(() => {
			const p = Math.min(1, (Date.now() - start) / SLIDE_MS);
			setProgress(p);
			if (p >= 1) setI((x) => (x + 1) % slides.length);
		}, 40);
		return () => clearInterval(id);
	}, [
		i,
		paused,
		slides.length
	]);
	const go = (d) => setI((p) => (p + d + slides.length) % slides.length);
	const s = slides[i];
	(0, import_react.useEffect)(() => {
		if (!fs) return;
		const onKey = (e) => {
			if (e.key === "ArrowRight" || e.key === " ") {
				e.preventDefault();
				go(1);
			} else if (e.key === "ArrowLeft") {
				e.preventDefault();
				go(-1);
			} else if (e.key === "Escape") setFs(false);
			else if (e.key.toLowerCase() === "p") setPaused((p) => !p);
		};
		window.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [fs, slides.length]);
	const SlideCanvas = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: fs ? "relative h-full w-full max-w-[min(720px,90vw)]" : "relative mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute inset-x-6 z-10 flex gap-1.5 ${fs ? "top-6" : "top-4"}`,
				children: slides.map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1 flex-1 overflow-hidden rounded-full bg-white/25",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-white transition-[width]",
						style: { width: j < i ? "100%" : j === i ? `${progress * 100}%` : "0%" }
					})
				}, j))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: 1.05
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .96
					},
					transition: { duration: .5 },
					className: fs ? `relative aspect-[9/16] h-[min(90vh,800px)] w-auto overflow-hidden rounded-[36px] bg-gradient-to-br ${s.grad} p-10 text-white shadow-2xl` : `relative aspect-[9/14] max-h-[78vh] overflow-hidden rounded-[36px] bg-gradient-to-br ${s.grad} p-8 text-white shadow-2xl md:aspect-[16/10] md:p-16`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								scale: .6,
								opacity: 0,
								rotate: -8
							},
							animate: {
								scale: 1,
								opacity: .18,
								rotate: 0
							},
							transition: {
								duration: .8,
								ease: "easeOut"
							},
							className: "pointer-events-none absolute -right-12 -top-16 text-[18rem] leading-none md:-right-8 md:-top-8",
							children: s.emoji
						}, `emoji-${i}`),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-white/15 blur-3xl",
							animate: { scale: [
								1,
								1.1,
								1
							] },
							transition: {
								duration: 4,
								repeat: Infinity
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-full flex-col justify-end",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { delay: .1 },
									className: "text-xs font-bold uppercase tracking-[0.4em] text-white/80 md:text-sm",
									children: s.eyebrow
								}, `e-${i}`),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									initial: {
										scale: .7,
										opacity: 0,
										y: 30
									},
									animate: {
										scale: 1,
										opacity: 1,
										y: 0
									},
									transition: {
										delay: .3,
										type: "spring",
										stiffness: 120,
										damping: 14
									},
									className: `mt-3 font-display font-black leading-[0.95] ${fs ? "text-[8rem] md:text-[12rem]" : "text-7xl md:text-[10rem]"}`,
									children: s.big
								}, `big-${i}`),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { delay: .55 },
									className: "mt-5 text-xl font-medium text-white/90 md:text-3xl",
									children: s.sub
								}, `sub-${i}`),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 text-[10px] uppercase tracking-[0.3em] text-white/50",
									children: [
										"codeDNA · ",
										i + 1,
										"/",
										slides.length
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setPaused((p) => !p),
									className: "absolute right-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25",
									"aria-label": paused ? "Play" : "Pause",
									children: paused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiPlay, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiPause, {})
								})
							]
						})
					]
				}, i)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => go(-1),
				"aria-label": "Previous",
				className: `absolute top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white shadow-lg hover:bg-muted ${fs ? "-left-16" : "left-0 md:-left-6"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiChevronLeft, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => go(1),
				"aria-label": "Next",
				className: `absolute top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white shadow-lg hover:bg-muted ${fs ? "-right-16" : "right-0 md:-right-6"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiChevronRight, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Previous tap",
				onClick: () => go(-1),
				className: "absolute inset-y-0 left-0 z-0 w-1/3 md:hidden"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Next tap",
				onClick: () => go(1),
				className: "absolute inset-y-0 right-0 z-0 w-1/3 md:hidden"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						setFs(true);
						setI(0);
						setPaused(false);
					},
					className: "inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiMaximize2, {}), " Play full-screen Wrapped"]
				})
			}),
			!fs && SlideCanvas,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: fs && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: { duration: .3 },
				className: "fixed inset-0 z-[120] flex items-center justify-center bg-black",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFs(false),
						"aria-label": "Close",
						className: "absolute right-5 top-5 z-[130] grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiX, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "absolute bottom-5 left-1/2 z-[130] -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/40",
						children: "← → arrow keys · space pause · esc close"
					}),
					SlideCanvas
				]
			}, "fs-wrapped") })
		]
	});
}
function Yearbook({ data, insights }) {
	const lang = topLanguages(data.languageBytes, 1)[0];
	const top = [...data.repos].filter((r) => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count)[0];
	const monthCounts = {};
	for (const r of data.repos) {
		const m = new Date(r.pushed_at).toLocaleString("en", { month: "long" });
		monthCounts[m] = (monthCounts[m] || 0) + 1;
	}
	const bestMonth = Object.entries(monthCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
	const career = insights.career_paths[0] || "Senior Engineer";
	const mission = insights.project_ideas[0] || "Ship something you'll be proud of.";
	const entries = [
		{
			label: "Most-used language",
			value: lang?.name || "—"
		},
		{
			label: "Biggest achievement",
			value: top ? `${top.name} (★${top.stargazers_count})` : "Just getting started"
		},
		{
			label: "Most productive month",
			value: bestMonth
		},
		{
			label: "Future role prediction",
			value: career
		},
		{
			label: "Next mission",
			value: mission
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		className: "card-soft relative overflow-hidden rounded-[28px] p-8 md:p-12",
		style: { backgroundImage: "repeating-linear-gradient(0deg, transparent 0, transparent 47px, rgba(99,102,241,0.08) 48px)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-12 top-0 h-full w-px bg-rose-300/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-16 top-0 h-full w-px bg-rose-300/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid items-center gap-8 md:grid-cols-[auto_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-2 rounded-3xl bg-gradient-to-br from-amber-300 to-pink-400 blur-xl opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: data.user.avatar_url,
						alt: "",
						className: "relative h-36 w-36 rounded-3xl border-4 border-white object-cover shadow-xl"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-xs font-bold uppercase tracking-[0.3em] text-rose-500",
						children: [
							"Class of ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" · Developer Yearbook"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-4xl font-black md:text-5xl",
						children: data.user.name || data.user.login
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm italic text-muted-foreground",
						children: [
							"\"",
							insights.tagline,
							"\""
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-10 grid gap-4 md:grid-cols-2",
				children: entries.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .07 },
					className: "rounded-2xl border-2 border-dashed border-rose-200 bg-white/70 p-4 backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-widest text-rose-500",
						children: e.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-lg font-bold",
						children: e.value
					})]
				}, e.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-8 text-center font-display text-sm italic text-muted-foreground",
				children: "✍️ Signed by the AI mentor — keep shipping."
			})
		]
	});
}
var NODE_COLORS = [
	"#6366F1",
	"#06B6D4",
	"#8B5CF6",
	"#F59E0B",
	"#22C55E",
	"#EF4444"
];
function DnaHelix({ data }) {
	const nodes = (0, import_react.useMemo)(() => {
		const langs = topLanguages(data.languageBytes, 6).map((l) => l.name);
		while (langs.length < 6) langs.push([
			"AI",
			"Backend",
			"Design",
			"DevOps"
		][langs.length % 4]);
		return langs.slice(0, 6);
	}, [data]);
	const [hover, setHover] = (0, import_react.useState)(null);
	const W = 600, H = 460;
	const cx = W / 2;
	const amp = 110;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-soft relative overflow-hidden rounded-3xl p-6 md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 top-10 h-60 w-60 rounded-full bg-primary/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-16 bottom-0 h-60 w-60 rounded-full bg-accent/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: `0 0 ${W} ${H}`,
				className: "relative mx-auto h-[420px] w-full max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "strand1",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#6366F1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#06B6D4"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "strand2",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#8B5CF6"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#F59E0B"
						})]
					})] }),
					[0, 1].map((s) => {
						const pts = [];
						for (let i = 0; i <= 60; i++) {
							const t = i / 60 * Math.PI * 3 + (s ? Math.PI : 0);
							const y = 30 + i / 60 * (H - 60);
							const x = cx + Math.sin(t) * amp;
							pts.push(`${i === 0 ? "M" : "L"}${x},${y}`);
						}
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: pts.join(" "),
							stroke: `url(#strand${s + 1})`,
							strokeWidth: 3,
							fill: "none",
							strokeLinecap: "round"
						}, s);
					}),
					nodes.map((label, i) => {
						const idx = i + 1;
						const t = idx / 7 * Math.PI * 3;
						const y = 30 + idx / 7 * (H - 60);
						const x1 = cx + Math.sin(t) * amp;
						const x2 = cx + Math.sin(t + Math.PI) * amp;
						const color = NODE_COLORS[i % NODE_COLORS.length];
						const isHover = hover === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							onMouseEnter: () => setHover(i),
							onMouseLeave: () => setHover(null),
							style: { cursor: "pointer" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1,
									y1: y,
									x2,
									y2: y,
									stroke: color,
									strokeOpacity: .35,
									strokeWidth: 1.5
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
									cx: x1,
									cy: y,
									r: isHover ? 14 : 10,
									fill: color,
									initial: { scale: 0 },
									whileInView: { scale: 1 },
									viewport: { once: true },
									transition: {
										delay: i * .08,
										type: "spring"
									},
									style: { filter: `drop-shadow(0 0 8px ${color})` }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
									cx: x2,
									cy: y,
									r: isHover ? 14 : 10,
									fill: "#fff",
									stroke: color,
									strokeWidth: 3,
									initial: { scale: 0 },
									whileInView: { scale: 1 },
									viewport: { once: true },
									transition: {
										delay: i * .08 + .05,
										type: "spring"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: x1 < cx ? x1 - 14 : x1 + 14,
									y: y + 4,
									textAnchor: x1 < cx ? "end" : "start",
									className: "font-display text-xs font-bold",
									fill: color,
									children: label
								})
							]
						}, i);
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-wrap justify-center gap-2",
				children: nodes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2 w-2 rounded-full",
						style: { background: NODE_COLORS[i % NODE_COLORS.length] }
					}), n]
				}, n))
			})
		]
	});
}
function Results() {
	const { username } = useParams({ from: "/results/$username" });
	const gh = useQuery({
		queryKey: ["gh", username],
		queryFn: () => fetchGithubProfile({ data: {
			username,
			token: getStoredToken()
		} }),
		retry: 1,
		staleTime: 1e3 * 60 * 5
	});
	const ai = useQuery({
		queryKey: ["ai", username],
		enabled: !!gh.data,
		queryFn: () => generateAIInsights({ data: { summary: buildAISummary(gh.data) } }),
		staleTime: 1e3 * 60 * 30
	});
	if (gh.isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, { username });
	if (gh.isError || !gh.data) {
		const msg = gh.error?.message || "";
		const is404 = msg.includes("404");
		const isRate = msg.includes("403") || msg.toLowerCase().includes("rate");
		const hasToken = !!getStoredToken();
		if (isRate) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative min-h-screen px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-xl grad-primary text-base",
						children: "🧬"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Code"
						}), "DNA"]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RateLimitModal, {
				open: true,
				hasToken,
				onClose: () => window.history.back(),
				onAddToken: () => {
					window.location.href = "/#token";
				},
				onTryDemo: () => {
					window.location.href = "/results/gaearon";
				},
				onTryAgain: () => gh.refetch()
			})]
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex min-h-screen items-center justify-center px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-soft max-w-md rounded-3xl p-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl grad-primary text-3xl text-white shadow",
						children: is404 ? "🔍" : "⚠️"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold",
						children: is404 ? "User not found" : "Couldn't analyze"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: is404 ? `No GitHub user called @${username}.` : "Something went wrong. Try again."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-2 rounded-full grad-primary px-5 py-2.5 text-sm font-semibold text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowLeft, {}), " Back home"]
						})
					})
				]
			})
		});
	}
	const data = gh.data;
	const badges = computeBadges(data);
	const achievements = computeAchievements(data);
	const level = calcLevel(data);
	const insights = ai.data ?? null;
	const archetype = computeArchetype(data);
	const archetypeName = insights?.archetype || archetype.name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfettiBurst, { trigger: !!insights }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchetypeRevealOverlay, {
				archetype,
				username
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-xl grad-primary text-base",
						children: "🧬"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-bold",
						children: "CodeDNA"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 items-center justify-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden w-full max-w-md md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
							initial: username,
							compact: true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/compare",
						search: {
							a: username,
							b: ""
						},
						className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-white",
						children: "⚔ Compare"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				className: "mx-auto max-w-6xl space-y-28 px-6 md:space-y-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityCard, { data }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 02",
						title: "Your Archetype",
						sub: "The rare class your code reveals — collect them all."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchetypeReveal, { archetype })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 03",
						title: "Developer Avatar",
						sub: "A one-of-one identity, generated from your repos."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarGenerator, {
						data,
						archetype
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 04",
						title: "Badges",
						sub: "Achievements unlocked across your journey."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgesGrid, { badges })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 05",
						title: "Developer XP",
						sub: "Your RPG profile. Level up by shipping more open source."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XPSystem, {
						level: level.level,
						pct: level.pct,
						xp: level.xp,
						achievements,
						archetype: archetypeName
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 06",
						title: "GitHub Wrapped",
						sub: "Your year in code, one story at a time."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrapped, { data })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 07",
						title: "Coding DNA",
						sub: "Your signature traits, encoded in a double helix."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DnaHelix, { data })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 08",
						title: "Language Bubbles",
						sub: "The composition of your coding voice."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageBubbles, { data })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 09",
						title: "Repository Galaxy",
						sub: "Every repo is a star. Click one to visit it."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Constellation, { data })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							eyebrow: "Section 10",
							title: "The Numbers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsGrid, { data }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Charts, { data })
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 11",
						title: "AI Mentor",
						sub: ai.isLoading ? "Consulting the AI mentor…" : "Trained on your repos · ask anything"
					}), insights ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIMentorChat, { insights }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "card-soft rounded-3xl p-8 text-center text-sm text-muted-foreground",
						children: "Analyzing developer personality…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 12",
						title: "Future Path",
						sub: "Where your code is taking you next."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerPath, { data })] }),
					insights && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 13",
						title: "If You Were…",
						sub: "Fun personality projections from your code."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalityCards, { p: insights.personalities })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 14",
						title: "Developer Timeline"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { data })] }),
					insights && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 15",
						title: "Developer Yearbook",
						sub: "The signed page. Print-ready memories."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yearbook, {
						data,
						insights
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Section 16",
						title: "Your Trading Card",
						sub: "Hover to tilt. Download to flex."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradingCard, {
						data,
						insights,
						level: level.level,
						archetype,
						badges: badges.filter((b) => b.earned).map((b) => `${b.icon} ${b.name}`)
					})] })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mx-auto mt-24 max-w-7xl px-6 text-center text-xs text-muted-foreground",
				children: "Data from GitHub · Insights by Groq · Built with TanStack Start"
			})
		]
	});
}
//#endregion
export { Results as component };
