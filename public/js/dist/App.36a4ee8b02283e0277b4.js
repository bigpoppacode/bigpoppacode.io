/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.mamba","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.mamba":
/*!**********************************!*\
  !*** ./src/components/App.mamba ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mambascript/decision */ \"./node_modules/mambascript/decision.js\");\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mambascript_decision__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PostContent_mamba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostContent.mamba */ \"./src/components/PostContent.mamba\");\n/* harmony import */ var _AppLayout_mamba__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppLayout.mamba */ \"./src/components/AppLayout.mamba\");\n// Generated by MambaScript 0.3.7 \nvar present = console.log; \n// Generated by MambaScript 0.3.7 \nvar $, App, AppLayout, PostContent, pureComponent, React, useEffect, useState;\n \n var React = react__WEBPACK_IMPORTED_MODULE_0___default.a;\n \n var cache$ = react__WEBPACK_IMPORTED_MODULE_0___default.a;\nuseState = cache$.useState;\nuseEffect = cache$.useEffect;\n \n var cache$1 = mambascript_decision__WEBPACK_IMPORTED_MODULE_1___default()(React);\n$ = cache$1.$;\npureComponent = cache$1.pureComponent;\n \n var PostContent = _PostContent_mamba__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"];\n \n var AppLayout = _AppLayout_mamba__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"];\nApp = function () {\n  var cache$2, fetchPost, Posts, setState, state;\n  cache$2 = useState([]);\n  state = cache$2[0];\n  setState = cache$2[1];\n  fetchPost = function () {\n    fetch('/api/posts').then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return setState(data);\n    })['catch'](function (err) {\n      return present(err);\n    });\n    return function () {\n      return null;\n    };\n  };\n  useEffect(fetchPost, []);\n  Posts = pureComponent(function (data) {\n    return data.map(function (item) {\n      return $(PostContent, { post: item });\n    });\n  });\n  return $(AppLayout, function () {\n    if (!state.length) {\n      return $('h1', 'Loading ...');\n    } else {\n      return $('div', Posts(state));\n    }\n  });\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App.mamba?");

/***/ }),

/***/ "./src/components/AppHeader.mamba":
/*!****************************************!*\
  !*** ./src/components/AppHeader.mamba ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mambascript/decision */ \"./node_modules/mambascript/decision.js\");\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mambascript_decision__WEBPACK_IMPORTED_MODULE_1__);\n// Generated by MambaScript 0.3.7 \nvar present = console.log; \n// Generated by MambaScript 0.3.7 \nvar $, AppHeader, pureComponent, React, useEffect, useState;\n \n var React = react__WEBPACK_IMPORTED_MODULE_0___default.a;\n \n var cache$ = react__WEBPACK_IMPORTED_MODULE_0___default.a;\nuseState = cache$.useState;\nuseEffect = cache$.useEffect;\n \n var cache$1 = mambascript_decision__WEBPACK_IMPORTED_MODULE_1___default()(React);\n$ = cache$1.$;\npureComponent = cache$1.pureComponent;\nAppHeader = function () {\n  return $('header', { className: 'app-header' }, function () {\n    $('h1', 'Deeper Than Code');\n    $('h4', { className: 'subTitle' }, 'Built with MambaScript');\n    $('div', { className: 'cover' });\n    $('h4', { className: 'motto' }, function () {\n      return $.text('\"Most people never run far enough on their first wind to find out they\\u2019ve got a second.\\nGive your dreams all you\\u2019ve got and you\\u2019ll be amazed at the energy that comes out of you.\"\\n                                  - William James');\n    });\n    return $('div', { className: 'subscribe' }, function () {\n      $('h5', { className: 'info-text' }, 'Subscribe For Updates, delivered straight to your inbox');\n      return $('div', { className: 'container' }, function () {\n        return $('div', { className: 'col-md-4 col-md-offset-4 col-sm6-6 col-sm-offset-3' }, function () {\n          return $('form', { className: 'form-inline' }, function () {\n            $('div', { className: 'form-group' }, function () {\n              $('label', { htmlFor: 'email' }, 'Email Address');\n              return $('input', {\n                name: 'email',\n                type: 'email',\n                id: 'email',\n                className: 'form-control transparent',\n                placeholder: 'Your Email here....'\n              });\n            });\n            $('div', { className: 'form-group' }, function () {\n              $('label', { htmlFor: 'phone' }, 'Phone Number');\n              return $('input', {\n                name: 'phone',\n                type: 'text',\n                id: 'phone',\n                className: 'form-control transparent',\n                placeholder: 'Your Phone Number here....'\n              });\n            });\n            return $('button', {\n              type: 'submit',\n              className: 'btn btn-large btn-danger btn-fill'\n            }, 'Get Updated');\n          });\n        });\n      });\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppHeader);\n\n//# sourceURL=webpack:///./src/components/AppHeader.mamba?");

