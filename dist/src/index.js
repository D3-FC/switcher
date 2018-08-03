(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Switcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Switcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Switcher */ \"./src/modules/Switcher.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Switcher\", function() { return _modules_Switcher__WEBPACK_IMPORTED_MODULE_0__[\"Switcher\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/modules/Switcher.ts":
/*!*********************************!*\
  !*** ./src/modules/Switcher.ts ***!
  \*********************************/
/*! exports provided: Switcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Switcher\", function() { return Switcher; });\nvar Switcher = /** @class */ (function () {\r\n    function Switcher(switcherDataAttr, switchableDataAttr, switchableClassDataAttr) {\r\n        var _this = this;\r\n        this.clickHandler = function (e) {\r\n            console.log('click', 'click');\r\n            _this.handleSwitcherClick(e);\r\n        };\r\n        this.switcherDataAttr = switcherDataAttr;\r\n        this.switchableDataAttr = switchableDataAttr;\r\n        this.switchableClassDataAttr = switchableClassDataAttr;\r\n        this.switchers = Array.from(document.querySelectorAll(\"[data-\" + this.switcherDataAttr + \"]\"));\r\n        this.switchers.forEach(function (switcher) {\r\n            _this.addClickListeners(switcher);\r\n        });\r\n    }\r\n    Switcher.prototype.handleSwitchableClass = function (switchable) {\r\n        var switchableClass = switchable.dataset[this.camelize(this.switchableClassDataAttr)];\r\n        if (switchableClass && switchable.classList.contains(switchableClass)) {\r\n            switchable.classList.remove(switchableClass);\r\n        }\r\n        else {\r\n            switchableClass && switchable.classList.add(switchableClass);\r\n        }\r\n    };\r\n    /**\r\n     * SHOULD BE CALLED ASYNC / AWAIT AFTER CONSTRUCT\r\n     *\r\n     * For example\r\n     * const switcher = Switcher.makeDefault()\r\n     * setTimeout(()=>{\r\n     *  switcher.destroy()\r\n     * }, 0)\r\n     */\r\n    Switcher.prototype.destroy = function () {\r\n        var _this = this;\r\n        this.switchers.forEach(function (switcher) {\r\n            switcher.removeEventListener('click', _this.clickHandler);\r\n        });\r\n    };\r\n    Switcher.prototype.handleSwitcherClick = function (e) {\r\n        var target = e.target;\r\n        var switchableKey = target.dataset[this.switcherDataAttr];\r\n        var switchable = document.querySelector(\"[data-\" + this.switchableDataAttr + \"=\\\"\" + switchableKey + \"\\\"]\");\r\n        this.handleSwitchableClass(switchable);\r\n    };\r\n    Switcher.prototype.addClickListeners = function (switcher) {\r\n        switcher.addEventListener('click', this.clickHandler);\r\n    };\r\n    Switcher.prototype.camelize = function (str) {\r\n        return str.replace(/(?:^\\w|[A-Z]|\\b\\w)/g, function (letter, index) {\r\n            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();\r\n        }).replace(/(\\s|-)+/g, '');\r\n    };\r\n    Switcher.makeDefault = function () {\r\n        return new Switcher('switcher', 'switchable', 'switchable-class');\r\n    };\r\n    return Switcher;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/Switcher.ts?");

/***/ })

/******/ });
});