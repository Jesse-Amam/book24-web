module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/404.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\book24-web\\components\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("footer", {
    className: "plus_border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "container margin_60_35",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h3", {
    "data-target": "#collapse_ft_1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, "Quick Links"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, __jsx("ul", {
    className: "links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }
  }, "About us")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }
  }, "Faq")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }
  }, "Help")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  }, "My account")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }
  }, "Create account")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, "Contacts"))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("h3", {
    "data-target": "#collapse_ft_2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, "Categories"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, __jsx("ul", {
    className: "links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }
  }, "Shops")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 12
    }
  }, "Hotels")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 12
    }
  }, "Restaurants")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }
  }, "Bars")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 12
    }
  }, "Events")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 12
    }
  }, "Fitness"))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("h3", {
    "data-target": "#collapse_ft_3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, "Contacts"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, __jsx("ul", {
    className: "contacts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "ti-home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 12
    }
  }), "97845 Baker st. 567", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 58
    }
  }), "Los Angeles - US"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "ti-headphone-alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 12
    }
  }), "+39 06 97240120"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "ti-email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }
  }), __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 40
    }
  }, "info@sparker.com"))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("h3", {
    "data-target": "#collapse_ft_4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, "Keep in touch"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }
  }, __jsx("div", {
    id: "newsletter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "message-newsletter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 8
    }
  }), __jsx("form", {
    method: "post",
    action: "assets/newsletter.php",
    name: "newsletter_form",
    id: "newsletter_form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "email",
    name: "email_newsletter",
    id: "email_newsletter",
    className: "form-control",
    placeholder: "Your email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 10
    }
  }), __jsx("input", {
    type: "submit",
    value: "Submit",
    id: "submit-newsletter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 10
    }
  })))), __jsx("div", {
    className: "follow_us",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 8
    }
  }, "Follow Us"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 8
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "ti-facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 27
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "ti-twitter-alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 27
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "ti-google",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 27
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "ti-pinterest",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 27
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "ti-instagram",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 27
    }
  })))))))), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("ul", {
    id: "footer-selector",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "styled-select",
    id: "lang-selector",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }, __jsx("select", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: "English",
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 10
    }
  }, "English"), __jsx("option", {
    value: "French",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 10
    }
  }, "French"), __jsx("option", {
    value: "Spanish",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 10
    }
  }, "Spanish"), __jsx("option", {
    value: "Russian",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 10
    }
  }, "Russian")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "styled-select",
    id: "currency-selector",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 8
    }
  }, __jsx("select", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: "US Dollars",
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 10
    }
  }, "US Dollars"), __jsx("option", {
    value: "Euro",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 10
    }
  }, "Euro")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx("images", {
    src: "images/cards_all.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  })))), __jsx("div", {
    className: "col-lg-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("ul", {
    id: "additional_links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 6
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Terms and conditions")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "Privacy")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, "\xA9 2020 Sparker")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\book24-web\\components\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Header = () => {
  return __jsx("header", {
    className: "header menu_fixed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 1
    }
  }, __jsx("div", {
    id: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, __jsx("a", {
    href: "/index",
    title: "Sparker - Directory and listings template",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/images/logo.svg",
    width: "165",
    height: "35",
    alt: "",
    className: "logo_normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("img", {
    src: "/images/logo_sticky.svg",
    width: "165",
    height: "35",
    alt: "",
    className: "logo_sticky",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }))), __jsx("ul", {
    id: "top_menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, __jsx("a", {
    href: "/account",
    className: "btn_add",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 8
    }
  }, "Add Listing")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, __jsx("a", {
    href: "/#sign-in-dialog",
    id: "sign-in",
    className: "login",
    title: "Sign In",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 8
    }
  }, "Sign In")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }, __jsx("a", {
    href: "/wishlist",
    className: "wishlist_bt_top",
    title: "Your wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 8
    }
  }, "Your wishlist"))), __jsx("a", {
    href: "/#menu",
    className: "btn_mobile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "hamburger hamburger--spin",
    id: "hamburger",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "hamburger-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hamburger-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  })))), __jsx("nav", {
    id: "menu",
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "Home")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/index",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 23
    }
  }, "Home version 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/index-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 23
    }
  }, "Home version 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/index-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 23
    }
  }, "Home version 3")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/index-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 23
    }
  }, "Home version 4")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/index-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 23
    }
  }, "Home version 5")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/index-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 23
    }
  }, "Home version 6 (GDPR)")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/index-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 23
    }
  }, "Src Address Autocomplete")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "Listings")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, "Grid Layout")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/grid-listings-filterscol-search-aside",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 31
    }
  }, "Sidebar+Search mobile 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/grid-listings-filterstop-search-aside",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 31
    }
  }, "Full+Search mobile 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/grid-listings-filterscol",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 31
    }
  }, "Sidebar+Search mobile 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/grid-listings-filterstop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 31
    }
  }, "Full+Search mobile 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/grid-listings-isotope",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 31
    }
  }, "Full+Isotope filter")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, "Row Layout")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/row-listings-filterscol-search-aside",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 31
    }
  }, "Sidebar+Search mobile 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/row-listings-filterstop-search-aside",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 31
    }
  }, "Full+Search mobile 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/row-listings-filterscol",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 31
    }
  }, "Sidebar+Search mobile 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/row-listings-filterstop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 31
    }
  }, "Full+Search mobile 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/row-listings-isotope",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 31
    }
  }, "Full+Isotope filter")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/listing-map",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }, "Listing Map")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 20
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, "Open Street Map")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/grid-listings-filterscol-search-aside-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Sidebar+Search mobile 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/grid-listings-filterstop-search-aside-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Full+Search mobile 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/grid-listings-filterscol-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Sidebar+Search mobile 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/grid-listings-filterstop-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Full+Search mobile 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/grid-listings-isotope-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Full+Isotope filter")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/row-listings-filterscol-search-aside-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Sidebar+Search mobile 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/row-listings-filterstop-search-aside-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Full+Search mobile 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/row-listings-filterscol-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Sidebar+Search mobile 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/row-listings-filterstop-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Full+Search mobile 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/row-listings-isotope-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Full+Isotope filter")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/detail-hotel-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Detail page 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/listing-map-openstreetmap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Listing Map")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 18
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, "Detail pages")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/detail-hotel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 31
    }
  }, "Detail page 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/detail-restaurant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 31
    }
  }, "Detail page 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/detail-shop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 31
    }
  }, "Detail page 3")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/detail-carousel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 31
    }
  }, "Detail page Carousel 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/detail-carousel-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 31
    }
  }, "Detail page Carousel 2")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/bookings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 23
    }
  }, "Bookings - Purchases")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  }, "Checkout")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/confirm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  }, "Confirm")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "Pages")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/admin_section/index",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }, "Admin section")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 23
    }
  }, "Blog")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 23
    }
  }, "Account")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  }, "Help Section")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/faq",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 23
    }
  }, "Faq Section")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 23
    }
  }, "Wishlist page")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/contacts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 23
    }
  }, "Contacts")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, "Icon Packs")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/icon-pack-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 31
    }
  }, "Icon pack 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/icon-pack-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 31
    }
  }, "Icon pack 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/icon-pack-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 31
    }
  }, "Icon pack 3")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/icon-pack-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 31
    }
  }, "Icon pack 4")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 23
    }
  }, "About")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/media-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 23
    }
  }, "Media gallery")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/#0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, "Extra")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/404",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 23
    }
  }, "404 page")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/contacts-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, "Contacts 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/pricing-tables",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 23
    }
  }, "Pricing tables")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 23
    }
  }, "Login")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 23
    }
  }, "Register")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/menu-options",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 23
    }
  }, "Menu Options")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/invoice",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 23
    }
  }, "Invoice")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/coming_soon/index",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 23
    }
  }, "Coming Soon")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/thingstodo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, "Things to do"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/signInModal.js":