/***/ }),

/***/ "./src/components/AppLayout.mamba":
/*!****************************************!*\
  !*** ./src/components/AppLayout.mamba ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mambascript/decision */ \"./node_modules/mambascript/decision.js\");\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mambascript_decision__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AppHeader_mamba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppHeader.mamba */ \"./src/components/AppHeader.mamba\");\n/* harmony import */ var _AppNavBar_mamba__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppNavBar.mamba */ \"./src/components/AppNavBar.mamba\");\n// Generated by MambaScript 0.3.7 \nvar present = console.log; \n// Generated by MambaScript 0.3.7 \nvar $, AppHeader, AppLayout, AppNavBar, Decision, Fragment, React, useEffect, useState;\n \n var Decision = mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default.a;\n \n var React = react__WEBPACK_IMPORTED_MODULE_1___default.a;\n \n var cache$ = react__WEBPACK_IMPORTED_MODULE_1___default.a;\nuseState = cache$.useState;\nuseEffect = cache$.useEffect;\nFragment = cache$.Fragment;\n$ = Decision(React).$;\n \n var AppHeader = _AppHeader_mamba__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"];\n \n var AppNavBar = _AppNavBar_mamba__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"];\nAppLayout = function (props) {\n  return $('div', { className: 'app-layout' }, function () {\n    $(AppHeader);\n    $(AppNavBar);\n    return $(Fragment, props.children);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppLayout);\n\n//# sourceURL=webpack:///./src/components/AppLayout.mamba?");

/***/ }),

/***/ "./src/components/AppNavBar.mamba":
/*!****************************************!*\
  !*** ./src/components/AppNavBar.mamba ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mambascript/decision */ \"./node_modules/mambascript/decision.js\");\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mambascript_decision__WEBPACK_IMPORTED_MODULE_1__);\n// Generated by MambaScript 0.3.7 \nvar present = console.log; \n// Generated by MambaScript 0.3.7 \nvar $, AppNavBar, pureComponent, React, useEffect, useState;\n \n var React = react__WEBPACK_IMPORTED_MODULE_0___default.a;\n \n var cache$ = react__WEBPACK_IMPORTED_MODULE_0___default.a;\nuseState = cache$.useState;\nuseEffect = cache$.useEffect;\n \n var cache$1 = mambascript_decision__WEBPACK_IMPORTED_MODULE_1___default()(React);\n$ = cache$1.$;\npureComponent = cache$1.pureComponent;\nAppNavBar = function () {\n  return $('nav', { className: 'appnav' }, function () {\n    return $('ul', { className: 'nav-items container' }, function () {\n      $('li', { className: 'nav-item' }, function () {\n        return $.text('Home');\n      });\n      $('li', { className: 'nav-item' }, function () {\n        return $.text('About');\n      });\n      $('li', { className: 'nav-item' }, function () {\n        return $.text('Contact Us');\n      });\n      return $('li', { className: 'nav-item' }, function () {\n        return $.text('Posts');\n      });\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppNavBar);\n\n//# sourceURL=webpack:///./src/components/AppNavBar.mamba?");

/***/ }),

