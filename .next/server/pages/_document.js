"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "(pages-dir-node)/./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/createEmotionCache */ \"(pages-dir-node)/./styles/createEmotionCache.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__]);\n([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap\"\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/_document.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap\"\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/_document.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/icon?family=Material+Icons\"\n                        }, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/_document.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/runner/workspace/pages/_document.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/_document.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"/home/runner/workspace/pages/_document.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/runner/workspace/pages/_document.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/runner/workspace/pages/_document.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this);\n    }\n}\n// `getInitialProps` belongs to `_document` (instead of `_app`),\n// it's compatible with static-site generation (SSG).\nMyDocument.getInitialProps = async (ctx)=>{\n    const originalRenderPage = ctx.renderPage;\n    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.\n    // However, be aware that it can have global side effects.\n    const cache = (0,_styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { extractCriticalToChunks } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cache);\n    ctx.renderPage = ()=>originalRenderPage({\n            enhanceApp: (App)=>(props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                        emotionCache: cache,\n                        ...props\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/_document.js\",\n                        lineNumber: 45,\n                        columnNumber: 39\n                    }, undefined)\n        });\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n    const emotionStyles = extractCriticalToChunks(initialProps.html);\n    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n            \"data-emotion\": `${style.key} ${style.ids.join(' ')}`,\n            dangerouslySetInnerHTML: {\n                __html: style.css\n            }\n        }, style.key, false, {\n            fileName: \"/home/runner/workspace/pages/_document.js\",\n            lineNumber: 51,\n            columnNumber: 5\n        }, undefined));\n    return {\n        ...initialProps,\n        styles: [\n            ...react__WEBPACK_IMPORTED_MODULE_1___default().Children.toArray(initialProps.styles),\n            ...emotionStyleTags\n        ]\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzZDO0FBQ0w7QUFDSjtBQUUvQyxNQUFNUSxtQkFBbUJQLHNEQUFRQTtJQUM5Q1EsU0FBUztRQUNQLHFCQUNFLDhEQUFDUCwrQ0FBSUE7WUFBQ1EsTUFBSzs7OEJBQ1QsOERBQUNQLCtDQUFJQTs7c0NBQ0gsOERBQUNROzRCQUNDQyxLQUFJOzRCQUNKQyxNQUFLOzs7Ozs7c0NBRVAsOERBQUNGOzRCQUNDQyxLQUFJOzRCQUNKQyxNQUFLOzs7Ozs7c0NBRVAsOERBQUNGOzRCQUNDQyxLQUFJOzRCQUNKQyxNQUFLOzs7Ozs7Ozs7Ozs7OEJBR1QsOERBQUNDOztzQ0FDQyw4REFBQ1YsK0NBQUlBOzs7OztzQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUluQjtBQUNGO0FBRUEsZ0VBQWdFO0FBQ2hFLHFEQUFxRDtBQUNyREcsV0FBV08sZUFBZSxHQUFHLE9BQU9DO0lBQ2xDLE1BQU1DLHFCQUFxQkQsSUFBSUUsVUFBVTtJQUV6Qyx3R0FBd0c7SUFDeEcsMERBQTBEO0lBQzFELE1BQU1DLFFBQVFaLHNFQUFrQkE7SUFDaEMsTUFBTSxFQUFFYSx1QkFBdUIsRUFBRSxHQUFHZCwyRUFBbUJBLENBQUNhO0lBRXhESCxJQUFJRSxVQUFVLEdBQUcsSUFDZkQsbUJBQW1CO1lBQ2pCSSxZQUFZLENBQUNDLE1BQVEsQ0FBQ0Msc0JBQVUsOERBQUNEO3dCQUFJRSxjQUFjTDt3QkFBUSxHQUFHSSxLQUFLOzs7Ozs7UUFDckU7SUFFRixNQUFNRSxlQUFlLE1BQU14QixvRUFBd0IsQ0FBQ2U7SUFDcEQsTUFBTVUsZ0JBQWdCTix3QkFBd0JLLGFBQWFFLElBQUk7SUFDL0QsTUFBTUMsbUJBQW1CRixjQUFjRyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxzQkFDakQsOERBQUNBO1lBQ0NDLGdCQUFjLEdBQUdELE1BQU1FLEdBQUcsQ0FBQyxDQUFDLEVBQUVGLE1BQU1HLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLE1BQU07WUFFbkRDLHlCQUF5QjtnQkFBRUMsUUFBUU4sTUFBTU8sR0FBRztZQUFDO1dBRHhDUCxNQUFNRSxHQUFHOzs7OztJQUtsQixPQUFPO1FBQ0wsR0FBR1IsWUFBWTtRQUNmSSxRQUFRO2VBQUk3QixxREFBYyxDQUFDd0MsT0FBTyxDQUFDZixhQUFhSSxNQUFNO2VBQU1EO1NBQWlCO0lBQy9FO0FBQ0YiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2UvcGFnZXMvX2RvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSAnQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZSc7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gJy4uL3N0eWxlcy9jcmVhdGVFbW90aW9uQ2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmsgXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXCIgXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApO1xuICB9XG59XG5cbi8vIGBnZXRJbml0aWFsUHJvcHNgIGJlbG9uZ3MgdG8gYF9kb2N1bWVudGAgKGluc3RlYWQgb2YgYF9hcHBgKSxcbi8vIGl0J3MgY29tcGF0aWJsZSB3aXRoIHN0YXRpYy1zaXRlIGdlbmVyYXRpb24gKFNTRykuXG5NeURvY3VtZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XG4gIFxuICAvLyBZb3UgY2FuIGNvbnNpZGVyIHNoYXJpbmcgdGhlIHNhbWUgZW1vdGlvbiBjYWNoZSBiZXR3ZWVuIGFsbCB0aGUgU1NSIHJlcXVlc3RzIHRvIHNwZWVkIHVwIHBlcmZvcm1hbmNlLlxuICAvLyBIb3dldmVyLCBiZSBhd2FyZSB0aGF0IGl0IGNhbiBoYXZlIGdsb2JhbCBzaWRlIGVmZmVjdHMuXG4gIGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG4gIGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuICBcbiAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxuICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XG4gICAgICBlbmhhbmNlQXBwOiAoQXBwKSA9PiAocHJvcHMpID0+IDxBcHAgZW1vdGlvbkNhY2hlPXtjYWNoZX0gey4uLnByb3BzfSAvPixcbiAgICB9KTtcbiAgXG4gIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICBjb25zdCBlbW90aW9uU3R5bGVzID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaW5pdGlhbFByb3BzLmh0bWwpO1xuICBjb25zdCBlbW90aW9uU3R5bGVUYWdzID0gZW1vdGlvblN0eWxlcy5zdHlsZXMubWFwKChzdHlsZSkgPT4gKFxuICAgIDxzdHlsZVxuICAgICAgZGF0YS1lbW90aW9uPXtgJHtzdHlsZS5rZXl9ICR7c3R5bGUuaWRzLmpvaW4oJyAnKX1gfVxuICAgICAga2V5PXtzdHlsZS5rZXl9XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlLmNzcyB9fVxuICAgIC8+XG4gICkpO1xuICBcbiAgcmV0dXJuIHtcbiAgICAuLi5pbml0aWFsUHJvcHMsXG4gICAgc3R5bGVzOiBbLi4uUmVhY3QuQ2hpbGRyZW4udG9BcnJheShpbml0aWFsUHJvcHMuc3R5bGVzKSwgLi4uZW1vdGlvblN0eWxlVGFnc10sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiY3JlYXRlRW1vdGlvblNlcnZlciIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsIk15RG9jdW1lbnQiLCJyZW5kZXIiLCJsYW5nIiwibGluayIsInJlbCIsImhyZWYiLCJib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImNhY2hlIiwiZXh0cmFjdENyaXRpY2FsVG9DaHVua3MiLCJlbmhhbmNlQXBwIiwiQXBwIiwicHJvcHMiLCJlbW90aW9uQ2FjaGUiLCJpbml0aWFsUHJvcHMiLCJlbW90aW9uU3R5bGVzIiwiaHRtbCIsImVtb3Rpb25TdHlsZVRhZ3MiLCJzdHlsZXMiLCJtYXAiLCJzdHlsZSIsImRhdGEtZW1vdGlvbiIsImtleSIsImlkcyIsImpvaW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNzcyIsIkNoaWxkcmVuIiwidG9BcnJheSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_document.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/createEmotionCache.js":
/*!**************************************!*\
  !*** ./styles/createEmotionCache.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction createEmotionCache() {\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: 'css',\n        prepend: true\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0eWxlcy9jcmVhdGVFbW90aW9uQ2FjaGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFFMUIsU0FBU0M7SUFDdEIsT0FBT0QsMERBQVdBLENBQUM7UUFBRUUsS0FBSztRQUFPQyxTQUFTO0lBQUs7QUFDakQiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2Uvc3R5bGVzL2NyZWF0ZUVtb3Rpb25DYWNoZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/createEmotionCache.js\n");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@emotion/server/create-instance");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_document.js")));
module.exports = __webpack_exports__;

})();