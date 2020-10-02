module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/admin/hotels/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/admin/hotels/index.js":
/*!*************************************!*\
  !*** ./pages/admin/hotels/index.js ***!
  \*************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sidebar */ "./pages/admin/sidebar/index.js");
var _jsxFileName = "C:\\book24-web\\pages\\admin\\hotels\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import Button from "react-bootstrap/Button";
// import { API_URL } from "../../../root.js";




var moment = __webpack_require__(/*! moment */ "moment");



class Hotels extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      showHideSidenav: "hidden",
      show: false,
      hotels: [],
      toDelete: "",
      showCreate: false,
      number: "",
      first_name: "",
      last_name: "",
      address: "",
      zip: "",
      email: "",
      password: "",
      error_div: false,
      error: ""
    };
  }

  toggleSidenav() {
    var css = this.state.showHideSidenav === "hidden" ? "show" : "hidden";
    this.setState({
      showHideSidenav: css
    });
  }

  handleShow(id) {
    this.setState({
      show: true,
      toDelete: id
    });
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShowCreate() {
    this.setState({
      showCreate: true
    });
  }

  handleCloseCreate() {
    this.setState({
      showCreate: false
    });
  }

  handleNumber(e) {
    this.setState({
      number: e.target.value
    });
  }

  async componentDidMount() {
    console.log(this.props.token);
    let token = await js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token');
    var config = {
      headers: {
        Authorization: "Bearer " + token
      },
      timeout: 20000
    }; // axios
    //   .get(API_URL + "hotels", config)
    //   .then(response => {
    //     console.log(response);
    //     if (response.data.message == "Token is not valid") {
    //       this.props.history.push("/");
    //     }
    //     var len = response.data.length;
    //     this.setState({ hotels: [] });
    //     for (let i = 0; i < len; i++) {
    //       let row = response.data[i];
    //       this.setState(prevState => ({
    //         hotels: [...prevState.hotels, row]
    //       }));
    //     }
    //   })
    //   .catch(error => {
    //     this.props.history.push("/");
    //     console.log(error);
    //   });
  }

  async delete() {
    console.log(this.state.toDelete);
    let token = await js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token');
    var config = {
      headers: {
        Authorization: "Bearer " + token
      },
      timeout: 20000
    };
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(API_URL + "users/" + this.state.toDelete, config).then(response => {
      console.log(response);
      window.location.reload();
    }).catch(error => {
      this.props.history.push("/");
      console.log(error);
    });
  }

  createHotel(e) {
    e.preventDefault();

    if (isNaN(this.state.number)) {
      this.setState({
        error: "Invalid Mobile Number",
        error_div: true
      });
    } else if (isNaN(this.state.zip)) {
      this.setState({
        error: "Invalid Zip code",
        error_div: true
      });
    } else {
      this.setState({
        error_div: false
      });
      var bodyParameters = {
        email: this.state.email,
        password: this.state.password,
        address: this.state.address,
        zipcode: this.state.zip,
        mobile_number: this.state.number,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        role: "hotel"
      };
      console.log(bodyParameters);
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(API_URL + "users", bodyParameters, {
        timeout: 20000
      }).then(response => {
        console.log(response);
        window.location.reload();
      }).catch(error => {
        console.log(error);

        if (error.response.data) {
          this.setState({
            error: error.response.data.message,
            error_div: true
          });
          console.log(JSON.stringify(error));
        }
      });
    }
  }

  render() {
    let {
      showHideSidenav,
      showCreate
    } = this.state;
    const hotel_data = this.state.hotels.map(function (item, index) {
      return __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 13
        }
      }, index + 1), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }
      }, item.first_name + " " + item.last_name), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }
      }, item.email), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }
      }, item.role), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "#",
        onClick: this.handleShow.bind(this, item._id),
        ref: "btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 15
        }
      }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
        value: {
          color: "#B1ADAD",
          size: 22
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }
      }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdDeleteForever"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 19
        }
      }))), __jsx("div", {
        className: showHideSidenav,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "block-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, "Block"), __jsx("p", {
        className: "suspend-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }
      }, "Suspend"))));
    }.bind(this));

    const ModalHotel = ({
      handleClose,
      show,
      children
    }) => {
      const showHideClassName = show ? "modal display-block" : "modal display-none";
      return __jsx("div", {
        className: showHideClassName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 9
        }
      }, __jsx("section", {
        className: "modal-main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }
      }, children, __jsx("div", {
        className: "button-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }
      }, __jsx("button", {
        onClick: this.delete.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 15
        }
      }, "Yes"), " ", __jsx("button", {
        onClick: handleClose,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 15
        }
      }, "Close"))));
    };

    const showHideClassNameCreate = showCreate ? "display-block" : "display-none";
    return __jsx("div", {
      className: "app-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 7
      }
    }, __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 7
      }
    }), __jsx("div", {
      className: "main-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 7
      }
    }, __jsx(ModalHotel, {
      show: this.state.show,
      handleClose: this.handleClose.bind(this),
      delete: this.delete.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 11
      }
    }, "Are you sure you want to delete this hotel")), __jsx("p", {
      className: "admin-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }
    }, "Hotel"), __jsx("button", {
      className: "admin-button",
      onClick: this.handleShowCreate.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 11
      }
    }, "ADD HOTEL")), __jsx("div", {
      className: showHideClassNameCreate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }
    }, __jsx("p", {
      className: "admin-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 11
      }
    }, "Add Hotel"), this.state.error_div && __jsx("div", {
      className: "error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 13
      }
    }, this.state.error), __jsx("form", {
      onSubmit: this.createHotel.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "form-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "input-row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "label-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }
    }, "Name"), __jsx("input", {
      type: "text",
      value: this.state.name,
      required: true,
      onChange: event => this.setState({
        name: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }
    }), __jsx("p", {
      className: "label-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }
    }, "Location"), __jsx("input", {
      type: "text",
      value: this.state.location,
      required: true,
      onChange: event => this.setState({
        location: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "input-row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "label-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 15
      }
    }, "Bio"), __jsx("textarea", {
      type: "text",
      value: this.state.bio,
      required: true,
      onChange: event => this.setState({
        bio: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "input-row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "label-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }
    }, "Check "), __jsx("input", {
      type: "text",
      value: this.state.number,
      minLength: 10,
      maxLength: 10,
      onChange: event => this.setState({
        number: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }
    }), __jsx("p", {
      className: "label-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }
    }, "Zip code"), __jsx("input", {
      type: "text",
      value: this.state.zip,
      minLength: 5,
      maxLength: 5,
      required: true,
      onChange: event => this.setState({
        zip: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }
    }))), __jsx("p", {
      className: "label-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 13
      }
    }, "Address"), __jsx("input", {
      type: "text",
      value: this.state.address,
      required: true,
      onChange: event => this.setState({
        address: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "input-row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 13
      }
    }, __jsx("input", {
      type: "submit",
      value: "Create",
      className: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "button",
      onClick: this.handleCloseCreate.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 15
      }
    }, "Close")))), __jsx("table", {
      id: "customers",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 9
      }
    }, __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 11
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 13
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 15
      }
    }, "S/N"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 15
      }
    }, "Hotel name"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 15
      }
    }, "Email"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 15
      }
    }, "Author"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 15
      }
    }, "Address"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 15
      }
    }, "Action")), hotel_data))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Hotels);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vaG90ZWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FkbWluL3NpZGViYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL21kXCIiXSwibmFtZXMiOlsibW9tZW50IiwicmVxdWlyZSIsIkhvdGVscyIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNob3dIaWRlU2lkZW5hdiIsInNob3ciLCJob3RlbHMiLCJ0b0RlbGV0ZSIsInNob3dDcmVhdGUiLCJudW1iZXIiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiYWRkcmVzcyIsInppcCIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvcl9kaXYiLCJlcnJvciIsInRvZ2dsZVNpZGVuYXYiLCJjc3MiLCJzZXRTdGF0ZSIsImhhbmRsZVNob3ciLCJpZCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvd0NyZWF0ZSIsImhhbmRsZUNsb3NlQ3JlYXRlIiwiaGFuZGxlTnVtYmVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aW1lb3V0IiwiZGVsZXRlIiwiYXhpb3MiLCJBUElfVVJMIiwidGhlbiIsInJlc3BvbnNlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJjYXRjaCIsImhpc3RvcnkiLCJwdXNoIiwiY3JlYXRlSG90ZWwiLCJwcmV2ZW50RGVmYXVsdCIsImlzTmFOIiwiYm9keVBhcmFtZXRlcnMiLCJ6aXBjb2RlIiwibW9iaWxlX251bWJlciIsInJvbGUiLCJwb3N0IiwiZGF0YSIsIm1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwicmVuZGVyIiwiaG90ZWxfZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImJpbmQiLCJfaWQiLCJjb2xvciIsInNpemUiLCJNb2RhbEhvdGVsIiwiY2hpbGRyZW4iLCJzaG93SGlkZUNsYXNzTmFtZSIsInNob3dIaWRlQ2xhc3NOYW1lQ3JlYXRlIiwibmFtZSIsImV2ZW50IiwiYmlvIiwiU2lkZWJhciIsImFwaVJlc3BvbnNlIiwicHJlc3MiLCJwYXRobmFtZSIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFBMEI7O0FBQzFCLElBQUlBLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUFwQjs7QUFDQTs7QUFFQSxNQUFNQyxNQUFOLFNBQXFCQywrQ0FBckIsQ0FBK0I7QUFDN0JDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMscUJBQWUsRUFBRSxRQUROO0FBRVhDLFVBQUksRUFBRSxLQUZLO0FBR1hDLFlBQU0sRUFBRSxFQUhHO0FBSVhDLGNBQVEsRUFBRSxFQUpDO0FBS1hDLGdCQUFVLEVBQUUsS0FMRDtBQU1YQyxZQUFNLEVBQUUsRUFORztBQU9YQyxnQkFBVSxFQUFFLEVBUEQ7QUFRWEMsZUFBUyxFQUFFLEVBUkE7QUFTWEMsYUFBTyxFQUFFLEVBVEU7QUFVWEMsU0FBRyxFQUFFLEVBVk07QUFXWEMsV0FBSyxFQUFFLEVBWEk7QUFZWEMsY0FBUSxFQUFFLEVBWkM7QUFhWEMsZUFBUyxFQUFFLEtBYkE7QUFjWEMsV0FBSyxFQUFFO0FBZEksS0FBYjtBQWdCRDs7QUFFREMsZUFBYSxHQUFHO0FBQ2QsUUFBSUMsR0FBRyxHQUFHLEtBQUtoQixLQUFMLENBQVdDLGVBQVgsS0FBK0IsUUFBL0IsR0FBMEMsTUFBMUMsR0FBbUQsUUFBN0Q7QUFDQSxTQUFLZ0IsUUFBTCxDQUFjO0FBQUVoQixxQkFBZSxFQUFFZTtBQUFuQixLQUFkO0FBQ0Q7O0FBRURFLFlBQVUsQ0FBQ0MsRUFBRCxFQUFLO0FBQ2IsU0FBS0YsUUFBTCxDQUFjO0FBQUVmLFVBQUksRUFBRSxJQUFSO0FBQWNFLGNBQVEsRUFBRWU7QUFBeEIsS0FBZDtBQUNEOztBQUVEQyxhQUFXLEdBQUc7QUFDWixTQUFLSCxRQUFMLENBQWM7QUFBRWYsVUFBSSxFQUFFO0FBQVIsS0FBZDtBQUNEOztBQUVEbUIsa0JBQWdCLEdBQUc7QUFDakIsU0FBS0osUUFBTCxDQUFjO0FBQUVaLGdCQUFVLEVBQUU7QUFBZCxLQUFkO0FBQ0Q7O0FBRURpQixtQkFBaUIsR0FBRztBQUNsQixTQUFLTCxRQUFMLENBQWM7QUFBRVosZ0JBQVUsRUFBRTtBQUFkLEtBQWQ7QUFDRDs7QUFDRGtCLGNBQVksQ0FBQ0MsQ0FBRCxFQUFJO0FBQ2QsU0FBS1AsUUFBTCxDQUFjO0FBQUVYLFlBQU0sRUFBRWtCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUFuQixLQUFkO0FBQ0Q7O0FBRUQsUUFBTUMsaUJBQU4sR0FBMEI7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUs5QixLQUFMLENBQVcrQixLQUF2QjtBQUNBLFFBQUlBLEtBQUssR0FBRyxNQUFNQyxnREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQUFsQjtBQUNBLFFBQUlDLE1BQU0sR0FBRztBQUNYQyxhQUFPLEVBQUU7QUFBRUMscUJBQWEsRUFBRSxZQUFZTDtBQUE3QixPQURFO0FBRVhNLGFBQU8sRUFBRTtBQUZFLEtBQWIsQ0FId0IsQ0FPeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVELFFBQU1DLE1BQU4sR0FBZTtBQUNiVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLN0IsS0FBTCxDQUFXSSxRQUF2QjtBQUNBLFFBQUkwQixLQUFLLEdBQUcsTUFBTUMsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FBbEI7QUFDQSxRQUFJQyxNQUFNLEdBQUc7QUFDWEMsYUFBTyxFQUFFO0FBQUVDLHFCQUFhLEVBQUUsWUFBWUw7QUFBN0IsT0FERTtBQUVYTSxhQUFPLEVBQUU7QUFGRSxLQUFiO0FBSUFFLGdEQUFLLENBQ0ZELE1BREgsQ0FDVUUsT0FBTyxHQUFHLFFBQVYsR0FBcUIsS0FBS3ZDLEtBQUwsQ0FBV0ksUUFEMUMsRUFDb0Q2QixNQURwRCxFQUVHTyxJQUZILENBRVFDLFFBQVEsSUFBSTtBQUNoQmIsYUFBTyxDQUFDQyxHQUFSLENBQVlZLFFBQVo7QUFDQUMsWUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNELEtBTEgsRUFNR0MsS0FOSCxDQU1TL0IsS0FBSyxJQUFJO0FBQ2QsV0FBS2YsS0FBTCxDQUFXK0MsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEI7QUFDQW5CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZixLQUFaO0FBQ0QsS0FUSDtBQVVEOztBQUNEa0MsYUFBVyxDQUFDeEIsQ0FBRCxFQUFJO0FBQ2JBLEtBQUMsQ0FBQ3lCLGNBQUY7O0FBQ0EsUUFBSUMsS0FBSyxDQUFDLEtBQUtsRCxLQUFMLENBQVdNLE1BQVosQ0FBVCxFQUE4QjtBQUM1QixXQUFLVyxRQUFMLENBQWM7QUFBRUgsYUFBSyxFQUFFLHVCQUFUO0FBQWtDRCxpQkFBUyxFQUFFO0FBQTdDLE9BQWQ7QUFDRCxLQUZELE1BRU8sSUFBSXFDLEtBQUssQ0FBQyxLQUFLbEQsS0FBTCxDQUFXVSxHQUFaLENBQVQsRUFBMkI7QUFDaEMsV0FBS08sUUFBTCxDQUFjO0FBQUVILGFBQUssRUFBRSxrQkFBVDtBQUE2QkQsaUJBQVMsRUFBRTtBQUF4QyxPQUFkO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsV0FBS0ksUUFBTCxDQUFjO0FBQUVKLGlCQUFTLEVBQUU7QUFBYixPQUFkO0FBQ0EsVUFBSXNDLGNBQWMsR0FBRztBQUNuQnhDLGFBQUssRUFBRSxLQUFLWCxLQUFMLENBQVdXLEtBREM7QUFFbkJDLGdCQUFRLEVBQUUsS0FBS1osS0FBTCxDQUFXWSxRQUZGO0FBR25CSCxlQUFPLEVBQUUsS0FBS1QsS0FBTCxDQUFXUyxPQUhEO0FBSW5CMkMsZUFBTyxFQUFFLEtBQUtwRCxLQUFMLENBQVdVLEdBSkQ7QUFLbkIyQyxxQkFBYSxFQUFFLEtBQUtyRCxLQUFMLENBQVdNLE1BTFA7QUFNbkJDLGtCQUFVLEVBQUUsS0FBS1AsS0FBTCxDQUFXTyxVQU5KO0FBT25CQyxpQkFBUyxFQUFFLEtBQUtSLEtBQUwsQ0FBV1EsU0FQSDtBQVFuQjhDLFlBQUksRUFBRTtBQVJhLE9BQXJCO0FBVUExQixhQUFPLENBQUNDLEdBQVIsQ0FBWXNCLGNBQVo7QUFDQWIsa0RBQUssQ0FDRmlCLElBREgsQ0FDUWhCLE9BQU8sR0FBRyxPQURsQixFQUMyQlksY0FEM0IsRUFDMkM7QUFDdkNmLGVBQU8sRUFBRTtBQUQ4QixPQUQzQyxFQUlHSSxJQUpILENBSVFDLFFBQVEsSUFBSTtBQUNoQmIsZUFBTyxDQUFDQyxHQUFSLENBQVlZLFFBQVo7QUFDQUMsY0FBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNELE9BUEgsRUFRR0MsS0FSSCxDQVFTL0IsS0FBSyxJQUFJO0FBQ2RjLGVBQU8sQ0FBQ0MsR0FBUixDQUFZZixLQUFaOztBQUNBLFlBQUlBLEtBQUssQ0FBQzJCLFFBQU4sQ0FBZWUsSUFBbkIsRUFBeUI7QUFDdkIsZUFBS3ZDLFFBQUwsQ0FBYztBQUNaSCxpQkFBSyxFQUFFQSxLQUFLLENBQUMyQixRQUFOLENBQWVlLElBQWYsQ0FBb0JDLE9BRGY7QUFFWjVDLHFCQUFTLEVBQUU7QUFGQyxXQUFkO0FBSUFlLGlCQUFPLENBQUNDLEdBQVIsQ0FBWTZCLElBQUksQ0FBQ0MsU0FBTCxDQUFlN0MsS0FBZixDQUFaO0FBQ0Q7QUFDRixPQWpCSDtBQWtCRDtBQUNGOztBQUVEOEMsUUFBTSxHQUFHO0FBQ1AsUUFBSTtBQUFFM0QscUJBQUY7QUFBbUJJO0FBQW5CLFFBQWtDLEtBQUtMLEtBQTNDO0FBQ0EsVUFBTTZELFVBQVUsR0FBRyxLQUFLN0QsS0FBTCxDQUFXRyxNQUFYLENBQWtCMkQsR0FBbEIsQ0FDakIsVUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCO0FBQ3BCLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0EsS0FBSyxHQUFHLENBQWIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0QsSUFBSSxDQUFDeEQsVUFBTCxHQUFrQixHQUFsQixHQUF3QndELElBQUksQ0FBQ3ZELFNBQWxDLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUt1RCxJQUFJLENBQUNwRCxLQUFWLENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtvRCxJQUFJLENBQUNULElBQVYsQ0FKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxHQURQO0FBRUUsZUFBTyxFQUFFLEtBQUtwQyxVQUFMLENBQWdCK0MsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkJGLElBQUksQ0FBQ0csR0FBaEMsQ0FGWDtBQUdFLFdBQUcsRUFBQyxLQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRSxNQUFDLHVEQUFELENBQWEsUUFBYjtBQUFzQixhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFLFNBQVQ7QUFBb0JDLGNBQUksRUFBRTtBQUExQixTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FMRixDQURGLEVBVUU7QUFBSyxpQkFBUyxFQUFFbkUsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLENBVkYsQ0FMRixDQURGO0FBdUJELEtBeEJELENBd0JFZ0UsSUF4QkYsQ0F3Qk8sSUF4QlAsQ0FEaUIsQ0FBbkI7O0FBNEJBLFVBQU1JLFVBQVUsR0FBRyxDQUFDO0FBQUVqRCxpQkFBRjtBQUFlbEIsVUFBZjtBQUFxQm9FO0FBQXJCLEtBQUQsS0FBcUM7QUFDdEQsWUFBTUMsaUJBQWlCLEdBQUdyRSxJQUFJLEdBQzFCLHFCQUQwQixHQUUxQixvQkFGSjtBQUlBLGFBQ0U7QUFBSyxpQkFBUyxFQUFFcUUsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFTLGlCQUFTLEVBQUMsWUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHRCxRQURILEVBRUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVEsZUFBTyxFQUFFLEtBQUtqQyxNQUFMLENBQVk0QixJQUFaLENBQWlCLElBQWpCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUN3RCxHQUR4RCxFQUVFO0FBQVEsZUFBTyxFQUFFN0MsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixDQUZGLENBREYsQ0FERjtBQVdELEtBaEJEOztBQWlCQSxVQUFNb0QsdUJBQXVCLEdBQUduRSxVQUFVLEdBQ3RDLGVBRHNDLEdBRXRDLGNBRko7QUFJQSxXQUNFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLEVBRUE7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxVQUFEO0FBQ0UsVUFBSSxFQUFFLEtBQUtMLEtBQUwsQ0FBV0UsSUFEbkI7QUFFRSxpQkFBVyxFQUFFLEtBQUtrQixXQUFMLENBQWlCNkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FGZjtBQUdFLFlBQU0sRUFBRSxLQUFLNUIsTUFBTCxDQUFZNEIsSUFBWixDQUFpQixJQUFqQixDQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUxGLENBREYsRUFRRTtBQUFHLGVBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixFQVNFO0FBQ0UsZUFBUyxFQUFDLGNBRFo7QUFFRSxhQUFPLEVBQUUsS0FBSzVDLGdCQUFMLENBQXNCNEMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixDQVRGLEVBZUU7QUFBSyxlQUFTLEVBQUVPLHVCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUcsS0FBS3hFLEtBQUwsQ0FBV2EsU0FBWCxJQUNDO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3QixLQUFLYixLQUFMLENBQVdjLEtBQW5DLENBSEosRUFLRTtBQUFNLGNBQVEsRUFBRSxLQUFLa0MsV0FBTCxDQUFpQmlCLElBQWpCLENBQXNCLElBQXRCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFLLEVBQUUsS0FBS2pFLEtBQUwsQ0FBV3lFLElBRnBCO0FBR0UsY0FBUSxNQUhWO0FBSUUsY0FBUSxFQUFFQyxLQUFLLElBQ2IsS0FBS3pELFFBQUwsQ0FBYztBQUFFd0QsWUFBSSxFQUFFQyxLQUFLLENBQUNqRCxNQUFOLENBQWFDO0FBQXJCLE9BQWQsQ0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFVRTtBQUFHLGVBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkYsRUFXRTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsV0FBSyxFQUFFLEtBQUsxQixLQUFMLENBQVcyQyxRQUZwQjtBQUdFLGNBQVEsTUFIVjtBQUlFLGNBQVEsRUFBRStCLEtBQUssSUFDYixLQUFLekQsUUFBTCxDQUFjO0FBQUUwQixnQkFBUSxFQUFFK0IsS0FBSyxDQUFDakQsTUFBTixDQUFhQztBQUF6QixPQUFkLENBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVhGLENBREYsRUFzQkU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBRyxlQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsRUFFRTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsV0FBSyxFQUFFLEtBQUsxQixLQUFMLENBQVcyRSxHQUZwQjtBQUdFLGNBQVEsTUFIVjtBQUlFLGNBQVEsRUFBRUQsS0FBSyxJQUNiLEtBQUt6RCxRQUFMLENBQWM7QUFBRTBELFdBQUcsRUFBRUQsS0FBSyxDQUFDakQsTUFBTixDQUFhQztBQUFwQixPQUFkLENBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBdEJGLEVBa0NFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFLLEVBQUUsS0FBSzFCLEtBQUwsQ0FBV00sTUFGcEI7QUFHRSxlQUFTLEVBQUUsRUFIYjtBQUlFLGVBQVMsRUFBRSxFQUpiO0FBS0UsY0FBUSxFQUFFb0UsS0FBSyxJQUNiLEtBQUt6RCxRQUFMLENBQWM7QUFBRVgsY0FBTSxFQUFFb0UsS0FBSyxDQUFDakQsTUFBTixDQUFhQztBQUF2QixPQUFkLENBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBV0U7QUFBRyxlQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhGLEVBWUU7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLFdBQUssRUFBRSxLQUFLMUIsS0FBTCxDQUFXVSxHQUZwQjtBQUdFLGVBQVMsRUFBRSxDQUhiO0FBSUUsZUFBUyxFQUFFLENBSmI7QUFLRSxjQUFRLE1BTFY7QUFNRSxjQUFRLEVBQUVnRSxLQUFLLElBQUksS0FBS3pELFFBQUwsQ0FBYztBQUFFUCxXQUFHLEVBQUVnRSxLQUFLLENBQUNqRCxNQUFOLENBQWFDO0FBQXBCLE9BQWQsQ0FOckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVpGLENBbENGLENBREYsRUF5REU7QUFBRyxlQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpERixFQTBERTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsV0FBSyxFQUFFLEtBQUsxQixLQUFMLENBQVdTLE9BRnBCO0FBR0UsY0FBUSxNQUhWO0FBSUUsY0FBUSxFQUFFaUUsS0FBSyxJQUFJLEtBQUt6RCxRQUFMLENBQWM7QUFBRVIsZUFBTyxFQUFFaUUsS0FBSyxDQUFDakQsTUFBTixDQUFhQztBQUF4QixPQUFkLENBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUExREYsRUFnRUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUU7QUFBTyxVQUFJLEVBQUMsUUFBWjtBQUFxQixXQUFLLEVBQUMsUUFBM0I7QUFBb0MsZUFBUyxFQUFDLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQ0UsZUFBUyxFQUFDLFFBRFo7QUFFRSxhQUFPLEVBQUUsS0FBS0osaUJBQUwsQ0FBdUIyQyxJQUF2QixDQUE0QixJQUE1QixDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixDQWhFRixDQUxGLENBZkYsRUFnR0U7QUFBTyxRQUFFLEVBQUMsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLENBREYsRUFTR0osVUFUSCxDQURGLENBaEdGLENBRkEsQ0FERjtBQWtIRDs7QUF6UzRCOztBQTRTaEJqRSxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclRBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBSUEsTUFBTWdGLE9BQU4sU0FBc0IvRSwrQ0FBdEIsQ0FBZ0M7QUFDOUJDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBRTZFLGlCQUFXLEVBQUU7QUFBZixLQUFiO0FBQ0QsR0FKNkIsQ0FNOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFRkMsT0FBSyxDQUFDcEQsS0FBRCxFQUFPO0FBQ1YsVUFBTTtBQUFDcUQ7QUFBRCxRQUFhLEtBQUtoRixLQUFMLENBQVc0QyxRQUE5Qjs7QUFDRixRQUFHakIsS0FBSyxJQUFJcUQsUUFBWixFQUFxQjtBQUNuQixXQUFLaEYsS0FBTCxDQUFXK0MsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0JyQixLQUF4QjtBQUNEO0FBQ0E7O0FBRUNrQyxRQUFNLEdBQUc7QUFDUCxVQUFNbUIsUUFBUSxHQUFHLEVBQWpCO0FBQ0FuRCxXQUFPLENBQUNDLEdBQVIsQ0FBWWtELFFBQVEsR0FBQyxNQUFyQjtBQUNDLFdBQ0M7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVKO0FBQUcsZUFBUyxFQUFDLHdCQUFiO0FBQ0UsV0FBSyxFQUFFO0FBQUNaLGFBQUssRUFBQztBQUFQLE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSSxFQUtFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLEVBTUU7QUFDQSxhQUFPLEVBQUUsS0FBS1csS0FBTCxDQUFXYixJQUFYLENBQWdCLElBQWhCLEVBQXNCLFlBQXRCLENBRFQsQ0FFRjtBQUZFO0FBR0EsZUFBUyxFQUFFYyxRQUFRLEtBQUssWUFBYixHQUE0QixvQkFBNUIsR0FBbUQsc0JBSDlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLQ0EsUUFBUSxLQUFLLFlBQWIsR0FDQyxNQUFDLHVEQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUU7QUFBRVosYUFBSyxFQUFFLFNBQVQ7QUFBb0JDLFlBQUksRUFBRTtBQUExQixPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERCxHQUtBLE1BQUMsdURBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRTtBQUFFRCxhQUFLLEVBQUUsU0FBVDtBQUFvQkMsWUFBSSxFQUFFO0FBQTFCLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESCxDQVZELEVBY0U7QUFBRyxlQUFTLEVBQUVXLFFBQVEsS0FBSyxZQUFiLEdBQTRCLGFBQTVCLEdBQTRDLGVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEYsQ0FORixFQXVCRTtBQUNBLGFBQU8sRUFBRSxLQUFLRCxLQUFMLENBQVdiLElBQVgsQ0FBZ0IsSUFBaEIsRUFBc0IsU0FBdEIsQ0FEVCxDQUVBO0FBRkE7QUFHQSxlQUFTLEVBQUVjLFFBQVEsS0FBSyxTQUFiLEdBQXlCLG9CQUF6QixHQUFnRCxzQkFIM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtDQSxRQUFRLEtBQUssU0FBYixHQUF5QixNQUFDLHVEQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUU7QUFBRVosYUFBSyxFQUFFLFNBQVQ7QUFBb0JDLFlBQUksRUFBRTtBQUExQixPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ3RCLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURzQixDQUF6QixHQUUwQixNQUFDLHVEQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUU7QUFBRUQsYUFBSyxFQUFFLFNBQVQ7QUFBb0JDLFlBQUksRUFBRTtBQUExQixPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ3ZCLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUR1QixDQVAzQixFQVVFO0FBQUcsZUFBUyxFQUFFVyxRQUFRLEtBQUssU0FBYixHQUF5QixhQUF6QixHQUF5QyxlQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLENBdkJGLEVBbUNFO0FBQ0EsYUFBTyxFQUFFLEtBQUtELEtBQUwsQ0FBV2IsSUFBWCxDQUFnQixJQUFoQixFQUFzQixXQUF0QixDQURULENBRUg7QUFGRztBQUdDLGVBQVMsRUFBRWMsUUFBUSxLQUFLLFdBQWIsR0FBMkIsb0JBQTNCLEdBQWtELHNCQUg5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUNBLFFBQVEsS0FBSyxXQUFiLEdBQXFDLE1BQUMsdURBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRTtBQUFFWixhQUFLLEVBQUUsU0FBVDtBQUFvQkMsWUFBSSxFQUFFO0FBQTFCLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDbEMsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGtDLENBQXJDLEdBRXFDLE1BQUMsdURBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRTtBQUFFRCxhQUFLLEVBQUUsU0FBVDtBQUFvQkMsWUFBSSxFQUFFO0FBQTFCLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDbEMsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGtDLENBTnRDLEVBU0U7QUFBRyxlQUFTLEVBQUVXLFFBQVEsS0FBSyxXQUFiLEdBQTJCLGFBQTNCLEdBQTJDLGVBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEYsQ0FuQ0YsRUE4Q0U7QUFDQSxhQUFPLEVBQUUsS0FBS0QsS0FBTCxDQUFXYixJQUFYLENBQWdCLElBQWhCLEVBQXNCLFFBQXRCLENBRFQ7QUFFQSxlQUFTLEVBQUVjLFFBQVEsS0FBSyxRQUFiLEdBQXdCLG9CQUF4QixHQUErQyxzQkFGMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdDQSxRQUFRLEtBQUssUUFBYixHQUFrQyxNQUFDLHVEQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUU7QUFBRVosYUFBSyxFQUFFLFNBQVQ7QUFBb0JDLFlBQUksRUFBRTtBQUExQixPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQy9CLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUQrQixDQUFsQyxHQUVxQyxNQUFDLHVEQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUU7QUFBRUQsYUFBSyxFQUFFLFNBQVQ7QUFBb0JDLFlBQUksRUFBRSxFQUExQjtBQUE4QlksbUJBQVcsRUFBQztBQUExQyxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ2xDLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURrQyxDQUx0QyxFQVFFO0FBQUcsZUFBUyxFQUFFRCxRQUFRLEtBQUssUUFBYixHQUF3QixhQUF4QixHQUF3QyxlQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsQ0E5Q0YsQ0FERDtBQStFRjs7QUExRzZCOztBQTZHakJILHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDdEhBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDIiwiZmlsZSI6InBhZ2VzL2FkbWluL2hvdGVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWRtaW4vaG90ZWxzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJY29uQ29udGV4dCB9IGZyb20gXCJyZWFjdC1pY29uc1wiO1xyXG5pbXBvcnQgeyBNZFNldHRpbmdzLCBNZERlbGV0ZUZvcmV2ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG4vLyBpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uLy4uLy4uL3Jvb3QuanNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO2ltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxudmFyIG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9zaWRlYmFyXCI7XHJcblxyXG5jbGFzcyBIb3RlbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93SGlkZVNpZGVuYXY6IFwiaGlkZGVuXCIsXHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBob3RlbHM6IFtdLFxyXG4gICAgICB0b0RlbGV0ZTogXCJcIixcclxuICAgICAgc2hvd0NyZWF0ZTogZmFsc2UsXHJcbiAgICAgIG51bWJlcjogXCJcIixcclxuICAgICAgZmlyc3RfbmFtZTogXCJcIixcclxuICAgICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgICB6aXA6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgZXJyb3JfZGl2OiBmYWxzZSxcclxuICAgICAgZXJyb3I6IFwiXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaWRlbmF2KCkge1xyXG4gICAgdmFyIGNzcyA9IHRoaXMuc3RhdGUuc2hvd0hpZGVTaWRlbmF2ID09PSBcImhpZGRlblwiID8gXCJzaG93XCIgOiBcImhpZGRlblwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dIaWRlU2lkZW5hdjogY3NzIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2hvdyhpZCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUsIHRvRGVsZXRlOiBpZCB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsb3NlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2hvd0NyZWF0ZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q3JlYXRlOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xvc2VDcmVhdGUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NyZWF0ZTogZmFsc2UgfSk7XHJcbiAgfVxyXG4gIGhhbmRsZU51bWJlcihlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbnVtYmVyOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy50b2tlbik7XHJcbiAgICBsZXQgdG9rZW4gPSBhd2FpdCBDb29raWVzLmdldCgndG9rZW4nKSBcclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbiB9LFxyXG4gICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgfTtcclxuICAgIC8vIGF4aW9zXHJcbiAgICAvLyAgIC5nZXQoQVBJX1VSTCArIFwiaG90ZWxzXCIsIGNvbmZpZylcclxuICAgIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIC8vICAgICBpZiAocmVzcG9uc2UuZGF0YS5tZXNzYWdlID09IFwiVG9rZW4gaXMgbm90IHZhbGlkXCIpIHtcclxuICAgIC8vICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL1wiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdmFyIGxlbiA9IHJlc3BvbnNlLmRhdGEubGVuZ3RoO1xyXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBob3RlbHM6IFtdIH0pO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIC8vICAgICAgIGxldCByb3cgPSByZXNwb25zZS5kYXRhW2ldO1xyXG4gICAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgIC8vICAgICAgICAgaG90ZWxzOiBbLi4ucHJldlN0YXRlLmhvdGVscywgcm93XVxyXG4gICAgLy8gICAgICAgfSkpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIC8vICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9cIik7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgLy8gICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGRlbGV0ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudG9EZWxldGUpO1xyXG4gICAgbGV0IHRva2VuID0gYXdhaXQgQ29va2llcy5nZXQoJ3Rva2VuJykgXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4gfSxcclxuICAgICAgdGltZW91dDogMjAwMDBcclxuICAgIH07XHJcbiAgICBheGlvc1xyXG4gICAgICAuZGVsZXRlKEFQSV9VUkwgKyBcInVzZXJzL1wiICsgdGhpcy5zdGF0ZS50b0RlbGV0ZSwgY29uZmlnKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgY3JlYXRlSG90ZWwoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzTmFOKHRoaXMuc3RhdGUubnVtYmVyKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IFwiSW52YWxpZCBNb2JpbGUgTnVtYmVyXCIsIGVycm9yX2RpdjogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSBpZiAoaXNOYU4odGhpcy5zdGF0ZS56aXApKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogXCJJbnZhbGlkIFppcCBjb2RlXCIsIGVycm9yX2RpdjogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9kaXY6IGZhbHNlIH0pO1xyXG4gICAgICB2YXIgYm9keVBhcmFtZXRlcnMgPSB7XHJcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsXHJcbiAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS5hZGRyZXNzLFxyXG4gICAgICAgIHppcGNvZGU6IHRoaXMuc3RhdGUuemlwLFxyXG4gICAgICAgIG1vYmlsZV9udW1iZXI6IHRoaXMuc3RhdGUubnVtYmVyLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IHRoaXMuc3RhdGUuZmlyc3RfbmFtZSxcclxuICAgICAgICBsYXN0X25hbWU6IHRoaXMuc3RhdGUubGFzdF9uYW1lLFxyXG4gICAgICAgIHJvbGU6IFwiaG90ZWxcIlxyXG4gICAgICB9O1xyXG4gICAgICBjb25zb2xlLmxvZyhib2R5UGFyYW1ldGVycyk7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoQVBJX1VSTCArIFwidXNlcnNcIiwgYm9keVBhcmFtZXRlcnMsIHtcclxuICAgICAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICBlcnJvcl9kaXY6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBzaG93SGlkZVNpZGVuYXYsIHNob3dDcmVhdGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBob3RlbF9kYXRhID0gdGhpcy5zdGF0ZS5ob3RlbHMubWFwKFxyXG4gICAgICBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57aXRlbS5maXJzdF9uYW1lICsgXCIgXCIgKyBpdGVtLmxhc3RfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e2l0ZW0uZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntpdGVtLnJvbGV9PC90ZD5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3cuYmluZCh0aGlzLCBpdGVtLl9pZCl9XHJcbiAgICAgICAgICAgICAgICByZWY9XCJidG5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogXCIjQjFBREFEXCIsIHNpemU6IDIyIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TWREZWxldGVGb3JldmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd0hpZGVTaWRlbmF2fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2NrLXRleHRcIj5CbG9jazwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1c3BlbmQtdGV4dFwiPlN1c3BlbmQ8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBNb2RhbEhvdGVsID0gKHsgaGFuZGxlQ2xvc2UsIHNob3csIGNoaWxkcmVuIH0pID0+IHtcclxuICAgICAgY29uc3Qgc2hvd0hpZGVDbGFzc05hbWUgPSBzaG93XHJcbiAgICAgICAgPyBcIm1vZGFsIGRpc3BsYXktYmxvY2tcIlxyXG4gICAgICAgIDogXCJtb2RhbCBkaXNwbGF5LW5vbmVcIjtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dIaWRlQ2xhc3NOYW1lfT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsLW1haW5cIj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1yb3dcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZGVsZXRlLmJpbmQodGhpcyl9PlllczwvYnV0dG9uPntcIiBcIn1cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzaG93SGlkZUNsYXNzTmFtZUNyZWF0ZSA9IHNob3dDcmVhdGVcclxuICAgICAgPyBcImRpc3BsYXktYmxvY2tcIlxyXG4gICAgICA6IFwiZGlzcGxheS1ub25lXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtYm9keVwiPlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm94XCI+XHJcbiAgICAgICAgPE1vZGFsSG90ZWxcclxuICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd31cclxuICAgICAgICAgIGhhbmRsZUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBkZWxldGU9e3RoaXMuZGVsZXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGhvdGVsPC9wPlxyXG4gICAgICAgIDwvTW9kYWxIb3RlbD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhZG1pbi1oZWFkZXJcIj5Ib3RlbDwvcD5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhZG1pbi1idXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTaG93Q3JlYXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHA+QUREIEhPVEVMPC9wPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93SGlkZUNsYXNzTmFtZUNyZWF0ZX0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhZG1pbi1oZWFkZXJcIj5BZGQgSG90ZWw8L3A+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvcl9kaXYgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e3RoaXMuc3RhdGUuZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuY3JlYXRlSG90ZWwuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPk5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+TG9jYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtcm93XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPkJpbzwvcD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJpb31cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJpbzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPkNoZWNrIDwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXsxMH1cclxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG51bWJlcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+WmlwIGNvZGU8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS56aXB9XHJcbiAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17NX1cclxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs1fVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHppcDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5BZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgYWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJvd1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY3JlYXRlSG90ZWwuYmluZCh0aGlzKX0+Q3JlYXRlPC9idXR0b24+e1wiIFwifSAqL31cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUNyZWF0ZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0YWJsZSBpZD1cImN1c3RvbWVyc1wiPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlMvTjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkhvdGVsIG5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkF1dGhvcjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICB7aG90ZWxfZGF0YX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG90ZWxzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEljb25Db250ZXh0IH0gZnJvbSBcInJlYWN0LWljb25zXCI7XHJcbmltcG9ydCB7IE1kVmlld1F1aWx0IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCB7IEZhVXNlcnNDb2csIEZhTGlzdEFsdCwgRmFVc2VycywgRmFNYXBNYXJrZXJBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgSW9Jb3NQcmljZXRhZ3MgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuLy8gaW1wb3J0IHsgTGluaywgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuXHJcblxyXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgYXBpUmVzcG9uc2U6IFwiXCIgfTtcclxuICB9XHJcblxyXG4gIC8vIGNhbGxBUEkoKSB7XHJcbiAgLy8gICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo5MDAwL3Rlc3RBUElcIilcclxuICAvLyAgICAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxyXG4gIC8vICAgICAgICAgLnRoZW4ocmVzID0+IHRoaXMuc2V0U3RhdGUoeyBhcGlSZXNwb25zZTogcmVzIH0pKVxyXG4gIC8vICAgICAgICAgLmNhdGNoKGVyciA9PiBlcnIpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICAgIHRoaXMuY2FsbEFQSSgpO1xyXG4gIC8vIH1cclxuXHJcbnByZXNzKHZhbHVlKXtcclxuICBjb25zdCB7cGF0aG5hbWV9ID0gdGhpcy5wcm9wcy5sb2NhdGlvbjtcclxuaWYodmFsdWUgIT0gcGF0aG5hbWUpe1xyXG4gIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHZhbHVlKTtcclxufVxyXG59XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHBhdGhuYW1lID0gJyc7XHJcbiAgICBjb25zb2xlLmxvZyhwYXRobmFtZStcIiAgIGtcIilcclxuICAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm94LXNpZGViYXJcIj5cclxuICAgICAgICB7LyogPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbG9nby5wbmdcIil9IGNsYXNzTmFtZT1cImxvZ28taW1hZ2VcIiAvPiAqL31cclxuXHRcdDxwIGNsYXNzTmFtZT1cImhlbGxpeC1tZWRpdW0td2hpdGUtMThcIlxyXG4gICAgc3R5bGU9e3tjb2xvcjonYmxhY2snfX0+Qm9vazI0PC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtZGl2XCIgLz5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJlc3MuYmluZCh0aGlzLCAnL2Rhc2hib2FyZCcpfVxyXG4gICAgICAvLyAgdG89XCIvZGFzaGJvYXJkXCIgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9kYXNoYm9hcmQnID8gXCJyb3V0ZSBhY3RpdmUtcm91dGVcIiA6IFwicm91dGUgaW5hY3RpdmUtcm91dGVcIn0+XHJcbiAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9kYXNoYm9hcmQnID8gXCJyb3V0ZSBhY3RpdmUtcm91dGVcIiA6IFwicm91dGUgaW5hY3RpdmUtcm91dGVcIn0+ICovfVxyXG4gICAgICAgIHtwYXRobmFtZSA9PT0gJy9kYXNoYm9hcmQnID8gXHJcbiAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29sb3I6IFwiIzEyODFkZFwiLCBzaXplOiAyMiB9fT5cclxuICAgICAgICAgICAgPE1kVmlld1F1aWx0IC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICA6XHJcbiAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogXCIjNzU3NTc1XCIsIHNpemU6IDIyIH19PlxyXG4gICAgICAgICAgICA8TWRWaWV3UXVpbHQgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+fVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Rhc2hib2FyZCcgPyBcImFjdGl2ZS10ZXh0XCIgOiBcImluYWN0aXZlLXRleHRcIn0+RGFzaGJvYXJkPC9wPlxyXG4gICAgICAgIHsvKiA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByZXNzLmJpbmQodGhpcywgJy9ob3RlbHMnKX0gXHJcbiAgICAgICAgLy90bz1cIi9ob3RlbHNcIiBcclxuICAgICAgICBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2hvdGVscycgPyBcInJvdXRlIGFjdGl2ZS1yb3V0ZVwiIDogXCJyb3V0ZSBpbmFjdGl2ZS1yb3V0ZVwifT5cclxuICAgICAgICBcclxuICAgICAgICB7cGF0aG5hbWUgPT09ICcvaG90ZWxzJyA/IDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogXCIjMTI4MWRkXCIsIHNpemU6IDIyIH19PlxyXG4gICAgICAgICAgICA8RmFVc2Vyc0NvZyAvPlxyXG4gICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj4gOjxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogXCIjNzU3NTc1XCIsIHNpemU6IDIyIH19PlxyXG4gICAgICAgICAgICA8RmFVc2Vyc0NvZyAvPlxyXG4gICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj59XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2hvdGVscycgPyBcImFjdGl2ZS10ZXh0XCIgOiBcImluYWN0aXZlLXRleHRcIn0+SG90ZWxzPC9wPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgb25DbGljaz17dGhpcy5wcmVzcy5iaW5kKHRoaXMsICcvYm9va2luZ3MnKX0gXHJcbiAgICAgLy8gICB0bz1cIi9ib29raW5nc1wiXHJcbiAgICAgICAgIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYm9va2luZ3MnID8gXCJyb3V0ZSBhY3RpdmUtcm91dGVcIiA6IFwicm91dGUgaW5hY3RpdmUtcm91dGVcIn0+XHJcbiAgICAgICAge3BhdGhuYW1lID09PSAnL2Jvb2tpbmdzJyA/ICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29sb3I6IFwiIzEyODFkZFwiLCBzaXplOiAyMiB9fT5cclxuICAgICAgICAgICAgPEZhTGlzdEFsdCAvPlxyXG4gICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj4gOiAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbG9yOiBcIiM3NTc1NzVcIiwgc2l6ZTogMjIgfX0+XHJcbiAgICAgICAgICAgIDxGYUxpc3RBbHQgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+fVxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9ib29raW5ncycgPyBcImFjdGl2ZS10ZXh0XCIgOiBcImluYWN0aXZlLXRleHRcIn0+Qm9va2luZ3M8L3A+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByZXNzLmJpbmQodGhpcywgJy91c2VycycpfSBcclxuICAgICAgICBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL3VzZXJzJyA/IFwicm91dGUgYWN0aXZlLXJvdXRlXCIgOiBcInJvdXRlIGluYWN0aXZlLXJvdXRlXCJ9PlxyXG4gICAgICAgIHtwYXRobmFtZSA9PT0gJy91c2VycycgPyAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbG9yOiBcIiMxMjgxZGRcIiwgc2l6ZTogMjIgfX0+XHJcbiAgICAgICAgICAgIDxGYVVzZXJzIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPiA6ICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29sb3I6IFwiIzc1NzU3NVwiLCBzaXplOiAyMiwgbWFyZ2luUmlnaHQ6MTAgfX0+XHJcbiAgICAgICAgICAgIDxGYVVzZXJzIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPn1cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvdXNlcnMnID8gXCJhY3RpdmUtdGV4dFwiIDogXCJpbmFjdGl2ZS10ZXh0XCJ9PlVzZXJzPC9wPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHsvKiA8YnV0dG9uIFxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJlc3MuYmluZCh0aGlzLCAnL2Ryb3Bib3gnKX0gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9kcm9wYm94JyA/IFwicm91dGUgYWN0aXZlLXJvdXRlXCIgOiBcInJvdXRlIGluYWN0aXZlLXJvdXRlXCJ9PlxyXG4gICAgICAgIHtwYXRobmFtZSA9PT0gJy9kcm9wYm94JyA/ICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29sb3I6IFwiIzEyODFkZFwiLCBzaXplOiAyMiB9fT5cclxuICAgICAgICA8RmFNYXBNYXJrZXJBbHQgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+IDogICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogXCIjNzU3NTc1XCIsIHNpemU6IDIyIH19PlxyXG4gICAgICAgICAgPEZhTWFwTWFya2VyQWx0IC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPn1cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvZHJvcGJveCcgPyBcImFjdGl2ZS10ZXh0XCIgOiBcImluYWN0aXZlLXRleHRcIn0+RHJvcGJveGVzPC9wPlxyXG4gICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICB7LyogPGJ1dHRvbiBcclxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByZXNzLmJpbmQodGhpcywgJy9wcmljZWxpc3QnKX0gXHJcbiAgICAgICAgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9wcmljZWxpc3QnID8gXCJyb3V0ZSBhY3RpdmUtcm91dGVcIiA6IFwicm91dGUgaW5hY3RpdmUtcm91dGVcIn0+XHJcbiAgICAgICAge3BhdGhuYW1lID09PSAnL3ByaWNlbGlzdCcgPyAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbG9yOiBcIiMxMjgxZGRcIiwgc2l6ZTogMjIgfX0+XHJcbiAgICAgICAgPElvSW9zUHJpY2V0YWdzIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPiA6ICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29sb3I6IFwiIzc1NzU3NVwiLCBzaXplOiAyMiB9fT5cclxuICAgICAgICAgIDxJb0lvc1ByaWNldGFncyAvPlxyXG4gICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj59XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL3ByaWNlbGlzdCcgPyBcImFjdGl2ZS10ZXh0XCIgOiBcImluYWN0aXZlLXRleHRcIn0+UHJpY2VsaXN0PC9wPlxyXG4gICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9