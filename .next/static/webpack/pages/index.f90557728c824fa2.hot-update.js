"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/client/useMutation */ \"./lib/client/useMutation.tsx\");\n/* harmony import */ var _lib_client_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/client/useUser */ \"./lib/client/useUser.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _throw(e) {\n    throw e;\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    var _this1 = _this;\n    var ref;\n    _s();\n    var ref1 = _slicedToArray((0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweet/write\"), 1), write = ref1[0];\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/tweets\").data;\n    var ref2 = (0,_lib_client_useUser__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), ref2 = ref2 !== null ? ref2 : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var ref3 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)(), register = ref3.register, handleSubmit = ref3.handleSubmit;\n    var onValid = function(validForm) {\n        write(validForm);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tweeter\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit(onValid),\n                    className: \"flex flex-col w-1/3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"title\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"title\"), {\n                                    className: \"border\"\n                                }), void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"contents\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", _objectSpread({}, register(\"contents\"), {\n                                    className: \"border\"\n                                }), void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-300 mt-2\",\n                            children: \"Write\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data === null || data === void 0 ? void 0 : (ref = data.tweets) === null || ref === void 0 ? void 0 : ref.map(function(tweet) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: tweet.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: tweet.contents\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, tweet.id, true, {\n                        fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Metanet\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n}, \"DlYsyJbD4mAfAYN3eAYOfSa+Y3I=\", false, function() {\n    return [\n        _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _lib_client_useUser__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZ0I7QUFDakI7QUFDMkI7QUFDUjs7QUFrQjVDLCtEQUFlLGNBQ2Y7O1FBeUJTSyxHQUFZOztJQXhCbkIsSUFBZ0JGLElBQStCLGtCQUEvQkEsbUVBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUF4Q0csS0FBSyxHQUFJSCxJQUErQixHQUFuQztJQUNaLElBQU0sSUFBTSxHQUFLRCwrQ0FBTSxDQUFnQixhQUFhLENBQUMsQ0FBN0NHLElBQUk7SUFDWixJQUFXRCxJQUFTLEdBQVRBLCtEQUFPLEVBQUUsRUFBZCxJQUFjLEdBQVRBLElBQVMsWUFBVEEsSUFBUyx3REFBWjtJQUNSLElBQWlDSCxJQUFvQixHQUFwQkEsd0RBQU8sRUFBYSxFQUE5Q00sUUFBUSxHQUFrQk4sSUFBb0IsQ0FBOUNNLFFBQVEsRUFBRUMsWUFBWSxHQUFJUCxJQUFvQixDQUFwQ08sWUFBWTtJQUM3QixJQUFNQyxPQUFPLEdBQUcsU0FBQ0MsU0FBbUIsRUFBSztRQUN2Q0osS0FBSyxDQUFDSSxTQUFTLENBQUMsQ0FBQztLQUNsQjtJQUNELHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxTQUFPOzs7OztxQkFBSzswQkFDaEIsOERBQUNELEtBQUc7Z0JBQUNFLFNBQVMsRUFBQyw0QkFBNEI7MEJBQ3pDLDRFQUFDQyxNQUFJO29CQUFDQyxRQUFRLEVBQUVQLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO29CQUFFSSxTQUFTLEVBQUMscUJBQXFCOztzQ0FDcEUsOERBQUNGLEtBQUc7NEJBQUNFLFNBQVMsRUFBQyxlQUFlOzs4Q0FDNUIsOERBQUNHLE1BQUk7OENBQUMsT0FBSzs7Ozs7eUNBQU87OENBQ2xCLDhEQUFDQyxPQUFLLG9CQUFLVixRQUFRLENBQUMsT0FBTyxDQUFDO29DQUFFTSxTQUFTLEVBQUMsUUFBUTs7Ozs7eUNBQUc7Ozs7OztpQ0FDL0M7c0NBQ04sOERBQUNGLEtBQUc7NEJBQUNFLFNBQVMsRUFBQyxlQUFlOzs4Q0FDNUIsOERBQUNHLE1BQUk7OENBQUMsVUFBUTs7Ozs7eUNBQU87OENBQ3JCLDhEQUFDRSxVQUFRLG9CQUFLWCxRQUFRLENBQUMsVUFBVSxDQUFDO29DQUFFTSxTQUFTLEVBQUMsUUFBUTs7Ozs7eUNBQUU7Ozs7OztpQ0FDcEQ7c0NBQ04sOERBQUNNLFFBQU07NEJBQUNOLFNBQVMsRUFBQyxrQkFBa0I7c0NBQUMsT0FBSzs7Ozs7aUNBQVM7Ozs7Ozt5QkFDOUM7Ozs7O3FCQUNIOzBCQUNOLDhEQUFDRixLQUFHOzBCQUNETixJQUFJLGFBQUpBLElBQUksV0FBUSxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLENBQUFBLEdBQVksR0FBWkEsSUFBSSxDQUFFZSxNQUFNLGNBQVpmLEdBQVksY0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxHQUFZLENBQUVnQixHQUFHLENBQUMsU0FBQ0MsS0FBSzt5Q0FDdkIsOERBQUNYLEtBQUc7OzBDQUNGLDhEQUFDSyxNQUFJOzBDQUFFTSxLQUFLLENBQUNDLEtBQUs7Ozs7O3NDQUFROzBDQUMxQiw4REFBQ1AsTUFBSTswQ0FBRU0sS0FBSyxDQUFDRSxRQUFROzs7OztzQ0FBUTs7dUJBRnJCRixLQUFLLENBQUNHLEVBQUU7Ozs7OEJBR1o7aUJBQ1AsQ0FBQzs7Ozs7cUJBQ0U7Ozs7OzthQUNGLENBQ1Q7Q0FBQzs7UUFoQ2dCdEIsK0RBQVc7UUFDVkQsMkNBQU07UUFDWkUsMkRBQU87UUFDZUgsb0RBQU87O0lBNkJ2QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgdXNlTXV0YXRpb24gZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlTXV0YXRpb25cIjtcbmltcG9ydCB1c2VVc2VyIGZyb20gXCIuLi9saWIvY2xpZW50L3VzZVVzZXJcIjtcblxuaW50ZXJmYWNlIEVudGVyRm9ybSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnRzOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUd2VldCB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnRzOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUd2VldHNSZXNwb25lIHtcbiAgb2s6IGJvb2xlYW47XG4gIHR3ZWV0czogVHdlZXRbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gXG57XG4gIGNvbnN0IFt3cml0ZV0gPSB1c2VNdXRhdGlvbihcIi9hcGkvdHdlZXQvd3JpdGVcIik7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSPFR3ZWV0c1Jlc3BvbmU+KFwiL2FwaS90d2VldHNcIik7XG4gIGNvbnN0IHt9ID0gdXNlVXNlcigpO1xuICBjb25zdCB7cmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdH0gPSB1c2VGb3JtPEVudGVyRm9ybT4oKTtcbiAgY29uc3Qgb25WYWxpZCA9ICh2YWxpZEZvcm06RW50ZXJGb3JtKSA9PiB7XG4gICAgd3JpdGUodmFsaWRGb3JtKTtcbiAgfVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ud2VldGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj4gICAgICBcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblZhbGlkKX0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTEvM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPHNwYW4+dGl0bGU8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCd0aXRsZScpfSBjbGFzc05hbWU9XCJib3JkZXJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPHNwYW4+Y29udGVudHM8L3NwYW4+XG4gICAgICAgICAgICA8dGV4dGFyZWEgey4uLnJlZ2lzdGVyKCdjb250ZW50cycpfSBjbGFzc05hbWU9XCJib3JkZXJcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTMwMCBtdC0yXCI+V3JpdGU8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZGF0YT8udHdlZXRzPy5tYXAoKHR3ZWV0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3R3ZWV0LmlkfT4gICAgICAgICAgXG4gICAgICAgICAgICA8c3Bhbj57dHdlZXQudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e3R3ZWV0LmNvbnRlbnRzfTwvc3Bhbj4gIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKX07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VGb3JtIiwidXNlU1dSIiwidXNlTXV0YXRpb24iLCJ1c2VVc2VyIiwiZGF0YSIsIndyaXRlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJvblZhbGlkIiwidmFsaWRGb3JtIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJzcGFuIiwiaW5wdXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsInR3ZWV0cyIsIm1hcCIsInR3ZWV0IiwidGl0bGUiLCJjb250ZW50cyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});