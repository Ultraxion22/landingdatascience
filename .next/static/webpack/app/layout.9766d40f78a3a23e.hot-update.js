"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/css/style.css":
/*!***************************!*\
  !*** ./app/css/style.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"90b67306203a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jc3Mvc3R5bGUuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY3NzL3N0eWxlLmNzcz8xMmIyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiOTBiNjczMDYyMDNhXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/css/style.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/ui/header.tsx":
/*!**********************************!*\
  !*** ./components/ui/header.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"(app-pages-browser)/./components/ui/logo.tsx\");\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-menu */ \"(app-pages-browser)/./components/ui/mobile-menu.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [top, setTop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // detect whether user has scrolled the page down by 10px\n    const scrollHandler = ()=>{\n        window.pageYOffset > 10 ? setTop(false) : setTop(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollHandler();\n        window.addEventListener(\"scroll\", scrollHandler);\n        return ()=>window.removeEventListener(\"scroll\", scrollHandler);\n    }, [\n        top\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out \".concat(!top ? \"bg-white backdrop-blur-sm shadow-lg\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-6xl mx-auto px-5 sm:px-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between h-16 md:h-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"shrink-0 mr-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/workspaces/landingdatascience/components/ui/header.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/landingdatascience/components/ui/header.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"hidden md:flex md:grow\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex grow justify-end flex-wrap items-center\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/landingdatascience/components/ui/header.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/landingdatascience/components/ui/header.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mobile_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/workspaces/landingdatascience/components/ui/header.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/landingdatascience/components/ui/header.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspaces/landingdatascience/components/ui/header.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/landingdatascience/components/ui/header.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"JyCXB1bL1Upp1UOCHmbP09yZVl8=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvaGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUyQztBQUdsQjtBQUVhO0FBRXZCLFNBQVNJOztJQUV0QixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR04sK0NBQVFBLENBQVU7SUFFeEMseURBQXlEO0lBQ3pELE1BQU1PLGdCQUFnQjtRQUNwQkMsT0FBT0MsV0FBVyxHQUFHLEtBQUtILE9BQU8sU0FBU0EsT0FBTztJQUNuRDtJQUVBTCxnREFBU0EsQ0FBQztRQUNSTTtRQUNBQyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUNsQyxPQUFPLElBQU1DLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO0lBQ3BELEdBQUc7UUFBQ0Y7S0FBSTtJQUVSLHFCQUNFLDhEQUFDTztRQUFPQyxXQUFXLDBFQUE0SCxPQUFsRCxDQUFDUixNQUFNLHdDQUF3QztrQkFDMUksNEVBQUNTO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FHYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNYLDZDQUFJQTs7Ozs7Ozs7OztrQ0FJUCw4REFBQ2E7d0JBQUlGLFdBQVU7a0NBRWIsNEVBQUNHOzRCQUFHSCxXQUFVOzs7Ozs7Ozs7OztrQ0FPaEIsOERBQUNWLG9EQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCO0dBekN3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9oZWFkZXIudHN4P2U2NTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJ0AvY29tcG9uZW50cy91dGlscy9kcm9wZG93bidcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vbW9iaWxlLW1lbnUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblxuICBjb25zdCBbdG9wLCBzZXRUb3BdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcblxuICAvLyBkZXRlY3Qgd2hldGhlciB1c2VyIGhhcyBzY3JvbGxlZCB0aGUgcGFnZSBkb3duIGJ5IDEwcHhcbiAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgPiAxMCA/IHNldFRvcChmYWxzZSkgOiBzZXRUb3AodHJ1ZSlcbiAgfSAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzY3JvbGxIYW5kbGVyKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcilcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpXG4gIH0sIFt0b3BdKVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2BmaXhlZCB3LWZ1bGwgei0zMCBtZDpiZy1vcGFjaXR5LTkwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7IXRvcCA/ICdiZy13aGl0ZSBiYWNrZHJvcC1ibHVyLXNtIHNoYWRvdy1sZycgOiAnJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNSBzbTpweC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTYgbWQ6aC0yMFwiPlxuXG4gICAgICAgICAgey8qIFNpdGUgYnJhbmRpbmcgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaHJpbmstMCBtci00XCI+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIERlc2t0b3AgbmF2aWdhdGlvbiAqL31cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IG1kOmdyb3dcIj5cbiAgICAgICAgICAgIHsvKiBEZXNrdG9wIHNpZ24gaW4gbGlua3MgKi99XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBncm93IGp1c3RpZnktZW5kIGZsZXgtd3JhcCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgPE1vYmlsZU1lbnUgLz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMb2dvIiwiTW9iaWxlTWVudSIsIkhlYWRlciIsInRvcCIsInNldFRvcCIsInNjcm9sbEhhbmRsZXIiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwibmF2IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/header.tsx\n"));

/***/ })

});