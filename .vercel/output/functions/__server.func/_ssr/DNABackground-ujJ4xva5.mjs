import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DNABackground-ujJ4xva5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SYMBOLS = [
	"<>",
	"{}",
	"()",
	"[]",
	"/>",
	"=>",
	"&&",
	"||",
	"==",
	"++"
];
function DNABackground({ density = 1 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const resize = () => {
			canvas.width = canvas.clientWidth * dpr;
			canvas.height = canvas.clientHeight * dpr;
		};
		resize();
		window.addEventListener("resize", resize);
		const N = Math.round(50 * density);
		const nodes = Array.from({ length: N }, (_, i) => ({
			t: i / N * Math.PI * 4,
			sym: SYMBOLS[i % SYMBOLS.length],
			side: i % 2
		}));
		const P = Math.round(40 * density);
		const particles = Array.from({ length: P }, () => ({
			x: Math.random(),
			y: Math.random(),
			r: .5 + Math.random() * 1.8,
			vx: (Math.random() - .5) * 6e-4,
			vy: (Math.random() - .5) * 6e-4,
			hue: Math.random() < .5 ? "99,102,241" : "6,182,212"
		}));
		const start = performance.now();
		const tick = (now) => {
			const w = canvas.width, h = canvas.height;
			const time = (now - start) / 1e3;
			ctx.clearRect(0, 0, w, h);
			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > 1) p.vx *= -1;
				if (p.y < 0 || p.y > 1) p.vy *= -1;
				ctx.beginPath();
				ctx.arc(p.x * w, p.y * h, p.r * dpr, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${p.hue},0.35)`;
				ctx.fill();
			}
			const cx = w * .82;
			const amp = Math.min(w, h) * .1;
			ctx.lineWidth = 1.2 * dpr;
			for (let s = 0; s < 2; s++) {
				ctx.beginPath();
				for (let i = 0; i <= 200; i++) {
					const t = i / 200 * Math.PI * 4 + time * .5;
					const y = i / 200 * h;
					const x = cx + Math.sin(t + (s ? Math.PI : 0)) * amp;
					if (i === 0) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				}
				ctx.strokeStyle = s === 0 ? "rgba(99,102,241,0.32)" : "rgba(6,182,212,0.30)";
				ctx.stroke();
			}
			ctx.font = `${11 * dpr}px "JetBrains Mono", monospace`;
			nodes.forEach((n, i) => {
				const t = n.t + time * .5;
				const y = (i / N * h + time * 24 * dpr % (h / N)) % h;
				const x1 = cx + Math.sin(t) * amp;
				const x2 = cx + Math.sin(t + Math.PI) * amp;
				ctx.strokeStyle = "rgba(139,92,246,0.14)";
				ctx.beginPath();
				ctx.moveTo(x1, y);
				ctx.lineTo(x2, y);
				ctx.stroke();
				ctx.fillStyle = n.side ? "rgba(99,102,241,0.7)" : "rgba(6,182,212,0.7)";
				ctx.fillText(n.sym, n.side ? x1 - 10 : x2 + 4, y + 4);
			});
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
		};
	}, [density]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-blob" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-0 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob",
				style: { animationDelay: "-4s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/3 bottom-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-blob",
				style: { animationDelay: "-8s" }
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "pointer-events-none absolute inset-0 h-full w-full opacity-90",
		"aria-hidden": true
	})] });
}
//#endregion
export { DNABackground as t };
