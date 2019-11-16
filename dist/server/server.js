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

/***/ "./src/server/HTML.js":
/*!****************************!*\
  !*** ./src/server/HTML.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);\n// @flow\n\n\n\nconst HTML = ({\n  children,\n  header\n}) => {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"html\", {\n    lang: \"en\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"head\", null, header, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://rawgit.com/arqex/react-datetime/master/css/react-datetime.css\"\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"body\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n    id: \"app\",\n    className: \"app\",\n    dangerouslySetInnerHTML: {\n      __html: children\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"script\", {\n    dangerouslySetInnerHTML: {\n      __html: `window.__INITIAL_STATE__ = __STATE__`\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"script\", {\n    type: \"text/javascript\",\n    src: `http://localhost:${process.env.WEBPACK_PORT || 8501}/bundle.js`\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HTML);\n\n//# sourceURL=webpack:///./src/server/HTML.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render */ \"./src/server/render.js\");\n/* harmony import */ var _registerServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registerServer */ \"./src/server/registerServer.js\");\n/* harmony import */ var shared_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/store */ \"./src/shared/store/index.js\");\n/* harmony import */ var server_cookieParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! server/cookieParser */ \"./src/server/cookieParser.js\");\n// import path from 'path'\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nObject(_registerServer__WEBPACK_IMPORTED_MODULE_5__[\"registerToFirebase\"])();\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use((req, res, next) => {\n  cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()()(req, res, () => {\n    const cookies = { ...req.cookies\n    };\n    Object.keys(cookies).forEach(key => {\n      cookies[key] = Object(server_cookieParser__WEBPACK_IMPORTED_MODULE_7__[\"parse\"])(cookies[key]);\n    });\n    res.locals.cookies = cookies;\n    next();\n  });\n});\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n}));\napp.use((req, res, next) => {\n  const helpers = {};\n  res.locals.helpers = helpers;\n  res.locals.store = Object(shared_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, helpers);\n  next();\n});\napp.use((req, res, next) => {\n  const {\n    locals: {\n      store,\n      helpers,\n      cookies\n    }\n  } = res;\n  const {\n    setCookie,\n    clearCookie\n  } = Object(server_cookieParser__WEBPACK_IMPORTED_MODULE_7__[\"getCookieHelpers\"])(req, res);\n\n  helpers.setCookie = (key, val, opts) => {\n    if (res.headersSent) {\n      return;\n    }\n\n    setCookie(key, val, opts); // check if opts are required\n\n    store.dispatch({\n      type: 'SET_COOKIE',\n      payload: {\n        key,\n        val: Object(server_cookieParser__WEBPACK_IMPORTED_MODULE_7__[\"parse\"])(val),\n        opts\n      }\n    });\n  };\n\n  helpers.clearCookie = key => {\n    if (res.headersSent) {\n      return;\n    }\n\n    clearCookie(key);\n    store.dispatch({\n      type: 'CLEAR_COOKIE',\n      payload: {\n        key\n      }\n    });\n  };\n\n  store.dispatch({\n    type: 'SET_COOKIES',\n    payload: cookies\n  });\n  next();\n});\napp.use(_render__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nlet port = process.env.PORT || 8500;\napp.listen(port, () => {\n  console.log(`Server started on PORT ${port}`);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/server/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var shared_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/App */ \"./src/shared/App.js\");\n/* harmony import */ var _HTML__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HTML */ \"./src/server/HTML.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _registerServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerServer */ \"./src/server/registerServer.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res, next) => {\n  const store = res.locals.store;\n  await store.dispatch(Object(_registerServer__WEBPACK_IMPORTED_MODULE_6__[\"checkLogin\"])());\n  const routerContext = {};\n  const content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: res.locals.store\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.url,\n    context: routerContext\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(shared_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n  const state = res.locals.store.getState();\n  return res.send('<!doctype html>' + Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_HTML__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, content)).replace('__STATE__', JSON.stringify(state).replace(/</g, '\\\\u003c')));\n});\n\n//# sourceURL=webpack:///./src/server/render.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect */ \"./src/shared/connect.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Login */ \"./src/shared/components/Login.js\");\n/* harmony import */ var _components_AddItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AddItem */ \"./src/shared/components/AddItem.js\");\n/* harmony import */ var _components_Report__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Report */ \"./src/shared/components/Report.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Header */ \"./src/shared/components/Header.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst projectList = [{\n  key: 'project1',\n  label: 'project 1'\n}, {\n  key: 'project2',\n  label: 'project 2'\n}, {\n  key: 'project3',\n  label: 'project 3'\n}];\n\nconst App = ({\n  loggedIn\n}) => {\n  const [showReport, setShowReport] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onClick: show => setShowReport(show)\n  }), !loggedIn && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), !showReport && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_AddItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    projectList: projectList\n  }), showReport && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_components_Report__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n};\n\nconst props = ({\n  auth: {\n    loggedIn\n  }\n}) => ({\n  loggedIn\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_connect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n  props\n})(App));\n\n//# sourceURL=webpack:///./src/shared/App.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Header = ({\n  onClick\n}) => {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"header\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", null, \"Time Entry App\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n    onClick: () => onClick(false)\n  }, \"Add Task\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n    onClick: () => onClick(true)\n  }, \"View Task\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/shared/components/Header.js?");

