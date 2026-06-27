import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as AnimatePresence, i as motion } from "../_libs/framer-motion.mjs";
import { B as FiX, F as FiShield, L as FiTrash2, M as FiSearch, T as FiKey, V as FiZap, b as FiEyeOff, c as FiCheckCircle, f as FiClipboard, j as FiRefreshCw, l as FiChevronDown, n as FiAlertCircle, s as FiCheck, v as FiExternalLink, w as FiHelpCircle, y as FiEye } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TokenInput-CLsIjYn9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
function SearchBar({ initial = "", compact = false }) {
	const [v, setV] = (0, import_react.useState)(initial);
	const navigate = useNavigate();
	const submit = (e) => {
		e.preventDefault();
		const u = v.trim().replace(/^@/, "");
		if (!u) return;
		navigate({
			to: "/results/$username",
			params: { username: u }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
		onSubmit: submit,
		initial: {
			opacity: 0,
			y: 14
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay: .2,
			duration: .6
		},
		className: `card-soft relative mx-auto flex w-full items-center gap-2 rounded-full p-2 pl-5 ${compact ? "max-w-md" : "max-w-2xl mt-10 ring-soft"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiSearch, { className: "h-5 w-5 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: v,
				onChange: (e) => setV(e.target.value),
				placeholder: "Enter GitHub username — e.g. torvalds",
				className: "flex-1 bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground",
				autoComplete: "off",
				spellCheck: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
				whileHover: { scale: 1.04 },
				whileTap: { scale: .97 },
				type: "submit",
				className: "glow-primary grad-primary flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiZap, { className: "h-4 w-4" }),
					" ",
					compact ? "Decode" : "Decode My DNA"
				]
			})
		]
	});
}
var STEPS = [
	{
		t: "Open GitHub Settings",
		d: "Click your avatar in the top-right of GitHub and open Settings."
	},
	{
		t: "Go to Developer Settings",
		d: "Scroll to the bottom of the left sidebar and click Developer settings."
	},
	{
		t: "Open Personal Access Tokens",
		d: "Choose Tokens (classic). Fine-grained tokens also work."
	},
	{
		t: "Generate New Token",
		d: "Click Generate new token. Add a note like “CodeDNA”. Expiration: 30 days is fine."
	},
	{
		t: "No special permissions are required",
		d: "Leave every scope unchecked — public profile data is all we read."
	},
	{
		t: "Copy & paste into CodeDNA",
		d: "Copy the token (you won't see it again) and paste it into the field on CodeDNA."
	}
];
function TokenHelpModal({ open, onClose }) {
	if (typeof document === "undefined") return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onClose,
		className: "fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			onClick: (e) => e.stopPropagation(),
			initial: {
				y: 40,
				opacity: 0,
				scale: .98
			},
			animate: {
				y: 0,
				opacity: 1,
				scale: 1
			},
			exit: {
				y: 40,
				opacity: 0,
				scale: .98
			},
			transition: {
				type: "spring",
				stiffness: 320,
				damping: 30
			},
			className: "relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					"aria-label": "Close",
					className: "absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-secondary text-muted-foreground transition hover:bg-accent hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiX, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl grad-primary text-xl text-white shadow-lg",
					children: "🔑"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold",
					children: "How to create a GitHub Personal Access Token"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: [
						"Takes about 30 seconds. Lifts your GitHub API limit from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "60/hr" }),
						" to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "5,000/hr" }),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-5 space-y-3",
					children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-2xl bg-secondary/60 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-7 w-7 shrink-0 place-items-center rounded-full grad-primary text-xs font-bold text-white",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							children: s.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: s.d
						})] })]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://github.com/settings/tokens/new?description=CodeDNA&scopes=",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full grad-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg",
						children: ["Create token on GitHub ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiExternalLink, { className: "h-3.5 w-3.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold",
						children: "I'm ready, close this"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-sm font-semibold text-emerald-800",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiShield, {}), " Security Information"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-2 space-y-1 text-xs text-emerald-800/90",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCheckCircle, { className: "mt-0.5 shrink-0" }), " Your token never leaves your browser without your action."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCheckCircle, { className: "mt-0.5 shrink-0" }), " We never store your token on our servers."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCheckCircle, { className: "mt-0.5 shrink-0" }), " You can remove your token at any time."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCheckCircle, { className: "mt-0.5 shrink-0" }), " The token lives only in your browser's local storage."]
							})
						]
					})]
				})
			]
		})
	}) }), document.body);
}
var TOKEN_KEY = "github_token";
var LEGACY_KEY = "codedna:gh_token";
var VALID = /^(gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,})$/;
function getStoredToken() {
	if (typeof window === "undefined") return void 0;
	try {
		const t = window.localStorage.getItem("github_token") || window.localStorage.getItem(LEGACY_KEY);
		return t && t.trim() ? t.trim() : void 0;
	} catch {
		return;
	}
}
function mask(t) {
	return `${t.slice(0, 7)}…${t.slice(-4)}`;
}
function TokenInput({ autoFocus = false, defaultOpen = false }) {
	const [open, setOpen] = (0, import_react.useState)(autoFocus || defaultOpen);
	const [saved, setSaved] = (0, import_react.useState)(void 0);
	const [value, setValue] = (0, import_react.useState)("");
	const [show, setShow] = (0, import_react.useState)(false);
	const [state, setState] = (0, import_react.useState)("idle");
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [helpOpen, setHelpOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = getStoredToken();
		setSaved(t);
		try {
			if (t && !window.localStorage.getItem("github_token")) {
				window.localStorage.setItem(TOKEN_KEY, t);
				window.localStorage.removeItem(LEGACY_KEY);
			}
		} catch {}
	}, []);
	const validateAndSave = async () => {
		const t = value.trim();
		setMsg(null);
		if (!t) {
			setState("invalid");
			setMsg("Please paste a token first.");
			return;
		}
		if (t.length > 255 || !VALID.test(t)) {
			setState("invalid");
			setMsg("That doesn't look like a GitHub token (should start with ghp_ or github_pat_).");
			return;
		}
		setState("checking");
		try {
			const res = await fetch("https://api.github.com/user", { headers: {
				Authorization: `Bearer ${t}`,
				Accept: "application/vnd.github+json"
			} });
			if (res.status === 401) {
				setState("invalid");
				setMsg("Invalid GitHub Token — please check your token and try again.");
				return;
			}
			if (!res.ok) {
				setState("error");
				setMsg(`GitHub responded with ${res.status}. Try again in a moment.`);
				return;
			}
			window.localStorage.setItem(TOKEN_KEY, t);
			window.localStorage.removeItem(LEGACY_KEY);
			setSaved(t);
			setValue("");
			setEditing(false);
			setState("ok");
			setMsg(null);
			window.setTimeout(() => setState("idle"), 2500);
		} catch {
			setState("error");
			setMsg("Couldn't reach GitHub. Check your connection and try again.");
		}
	};
	const remove = () => {
		try {
			window.localStorage.removeItem(TOKEN_KEY);
			window.localStorage.removeItem(LEGACY_KEY);
		} catch {}
		setSaved(void 0);
		setEditing(false);
		setState("idle");
		setMsg(null);
	};
	const paste = async () => {
		try {
			const text = await navigator.clipboard.readText();
			if (text) {
				setValue(text.trim());
				setState("idle");
				setMsg(null);
			}
		} catch {
			setMsg("Clipboard access denied. Paste manually with Ctrl/Cmd+V.");
		}
	};
	const showForm = !saved || editing;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 w-full max-w-2xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen((o) => !o),
				className: "mx-auto flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-white hover:text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiKey, { className: "h-3.5 w-3.5" }),
					saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 text-emerald-700",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" }), "Personal GitHub Token Connected"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Advanced Options" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiChevronDown, { className: `h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}` })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						height: 0
					},
					animate: {
						opacity: 1,
						height: "auto"
					},
					exit: {
						opacity: 0,
						height: 0
					},
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-soft mt-3 rounded-2xl p-4 text-left sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-base font-bold",
									children: ["GitHub Personal Access Token ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground font-normal",
										children: "(Optional)"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "🔒 Your token is stored only in your browser and is never sent to our servers."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setHelpOpen(true),
									className: "inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiHelpCircle, { className: "h-3.5 w-3.5" }), " Help"]
								})]
							}),
							saved && !editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 6
								},
								animate: {
									opacity: 1,
									y: 0
								},
								className: "mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-2 text-sm font-semibold text-emerald-800",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCheckCircle, {}), " Personal GitHub Token Connected"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-emerald-800/80",
										children: [
											"Active token: ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
												className: "rounded bg-white/60 px-1.5 py-0.5",
												children: mask(saved)
											}),
											" · API limit ≈ 5,000 requests/hr."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex flex-col gap-2 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: remove,
											className: "inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300 bg-white px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiTrash2, {}), " Remove Token"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												setEditing(true);
												setValue("");
												setState("idle");
												setMsg(null);
											},
											className: "inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiRefreshCw, {}), " Replace Token"]
										})]
									})
								]
							}),
							showForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2 sm:flex-row sm:items-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: show ? "text" : "password",
													value,
													onChange: (e) => {
														setValue(e.target.value);
														setState("idle");
														setMsg(null);
													},
													onKeyDown: (e) => {
														if (e.key === "Enter") {
															e.preventDefault();
															validateAndSave();
														}
													},
													placeholder: "ghp_xxxxxxxxxxxxxxxxxxxxx",
													autoComplete: "off",
													spellCheck: false,
													className: "w-full rounded-full border border-border bg-white px-4 py-2.5 pr-20 text-sm outline-none focus:ring-2 focus:ring-primary/30"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "absolute right-1.5 top-1/2 flex -translate-y-1/2 items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: paste,
														title: "Paste from clipboard",
														className: "grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiClipboard, { className: "h-4 w-4" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setShow((s) => !s),
														title: show ? "Hide token" : "Show token",
														className: "grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground",
														children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiEyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiEye, { className: "h-4 w-4" })
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: validateAndSave,
												disabled: state === "checking",
												className: "inline-flex items-center justify-center gap-2 rounded-full grad-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg disabled:opacity-60",
												children: state === "checking" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiRefreshCw, { className: "h-4 w-4 animate-spin" }), " Checking…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCheck, { className: "h-4 w-4" }), " Connect"] })
											}),
											editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													setEditing(false);
													setValue("");
													setState("idle");
													setMsg(null);
												},
												className: "rounded-full border border-border bg-white px-4 py-2.5 text-sm font-medium",
												children: "Cancel"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [state === "invalid" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
										initial: {
											opacity: 0,
											y: -4
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: { opacity: 0 },
										className: "mt-2 flex items-center gap-1.5 text-xs font-medium text-rose-600",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiAlertCircle, {}),
											" ",
											msg || "Invalid GitHub Token — please check your token and try again."
										]
									}), state === "error" && msg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
										initial: {
											opacity: 0,
											y: -4
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: { opacity: 0 },
										className: "mt-2 flex items-center gap-1.5 text-xs font-medium text-amber-700",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiAlertCircle, {}),
											" ",
											msg
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setHelpOpen(true),
										className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline",
										children: "How to create a GitHub token →"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: state === "ok" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									scale: .9,
									y: 8
								},
								animate: {
									opacity: 1,
									scale: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -6
								},
								transition: {
									type: "spring",
									stiffness: 280,
									damping: 18
								},
								className: "mt-4 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 font-display text-base font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										animate: { rotate: [
											0,
											-15,
											15,
											0
										] },
										transition: { duration: .7 },
										children: "🎉"
									}), "GitHub Token Connected Successfully!"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-white/90",
									children: "Your API limit has increased to approximately 5,000 requests per hour."
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded-2xl bg-secondary/60 p-3 text-[11px] leading-relaxed text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-1.5 text-xs font-semibold text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiShield, { className: "h-3.5 w-3.5" }), " Security Information"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-1.5 space-y-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Your token never leaves your browser." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• We never store your token on our servers." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• You can remove your token at any time." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• The token is stored only in your local browser storage." })
									]
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TokenHelpModal, {
				open: helpOpen,
				onClose: () => setHelpOpen(false)
			})
		]
	});
}
//#endregion
export { TokenInput as n, getStoredToken as r, SearchBar as t };
