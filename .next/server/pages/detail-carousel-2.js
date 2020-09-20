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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UvHB");


/***/ }),

/***/ "M94v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SignInModal = () => {
  return __jsx("div", {
    id: "sign-in-dialog",
    className: "zoom-anim-dialog mfp-hide"
  }, __jsx("div", {
    className: "small-dialog-header"
  }, __jsx("h3", null, "Sign In")), __jsx("form", null, __jsx("div", {
    className: "sign-in-wrapper"
  }, __jsx("a", {
    href: "/#0",
    className: "social_bt facebook"
  }, "Login with Facebook"), __jsx("a", {
    href: "/#0",
    className: "social_bt google"
  }, "Login with Google"), __jsx("div", {
    className: "divider"
  }, __jsx("span", null, "Or")), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Email"), __jsx("input", {
    type: "email",
    className: "form-control",
    name: "email",
    id: "email"
  }), __jsx("i", {
    className: "icon_mail_alt"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Password"), __jsx("input", {
    type: "password",
    className: "form-control",
    name: "password",
    id: "password",
    value: ""
  }), __jsx("i", {
    className: "icon_lock_alt"
  })), __jsx("div", {
    className: "clearfix add_bottom_15"
  }, __jsx("div", {
    className: "checkboxes float-left"
  }, __jsx("label", {
    className: "container_check"
  }, "Remember me", __jsx("input", {
    type: "checkbox"
  }), __jsx("span", {
    className: "checkmark"
  }))), __jsx("div", {
    className: "float-right mt-1"
  }, __jsx("a", {
    id: "forgot",
    href: "javascript:void(0);"
  }, "Forgot Password?"))), __jsx("div", {
    className: "text-center"
  }, __jsx("input", {
    type: "submit",
    value: "Log In",
    className: "btn_1 full-width"
  })), __jsx("div", {
    className: "text-center"
  }, "Don\u2019t have an account? ", __jsx("a", {
    href: "/register"
  }, "Sign up")), __jsx("div", {
    id: "forgot_pw"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Please confirm login email below"), __jsx("input", {
    type: "email",
    className: "form-control",
    name: "email_forgot",
    id: "email_forgot"
  }), __jsx("i", {
    className: "icon_mail_alt"
  })), __jsx("p", null, "You will receive an email containing a link allowing you to reset your password to a new preferred one."), __jsx("div", {
    className: "text-center"
  }, __jsx("input", {
    type: "submit",
    value: "Reset Password",
    className: "btn_1"
  }))))));
};

/* harmony default export */ __webpack_exports__["a"] = (SignInModal);

/***/ }),

