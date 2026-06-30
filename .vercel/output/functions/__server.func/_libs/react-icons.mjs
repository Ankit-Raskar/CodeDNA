import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "./react+tanstack__react-query.mjs";
//#region node_modules/react-icons/lib/iconContext.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var DefaultContext = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
};
var IconContext = import_react.createContext && /*#__PURE__*/ import_react.createContext(DefaultContext);
//#endregion
//#region node_modules/react-icons/lib/iconBase.mjs
var _excluded = [
	"attr",
	"size",
	"title"
];
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
	return tree && tree.map((node, i) => /*#__PURE__*/ import_react.createElement(node.tag, _objectSpread({ key: i }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
	return (props) => /*#__PURE__*/ import_react.createElement(IconBase, _extends({ attr: _objectSpread({}, data.attr) }, props), Tree2Element(data.child));
}
function IconBase(props) {
	var elem = (conf) => {
		var { attr, size, title } = props, svgProps = _objectWithoutProperties(props, _excluded);
		var computedSize = size || conf.size || "1em";
		var className;
		if (conf.className) className = conf.className;
		if (props.className) className = (className ? className + " " : "") + props.className;
		return /*#__PURE__*/ import_react.createElement("svg", _extends({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, conf.attr, attr, svgProps, {
			className,
			style: _objectSpread(_objectSpread({ color: props.color || conf.color }, conf.style), props.style),
			height: computedSize,
			width: computedSize,
			xmlns: "http://www.w3.org/2000/svg"
		}), title && /*#__PURE__*/ import_react.createElement("title", null, title), props.children);
	};
	return IconContext !== void 0 ? /*#__PURE__*/ import_react.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
//#endregion
//#region node_modules/react-icons/fi/index.mjs
function FiZap(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polygon",
			"attr": { "points": "13 2 3 14 12 14 11 22 21 10 12 10 13 2" },
			"child": []
		}]
	})(props);
}
function FiX(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "line",
			"attr": {
				"x1": "18",
				"y1": "6",
				"x2": "6",
				"y2": "18"
			},
			"child": []
		}, {
			"tag": "line",
			"attr": {
				"x1": "6",
				"y1": "6",
				"x2": "18",
				"y2": "18"
			},
			"child": []
		}]
	})(props);
}
function FiUsers(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "path",
				"attr": { "d": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" },
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "9",
					"cy": "7",
					"r": "4"
				},
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M23 21v-2a4 4 0 0 0-3-3.87" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M16 3.13a4 4 0 0 1 0 7.75" },
				"child": []
			}
		]
	})(props);
}
function FiUser(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" },
			"child": []
		}, {
			"tag": "circle",
			"attr": {
				"cx": "12",
				"cy": "7",
				"r": "4"
			},
			"child": []
		}]
	})(props);
}
function FiTrendingUp(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polyline",
			"attr": { "points": "23 6 13.5 15.5 8.5 10.5 1 18" },
			"child": []
		}, {
			"tag": "polyline",
			"attr": { "points": "17 6 23 6 23 12" },
			"child": []
		}]
	})(props);
}
function FiTrash2(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "polyline",
				"attr": { "points": "3 6 5 6 21 6" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" },
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "10",
					"y1": "11",
					"x2": "10",
					"y2": "17"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "14",
					"y1": "11",
					"x2": "14",
					"y2": "17"
				},
				"child": []
			}
		]
	})(props);
}
function FiTerminal(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polyline",
			"attr": { "points": "4 17 10 11 4 5" },
			"child": []
		}, {
			"tag": "line",
			"attr": {
				"x1": "12",
				"y1": "19",
				"x2": "20",
				"y2": "19"
			},
			"child": []
		}]
	})(props);
}
function FiTarget(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "circle",
				"attr": {
					"cx": "12",
					"cy": "12",
					"r": "10"
				},
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "12",
					"cy": "12",
					"r": "6"
				},
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "12",
					"cy": "12",
					"r": "2"
				},
				"child": []
			}
		]
	})(props);
}
function FiStar(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polygon",
			"attr": { "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" },
			"child": []
		}]
	})(props);
}
function FiShield(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
			"child": []
		}]
	})(props);
}
function FiShare2(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "circle",
				"attr": {
					"cx": "18",
					"cy": "5",
					"r": "3"
				},
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "6",
					"cy": "12",
					"r": "3"
				},
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "18",
					"cy": "19",
					"r": "3"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "8.59",
					"y1": "13.51",
					"x2": "15.42",
					"y2": "17.49"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "15.41",
					"y1": "6.51",
					"x2": "8.59",
					"y2": "10.49"
				},
				"child": []
			}
		]
	})(props);
}
function FiSend(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "line",
			"attr": {
				"x1": "22",
				"y1": "2",
				"x2": "11",
				"y2": "13"
			},
			"child": []
		}, {
			"tag": "polygon",
			"attr": { "points": "22 2 15 22 11 13 2 9 22 2" },
			"child": []
		}]
	})(props);
}
function FiSearch(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "circle",
			"attr": {
				"cx": "11",
				"cy": "11",
				"r": "8"
			},
			"child": []
		}, {
			"tag": "line",
			"attr": {
				"x1": "21",
				"y1": "21",
				"x2": "16.65",
				"y2": "16.65"
			},
			"child": []
		}]
	})(props);
}
function FiRefreshCw(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "polyline",
				"attr": { "points": "23 4 23 10 17 10" },
				"child": []
			},
			{
				"tag": "polyline",
				"attr": { "points": "1 20 1 14 7 14" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" },
				"child": []
			}
		]
	})(props);
}
function FiPrinter(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "polyline",
				"attr": { "points": "6 9 6 2 18 2 18 9" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" },
				"child": []
			},
			{
				"tag": "rect",
				"attr": {
					"x": "6",
					"y": "14",
					"width": "12",
					"height": "8"
				},
				"child": []
			}
		]
	})(props);
}
function FiPlay(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polygon",
			"attr": { "points": "5 3 19 12 5 21 5 3" },
			"child": []
		}]
	})(props);
}
function FiPause(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "rect",
			"attr": {
				"x": "6",
				"y": "4",
				"width": "4",
				"height": "16"
			},
			"child": []
		}, {
			"tag": "rect",
			"attr": {
				"x": "14",
				"y": "4",
				"width": "4",
				"height": "16"
			},
			"child": []
		}]
	})(props);
}
function FiMaximize2(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "polyline",
				"attr": { "points": "15 3 21 3 21 9" },
				"child": []
			},
			{
				"tag": "polyline",
				"attr": { "points": "9 21 3 21 3 15" },
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "21",
					"y1": "3",
					"x2": "14",
					"y2": "10"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "3",
					"y1": "21",
					"x2": "10",
					"y2": "14"
				},
				"child": []
			}
		]
	})(props);
}
function FiMapPin(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" },
			"child": []
		}, {
			"tag": "circle",
			"attr": {
				"cx": "12",
				"cy": "10",
				"r": "3"
			},
			"child": []
		}]
	})(props);
}
function FiLinkedin(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "path",
				"attr": { "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" },
				"child": []
			},
			{
				"tag": "rect",
				"attr": {
					"x": "2",
					"y": "9",
					"width": "4",
					"height": "12"
				},
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "4",
					"cy": "4",
					"r": "2"
				},
				"child": []
			}
		]
	})(props);
}
function FiKey(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" },
			"child": []
		}]
	})(props);
}
function FiHelpCircle(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "circle",
				"attr": {
					"cx": "12",
					"cy": "12",
					"r": "10"
				},
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" },
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "12",
					"y1": "17",
					"x2": "12.01",
					"y2": "17"
				},
				"child": []
			}
		]
	})(props);
}
function FiHeart(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" },
			"child": []
		}]
	})(props);
}
function FiGithub(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
			"child": []
		}]
	})(props);
}
function FiGitPullRequest(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "circle",
				"attr": {
					"cx": "18",
					"cy": "18",
					"r": "3"
				},
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "6",
					"cy": "6",
					"r": "3"
				},
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M13 6h3a2 2 0 0 1 2 2v7" },
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "6",
					"y1": "9",
					"x2": "6",
					"y2": "21"
				},
				"child": []
			}
		]
	})(props);
}
function FiGitBranch(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "line",
				"attr": {
					"x1": "6",
					"y1": "3",
					"x2": "6",
					"y2": "15"
				},
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "18",
					"cy": "6",
					"r": "3"
				},
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "6",
					"cy": "18",
					"r": "3"
				},
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M18 9a9 9 0 0 1-9 9" },
				"child": []
			}
		]
	})(props);
}
function FiEye(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" },
			"child": []
		}, {
			"tag": "circle",
			"attr": {
				"cx": "12",
				"cy": "12",
				"r": "3"
			},
			"child": []
		}]
	})(props);
}
function FiEyeOff(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" },
			"child": []
		}, {
			"tag": "line",
			"attr": {
				"x1": "1",
				"y1": "1",
				"x2": "23",
				"y2": "23"
			},
			"child": []
		}]
	})(props);
}
function FiExternalLink(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "path",
				"attr": { "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" },
				"child": []
			},
			{
				"tag": "polyline",
				"attr": { "points": "15 3 21 3 21 9" },
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "10",
					"y1": "14",
					"x2": "21",
					"y2": "3"
				},
				"child": []
			}
		]
	})(props);
}
function FiDownload(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "path",
				"attr": { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" },
				"child": []
			},
			{
				"tag": "polyline",
				"attr": { "points": "7 10 12 15 17 10" },
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "12",
					"y1": "15",
					"x2": "12",
					"y2": "3"
				},
				"child": []
			}
		]
	})(props);
}
function FiCpu(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "rect",
				"attr": {
					"x": "4",
					"y": "4",
					"width": "16",
					"height": "16",
					"rx": "2",
					"ry": "2"
				},
				"child": []
			},
			{
				"tag": "rect",
				"attr": {
					"x": "9",
					"y": "9",
					"width": "6",
					"height": "6"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "9",
					"y1": "1",
					"x2": "9",
					"y2": "4"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "15",
					"y1": "1",
					"x2": "15",
					"y2": "4"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "9",
					"y1": "20",
					"x2": "9",
					"y2": "23"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "15",
					"y1": "20",
					"x2": "15",
					"y2": "23"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "20",
					"y1": "9",
					"x2": "23",
					"y2": "9"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "20",
					"y1": "14",
					"x2": "23",
					"y2": "14"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "1",
					"y1": "9",
					"x2": "4",
					"y2": "9"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "1",
					"y1": "14",
					"x2": "4",
					"y2": "14"
				},
				"child": []
			}
		]
	})(props);
}
function FiCopy(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "rect",
			"attr": {
				"x": "9",
				"y": "9",
				"width": "13",
				"height": "13",
				"rx": "2",
				"ry": "2"
			},
			"child": []
		}, {
			"tag": "path",
			"attr": { "d": "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" },
			"child": []
		}]
	})(props);
}
function FiCode(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polyline",
			"attr": { "points": "16 18 22 12 16 6" },
			"child": []
		}, {
			"tag": "polyline",
			"attr": { "points": "8 6 2 12 8 18" },
			"child": []
		}]
	})(props);
}
function FiClock(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "circle",
			"attr": {
				"cx": "12",
				"cy": "12",
				"r": "10"
			},
			"child": []
		}, {
			"tag": "polyline",
			"attr": { "points": "12 6 12 12 16 14" },
			"child": []
		}]
	})(props);
}
function FiClipboard(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" },
			"child": []
		}, {
			"tag": "rect",
			"attr": {
				"x": "8",
				"y": "2",
				"width": "8",
				"height": "4",
				"rx": "1",
				"ry": "1"
			},
			"child": []
		}]
	})(props);
}
function FiChevronRight(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polyline",
			"attr": { "points": "9 18 15 12 9 6" },
			"child": []
		}]
	})(props);
}
function FiChevronLeft(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polyline",
			"attr": { "points": "15 18 9 12 15 6" },
			"child": []
		}]
	})(props);
}
function FiChevronDown(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polyline",
			"attr": { "points": "6 9 12 15 18 9" },
			"child": []
		}]
	})(props);
}
function FiCheck(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polyline",
			"attr": { "points": "20 6 9 17 4 12" },
			"child": []
		}]
	})(props);
}
function FiCheckCircle(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14" },
			"child": []
		}, {
			"tag": "polyline",
			"attr": { "points": "22 4 12 14.01 9 11.01" },
			"child": []
		}]
	})(props);
}
function FiCalendar(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "rect",
				"attr": {
					"x": "3",
					"y": "4",
					"width": "18",
					"height": "18",
					"rx": "2",
					"ry": "2"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "16",
					"y1": "2",
					"x2": "16",
					"y2": "6"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "8",
					"y1": "2",
					"x2": "8",
					"y2": "6"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "3",
					"y1": "10",
					"x2": "21",
					"y2": "10"
				},
				"child": []
			}
		]
	})(props);
}
function FiBriefcase(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "rect",
			"attr": {
				"x": "2",
				"y": "7",
				"width": "20",
				"height": "14",
				"rx": "2",
				"ry": "2"
			},
			"child": []
		}, {
			"tag": "path",
			"attr": { "d": "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" },
			"child": []
		}]
	})(props);
}
function FiAward(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "circle",
			"attr": {
				"cx": "12",
				"cy": "8",
				"r": "7"
			},
			"child": []
		}, {
			"tag": "polyline",
			"attr": { "points": "8.21 13.89 7 23 12 20 17 23 15.79 13.88" },
			"child": []
		}]
	})(props);
}
function FiArrowRight(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "line",
			"attr": {
				"x1": "5",
				"y1": "12",
				"x2": "19",
				"y2": "12"
			},
			"child": []
		}, {
			"tag": "polyline",
			"attr": { "points": "12 5 19 12 12 19" },
			"child": []
		}]
	})(props);
}
function FiArrowLeft(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "line",
			"attr": {
				"x1": "19",
				"y1": "12",
				"x2": "5",
				"y2": "12"
			},
			"child": []
		}, {
			"tag": "polyline",
			"attr": { "points": "12 19 5 12 12 5" },
			"child": []
		}]
	})(props);
}
function FiAlertCircle(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "circle",
				"attr": {
					"cx": "12",
					"cy": "12",
					"r": "10"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "12",
					"y1": "8",
					"x2": "12",
					"y2": "12"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "12",
					"y1": "16",
					"x2": "12.01",
					"y2": "16"
				},
				"child": []
			}
		]
	})(props);
}
function FiActivity(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polyline",
			"attr": { "points": "22 12 18 12 15 21 9 3 6 12 2 12" },
			"child": []
		}]
	})(props);
}
//#endregion
export { FiMaximize2 as A, FiTarget as B, FiGitPullRequest as C, FiKey as D, FiHelpCircle as E, FiSearch as F, FiUsers as G, FiTrash2 as H, FiSend as I, FiX as K, FiShare2 as L, FiPlay as M, FiPrinter as N, FiLinkedin as O, FiRefreshCw as P, FiShield as R, FiGitBranch as S, FiHeart as T, FiTrendingUp as U, FiTerminal as V, FiUser as W, FiCpu as _, FiAward as a, FiEye as b, FiCheck as c, FiChevronLeft as d, FiChevronRight as f, FiCopy as g, FiCode as h, FiArrowRight as i, FiPause as j, FiMapPin as k, FiCheckCircle as l, FiClock as m, FiAlertCircle as n, FiBriefcase as o, FiClipboard as p, FiZap as q, FiArrowLeft as r, FiCalendar as s, FiActivity as t, FiChevronDown as u, FiDownload as v, FiGithub as w, FiEyeOff as x, FiExternalLink as y, FiStar as z };