/*!***********************************!*\
  !*** ./components/signInModal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\book24-web\\components\\signInModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SignInModal = () => {
  return __jsx("div", {
    id: "sign-in-dialog",
    className: "zoom-anim-dialog mfp-hide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "small-dialog-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 4
    }
  }, "Sign In")), __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "sign-in-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("a", {
    href: "/#0",
    className: "social_bt facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Login with Facebook"), __jsx("a", {
    href: "/#0",
    className: "social_bt google",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Login with Google"), __jsx("div", {
    className: "divider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 30
    }
  }, "Or")), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, "Email"), __jsx("input", {
    type: "email",
    className: "form-control",
    name: "email",
    id: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }), __jsx("i", {
    className: "icon_mail_alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "form-control",
    name: "password",
    id: "password",
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }), __jsx("i", {
    className: "icon_lock_alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  })), __jsx("div", {
    className: "clearfix add_bottom_15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "checkboxes float-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, __jsx("label", {
    className: "container_check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "Remember me", __jsx("input", {
    type: "checkbox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "checkmark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }))), __jsx("div", {
    className: "float-right mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, __jsx("a", {
    id: "forgot",
    href: "javascript:void(0);",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 40
    }
  }, "Forgot Password?"))), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("input", {
    type: "submit",
    value: "Log In",
    className: "btn_1 full-width",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 34
    }
  })), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, "Don\u2019t have an account? ", __jsx("a", {
    href: "/register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "Sign up")), __jsx("div", {
    id: "forgot_pw",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Please confirm login email below"), __jsx("input", {
    type: "email",
    className: "form-control",
    name: "email_forgot",
    id: "email_forgot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("i", {
    className: "icon_mail_alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, "You will receive an email containing a link allowing you to reset your password to a new preferred one."), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, __jsx("input", {
    type: "submit",
    value: "Reset Password",
    className: "btn_1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 35
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignInModal);

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_signInModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/signInModal */ "./components/signInModal.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\book24-web\\pages\\404.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class FourOFour extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx("meta", {
      name: "description",
      content: "SPARKER - Premium directory and listings template by Ansonika.",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 14
      }
    }), __jsx("meta", {
      name: "author",
      content: "Ansonika",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }
    }, "SPARKER | Premium directory and listings template by Ansonika."), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }
    }), __jsx("link", {
      href: "css/bootstrap.min.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }
    }), __jsx("link", {
      href: "css/style.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }
    }), __jsx("link", {
      href: "css/vendors.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 2
      }
    }), __jsx("link", {
      href: "css/custom.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }
    })), __jsx("div", {
      id: "page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 3
      }
    }), __jsx("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "error_page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "row justify-content-center text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "col-xl-7 col-lg-9",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 8
      }
    }, "404 ", __jsx("i", {
      className: "icon_error-triangle_alt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 16
      }
    })), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 8
      }
    }, "We're sorry, but the page you were looking for doesn't exist."), __jsx("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "search_bar_error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "What are you looking for?",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 10
      }
    }), __jsx("input", {
      type: "submit",
      value: "Search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 10
      }
    }))))))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 2
      }
    })), __jsx(_components_signInModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 2
      }
    }), __jsx("div", {
      id: "toTop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 2
      }
    }), __jsx("script", {
      src: "js/common_scripts.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }
    }), __jsx("script", {
      src: "js/functions.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 2
      }
    }), __jsx("script", {
      src: "assets/validate.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 2
      }
    }), __jsx("script", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }
    }, `
		$('.wish_bt.liked').on('click', function (c) {
			$(this).parent().parent().parent().fadeOut('slow', function (c) {});
		});
        `));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FourOFour);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWduSW5Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy80MDQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJIZWFkZXIiLCJTaWduSW5Nb2RhbCIsIkZvdXJPRm91ciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFKLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFKLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFKLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFKLENBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFKLENBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFKLENBTkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFKLENBUEosQ0FESixDQURKLEVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTTtBQUFHLFFBQUksRUFBQyxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQU4sQ0FBSixFQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNO0FBQUcsUUFBSSxFQUFDLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyx3Q0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUFKLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsd0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBSixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLDJCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQUosQ0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQywyQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFKLENBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsd0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBSixDQUxKLENBRkosQ0FESixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU07QUFBRyxRQUFJLEVBQUMsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFOLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLHVDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQUosQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyx1Q0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFKLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsMEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBSixDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLDBCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUosQ0FKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyx1QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFKLENBTEosQ0FGSixDQVhKLEVBcUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyxjQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUosQ0FyQkosRUFzQks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUE7QUFBQTtB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S0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQU4sQ0FBSixFQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBSixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFKLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUosQ0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUosQ0FKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyxNQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUosQ0FMSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUosQ0FOSixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUosQ0FQSixFQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUE7QUFBQTtBQUFBLE9BQVU7Ozs7U0FBVixDQXpDRSxDQURGO0FBc0REOztBQWhFK0I7O0FBa0VuQk4sd0VBQWYsRTs7Ozs7Ozs7Ozs7QUN6RUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvNDA0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy80MDQuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuPGZvb3RlciBjbGFzc05hbWU9XCJwbHVzX2JvcmRlclwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWFyZ2luXzYwXzM1XCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0PGgzIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlX2Z0XzFcIj5RdWljayBMaW5rczwvaDM+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIGRvbnQtY29sbGFwc2Utc21cIiBpZD1cImNvbGxhcHNlX2Z0XzFcIj5cclxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvIzBcIj5BYm91dCB1czwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiLyMwXCI+RmFxPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvIzBcIj5IZWxwPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvIzBcIj5NeSBhY2NvdW50PC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvIzBcIj5DcmVhdGUgYWNjb3VudDwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiLyMwXCI+Q29udGFjdHM8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTZcIj5cclxuXHRcdFx0XHRcdDxoMyBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZV9mdF8yXCI+Q2F0ZWdvcmllczwvaDM+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIGRvbnQtY29sbGFwc2Utc21cIiBpZD1cImNvbGxhcHNlX2Z0XzJcIj5cclxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvIzBcIj5TaG9wczwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiLyMwXCI+SG90ZWxzPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvIzBcIj5SZXN0YXVyYW50czwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiLyMwXCI+QmFyczwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiLyMwXCI+RXZlbnRzPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvIzBcIj5GaXRuZXNzPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS02XCI+XHJcblx0XHRcdFx0XHQ8aDMgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2VfZnRfM1wiPkNvbnRhY3RzPC9oMz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgZG9udC1jb2xsYXBzZS1zbVwiIGlkPVwiY29sbGFwc2VfZnRfM1wiPlxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiY29udGFjdHNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwidGktaG9tZVwiPjwvaT45Nzg0NSBCYWtlciBzdC4gNTY3PGJyLz5Mb3MgQW5nZWxlcyAtIFVTPC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwidGktaGVhZHBob25lLWFsdFwiPjwvaT4rMzkgMDYgOTcyNDAxMjA8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJ0aS1lbWFpbFwiPjwvaT48YSBocmVmPVwiLyMwXCI+aW5mb0BzcGFya2VyLmNvbTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG5cdFx0XHRcdFx0PGgzIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlX2Z0XzRcIj5LZWVwIGluIHRvdWNoPC9oMz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgZG9udC1jb2xsYXBzZS1zbVwiIGlkPVwiY29sbGFwc2VfZnRfNFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwibmV3c2xldHRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJtZXNzYWdlLW5ld3NsZXR0ZXJcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiYXNzZXRzL25ld3NsZXR0ZXIucGhwXCIgbmFtZT1cIm5ld3NsZXR0ZXJfZm9ybVwiIGlkPVwibmV3c2xldHRlcl9mb3JtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbF9uZXdzbGV0dGVyXCIgaWQ9XCJlbWFpbF9uZXdzbGV0dGVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgaWQ9XCJzdWJtaXQtbmV3c2xldHRlclwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9sbG93X3VzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGg1PkZvbGxvdyBVczwvaDU+XHJcblx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvIzBcIj48aSBjbGFzc05hbWU9XCJ0aS1mYWNlYm9va1wiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiLyMwXCI+PGkgY2xhc3NOYW1lPVwidGktdHdpdHRlci1hbHRcIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi8jMFwiPjxpIGNsYXNzTmFtZT1cInRpLWdvb2dsZVwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiLyMwXCI+PGkgY2xhc3NOYW1lPVwidGktcGludGVyZXN0XCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvIzBcIj48aSBjbGFzc05hbWU9XCJ0aS1pbnN0YWdyYW1cIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxoci8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG5cdFx0XHRcdFx0PHVsIGlkPVwiZm9vdGVyLXNlbGVjdG9yXCI+XHJcblx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0eWxlZC1zZWxlY3RcIiBpZD1cImxhbmctc2VsZWN0b3JcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJFbmdsaXNoXCIgc2VsZWN0ZWQ+RW5nbGlzaDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiRnJlbmNoXCI+RnJlbmNoPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJTcGFuaXNoXCI+U3BhbmlzaDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUnVzc2lhblwiPlJ1c3NpYW48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdHlsZWQtc2VsZWN0XCIgaWQ9XCJjdXJyZW5jeS1zZWxlY3RvclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlVTIERvbGxhcnNcIiBzZWxlY3RlZD5VUyBEb2xsYXJzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJFdXJvXCI+RXVybzwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT48aW1hZ2VzIHNyYz1cImltYWdlcy9jYXJkc19hbGwuc3ZnXCIgYWx0PVwiXCIvPjwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuXHRcdFx0XHRcdDx1bCBpZD1cImFkZGl0aW9uYWxfbGlua3NcIj5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvIzBcIj5UZXJtcyBhbmQgY29uZGl0aW9uczwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi8jMFwiPlByaXZhY3k8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPjxzcGFuPsKpIDIwMjAgU3Bhcmtlcjwvc3Bhbj48L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Zvb3Rlcj5cclxuXHRcclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbjxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIG1lbnVfZml4ZWRcIj5cclxuXHRcdDxkaXYgaWQ9XCJsb2dvXCI+XHJcblx0XHRcdDxhIGhyZWY9XCIvaW5kZXhcIiB0aXRsZT1cIlNwYXJrZXIgLSBEaXJlY3RvcnkgYW5kIGxpc3RpbmdzIHRlbXBsYXRlXCI+XHJcblx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgd2lkdGg9XCIxNjVcIiBoZWlnaHQ9XCIzNVwiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImxvZ29fbm9ybWFsXCIvPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvX3N0aWNreS5zdmdcIiB3aWR0aD1cIjE2NVwiIGhlaWdodD1cIjM1XCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwibG9nb19zdGlja3lcIi8+XHJcblx0XHRcdDwvYT5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PHVsIGlkPVwidG9wX21lbnVcIj5cclxuXHRcdFx0PGxpPjxhIGhyZWY9XCIvYWNjb3VudFwiIGNsYXNzTmFtZT1cImJ0bl9hZGRcIj5BZGQgTGlzdGluZzwvYT48L2xpPlxyXG5cdFx0XHQ8bGk+PGEgaHJlZj1cIi8jc2lnbi1pbi1kaWFsb2dcIiBpZD1cInNpZ24taW5cIiBjbGFzc05hbWU9XCJsb2dpblwiIHRpdGxlPVwiU2lnbiBJblwiPlNpZ24gSW48L2E+PC9saT5cclxuXHRcdFx0PGxpPjxhIGhyZWY9XCIvd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJ3aXNobGlzdF9idF90b3BcIiB0aXRsZT1cIllvdXIgd2lzaGxpc3RcIj5Zb3VyIHdpc2hsaXN0PC9hPjwvbGk+XHJcblx0XHQ8L3VsPlxyXG5cdFx0PGEgaHJlZj1cIi8jbWVudVwiIGNsYXNzTmFtZT1cImJ0bl9tb2JpbGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXIgaGFtYnVyZ2VyLS1zcGluXCIgaWQ9XCJoYW1idXJnZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWlubmVyXCI+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9hPlxyXG5cdFx0PG5hdiBpZD1cIm1lbnVcIiBjbGFzc05hbWU9XCJtYWluLW1lbnVcIj5cclxuXHRcdCAgICA8dWw+XHJcblx0XHQgICAgICAgIDxsaT48c3Bhbj48YSBocmVmPVwiLyMwXCI+SG9tZTwvYT48L3NwYW4+XHJcblx0XHQgICAgICAgICAgICA8dWw+XHJcblx0XHQgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvaW5kZXhcIj5Ib21lIHZlcnNpb24gMTwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2luZGV4LTJcIj5Ib21lIHZlcnNpb24gMjwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2luZGV4LTNcIj5Ib21lIHZlcnNpb24gMzwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2luZGV4LTRcIj5Ib21lIHZlcnNpb24gNDwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2luZGV4LTVcIj5Ib21lIHZlcnNpb24gNTwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2luZGV4LTZcIj5Ib21lIHZlcnNpb24gNiAoR0RQUik8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9pbmRleC03XCI+U3JjIEFkZHJlc3MgQXV0b2NvbXBsZXRlPC9hPjwvbGk+XHJcblx0XHQgICAgICAgICAgICA8L3VsPlxyXG5cdFx0ICAgICAgICA8L2xpPlxyXG5cdFx0ICAgICAgICA8bGk+PHNwYW4+PGEgaHJlZj1cIi8jMFwiPkxpc3RpbmdzPC9hPjwvc3Bhbj5cclxuXHRcdCAgICAgICAgICAgIDx1bD5cclxuXHRcdCAgICAgICAgICAgICAgICA8bGk+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCIvIzBcIj5HcmlkIExheW91dDwvYT48L3NwYW4+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2dyaWQtbGlzdGluZ3MtZmlsdGVyc2NvbC1zZWFyY2gtYXNpZGVcIj5TaWRlYmFyK1NlYXJjaCBtb2JpbGUgMTwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZ3JpZC1saXN0aW5ncy1maWx0ZXJzdG9wLXNlYXJjaC1hc2lkZVwiPkZ1bGwrU2VhcmNoIG1vYmlsZSAxPC9hPjwvbGk+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9ncmlkLWxpc3RpbmdzLWZpbHRlcnNjb2xcIj5TaWRlYmFyK1NlYXJjaCBtb2JpbGUgMjwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZ3JpZC1saXN0aW5ncy1maWx0ZXJzdG9wXCI+RnVsbCtTZWFyY2ggbW9iaWxlIDI8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2dyaWQtbGlzdGluZ3MtaXNvdG9wZVwiPkZ1bGwrSXNvdG9wZSBmaWx0ZXI8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGEgaHJlZj1cIi8jMFwiPlJvdyBMYXlvdXQ8L2E+PC9zcGFuPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9yb3ctbGlzdGluZ3MtZmlsdGVyc2NvbC1zZWFyY2gtYXNpZGVcIj5TaWRlYmFyK1NlYXJjaCBtb2JpbGUgMTwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvcm93LWxpc3RpbmdzLWZpbHRlcnN0b3Atc2VhcmNoLWFzaWRlXCI+RnVsbCtTZWFyY2ggbW9iaWxlIDE8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3Jvdy1saXN0aW5ncy1maWx0ZXJzY29sXCI+U2lkZWJhcitTZWFyY2ggbW9iaWxlIDI8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3Jvdy1saXN0aW5ncy1maWx0ZXJzdG9wXCI+RnVsbCtTZWFyY2ggbW9iaWxlIDI8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3Jvdy1saXN0aW5ncy1pc290b3BlXCI+RnVsbCtJc290b3BlIGZpbHRlcjwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHQgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGlzdGluZy1tYXBcIj5MaXN0aW5nIE1hcDwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgICA8bGk+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCIvIzBcIj5PcGVuIFN0cmVldCBNYXA8L2E+PC9zcGFuPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9ncmlkLWxpc3RpbmdzLWZpbHRlcnNjb2wtc2VhcmNoLWFzaWRlLW9wZW5zdHJlZXRtYXBcIj5TaWRlYmFyK1NlYXJjaCBtb2JpbGUgMTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvZ3JpZC1saXN0aW5ncy1maWx0ZXJzdG9wLXNlYXJjaC1hc2lkZS1vcGVuc3RyZWV0bWFwXCI+RnVsbCtTZWFyY2ggbW9iaWxlIDE8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL2dyaWQtbGlzdGluZ3MtZmlsdGVyc2NvbC1vcGVuc3RyZWV0bWFwXCI+U2lkZWJhcitTZWFyY2ggbW9iaWxlIDI8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL2dyaWQtbGlzdGluZ3MtZmlsdGVyc3RvcC1vcGVuc3RyZWV0bWFwXCI+RnVsbCtTZWFyY2ggbW9iaWxlIDI8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL2dyaWQtbGlzdGluZ3MtaXNvdG9wZS1vcGVuc3RyZWV0bWFwXCI+RnVsbCtJc290b3BlIGZpbHRlcjwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvcm93LWxpc3RpbmdzLWZpbHRlcnNjb2wtc2VhcmNoLWFzaWRlLW9wZW5zdHJlZXRtYXBcIj5TaWRlYmFyK1NlYXJjaCBtb2JpbGUgMTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvcm93LWxpc3RpbmdzLWZpbHRlcnN0b3Atc2VhcmNoLWFzaWRlLW9wZW5zdHJlZXRtYXBcIj5GdWxsK1NlYXJjaCBtb2JpbGUgMTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvcm93LWxpc3RpbmdzLWZpbHRlcnNjb2wtb3BlbnN0cmVldG1hcFwiPlNpZGViYXIrU2VhcmNoIG1vYmlsZSAyPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9yb3ctbGlzdGluZ3MtZmlsdGVyc3RvcC1vcGVuc3RyZWV0bWFwXCI+RnVsbCtTZWFyY2ggbW9iaWxlIDI8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL3Jvdy1saXN0aW5ncy1pc290b3BlLW9wZW5zdHJlZXRtYXBcIj5GdWxsK0lzb3RvcGUgZmlsdGVyPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9kZXRhaWwtaG90ZWwtb3BlbnN0cmVldG1hcFwiPkRldGFpbCBwYWdlIDE8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL2xpc3RpbmctbWFwLW9wZW5zdHJlZXRtYXBcIj5MaXN0aW5nIE1hcDwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHQgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdCAgICAgICAgICAgICAgIDxsaT5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGEgaHJlZj1cIi8jMFwiPkRldGFpbCBwYWdlczwvYT48L3NwYW4+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RldGFpbC1ob3RlbFwiPkRldGFpbCBwYWdlIDE8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RldGFpbC1yZXN0YXVyYW50XCI+RGV0YWlsIHBhZ2UgMjwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZGV0YWlsLXNob3BcIj5EZXRhaWwgcGFnZSAzPC9hPjwvbGk+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kZXRhaWwtY2Fyb3VzZWxcIj5EZXRhaWwgcGFnZSBDYXJvdXNlbCAxPC9hPjwvbGk+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kZXRhaWwtY2Fyb3VzZWwtMlwiPkRldGFpbCBwYWdlIENhcm91c2VsIDI8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHRcdCAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2Jvb2tpbmdzXCI+Qm9va2luZ3MgLSBQdXJjaGFzZXM8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jaGVja291dFwiPkNoZWNrb3V0PC9hPjwvbGk+XHJcblx0XHQgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvY29uZmlybVwiPkNvbmZpcm08L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgIDwvdWw+XHJcblx0XHQgICAgICAgIDwvbGk+XHJcblx0XHQgICAgICAgIDxsaT48c3Bhbj48YSBocmVmPVwiLyMwXCI+UGFnZXM8L2E+PC9zcGFuPlxyXG5cdFx0ICAgICAgICAgICAgPHVsPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FkbWluX3NlY3Rpb24vaW5kZXhcIj5BZG1pbiBzZWN0aW9uPC9hPjwvbGk+XHJcblx0XHQgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYmxvZ1wiPkJsb2c8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hY2NvdW50XCI+QWNjb3VudDwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2hlbHBcIj5IZWxwIFNlY3Rpb248L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9mYXFcIj5GYXEgU2VjdGlvbjwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3dpc2hsaXN0XCI+V2lzaGxpc3QgcGFnZTwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2NvbnRhY3RzXCI+Q29udGFjdHM8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICA8bGk+XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCIvIzBcIj5JY29uIFBhY2tzPC9hPjwvc3Bhbj5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvaWNvbi1wYWNrLTFcIj5JY29uIHBhY2sgMTwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvaWNvbi1wYWNrLTJcIj5JY29uIHBhY2sgMjwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvaWNvbi1wYWNrLTNcIj5JY29uIHBhY2sgMzwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvaWNvbi1wYWNrLTRcIj5JY29uIHBhY2sgNDwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHQgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL21lZGlhLWdhbGxlcnlcIj5NZWRpYSBnYWxsZXJ5PC9hPjwvbGk+XHJcblx0XHQgICAgICAgICAgICA8L3VsPlxyXG5cdFx0ICAgICAgICA8L2xpPlxyXG5cdFx0ICAgICAgICA8bGk+PHNwYW4+PGEgaHJlZj1cIi8jMFwiPkV4dHJhPC9hPjwvc3Bhbj5cclxuXHRcdCAgICAgICAgICAgIDx1bD5cclxuXHRcdCAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi80MDRcIj40MDQgcGFnZTwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2NvbnRhY3RzLTJcIj5Db250YWN0cyAyPC9hPjwvbGk+XHJcblx0XHQgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvcHJpY2luZy10YWJsZXNcIj5QcmljaW5nIHRhYmxlczwvYT48L2xpPlxyXG5cdFx0ICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2xvZ2luXCI+TG9naW48L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9yZWdpc3RlclwiPlJlZ2lzdGVyPC9hPjwvbGk+XHJcblx0XHQgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbWVudS1vcHRpb25zXCI+TWVudSBPcHRpb25zPC9hPjwvbGk+XHJcblx0XHQgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvaW52b2ljZVwiPkludm9pY2U8L2E+PC9saT5cclxuXHRcdCAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jb21pbmdfc29vbi9pbmRleFwiPkNvbWluZyBTb29uPC9hPjwvbGk+XHJcblx0XHQgICAgICAgICAgICA8L3VsPlxyXG5cdFx0ICAgICAgICA8L2xpPlxyXG5cdFx0ICAgICAgICA8bGk+PHNwYW4+PGEgaHJlZj1cIi90aGluZ3N0b2RvXCI+VGhpbmdzIHRvIGRvPC9hPjwvc3Bhbj48L2xpPlxyXG5cdFx0ICAgIDwvdWw+XHJcblx0XHQ8L25hdj5cclxuXHQ8L2hlYWRlcj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJjb25zdCBTaWduSW5Nb2RhbCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbjxkaXYgaWQ9XCJzaWduLWluLWRpYWxvZ1wiIGNsYXNzTmFtZT1cInpvb20tYW5pbS1kaWFsb2cgbWZwLWhpZGVcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtZGlhbG9nLWhlYWRlclwiPlxyXG5cdFx0XHQ8aDM+U2lnbiBJbjwvaDM+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxmb3JtPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZ24taW4td3JhcHBlclwiPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIvIzBcIiBjbGFzc05hbWU9XCJzb2NpYWxfYnQgZmFjZWJvb2tcIj5Mb2dpbiB3aXRoIEZhY2Vib29rPC9hPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIvIzBcIiBjbGFzc05hbWU9XCJzb2NpYWxfYnQgZ29vZ2xlXCI+TG9naW4gd2l0aCBHb29nbGU8L2E+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PHNwYW4+T3I8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIi8+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJpY29uX21haWxfYWx0XCI+PC9pPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgdmFsdWU9XCJcIi8+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJpY29uX2xvY2tfYWx0XCI+PC9pPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggYWRkX2JvdHRvbV8xNVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGVja2JveGVzIGZsb2F0LWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lcl9jaGVja1wiPlJlbWVtYmVyIG1lXHJcblx0XHRcdFx0XHRcdCAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz5cclxuXHRcdFx0XHRcdFx0ICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgbXQtMVwiPjxhIGlkPVwiZm9yZ290XCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9nIEluXCIgY2xhc3NOYW1lPVwiYnRuXzEgZnVsbC13aWR0aFwiLz48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHREb27igJl0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj1cIi9yZWdpc3RlclwiPlNpZ24gdXA8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBpZD1cImZvcmdvdF9wd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5QbGVhc2UgY29uZmlybSBsb2dpbiBlbWFpbCBiZWxvdzwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxfZm9yZ290XCIgaWQ9XCJlbWFpbF9mb3Jnb3RcIi8+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImljb25fbWFpbF9hbHRcIj48L2k+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxwPllvdSB3aWxsIHJlY2VpdmUgYW4gZW1haWwgY29udGFpbmluZyBhIGxpbmsgYWxsb3dpbmcgeW91IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQgdG8gYSBuZXcgcHJlZmVycmVkIG9uZS48L3A+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJlc2V0IFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYnRuXzFcIi8+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9mb3JtPlxyXG5cdDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Nb2RhbDsiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IFNpZ25Jbk1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvc2lnbkluTW9kYWwnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuY2xhc3MgRm91ck9Gb3VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHt9XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTUEFSS0VSIC0gUHJlbWl1bSBkaXJlY3RvcnkgYW5kIGxpc3RpbmdzIHRlbXBsYXRlIGJ5IEFuc29uaWthLlwiLz5cclxuICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQW5zb25pa2FcIi8+XHJcbiAgICA8dGl0bGU+U1BBUktFUiB8IFByZW1pdW0gZGlyZWN0b3J5IGFuZCBsaXN0aW5ncyB0ZW1wbGF0ZSBieSBBbnNvbmlrYS48L3RpdGxlPlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgIDxsaW5rIGhyZWY9XCJjc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgPGxpbmsgaHJlZj1cImNzcy9zdHlsZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG5cdDxsaW5rIGhyZWY9XCJjc3MvdmVuZG9ycy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgPGxpbmsgaHJlZj1cImNzcy9jdXN0b20uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBpZD1cInBhZ2VcIj5cclxuXHRcdDxIZWFkZXIvPlxyXG5cdFxyXG4gICAgICAgIDxtYWluPlxyXG5cdFx0PGRpdiBpZD1cImVycm9yX3BhZ2VcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNyBjb2wtbGctOVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMj40MDQgPGkgY2xhc3NOYW1lPVwiaWNvbl9lcnJvci10cmlhbmdsZV9hbHRcIj48L2k+PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5XZSdyZSBzb3JyeSwgYnV0IHRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3QuPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxmb3JtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfYmFyX2Vycm9yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgeW91IGxvb2tpbmcgZm9yP1wiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlYXJjaFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L21haW4+XHJcblx0PEZvb3Rlci8+XHJcblx0PC9kaXY+XHJcblx0PFNpZ25Jbk1vZGFsIC8+XHRcclxuXHQ8ZGl2IGlkPVwidG9Ub3BcIj48L2Rpdj5cclxuICAgIDxzY3JpcHQgc3JjPVwianMvY29tbW9uX3NjcmlwdHMuanNcIj48L3NjcmlwdD5cclxuXHQ8c2NyaXB0IHNyYz1cImpzL2Z1bmN0aW9ucy5qc1wiPjwvc2NyaXB0PlxyXG5cdDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZhbGlkYXRlLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8c2NyaXB0PntgXHJcblx0XHQkKCcud2lzaF9idC5saWtlZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmFkZU91dCgnc2xvdycsIGZ1bmN0aW9uIChjKSB7fSk7XHJcblx0XHR9KTtcclxuICAgICAgICBgfTwvc2NyaXB0PlxyXG4gICAgICAgIHsvKiA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb3VyT0ZvdXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==