/***/ "./src/components/AppRouter.mamba":
/*!****************************************!*\
  !*** ./src/components/AppRouter.mamba ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mambascript/decision */ \"./node_modules/mambascript/decision.js\");\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mambascript_decision__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_mambascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-mambascript */ \"./node_modules/react-router-mambascript/esm/react-router-dom.js\");\n/* harmony import */ var _App_mamba__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.mamba */ \"./src/components/App.mamba\");\n/* harmony import */ var _Show_mamba__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Show.mamba */ \"./src/components/Show.mamba\");\n// Generated by MambaScript 0.3.7 \nvar present = console.log; \n// Generated by MambaScript 0.3.7 \nvar $, App, AppRouter, BrowserRouter, Decision, React, Route, Show, Switch, useEffect, useState;\n \n var Decision = mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default.a;\n \n var React = react__WEBPACK_IMPORTED_MODULE_1___default.a;\n \n var cache$ = react__WEBPACK_IMPORTED_MODULE_1___default.a;\nuseState = cache$.useState;\nuseEffect = cache$.useEffect;\n$ = Decision(React).$;\n \n var cache$1 = react_router_mambascript__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"b\"];\nBrowserRouter = cache$1.BrowserRouter;\nSwitch = cache$1.Switch;\nRoute = cache$1.Route;\n \n var App = _App_mamba__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"];\n \n var Show = _Show_mamba__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"];\nAppRouter = function (props) {\n  return $(BrowserRouter, function () {\n    return $(Switch, function () {\n      $(Route, {\n        exact: true,\n        path: '/',\n        component: function (routerProps) {\n          return $(App, Object.assign({}, routerProps));\n        }\n      });\n      return $(Route, {\n        path: '/:id',\n        component: function (routerProps) {\n          return $(Show, Object.assign({}, routerProps));\n        }\n      });\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/components/AppRouter.mamba?");

/***/ }),

/***/ "./src/components/FullBlog.mamba":
/*!***************************************!*\
  !*** ./src/components/FullBlog.mamba ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mambascript/decision */ \"./node_modules/mambascript/decision.js\");\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mambascript_decision__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_mambascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-mambascript */ \"./node_modules/react-router-mambascript/esm/react-router-dom.js\");\n// Generated by MambaScript 0.3.7 \nvar present = console.log; \n// Generated by MambaScript 0.3.7 \nvar $, Decision, Fragment, FullBlog, Link, React;\n \n var Decision = mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default.a;\n \n var React = react__WEBPACK_IMPORTED_MODULE_1___default.a;\n \n var Fragment = react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"];\n$ = Decision(React).$;\n \n var Link = react_router_mambascript__WEBPACK_IMPORTED_MODULE_2__[/* Link */ \"a\"];\nFullBlog = function (props) {\n  var post;\n  post = props.post;\n  return $('div', { className: 'container' }, function () {\n    return $('div', { className: 'card' }, function () {\n      $(Link, { to: '/' + post._id }, function () {\n        return $('h2', { className: 'card-header' });\n      });\n      return $('div', { className: 'card-body' }, function () {\n        $('h2', { className: 'card-title' }, post.data.title);\n        $('h5', { className: 'card-title' }, post.data.subTitle);\n        return $('div', {\n          className: 'container mx-auto',\n          dangerouslySetInnerHTML: { __html: post.content }\n        });\n      });\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (FullBlog);\n\n//# sourceURL=webpack:///./src/components/FullBlog.mamba?");

/***/ }),

