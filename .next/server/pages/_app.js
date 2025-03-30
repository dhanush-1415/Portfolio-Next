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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./contexts/ColorModeContext.js":
/*!**************************************!*\
  !*** ./contexts/ColorModeContext.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ColorModeContext: () => (/* binding */ ColorModeContext),\n/* harmony export */   ColorModeContextProvider: () => (/* binding */ ColorModeContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"(pages-dir-node)/./node_modules/@mui/material/esm/CssBaseline/index.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"(pages-dir-node)/./styles/theme.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__]);\n([_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst ColorModeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    toggleColorMode: ()=>{},\n    mode: 'light'\n});\nfunction ColorModeContextProvider({ children }) {\n    // Check if user has a saved preference in localStorage\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ColorModeContextProvider.useEffect\": ()=>{\n            const savedMode = localStorage.getItem('themeMode');\n            if (savedMode) {\n                setMode(savedMode);\n            } else {\n                // Check if user prefers dark mode from system settings\n                const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;\n                setMode(prefersDarkMode ? 'dark' : 'light');\n            }\n        }\n    }[\"ColorModeContextProvider.useEffect\"], []);\n    const colorMode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n        \"ColorModeContextProvider.useMemo[colorMode]\": ()=>({\n                toggleColorMode: ({\n                    \"ColorModeContextProvider.useMemo[colorMode]\": ()=>{\n                        setMode({\n                            \"ColorModeContextProvider.useMemo[colorMode]\": (prevMode)=>{\n                                const newMode = prevMode === 'light' ? 'dark' : 'light';\n                                localStorage.setItem('themeMode', newMode);\n                                return newMode;\n                            }\n                        }[\"ColorModeContextProvider.useMemo[colorMode]\"]);\n                    }\n                })[\"ColorModeContextProvider.useMemo[colorMode]\"],\n                mode\n            })\n    }[\"ColorModeContextProvider.useMemo[colorMode]\"], [\n        mode\n    ]);\n    const theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n        \"ColorModeContextProvider.useMemo[theme]\": ()=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)(mode === 'light' ? _styles_theme__WEBPACK_IMPORTED_MODULE_2__.lightTheme : _styles_theme__WEBPACK_IMPORTED_MODULE_2__.darkTheme)\n    }[\"ColorModeContextProvider.useMemo[theme]\"], [\n        mode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorModeContext.Provider, {\n        value: colorMode,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: theme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/runner/workspace/contexts/ColorModeContext.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"/home/runner/workspace/contexts/ColorModeContext.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/runner/workspace/contexts/ColorModeContext.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHRzL0NvbG9yTW9kZUNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRTtBQUNUO0FBQ2Q7QUFDSTtBQUVqRCxNQUFNVSxpQ0FBbUJULG9EQUFhQSxDQUFDO0lBQzVDVSxpQkFBaUIsS0FBTztJQUN4QkMsTUFBTTtBQUNSLEdBQUc7QUFFSSxTQUFTQyx5QkFBeUIsRUFBRUMsUUFBUSxFQUFFO0lBQ25ELHVEQUF1RDtJQUN2RCxNQUFNLENBQUNGLE1BQU1HLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFFakNFLGdEQUFTQTs4Q0FBQztZQUNSLE1BQU1ZLFlBQVlDLGFBQWFDLE9BQU8sQ0FBQztZQUN2QyxJQUFJRixXQUFXO2dCQUNiRCxRQUFRQztZQUNWLE9BQU87Z0JBQ0wsdURBQXVEO2dCQUN2RCxNQUFNRyxrQkFBa0JDLE9BQU9DLFVBQVUsQ0FBQyxnQ0FBZ0NDLE9BQU87Z0JBQ2pGUCxRQUFRSSxrQkFBa0IsU0FBUztZQUNyQztRQUNGOzZDQUFHLEVBQUU7SUFFTCxNQUFNSSxZQUFZcEIsOENBQU9BO3VEQUN2QixJQUFPO2dCQUNMUSxlQUFlO21FQUFFO3dCQUNmSTsyRUFBUSxDQUFDUztnQ0FDUCxNQUFNQyxVQUFVRCxhQUFhLFVBQVUsU0FBUztnQ0FDaERQLGFBQWFTLE9BQU8sQ0FBQyxhQUFhRDtnQ0FDbEMsT0FBT0E7NEJBQ1Q7O29CQUNGOztnQkFDQWI7WUFDRjtzREFDQTtRQUFDQTtLQUFLO0lBR1IsTUFBTWUsUUFBUXhCLDhDQUFPQTttREFDbkIsSUFBTUcsaUVBQVdBLENBQUNNLFNBQVMsVUFBVUoscURBQVVBLEdBQUdDLG9EQUFTQTtrREFDM0Q7UUFBQ0c7S0FBSztJQUdSLHFCQUNFLDhEQUFDRixpQkFBaUJrQixRQUFRO1FBQUNDLE9BQU9OO2tCQUNoQyw0RUFBQ2xCLCtEQUFhQTtZQUFDc0IsT0FBT0E7OzhCQUNwQiw4REFBQ3BCLGlFQUFXQTs7Ozs7Z0JBQ1hPOzs7Ozs7Ozs7Ozs7QUFJVCIsInNvdXJjZXMiOlsiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jb250ZXh0cy9Db2xvck1vZGVDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgQ29sb3JNb2RlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICB0b2dnbGVDb2xvck1vZGU6ICgpID0+IHt9LFxuICBtb2RlOiAnbGlnaHQnLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb2xvck1vZGVDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIC8vIENoZWNrIGlmIHVzZXIgaGFzIGEgc2F2ZWQgcHJlZmVyZW5jZSBpbiBsb2NhbFN0b3JhZ2VcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ2xpZ2h0Jyk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkTW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZU1vZGUnKTtcbiAgICBpZiAoc2F2ZWRNb2RlKSB7XG4gICAgICBzZXRNb2RlKHNhdmVkTW9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgcHJlZmVycyBkYXJrIG1vZGUgZnJvbSBzeXN0ZW0gc2V0dGluZ3NcbiAgICAgIGNvbnN0IHByZWZlcnNEYXJrTW9kZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICAgIHNldE1vZGUocHJlZmVyc0RhcmtNb2RlID8gJ2RhcmsnIDogJ2xpZ2h0Jyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgY29sb3JNb2RlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgdG9nZ2xlQ29sb3JNb2RlOiAoKSA9PiB7XG4gICAgICAgIHNldE1vZGUoKHByZXZNb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3TW9kZSA9IHByZXZNb2RlID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWVNb2RlJywgbmV3TW9kZSk7XG4gICAgICAgICAgcmV0dXJuIG5ld01vZGU7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG1vZGUsXG4gICAgfSksXG4gICAgW21vZGVdXG4gICk7XG5cbiAgY29uc3QgdGhlbWUgPSB1c2VNZW1vKFxuICAgICgpID0+IGNyZWF0ZVRoZW1lKG1vZGUgPT09ICdsaWdodCcgPyBsaWdodFRoZW1lIDogZGFya1RoZW1lKSxcbiAgICBbbW9kZV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDb2xvck1vZGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb2xvck1vZGV9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0NvbG9yTW9kZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwidXNlRWZmZWN0IiwiVGhlbWVQcm92aWRlciIsImNyZWF0ZVRoZW1lIiwiQ3NzQmFzZWxpbmUiLCJsaWdodFRoZW1lIiwiZGFya1RoZW1lIiwiQ29sb3JNb2RlQ29udGV4dCIsInRvZ2dsZUNvbG9yTW9kZSIsIm1vZGUiLCJDb2xvck1vZGVDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldE1vZGUiLCJzYXZlZE1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJlZmVyc0RhcmtNb2RlIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjb2xvck1vZGUiLCJwcmV2TW9kZSIsIm5ld01vZGUiLCJzZXRJdGVtIiwidGhlbWUiLCJQcm92aWRlciIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./contexts/ColorModeContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/createEmotionCache */ \"(pages-dir-node)/./styles/createEmotionCache.js\");\n/* harmony import */ var _contexts_ColorModeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/ColorModeContext */ \"(pages-dir-node)/./contexts/ColorModeContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_3__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__, _contexts_ColorModeContext__WEBPACK_IMPORTED_MODULE_5__]);\n([_emotion_react__WEBPACK_IMPORTED_MODULE_3__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__, _contexts_ColorModeContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n// Client-side cache, shared for the whole session of the user in the browser\nconst clientSideEmotionCache = (0,_styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nfunction MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            // Remove the server-side injected CSS\n            const jssStyles = document.querySelector('#jss-server-side');\n            if (jssStyles) {\n                jssStyles.parentElement.removeChild(jssStyles);\n            }\n        }\n    }[\"MyApp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.CacheProvider, {\n        value: emotionCache,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/_app.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Professional Next.js App with MUI\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/_app.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A professional Next.js application with Material UI featuring custom color palette and smooth navigation\"\n                    }, void 0, false, {\n                        fileName: \"/home/runner/workspace/pages/_app.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/workspace/pages/_app.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ColorModeContext__WEBPACK_IMPORTED_MODULE_5__.ColorModeContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/runner/workspace/pages/_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/pages/_app.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/workspace/pages/_app.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNMO0FBQ2tCO0FBQ2U7QUFDVTtBQUN6QztBQUUvQiw2RUFBNkU7QUFDN0UsTUFBTUsseUJBQXlCRixzRUFBa0JBO0FBRWxDLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGVBQWVKLHNCQUFzQixFQUFFO0lBQzNGTCxnREFBU0E7MkJBQUM7WUFDUixzQ0FBc0M7WUFDdEMsTUFBTVUsWUFBWUMsU0FBU0MsYUFBYSxDQUFDO1lBQ3pDLElBQUlGLFdBQVc7Z0JBQ2JBLFVBQVVHLGFBQWEsQ0FBQ0MsV0FBVyxDQUFDSjtZQUN0QztRQUNGOzBCQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1IseURBQWFBO1FBQUNhLE9BQU9OOzswQkFDcEIsOERBQUNSLGtEQUFJQTs7a0NBQ0gsOERBQUNlO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDSDt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ2QsZ0ZBQXdCQTswQkFDdkIsNEVBQUNHO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gJy4uL3N0eWxlcy9jcmVhdGVFbW90aW9uQ2FjaGUnO1xuaW1wb3J0IHsgQ29sb3JNb2RlQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQ29sb3JNb2RlQ29udGV4dCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbi8vIENsaWVudC1zaWRlIGNhY2hlLCBzaGFyZWQgZm9yIHRoZSB3aG9sZSBzZXNzaW9uIG9mIHRoZSB1c2VyIGluIHRoZSBicm93c2VyXG5jb25zdCBjbGllbnRTaWRlRW1vdGlvbkNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGVtb3Rpb25DYWNoZSA9IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8dGl0bGU+UHJvZmVzc2lvbmFsIE5leHQuanMgQXBwIHdpdGggTVVJPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgcHJvZmVzc2lvbmFsIE5leHQuanMgYXBwbGljYXRpb24gd2l0aCBNYXRlcmlhbCBVSSBmZWF0dXJpbmcgY3VzdG9tIGNvbG9yIHBhbGV0dGUgYW5kIHNtb290aCBuYXZpZ2F0aW9uXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb2xvck1vZGVDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ29sb3JNb2RlQ29udGV4dFByb3ZpZGVyPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJIZWFkIiwiQ2FjaGVQcm92aWRlciIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsIkNvbG9yTW9kZUNvbnRleHRQcm92aWRlciIsImNsaWVudFNpZGVFbW90aW9uQ2FjaGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImVtb3Rpb25DYWNoZSIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInZhbHVlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidGl0bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/createEmotionCache.js":
/*!**************************************!*\
  !*** ./styles/createEmotionCache.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction createEmotionCache() {\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: 'css',\n        prepend: true\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0eWxlcy9jcmVhdGVFbW90aW9uQ2FjaGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFFMUIsU0FBU0M7SUFDdEIsT0FBT0QsMERBQVdBLENBQUM7UUFBRUUsS0FBSztRQUFPQyxTQUFTO0lBQUs7QUFDakQiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2Uvc3R5bGVzL2NyZWF0ZUVtb3Rpb25DYWNoZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/createEmotionCache.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   darkTheme: () => (/* binding */ darkTheme),\n/* harmony export */   lightTheme: () => (/* binding */ lightTheme)\n/* harmony export */ });\n// Light mode and dark mode themes with custom color palette\n// Light mode palette:\n// Primary: #4B0082 (Indigo)\n// Secondary: #FFD700 (Gold)\n// Background: #F8F9FA (Soft White)\n// Text: #2C2C2C (Dark Charcoal)\n// Accent: #0056B3 (Royal Blue)\n// Dark mode palette:\n// Primary: #9370DB (Medium Purple)\n// Secondary: #FFD700 (Gold)\n// Background: #121212 (Deep Black)\n// Text: #EAEAEA (Soft White)\n// Accent: #1E90FF (Bright Blue)\nconst lightTheme = {\n    palette: {\n        mode: 'light',\n        primary: {\n            main: '#4B0082',\n            light: '#6F2DA8',\n            dark: '#35005E',\n            contrastText: '#FFFFFF'\n        },\n        secondary: {\n            main: '#FFD700',\n            light: '#FFEB3B',\n            dark: '#FFC400',\n            contrastText: '#000000'\n        },\n        background: {\n            default: '#F8F9FA',\n            paper: '#FFFFFF'\n        },\n        text: {\n            primary: '#2C2C2C',\n            secondary: '#4A4A4A'\n        },\n        accent: {\n            main: '#0056B3',\n            light: '#0277BD',\n            dark: '#003C7E',\n            contrastText: '#FFFFFF'\n        }\n    },\n    typography: {\n        fontFamily: [\n            'Poppins',\n            'Roboto',\n            '\"Helvetica Neue\"',\n            'Arial',\n            'sans-serif'\n        ].join(','),\n        h1: {\n            fontWeight: 700,\n            fontSize: '3.5rem',\n            lineHeight: 1.2\n        },\n        h2: {\n            fontWeight: 600,\n            fontSize: '2.5rem',\n            lineHeight: 1.2\n        },\n        h3: {\n            fontWeight: 600,\n            fontSize: '2rem',\n            lineHeight: 1.3\n        },\n        h4: {\n            fontWeight: 600,\n            fontSize: '1.5rem',\n            lineHeight: 1.4\n        },\n        h5: {\n            fontWeight: 500,\n            fontSize: '1.25rem',\n            lineHeight: 1.5\n        },\n        h6: {\n            fontWeight: 500,\n            fontSize: '1rem',\n            lineHeight: 1.6\n        },\n        body1: {\n            fontSize: '1rem',\n            lineHeight: 1.6\n        },\n        body2: {\n            fontSize: '0.875rem',\n            lineHeight: 1.6\n        },\n        button: {\n            fontWeight: 500,\n            textTransform: 'none'\n        }\n    },\n    shape: {\n        borderRadius: 8\n    },\n    components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    borderRadius: 8,\n                    padding: '10px 16px',\n                    fontWeight: 500,\n                    textTransform: 'none',\n                    boxShadow: 'none',\n                    '&:hover': {\n                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.07)'\n                    }\n                },\n                containedPrimary: {\n                    background: 'linear-gradient(135deg, #4B0082 0%, #6F2DA8 100%)'\n                },\n                containedSecondary: {\n                    background: 'linear-gradient(135deg, #FFD700 0%, #FFEB3B 100%)'\n                }\n            }\n        },\n        MuiCssBaseline: {\n            styleOverrides: {\n                html: {\n                    scrollBehavior: 'smooth'\n                },\n                body: {\n                    scrollbarWidth: 'thin',\n                    '&::-webkit-scrollbar': {\n                        width: '8px'\n                    },\n                    '&::-webkit-scrollbar-track': {\n                        background: '#F8F9FA'\n                    },\n                    '&::-webkit-scrollbar-thumb': {\n                        backgroundColor: '#C7C7C7',\n                        borderRadius: '4px'\n                    },\n                    '&::-webkit-scrollbar-thumb:hover': {\n                        backgroundColor: '#A3A3A3'\n                    }\n                }\n            }\n        }\n    }\n};\nconst darkTheme = {\n    palette: {\n        mode: 'dark',\n        primary: {\n            main: '#9370DB',\n            light: '#B39DDB',\n            dark: '#7854B1',\n            contrastText: '#FFFFFF'\n        },\n        secondary: {\n            main: '#FFD700',\n            light: '#FFEB3B',\n            dark: '#FFC400',\n            contrastText: '#000000'\n        },\n        background: {\n            default: '#121212',\n            paper: '#1E1E1E'\n        },\n        text: {\n            primary: '#EAEAEA',\n            secondary: '#B3B3B3'\n        },\n        accent: {\n            main: '#1E90FF',\n            light: '#4DABFF',\n            dark: '#0069C0',\n            contrastText: '#FFFFFF'\n        }\n    },\n    typography: {\n        fontFamily: [\n            'Poppins',\n            'Roboto',\n            '\"Helvetica Neue\"',\n            'Arial',\n            'sans-serif'\n        ].join(','),\n        h1: {\n            fontWeight: 700,\n            fontSize: '3.5rem',\n            lineHeight: 1.2\n        },\n        h2: {\n            fontWeight: 600,\n            fontSize: '2.5rem',\n            lineHeight: 1.2\n        },\n        h3: {\n            fontWeight: 600,\n            fontSize: '2rem',\n            lineHeight: 1.3\n        },\n        h4: {\n            fontWeight: 600,\n            fontSize: '1.5rem',\n            lineHeight: 1.4\n        },\n        h5: {\n            fontWeight: 500,\n            fontSize: '1.25rem',\n            lineHeight: 1.5\n        },\n        h6: {\n            fontWeight: 500,\n            fontSize: '1rem',\n            lineHeight: 1.6\n        },\n        body1: {\n            fontSize: '1rem',\n            lineHeight: 1.6\n        },\n        body2: {\n            fontSize: '0.875rem',\n            lineHeight: 1.6\n        },\n        button: {\n            fontWeight: 500,\n            textTransform: 'none'\n        }\n    },\n    shape: {\n        borderRadius: 8\n    },\n    components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    borderRadius: 8,\n                    padding: '10px 16px',\n                    fontWeight: 500,\n                    textTransform: 'none',\n                    boxShadow: 'none',\n                    '&:hover': {\n                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)'\n                    }\n                },\n                containedPrimary: {\n                    background: 'linear-gradient(135deg, #9370DB 0%, #B39DDB 100%)'\n                },\n                containedSecondary: {\n                    background: 'linear-gradient(135deg, #FFD700 0%, #FFEB3B 100%)'\n                }\n            }\n        },\n        MuiCssBaseline: {\n            styleOverrides: {\n                html: {\n                    scrollBehavior: 'smooth'\n                },\n                body: {\n                    scrollbarWidth: 'thin',\n                    '&::-webkit-scrollbar': {\n                        width: '8px'\n                    },\n                    '&::-webkit-scrollbar-track': {\n                        background: '#1E1E1E'\n                    },\n                    '&::-webkit-scrollbar-thumb': {\n                        backgroundColor: '#444444',\n                        borderRadius: '4px'\n                    },\n                    '&::-webkit-scrollbar-thumb:hover': {\n                        backgroundColor: '#555555'\n                    }\n                }\n            }\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQ0EsOEJBQThCO3dCQUM1QnBDLFlBQVk7b0JBQ2Q7b0JBQ0EsOEJBQThCO3dCQUM1QnFDLGlCQUFpQjt3QkFDakJmLGNBQWM7b0JBQ2hCO29CQUNBLG9DQUFvQzt3QkFDbENlLGlCQUFpQjtvQkFDbkI7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL3N0eWxlcy90aGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWdodCBtb2RlIGFuZCBkYXJrIG1vZGUgdGhlbWVzIHdpdGggY3VzdG9tIGNvbG9yIHBhbGV0dGVcblxuLy8gTGlnaHQgbW9kZSBwYWxldHRlOlxuLy8gUHJpbWFyeTogIzRCMDA4MiAoSW5kaWdvKVxuLy8gU2Vjb25kYXJ5OiAjRkZENzAwIChHb2xkKVxuLy8gQmFja2dyb3VuZDogI0Y4RjlGQSAoU29mdCBXaGl0ZSlcbi8vIFRleHQ6ICMyQzJDMkMgKERhcmsgQ2hhcmNvYWwpXG4vLyBBY2NlbnQ6ICMwMDU2QjMgKFJveWFsIEJsdWUpXG5cbi8vIERhcmsgbW9kZSBwYWxldHRlOlxuLy8gUHJpbWFyeTogIzkzNzBEQiAoTWVkaXVtIFB1cnBsZSlcbi8vIFNlY29uZGFyeTogI0ZGRDcwMCAoR29sZClcbi8vIEJhY2tncm91bmQ6ICMxMjEyMTIgKERlZXAgQmxhY2spXG4vLyBUZXh0OiAjRUFFQUVBIChTb2Z0IFdoaXRlKVxuLy8gQWNjZW50OiAjMUU5MEZGIChCcmlnaHQgQmx1ZSlcblxuZXhwb3J0IGNvbnN0IGxpZ2h0VGhlbWUgPSB7XG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiAnbGlnaHQnLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjNEIwMDgyJywgLy8gSW5kaWdvXG4gICAgICBsaWdodDogJyM2RjJEQTgnLFxuICAgICAgZGFyazogJyMzNTAwNUUnLFxuICAgICAgY29udHJhc3RUZXh0OiAnI0ZGRkZGRicsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjRkZENzAwJywgLy8gR29sZFxuICAgICAgbGlnaHQ6ICcjRkZFQjNCJyxcbiAgICAgIGRhcms6ICcjRkZDNDAwJyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyMwMDAwMDAnLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyNGOEY5RkEnLCAvLyBTb2Z0IFdoaXRlXG4gICAgICBwYXBlcjogJyNGRkZGRkYnLFxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgcHJpbWFyeTogJyMyQzJDMkMnLCAvLyBEYXJrIENoYXJjb2FsXG4gICAgICBzZWNvbmRhcnk6ICcjNEE0QTRBJyxcbiAgICB9LFxuICAgIGFjY2VudDoge1xuICAgICAgbWFpbjogJyMwMDU2QjMnLCAvLyBSb3lhbCBCbHVlXG4gICAgICBsaWdodDogJyMwMjc3QkQnLFxuICAgICAgZGFyazogJyMwMDNDN0UnLFxuICAgICAgY29udHJhc3RUZXh0OiAnI0ZGRkZGRicsXG4gICAgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgICdQb3BwaW5zJyxcbiAgICAgICdSb2JvdG8nLFxuICAgICAgJ1wiSGVsdmV0aWNhIE5ldWVcIicsXG4gICAgICAnQXJpYWwnLFxuICAgICAgJ3NhbnMtc2VyaWYnLFxuICAgIF0uam9pbignLCcpLFxuICAgIGgxOiB7XG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogJzMuNXJlbScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgZm9udFNpemU6ICcyLjVyZW0nLFxuICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgIGZvbnRTaXplOiAnMnJlbScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjMsXG4gICAgfSxcbiAgICBoNDoge1xuICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgZm9udFNpemU6ICcxLjVyZW0nLFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgIH0sXG4gICAgaDU6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGZvbnRTaXplOiAnMS4yNXJlbScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgfSxcbiAgICBoNjoge1xuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgICB9LFxuICAgIGJvZHkxOiB7XG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgbGluZUhlaWdodDogMS42LFxuICAgIH0sXG4gICAgYm9keTI6IHtcbiAgICAgIGZvbnRTaXplOiAnMC44NzVyZW0nLFxuICAgICAgbGluZUhlaWdodDogMS42LFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbiAgc2hhcGU6IHtcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA3KScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVkUHJpbWFyeToge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNEIwMDgyIDAlLCAjNkYyREE4IDEwMCUpJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVkU2Vjb25kYXJ5OiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICNGRkQ3MDAgMCUsICNGRkVCM0IgMTAwJSknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUNzc0Jhc2VsaW5lOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICBodG1sOiB7XG4gICAgICAgICAgc2Nyb2xsQmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgc2Nyb2xsYmFyV2lkdGg6ICd0aGluJyxcbiAgICAgICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXInOiB7XG4gICAgICAgICAgICB3aWR0aDogJzhweCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2snOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI0Y4RjlGQScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzdDN0M3JyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQTNBM0EzJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IHtcbiAgcGFsZXR0ZToge1xuICAgIG1vZGU6ICdkYXJrJyxcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnIzkzNzBEQicsIC8vIE1lZGl1bSBQdXJwbGVcbiAgICAgIGxpZ2h0OiAnI0IzOUREQicsXG4gICAgICBkYXJrOiAnIzc4NTRCMScsXG4gICAgICBjb250cmFzdFRleHQ6ICcjRkZGRkZGJyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyNGRkQ3MDAnLCAvLyBHb2xkXG4gICAgICBsaWdodDogJyNGRkVCM0InLFxuICAgICAgZGFyazogJyNGRkM0MDAnLFxuICAgICAgY29udHJhc3RUZXh0OiAnIzAwMDAwMCcsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiAnIzEyMTIxMicsIC8vIERlZXAgQmxhY2tcbiAgICAgIHBhcGVyOiAnIzFFMUUxRScsXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBwcmltYXJ5OiAnI0VBRUFFQScsIC8vIFNvZnQgV2hpdGVcbiAgICAgIHNlY29uZGFyeTogJyNCM0IzQjMnLFxuICAgIH0sXG4gICAgYWNjZW50OiB7XG4gICAgICBtYWluOiAnIzFFOTBGRicsIC8vIEJyaWdodCBCbHVlXG4gICAgICBsaWdodDogJyM0REFCRkYnLFxuICAgICAgZGFyazogJyMwMDY5QzAnLFxuICAgICAgY29udHJhc3RUZXh0OiAnI0ZGRkZGRicsXG4gICAgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgICdQb3BwaW5zJyxcbiAgICAgICdSb2JvdG8nLFxuICAgICAgJ1wiSGVsdmV0aWNhIE5ldWVcIicsXG4gICAgICAnQXJpYWwnLFxuICAgICAgJ3NhbnMtc2VyaWYnLFxuICAgIF0uam9pbignLCcpLFxuICAgIGgxOiB7XG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogJzMuNXJlbScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgZm9udFNpemU6ICcyLjVyZW0nLFxuICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgIGZvbnRTaXplOiAnMnJlbScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjMsXG4gICAgfSxcbiAgICBoNDoge1xuICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgZm9udFNpemU6ICcxLjVyZW0nLFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgIH0sXG4gICAgaDU6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGZvbnRTaXplOiAnMS4yNXJlbScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgfSxcbiAgICBoNjoge1xuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgICB9LFxuICAgIGJvZHkxOiB7XG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgbGluZUhlaWdodDogMS42LFxuICAgIH0sXG4gICAgYm9keTI6IHtcbiAgICAgIGZvbnRTaXplOiAnMC44NzVyZW0nLFxuICAgICAgbGluZUhlaWdodDogMS42LFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbiAgc2hhcGU6IHtcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVkUHJpbWFyeToge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTM3MERCIDAlLCAjQjM5RERCIDEwMCUpJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVkU2Vjb25kYXJ5OiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICNGRkQ3MDAgMCUsICNGRkVCM0IgMTAwJSknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUNzc0Jhc2VsaW5lOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICBodG1sOiB7XG4gICAgICAgICAgc2Nyb2xsQmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgc2Nyb2xsYmFyV2lkdGg6ICd0aGluJyxcbiAgICAgICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXInOiB7XG4gICAgICAgICAgICB3aWR0aDogJzhweCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2snOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzFFMUUxRScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDQ0NDQ0JyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTU1NTU1JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJsaWdodFRoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJwcmltYXJ5IiwibWFpbiIsImxpZ2h0IiwiZGFyayIsImNvbnRyYXN0VGV4dCIsInNlY29uZGFyeSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJ0ZXh0IiwiYWNjZW50IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImJvZHkxIiwiYm9keTIiLCJidXR0b24iLCJ0ZXh0VHJhbnNmb3JtIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJjb21wb25lbnRzIiwiTXVpQnV0dG9uIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwicGFkZGluZyIsImJveFNoYWRvdyIsImNvbnRhaW5lZFByaW1hcnkiLCJjb250YWluZWRTZWNvbmRhcnkiLCJNdWlDc3NCYXNlbGluZSIsImh0bWwiLCJzY3JvbGxCZWhhdmlvciIsImJvZHkiLCJzY3JvbGxiYXJXaWR0aCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiZGFya1RoZW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/theme.js\n");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system");;

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/DefaultPropsProvider");;

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/InitColorSchemeScript");;

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/colorManipulator");;

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createBreakpoints");;

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createStyled");;

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createTheme");;

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/cssVars");;

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/spacing");;

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/styleFunctionSx");;

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/useThemeProps");;

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/deepmerge");;

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/formatMuiErrorMessage");;

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/generateUtilityClass");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();