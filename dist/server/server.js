/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8501/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./paths.js":
/*!******************!*\
  !*** ./paths.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst appDirectory = fs.realpathSync(process.cwd());\n\nconst getPathFromRoot = relativePath => path.resolve(appDirectory, relativePath);\n\nvar pathList = {\n  srcClient: getPathFromRoot('./src/client'),\n  srcShared: getPathFromRoot('./src/shared'),\n  srcServer: getPathFromRoot('./src/server'),\n  buildServer: getPathFromRoot('./dist/server'),\n  src: getPathFromRoot('./src'),\n  dist: getPathFromRoot('./dist'),\n  stats: getPathFromRoot('dist/loadable-stats.json'),\n  publicPath: '/',\n  prodPublicPath: '/static/' // assets: getPathFromRoot('./src/assets')\n\n};\nmodule.exports = pathList;\n\n//# sourceURL=webpack:///./paths.js?");

/***/ }),

/***/ "./src/server/HTML.js":
/*!****************************!*\
  !*** ./src/server/HTML.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);\n// @flow\n\n\n\nconst HTML = ({\n  children,\n  header\n}) => {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"html\", {\n    lang: \"en\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"head\", null, header, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://rawgit.com/arqex/react-datetime/master/css/react-datetime.css\"\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"body\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n    id: \"app\",\n    className: \"app\",\n    dangerouslySetInnerHTML: {\n      __html: children\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"script\", {\n    dangerouslySetInnerHTML: {\n      __html: `window.__INITIAL_STATE__ = __STATE__`\n    }\n  }), \"__SCRIPTS__\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HTML);\n\n//# sourceURL=webpack:///./src/server/HTML.js?");

/***/ }),

/***/ "./src/server/cookieParser.js":
/*!************************************!*\
  !*** ./src/server/cookieParser.js ***!
  \************************************/
/*! exports provided: cookieOptions, parse, getCookieHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cookieOptions\", function() { return cookieOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parse\", function() { return parse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCookieHelpers\", function() { return getCookieHelpers; });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction cookieOptions(time) {\n  const options = {\n    path: '/',\n    domain: `localhost`\n  };\n\n  if (time) {\n    options.expires = new Date(Date.now() + time * 86400000);\n  }\n\n  return options;\n}\nfunction parse(val) {\n  if (typeof val === 'string') {\n    let jsonCookie = false;\n\n    try {\n      // removing j: for express JSON cookies\n      val = JSON.parse(val.replace(/j:/, ''));\n      jsonCookie = true;\n    } catch (e) {}\n\n    if (!jsonCookie) {\n      const parsedCookieObj = cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(val);\n      val = Object.keys(parsedCookieObj).length ? parsedCookieObj : val;\n    }\n  }\n\n  return val;\n}\nfunction getCookieHelpers(req, res) {\n  return {\n    setCookie: (key, val, opts = {}) => {\n      res.cookie(key, val, { ...cookieOptions(),\n        ...opts\n      });\n      res.locals.cookies[key] = parse(val);\n    },\n    clearCookie: key => {\n      res.clearCookie(key);\n      res.locals.cookies[key] = null;\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/server/cookieParser.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render */ \"./src/server/render.js\");\n/* harmony import */ var _registerServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerServer */ \"./src/server/registerServer.js\");\n/* harmony import */ var shared_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/store */ \"./src/shared/store/index.js\");\n/* harmony import */ var server_cookieParser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! server/cookieParser */ \"./src/server/cookieParser.js\");\n/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../paths */ \"./paths.js\");\n/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_paths__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nObject(_registerServer__WEBPACK_IMPORTED_MODULE_6__[\"registerToFirebase\"])();\napp.use(_paths__WEBPACK_IMPORTED_MODULE_9___default.a.prodPublicPath, express__WEBPACK_IMPORTED_MODULE_1___default.a.static(_paths__WEBPACK_IMPORTED_MODULE_9___default.a.dist));\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use((req, res, next) => {\n  cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()()(req, res, () => {\n    const cookies = { ...req.cookies\n    };\n    Object.keys(cookies).forEach(key => {\n      cookies[key] = Object(server_cookieParser__WEBPACK_IMPORTED_MODULE_8__[\"parse\"])(cookies[key]);\n    });\n    res.locals.cookies = cookies;\n    next();\n  });\n});\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  extended: true\n}));\napp.use((req, res, next) => {\n  const helpers = {};\n  res.locals.helpers = helpers;\n  res.locals.store = Object(shared_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, helpers);\n  next();\n});\napp.use((req, res, next) => {\n  const {\n    locals: {\n      store,\n      helpers,\n      cookies\n    }\n  } = res;\n  const {\n    setCookie,\n    clearCookie\n  } = Object(server_cookieParser__WEBPACK_IMPORTED_MODULE_8__[\"getCookieHelpers\"])(req, res);\n\n  helpers.setCookie = (key, val, opts) => {\n    if (res.headersSent) {\n      return;\n    }\n\n    setCookie(key, val, opts); // check if opts are required\n\n    store.dispatch({\n      type: 'SET_COOKIE',\n      payload: {\n        key,\n        val: Object(server_cookieParser__WEBPACK_IMPORTED_MODULE_8__[\"parse\"])(val),\n        opts\n      }\n    });\n  };\n\n  helpers.clearCookie = key => {\n    if (res.headersSent) {\n      return;\n    }\n\n    clearCookie(key);\n    store.dispatch({\n      type: 'CLEAR_COOKIE',\n      payload: {\n        key\n      }\n    });\n  };\n\n  store.dispatch({\n    type: 'SET_COOKIES',\n    payload: cookies\n  });\n  next();\n});\napp.use(_render__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nlet port = process.env.PORT || 8500;\napp.listen(port, () => {\n  console.log(`Server started on PORT ${port}`);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/registerServer.js":
/*!**************************************!*\
  !*** ./src/server/registerServer.js ***!
  \**************************************/