/***/ "./src/components/PostContent.mamba":
/*!******************************************!*\
  !*** ./src/components/PostContent.mamba ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mambascript/decision */ \"./node_modules/mambascript/decision.js\");\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mambascript_decision__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_mambascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-mambascript */ \"./node_modules/react-router-mambascript/esm/react-router-dom.js\");\n// Generated by MambaScript 0.3.7 \nvar present = console.log; \n// Generated by MambaScript 0.3.7 \nvar $, Decision, Fragment, Link, PostContent, React;\n \n var Decision = mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default.a;\n \n var React = react__WEBPACK_IMPORTED_MODULE_1___default.a;\n \n var Fragment = react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"];\n$ = Decision(React).$;\n \n var Link = react_router_mambascript__WEBPACK_IMPORTED_MODULE_2__[/* Link */ \"a\"];\nPostContent = function (props) {\n  var post;\n  post = props.post;\n  return $(Fragment, function () {\n    return $('div', { className: 'card' }, function () {\n      $(Link, { to: '/' + post._id }, function () {\n        return $('h5', { className: 'card-header' }, post.data.title);\n      });\n      return $('div', { className: 'card-body' }, function () {\n        $('h5', { className: 'card-title' }, post.data.subTitle);\n        return $('p', { className: 'card-text' }, post.data.excerpt);\n      });\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (PostContent);\n\n//# sourceURL=webpack:///./src/components/PostContent.mamba?");

/***/ }),

/***/ "./src/components/Show.mamba":
/*!***********************************!*\
  !*** ./src/components/Show.mamba ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mambascript/decision */ \"./node_modules/mambascript/decision.js\");\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mambascript_decision__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FullBlog_mamba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FullBlog.mamba */ \"./src/components/FullBlog.mamba\");\n/* harmony import */ var react_router_mambascript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-mambascript */ \"./node_modules/react-router-mambascript/esm/react-router-dom.js\");\n// Generated by MambaScript 0.3.7 \nvar present = console.log; \n// Generated by MambaScript 0.3.7 \nvar $, Decision, Fragment, FullBlog, Link, React, Show, useEffect, useState;\n \n var Decision = mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default.a;\n \n var React = react__WEBPACK_IMPORTED_MODULE_1___default.a;\n \n var cache$ = react__WEBPACK_IMPORTED_MODULE_1___default.a;\nuseState = cache$.useState;\nuseEffect = cache$.useEffect;\nFragment = cache$.Fragment;\n$ = Decision(React).$;\n \n var FullBlog = _FullBlog_mamba__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"];\n \n var Link = react_router_mambascript__WEBPACK_IMPORTED_MODULE_3__[/* Link */ \"a\"];\nShow = function (props) {\n  var cache$1, fetchPost, setState, state;\n  cache$1 = useState({});\n  state = cache$1[0];\n  setState = cache$1[1];\n  fetchPost = function () {\n    fetch('/api/' + props.match.params.id).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return setState(data);\n    })['catch'](function (err) {\n      return present(err);\n    });\n    return function () {\n      return null;\n    };\n  };\n  useEffect(fetchPost, []);\n  return !Object.keys(state).length ? $('h1', 'Loading ...') : $('main', { className: 'container' }, function () {\n    $(FullBlog, { post: state });\n    return $(Link, { to: '/' }, function () {\n      return $.text('Home Page');\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (Show);\n\n//# sourceURL=webpack:///./src/components/Show.mamba?");

/***/ }),

/***/ "./src/index.mamba":
/*!*************************!*\
  !*** ./src/index.mamba ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mambascript/decision */ \"./node_modules/mambascript/decision.js\");\n/* harmony import */ var mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mambascript_decision__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AppRouter_mamba__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AppRouter.mamba */ \"./src/components/AppRouter.mamba\");\n// Generated by MambaScript 0.3.7 \nvar present = console.log; \n// Generated by MambaScript 0.3.7 \nvar $, AppRouter, Decision, React, ReactDOM, useEffect, useState;\n \n var Decision = mambascript_decision__WEBPACK_IMPORTED_MODULE_0___default.a;\n \n var React = react__WEBPACK_IMPORTED_MODULE_1___default.a;\n \n var ReactDOM = react_dom__WEBPACK_IMPORTED_MODULE_2___default.a;\n \n var cache$ = react__WEBPACK_IMPORTED_MODULE_1___default.a;\nuseState = cache$.useState;\nuseEffect = cache$.useEffect;\n$ = Decision(React).$;\n \n var AppRouter = _components_AppRouter_mamba__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"];\nReactDOM.render($(AppRouter), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/index.mamba?");

/***/ })

/******/ });