/***/ }),

/***/ "./src/shared/components/Login.js":
/*!****************************************!*\
  !*** ./src/shared/components/Login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shared_actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/actions/auth */ \"./src/shared/actions/auth.js\");\n/* harmony import */ var shared_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/connect */ \"./src/shared/connect.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst SCREEN = {\n  REGISTER: 'register',\n  LOGIN: 'login'\n};\n\nconst AuthComponent = ({\n  login,\n  register,\n  errorMessage\n}) => {\n  const [{\n    email = '',\n    password = ''\n  }, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [screen, setScreen] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(SCREEN.REGISTER);\n\n  function onChange(field, value) {\n    setState(prev => ({ ...prev,\n      [field]: value\n    }));\n  }\n\n  function onSubmit() {\n    if (screen === SCREEN.LOGIN) {\n      login(email, password);\n    } else {\n      register(email, password).then(status => {\n        if (status === 'success') {\n          changeScreen();\n        }\n      });\n    }\n  }\n\n  function changeScreen() {\n    let newScreen;\n    newScreen = screen === SCREEN.REGISTER ? SCREEN.LOGIN : SCREEN.REGISTER;\n    setScreen(newScreen);\n  }\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", null, screen === SCREEN.LOGIN && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", {\n    onClick: () => changeScreen()\n  }, \"go To register\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"input\", {\n    type: \"email\",\n    onChange: ({\n      target: {\n        value\n      }\n    }) => onChange('email', value),\n    placeholder: \"email\",\n    value: email\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"input\", {\n    type: \"password\",\n    onChange: ({\n      target: {\n        value\n      }\n    }) => onChange('password', value),\n    placeholder: \"password\",\n    value: password\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"button\", {\n    onClick: () => onSubmit()\n  }, screen), screen === SCREEN.REGISTER && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"button\", {\n    onClick: () => changeScreen()\n  }, \"go to Login\"), errorMessage && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"span\", null, errorMessage));\n};\n\nconst props = ({\n  auth: {\n    errorMessage\n  }\n}) => ({\n  errorMessage\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(shared_connect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n  props,\n  actions: {\n    login: shared_actions_auth__WEBPACK_IMPORTED_MODULE_1__[\"login\"],\n    register: shared_actions_auth__WEBPACK_IMPORTED_MODULE_1__[\"register\"]\n  }\n})(AuthComponent));\n\n//# sourceURL=webpack:///./src/shared/components/Login.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _combineReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combineReducer */ \"./src/shared/store/combineReducer.js\");\n\n\n // const reducer = (state, action) => ({ loggedIn: false })\n\nfunction configureStore(initialState = {}, extraParams = {}) {\n  let enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(extraParams));\n\n  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {\n    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(enhancer);\n  }\n\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_combineReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, enhancer);\n  return store;\n}\n\n//# sourceURL=webpack:///./src/shared/store/index.js?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/server/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/monikaaggarwal/Documents/work/personal/backend/src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/server/index.js?");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/core\");\n\n//# sourceURL=webpack:///external_%22@emotion/core%22?");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

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