/*! exports provided: registerToFirebase, checkLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerToFirebase\", function() { return registerToFirebase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkLogin\", function() { return checkLogin; });\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n\nconst registerToFirebase = () => {\n  console.log(\"initailaizing firebase admin\");\n  firebase_admin__WEBPACK_IMPORTED_MODULE_0__[\"initializeApp\"]({\n    credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0__[\"credential\"].applicationDefault(),\n    databaseURL: 'https://tasklist-2be89.firebaseio.com'\n  });\n};\nconst checkLogin = () => (dispatch, getState) => {\n  const {\n    cookies: {\n      token\n    }\n  } = getState();\n\n  if (!token) {\n    return Promise.resolve({});\n  } else {\n    dispatch({\n      type: 'LOGIN',\n      payload: {\n        loggedIn: true\n      }\n    });\n  } // else {\n  //   return admin.auth().verifyIdToken(token).then((decodedToken) => {\n  //     console.log(\"token verifies\", decodedToken.uid)\n  //     dispatch({ type: 'LOGIN', payload: { loggedIn: true } })\n  //   }).catch((error) => {\n  //     console.log(\"error\", error)\n  //     dispatch({ type: 'LOGIN', payload: { loggedIn: false } })\n  //   })\n  // }\n\n};\n\n//# sourceURL=webpack:///./src/server/registerServer.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../paths */ \"./paths.js\");\n/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_paths__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var shared_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/App */ \"./src/shared/App.js\");\n/* harmony import */ var _HTML__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HTML */ \"./src/server/HTML.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _registerServer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registerServer */ \"./src/server/registerServer.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res, next) => {\n  const store = res.locals.store;\n  await store.dispatch(Object(_registerServer__WEBPACK_IMPORTED_MODULE_8__[\"checkLogin\"])());\n  const routerContext = {};\n  const extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_3__[\"ChunkExtractor\"]({\n    statsFile: _paths__WEBPACK_IMPORTED_MODULE_4___default.a.stats,\n    entrypoints: ['bundle']\n  });\n  const appContainer = extractor.collectChunks(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"Provider\"], {\n    store: res.locals.store\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.url,\n    context: routerContext\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(shared_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))));\n  const content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(appContainer);\n  const scriptTags = extractor.getScriptTags();\n  const state = res.locals.store.getState();\n  return res.send('<!doctype html>' + Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_HTML__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, content)).replace('__STATE__', JSON.stringify(state).replace(/</g, '\\\\u003c')).replace('__SCRIPTS__', scriptTags));\n});\n\n//# sourceURL=webpack:///./src/server/render.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect */ \"./src/shared/connect.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Login */ \"./src/shared/components/Login.js\");\n/* harmony import */ var _components_AddItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AddItem */ \"./src/shared/components/AddItem.js\");\n/* harmony import */ var _components_Report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Report */ \"./src/shared/components/Report.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Header */ \"./src/shared/components/Header.js\");\n/* harmony import */ var src_shared_components_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/components/style */ \"./src/shared/components/style.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst projectList = [{\n  key: 'project1',\n  label: 'project 1'\n}, {\n  key: 'project2',\n  label: 'project 2'\n}, {\n  key: 'project3',\n  label: 'project 3'\n}];\n\nconst App = ({\n  loggedIn\n}) => {\n  const [showReport, setShowReport] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  if (!loggedIn) {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(src_shared_components_style__WEBPACK_IMPORTED_MODULE_6__[\"Core\"], null));\n  }\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: show => setShowReport(show)\n  }), !showReport && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_AddItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    projectList: projectList\n  }), showReport && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Report__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(src_shared_components_style__WEBPACK_IMPORTED_MODULE_6__[\"Core\"], null));\n};\n\nconst props = ({\n  auth: {\n    loggedIn\n  }\n}) => ({\n  loggedIn\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  props\n})(App));\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/actions/auth.js":
/*!************************************!*\
  !*** ./src/shared/actions/auth.js ***!
  \************************************/
/*! exports provided: login, register, signOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signOut\", function() { return signOut; });\n/* harmony import */ var shared_configureFirebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/configureFirebase */ \"./src/shared/configureFirebase.js\");\n\nconst login = (email, password) => (dispatch, getState, {\n  setCookie\n}) => {\n  return shared_configureFirebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth().signInWithEmailAndPassword(email, password).then(user => {\n    dispatch({\n      type: 'LOGIN',\n      payload: {\n        loggedIn: true\n      }\n    });\n    return shared_configureFirebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth().currentUser.getIdToken().then(token => {\n      // dispatch({ type: 'TOKEN_RETRIVED_SUCCESS', payload: { token } })\n      setCookie('token', token);\n    }).catch(error => {});\n  }).catch(error => {\n    let errorMessage;\n\n    switch (error.code) {\n      case 'auth/weak-password':\n        errorMessage = 'The password is too weak.';\n        break;\n\n      default:\n        errorMessage = error.message;\n    }\n\n    dispatch({\n      type: 'LOGIN_FAILED',\n      payload: {\n        errorMessage\n      }\n    });\n  });\n};\nconst register = (email, password) => dispatch => {\n  return shared_configureFirebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth().createUserWithEmailAndPassword(email, password).then(() => {\n    dispatch({\n      type: 'REGISTER_SUCCESS',\n      payload: {\n        errorMessage: ''\n      }\n    });\n    return 'success';\n  }).catch(error => {\n    let errorMessage;\n\n    switch (error.code) {\n      case 'auth/weak-password':\n        errorMessage = 'The password is too weak.';\n        break;\n\n      default:\n        errorMessage = error.message;\n    }\n\n    dispatch({\n      type: 'REGISTER_FAILED',\n      payload: {\n        errorMessage\n      }\n    });\n  });\n};\nconst signOut = () => (dispatch, getState, {\n  clearCookie\n}) => {\n  console.log(\"helper\", clearCookie);\n  return shared_configureFirebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth().signOut().then(() => {\n    clearCookie('token');\n    dispatch({\n      type: 'LOGIN',\n      payload: {\n        loggedIn: false\n      }\n    });\n  }).catch(() => {\n    dispatch({\n      type: 'SIGNOUT_FAILED',\n      payload: {\n        errorMessage: 'Failed to Signout'\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/shared/actions/auth.js?");

/***/ }),

/***/ "./src/shared/actions/task.js":
/*!************************************!*\
  !*** ./src/shared/actions/task.js ***!
  \************************************/
/*! exports provided: createEntry, fetchList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEntry\", function() { return createEntry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchList\", function() { return fetchList; });\n/* harmony import */ var shared_configureFirebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/configureFirebase */ \"./src/shared/configureFirebase.js\");\n\nconst createEntry = ({\n  name,\n  project,\n  startTime,\n  endTime\n}) => dispatch => {\n  var userId = shared_configureFirebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth().currentUser.uid;\n  return shared_configureFirebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].database().ref('entries/' + userId).push().set({\n    taskName: name,\n    project,\n    startTime,\n    endTime\n  }).then(success => {\n    console.log('sucess', success);\n  }).catch(error => {\n    console.log('failed to create an entry');\n  });\n};\nconst fetchList = () => dispatch => {\n  var userId = shared_configureFirebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth().currentUser.uid;\n  const ref = shared_configureFirebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].database().ref('entries/' + userId);\n  return new Promise((resolve, reject) => {\n    ref.once('value', snapshot => {\n      let entries = {};\n      snapshot.forEach(childSnapshot => {\n        var childKey = childSnapshot.key;\n        var childData = childSnapshot.val();\n        childData.startTime = new Date(childData.startTime);\n        childData.endTime = new Date(childData.endTime);\n        entries[childKey] = childData;\n      });\n      console.log(\"@@@@@@@@@\", entries);\n      dispatch({\n        type: 'TASKLIST',\n        payload: entries\n      });\n      resolve(entries);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/shared/actions/task.js?");

/***/ }),

/***/ "./src/shared/components/AddItem.js":
/*!******************************************!*\
  !*** ./src/shared/components/AddItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shared_actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/actions/auth */ \"./src/shared/actions/auth.js\");\n/* harmony import */ var shared_actions_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/actions/task */ \"./src/shared/actions/task.js\");\n/* harmony import */ var shared_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/connect */ \"./src/shared/connect.js\");\n/* harmony import */ var _PrintTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrintTask */ \"./src/shared/components/PrintTask.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst AddItem = ({\n  signOut,\n  createEntry,\n  projectList\n}) => {\n  const [{\n    name = '',\n    project = '',\n    started = false\n  }, set] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [{\n    startTime,\n    count = 0\n  }, setTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [taskList, setTaskList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  const setTaskData = (field, value) => {\n    set(prev => ({ ...prev,\n      [field]: value\n    }));\n  };\n\n  const start = () => {\n    setTaskData('started', true);\n    setTime({\n      startTime: new Date().getTime(),\n      count: 0\n    });\n    ref.current = setInterval(() => {\n      setTime(({\n        startTime,\n        count = 0\n      }) => ({\n        startTime,\n        count: count + 1\n      }));\n    }, 1000);\n  };\n\n  const makeEntry = task => {\n    setTaskList(prev => [...prev, task]);\n    createEntry(task);\n  };\n\n  const stop = () => {\n    const endTime = new Date().getTime();\n    setTaskData('started', false);\n    clearInterval(ref.current);\n    makeEntry({\n      name,\n      project,\n      startTime,\n      endTime\n    });\n  };\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\", {\n    onClick: () => {\n      signOut();\n    }\n  }, \"sign out\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"input\", {\n    type: \"text\",\n    onChange: ({\n      target: {\n        value\n      }\n    }) => setTaskData('name', value),\n    placeholder: \"add item name\",\n    value: name\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"select\", {\n    value: project,\n    onChange: ({\n      target: {\n        value\n      }\n    }) => setTaskData('project', value)\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"option\", {\n    value: \"\"\n  }, \"Select\"), projectList.map(({\n    key,\n    label\n  }) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"option\", {\n    value: key,\n    key: key\n  }, label))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\", null, \"Timer: \", count), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"button\", {\n    onClick: started ? stop : start\n  }, started ? 'stop' : 'start'), taskList && !!taskList.length && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_PrintTask__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    taskList: taskList\n  }));\n};\n\nconst props = () => ({});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(shared_connect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  props,\n  actions: {\n    signOut: shared_actions_auth__WEBPACK_IMPORTED_MODULE_1__[\"signOut\"],\n    createEntry: shared_actions_task__WEBPACK_IMPORTED_MODULE_2__[\"createEntry\"]\n  }\n})(AddItem));\n\n//# sourceURL=webpack:///./src/shared/components/AddItem.js?");

/***/ }),

/***/ "./src/shared/components/Header.js":
/*!*****************************************!*\
  !*** ./src/shared/components/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_shared_components_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/components/style */ \"./src/shared/components/style.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Header = ({\n  onClick,\n  children\n}) => {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"header\", {\n    css: src_shared_components_style__WEBPACK_IMPORTED_MODULE_1__[\"headerContainer\"]\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\", {\n    css: src_shared_components_style__WEBPACK_IMPORTED_MODULE_1__[\"title\"]\n  }, \"Time Entry App\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\", {\n    css: src_shared_components_style__WEBPACK_IMPORTED_MODULE_1__[\"btnCont\"]\n  }, children, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"button\", {\n    onClick: () => onClick(false)\n  }, \"Add Task\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"button\", {\n    onClick: () => onClick(true)\n  }, \"View Task\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/shared/components/Header.js?");

/***/ }),

/***/ "./src/shared/components/Login.js":
/*!****************************************!*\
  !*** ./src/shared/components/Login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shared_actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/actions/auth */ \"./src/shared/actions/auth.js\");\n/* harmony import */ var shared_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/connect */ \"./src/shared/connect.js\");\n/* harmony import */ var src_shared_components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/components/Header */ \"./src/shared/components/Header.js\");\n/* harmony import */ var src_shared_components_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/components/style */ \"./src/shared/components/style.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst SCREEN = {\n  REGISTER: 'register',\n  LOGIN: 'login'\n};\n\nconst AuthComponent = ({\n  login,\n  register,\n  errorMessage\n}) => {\n  const [{\n    email = '',\n    password = ''\n  }, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [screen, setScreen] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(SCREEN.REGISTER);\n\n  function onChange(field, value) {\n    setState(prev => ({ ...prev,\n      [field]: value\n    }));\n  }\n\n  function onSubmit() {\n    if (screen === SCREEN.LOGIN) {\n      login(email, password);\n    } else {\n      register(email, password).then(status => {\n        if (status === 'success') {\n          changeScreen();\n        }\n      });\n    }\n  }\n\n  function changeScreen() {\n    let newScreen;\n    newScreen = screen === SCREEN.REGISTER ? SCREEN.LOGIN : SCREEN.REGISTER;\n    setScreen(newScreen);\n  }\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(src_shared_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"button\", {\n    onClick: () => changeScreen()\n  }, \"Login\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"button\", {\n    onClick: () => changeScreen()\n  }, \"Register\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\", {\n    css: src_shared_components_style__WEBPACK_IMPORTED_MODULE_4__[\"loginContainer\"]\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"label\", null, \"Email\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"input\", {\n    type: \"email\",\n    onChange: ({\n      target: {\n        value\n      }\n    }) => onChange('email', value),\n    value: email\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"label\", null, \"Password\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"input\", {\n    type: \"password\",\n    onChange: ({\n      target: {\n        value\n      }\n    }) => onChange('password', value),\n    value: password\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"button\", {\n    css: src_shared_components_style__WEBPACK_IMPORTED_MODULE_4__[\"loginBtn\"],\n    onClick: () => onSubmit()\n  }, screen), errorMessage && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"span\", null, errorMessage)));\n};\n\nconst props = ({\n  auth: {\n    errorMessage\n  }\n}) => ({\n  errorMessage\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(shared_connect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n  props,\n  actions: {\n    login: shared_actions_auth__WEBPACK_IMPORTED_MODULE_1__[\"login\"],\n    register: shared_actions_auth__WEBPACK_IMPORTED_MODULE_1__[\"register\"]\n  }\n})(AuthComponent));\n\n//# sourceURL=webpack:///./src/shared/components/Login.js?");

/***/ }),

/***/ "./src/shared/components/PrintTask.js":
/*!********************************************!*\
  !*** ./src/shared/components/PrintTask.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst PrintTask = ({\n  taskList\n}) => {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"table\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"tbody\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"tr\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"th\", null, \" Task Name\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"th\", null, \" Project Name\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"th\", null, \" Start Time\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"th\", null, \" End Time\")), taskList.map(({\n    name,\n    project,\n    startTime,\n    endTime\n  }) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"tr\", {\n    key: startTime\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"td\", null, name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"td\", null, project), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"td\", null, new Date(startTime).toLocaleString()), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"td\", null, new Date(endTime).toLocaleString()))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrintTask);\n\n//# sourceURL=webpack:///./src/shared/components/PrintTask.js?");

/***/ }),

/***/ "./src/shared/components/Report.js":
/*!*****************************************!*\
  !*** ./src/shared/components/Report.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shared_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/connect */ \"./src/shared/connect.js\");\n/* harmony import */ var _TaskFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskFilter */ \"./src/shared/components/TaskFilter.js\");\n/* harmony import */ var shared_actions_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/actions/task */ \"./src/shared/actions/task.js\");\n/* harmony import */ var _PrintTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrintTask */ \"./src/shared/components/PrintTask.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst Report = ({\n  fetchList\n}) => {\n  const [task, setTask] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n\n  const onSubmit = (startTime, endTime) => {\n    fetchList().then(entries => {\n      let filteredList = Object.values(entries).map(item => {\n        return {\n          name: item.taskName,\n          project: item.project,\n          startTime: item.startTime && new Date(item.startTime).getTime(),\n          endTime: item.endTime && new Date(item.endTime).getTime()\n        };\n      }).filter(item => {\n        return item.startTime && item.startTime > startTime && item.endTime && item.endTime < endTime;\n      });\n      console.log(\"!!!!!!!!\", filteredList);\n      setTask(filteredList);\n    });\n  };\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_TaskFilter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    submit: (stateDate, endDate) => onSubmit(stateDate, endDate)\n  }), task && !!task.length && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_PrintTask__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    taskList: task\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(shared_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  actions: {\n    fetchList: shared_actions_task__WEBPACK_IMPORTED_MODULE_3__[\"fetchList\"]\n  }\n})(Report));\n\n//# sourceURL=webpack:///./src/shared/components/Report.js?");

/***/ }),

/***/ "./src/shared/components/TaskFilter.js":
/*!*********************************************!*\
  !*** ./src/shared/components/TaskFilter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datetime */ \"react-datetime\");\n/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst getStartDate = () => {\n  let startDate = new Date();\n  startDate.setDate(startDate.getDate() - 7);\n  startDate.setHours(0, 0, 0);\n  return startDate;\n};\n\nconst ReportFilter = ({\n  submit\n}) => {\n  const [{\n    startDate,\n    endDate\n  }, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    startDate: getStartDate(),\n    endDate: new Date()\n  });\n\n  const handleStartDateChange = date => {\n    setState(prev => ({ ...prev,\n      startDate: date\n    }));\n  };\n\n  const handleEndDateChange = date => {\n    if (date > startDate) {\n      setState(prev => ({ ...prev,\n        endDate: date\n      }));\n    }\n  };\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\", {\n    className: \"report-filter\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\", {\n    className: \"row\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react_datetime__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    inputProps: {\n      placeholder: 'Start date'\n    },\n    onChange: date => handleStartDateChange(date.valueOf())\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react_datetime__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    inputProps: {\n      placeholder: 'End date'\n    },\n    onChange: date => handleEndDateChange(date.valueOf())\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"button\", {\n    onClick: () => submit(startDate, endDate)\n  }, \"Fetch Tasks\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReportFilter);\n\n//# sourceURL=webpack:///./src/shared/components/TaskFilter.js?");

/***/ }),

/***/ "./src/shared/components/style.js":
/*!****************************************!*\
  !*** ./src/shared/components/style.js ***!
  \****************************************/
/*! exports provided: headerContainer, loginContainer, loginBtn, title, btnCont, Core */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headerContainer\", function() { return headerContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginContainer\", function() { return loginContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginBtn\", function() { return loginBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"title\", function() { return title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnCont\", function() { return btnCont; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Core\", function() { return Core; });\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\nconst headerContainer =  false ? undefined : {\n  name: \"1fd9pvm-headerContainer\",\n  styles: \"background:#657c87;padding:10px;;label:headerContainer;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWNoaW4vcHJvamVjdHMvdGltZS1lbnRyeS1hcHAvc3JjL3NoYXJlZC9jb21wb25lbnRzL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQyIsImZpbGUiOiIvVXNlcnMvc2FjaGluL3Byb2plY3RzL3RpbWUtZW50cnktYXBwL3NyYy9zaGFyZWQvY29tcG9uZW50cy9zdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3NzLCBHbG9iYWx9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5leHBvcnQgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gY3NzYFxuICBiYWNrZ3JvdW5kOiAjNjU3Yzg3O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgbG9naW5Db250YWluZXIgPSBjc3NgXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UzZWRmNjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBsb2dpbkJ0biA9IGNzc2BcbiAgYmFja2dyb3VuZDogIzY1N2M4NztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgcGFkZGluZzogMTBweDtcbmBcbmV4cG9ydCBjb25zdCB0aXRsZSA9IGNzc2BcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuYFxuXG5leHBvcnQgY29uc3QgYnRuQ29udCA9IGNzc2BcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuYFxuY29uc3QgZ2xvYmFscyA9ICgpID0+IGNzc2BcbiAgKixcbiAgOjpiZWZvcmUsXG4gIDo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgfVxuXG4gIDo6YmVmb3JlLFxuICA6OmFmdGVyIHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuXG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZixcbiAgICAgICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYnV0dG9uLFxuICBpbnB1dCxcbiAgc2VsZWN0IHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiA0cHggN3B4O1xuICAgICAgbWFyZ2luOiAwIDZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG4gIGlucHV0LFxuICBzZWxlY3Qge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgaW1nLFxuICBhIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAuYXBwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzkyYTViNztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBsYWJlbCtpbnB1dCtsYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICBpbnB1dCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MmExYTg7XG4gICAgcGFkZGluZzogNnB4IDEwcHggNnB4IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICMyMDI4MmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgQ29yZSA9ICgpID0+IChcbiAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFscygpfSAvPlxuKVxuIl19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nconst loginContainer =  false ? undefined : {\n  name: \"meubtt-loginContainer\",\n  styles: \"margin:20px auto;width:400px;padding:20px;border:1px solid #e3edf6;border-radius:2px;box-shadow:0 1px 8px 0 rgba(0,0,0,0.1);;label:loginContainer;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWNoaW4vcHJvamVjdHMvdGltZS1lbnRyeS1hcHAvc3JjL3NoYXJlZC9jb21wb25lbnRzL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1pQyIsImZpbGUiOiIvVXNlcnMvc2FjaGluL3Byb2plY3RzL3RpbWUtZW50cnktYXBwL3NyYy9zaGFyZWQvY29tcG9uZW50cy9zdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3NzLCBHbG9iYWx9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5leHBvcnQgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gY3NzYFxuICBiYWNrZ3JvdW5kOiAjNjU3Yzg3O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgbG9naW5Db250YWluZXIgPSBjc3NgXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UzZWRmNjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBsb2dpbkJ0biA9IGNzc2BcbiAgYmFja2dyb3VuZDogIzY1N2M4NztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgcGFkZGluZzogMTBweDtcbmBcbmV4cG9ydCBjb25zdCB0aXRsZSA9IGNzc2BcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuYFxuXG5leHBvcnQgY29uc3QgYnRuQ29udCA9IGNzc2BcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuYFxuY29uc3QgZ2xvYmFscyA9ICgpID0+IGNzc2BcbiAgKixcbiAgOjpiZWZvcmUsXG4gIDo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgfVxuXG4gIDo6YmVmb3JlLFxuICA6OmFmdGVyIHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuXG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZixcbiAgICAgICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYnV0dG9uLFxuICBpbnB1dCxcbiAgc2VsZWN0IHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiA0cHggN3B4O1xuICAgICAgbWFyZ2luOiAwIDZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG4gIGlucHV0LFxuICBzZWxlY3Qge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgaW1nLFxuICBhIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAuYXBwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzkyYTViNztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBsYWJlbCtpbnB1dCtsYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICBpbnB1dCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MmExYTg7XG4gICAgcGFkZGluZzogNnB4IDEwcHggNnB4IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICMyMDI4MmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgQ29yZSA9ICgpID0+IChcbiAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFscygpfSAvPlxuKVxuIl19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nconst loginBtn =  false ? undefined : {\n  name: \"iad9fd-loginBtn\",\n  styles: \"background:#657c87;color:white;text-transform:capitalize;margin:20px 0 0;padding:10px;;label:loginBtn;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWNoaW4vcHJvamVjdHMvdGltZS1lbnRyeS1hcHAvc3JjL3NoYXJlZC9jb21wb25lbnRzL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCMkIiLCJmaWxlIjoiL1VzZXJzL3NhY2hpbi9wcm9qZWN0cy90aW1lLWVudHJ5LWFwcC9zcmMvc2hhcmVkL2NvbXBvbmVudHMvc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NzcywgR2xvYmFsfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNzc2BcbiAgYmFja2dyb3VuZDogIzY1N2M4NztcbiAgICBwYWRkaW5nOiAxMHB4O1xuYFxuZXhwb3J0IGNvbnN0IGxvZ2luQ29udGFpbmVyID0gY3NzYFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2VkZjY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuYFxuXG5leHBvcnQgY29uc3QgbG9naW5CdG4gPSBjc3NgXG4gIGJhY2tncm91bmQ6ICM2NTdjODc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMjBweCAwIDA7XG4gIHBhZGRpbmc6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgdGl0bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbmBcblxuZXhwb3J0IGNvbnN0IGJ0bkNvbnQgPSBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbmBcbmNvbnN0IGdsb2JhbHMgPSAoKSA9PiBjc3NgXG4gICosXG4gIDo6YmVmb3JlLFxuICA6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cblxuICA6OmJlZm9yZSxcbiAgOjphZnRlciB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIH1cblxuICBodG1sLFxuICBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsXG4gICAgICAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGJ1dHRvbixcbiAgaW5wdXQsXG4gIHNlbGVjdCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBidXR0b24ge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogNHB4IDdweDtcbiAgICAgIG1hcmdpbjogMCA2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuICBpbnB1dCxcbiAgc2VsZWN0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGltZyxcbiAgYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLmFwcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM5MmE1Yjc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbGFiZWwraW5wdXQrbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgaW5wdXQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTJhMWE4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4IDZweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjMjAyODJmO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IENvcmUgPSAoKSA9PiAoXG4gICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbHMoKX0gLz5cbilcbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nconst title =  false ? undefined : {\n  name: \"1bcw5ej-title\",\n  styles: \"display:inline-block;vertical-align:top;font-size:20px;color:white;font-weight:300;;label:title;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWNoaW4vcHJvamVjdHMvdGltZS1lbnRyeS1hcHAvc3JjL3NoYXJlZC9jb21wb25lbnRzL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCd0IiLCJmaWxlIjoiL1VzZXJzL3NhY2hpbi9wcm9qZWN0cy90aW1lLWVudHJ5LWFwcC9zcmMvc2hhcmVkL2NvbXBvbmVudHMvc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NzcywgR2xvYmFsfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNzc2BcbiAgYmFja2dyb3VuZDogIzY1N2M4NztcbiAgICBwYWRkaW5nOiAxMHB4O1xuYFxuZXhwb3J0IGNvbnN0IGxvZ2luQ29udGFpbmVyID0gY3NzYFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2VkZjY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuYFxuXG5leHBvcnQgY29uc3QgbG9naW5CdG4gPSBjc3NgXG4gIGJhY2tncm91bmQ6ICM2NTdjODc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMjBweCAwIDA7XG4gIHBhZGRpbmc6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgdGl0bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbmBcblxuZXhwb3J0IGNvbnN0IGJ0bkNvbnQgPSBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbmBcbmNvbnN0IGdsb2JhbHMgPSAoKSA9PiBjc3NgXG4gICosXG4gIDo6YmVmb3JlLFxuICA6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cblxuICA6OmJlZm9yZSxcbiAgOjphZnRlciB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIH1cblxuICBodG1sLFxuICBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsXG4gICAgICAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGJ1dHRvbixcbiAgaW5wdXQsXG4gIHNlbGVjdCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBidXR0b24ge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogNHB4IDdweDtcbiAgICAgIG1hcmdpbjogMCA2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuICBpbnB1dCxcbiAgc2VsZWN0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGltZyxcbiAgYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLmFwcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM5MmE1Yjc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbGFiZWwraW5wdXQrbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgaW5wdXQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTJhMWE4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4IDZweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjMjAyODJmO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IENvcmUgPSAoKSA9PiAoXG4gICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbHMoKX0gLz5cbilcbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nconst btnCont =  false ? undefined : {\n  name: \"osy430-btnCont\",\n  styles: \"display:inline-block;float:right;;label:btnCont;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWNoaW4vcHJvamVjdHMvdGltZS1lbnRyeS1hcHAvc3JjL3NoYXJlZC9jb21wb25lbnRzL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCMEIiLCJmaWxlIjoiL1VzZXJzL3NhY2hpbi9wcm9qZWN0cy90aW1lLWVudHJ5LWFwcC9zcmMvc2hhcmVkL2NvbXBvbmVudHMvc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NzcywgR2xvYmFsfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNzc2BcbiAgYmFja2dyb3VuZDogIzY1N2M4NztcbiAgICBwYWRkaW5nOiAxMHB4O1xuYFxuZXhwb3J0IGNvbnN0IGxvZ2luQ29udGFpbmVyID0gY3NzYFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2VkZjY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuYFxuXG5leHBvcnQgY29uc3QgbG9naW5CdG4gPSBjc3NgXG4gIGJhY2tncm91bmQ6ICM2NTdjODc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMjBweCAwIDA7XG4gIHBhZGRpbmc6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgdGl0bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbmBcblxuZXhwb3J0IGNvbnN0IGJ0bkNvbnQgPSBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbmBcbmNvbnN0IGdsb2JhbHMgPSAoKSA9PiBjc3NgXG4gICosXG4gIDo6YmVmb3JlLFxuICA6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cblxuICA6OmJlZm9yZSxcbiAgOjphZnRlciB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIH1cblxuICBodG1sLFxuICBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsXG4gICAgICAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGJ1dHRvbixcbiAgaW5wdXQsXG4gIHNlbGVjdCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBidXR0b24ge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogNHB4IDdweDtcbiAgICAgIG1hcmdpbjogMCA2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuICBpbnB1dCxcbiAgc2VsZWN0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGltZyxcbiAgYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLmFwcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM5MmE1Yjc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbGFiZWwraW5wdXQrbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgaW5wdXQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTJhMWE4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4IDZweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjMjAyODJmO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IENvcmUgPSAoKSA9PiAoXG4gICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbHMoKX0gLz5cbilcbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref =  false ? undefined : {\n  name: \"1r2uo8k\",\n  styles: \"*,::before,::after{box-sizing:border-box;margin:0;padding:0;font:inherit;-webkit-tap-highlight-color:transparent;-webkit-overflow-scrolling:touch;}::before,::after{-webkit-font-smoothing:antialiased;}html,body{height:100%;margin:0;}html{font-size:14px;}body{position:relative;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';font-style:normal;-webkit-tap-highlight-color:transparent;}a{background-color:transparent;color:inherit;text-decoration:none;}button,input,select{outline:none;}button{border:none;padding:4px 7px;margin:0 6px;cursor:pointer;border-radius:2px;}input,select{border:none;border-radius:0;outline:none;}img,a{border:none;outline:none;}.app{height:100%;}ul{list-style:none;}label{font-size:12px;color:#92a5b7;display:block;}label+input+label{margin-top:15px;}input{border-bottom:1px solid #92a1a8;padding:6px 10px 6px 0;display:block;color:#20282f;width:100%;}\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWNoaW4vcHJvamVjdHMvdGltZS1lbnRyeS1hcHAvc3JjL3NoYXJlZC9jb21wb25lbnRzL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DeUIiLCJmaWxlIjoiL1VzZXJzL3NhY2hpbi9wcm9qZWN0cy90aW1lLWVudHJ5LWFwcC9zcmMvc2hhcmVkL2NvbXBvbmVudHMvc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NzcywgR2xvYmFsfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNzc2BcbiAgYmFja2dyb3VuZDogIzY1N2M4NztcbiAgICBwYWRkaW5nOiAxMHB4O1xuYFxuZXhwb3J0IGNvbnN0IGxvZ2luQ29udGFpbmVyID0gY3NzYFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2VkZjY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuYFxuXG5leHBvcnQgY29uc3QgbG9naW5CdG4gPSBjc3NgXG4gIGJhY2tncm91bmQ6ICM2NTdjODc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMjBweCAwIDA7XG4gIHBhZGRpbmc6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgdGl0bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbmBcblxuZXhwb3J0IGNvbnN0IGJ0bkNvbnQgPSBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbmBcbmNvbnN0IGdsb2JhbHMgPSAoKSA9PiBjc3NgXG4gICosXG4gIDo6YmVmb3JlLFxuICA6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cblxuICA6OmJlZm9yZSxcbiAgOjphZnRlciB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIH1cblxuICBodG1sLFxuICBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsXG4gICAgICAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGJ1dHRvbixcbiAgaW5wdXQsXG4gIHNlbGVjdCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBidXR0b24ge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogNHB4IDdweDtcbiAgICAgIG1hcmdpbjogMCA2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuICBpbnB1dCxcbiAgc2VsZWN0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGltZyxcbiAgYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLmFwcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM5MmE1Yjc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgbGFiZWwraW5wdXQrbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgaW5wdXQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTJhMWE4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4IDZweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjMjAyODJmO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IENvcmUgPSAoKSA9PiAoXG4gICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbHMoKX0gLz5cbilcbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nconst globals = () => _ref;\n\nconst Core = () => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"Global\"], {\n  styles: globals()\n});\n\n//# sourceURL=webpack:///./src/shared/components/style.js?");

/***/ }),

/***/ "./src/shared/configureFirebase.js":
/*!*****************************************!*\
  !*** ./src/shared/configureFirebase.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // TODO: Replace the following with your app's Firebase project configuration\n\nvar firebaseConfig = {\n  apiKey: \"AIzaSyDVJLLBWIhjVU5ogm2GtyALnADZdJ_z_lU\",\n  authDomain: \"tasklist-2be89.firebaseapp.com\",\n  databaseURL: \"https://tasklist-2be89.firebaseio.com\",\n  projectId: \"tasklist-2be89\",\n  storageBucket: \"tasklist-2be89.appspot.com\",\n  messagingSenderId: \"493798251149\"\n}; // Initialize Firebase\n\nfirebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n//# sourceURL=webpack:///./src/shared/configureFirebase.js?");

/***/ }),

/***/ "./src/shared/connect.js":
/*!*******************************!*\
  !*** ./src/shared/connect.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  props = () => ({}),\n  actions = dispatch => ({\n    dispatch\n  }),\n  options = {}\n} = {}) => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(props, actions, null, options));\n\n//# sourceURL=webpack:///./src/shared/connect.js?");

/***/ }),

/***/ "./src/shared/reducers/index.js":
/*!**************************************!*\
  !*** ./src/shared/reducers/index.js ***!
  \**************************************/
