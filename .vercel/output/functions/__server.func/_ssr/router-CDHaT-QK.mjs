import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, n as QueryClientProvider, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { L as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$3 } from "./compare-CIMonMbd.mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CDHaT-QK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BFUXVZxH.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-soft max-w-md rounded-3xl p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-black text-gradient",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-xl font-bold",
					children: "Sequence not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This strand of DNA doesn't exist. Try analyzing a different developer."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full grad-primary px-5 py-2.5 text-sm font-semibold text-foreground",
						children: "Back to lab"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error("[CodeDNA Error]", error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	const handleRetry = () => {
		router.invalidate();
		reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-soft max-w-md rounded-3xl p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl grad-primary text-3xl shadow",
					children: "⚠️"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl font-bold",
					children: "Sequencing failed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong analyzing this profile. Try again or head home."
				}),
				false,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleRetry,
						className: "rounded-full grad-primary px-4 py-2 text-sm font-semibold text-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-border bg-white px-4 py-2 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CodeDNA — Decode any developer's GitHub personality" },
			{
				name: "description",
				content: "Turn any GitHub profile into a stunning Developer Personality Report. Stats, badges, charts, AI insights, and a shareable DNA card."
			},
			{
				name: "author",
				content: "CodeDNA"
			},
			{
				property: "og:title",
				content: "CodeDNA — Developer Personality Analyzer"
			},
			{
				property: "og:description",
				content: "Turn any GitHub profile into a stunning Developer Personality Report."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$1 = () => import("./routes-D0Uvsjyn.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "CodeDNA — Turn any GitHub profile into a Developer Personality Report" }, {
		name: "description",
		content: "Discover your coding personality, strengths, achievements, and future career path. GitHub Wrapped meets RPG character sheet."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./results._username-BqniAUuT.mjs");
var Route = createFileRoute("/results/$username")({
	head: ({ params }) => ({ meta: [
		{ title: `${params.username} · CodeDNA` },
		{
			name: "description",
			content: `Developer Personality Report for @${params.username} — stats, badges, AI insights.`
		},
		{
			property: "og:title",
			content: `${params.username}'s Developer DNA`
		},
		{
			property: "og:description",
			content: `Decoded GitHub personality, level, top languages, and AI-generated insights.`
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var CompareRoute = Route$3.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => Route$2
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	CompareRoute,
	ResultsUsernameRoute: Route.update({
		id: "/results/$username",
		path: "/results/$username",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
