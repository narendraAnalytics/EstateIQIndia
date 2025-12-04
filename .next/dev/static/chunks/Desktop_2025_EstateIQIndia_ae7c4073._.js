(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/2025/EstateIQIndia/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppView",
    ()=>AppView
]);
var AppView = /*#__PURE__*/ function(AppView) {
    AppView["HEATMAP"] = "HEATMAP";
    AppView["STATE_DETAIL"] = "STATE_DETAIL";
    AppView["VALUATION"] = "VALUATION";
    return AppView;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/2025/EstateIQIndia/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/types.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Header = ({ currentView, setView })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center cursor-pointer group",
                        onClick: ()=>setView(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppView"].HEATMAP),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-emerald-500/20 to-yellow-500/10 p-2 rounded-lg mr-3 border border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "h-6 w-6 text-emerald-400 group-hover:text-yellow-400 transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold tracking-tight",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-500 to-emerald-600",
                                            children: "EstateIQ India"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-white font-medium",
                                        children: "AI-Powered Investment Heatmap"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setView(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppView"].HEATMAP),
                                className: `flex items-center text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ${currentView === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppView"].HEATMAP ? 'bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(217,119,6,0.6)] hover:scale-105' : 'text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-yellow-500/20 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Heatmap"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setView(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppView"].VALUATION),
                                className: `flex items-center text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ${currentView === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppView"].VALUATION ? 'bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(217,119,6,0.6)] hover:scale-105' : 'text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-yellow-500/20 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Price Predictor"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-yellow-500 transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/2025/EstateIQIndia/components/Header.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/react-simple-maps/dist/index.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$d3$2d$geo$2f$src$2f$centroid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoCentroid$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/d3-geo/src/centroid.js [app-client] (ecmascript) <export default as geoCentroid>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const IndiaMap = ({ onStateSelect })=>{
    _s();
    const [hoveredState, setHoveredState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // GeoJSON URL - complete India state-level map data
    const INDIA_GEOJSON_URL = '/data/india-states.geojson';
    // Union Territories list for color coding
    const UNION_TERRITORIES = [
        'Andaman and Nicobar',
        'Chandigarh',
        'Dadra and Nagar Haveli',
        'Daman and Diu',
        'Delhi',
        'Lakshadweep',
        'Puducherry',
        'Ladakh'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center w-full",
        style: {
            perspective: '1200px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-2xl aspect-[4/5] md:aspect-auto md:h-[700px] flex items-center justify-center backdrop-blur-xl rounded-3xl border border-emerald-500/40 transition-all duration-700 p-8 hover:scale-[1.02]",
                style: {
                    background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(5deg) rotateY(-2deg)',
                    boxShadow: `
            0 20px 60px rgba(16, 185, 129, 0.3),
            0 40px 100px rgba(217, 119, 6, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3)
          `
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-3xl pointer-events-none",
                        style: {
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 25%)',
                            transform: 'translateZ(10px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-3xl pointer-events-none",
                        style: {
                            background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.2) 100%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur-xl border border-emerald-500/40 p-4 rounded-xl shadow-[0_8px_32px_0_rgba(16,185,129,0.3)] z-20 pointer-events-none transition-all duration-300 min-w-[180px] ${hoveredState ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500",
                                    children: hoveredState || 'India'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            hoveredState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-emerald-400 text-xs font-semibold uppercase tracking-wider mt-1",
                                children: "Click to analyze"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                lineNumber: 60,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-xs mt-1",
                                children: "Hover over a region"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                lineNumber: 62,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 w-full h-full z-10 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposableMap"], {
                            projection: "geoMercator",
                            projectionConfig: {
                                scale: 1050,
                                center: [
                                    82,
                                    23
                                ]
                            },
                            width: 600,
                            height: 600,
                            style: {
                                width: '100%',
                                height: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geographies"], {
                                    geography: INDIA_GEOJSON_URL,
                                    children: ({ geographies })=>geographies.filter((geo)=>{
                                            const stateName = geo.properties.NAME_1 || geo.properties.name || 'Unknown';
                                            return !UNION_TERRITORIES.includes(stateName);
                                        }).map((geo)=>{
                                            const stateName = geo.properties.NAME_1 || geo.properties.name || 'Unknown';
                                            const isHovered = hoveredState === stateName;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geography"], {
                                                geography: geo,
                                                onMouseEnter: ()=>{
                                                    setHoveredState(stateName);
                                                },
                                                onMouseLeave: ()=>{
                                                    setHoveredState(null);
                                                },
                                                onClick: ()=>{
                                                    onStateSelect(stateName);
                                                },
                                                style: {
                                                    default: {
                                                        fill: isHovered ? 'url(#hoverGradient)' : 'rgba(16, 185, 129, 0.35)',
                                                        stroke: isHovered ? '#fbbf24' : 'rgba(52, 211, 153, 0.4)',
                                                        strokeWidth: isHovered ? 2.5 : 0.8,
                                                        outline: 'none',
                                                        cursor: 'pointer',
                                                        pointerEvents: 'all',
                                                        transition: 'all 0.3s ease',
                                                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                                        transformOrigin: 'center',
                                                        filter: isHovered ? 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))' : 'none'
                                                    },
                                                    hover: {
                                                        fill: 'url(#hoverGradient)',
                                                        stroke: '#fbbf24',
                                                        strokeWidth: 2.5,
                                                        outline: 'none',
                                                        cursor: 'pointer',
                                                        pointerEvents: 'all',
                                                        transition: 'all 0.3s ease',
                                                        transform: 'scale(1.05)',
                                                        transformOrigin: 'center',
                                                        filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))'
                                                    },
                                                    pressed: {
                                                        fill: 'rgba(16, 185, 129, 0.7)',
                                                        stroke: '#10b981',
                                                        strokeWidth: 2.5,
                                                        outline: 'none',
                                                        pointerEvents: 'all',
                                                        filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))'
                                                    }
                                                }
                                            }, geo.rsmKey, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                lineNumber: 94,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geographies"], {
                                    geography: INDIA_GEOJSON_URL,
                                    children: ({ geographies })=>geographies.filter((geo)=>{
                                            const stateName = geo.properties.NAME_1 || geo.properties.name || 'Unknown';
                                            return UNION_TERRITORIES.includes(stateName);
                                        }).map((geo)=>{
                                            const stateName = geo.properties.NAME_1 || geo.properties.name || 'Unknown';
                                            const isHovered = hoveredState === stateName;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geography"], {
                                                geography: geo,
                                                onMouseEnter: ()=>{
                                                    setHoveredState(stateName);
                                                },
                                                onMouseLeave: ()=>{
                                                    setHoveredState(null);
                                                },
                                                onClick: ()=>{
                                                    onStateSelect(stateName);
                                                },
                                                style: {
                                                    default: {
                                                        fill: isHovered ? 'url(#hoverGradient)' : 'rgba(251, 191, 36, 0.4)',
                                                        stroke: isHovered ? '#fbbf24' : 'rgba(251, 191, 36, 0.5)',
                                                        strokeWidth: isHovered ? 2.5 : 1.2,
                                                        outline: 'none',
                                                        cursor: 'pointer',
                                                        pointerEvents: 'all',
                                                        transition: 'all 0.3s ease',
                                                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                                        transformOrigin: 'center',
                                                        filter: isHovered ? 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))' : 'none'
                                                    },
                                                    hover: {
                                                        fill: 'url(#hoverGradient)',
                                                        stroke: '#fbbf24',
                                                        strokeWidth: 2.5,
                                                        outline: 'none',
                                                        cursor: 'pointer',
                                                        pointerEvents: 'all',
                                                        transition: 'all 0.3s ease',
                                                        transform: 'scale(1.05)',
                                                        transformOrigin: 'center',
                                                        filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))'
                                                    },
                                                    pressed: {
                                                        fill: 'rgba(251, 191, 36, 0.7)',
                                                        stroke: '#fbbf24',
                                                        strokeWidth: 2.5,
                                                        outline: 'none',
                                                        pointerEvents: 'all',
                                                        filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.8))'
                                                    }
                                                }
                                            }, geo.rsmKey, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                lineNumber: 159,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geographies"], {
                                    geography: INDIA_GEOJSON_URL,
                                    children: ({ geographies })=>geographies.map((geo)=>{
                                            const stateName = geo.properties.NAME_1 || geo.properties.name || 'Unknown';
                                            const centroid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$d3$2d$geo$2f$src$2f$centroid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoCentroid$3e$__["geoCentroid"])(geo);
                                            const isUT = UNION_TERRITORIES.includes(stateName);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                                coordinates: centroid,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    r: isUT ? 6.5 : 5,
                                                    fill: isUT ? '#fbbf24' : '#10b981',
                                                    stroke: "#fff",
                                                    strokeWidth: isUT ? 2 : 1.5,
                                                    opacity: 0.95,
                                                    style: {
                                                        pointerEvents: 'none',
                                                        filter: isUT ? 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.7))' : 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, `marker-${geo.rsmKey}`, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                lineNumber: 220,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "hoverGradient",
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "100%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    style: {
                                                        stopColor: '#10b981',
                                                        stopOpacity: 0.7
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "50%",
                                                    style: {
                                                        stopColor: '#fbbf24',
                                                        stopOpacity: 0.6
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    style: {
                                                        stopColor: '#f59e0b',
                                                        stopOpacity: 0.7
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                            id: "emeraldGlow",
                                            cx: "50%",
                                            cy: "50%",
                                            r: "50%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    style: {
                                                        stopColor: '#34d399',
                                                        stopOpacity: 0.5
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    style: {
                                                        stopColor: '#059669',
                                                        stopOpacity: 0.3
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                            id: "stateGlow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                    stdDeviation: "3",
                                                    result: "coloredBlur"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                            in: "coloredBlur"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                            in: "SourceGraphic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 text-xs text-white text-center max-w-md bg-slate-900/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-emerald-500/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-emerald-400",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Interactive stylised map. Boundaries are approximate representation for investment zones."
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center justify-center gap-6 text-xs text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-emerald-500 border border-white"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "States (28)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-yellow-500 border border-white"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Union Territories (8)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(IndiaMap, "t2G53IflysyuqmTLd6PUXcjDM8g=");
_c = IndiaMap;
const __TURBOPACK__default__export__ = IndiaMap;
var _c;
__turbopack_context__.k.register(_c, "IndiaMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
'use client';
;
;
const StateDetail = ({ analysis, isLoading, onBack })=>{
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-96 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-16 w-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 h-16 w-16 border-4 border-yellow-500/30 rounded-full animate-ping"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500 text-lg font-medium animate-pulse",
                    children: "Gathering real-time market intelligence..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400 text-sm mt-2",
                    children: "Connecting to Gemini Pro & Google Search"
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // SVG Circular Progress Chart for Investment Score
    const CircularProgress = ({ score })=>{
        const radius = 54;
        const circumference = 2 * Math.PI * radius;
        const progress = score / 100 * circumference;
        const remaining = circumference - progress;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-32 h-32 animate-scaleIn",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-32 h-32 transform -rotate-90",
                    viewBox: "0 0 120 120",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "60",
                            cy: "60",
                            r: radius,
                            stroke: "rgba(71, 85, 105, 0.3)",
                            strokeWidth: "8",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "60",
                            cy: "60",
                            r: radius,
                            stroke: "url(#scoreGradient)",
                            strokeWidth: "8",
                            fill: "none",
                            strokeDasharray: `${progress} ${remaining}`,
                            strokeLinecap: "round",
                            className: "transition-all duration-1000 ease-out",
                            style: {
                                filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))'
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "scoreGradient",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#10b981"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "#fbbf24"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#f59e0b"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-yellow-500",
                            children: score
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-slate-400 font-medium",
                            children: "/ 100"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fadeInUp",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                className: "flex items-center text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-yellow-500 transition-all duration-300 mb-2 group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-4 h-4 mr-2 group-hover:translate-x-[-4px] transition-transform"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Back to Map"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            analysis.executiveSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 bg-gradient-to-br from-emerald-900/30 via-slate-900/40 to-yellow-900/30 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] animate-fadeInUp",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold mb-6 flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-500 to-emerald-600",
                            children: "Executive Summary"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-5 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3 flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Overview"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white leading-relaxed text-sm",
                                        children: analysis.executiveSummary.overview
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/60 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-5 hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-3 flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Political Factors"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white leading-relaxed text-sm",
                                        children: analysis.executiveSummary.politicalFactors
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-5 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3 flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Economic Factors"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white leading-relaxed text-sm",
                                        children: analysis.executiveSummary.economicFactors
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/60 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-5 hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-3 flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Market Outlook"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white leading-relaxed text-sm",
                                        children: analysis.executiveSummary.marketOutlook
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 shadow-[0_8px_32px_0_rgba(16,185,129,0.15)] hover:shadow-[0_12px_48px_0_rgba(217,119,6,0.25)] transition-all duration-500 hover:scale-[1.01] animate-scaleIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-bold mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-500 to-emerald-600",
                                                    children: analysis.stateName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white leading-relaxed",
                                                children: analysis.summary
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircularProgress, {
                                        score: analysis.investmentScore
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-3 flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "w-5 h-5 mr-2 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500",
                                                children: "Market Trends"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: analysis.marketTrends.map((trend, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-full text-sm text-white hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:scale-105 transition-all duration-300 cursor-default shadow-lg",
                                                style: {
                                                    animationDelay: `${i * 100}ms`
                                                },
                                                children: trend
                                            }, i, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/20 shadow-[0_8px_32px_0_rgba(217,119,6,0.15)] hover:shadow-[0_12px_48px_0_rgba(16,185,129,0.25)] transition-all duration-500 hover:scale-[1.01] animate-scaleIn animation-delay-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold mb-4 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                        className: "w-5 h-5 mr-2 text-yellow-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400",
                                        children: "Infrastructure"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 174,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3",
                                children: analysis.infrastructureProjects.map((proj, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start group hover:translate-x-1 transition-transform duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-4 h-4 text-yellow-500 mr-2 mt-1 shrink-0 group-hover:text-emerald-400 transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-white",
                                                children: proj
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            analysis.fastestGrowingCities && analysis.fastestGrowingCities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 bg-gradient-to-br from-emerald-900/30 via-yellow-900/10 to-slate-900/40 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] animate-fadeInUp animation-delay-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-6 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                className: "w-5 h-5 mr-2 text-emerald-400 animate-float"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500",
                                children: "Fastest Growing Cities"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: analysis.fastestGrowingCities.map((city, idx)=>{
                            const growthPercent = parseFloat(city.growthRate.replace(/[^0-9.]/g, '')) || 0;
                            const maxGrowth = 40;
                            const barWidth = Math.min(growthPercent / maxGrowth * 100, 100);
                            // Ranking colors and icons
                            const rankings = [
                                {
                                    icon: '🏆',
                                    label: '1st Place',
                                    borderColor: 'border-yellow-500/50',
                                    shadowColor: 'shadow-[0_8px_32px_0_rgba(234,179,8,0.3)]',
                                    hoverShadow: 'hover:shadow-[0_12px_48px_0_rgba(234,179,8,0.5)]',
                                    badgeBg: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
                                    scale: 'md:scale-105'
                                },
                                {
                                    icon: '🥈',
                                    label: '2nd Place',
                                    borderColor: 'border-slate-400/40',
                                    shadowColor: 'shadow-[0_8px_32px_0_rgba(148,163,184,0.2)]',
                                    hoverShadow: 'hover:shadow-[0_12px_48px_0_rgba(148,163,184,0.4)]',
                                    badgeBg: 'bg-gradient-to-br from-slate-400 to-slate-500',
                                    scale: ''
                                },
                                {
                                    icon: '🥉',
                                    label: '3rd Place',
                                    borderColor: 'border-orange-600/40',
                                    shadowColor: 'shadow-[0_8px_32px_0_rgba(234,88,12,0.2)]',
                                    hoverShadow: 'hover:shadow-[0_12px_48px_0_rgba(234,88,12,0.4)]',
                                    badgeBg: 'bg-gradient-to-br from-orange-600 to-orange-700',
                                    scale: ''
                                }
                            ];
                            const rank = rankings[idx] || rankings[2];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative bg-slate-950/60 backdrop-blur-xl border-2 ${rank.borderColor} rounded-2xl p-6 ${rank.shadowColor} ${rank.hoverShadow} hover:scale-105 hover:-translate-y-2 transition-all duration-500 group animate-scaleIn ${rank.scale}`,
                                style: {
                                    animationDelay: `${idx * 150}ms`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-4 -right-4 w-16 h-16 flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute inset-0 ${rank.badgeBg} rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300`
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 245,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 flex flex-col items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl",
                                                    children: rank.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 246,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 244,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-3 -left-3 w-12 h-12 flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-br from-emerald-500 to-yellow-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 253,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10 text-white font-bold text-xl",
                                                children: [
                                                    "#",
                                                    idx + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 254,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 252,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-yellow-500 transition-all duration-300 mb-2",
                                                children: city.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 259,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-400 font-medium uppercase tracking-wider",
                                                children: rank.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 262,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 258,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500",
                                                        children: city.growthRate
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-400 ml-2",
                                                        children: "growth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 267,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-3 bg-slate-800/60 rounded-full overflow-hidden border border-slate-700/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-yellow-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.6)] transition-all duration-1000 ease-out",
                                                        style: {
                                                            width: `${barWidth}%`
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-gradient-to-t from-transparent to-white/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-1/2 -translate-y-1/2 w-1 h-5 bg-white shadow-lg transition-all duration-1000",
                                                        style: {
                                                            left: `${barWidth}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 275,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 266,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-4 border-t border-slate-700/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-300 leading-relaxed",
                                            children: city.reason
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                            lineNumber: 292,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 291,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-tl from-emerald-500 to-transparent rounded-tl-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                            lineNumber: 299,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 298,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, idx, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 238,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            analysis.latestNews && analysis.latestNews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 mb-8 bg-gradient-to-br from-yellow-900/30 via-slate-900/40 to-emerald-900/30 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(217,119,6,0.2)] animate-fadeInUp animation-delay-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold mb-6 flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-emerald-400 to-yellow-600",
                            children: "📰 Latest Real Estate News"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: analysis.latestNews.map((news, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/60 backdrop-blur-sm border-l-4 border-yellow-500/50 rounded-lg p-5 hover:bg-slate-900/70 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 group animate-scaleIn",
                                style: {
                                    animationDelay: `${idx * 100}ms`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-emerald-400 transition-all duration-300 flex-1",
                                                children: news.headline
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-yellow-400 font-medium whitespace-nowrap",
                                                        children: news.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-xs font-semibold whitespace-nowrap",
                                                        children: news.source
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 328,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 text-sm leading-relaxed",
                                        children: news.summary
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 335,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, idx, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                lineNumber: 319,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                lineNumber: 310,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold mt-8 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-500 to-emerald-600",
                    children: "Top Investment Hotspots"
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20",
                    children: analysis.topCities.map((city, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative mx-auto w-full max-w-xs aspect-square group animate-scaleIn ${idx % 2 === 1 ? 'md:mt-12' : ''}`,
                            style: {
                                animationDelay: `${idx * 150}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 transition-all duration-500 hover:scale-110 hover:rotate-2",
                                    style: {
                                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-br from-emerald-500 via-yellow-500 to-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-[3px] bg-slate-900/95 backdrop-blur-xl",
                                            style: {
                                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex flex-col items-center justify-center p-8 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm ${city.tier === 'Tier 1' ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50 shadow-lg shadow-purple-500/30' : city.tier === 'Tier 2' ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50 shadow-lg shadow-blue-500/30' : 'bg-slate-700/50 text-slate-300 border border-slate-600/50'}`,
                                                            children: city.tier
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-yellow-500 transition-all duration-300",
                                                        children: city.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500 mb-1",
                                                                children: city.avgPriceSqFt
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400",
                                                                children: "per sq.ft average"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-300 mb-4 line-clamp-3 leading-relaxed px-2",
                                                        children: city.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center text-xs font-medium text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-2.5 w-2.5 rounded-full mr-2 ${city.growthPotential === 'High' ? 'bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/70' : 'bg-yellow-500 animate-pulse shadow-lg shadow-yellow-500/70'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            city.growthPotential,
                                                            " Growth"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                                lineNumber: 380,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                            lineNumber: 373,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-br from-emerald-500/30 via-yellow-500/30 to-emerald-600/30",
                                            style: {
                                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full border-t-2 border-l-2 border-emerald-400 transform rotate-45 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                        lineNumber: 431,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, idx, true, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                    lineNumber: 351,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StateDetail;
const __TURBOPACK__default__export__ = StateDetail;
var _c;
__turbopack_context__.k.register(_c, "StateDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/2025/EstateIQIndia/services/geminiService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPropertyValuation",
    ()=>getPropertyValuation,
    "getStateAnalysis",
    ()=>getStateAnalysis
]);
const getStateAnalysis = async (stateName)=>{
    try {
        const response = await fetch('/api/state-analysis', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                stateName
            })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to fetch state analysis');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("State Analysis Error:", error);
        throw error;
    }
};
const getPropertyValuation = async (location, propertyType, details, userLat, userLng)=>{
    try {
        const response = await fetch('/api/property-valuation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location,
                propertyType,
                details,
                userLat,
                userLng
            })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to fetch property valuation');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Valuation Error:", error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation2$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/navigation-2.js [app-client] (ecmascript) <export default as Navigation2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
'use client';
;
;
const MapVisualization = ({ groundingChunks })=>{
    const mapChunks = groundingChunks.filter((chunk)=>chunk.maps);
    if (mapChunks.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 pt-6 border-t border-slate-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-lg font-semibold text-white mb-4 flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                        className: "w-5 h-5 text-blue-400 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Nearby Places from Google Maps"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: mapChunks.map((chunk, idx)=>{
                    if (!chunk.maps) return null;
                    const place = chunk.maps;
                    const reviews = place?.placeAnswerSources?.[0]?.reviewSnippets || [];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-950 border border-slate-800 rounded-xl p-4 hover:border-blue-500/50 transition-all group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: place?.uri || '#',
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-sm font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2",
                                            children: place?.title || 'Location'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                            lineNumber: 38,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation2$3e$__["Navigation2"], {
                                        className: "w-4 h-4 text-blue-400 ml-2 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            reviews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 pt-3 border-t border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-3 h-3 text-yellow-400 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                                lineNumber: 53,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-400",
                                                children: "User Review"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-300 line-clamp-3",
                                        children: reviews[0]?.content
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                        lineNumber: 56,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: place?.uri || '#',
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "w-3 h-3 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "View on Maps"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MapVisualization;
const __TURBOPACK__default__export__ = MapVisualization;
var _c;
__turbopack_context__.k.register(_c, "MapVisualization");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bus$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/bus.js [app-client] (ecmascript) <export default as Bus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trees$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trees$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/trees.js [app-client] (ecmascript) <export default as Trees>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const PropertyLocationMap = ({ center, amenities })=>{
    _s();
    const [selectedMarker, setSelectedMarker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [markers, setMarkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PropertyLocationMap.useEffect": ()=>{
            // Generate markers for amenities with simulated positions around the center
            // In a real implementation, you would geocode the amenity addresses
            const generatedMarkers = [];
            let idCounter = 0;
            const addMarkersForCategory = {
                "PropertyLocationMap.useEffect.addMarkersForCategory": (items, category, offsetMultiplier)=>{
                    if (!items || items.length === 0) return;
                    items.forEach({
                        "PropertyLocationMap.useEffect.addMarkersForCategory": (item, index)=>{
                            // Generate positions in a circle around the center
                            const angle = index / items.length * 2 * Math.PI;
                            const radius = 0.01 * offsetMultiplier; // ~1km radius
                            generatedMarkers.push({
                                id: `${category}-${idCounter++}`,
                                position: {
                                    lat: center.lat + radius * Math.cos(angle),
                                    lng: center.lng + radius * Math.sin(angle)
                                },
                                title: item,
                                category
                            });
                        }
                    }["PropertyLocationMap.useEffect.addMarkersForCategory"]);
                }
            }["PropertyLocationMap.useEffect.addMarkersForCategory"];
            addMarkersForCategory(amenities?.schools, 'school', 1);
            addMarkersForCategory(amenities?.hospitals, 'hospital', 1.2);
            addMarkersForCategory(amenities?.transport, 'transport', 0.8);
            addMarkersForCategory(amenities?.shopping, 'shopping', 1.5);
            addMarkersForCategory(amenities?.parks, 'park', 1.3);
            setMarkers(generatedMarkers);
        }
    }["PropertyLocationMap.useEffect"], [
        center,
        amenities
    ]);
    const getCategoryColor = (category)=>{
        switch(category){
            case 'school':
                return '#3b82f6'; // blue
            case 'hospital':
                return '#ef4444'; // red
            case 'transport':
                return '#eab308'; // yellow
            case 'shopping':
                return '#a855f7'; // purple
            case 'park':
                return '#10b981'; // emerald
            default:
                return '#64748b'; // slate
        }
    };
    const getCategoryIcon = (category)=>{
        const iconProps = {
            className: 'w-4 h-4'
        };
        switch(category){
            case 'school':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                    ...iconProps
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                    lineNumber: 90,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'hospital':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    ...iconProps
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                    lineNumber: 92,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'transport':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bus$3e$__["Bus"], {
                    ...iconProps
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                    lineNumber: 94,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'shopping':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                    ...iconProps
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                    lineNumber: 96,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'park':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trees$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trees$3e$__["Trees"], {
                    ...iconProps
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                    lineNumber: 98,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    ...iconProps
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                    lineNumber: 100,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    const getCategoryLabel = (category)=>{
        switch(category){
            case 'school':
                return 'Education';
            case 'hospital':
                return 'Healthcare';
            case 'transport':
                return 'Transport';
            case 'shopping':
                return 'Shopping';
            case 'park':
                return 'Recreation';
            default:
                return 'Location';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[600px] rounded-xl overflow-hidden border border-slate-700 shadow-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
            defaultCenter: center,
            defaultZoom: 13,
            mapId: "estateiq_map",
            gestureHandling: "greedy",
            disableDefaultUI: false,
            style: {
                width: '100%',
                height: '100%'
            },
            styles: [
                {
                    elementType: 'geometry',
                    stylers: [
                        {
                            color: '#1e293b'
                        }
                    ]
                },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [
                        {
                            color: '#0f172a'
                        }
                    ]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [
                        {
                            color: '#94a3b8'
                        }
                    ]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [
                        {
                            color: '#334155'
                        }
                    ]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [
                        {
                            color: '#475569'
                        }
                    ]
                }
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                    position: center,
                    onClick: ()=>setSelectedMarker('property'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pin"], {
                        background: "#10b981",
                        borderColor: "#064e3b",
                        glyphColor: "#ffffff",
                        scale: 1.4
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                selectedMarker === 'property' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoWindow"], {
                    position: center,
                    onCloseClick: ()=>setSelectedMarker(null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-slate-900 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-white mb-1",
                                children: "Property Location"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-300",
                                children: "Target investment area"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                markers.map((marker)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                                position: marker.position,
                                onClick: ()=>setSelectedMarker(marker.id),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pin"], {
                                    background: getCategoryColor(marker.category),
                                    borderColor: "#1e293b",
                                    glyphColor: "#ffffff",
                                    scale: 1
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            selectedMarker === marker.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoWindow"], {
                                position: marker.position,
                                onCloseClick: ()=>setSelectedMarker(null),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-slate-900 rounded-lg min-w-[200px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-1.5 rounded-lg",
                                                    style: {
                                                        backgroundColor: `${getCategoryColor(marker.category)}20`
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: getCategoryColor(marker.category)
                                                        },
                                                        children: getCategoryIcon(marker.category)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold uppercase",
                                                    style: {
                                                        color: getCategoryColor(marker.category)
                                                    },
                                                    children: getCategoryLabel(marker.category)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-white text-sm mb-1",
                                            children: marker.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        marker.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-300 mt-2",
                                            children: marker.details
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                            lineNumber: 219,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                    lineNumber: 200,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, marker.id, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PropertyLocationMap, "G8YbL/7fTzoRDTpu1JkYjn+qRHE=");
_c = PropertyLocationMap;
const __TURBOPACK__default__export__ = PropertyLocationMap;
var _c;
__turbopack_context__.k.register(_c, "PropertyLocationMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/crosshair.js [app-client] (ecmascript) <export default as Crosshair>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const LocationSelectorMap = ({ onLocationSelect, initialCenter = {
    lat: 20.5937,
    lng: 78.9629
} // Center of India
 })=>{
    _s();
    const [markerPosition, setMarkerPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGeocoding, setIsGeocoding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reverse geocode to get address from coordinates
    const reverseGeocode = async (lat, lng)=>{
        setIsGeocoding(true);
        try {
            const geocoder = new google.maps.Geocoder();
            const response = await geocoder.geocode({
                location: {
                    lat,
                    lng
                }
            });
            if (response.results && response.results.length > 0) {
                // Get the most relevant address (usually the first result)
                const result = response.results[0];
                // Try to find locality, sublocality, or administrative area
                let locationName = '';
                // Look for locality (city/town)
                const locality = result.address_components.find((comp)=>comp.types.includes('locality'));
                // Look for sublocality (neighborhood)
                const sublocality = result.address_components.find((comp)=>comp.types.includes('sublocality') || comp.types.includes('sublocality_level_1'));
                // Look for administrative area (state)
                const adminArea = result.address_components.find((comp)=>comp.types.includes('administrative_area_level_1'));
                if (sublocality && locality) {
                    locationName = `${sublocality.long_name}, ${locality.long_name}`;
                } else if (locality) {
                    locationName = locality.long_name;
                } else if (sublocality) {
                    locationName = sublocality.long_name;
                } else if (adminArea) {
                    locationName = adminArea.long_name;
                } else {
                    locationName = result.formatted_address;
                }
                onLocationSelect(locationName, lat, lng);
            }
        } catch (error) {
            console.error('Reverse geocoding failed:', error);
            // Fallback to coordinates
            onLocationSelect(`${lat.toFixed(4)}, ${lng.toFixed(4)}`, lat, lng);
        } finally{
            setIsGeocoding(false);
        }
    };
    const handleMapClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocationSelectorMap.useCallback[handleMapClick]": (event)=>{
            if (event.detail?.latLng) {
                const lat = event.detail.latLng.lat;
                const lng = event.detail.latLng.lng;
                setMarkerPosition({
                    lat,
                    lng
                });
                reverseGeocode(lat, lng);
            }
        }
    }["LocationSelectorMap.useCallback[handleMapClick]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm font-medium text-slate-300 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-4 h-4 mr-2 text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Or Select Location on Map"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isGeocoding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-emerald-400 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 w-3 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Getting location..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[350px] rounded-xl overflow-hidden border border-slate-700 shadow-lg group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                        defaultCenter: initialCenter,
                        defaultZoom: 5,
                        mapId: "location_selector_map",
                        gestureHandling: "greedy",
                        disableDefaultUI: false,
                        onClick: handleMapClick,
                        style: {
                            width: '100%',
                            height: '100%'
                        },
                        styles: [
                            {
                                elementType: 'geometry',
                                stylers: [
                                    {
                                        color: '#1e293b'
                                    }
                                ]
                            },
                            {
                                elementType: 'labels.text.stroke',
                                stylers: [
                                    {
                                        color: '#0f172a'
                                    }
                                ]
                            },
                            {
                                elementType: 'labels.text.fill',
                                stylers: [
                                    {
                                        color: '#94a3b8'
                                    }
                                ]
                            },
                            {
                                featureType: 'water',
                                elementType: 'geometry',
                                stylers: [
                                    {
                                        color: '#334155'
                                    }
                                ]
                            },
                            {
                                featureType: 'road',
                                elementType: 'geometry',
                                stylers: [
                                    {
                                        color: '#475569'
                                    }
                                ]
                            }
                        ],
                        children: markerPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                            position: markerPosition,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pin"], {
                                background: "#10b981",
                                borderColor: "#064e3b",
                                glyphColor: "#ffffff",
                                scale: 1.3
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !markerPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-900/90 backdrop-blur-sm border border-emerald-500/30 rounded-xl px-6 py-4 shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                                        className: "w-6 h-6 text-emerald-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-200 font-medium",
                                        children: "Click anywhere on the map to select location"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-slate-400 italic",
                children: "Click on the map to automatically fill the location, or type manually above"
            }, void 0, false, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LocationSelectorMap, "b0jrNwCaKqr2lnjdD7f5vJScOAI=");
_c = LocationSelectorMap;
const __TURBOPACK__default__export__ = LocationSelectorMap;
var _c;
__turbopack_context__.k.register(_c, "LocationSelectorMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bus$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/bus.js [app-client] (ecmascript) <export default as Bus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trees$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trees$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/trees.js [app-client] (ecmascript) <export default as Trees>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/services/geminiService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$MapVisualization$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/components/MapVisualization.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$PropertyLocationMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/components/PropertyLocationMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$LocationSelectorMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/components/LocationSelectorMap.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const InvestmentAnalyzer = ()=>{
    _s();
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [propertyType, setPropertyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Apartment');
    const [details, setDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mapCenter, setMapCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleLocationSelect = (locationName, lat, lng)=>{
        setLocation(locationName);
        setMapCenter({
            lat,
            lng
        });
    };
    const handleAnalyze = async (e)=>{
        e.preventDefault();
        if (!location) return;
        setLoading(true);
        setResult(null);
        try {
            // Get current location if possible, but don't block
            let lat, lng;
            try {
                if (navigator.geolocation) {
                    const pos = await new Promise((resolve, reject)=>{
                        navigator.geolocation.getCurrentPosition(resolve, reject, {
                            timeout: 5000
                        });
                    });
                    lat = pos.coords.latitude;
                    lng = pos.coords.longitude;
                }
            } catch (err) {
                console.warn("Geolocation failed or denied, proceeding without it.");
            }
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPropertyValuation"])(location, propertyType, details, lat, lng);
            setResult(data);
            // Set map center from geolocation or default to a central location in India
            if (lat && lng) {
                setMapCenter({
                    lat,
                    lng
                });
            } else {
                // Default to approximate center for common Indian cities if geolocation fails
                // This is a fallback - in production you'd want to geocode the location string
                setMapCenter({
                    lat: 12.9716,
                    lng: 77.5946
                }); // Default to Bangalore
            }
        } catch (err) {
            console.error(err);
            alert("Failed to analyze. Please check your API Key or try again.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold text-white",
                        children: "Smart Price Predictor"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 max-w-2xl mx-auto",
                        children: "Leverage Gemini AI with live Google Maps data to estimate property value based on real-time surroundings, amenities, and market trends."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleAnalyze,
                className: "bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-medium text-slate-300",
                                        children: "Target Location"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "absolute left-3 top-3 h-5 w-5 text-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                value: location,
                                                onChange: (e)=>setLocation(e.target.value),
                                                placeholder: "e.g., Whitefield, Bangalore",
                                                className: "w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-medium text-slate-300",
                                        children: "Property Type"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: propertyType,
                                        onChange: (e)=>setPropertyType(e.target.value),
                                        className: "w-full bg-slate-950 border border-slate-700 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-emerald-500 outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Apartment"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Villa / Independent House"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Plot / Land"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Commercial Office"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Retail Shop"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$LocationSelectorMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onLocationSelect: handleLocationSelect,
                            initialCenter: mapCenter || undefined
                        }, void 0, false, {
                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-medium text-slate-300",
                                children: "Specific Details (Optional)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: details,
                                onChange: (e)=>setDetails(e.target.value),
                                placeholder: "e.g., 2000 sqft, 3 BHK, Gated community, Park view, 5 years old",
                                className: "w-full bg-slate-950 border border-slate-700 rounded-xl py-3 px-4 text-white h-24 resize-none focus:ring-2 focus:ring-emerald-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-4 rounded-xl transition-all transform active:scale-95 flex justify-center items-center shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Analyzing Market & Surroundings..."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "w-5 h-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Predict Price & Analyze ROI"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8 animate-in slide-in-from-bottom-4 fade-in duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-slate-900/40 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(16,185,129,0.2)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-emerald-500/20 p-3 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                            className: "w-7 h-7 text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-white",
                                                children: "Price Estimation"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400",
                                                children: "Market value analysis and comparison"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/60 border-2 border-emerald-500/30 rounded-xl p-6 mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-emerald-400 uppercase tracking-wider mb-2",
                                            children: "Estimated Market Value"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500 mb-2",
                                            children: result.estimatedPriceRange
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center space-x-2 mt-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `px-4 py-2 rounded-full ${result.confidenceScore === 'High' ? 'bg-emerald-500/20 border border-emerald-500/50' : result.confidenceScore === 'Low' ? 'bg-red-500/20 border border-red-500/50' : 'bg-yellow-500/20 border border-yellow-500/50'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-sm font-semibold ${result.confidenceScore === 'High' ? 'text-emerald-400' : result.confidenceScore === 'Low' ? 'text-red-400' : 'text-yellow-400'}`,
                                                    children: [
                                                        result.confidenceScore,
                                                        " Confidence"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    result.categorizedAmenities && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-purple-500/20 p-3 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-7 h-7 text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-white",
                                                children: "Location Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400",
                                                children: "Nearby amenities and facilities"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: [
                                    result.categorizedAmenities.schools && result.categorizedAmenities.schools.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-950/60 border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/40 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-blue-500/20 p-2 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                            className: "w-5 h-5 text-blue-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold text-white",
                                                        children: "Education"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 200,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: result.categorizedAmenities.schools.slice(0, 4).map((school, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-slate-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-400 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            school
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 206,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 199,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    result.categorizedAmenities.hospitals && result.categorizedAmenities.hospitals.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-950/60 border border-red-500/20 rounded-xl p-5 hover:border-red-500/40 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-red-500/20 p-2 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                            className: "w-5 h-5 text-red-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold text-white",
                                                        children: "Healthcare"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 220,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: result.categorizedAmenities.hospitals.slice(0, 4).map((hospital, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-slate-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-400 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            hospital
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 226,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 219,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    result.categorizedAmenities.transport && result.categorizedAmenities.transport.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-950/60 border border-yellow-500/20 rounded-xl p-5 hover:border-yellow-500/40 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-yellow-500/20 p-2 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bus$3e$__["Bus"], {
                                                            className: "w-5 h-5 text-yellow-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold text-white",
                                                        children: "Transport"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: result.categorizedAmenities.transport.slice(0, 4).map((trans, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-slate-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-400 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            trans
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 246,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 239,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    result.categorizedAmenities.shopping && result.categorizedAmenities.shopping.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-950/60 border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/40 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-purple-500/20 p-2 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                            className: "w-5 h-5 text-purple-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold text-white",
                                                        children: "Shopping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 260,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: result.categorizedAmenities.shopping.slice(0, 4).map((shop, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-slate-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-purple-400 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            shop
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 266,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 259,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    result.categorizedAmenities.parks && result.categorizedAmenities.parks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-950/60 border border-emerald-500/20 rounded-xl p-5 hover:border-emerald-500/40 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-emerald-500/20 p-2 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trees$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trees$3e$__["Trees"], {
                                                            className: "w-5 h-5 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold text-white",
                                                        children: "Recreation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 280,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: result.categorizedAmenities.parks.slice(0, 4).map((park, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-slate-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-emerald-400 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            park
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 286,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 279,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            mapCenter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 pt-6 border-t border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-emerald-500/20 p-3 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-7 h-7 text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 302,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Interactive Location Map"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-400",
                                                        children: "Explore property location and nearby amenities"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 305,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 301,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$PropertyLocationMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        center: mapCenter,
                                        amenities: result.categorizedAmenities
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 310,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 300,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/40 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-500/20 p-3 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                            className: "w-7 h-7 text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-white",
                                                children: "Investment Potential"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400",
                                                children: "Growth prospects and risk analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    result.growthFactors && result.growthFactors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-950/60 border border-emerald-500/30 rounded-xl p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-4 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-emerald-500/20 p-2 rounded-lg mr-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-5 h-5 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Growth Factors"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3",
                                                children: result.growthFactors.map((factor, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start bg-emerald-500/5 rounded-lg p-3 hover:bg-emerald-500/10 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-emerald-400 mr-3 mt-0.5",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-slate-200",
                                                                children: factor
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 334,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    result.riskFactors && result.riskFactors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-950/60 border border-yellow-500/30 rounded-xl p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-4 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-yellow-500/20 p-2 rounded-lg mr-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                            className: "w-5 h-5 text-yellow-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Risk Factors"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 355,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3",
                                                children: result.riskFactors.map((risk, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start bg-yellow-500/5 rounded-lg p-3 hover:bg-yellow-500/10 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-400 mr-3 mt-0.5",
                                                                children: "⚠"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-slate-200",
                                                                children: risk
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 361,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 354,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400",
                                children: "Comprehensive Analysis"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            (()=>{
                                // Parse the analysis text into numbered sections (1., 2., 3., 4.)
                                const text = result.locationAnalysis;
                                const sections = {};
                                // Extract Executive Summary (if present before numbered sections)
                                const execMatch = text.match(/Executive Summary([\s\S]*?)(?=\n1\.|$)/i);
                                if (execMatch) {
                                    sections.executive = execMatch[1].trim();
                                    // Extract comparison table from executive summary
                                    const execComparisonMatch = sections.executive.match(/Comparison with Nearby Areas[:\s]*\|([\s\S]*?)(?=\n\n|\n[A-Z]|$)/i);
                                    if (execComparisonMatch) {
                                        const tableText = execComparisonMatch[0];
                                        const rows = tableText.split('\n').filter((line)=>line.includes('|') && !line.includes('---'));
                                        sections.execComparison = rows.slice(1).map((row)=>{
                                            const cells = row.split('|').map((c)=>c.trim()).filter((c)=>c);
                                            return {
                                                area: cells[0] || '',
                                                price: cells[1] || '',
                                                demographic: cells[2] || ''
                                            };
                                        }).filter((row)=>row.area && row.area !== 'Area');
                                        // Remove comparison table from executive text
                                        sections.executive = sections.executive.replace(execComparisonMatch[0], '').trim();
                                    }
                                }
                                // Extract Section 1: Price Estimation
                                const section1Match = text.match(/1\.\s*Price Estimation([\s\S]*?)(?=\n2\.|$)/i);
                                if (section1Match) {
                                    sections.priceEstimation = section1Match[1].trim();
                                    // Parse price details
                                    const currentPrice = sections.priceEstimation.match(/Current Market Price[:\s]*([^\n]+)/i);
                                    sections.currentPrice = currentPrice ? currentPrice[1].trim() : null;
                                    const pricePerSqFt = sections.priceEstimation.match(/Price per Sq\.?ft[:\s]*([^\n]+)/i);
                                    sections.pricePerSqFt = pricePerSqFt ? pricePerSqFt[1].trim() : null;
                                    const ticketSize = sections.priceEstimation.match(/Total Ticket Size[:\s]*([^\n]+)/i);
                                    sections.ticketSize = ticketSize ? ticketSize[1].trim() : null;
                                    // Extract comparison table
                                    const comparisonMatch = sections.priceEstimation.match(/Comparison with Nearby Areas[:\s]*\|([\s\S]*?)(?=\n\n|\n[A-Z]|\n\d\.|\n##|$)/i);
                                    if (comparisonMatch) {
                                        const tableText = comparisonMatch[0];
                                        const rows = tableText.split('\n').filter((line)=>line.includes('|') && !line.includes('---'));
                                        sections.comparisonTable = rows.slice(1).map((row)=>{
                                            const cells = row.split('|').map((c)=>c.trim()).filter((c)=>c);
                                            return {
                                                area: cells[0] || '',
                                                price: cells[1] || '',
                                                demographic: cells[2] || ''
                                            };
                                        }).filter((row)=>row.area && row.area !== 'Area');
                                    }
                                }
                                // Extract Section 2: Location Analysis
                                const section2Match = text.match(/2\.\s*Location Analysis([\s\S]*?)(?=\n3\.|$)/i);
                                if (section2Match) {
                                    sections.locationAnalysis = section2Match[1].trim();
                                    const bullets = sections.locationAnalysis.match(/[-•]\s*([^\n]+)/g);
                                    sections.locationHighlights = bullets ? bullets.map((b)=>b.replace(/^[-•]\s*/, '').trim()) : [];
                                }
                                // Extract Section 3: Investment Potential
                                const section3Match = text.match(/3\.\s*Investment Potential([\s\S]*?)(?=\n4\.|$)/i);
                                if (section3Match) {
                                    sections.investmentPotential = section3Match[1].trim();
                                    // Parse investment details
                                    const bullets = sections.investmentPotential.match(/[-•]\s*([^\n]+)/g);
                                    sections.investmentDetails = bullets ? bullets.map((b)=>b.replace(/^[-•]\s*/, '').trim()) : [];
                                    const rentalYield = sections.investmentPotential.match(/Rental Yield[:\s]*([^\n]+)/i);
                                    sections.rentalYield = rentalYield ? rentalYield[1].trim() : null;
                                    const appreciation = sections.investmentPotential.match(/(?:Capital )?Appreciation[:\s]*([^\n]+)/i);
                                    sections.appreciation = appreciation ? appreciation[1].trim() : null;
                                    const riskFactors = sections.investmentPotential.match(/Risk Factors[:\s]*([\s\S]*?)(?=\n\n|$)/i);
                                    if (riskFactors) {
                                        const riskBullets = riskFactors[1].match(/[-•]\s*([^\n]+)/g);
                                        sections.riskDetails = riskBullets ? riskBullets.map((b)=>b.replace(/^[-•]\s*/, '').trim()) : [];
                                    }
                                }
                                // Extract Section 4: Confidence Score
                                const section4Match = text.match(/4\.\s*Confidence Score([\s\S]*?)(?=\n##|\n\d\.|$)/i);
                                if (section4Match) {
                                    sections.confidenceSection = section4Match[1].trim();
                                    // Extract confidence rating
                                    const rating = sections.confidenceSection.match(/(?:Rating|Confidence)[:\s]*(High|Medium|Low)/i);
                                    sections.confidenceRating = rating ? rating[1] : null;
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        sections.executive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/40 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-3 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-blue-500/20 p-2 rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                className: "w-6 h-6 text-blue-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xl font-bold text-white",
                                                            children: "Executive Summary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-200 leading-relaxed mb-6",
                                                    children: sections.executive
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                sections.execComparison && sections.execComparison.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 pt-6 border-t border-blue-500/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-sm font-semibold text-blue-300 mb-4 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                                    className: "w-4 h-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Comparison with Nearby Areas"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-950/40 border border-slate-700/30 rounded-lg p-4 overflow-x-auto",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                className: "w-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "border-b border-slate-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-left py-2 px-3 text-xs font-semibold text-slate-400",
                                                                                    children: "Area"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                    lineNumber: 506,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-left py-2 px-3 text-xs font-semibold text-slate-400",
                                                                                    children: "Average Price"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                    lineNumber: 507,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-left py-2 px-3 text-xs font-semibold text-slate-400",
                                                                                    children: "Vibe / Target Demographic"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                    lineNumber: 508,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                            lineNumber: 505,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                        lineNumber: 504,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                        children: sections.execComparison.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                className: "border-b border-slate-800 hover:bg-slate-800/30 transition-colors",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "py-3 px-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-white font-medium text-sm",
                                                                                            children: row.area
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                            lineNumber: 518,
                                                                                            columnNumber: 39
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                        lineNumber: 517,
                                                                                        columnNumber: 37
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "py-3 px-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-emerald-400 font-semibold text-sm",
                                                                                            children: row.price
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                            lineNumber: 521,
                                                                                            columnNumber: 39
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                        lineNumber: 520,
                                                                                        columnNumber: 37
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "py-3 px-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-slate-300 text-sm",
                                                                                            children: row.demographic
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                            lineNumber: 524,
                                                                                            columnNumber: 39
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                        lineNumber: 523,
                                                                                        columnNumber: 37
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, idx, true, {
                                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                lineNumber: 513,
                                                                                columnNumber: 35
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                        lineNumber: 511,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 503,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 486,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        sections.priceEstimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-slate-900/40 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(16,185,129,0.2)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-3 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-emerald-500/20 p-2 rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                                className: "w-6 h-6 text-emerald-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 541,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xl font-bold text-white",
                                                            children: "1. Price Estimation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
                                                    children: [
                                                        sections.currentPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-950/60 border border-emerald-500/20 rounded-lg p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-emerald-400 uppercase mb-1",
                                                                    children: "Current Market Price"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg font-bold text-white",
                                                                    children: sections.currentPrice
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 551,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        sections.pricePerSqFt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-950/60 border border-emerald-500/20 rounded-lg p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-emerald-400 uppercase mb-1",
                                                                    children: "Price per Sq.Ft"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 556,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg font-bold text-white",
                                                                    children: sections.pricePerSqFt
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 557,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        sections.ticketSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-950/60 border border-emerald-500/20 rounded-lg p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-emerald-400 uppercase mb-1",
                                                                    children: "Total Ticket Size"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 562,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg font-bold text-white",
                                                                    children: sections.ticketSize
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 563,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 561,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                sections.comparisonTable && sections.comparisonTable.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-950/60 border border-slate-700/30 rounded-lg p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-sm font-semibold text-slate-300 mb-4",
                                                            children: "Comparison with Nearby Areas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 571,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "overflow-x-auto",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                className: "w-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "border-b border-slate-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-left py-2 px-3 text-xs font-semibold text-slate-400",
                                                                                    children: "Area"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                    lineNumber: 576,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-left py-2 px-3 text-xs font-semibold text-slate-400",
                                                                                    children: "Average Price"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                    lineNumber: 577,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                    className: "text-left py-2 px-3 text-xs font-semibold text-slate-400",
                                                                                    children: "Vibe / Target Demographic"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                    lineNumber: 578,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                            lineNumber: 575,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                        lineNumber: 574,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                        children: sections.comparisonTable.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                className: "border-b border-slate-800 hover:bg-slate-800/30 transition-colors",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "py-3 px-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-white font-medium text-sm",
                                                                                            children: row.area
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                            lineNumber: 588,
                                                                                            columnNumber: 39
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                        lineNumber: 587,
                                                                                        columnNumber: 37
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "py-3 px-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-emerald-400 font-semibold text-sm",
                                                                                            children: row.price
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                            lineNumber: 591,
                                                                                            columnNumber: 39
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                        lineNumber: 590,
                                                                                        columnNumber: 37
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "py-3 px-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-slate-300 text-sm",
                                                                                            children: row.demographic
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                            lineNumber: 594,
                                                                                            columnNumber: 39
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                        lineNumber: 593,
                                                                                        columnNumber: 37
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, idx, true, {
                                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                                lineNumber: 583,
                                                                                columnNumber: 35
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                        lineNumber: 581,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 573,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 538,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        sections.locationHighlights && sections.locationHighlights.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-3 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-purple-500/20 p-2 rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-6 h-6 text-purple-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 611,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xl font-bold text-white",
                                                            children: "2. Location Analysis"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                    children: sections.locationHighlights.map((highlight, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start space-x-2 bg-purple-500/5 rounded-lg p-3 hover:bg-purple-500/10 transition-all",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-purple-400 mt-0.5",
                                                                    children: "✦"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 622,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-slate-200",
                                                                    children: highlight
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 623,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 608,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        sections.investmentPotential && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/40 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-3 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-blue-500/20 p-2 rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                                className: "w-6 h-6 text-blue-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 635,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xl font-bold text-white",
                                                            children: "3. Investment Potential"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                (sections.rentalYield || sections.appreciation) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                                                    children: [
                                                        sections.rentalYield && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-950/60 border border-green-500/30 rounded-lg p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                            className: "w-4 h-4 text-green-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                            lineNumber: 646,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-green-400 uppercase",
                                                                            children: "Rental Yield"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                            lineNumber: 647,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 645,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg font-bold text-white",
                                                                    children: sections.rentalYield
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 644,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        sections.appreciation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-950/60 border border-blue-500/30 rounded-lg p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                            className: "w-4 h-4 text-blue-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                            lineNumber: 656,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-blue-400 uppercase",
                                                                            children: "Appreciation Forecast"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                            lineNumber: 657,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 655,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg font-bold text-white",
                                                                    children: sections.appreciation
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 659,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 654,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                sections.investmentDetails && sections.investmentDetails.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: sections.investmentDetails.map((detail, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start space-x-2 bg-blue-500/5 rounded-lg p-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-blue-400 mt-0.5",
                                                                    children: "•"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 673,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-slate-200",
                                                                    children: detail
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 674,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 669,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                sections.riskDetails && sections.riskDetails.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-sm font-semibold text-yellow-400 mb-3 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                    className: "w-4 h-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 684,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Risk Factors"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: sections.riskDetails.map((risk, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-yellow-400 mt-0.5",
                                                                            children: "⚠"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                            lineNumber: 690,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-slate-200",
                                                                            children: risk
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                            lineNumber: 691,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 689,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 687,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 632,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        sections.confidenceSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `bg-gradient-to-br ${sections.confidenceRating === 'High' ? 'from-green-900/30 to-slate-900/40 border-green-500/30' : sections.confidenceRating === 'Low' ? 'from-red-900/30 to-slate-900/40 border-red-500/30' : 'from-yellow-900/30 to-slate-900/40 border-yellow-500/30'} backdrop-blur-xl border rounded-2xl p-6 shadow-lg`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-3 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${sections.confidenceRating === 'High' ? 'bg-green-500/20' : sections.confidenceRating === 'Low' ? 'bg-red-500/20' : 'bg-yellow-500/20'} p-2 rounded-lg`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                className: `w-6 h-6 ${sections.confidenceRating === 'High' ? 'text-green-400' : sections.confidenceRating === 'Low' ? 'text-red-400' : 'text-yellow-400'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                lineNumber: 713,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 708,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xl font-bold text-white",
                                                                    children: "4. Confidence Score"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 720,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                sections.confidenceRating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-lg font-semibold ${sections.confidenceRating === 'High' ? 'text-green-400' : sections.confidenceRating === 'Low' ? 'text-red-400' : 'text-yellow-400'}`,
                                                                    children: sections.confidenceRating
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                                    lineNumber: 722,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                            lineNumber: 719,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-200 leading-relaxed",
                                                    children: sections.confidenceSection
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 732,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 702,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        !sections.priceEstimation && !sections.locationAnalysis && !sections.investmentPotential && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "prose prose-invert prose-emerald max-w-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                                    children: result.locationAnalysis
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 739,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                            lineNumber: 738,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true);
                            })()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    result.groundingChunks && result.groundingChunks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$MapVisualization$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                groundingChunks: result.groundingChunks
                            }, void 0, false, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 752,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            result.groundingChunks.filter((c)=>c.web).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 pt-6 border-t border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4",
                                        children: "Web References"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 757,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: result.groundingChunks.filter((c)=>c.web).map((chunk, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: chunk.web?.uri || '#',
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-colors group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        className: "w-4 h-4 text-slate-500 group-hover:text-emerald-400 mr-3 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 769,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-300 truncate",
                                                        children: chunk.web?.title || 'Web Source'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                        lineNumber: 770,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                                lineNumber: 762,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                        lineNumber: 760,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                                lineNumber: 756,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                        lineNumber: 751,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InvestmentAnalyzer, "ynv57iMqEhb+Qe6fuyjpio5eIRs=");
_c = InvestmentAnalyzer;
const __TURBOPACK__default__export__ = InvestmentAnalyzer;
var _c;
__turbopack_context__.k.register(_c, "InvestmentAnalyzer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/2025/EstateIQIndia/constants.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INDIA_MAP_PATHS",
    ()=>INDIA_MAP_PATHS,
    "INITIAL_STATE_ANALYSIS",
    ()=>INITIAL_STATE_ANALYSIS
]);
const INDIA_MAP_PATHS = [
    // North
    {
        id: 'JK',
        name: 'Jammu & Kashmir',
        d: 'M130,20 L160,10 L190,30 L170,60 L130,60 Z',
        investmentRating: 3
    },
    {
        id: 'HP',
        name: 'Himachal Pradesh',
        d: 'M130,60 L170,60 L180,80 L140,90 Z',
        investmentRating: 4
    },
    {
        id: 'PB',
        name: 'Punjab',
        d: 'M100,60 L130,60 L140,90 L110,100 Z',
        investmentRating: 4
    },
    {
        id: 'UK',
        name: 'Uttarakhand',
        d: 'M170,60 L200,70 L190,100 L160,90 Z',
        investmentRating: 4
    },
    {
        id: 'HR',
        name: 'Haryana',
        d: 'M130,90 L160,90 L155,120 L125,120 Z',
        investmentRating: 5
    },
    {
        id: 'DL',
        name: 'Delhi',
        d: 'M145,105 L155,105 L155,115 L145,115 Z',
        investmentRating: 5
    },
    // West
    {
        id: 'RJ',
        name: 'Rajasthan',
        d: 'M70,100 L125,120 L110,180 L50,160 Z',
        investmentRating: 4
    },
    {
        id: 'GJ',
        name: 'Gujarat',
        d: 'M30,160 L70,150 L110,190 L100,230 L40,210 Z',
        investmentRating: 5
    },
    // Central
    {
        id: 'UP',
        name: 'Uttar Pradesh',
        d: 'M160,90 L230,100 L240,150 L160,150 Z',
        investmentRating: 4
    },
    {
        id: 'MP',
        name: 'Madhya Pradesh',
        d: 'M110,180 L190,170 L200,220 L130,230 Z',
        investmentRating: 4
    },
    {
        id: 'CG',
        name: 'Chhattisgarh',
        d: 'M190,170 L220,180 L210,240 L180,230 Z',
        investmentRating: 3
    },
    // East
    {
        id: 'BR',
        name: 'Bihar',
        d: 'M230,100 L280,110 L270,140 L230,140 Z',
        investmentRating: 3
    },
    {
        id: 'JH',
        name: 'Jharkhand',
        d: 'M230,140 L270,140 L260,180 L220,170 Z',
        investmentRating: 3
    },
    {
        id: 'WB',
        name: 'West Bengal',
        d: 'M260,140 L280,130 L290,190 L260,180 Z',
        investmentRating: 4
    },
    {
        id: 'OR',
        name: 'Odisha',
        d: 'M210,230 L260,220 L250,280 L200,270 Z',
        investmentRating: 3
    },
    {
        id: 'SK',
        name: 'Sikkim',
        d: 'M280,110 L295,110 L290,125 L275,125 Z',
        investmentRating: 3
    },
    // North East
    {
        id: 'NE',
        name: 'North East',
        d: 'M290,90 L360,80 L350,150 L290,130 Z',
        investmentRating: 3
    },
    // South
    {
        id: 'MH',
        name: 'Maharashtra',
        d: 'M70,220 L180,220 L170,290 L90,310 Z',
        investmentRating: 5
    },
    {
        id: 'TS',
        name: 'Telangana',
        d: 'M170,240 L210,230 L200,290 L160,290 Z',
        investmentRating: 5
    },
    {
        id: 'GA',
        name: 'Goa',
        d: 'M90,310 L105,310 L100,325 L85,320 Z',
        investmentRating: 5
    },
    {
        id: 'KA',
        name: 'Karnataka',
        d: 'M100,310 L160,290 L150,370 L110,390 Z',
        investmentRating: 5
    },
    {
        id: 'AP',
        name: 'Andhra Pradesh',
        d: 'M200,290 L250,280 L230,360 L170,360 Z',
        investmentRating: 4
    },
    {
        id: 'TN',
        name: 'Tamil Nadu',
        d: 'M140,380 L180,370 L170,440 L130,440 Z',
        investmentRating: 4
    },
    {
        id: 'KL',
        name: 'Kerala',
        d: 'M110,390 L130,380 L140,430 L120,440 Z',
        investmentRating: 4
    }
];
const INITIAL_STATE_ANALYSIS = {
    stateName: "Select a State",
    investmentScore: 0,
    summary: "Hover over the map to see regions. Click a state to get detailed AI-driven investment analytics.",
    topCities: [],
    marketTrends: [],
    infrastructureProjects: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/2025/EstateIQIndia/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$IndiaMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/components/IndiaMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$StateDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/components/StateDetail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$InvestmentAnalyzer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/components/InvestmentAnalyzer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/services/geminiService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/2025/EstateIQIndia/constants.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const App = ()=>{
    _s();
    const [currentView, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppView"].HEATMAP);
    const [selectedState, setSelectedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stateAnalysis, setStateAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_STATE_ANALYSIS"]);
    const [isAnalysisLoading, setIsAnalysisLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleStateSelect = async (stateName)=>{
        setSelectedState(stateName);
        setView(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppView"].STATE_DETAIL);
        setIsAnalysisLoading(true);
        try {
            // Simulate API delay or actual call if API Key is present
            // We start with initial data to show UI immediately then fetch
            setStateAnalysis({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_STATE_ANALYSIS"],
                stateName
            }); // Optimistic update
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStateAnalysis"])(stateName);
            setStateAnalysis(data);
        } catch (error) {
            console.error("Failed to fetch state analysis", error);
        // Fallback or error state could be handled here
        } finally{
            setIsAnalysisLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen text-slate-100 font-sans selection:bg-emerald-500/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentView: currentView,
                setView: setView
            }, void 0, false, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative",
                children: [
                    currentView === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppView"].HEATMAP && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8 animate-fadeInUp",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-4 mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl md:text-5xl font-extrabold tracking-tight",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-500 to-emerald-600 animate-shimmer bg-[length:200%_auto]",
                                            children: "Invest Smarter with AI Insights"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white max-w-2xl mx-auto drop-shadow-lg",
                                        children: "Explore India's real estate potential. Hover over regions to identify high-growth zones and click to get deep-dive analytics powered by Gemini Pro."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row gap-12 items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full lg:w-1/2 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$IndiaMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            onStateSelect: handleStateSelect
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full lg:w-1/3 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-900/40 backdrop-blur-xl border border-emerald-500/20 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(16,185,129,0.15)] hover:shadow-[0_8px_48px_0_rgba(217,119,6,0.25)] transition-all duration-300 hover:scale-[1.02] animate-scaleIn",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-white mb-4 flex items-center gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500",
                                                            children: "Live Heatmap Legend"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-4 h-4 bg-emerald-500 rounded mr-3 group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-shadow"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                                        lineNumber: 68,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-white",
                                                                        children: "High Growth / Top Tier (Rating 5)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                                        lineNumber: 69,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-4 h-4 bg-emerald-600/60 rounded mr-3 group-hover:shadow-lg group-hover:shadow-emerald-600/50 transition-shadow"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                                        lineNumber: 72,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-white",
                                                                        children: "Moderate Growth (Rating 4)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                                        lineNumber: 73,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-4 h-4 bg-slate-600 rounded mr-3 group-hover:shadow-lg group-hover:shadow-slate-600/50 transition-shadow"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                                        lineNumber: 76,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-white",
                                                                        children: "Stable / Emerging (Rating 3)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                                        lineNumber: 77,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                lineNumber: 62,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-emerald-900/30 via-yellow-900/10 to-slate-900/40 backdrop-blur-xl border border-yellow-500/30 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(217,119,6,0.2)] hover:shadow-[0_8px_48px_0_rgba(217,119,6,0.35)] transition-all duration-300 hover:scale-[1.02] animate-scaleIn animation-delay-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400 mb-2",
                                                        children: "💡 Pro Tip"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 20
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white",
                                                        children: "Tier 2 cities like Indore, Coimbatore, and Jaipur are showing 15% higher year-on-year appreciation compared to saturated Tier 1 metros."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 20
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                                lineNumber: 82,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    currentView === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppView"].STATE_DETAIL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$StateDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        analysis: stateAnalysis,
                        isLoading: isAnalysisLoading,
                        onBack: ()=>setView(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppView"].HEATMAP)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    currentView === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppView"].VALUATION && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$2025$2f$EstateIQIndia$2f$components$2f$InvestmentAnalyzer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/2025/EstateIQIndia/App.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(App, "y2I6LGsCmukoq1WiPVbk/hBCmPA=");
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_2025_EstateIQIndia_ae7c4073._.js.map