/***/ "UvHB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZHh6");
/* harmony import */ var _components_signInModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("M94v");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aIN1");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xeH2");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class DetailCarousel2 extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("meta", {
      name: "description",
      content: "SPARKER - Premium directory and listings template by Ansonika."
    }), __jsx("meta", {
      name: "author",
      content: "Ansonika"
    }), __jsx("title", null, "SPARKER | Premium directory and listings template by Ansonika."), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "css/bootstrap.min.css",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "css/style.css",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "css/vendors.css",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "css/custom.css",
      rel: "stylesheet"
    })), __jsx("div", {
      id: "page"
    }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), __jsx("main", null, __jsx("nav", {
      class: "secondary_nav sticky_horizontal_2"
    }, __jsx("div", {
      class: "container"
    }, __jsx("ul", {
      class: "clearfix"
    }, __jsx("li", null, __jsx("a", {
      href: "#description",
      class: "active"
    }, "Description")), __jsx("li", null, __jsx("a", {
      href: "#reviews"
    }, "Reviews")), __jsx("li", null, __jsx("a", {
      href: "#sidebar"
    }, "Booking"))))), __jsx("div", {
      class: "container margin_60_35"
    }, __jsx("div", {
      class: "row"
    }, __jsx("div", {
      class: "col-lg-8"
    }, __jsx("div", {
      id: "carousel_in",
      class: "owl-carousel owl-theme add_bottom_30"
    }, __jsx("div", {
      class: "item"
    }, __jsx("img", {
      src: "/images/carousel_detail_1.jpg",
      alt: ""
    })), __jsx("div", {
      class: "item"
    }, __jsx("img", {
      src: "/images/carousel_detail_2.jpg",
      alt: ""
    })), __jsx("div", {
      class: "item"
    }, __jsx("img", {
      src: "/images/carousel_detail_3.jpg",
      alt: ""
    })), __jsx("div", {
      class: "item"
    }, __jsx("img", {
      src: "/images/carousel_detail_4.jpg",
      alt: ""
    }))), __jsx("section", {
      id: "description"
    }, __jsx("div", {
      class: "detail_title_1"
    }, __jsx("div", {
      class: "cat_star"
    }, __jsx("i", {
      class: "icon_star"
    }), __jsx("i", {
      class: "icon_star"
    }), __jsx("i", {
      class: "icon_star"
    }), __jsx("i", {
      class: "icon_star"
    })), __jsx("h1", null, "Hotel Mariott"), __jsx("a", {
      class: "address",
      href: "https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
    }, "438 Rush Green Road, Romford")), __jsx("p", null, "Per consequat adolescens ex, cu nibh commune ", __jsx("strong", null, "temporibus vim"), ", ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at."), __jsx("p", null, "Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint ", __jsx("strong", null, "blandit"), " efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune."), __jsx("h5", {
      class: "add_bottom_15"
    }, "Amenities"), __jsx("div", {
      class: "row add_bottom_30"
    }, __jsx("div", {
      class: "col-lg-6"
    }, __jsx("ul", {
      class: "bullets"
    }, __jsx("li", null, "Dolorem mediocritatem"), __jsx("li", null, "Mea appareat"), __jsx("li", null, "Prima causae"), __jsx("li", null, "Singulis indoctum"))), __jsx("div", {
      class: "col-lg-6"
    }, __jsx("ul", {
      class: "bullets"
    }, __jsx("li", null, "Timeam inimicus"), __jsx("li", null, "Oportere democritum"), __jsx("li", null, "Cetero inermis"), __jsx("li", null, "Pertinacia eum")))), __jsx("hr", null), __jsx("div", {
      class: "room_type first"
    }, __jsx("div", {
      class: "row"
    }, __jsx("div", {
      class: "col-md-4"
    }, __jsx("img", {
      src: "/images/gallery/hotel_list_1.jpg",
      class: "img-fluid",
      alt: ""
    })), __jsx("div", {
      class: "col-md-8"
    }, __jsx("h4", null, "Single Room"), __jsx("p", null, "Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at."), __jsx("ul", {
      class: "hotel_facilities"
    }, __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_2.svg",
      alt: ""
    }), "Single Bed"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_4.svg",
      alt: ""
    }), "Free Wifi"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_5.svg",
      alt: ""
    }), "Shower"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_7.svg",
      alt: ""
    }), "Air Condition"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_8.svg",
      alt: ""
    }), "Hairdryer"))))), __jsx("div", {
      class: "room_type alternate"
    }, __jsx("div", {
      class: "row"
    }, __jsx("div", {
      class: "col-md-4"
    }, __jsx("img", {
      src: "/images/gallery/hotel_list_2.jpg",
      class: "img-fluid",
      alt: ""
    })), __jsx("div", {
      class: "col-md-8"
    }, __jsx("h4", null, "Double Room"), __jsx("p", null, "Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at."), __jsx("ul", {
      class: "hotel_facilities"
    }, __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_3.svg",
      alt: ""
    }), "Double Bed"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_4.svg",
      alt: ""
    }), "Free Wifi"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_6.svg",
      alt: ""
    }), "Bathtub"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_7.svg",
      alt: ""
    }), "Air Condition"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_8.svg",
      alt: ""
    }), "Hairdryer"))))), __jsx("div", {
      class: "room_type last"
    }, __jsx("div", {
      class: "row"
    }, __jsx("div", {
      class: "col-md-4"
    }, __jsx("img", {
      src: "/images/gallery/hotel_list_3.jpg",
      class: "img-fluid",
      alt: ""
    })), __jsx("div", {
      class: "col-md-8"
    }, __jsx("h4", null, "Suite Room"), __jsx("p", null, "Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at."), __jsx("ul", {
      class: "hotel_facilities"
    }, __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_3.svg",
      alt: ""
    }), "King size Bed"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_4.svg",
      alt: ""
    }), "Free Wifi"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_6.svg",
      alt: ""
    }), "Bathtub"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_7.svg",
      alt: ""
    }), "Air Condition"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_9.svg",
      alt: ""
    }), "Swimming pool"), __jsx("li", null, __jsx("img", {
      src: "/images/hotel_facilites_icon_3.svg",
      alt: ""
    }), "Hairdryer"))))), __jsx("hr", null), __jsx("h3", null, "Prices"), __jsx("table", {
      class: "table table-striped add_bottom_45"
    }, __jsx("tbody", null, __jsx("tr", null, __jsx("td", null, "Low (from 23/03 to 31/05)"), __jsx("td", null, "140$")), __jsx("tr", null, __jsx("td", null, "Middle (from 23/03 to 31/05)"), __jsx("td", null, "180$")), __jsx("tr", null, __jsx("td", null, "High (from 23/03 to 31/05)"), __jsx("td", null, "200$")))), __jsx("hr", null), __jsx("h3", null, "Location"), __jsx("div", {
      id: "map",
      class: "map map_single add_bottom_45"
    })), __jsx("section", {
      id: "reviews"
    }, __jsx("h2", null, "Reviews"), __jsx("div", {
      class: "reviews-container add_bottom_30"
    }, __jsx("div", {
      class: "row"
    }, __jsx("div", {
      class: "col-lg-3"
    }, __jsx("div", {
      id: "review_summary"
    }, __jsx("strong", null, "8.5"), __jsx("em", null, "Superb"), __jsx("small", null, "Based on 4 reviews"))), __jsx("div", {
      class: "col-lg-9"
    }, __jsx("div", {
      class: "row"
    }, __jsx("div", {
      class: "col-lg-10 col-9"
    }, __jsx("div", {
      class: "progress"
    }, __jsx("div", {
      class: "progress-bar",
      role: "progressbar",
      style: "width: 90%",
      "aria-valuenow": "90",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }))), __jsx("div", {
      class: "col-lg-2 col-3"
    }, __jsx("small", null, __jsx("strong", null, "5 stars")))), __jsx("div", {
      class: "row"
    }, __jsx("div", {
      class: "col-lg-10 col-9"
    }, __jsx("div", {
      class: "progress"
    }, __jsx("div", {
      class: "progress-bar",
      role: "progressbar",
      style: "width: 95%",
      "aria-valuenow": "95",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }))), __jsx("div", {
      class: "col-lg-2 col-3"
    }, __jsx("small", null, __jsx("strong", null, "4 stars")))), __jsx("div", {
      class: "row"
    }, __jsx("div", {
      class: "col-lg-10 col-9"
    }, __jsx("div", {
      class: "progress"
    }, __jsx("div", {
      class: "progress-bar",
      role: "progressbar",
      style: "width: 60%",
      "aria-valuenow": "60",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }))), __jsx("div", {
      class: "col-lg-2 col-3"
    }, __jsx("small", null, __jsx("strong", null, "3 stars")))), __jsx("div", {
      class: "row"
    }, __jsx("div", {
      class: "col-lg-10 col-9"
    }, __jsx("div", {
      class: "progress"
    }, __jsx("div", {
      class: "progress-bar",
      role: "progressbar",
      style: "width: 20%",
      "aria-valuenow": "20",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }))), __jsx("div", {
      class: "col-lg-2 col-3"
    }, __jsx("small", null, __jsx("strong", null, "2 stars")))), __jsx("div", {
      class: "row"
    }, __jsx("div", {
      class: "col-lg-10 col-9"
    }, __jsx("div", {
      class: "progress"
    }, __jsx("div", {
      class: "progress-bar",
      role: "progressbar",
      style: "width: 0",
      "aria-valuenow": "0",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }))), __jsx("div", {
      class: "col-lg-2 col-3"
    }, __jsx("small", null, __jsx("strong", null, "1 stars"))))))), __jsx("div", {
      class: "reviews-container"
    }, __jsx("div", {
      class: "review-box clearfix"
    }, __jsx("figure", {
      class: "rev-thumb"
    }, __jsx("img", {
      src: "/images/avatar1.jpg",
      alt: ""
    })), __jsx("div", {
      class: "rev-content"
    }, __jsx("div", {
      class: "rating"
    }, __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star"
    })), __jsx("div", {
      class: "rev-info"
    }, "Admin \u2013 April 03, 2016:"), __jsx("div", {
      class: "rev-text"
    }, __jsx("p", null, "Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis")))), __jsx("div", {
      class: "review-box clearfix"
    }, __jsx("figure", {
      class: "rev-thumb"
    }, __jsx("img", {
      src: "/images/avatar2.jpg",
      alt: ""
    })), __jsx("div", {
      class: "rev-content"
    }, __jsx("div", {
      class: "rating"
    }, __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star"
    })), __jsx("div", {
      class: "rev-info"
    }, "Ahsan \u2013 April 01, 2016:"), __jsx("div", {
      class: "rev-text"
    }, __jsx("p", null, "Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis")))), __jsx("div", {
      class: "review-box clearfix"
    }, __jsx("figure", {
      class: "rev-thumb"
    }, __jsx("img", {
      src: "/images/avatar3.jpg",
      alt: ""
    })), __jsx("div", {
      class: "rev-content"
    }, __jsx("div", {
      class: "rating"
    }, __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star voted"
    }), __jsx("i", {
      class: "icon_star"
    })), __jsx("div", {
      class: "rev-info"
    }, "Sara \u2013 March 31, 2016:"), __jsx("div", {
      class: "rev-text"
    }, __jsx("p", null, "Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis")))))), __jsx("hr", null), __jsx("div", {
      class: "add-review"
    }, __jsx("h5", null, "Leave a Review"), __jsx("form", null, __jsx("div", {
      class: "row"
    }, __jsx("div", {
      class: "form-group col-md-6"
    }, __jsx("label", null, "Name and Lastname *"), __jsx("input", {
      type: "text",
      name: "name_review",
      id: "name_review",
      placeholder: "",
      class: "form-control"
    })), __jsx("div", {
      class: "form-group col-md-6"
    }, __jsx("label", null, "Email *"), __jsx("input", {
      type: "email",
      name: "email_review",
      id: "email_review",
      class: "form-control"
    })), __jsx("div", {
      class: "form-group col-md-6"
    }, __jsx("label", null, "Rating "), __jsx("div", {
      class: "custom-select-form"
    }, __jsx("select", {
      name: "rating_review",
      id: "rating_review",
      class: "wide"
    }, __jsx("option", {
      value: "1"
    }, "1 (lowest)"), __jsx("option", {
      value: "2"
    }, "2"), __jsx("option", {
      value: "3"
    }, "3"), __jsx("option", {
      value: "4"
    }, "4"), __jsx("option", {
      value: "5",
      selected: true
    }, "5 (medium)"), __jsx("option", {
      value: "6"
    }, "6"), __jsx("option", {
      value: "7"
    }, "7"), __jsx("option", {
      value: "8"
    }, "8"), __jsx("option", {
      value: "9"
    }, "9"), __jsx("option", {
      value: "10"
    }, "10 (highest)")))), __jsx("div", {
      class: "form-group col-md-12"
    }, __jsx("label", null, "Your Review"), __jsx("textarea", {
      name: "review_text",
      id: "review_text",
      class: "form-control",
      style: "height:130px;"
    })), __jsx("div", {
      class: "form-group col-md-12 add_top_20 add_bottom_30"
    }, __jsx("input", {
      type: "submit",
      value: "Submit",
      class: "btn_1",
      id: "submit-review"
    })))))), __jsx("aside", {
      class: "col-lg-4",
      id: "sidebar"
    }, __jsx("div", {
      class: "box_detail booking"
    }, __jsx("div", {
      class: "price"
    }, __jsx("span", null, "45$ ", __jsx("small", null, "person")), __jsx("div", {
      class: "score"
    }, __jsx("span", null, "Good", __jsx("em", null, "350 Reviews")), __jsx("strong", null, "7.0"))), __jsx("div", {
      class: "form-group",
      id: "input-dates"
    }, __jsx("input", {
      class: "form-control",
      type: "text",
      name: "dates",
      placeholder: "When.."
    }), __jsx("i", {
      class: "icon_calendar"
    })), __jsx("div", {
      class: "dropdown"
    }, __jsx("a", {
      href: "#",
      "data-toggle": "dropdown"
    }, "Guests ", __jsx("span", {
      id: "qty_total"
    }, "0")), __jsx("div", {
      class: "dropdown-menu dropdown-menu-right"
    }, __jsx("div", {
      class: "dropdown-menu-content"
    }, __jsx("label", null, "Adults"), __jsx("div", {
      class: "qty-buttons"
    }, __jsx("input", {
      type: "button",
      value: "+",
      class: "qtyplus",
      name: "adults"
    }), __jsx("input", {
      type: "text",
      name: "adults",
      id: "adults",
      value: "0",
      class: "qty"
    }), __jsx("input", {
      type: "button",
      value: "-",
      class: "qtyminus",
      name: "adults"
    }))), __jsx("div", {
      class: "dropdown-menu-content"
    }, __jsx("label", null, "Childrens"), __jsx("div", {
      class: "qty-buttons"
    }, __jsx("input", {
      type: "button",
      value: "+",
      class: "qtyplus",
      name: "child"
    }), __jsx("input", {
      type: "text",
      name: "child",
      id: "child",
      value: "0",
      class: "qty"
    }), __jsx("input", {
      type: "button",
      value: "-",
      class: "qtyminus",
      name: "child"
    }))))), __jsx("div", {
      class: "form-group clearfix"
    }, __jsx("div", {
      class: "custom-select-form"
    }, __jsx("select", {
      class: "wide"
    }, __jsx("option", null, "Room Type"), __jsx("option", null, "Single Room"), __jsx("option", null, "Double Room"), __jsx("option", null, "Suite Room")))), __jsx("a", {
      href: "checkout.html",
      class: " add_top_30 btn_1 full-width purchase"
    }, "Purchase"), __jsx("a", {
      href: "wishlist.html",
      class: "btn_1 full-width outline wishlist"
    }, __jsx("i", {
      class: "icon_heart"
    }), " Add to wishlist"), __jsx("div", {
      class: "text-center"
    }, __jsx("small", null, "No money charged in this step"))), __jsx("ul", {
      class: "share-buttons"
    }, __jsx("li", null, __jsx("a", {
      class: "fb-share",
      href: "#0"
    }, __jsx("i", {
      class: "social_facebook"
    }), " Share")), __jsx("li", null, __jsx("a", {
      class: "twitter-share",
      href: "#0"
    }, __jsx("i", {
      class: "social_twitter"
    }), " Share")), __jsx("li", null, __jsx("a", {
      class: "gplus-share",
      href: "#0"
    }, __jsx("i", {
      class: "social_googleplus"
    }), " Share"))))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)), __jsx(_components_signInModal__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), __jsx("div", {
      id: "toTop"
    }), __jsx("script", {
      src: "http://maps.googleapis.com/maps/api/js"
    }), __jsx("script", {
      src: "js/map_single_hotel.js"
    }), __jsx("script", {
      src: "js/infobox.js"
    }), __jsx("script", {
      src: "js/input_qty.js"
    }), __jsx("script", null, `
	 $('#carousel_in').owlCarousel({
	    center: false,
	    items:1,
	    loop:false,
	    margin:0
	});
	$(function() {
	  $('input[name="dates"]').daterangepicker({
		  autoUpdateInput: false,
		  parentEl:'#input-dates',
		  opens: 'left',
		  locale: {
			  cancelLabel: 'Clear'
		  }
	  });
	  $('input[name="dates"]').on('apply.daterangepicker', function(ev, picker) {
		  $(this).val(picker.startDate.format('MM-DD-YY') + ' > ' + picker.endDate.format('MM-DD-YY'));
	  });
	  $('input[name="dates"]').on('cancel.daterangepicker', function(ev, picker) {
		  $(this).val('');
	  });
	});
	`));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DetailCarousel2);

/***/ }),

/***/ "ZHh6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Header = () => {
  return __jsx("header", {
    className: "header menu_fixed"
  }, __jsx("div", {
    id: "logo"
  }, __jsx("a", {
    href: "/index",
    title: "Sparker - Directory and listings template"
  }, __jsx("img", {
    src: "/images/logo.svg",
    width: "165",
    height: "35",
    alt: "",
    className: "logo_normal"
  }), __jsx("img", {
    src: "/images/logo_sticky.svg",
    width: "165",
    height: "35",
    alt: "",
    className: "logo_sticky"
  }))), __jsx("ul", {
    id: "top_menu"
  }, __jsx("li", null, __jsx("a", {
    href: "/account",
    className: "btn_add"
  }, "Add Listing")), __jsx("li", null, __jsx("a", {
    href: "/#sign-in-dialog",
    id: "sign-in",
    className: "login",
    title: "Sign In"
  }, "Sign In")), __jsx("li", null, __jsx("a", {
    href: "/wishlist",
    className: "wishlist_bt_top",
    title: "Your wishlist"
  }, "Your wishlist"))), __jsx("a", {
    href: "/#menu",
    className: "btn_mobile"
  }, __jsx("div", {
    className: "hamburger hamburger--spin",
    id: "hamburger"
  }, __jsx("div", {
    className: "hamburger-box"
  }, __jsx("div", {
    className: "hamburger-inner"
  })))), __jsx("nav", {
    id: "menu",
    className: "main-menu"
  }, __jsx("ul", null, __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Home")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/index"
  }, "Home version 1")), __jsx("li", null, __jsx("a", {
    href: "/index-2"
  }, "Home version 2")), __jsx("li", null, __jsx("a", {
    href: "/index-3"
  }, "Home version 3")), __jsx("li", null, __jsx("a", {
    href: "/index-4"
  }, "Home version 4")), __jsx("li", null, __jsx("a", {
    href: "/index-5"
  }, "Home version 5")), __jsx("li", null, __jsx("a", {
    href: "/index-6"
  }, "Home version 6 (GDPR)")), __jsx("li", null, __jsx("a", {
    href: "/index-7"
  }, "Src Address Autocomplete")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Listings")), __jsx("ul", null, __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Grid Layout")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterscol-search-aside"
  }, "Sidebar+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterstop-search-aside"
  }, "Full+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterscol"
  }, "Sidebar+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterstop"
  }, "Full+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-isotope"
  }, "Full+Isotope filter")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Row Layout")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterscol-search-aside"
  }, "Sidebar+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterstop-search-aside"
  }, "Full+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterscol"
  }, "Sidebar+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterstop"
  }, "Full+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-isotope"
  }, "Full+Isotope filter")))), __jsx("li", null, __jsx("a", {
    href: "/listing-map"
  }, "Listing Map")), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Open Street Map")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterscol-search-aside-openstreetmap"
  }, "Sidebar+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterstop-search-aside-openstreetmap"
  }, "Full+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterscol-openstreetmap"
  }, "Sidebar+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterstop-openstreetmap"
  }, "Full+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-isotope-openstreetmap"
  }, "Full+Isotope filter")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterscol-search-aside-openstreetmap"
  }, "Sidebar+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterstop-search-aside-openstreetmap"
  }, "Full+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterscol-openstreetmap"
  }, "Sidebar+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterstop-openstreetmap"
  }, "Full+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-isotope-openstreetmap"
  }, "Full+Isotope filter")), __jsx("li", null, __jsx("a", {
    href: "/detail-hotel-openstreetmap"
  }, "Detail page 1")), __jsx("li", null, __jsx("a", {
    href: "/listing-map-openstreetmap"
  }, "Listing Map")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Detail pages")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/detail-hotel"
  }, "Detail page 1")), __jsx("li", null, __jsx("a", {
    href: "/detail-restaurant"
  }, "Detail page 2")), __jsx("li", null, __jsx("a", {
    href: "/detail-shop"
  }, "Detail page 3")), __jsx("li", null, __jsx("a", {
    href: "/detail-carousel"
  }, "Detail page Carousel 1")), __jsx("li", null, __jsx("a", {
    href: "/detail-carousel-2"
  }, "Detail page Carousel 2")))), __jsx("li", null, __jsx("a", {
    href: "/bookings"
  }, "Bookings - Purchases")), __jsx("li", null, __jsx("a", {
    href: "/checkout"
  }, "Checkout")), __jsx("li", null, __jsx("a", {
    href: "/confirm"
  }, "Confirm")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Pages")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/admin_section/index"
  }, "Admin section")), __jsx("li", null, __jsx("a", {
    href: "/blog"
  }, "Blog")), __jsx("li", null, __jsx("a", {
    href: "/account"
  }, "Account")), __jsx("li", null, __jsx("a", {
    href: "/help"
  }, "Help Section")), __jsx("li", null, __jsx("a", {
    href: "/faq"
  }, "Faq Section")), __jsx("li", null, __jsx("a", {
    href: "/wishlist"
  }, "Wishlist page")), __jsx("li", null, __jsx("a", {
    href: "/contacts"
  }, "Contacts")), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Icon Packs")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/icon-pack-1"
  }, "Icon pack 1")), __jsx("li", null, __jsx("a", {
    href: "/icon-pack-2"
  }, "Icon pack 2")), __jsx("li", null, __jsx("a", {
    href: "/icon-pack-3"
  }, "Icon pack 3")), __jsx("li", null, __jsx("a", {
    href: "/icon-pack-4"
  }, "Icon pack 4")))), __jsx("li", null, __jsx("a", {
    href: "/about"
  }, "About")), __jsx("li", null, __jsx("a", {
    href: "/media-gallery"
  }, "Media gallery")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Extra")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/404"
  }, "404 page")), __jsx("li", null, __jsx("a", {
    href: "/contacts-2"
  }, "Contacts 2")), __jsx("li", null, __jsx("a", {
    href: "/pricing-tables"
  }, "Pricing tables")), __jsx("li", null, __jsx("a", {
    href: "/login"
  }, "Login")), __jsx("li", null, __jsx("a", {
    href: "/register"
  }, "Register")), __jsx("li", null, __jsx("a", {
    href: "/menu-options"
  }, "Menu Options")), __jsx("li", null, __jsx("a", {
    href: "/invoice"
  }, "Invoice")), __jsx("li", null, __jsx("a", {
    href: "/coming_soon/index"
  }, "Coming Soon")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/thingstodo"
  }, "Things to do"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "aIN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("footer", {
    className: "plus_border"
  }, __jsx("div", {
    className: "container margin_60_35"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6"
  }, __jsx("h3", {
    "data-target": "#collapse_ft_1"
  }, "Quick Links"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_1"
  }, __jsx("ul", {
    className: "links"
  }, __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "About us")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Faq")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Help")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "My account")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Create account")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Contacts"))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6"
  }, __jsx("h3", {
    "data-target": "#collapse_ft_2"
  }, "Categories"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_2"
  }, __jsx("ul", {
    className: "links"
  }, __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Shops")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Hotels")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Restaurants")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Bars")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Events")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Fitness"))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6"
  }, __jsx("h3", {
    "data-target": "#collapse_ft_3"
  }, "Contacts"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_3"
  }, __jsx("ul", {
    className: "contacts"
  }, __jsx("li", null, __jsx("i", {
    className: "ti-home"
  }), "97845 Baker st. 567", __jsx("br", null), "Los Angeles - US"), __jsx("li", null, __jsx("i", {
    className: "ti-headphone-alt"
  }), "+39 06 97240120"), __jsx("li", null, __jsx("i", {
    className: "ti-email"
  }), __jsx("a", {
    href: "/#0"
  }, "info@sparker.com"))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6"
  }, __jsx("h3", {
    "data-target": "#collapse_ft_4"
  }, "Keep in touch"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_4"
  }, __jsx("div", {
    id: "newsletter"
  }, __jsx("div", {
    id: "message-newsletter"
  }), __jsx("form", {
    method: "post",
    action: "assets/newsletter.php",
    name: "newsletter_form",
    id: "newsletter_form"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "email",
    name: "email_newsletter",
    id: "email_newsletter",
    className: "form-control",
    placeholder: "Your email"
  }), __jsx("input", {
    type: "submit",
    value: "Submit",
    id: "submit-newsletter"
  })))), __jsx("div", {
    className: "follow_us"
  }, __jsx("h5", null, "Follow Us"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, __jsx("i", {
    className: "ti-facebook"
  }))), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, __jsx("i", {
    className: "ti-twitter-alt"
  }))), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, __jsx("i", {
    className: "ti-google"
  }))), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, __jsx("i", {
    className: "ti-pinterest"
  }))), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, __jsx("i", {
    className: "ti-instagram"
  })))))))), __jsx("hr", null), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6"
  }, __jsx("ul", {
    id: "footer-selector"
  }, __jsx("li", null, __jsx("div", {
    className: "styled-select",
    id: "lang-selector"
  }, __jsx("select", null, __jsx("option", {
    value: "English",
    selected: true
  }, "English"), __jsx("option", {
    value: "French"
  }, "French"), __jsx("option", {
    value: "Spanish"
  }, "Spanish"), __jsx("option", {
    value: "Russian"
  }, "Russian")))), __jsx("li", null, __jsx("div", {
    className: "styled-select",
    id: "currency-selector"
  }, __jsx("select", null, __jsx("option", {
    value: "US Dollars",
    selected: true
  }, "US Dollars"), __jsx("option", {
    value: "Euro"
  }, "Euro")))), __jsx("li", null, __jsx("images", {
    src: "images/cards_all.svg",
    alt: ""
  })))), __jsx("div", {
    className: "col-lg-6"
  }, __jsx("ul", {
    id: "additional_links"
  }, __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Terms and conditions")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Privacy")), __jsx("li", null, __jsx("span", null, "\xA9 2020 Sparker")))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xeH2":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });