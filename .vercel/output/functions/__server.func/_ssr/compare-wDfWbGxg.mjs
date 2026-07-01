import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./compare-CIMonMbd.mjs";
import { f as topLanguages, i as calcLevel, l as fetchGithubProfile, o as computeArchetype, t as RARITY_STYLE } from "./archetype-BLR_qAMv.mjs";
import { t as DNABackground } from "./DNABackground-ujJ4xva5.mjs";
import { a as useMotionValue, i as useMotionTemplate, o as motion, s as AnimatePresence, t as useSpring } from "../_libs/framer-motion.mjs";
import { i as FiArrowRight, l as FiCheckCircle, r as FiArrowLeft, w as FiGithub } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-wDfWbGxg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useDev(username) {
	return useQuery({
		queryKey: ["gh", username],
		enabled: !!username && username.length > 0,
		queryFn: () => fetchGithubProfile({ data: { username } }),
		retry: 1,
		staleTime: 1e3 * 60 * 5
	});
}
function UserInput({ side, value, onSubmit, autoFocus = false }) {
	const [v, setV] = (0, import_react.useState)(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			if (v.trim()) onSubmit(v.trim());
		},
		className: "card-soft relative flex items-center gap-3 overflow-hidden rounded-[24px] p-2 pr-3 bg-white/70 backdrop-blur-xl border border-white focus-within:border-indigo-400 focus-within:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-lg font-black text-foreground shadow-md",
				children: side
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiGithub, { className: "relative shrink-0 text-slate-400 text-lg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: v,
				onChange: (e) => setV(e.target.value),
				placeholder: `Enter Fighter ${side}...`,
				autoFocus,
				className: "relative min-w-0 flex-1 bg-transparent px-1 py-2 text-[15px] font-medium text-slate-900 outline-none placeholder:text-slate-400"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "relative shrink-0 rounded-[14px] bg-card px-5 py-2.5 text-sm font-bold text-foreground shadow-lg transition-transform hover:scale-105 active:scale-95",
				children: "Lock In"
			})
		]
	});
}
function buildStats(a, b) {
	const la = calcLevel(a);
	const lb = calcLevel(b);
	const pick = (av, bv) => av > bv ? "a" : bv > av ? "b" : "tie";
	const langA = Object.keys(a.languageBytes).length;
	const langB = Object.keys(b.languageBytes).length;
	return [
		{
			label: "Level",
			a: la.level,
			b: lb.level,
			winner: pick(la.level, lb.level)
		},
		{
			label: "Total XP",
			a: la.xp.toLocaleString(),
			b: lb.xp.toLocaleString(),
			winner: pick(la.xp, lb.xp)
		},
		{
			label: "Repositories",
			a: a.totals.repos,
			b: b.totals.repos,
			winner: pick(a.totals.repos, b.totals.repos)
		},
		{
			label: "Stars earned",
			a: a.totals.stars.toLocaleString(),
			b: b.totals.stars.toLocaleString(),
			winner: pick(a.totals.stars, b.totals.stars)
		},
		{
			label: "Forks",
			a: a.totals.forks,
			b: b.totals.forks,
			winner: pick(a.totals.forks, b.totals.forks)
		},
		{
			label: "Languages",
			a: langA,
			b: langB,
			winner: pick(langA, langB)
		},
		{
			label: "Followers",
			a: a.user.followers,
			b: b.user.followers,
			winner: pick(a.user.followers, b.user.followers)
		}
	];
}
function BattleCard({ data, archetype, side, isWinner = false }) {
	const r = RARITY_STYLE[archetype.rarity];
	const top = topLanguages(data.languageBytes, 4);
	const level = calcLevel(data);
	const mouseX = useMotionValue(.5);
	const mouseY = useMotionValue(.5);
	const rotateX = useSpring(useMotionTemplate`${(mouseY.get() - .5) * -15}deg`, {
		stiffness: 300,
		damping: 30
	});
	const rotateY = useSpring(useMotionTemplate`${(mouseX.get() - .5) * 15}deg`, {
		stiffness: 300,
		damping: 30
	});
	const shineX = useSpring(useMotionTemplate`${mouseX.get() * 100}%`, {
		stiffness: 300,
		damping: 30
	});
	const shineY = useSpring(useMotionTemplate`${mouseY.get() * 100}%`, {
		stiffness: 300,
		damping: 30
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		onMouseMove: (e) => {
			const rect = e.currentTarget.getBoundingClientRect();
			mouseX.set((e.clientX - rect.left) / rect.width);
			mouseY.set((e.clientY - rect.top) / rect.height);
		},
		onMouseLeave: () => {
			mouseX.set(.5);
			mouseY.set(.5);
		},
		initial: {
			opacity: 0,
			y: 50,
			scale: .9
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 20
		},
		className: `relative z-10 w-full overflow-hidden rounded-[40px] p-[3px] transition-shadow duration-500 ${isWinner ? "shadow-[0_0_100px_rgba(255,215,0,0.3)] z-20" : ""}`,
		style: {
			rotateX,
			rotateY,
			perspective: 1e3,
			backgroundImage: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
			boxShadow: `0 40px 100px -20px ${r.glow}`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-full w-full overflow-hidden rounded-[37px] bg-card p-6 text-foreground md:p-8 custom-scrollbar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "pointer-events-none absolute inset-0 z-50 mix-blend-overlay opacity-40 transition-opacity duration-300",
					style: { background: useMotionTemplate`radial-gradient(circle 400px at ${shineX} ${shineY}, rgba(255,255,255,0.8), transparent 80%)` }
				}),
				isWinner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -left-10 top-6 -rotate-45 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 px-12 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-lg z-20",
					children: "Winner"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					"aria-hidden": true,
					initial: { x: "-100%" },
					animate: { x: "200%" },
					transition: {
						duration: 4,
						repeat: Infinity,
						ease: "linear"
					},
					className: "pointer-events-none absolute inset-y-0 w-1/2 opacity-20",
					style: { background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full blur-[80px]",
					style: {
						background: archetype.color,
						opacity: .3
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full border border-border bg-white/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-foreground/80 backdrop-blur-md",
						children: ["Fighter ", side]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-lg",
						style: {
							background: r.color,
							color: "#0b1020"
						},
						children: archetype.rarity
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-8 flex flex-col items-center text-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 rounded-full blur-xl opacity-50 transition-opacity group-hover:opacity-80",
								style: { background: archetype.color }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: data.user.avatar_url,
								alt: data.user.login,
								className: "relative h-28 w-28 rounded-full border-[3px] border-border object-cover shadow-2xl transition-transform duration-500 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border-2 border-[#090b14] bg-slate-100 px-3 py-0.5 text-xs font-black text-slate-900 shadow-lg",
								children: ["LVL ", level.level]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 w-full min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-display text-3xl font-black",
								children: data.user.name || data.user.login
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-sm text-foreground/50 tracking-wider",
								children: ["@", data.user.login]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto mt-4 inline-flex items-center gap-3 rounded-[16px] border border-border bg-white/5 p-1.5 pr-4 backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl text-2xl shadow-inner",
									style: { background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})` },
									children: archetype.emoji
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-black uppercase tracking-widest text-foreground/90",
									children: archetype.name
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mt-8 grid grid-cols-2 gap-3 text-center",
					children: [{
						l: "★ Stars",
						v: data.totals.stars.toLocaleString()
					}, {
						l: "📦 Repos",
						v: data.totals.repos
					}].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[20px] border border-border bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-black",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[10px] uppercase tracking-widest text-foreground/50",
							children: s.l
						})]
					}, s.l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-6 rounded-[20px] border border-border bg-white/5 p-5 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[11px] font-black uppercase tracking-[0.2em] text-foreground/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Power Level" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [archetype.power, "/100"] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-3 overflow-hidden rounded-full bg-card shadow-inner",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { width: 0 },
							animate: { width: `${archetype.power}%` },
							transition: {
								duration: 1.5,
								ease: [
									.16,
									1,
									.3,
									1
								],
								delay: .2
							},
							className: "relative h-full rounded-full",
							style: { background: `linear-gradient(90deg, ${archetype.color}, ${r.color})` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" })
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40",
						children: "Weapon of Choice"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap justify-center gap-2",
						children: top.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-lg border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-foreground/80 shadow-sm",
							children: [
								l.name,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-foreground/40",
									children: [
										"· ",
										l.pct,
										"%"
									]
								})
							]
						}, l.name))
					})]
				})
			]
		})
	});
}
function StatLine({ s, delay }) {
	const winA = s.winner === "a";
	const winB = s.winner === "b";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay,
			duration: .4
		},
		className: "grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-border/40 py-4 last:border-b-0 hover:bg-muted/20 rounded-xl px-2 transition-colors",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-end gap-3 text-right text-xl font-black tabular-nums md:text-3xl ${winA ? "text-slate-900" : "text-slate-300"}`,
				children: [winA && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCheckCircle, { className: "text-emerald-500 h-5 w-5 shrink-0" }), s.a]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-24 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400",
				children: s.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-start gap-3 text-left text-xl font-black tabular-nums md:text-3xl ${winB ? "text-slate-900" : "text-slate-300"}`,
				children: [s.b, winB && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCheckCircle, { className: "text-emerald-500 h-5 w-5 shrink-0" })]
			})
		]
	});
}
function StatusCard({ children, bg = "bg-white/50" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `card-soft flex min-h-[500px] flex-col items-center justify-center rounded-[40px] border border-white p-10 text-center shadow-xl backdrop-blur-xl ${bg}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-bold tracking-widest text-slate-400 uppercase",
			children
		})
	});
}
function ComparePage() {
	const { a, b } = Route.useSearch();
	const navigate = useNavigate({ from: "/compare" });
	const qa = useDev(a);
	const qb = useDev(b);
	const setA = (v) => navigate({ search: (p) => ({
		...p,
		a: v
	}) });
	const setB = (v) => navigate({ search: (p) => ({
		...p,
		b: v
	}) });
	const archA = qa.data ? computeArchetype(qa.data) : null;
	const archB = qb.data ? computeArchetype(qb.data) : null;
	const stats = qa.data && qb.data ? buildStats(qa.data, qb.data) : null;
	const winsA = stats?.filter((s) => s.winner === "a").length ?? 0;
	const winsB = stats?.filter((s) => s.winner === "b").length ?? 0;
	const overall = winsA === winsB ? "tie" : winsA > winsB ? "a" : "b";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen w-full overflow-hidden pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DNABackground, { density: 1.2 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 md:px-12 md:py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-3 text-sm transition-opacity hover:opacity-70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white shadow-sm transition-transform group-hover:-translate-x-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowLeft, { className: "text-slate-600" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-black tracking-tight text-slate-900",
						children: "CodeDNA"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-600 shadow-sm",
					children: "⚔ Battle Mode"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 mx-auto mt-4 max-w-6xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .9,
							y: 20
						},
						animate: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						transition: {
							duration: .6,
							type: "spring"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-6xl font-black tracking-tight md:text-[5.5rem] leading-[0.9]",
							children: [
								"Developer ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "md:hidden" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Showdown"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl text-lg font-medium text-slate-500",
							children: "Pit two GitHub profiles head-to-head to see whose chronicle is superior."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserInput, {
								side: "A",
								value: a,
								onSubmit: setA,
								autoFocus: !a
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { scale: 0 },
								animate: { scale: 1 },
								transition: {
									delay: .3,
									type: "spring"
								},
								className: "grid h-14 w-14 place-items-center justify-self-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-lg font-black uppercase text-foreground shadow-[0_0_30px_rgba(99,102,241,0.5)] border-4 border-white",
								children: "VS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserInput, {
								side: "B",
								value: b,
								onSubmit: setB,
								autoFocus: !!a && !b
							})
						]
					}),
					(!a || !b) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: 1 },
						className: "mt-8 text-[13px] font-semibold text-slate-400",
						children: ["Need an example? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setA("gaearon");
								setB("torvalds");
							},
							className: "text-indigo-500 hover:text-indigo-600 underline decoration-indigo-200 underline-offset-4 transition-colors",
							children: "gaearon vs torvalds"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 mx-auto mt-16 grid max-w-[1400px] gap-8 px-6 md:grid-cols-2 lg:gap-12 lg:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: !a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCard, {
							bg: "bg-white/40",
							children: "Select Fighter A"
						}) : qa.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusCard, {
							bg: "bg-white/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600 mx-auto mb-4" }),
								"Summoning @",
								a,
								"…"
							]
						}) : qa.isError || !qa.data ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusCard, {
							bg: "bg-red-50/50",
							children: [
								"Couldn't find @",
								a,
								". Typo?"
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BattleCard, {
							data: qa.data,
							archetype: archA,
							side: "A",
							isWinner: overall === "a"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative hidden md:block lg:hidden h-full w-px bg-border/50 absolute left-1/2 -translate-x-1/2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: !b ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCard, {
							bg: "bg-white/40",
							children: "Select Fighter B"
						}) : qb.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusCard, {
							bg: "bg-white/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600 mx-auto mb-4" }),
								"Summoning @",
								b,
								"…"
							]
						}) : qb.isError || !qb.data ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusCard, {
							bg: "bg-red-50/50",
							children: [
								"Couldn't find @",
								b,
								". Typo?"
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BattleCard, {
							data: qb.data,
							archetype: archB,
							side: "B",
							isWinner: overall === "b"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: stats && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
				initial: {
					opacity: 0,
					y: 50
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .4,
					type: "spring",
					stiffness: 80
				},
				className: "relative z-10 mx-auto mt-20 max-w-5xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-soft relative overflow-hidden rounded-[40px] border border-white bg-white/70 p-8 shadow-2xl backdrop-blur-2xl md:p-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-purple-50/30 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mb-12 flex flex-col items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-black uppercase tracking-[0.4em] text-slate-400",
								children: "Tale of the Tape"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-6 rounded-full border border-slate-200 bg-white px-6 py-2 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-xl font-black ${overall === "a" ? "text-indigo-600" : "text-slate-400"}`,
										children: winsA
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-black uppercase tracking-widest text-slate-300",
										children: "Score"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-xl font-black ${overall === "b" ? "text-purple-600" : "text-slate-400"}`,
										children: winsB
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative",
							children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatLine, {
								s,
								delay: .5 + i * .1
							}, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								scale: .8
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								delay: 1.5,
								type: "spring",
								stiffness: 120
							},
							className: "relative z-20 mt-16 grid place-items-center",
							children: overall === "tie" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[32px] border border-slate-200 bg-white px-12 py-8 text-center shadow-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] font-black uppercase tracking-widest text-slate-400",
									children: "Result"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-4xl font-black text-slate-900",
									children: "It's a Draw 🤝"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-[40px] px-16 py-12 text-center text-foreground shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-transform hover:scale-105",
								style: { background: `linear-gradient(135deg, ${(overall === "a" ? archA : archB).color}, ${(overall === "a" ? archA : archB).color2})` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[12px] font-black uppercase tracking-[0.4em] text-foreground/70",
											children: "Absolute Victory"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 font-display text-6xl font-black tracking-tight drop-shadow-xl",
											children: ["@", overall === "a" ? qa.data.user.login : qb.data.user.login]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold text-foreground backdrop-blur-md",
											children: [
												"Won ",
												Math.max(winsA, winsB),
												" of ",
												stats.length,
												" categories"
											]
										})
									]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-12 flex flex-col md:flex-row flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/results/$username",
								params: { username: qa.data.user.login },
								className: "group inline-flex items-center justify-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-bold text-foreground shadow-lg transition-transform hover:scale-105",
								children: [
									"View @",
									qa.data.user.login,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowRight, { className: "transition-transform group-hover:translate-x-1" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/results/$username",
								params: { username: qb.data.user.login },
								className: "group inline-flex items-center justify-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-bold text-foreground shadow-lg transition-transform hover:scale-105",
								children: [
									"View @",
									qb.data.user.login,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowRight, { className: "transition-transform group-hover:translate-x-1" })
								]
							})]
						})
					]
				})
			}) })
		]
	});
}
//#endregion
export { ComparePage as component };