/*! exports provided: authReducer, appReducer, cookieReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authReducer\", function() { return authReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appReducer\", function() { return appReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cookieReducer\", function() { return cookieReducer; });\nconst authReducer = (state = {\n  loggedIn: false\n}, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case 'LOGIN':\n    case 'TOKEN_RETRIVED_SUCCESS':\n    case 'LOGIN_FAILED':\n    case 'REGISTER_FAILED':\n    case 'REGISTER_SUCCESS':\n      return { ...state,\n        ...payload\n      };\n  }\n\n  return state;\n};\nconst appReducer = (state = {}, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case 'TASKLIST':\n      return { ...state,\n        ...payload\n      };\n  }\n\n  return state;\n};\nconst cookieReducer = (state = {}, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case 'SET_COOKIES':\n    case 'SET_COOKIE':\n      return { ...state,\n        ...payload\n      };\n\n    case 'CLEAR_COOKIE':\n      const newState = { ...state\n      };\n      delete newState[payload.key];\n      return newState;\n  }\n\n  return state;\n};\n\n//# sourceURL=webpack:///./src/shared/reducers/index.js?");

/***/ }),

/***/ "./src/shared/store/combineReducer.js":
/*!********************************************!*\
  !*** ./src/shared/store/combineReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shared_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/reducers */ \"./src/shared/reducers/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  auth: shared_reducers__WEBPACK_IMPORTED_MODULE_1__[\"authReducer\"],\n  data: shared_reducers__WEBPACK_IMPORTED_MODULE_1__[\"appReducer\"],\n  cookies: shared_reducers__WEBPACK_IMPORTED_MODULE_1__[\"cookieReducer\"]\n}));\n\n//# sourceURL=webpack:///./src/shared/store/combineReducer.js?");

/***/ }),

/***/ "./src/shared/store/index.js":
/*!***********************************!*\
  !*** ./src/shared/store/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _combineReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combineReducer */ \"./src/shared/store/combineReducer.js\");\n\n\n // const reducer = (state, action) => ({ loggedIn: false })\n\nfunction configureStore(initialState = {}, extraParams = {}) {\n  let enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(extraParams));\n\n  if (typeof window !== 'undefined' && !false && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {\n    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(enhancer);\n  }\n\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_combineReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, enhancer);\n  return store;\n}\n\n//# sourceURL=webpack:///./src/shared/store/index.js?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/server/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/sachin/projects/time-entry-app/src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/server/index.js?");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/core\");\n\n//# sourceURL=webpack:///external_%22@emotion/core%22?");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/server\");\n\n//# sourceURL=webpack:///external_%22@loadable/server%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie\");\n\n//# sourceURL=webpack:///external_%22cookie%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase-admin\");\n\n//# sourceURL=webpack:///external_%22firebase-admin%22?");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");\n\n//# sourceURL=webpack:///external_%22firebase/app%22?");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");\n\n//# sourceURL=webpack:///external_%22firebase/auth%22?");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/database\");\n\n//# sourceURL=webpack:///external_%22firebase/database%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-datetime":
/*!*********************************!*\
  !*** external "react-datetime" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-datetime\");\n\n//# sourceURL=webpack:///external_%22react-datetime%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });