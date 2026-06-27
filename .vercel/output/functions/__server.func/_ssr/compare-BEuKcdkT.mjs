import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./compare-Bw_XqZRw.mjs";
import { f as topLanguages, i as calcLevel, l as fetchGithubProfile, o as computeArchetype, t as RARITY_STYLE } from "./archetype-DA403ydT.mjs";
import { t as DNABackground } from "./DNABackground-ujJ4xva5.mjs";
import { a as AnimatePresence, i as motion } from "../_libs/framer-motion.mjs";
import { C as FiGithub, i as FiArrowRight, r as FiArrowLeft } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-BEuKcdkT.js
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
function UserInput({ side, value, onSubmit }) {
	const [v, setV] = (0, import_react.useState)(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			if (v.trim()) onSubmit(v.trim());
		},
		className: "card-soft flex items-center gap-2 rounded-2xl p-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-9 w-9 place-items-center rounded-xl grad-primary text-sm font-black text-white",
				children: side
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiGithub, { className: "ml-1 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: v,
				onChange: (e) => setV(e.target.value),
				placeholder: "github username",
				className: "min-w-0 flex-1 bg-transparent px-1 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "rounded-xl grad-primary px-3 py-1.5 text-xs font-bold text-white",
				children: "Load"
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
function BattleCard({ data, archetype, side }) {
	const r = RARITY_STYLE[archetype.rarity];
	const top = topLanguages(data.languageBytes, 5);
	const level = calcLevel(data);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			x: side === "A" ? -50 : 50
		},
		animate: {
			opacity: 1,
			x: 0
		},
		transition: {
			type: "spring",
			stiffness: 80,
			damping: 16
		},
		className: "relative overflow-hidden rounded-[32px] p-[2px]",
		style: {
			backgroundImage: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2}, ${r.color})`,
			boxShadow: `0 30px 80px -20px ${r.glow}`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-full overflow-hidden rounded-[30px] bg-slate-950 p-6 text-white md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					"aria-hidden": true,
					initial: { x: "-100%" },
					animate: { x: "200%" },
					transition: {
						duration: 5,
						repeat: Infinity,
						ease: "linear"
					},
					className: "pointer-events-none absolute inset-y-0 w-1/2",
					style: { background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full blur-3xl",
					style: {
						background: archetype.color,
						opacity: .4
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white/80",
						children: ["Fighter ", side]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest",
						style: {
							background: r.color,
							color: "#0b1020"
						},
						children: [
							archetype.rarity,
							" · ",
							r.label
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-5 flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: data.user.avatar_url,
						alt: data.user.login,
						className: "h-20 w-20 rounded-2xl border-2 border-white/20 object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-lg font-bold",
								children: data.user.name || data.user.login
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-sm text-white/60",
								children: ["@", data.user.login]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 place-items-center rounded-lg text-base",
									style: { background: `linear-gradient(135deg, ${archetype.color}, ${archetype.color2})` },
									children: archetype.emoji
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold",
									children: archetype.name
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mt-5 grid grid-cols-3 gap-2 text-center",
					children: [
						{
							l: "LVL",
							v: level.level
						},
						{
							l: "★",
							v: data.totals.stars.toLocaleString()
						},
						{
							l: "REPOS",
							v: data.totals.repos
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-white/5 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xl font-black",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[9px] uppercase tracking-widest text-white/50",
							children: s.l
						})]
					}, s.l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Power" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [archetype.power, "/100"] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 h-2 overflow-hidden rounded-full bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { width: 0 },
							animate: { width: `${archetype.power}%` },
							transition: {
								duration: 1.2,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "h-full rounded-full",
							style: { background: `linear-gradient(90deg, ${archetype.color}, ${r.color})` }
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold uppercase tracking-widest text-white/50",
						children: "Top languages"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-1.5",
						children: top.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-white/10 px-2 py-0.5 text-[11px]",
							children: [
								l.name,
								" · ",
								l.pct,
								"%"
							]
						}, l.name))
					})]
				})
			]
		})
	});
}
function StatLine({ s }) {
	const winA = s.winner === "a";
	const winB = s.winner === "b";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-border/40 py-3 last:border-b-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `text-right text-xl font-black tabular-nums md:text-2xl ${winA ? "text-foreground" : "text-muted-foreground/60"}`,
				children: [s.a, winA && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 inline-block rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-emerald-600",
					children: "+1"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground",
				children: s.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `text-left text-xl font-black tabular-nums md:text-2xl ${winB ? "text-foreground" : "text-muted-foreground/60"}`,
				children: [winB && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-2 inline-block rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-emerald-600",
					children: "+1"
				}), s.b]
			})
		]
	});
}
function StatusCard({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "card-soft grid min-h-[420px] place-items-center rounded-[32px] p-10 text-center text-sm text-muted-foreground",
		children
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
		className: "relative min-h-screen overflow-hidden pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DNABackground, { density: .8 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowLeft, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-bold",
						children: "CodeDNA"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-border bg-white/70 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground",
					children: "⚔ Battle Mode"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 mx-auto max-w-5xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "font-display text-5xl font-black md:text-7xl",
						children: ["Developer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Battle"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Pit two GitHub profiles head-to-head. Whose chronicle wins?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserInput, {
								side: "A",
								value: a,
								onSubmit: setA
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center justify-self-center rounded-full bg-slate-900 text-sm font-black uppercase text-white shadow-lg",
								children: "VS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserInput, {
								side: "B",
								value: b,
								onSubmit: setB
							})
						]
					}),
					(!a || !b) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: ["Try: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setA("gaearon");
								setB("torvalds");
							},
							className: "font-bold text-foreground underline-offset-2 hover:underline",
							children: "gaearon vs torvalds"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 mx-auto mt-12 grid max-w-6xl gap-6 px-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: !a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCard, { children: "Enter a username on the left to summon Fighter A." }) : qa.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusCard, { children: [
					"Summoning @",
					a,
					"…"
				] }) : qa.isError || !qa.data ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusCard, { children: [
					"Couldn't find @",
					a,
					"."
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BattleCard, {
					data: qa.data,
					archetype: archA,
					side: "A"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: !b ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCard, { children: "Enter a username on the right to summon Fighter B." }) : qb.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusCard, { children: [
					"Summoning @",
					b,
					"…"
				] }) : qb.isError || !qb.data ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusCard, { children: [
					"Couldn't find @",
					b,
					"."
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BattleCard, {
					data: qb.data,
					archetype: archB,
					side: "B"
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: stats && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .2 },
				className: "relative z-10 mx-auto mt-10 max-w-4xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-soft rounded-[32px] p-6 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground",
								children: "Stat-by-stat"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs font-bold",
								children: [
									winsA,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "vs"
									}),
									" ",
									winsB
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatLine, { s }, s.label)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								scale: .9
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								delay: .8,
								type: "spring",
								stiffness: 120
							},
							className: "mt-8 grid place-items-center",
							children: overall === "tie" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-muted px-5 py-3 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground",
									children: "Result"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-black",
									children: "It's a tie 🤝"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl px-6 py-4 text-center text-white shadow-xl",
								style: { background: `linear-gradient(135deg, ${(overall === "a" ? archA : archB).color}, ${(overall === "a" ? archA : archB).color2})` },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-black uppercase tracking-[0.3em] text-white/70",
										children: "Winner"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-3xl font-black",
										children: ["@", overall === "a" ? qa.data.user.login : qb.data.user.login]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-white/80",
										children: [
											"Took ",
											Math.max(winsA, winsB),
											" of ",
											stats.length,
											" stats"
										]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/results/$username",
								params: { username: qa.data.user.login },
								className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-xs font-bold hover:bg-muted",
								children: [
									"@",
									qa.data.user.login,
									" chronicle ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowRight, {})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/results/$username",
								params: { username: qb.data.user.login },
								className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-xs font-bold hover:bg-muted",
								children: [
									"@",
									qb.data.user.login,
									" chronicle ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiArrowRight, {})
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
