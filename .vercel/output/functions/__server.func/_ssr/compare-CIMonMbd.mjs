import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-CIMonMbd.js
var $$splitComponentImporter = () => import("./compare-wDfWbGxg.mjs");
var searchSchema = objectType({
	a: stringType().optional().default(""),
	b: stringType().optional().default("")
});
var Route = createFileRoute("/compare")({
	validateSearch: (s) => searchSchema.parse(s),
	head: () => ({ meta: [{ title: "Developer Battle · CodeDNA" }, {
		name: "description",
		content: "Compare two GitHub developers head-to-head. Stats, archetypes, languages, XP."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
