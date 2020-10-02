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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/admin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendar */ "react-calendar");
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons */ "react-icons");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar */ "./pages/admin/sidebar/index.js");
var _jsxFileName = "C:\\book24-web\\pages\\admin\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { API_URL } from '../../../root.js'








var moment = __webpack_require__(/*! moment */ "moment");

class Admin extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "chartRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    this.state = {
      first_name: '',
      bookings: [],
      users: []
    };
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March"],
        datasets: [{
          label: "Bookings",
          data: [86, 67, 91]
        }]
      },
      options: {//Customize chart options
      }
    }); // this.getApiData();
  }

  async getApiData() {
    // console.log(this.props.token)
    // if(!this.props.token){
    //   window.location.reload();
    // }
    let token = await js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('token'); // => 'value'

    let id = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('id'); // => 'value'

    let role = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('role');
    var config = {
      headers: {
        'Authorization': "Bearer " + token
      },
      timeout: 20000
    };
    await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(API_URL + "bookings", config).then(async response => {
      console.log(response);

      if (response.data && response.data.length > 0) {
        console.log("response.data");
        console.log("here" + response.data);

        if (response.data.message == 'Token is not valid') {
          this.props.history.push("/");
        }

        var len = response.data.length;
        this.setState({
          bookings: []
        });

        for (let i = 0; i < len; i++) {
          let row = response.data[i];
          this.setState(prevState => ({
            bookings: [...prevState.bookings, row]
          }));
        }
      }

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(API_URL + "users/" + this.props.id, config).then(async response => {
        console.log(response);

        if (response.data.message == 'Token is not valid') {
          this.props.history.push("/");
        }

        this.setState({
          first_name: response.data.first_name
        });
        await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(API_URL + "users", config).then(response => {
          console.log(response);

          if (response.data.message == 'Token is not valid') {
            this.props.history.push("/");
          }

          var len = response.data.length;
          this.setState({
            users: []
          });

          for (let i = 0; i < len; i++) {
            let row = response.data[i];
            this.setState(prevState => ({
              users: [...prevState.users, row]
            }));
          }
        }).catch(error => {
          //    this.setState({regLoader: false})
          if (error.code == 'ECONNABORTED') {//     Toast.show('Connection TImeout')
          } else if (error.response.status == 404) {
            this.props.history.push("/");
          } else {
            //   Toast.show(error.message)
            if (error.message == 'Token is not valid') {
              this.props.history.push("/");
            }
          }

          console.log(error);
        });
      }).catch(error => {
        //    this.setState({regLoader: false})
        if (error.code == 'ECONNABORTED') {//     Toast.show('Connection TImeout')
        } else if (error.response.status == 404) {
          this.props.history.push("/");
        } else {
          //   Toast.show(error.message)
          if (error.message == 'Token is not valid') {
            this.props.history.push("/");
          }
        }

        console.log(error);
      });
    }).catch(error => {
      this.setState({
        regLoader: false
      });

      if (error.code == 'ECONNABORTED') {//     Toast.show('Connection TImeout')
      } else {
        //   Toast.show(error.message)
        if (error.message == 'Token is not valid') {
          this.props.history.push("/");
        }
      }

      console.log(error);
    });
  }

  render() {
    return __jsx("div", {
      className: "app-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 7
      }
    }, __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 7
      }
    }), __jsx("div", {
      className: "main-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "welcome-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 7
      }
    }, "Hey ", this.state.first_name && this.state.first_name), __jsx("p", {
      className: "date-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 7
      }
    }, moment().format("dddd, MMMM Do YYYY")), __jsx("div", {
      className: "content-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "first-content-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "card-holder",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "card-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    }, __jsx("p", {
      className: "total-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, "TOTAL BOOKING"), __jsx("p", {
      className: "total-value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 15
      }
    }, this.state.bookings.length)), __jsx("div", {
      className: "card-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }
    }, __jsx("p", {
      className: "total-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 15
      }
    }, "TOTAL USERS"), __jsx("p", {
      className: "total-value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 15
      }
    }, this.state.users.length))), __jsx("p", {
      className: "daily-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }
    }, "Daily Booking Analysis"), __jsx("canvas", {
      id: "myChart",
      ref: this.chartRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 11
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./pages/admin/sidebar/index.js":
/*!**************************************!*\
  !*** ./pages/admin/sidebar/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons */ "react-icons");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\book24-web\\pages\\admin\\sidebar\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import { Link, withRouter } from 'react-router-dom';

class Sidebar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ""
    };
  } // callAPI() {
  //     fetch("http://localhost:9000/testAPI")
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }))
  //         .catch(err => err);
  // }
  // componentDidMount() {
  //     this.callAPI();
  // }


  press(value) {
    const {
      pathname
    } = this.props.location;

    if (value != pathname) {
      this.props.history.push(value);
    }
  }

  render() {
    const pathname = '';
    console.log(pathname + "   k");
    return __jsx("div", {
      className: "main-box-sidebar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "hellix-medium-white-18",
      style: {
        color: 'black'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 3
      }
    }, "Book24"), __jsx("div", {
      className: "line-div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }), __jsx("button", {
      onClick: this.press.bind(this, '/dashboard') //  to="/dashboard" 
      ,
      className: pathname === '/dashboard' ? "route active-route" : "route inactive-route",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, pathname === '/dashboard' ? __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
      value: {
        color: "#1281dd",
        size: 22
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdViewQuilt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    })) : __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
      value: {
        color: "#757575",
        size: 22
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 10
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdViewQuilt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    })), __jsx("p", {
      className: pathname === '/dashboard' ? "active-text" : "inactive-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, "Dashboard")), __jsx("button", {
      onClick: this.press.bind(this, '/hotels') //to="/hotels" 
      ,
      className: pathname === '/hotels' ? "route active-route" : "route inactive-route",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, pathname === '/hotels' ? __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
      value: {
        color: "#1281dd",
        size: 22
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 35
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaUsersCog"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    })) : __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
      value: {
        color: "#757575",
        size: 22
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 36
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaUsersCog"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    })), __jsx("p", {
      className: pathname === '/hotels' ? "active-text" : "inactive-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, "Hotels")), __jsx("button", {
      onClick: this.press.bind(this, '/bookings') //   to="/bookings"
      ,
      className: pathname === '/bookings' ? "route active-route" : "route inactive-route",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }, pathname === '/bookings' ? __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
      value: {
        color: "#1281dd",
        size: 22
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 47
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaListAlt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    })) : __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
      value: {
        color: "#757575",
        size: 22
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 47
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaListAlt"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    })), __jsx("p", {
      className: pathname === '/bookings' ? "active-text" : "inactive-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }, "Bookings")), __jsx("button", {
      onClick: this.press.bind(this, '/users'),
      className: pathname === '/users' ? "route active-route" : "route inactive-route",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }, pathname === '/users' ? __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
      value: {
        color: "#1281dd",
        size: 22
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 44
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaUsers"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    })) : __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
      value: {
        color: "#757575",
        size: 22,
        marginRight: 10
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 47
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaUsers"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    })), __jsx("p", {
      className: pathname === '/users' ? "active-text" : "inactive-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }, "Users")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chart.js");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-calendar":
/*!*********************************!*\
  !*** external "react-calendar" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-calendar");

/***/ }),

/***/ "react-icons":
/*!******************************!*\
  !*** external "react-icons" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vc2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYXJ0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jYWxlbmRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL21kXCIiXSwibmFtZXMiOlsibW9tZW50IiwicmVxdWlyZSIsIkFkbWluIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwic3RhdGUiLCJmaXJzdF9uYW1lIiwiYm9va2luZ3MiLCJ1c2VycyIsImNvbXBvbmVudERpZE1vdW50IiwibXlDaGFydFJlZiIsImNoYXJ0UmVmIiwiY3VycmVudCIsImdldENvbnRleHQiLCJDaGFydCIsInR5cGUiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsIm9wdGlvbnMiLCJnZXRBcGlEYXRhIiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiaWQiLCJyb2xlIiwiY29uZmlnIiwiaGVhZGVycyIsInRpbWVvdXQiLCJheGlvcyIsIkFQSV9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWVzc2FnZSIsImhpc3RvcnkiLCJwdXNoIiwibGVuIiwic2V0U3RhdGUiLCJpIiwicm93IiwicHJldlN0YXRlIiwiY2F0Y2giLCJlcnJvciIsImNvZGUiLCJzdGF0dXMiLCJyZWdMb2FkZXIiLCJyZW5kZXIiLCJmb3JtYXQiLCJTaWRlYmFyIiwiYXBpUmVzcG9uc2UiLCJwcmVzcyIsInZhbHVlIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsImNvbG9yIiwiYmluZCIsInNpemUiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXBCOztBQUdBLE1BQU1DLEtBQU4s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LFdBQUssRUFBRTtBQUFFRSxhQUFLLEVBQUUsU0FBVDtBQUFvQkUsWUFBSSxFQUFFO0FBQTFCLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDL0IsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRCtCLENBQWxDLEdBRXFDLE1BQUMsdURBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRTtBQUFFRixhQUFLLEVBQUUsU0FBVDtBQUFvQkUsWUFBSSxFQUFFLEVBQTFCO0FBQThCQyxtQkFBVyxFQUFDO0FBQTFDLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDbEMsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGtDLENBTHRDLEVBUUU7QUFBRyxlQUFTLEVBQUVMLFFBQVEsS0FBSyxRQUFiLEdBQXdCLGFBQXhCLEdBQXdDLGVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixDQTlDRixDQUREO0FBK0VGOztBQTFHNkI7O0FBNkdqQkosc0VBQWYsRTs7Ozs7Ozs7Ozs7QUN0SEEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoicGFnZXMvYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FkbWluL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmVhY3QtY2FsZW5kYXInO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XHJcbi8vIGltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi8uLi9yb290LmpzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEljb25Db250ZXh0IH0gZnJvbSBcInJlYWN0LWljb25zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgTWRWaWV3UXVpbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHsgRmFVc2Vyc0NvZywgRmFMaXN0QWx0LCBGYVVzZXJzLCBGYU1hcE1hcmtlckFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcbnZhciBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcclxuXHJcblxyXG5jbGFzcyBBZG1pbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IFxyXG4gICAgICAgIGZpcnN0X25hbWU6ICcnLCBib29raW5nczogW10sIHVzZXJzOiBbXSB9O1xyXG4gIH1cclxuXHJcbiAgY2hhcnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBjb25zdCBteUNoYXJ0UmVmID0gdGhpcy5jaGFydFJlZi5jdXJyZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgbmV3IENoYXJ0KG15Q2hhcnRSZWYsIHtcclxuICAgICAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIC8vQnJpbmcgaW4gZGF0YVxyXG4gICAgICAgICAgICAgIGxhYmVsczogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyY2hcIl0sXHJcbiAgICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQm9va2luZ3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFs4NiwgNjcsIDkxXSxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgLy9DdXN0b21pemUgY2hhcnQgb3B0aW9uc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAvLyB0aGlzLmdldEFwaURhdGEoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEFwaURhdGEoKXtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudG9rZW4pXHJcbiAgICAvLyBpZighdGhpcy5wcm9wcy50b2tlbil7XHJcbiAgICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIC8vIH1cclxuICAgIGxldCB0b2tlbiA9IGF3YWl0IENvb2tpZXMuZ2V0KCd0b2tlbicpIC8vID0+ICd2YWx1ZSdcclxubGV0IGlkID0gQ29va2llcy5nZXQoJ2lkJykgLy8gPT4gJ3ZhbHVlJ1xyXG5sZXQgcm9sZSA9IENvb2tpZXMuZ2V0KCdyb2xlJylcclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgaGVhZGVyczogeydBdXRob3JpemF0aW9uJzogXCJCZWFyZXIgXCIgKyB0b2tlbn0sXHJcbiAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgIH07XHJcbiAgICBhd2FpdCBheGlvc1xyXG4gICAgLmdldChcclxuICAgICAgQVBJX1VSTCtcImJvb2tpbmdzXCIsIGNvbmZpZ1xyXG4gICAgKVxyXG4gICAgLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UuZGF0YVwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiICsgcmVzcG9uc2UuZGF0YSk7ICAgICBcclxuICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5tZXNzYWdlID09ICdUb2tlbiBpcyBub3QgdmFsaWQnKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdmFyIGxlbiA9IHJlc3BvbnNlLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9va2luZ3M6IFtdLH0pXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSByZXNwb25zZS5kYXRhW2ldO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgYm9va2luZ3M6IFsuLi5wcmV2U3RhdGUuYm9va2luZ3MsIHJvd11cclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgIGF4aW9zLmdldChBUElfVVJMK1widXNlcnMvXCIgKyB0aGlzLnByb3BzLmlkLCBjb25maWcpLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhLm1lc3NhZ2UgPT0gJ1Rva2VuIGlzIG5vdCB2YWxpZCcpe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpcnN0X25hbWU6IHJlc3BvbnNlLmRhdGEuZmlyc3RfbmFtZX0pXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KEFQSV9VUkwrXCJ1c2Vyc1wiICwgY29uZmlnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLm1lc3NhZ2UgPT0gJ1Rva2VuIGlzIG5vdCB2YWxpZCcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBsZW4gPSByZXNwb25zZS5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJzOiBbXSx9KVxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gcmVzcG9uc2UuZGF0YVtpXTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgIHVzZXJzOiBbLi4ucHJldlN0YXRlLnVzZXJzLCByb3ddXHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIC8vICAgIHRoaXMuc2V0U3RhdGUoe3JlZ0xvYWRlcjogZmFsc2V9KVxyXG4gICAgICAgICAgaWYoZXJyb3IuY29kZSA9PSAnRUNPTk5BQk9SVEVEJyl7XHJcbiAgICAgICAvLyAgICAgVG9hc3Quc2hvdygnQ29ubmVjdGlvbiBUSW1lb3V0JylcclxuICAgICAgICB9ZWxzZSBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDA0KXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgLy8gICBUb2FzdC5zaG93KGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICBpZihlcnJvci5tZXNzYWdlID09ICdUb2tlbiBpcyBub3QgdmFsaWQnKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgdGhpcy5zZXRTdGF0ZSh7cmVnTG9hZGVyOiBmYWxzZX0pXHJcbiAgICAgIGlmKGVycm9yLmNvZGUgPT0gJ0VDT05OQUJPUlRFRCcpe1xyXG4gICAvLyAgICAgVG9hc3Quc2hvdygnQ29ubmVjdGlvbiBUSW1lb3V0JylcclxuICAgIH1lbHNlIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDQpe1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL1wiKTtcclxuICAgIH1lbHNle1xyXG4gICAvLyAgIFRvYXN0LnNob3coZXJyb3IubWVzc2FnZSlcclxuICAgICAgaWYoZXJyb3IubWVzc2FnZSA9PSAnVG9rZW4gaXMgbm90IHZhbGlkJyl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnTG9hZGVyOiBmYWxzZX0pXHJcbiAgICAgIGlmKGVycm9yLmNvZGUgPT0gJ0VDT05OQUJPUlRFRCcpe1xyXG4gICAvLyAgICAgVG9hc3Quc2hvdygnQ29ubmVjdGlvbiBUSW1lb3V0JylcclxuICAgIH1lbHNle1xyXG4gICAgIC8vICAgVG9hc3Quc2hvdyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIGlmKGVycm9yLm1lc3NhZ2UgPT0gJ1Rva2VuIGlzIG5vdCB2YWxpZCcpe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWJvZHlcIj5cclxuICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJveFwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ3ZWxjb21lLWhlYWRlclwiPkhleSB7dGhpcy5zdGF0ZS5maXJzdF9uYW1lICYmIHRoaXMuc3RhdGUuZmlyc3RfbmFtZX08L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGUtdGV4dFwiPlxyXG4gICAgICB7bW9tZW50KCkuZm9ybWF0KFwiZGRkZCwgTU1NTSBEbyBZWVlZXCIpfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1jb250ZW50LWRpdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhvbGRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvdGFsLXRleHRcIj5UT1RBTCBCT09LSU5HPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvdGFsLXZhbHVlXCI+e3RoaXMuc3RhdGUuYm9va2luZ3MubGVuZ3RofTwvcD4gICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kaXZcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3RhbC10ZXh0XCI+VE9UQUwgVVNFUlM8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG90YWwtdmFsdWVcIj57dGhpcy5zdGF0ZS51c2Vycy5sZW5ndGh9PC9wPiAgICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYWlseS10ZXh0XCI+RGFpbHkgQm9va2luZyBBbmFseXNpczwvcD5cclxuICAgICAgICAgIDxjYW52YXNcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm15Q2hhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5jaGFydFJlZn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1jb250ZW50LWRpdlwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJkYWlseS10ZXh0XCI+Qm9va2luZyBDb3VudDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1jb3VudC1kaXZcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidG90YWwtY291bnQtdGV4dFwiPlRoaXMgeWVhcjoge3RoaXMuc3RhdGUuYm9va2luZ3MubGVuZ3RofTwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidG90YWwtY291bnQtdGV4dFwiPlRoaXMgbW9udGg6ICoqPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tIFwicmVhY3QtaWNvbnNcIjtcclxuaW1wb3J0IHsgTWRWaWV3UXVpbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHsgRmFVc2Vyc0NvZywgRmFMaXN0QWx0LCBGYVVzZXJzLCBGYU1hcE1hcmtlckFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBJb0lvc1ByaWNldGFncyB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG4vLyBpbXBvcnQgeyBMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5cclxuXHJcbmNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBhcGlSZXNwb25zZTogXCJcIiB9O1xyXG4gIH1cclxuXHJcbiAgLy8gY2FsbEFQSSgpIHtcclxuICAvLyAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjkwMDAvdGVzdEFQSVwiKVxyXG4gIC8vICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpXHJcbiAgLy8gICAgICAgICAudGhlbihyZXMgPT4gdGhpcy5zZXRTdGF0ZSh7IGFwaVJlc3BvbnNlOiByZXMgfSkpXHJcbiAgLy8gICAgICAgICAuY2F0Y2goZXJyID0+IGVycik7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgICAgdGhpcy5jYWxsQVBJKCk7XHJcbiAgLy8gfVxyXG5cclxucHJlc3ModmFsdWUpe1xyXG4gIGNvbnN0IHtwYXRobmFtZX0gPSB0aGlzLnByb3BzLmxvY2F0aW9uO1xyXG5pZih2YWx1ZSAhPSBwYXRobmFtZSl7XHJcbiAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godmFsdWUpO1xyXG59XHJcbn1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgcGF0aG5hbWUgPSAnJztcclxuICAgIGNvbnNvbGUubG9nKHBhdGhuYW1lK1wiICAga1wiKVxyXG4gICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3gtc2lkZWJhclwiPlxyXG4gICAgICAgIHsvKiA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9sb2dvLnBuZ1wiKX0gY2xhc3NOYW1lPVwibG9nby1pbWFnZVwiIC8+ICovfVxyXG5cdFx0PHAgY2xhc3NOYW1lPVwiaGVsbGl4LW1lZGl1bS13aGl0ZS0xOFwiXHJcbiAgICBzdHlsZT17e2NvbG9yOidibGFjayd9fT5Cb29rMjQ8L3A+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1kaXZcIiAvPlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgb25DbGljaz17dGhpcy5wcmVzcy5iaW5kKHRoaXMsICcvZGFzaGJvYXJkJyl9XHJcbiAgICAgIC8vICB0bz1cIi9kYXNoYm9hcmRcIiBcclxuICAgICAgICBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Rhc2hib2FyZCcgPyBcInJvdXRlIGFjdGl2ZS1yb3V0ZVwiIDogXCJyb3V0ZSBpbmFjdGl2ZS1yb3V0ZVwifT5cclxuICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Rhc2hib2FyZCcgPyBcInJvdXRlIGFjdGl2ZS1yb3V0ZVwiIDogXCJyb3V0ZSBpbmFjdGl2ZS1yb3V0ZVwifT4gKi99XHJcbiAgICAgICAge3BhdGhuYW1lID09PSAnL2Rhc2hib2FyZCcgPyBcclxuICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogXCIjMTI4MWRkXCIsIHNpemU6IDIyIH19PlxyXG4gICAgICAgICAgICA8TWRWaWV3UXVpbHQgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgIDpcclxuICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbG9yOiBcIiM3NTc1NzVcIiwgc2l6ZTogMjIgfX0+XHJcbiAgICAgICAgICAgIDxNZFZpZXdRdWlsdCAvPlxyXG4gICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj59XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvZGFzaGJvYXJkJyA/IFwiYWN0aXZlLXRleHRcIiA6IFwiaW5hY3RpdmUtdGV4dFwifT5EYXNoYm9hcmQ8L3A+XHJcbiAgICAgICAgey8qIDwvYnV0dG9uPiAqL31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJlc3MuYmluZCh0aGlzLCAnL2hvdGVscycpfSBcclxuICAgICAgICAvL3RvPVwiL2hvdGVsc1wiIFxyXG4gICAgICAgIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvaG90ZWxzJyA/IFwicm91dGUgYWN0aXZlLXJvdXRlXCIgOiBcInJvdXRlIGluYWN0aXZlLXJvdXRlXCJ9PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtwYXRobmFtZSA9PT0gJy9ob3RlbHMnID8gPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbG9yOiBcIiMxMjgxZGRcIiwgc2l6ZTogMjIgfX0+XHJcbiAgICAgICAgICAgIDxGYVVzZXJzQ29nIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPiA6PEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbG9yOiBcIiM3NTc1NzVcIiwgc2l6ZTogMjIgfX0+XHJcbiAgICAgICAgICAgIDxGYVVzZXJzQ29nIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPn1cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvaG90ZWxzJyA/IFwiYWN0aXZlLXRleHRcIiA6IFwiaW5hY3RpdmUtdGV4dFwifT5Ib3RlbHM8L3A+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByZXNzLmJpbmQodGhpcywgJy9ib29raW5ncycpfSBcclxuICAgICAvLyAgIHRvPVwiL2Jvb2tpbmdzXCJcclxuICAgICAgICAgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9ib29raW5ncycgPyBcInJvdXRlIGFjdGl2ZS1yb3V0ZVwiIDogXCJyb3V0ZSBpbmFjdGl2ZS1yb3V0ZVwifT5cclxuICAgICAgICB7cGF0aG5hbWUgPT09ICcvYm9va2luZ3MnID8gICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogXCIjMTI4MWRkXCIsIHNpemU6IDIyIH19PlxyXG4gICAgICAgICAgICA8RmFMaXN0QWx0IC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPiA6ICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29sb3I6IFwiIzc1NzU3NVwiLCBzaXplOiAyMiB9fT5cclxuICAgICAgICAgICAgPEZhTGlzdEFsdCAvPlxyXG4gICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj59XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Jvb2tpbmdzJyA/IFwiYWN0aXZlLXRleHRcIiA6IFwiaW5hY3RpdmUtdGV4dFwifT5Cb29raW5nczwvcD5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJlc3MuYmluZCh0aGlzLCAnL3VzZXJzJyl9IFxyXG4gICAgICAgIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvdXNlcnMnID8gXCJyb3V0ZSBhY3RpdmUtcm91dGVcIiA6IFwicm91dGUgaW5hY3RpdmUtcm91dGVcIn0+XHJcbiAgICAgICAge3BhdGhuYW1lID09PSAnL3VzZXJzJyA/ICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29sb3I6IFwiIzEyODFkZFwiLCBzaXplOiAyMiB9fT5cclxuICAgICAgICAgICAgPEZhVXNlcnMgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+IDogICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogXCIjNzU3NTc1XCIsIHNpemU6IDIyLCBtYXJnaW5SaWdodDoxMCB9fT5cclxuICAgICAgICAgICAgPEZhVXNlcnMgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+fVxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy91c2VycycgPyBcImFjdGl2ZS10ZXh0XCIgOiBcImluYWN0aXZlLXRleHRcIn0+VXNlcnM8L3A+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgey8qIDxidXR0b24gXHJcbiAgICAgICAgb25DbGljaz17dGhpcy5wcmVzcy5iaW5kKHRoaXMsICcvZHJvcGJveCcpfSBcclxuICAgICAgICBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Ryb3Bib3gnID8gXCJyb3V0ZSBhY3RpdmUtcm91dGVcIiA6IFwicm91dGUgaW5hY3RpdmUtcm91dGVcIn0+XHJcbiAgICAgICAge3BhdGhuYW1lID09PSAnL2Ryb3Bib3gnID8gICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogXCIjMTI4MWRkXCIsIHNpemU6IDIyIH19PlxyXG4gICAgICAgIDxGYU1hcE1hcmtlckFsdCAvPlxyXG4gICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj4gOiAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbG9yOiBcIiM3NTc1NzVcIiwgc2l6ZTogMjIgfX0+XHJcbiAgICAgICAgICA8RmFNYXBNYXJrZXJBbHQgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+fVxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9kcm9wYm94JyA/IFwiYWN0aXZlLXRleHRcIiA6IFwiaW5hY3RpdmUtdGV4dFwifT5Ecm9wYm94ZXM8L3A+XHJcbiAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgIHsvKiA8YnV0dG9uIFxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJlc3MuYmluZCh0aGlzLCAnL3ByaWNlbGlzdCcpfSBcclxuICAgICAgICBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL3ByaWNlbGlzdCcgPyBcInJvdXRlIGFjdGl2ZS1yb3V0ZVwiIDogXCJyb3V0ZSBpbmFjdGl2ZS1yb3V0ZVwifT5cclxuICAgICAgICB7cGF0aG5hbWUgPT09ICcvcHJpY2VsaXN0JyA/ICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29sb3I6IFwiIzEyODFkZFwiLCBzaXplOiAyMiB9fT5cclxuICAgICAgICA8SW9Jb3NQcmljZXRhZ3MgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+IDogICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogXCIjNzU3NTc1XCIsIHNpemU6IDIyIH19PlxyXG4gICAgICAgICAgPElvSW9zUHJpY2V0YWdzIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPn1cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvcHJpY2VsaXN0JyA/IFwiYWN0aXZlLXRleHRcIiA6IFwiaW5hY3RpdmUtdGV4dFwifT5QcmljZWxpc3Q8L3A+XHJcbiAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFydC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNhbGVuZGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL21kXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=