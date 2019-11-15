webpackHotUpdate("bundle",{

/***/ "./src/shared/store/index.js":
/*!***********************************!*\
  !*** ./src/shared/store/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\n\nvar reducer = function reducer(state, action) {\n  return {\n    loggedIn: true\n  };\n};\n\nfunction configureStore() {\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var extraParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"].withExtraArgument(extraParams));\n\n  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {\n    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(enhancer);\n  }\n\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, initialState, enhancer);\n  return store;\n}\n\n//# sourceURL=webpack:///./src/shared/store/index.js?");

/***/ })

})