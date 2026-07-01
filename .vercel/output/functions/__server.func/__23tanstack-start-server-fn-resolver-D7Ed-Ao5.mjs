//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-D7Ed-Ao5.js
var manifest = {
	"57504de59668c746398ed2a22a09681e6ed95ca26fefcfcd28da57e0f0ef85c8": {
		functionName: "fetchGithubProfile_createServerFn_handler",
		importer: () => import("./_ssr/github.functions-fPgwxxRb.mjs")
	},
	"75a7bcecec6992c0c89c5610e4b245c2d39fd0e1dc375ff36de8ac416d069df5": {
		functionName: "generateAIInsights_createServerFn_handler",
		importer: () => import("./_ssr/groq.functions-C0zYJbyA.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
