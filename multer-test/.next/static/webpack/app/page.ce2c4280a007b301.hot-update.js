"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// \"use client\";\n// import axios from \"axios\";\n// import { Fragment, useState } from \"react\";\n// export default function Home() {\n//   const [data, setData] = useState<any>({\n//     name: \"\",\n//     dob: \"\",\n//     img: \"\",\n//   });\n//   console.log(\"data: \", data);\n//   const HandleSubmit = async (e: any) => {\n//     e.preventDefault();\n//     const formData = new FormData();\n//     formData.append(\"img\", data.img);\n//     formData.append(\"name\", data.name);\n//     formData.append(\"dob\", data.dob);\n//     try {\n//       const response = axios.post(\"http://localhost:1337\", formData);\n//       console.log(\"response: \", response);\n//     } catch (error) {\n//       console.log(\"error: \", error);\n//     }\n//   };\n//   return (\n//     <form onSubmit={HandleSubmit} className=\"\">\n//       <input\n//         type=\"file\"\n//         accept=\".png, .jpg, .jpeg\"\n//         onChange={(e: any) =>\n//           setData((prev: any) => ({ ...prev, img: e.target.files[0] }))\n//         }\n//         name=\"img\"\n//         id=\"img\"\n//       />\n//       {[\"name\", \"dob\"].map((item: any) => (\n//         <Fragment key={item}>\n//           <label htmlFor={item}>{item}</label>\n//           <input\n//             type=\"text\"\n//             name={item}\n//             className=\"text-black\"\n//             onChange={(e: any) => {\n//               setData((prev: any) => ({\n//                 ...prev,\n//                 [e.target.name]: e.target.value,\n//               }));\n//             }}\n//             id={item}\n//           />\n//         </Fragment>\n//       ))}\n//       <button>Click</button>\n//     </form>\n//   );\n// }\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Page() {\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const HanleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"image: \", image);\n        const formData = new FormData();\n        formData.append(\"image\", image);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost1337/upload-image\", formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            console.log(\"res: \", res);\n        } catch (error) {\n            console.log(\"error: \", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: HanleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    name: \"file\",\n                    id: \"file\",\n                    accept: \"image/*\",\n                    onChange: (e)=>{\n                        console.log(\"sagar\");\n                        setImage(e.target.files[0]);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sagar\\\\Desktop\\\\Code Arena\\\\multer\\\\multer-test\\\\app\\\\page.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border\",\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sagar\\\\Desktop\\\\Code Arena\\\\multer\\\\multer-test\\\\app\\\\page.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Sagar\\\\Desktop\\\\Code Arena\\\\multer\\\\multer-test\\\\app\\\\page.tsx\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sagar\\\\Desktop\\\\Code Arena\\\\multer\\\\multer-test\\\\app\\\\page.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"rw6qng99rwBYv/BMRhLONeRFue4=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGdCQUFnQjtBQUNoQiw2QkFBNkI7QUFDN0IsOENBQThDO0FBRTlDLG1DQUFtQztBQUNuQyw0Q0FBNEM7QUFDNUMsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixlQUFlO0FBQ2YsUUFBUTtBQUNSLGlDQUFpQztBQUVqQyw2Q0FBNkM7QUFDN0MsMEJBQTBCO0FBRTFCLHVDQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEMsMENBQTBDO0FBQzFDLHdDQUF3QztBQUV4QyxZQUFZO0FBQ1osd0VBQXdFO0FBQ3hFLDZDQUE2QztBQUM3Qyx3QkFBd0I7QUFDeEIsdUNBQXVDO0FBQ3ZDLFFBQVE7QUFDUixPQUFPO0FBRVAsYUFBYTtBQUNiLGtEQUFrRDtBQUNsRCxlQUFlO0FBQ2Ysc0JBQXNCO0FBQ3RCLHFDQUFxQztBQUNyQyxnQ0FBZ0M7QUFDaEMsMEVBQTBFO0FBQzFFLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLFdBQVc7QUFFWCw4Q0FBOEM7QUFDOUMsZ0NBQWdDO0FBQ2hDLGlEQUFpRDtBQUNqRCxtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQixxQ0FBcUM7QUFDckMsc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQywyQkFBMkI7QUFDM0IsbURBQW1EO0FBQ25ELHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZixzQkFBc0I7QUFDdEIsWUFBWTtBQUNaLCtCQUErQjtBQUMvQixjQUFjO0FBQ2QsT0FBTztBQUNQLElBQUk7OztBQUVzQjtBQUNjO0FBRXpCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBO0lBRWxDLE1BQU1JLGNBQWMsT0FBT0M7UUFDekJBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXTjtRQUN2QixNQUFNTyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU1Q7UUFFekIsSUFBSTtZQUNGLE1BQU1VLE1BQU0sTUFBTWQsNkNBQUtBLENBQUNlLElBQUksQ0FBQyxxQ0FBcUNKLFVBQVU7Z0JBQzFFSyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBc0I7WUFDbkQ7WUFDQVAsUUFBUUMsR0FBRyxDQUFDLFNBQVNJO1FBQ3ZCLEVBQUUsT0FBT0csT0FBTztZQUNkUixRQUFRQyxHQUFHLENBQUMsV0FBV087UUFDekI7SUFDRjtJQUNBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFBS0MsVUFBVWQ7OzhCQUNkLDhEQUFDZTtvQkFDQ0MsTUFBSztvQkFDTEMsTUFBSztvQkFDTEMsSUFBRztvQkFDSEMsUUFBTztvQkFDUEMsVUFBVSxDQUFDbkI7d0JBQ1RFLFFBQVFDLEdBQUcsQ0FBQzt3QkFDWkwsU0FBU0UsRUFBRW9CLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7b0JBQzVCOzs7Ozs7OEJBRUYsOERBQUNDO29CQUFPQyxXQUFVO29CQUFTUixNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRDtHQXJDd0JuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBjbGllbnRcIjtcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuLy8gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KHtcbi8vICAgICBuYW1lOiBcIlwiLFxuLy8gICAgIGRvYjogXCJcIixcbi8vICAgICBpbWc6IFwiXCIsXG4vLyAgIH0pO1xuLy8gICBjb25zb2xlLmxvZyhcImRhdGE6IFwiLCBkYXRhKTtcblxuLy8gICBjb25zdCBIYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogYW55KSA9PiB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4vLyAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbi8vICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWdcIiwgZGF0YS5pbWcpO1xuLy8gICAgIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgZGF0YS5uYW1lKTtcbi8vICAgICBmb3JtRGF0YS5hcHBlbmQoXCJkb2JcIiwgZGF0YS5kb2IpO1xuXG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiLCBmb3JtRGF0YSk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xuLy8gICAgIH1cbi8vICAgfTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxmb3JtIG9uU3VibWl0PXtIYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIlwiPlxuLy8gICAgICAgPGlucHV0XG4vLyAgICAgICAgIHR5cGU9XCJmaWxlXCJcbi8vICAgICAgICAgYWNjZXB0PVwiLnBuZywgLmpwZywgLmpwZWdcIlxuLy8gICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT5cbi8vICAgICAgICAgICBzZXREYXRhKChwcmV2OiBhbnkpID0+ICh7IC4uLnByZXYsIGltZzogZS50YXJnZXQuZmlsZXNbMF0gfSkpXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgbmFtZT1cImltZ1wiXG4vLyAgICAgICAgIGlkPVwiaW1nXCJcbi8vICAgICAgIC8+XG5cbi8vICAgICAgIHtbXCJuYW1lXCIsIFwiZG9iXCJdLm1hcCgoaXRlbTogYW55KSA9PiAoXG4vLyAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l0ZW19PlxuLy8gICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpdGVtfT57aXRlbX08L2xhYmVsPlxuLy8gICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuLy8gICAgICAgICAgICAgbmFtZT17aXRlbX1cbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIlxuLy8gICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHtcbi8vICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldjogYW55KSA9PiAoe1xuLy8gICAgICAgICAgICAgICAgIC4uLnByZXYsXG4vLyAgICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbi8vICAgICAgICAgICAgICAgfSkpO1xuLy8gICAgICAgICAgICAgfX1cbi8vICAgICAgICAgICAgIGlkPXtpdGVtfVxuLy8gICAgICAgICAgIC8+XG4vLyAgICAgICAgIDwvRnJhZ21lbnQ+XG4vLyAgICAgICApKX1cbi8vICAgICAgIDxidXR0b24+Q2xpY2s8L2J1dHRvbj5cbi8vICAgICA8L2Zvcm0+XG4vLyAgICk7XG4vLyB9XG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlPGFueT4oKTtcblxuICBjb25zdCBIYW5sZVN1Ym1pdCA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJpbWFnZTogXCIsIGltYWdlKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDEzMzcvdXBsb2FkLWltYWdlXCIsIGZvcm1EYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJyZXM6IFwiLCByZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e0hhbmxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgICBpZD1cImZpbGVcIlxuICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhZ2FyXCIpO1xuICAgICAgICAgICAgc2V0SW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJQYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsIkhhbmxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXMiLCJwb3N0IiwiaGVhZGVycyIsImVycm9yIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJmaWxlcyIsImJ1dHRvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});