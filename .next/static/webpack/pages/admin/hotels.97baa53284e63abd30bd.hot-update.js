webpackHotUpdate_N_E("pages/admin/hotels",{

/***/ "./pages/admin/hotels/index.js":
/*!*************************************!*\
  !*** ./pages/admin/hotels/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sidebar */ "./pages/admin/sidebar/index.js");







var _jsxFileName = "C:\\book24-web\\pages\\admin\\hotels\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // import Button from "react-bootstrap/Button";
// import { API_URL } from "../../../root.js";




var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");



var Hotels = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Hotels, _Component);

  var _super = _createSuper(Hotels);

  function Hotels(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Hotels);

    _this = _super.call(this, props);
    _this.state = {
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
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Hotels, [{
    key: "toggleSidenav",
    value: function toggleSidenav() {
      var css = this.state.showHideSidenav === "hidden" ? "show" : "hidden";
      this.setState({
        showHideSidenav: css
      });
    }
  }, {
    key: "handleShow",
    value: function handleShow(id) {
      this.setState({
        show: true,
        toDelete: id
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        show: false
      });
    }
  }, {
    key: "handleShowCreate",
    value: function handleShowCreate() {
      this.setState({
        showCreate: true
      });
    }
  }, {
    key: "handleCloseCreate",
    value: function handleCloseCreate() {
      this.setState({
        showCreate: false
      });
    }
  }, {
    key: "handleNumber",
    value: function handleNumber(e) {
      this.setState({
        number: e.target.value
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var token, config;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(this.props.token);
                _context.next = 3;
                return js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token');

              case 3:
                token = _context.sent;
                config = {
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

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        var token, config;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(this.state.toDelete);
                _context2.next = 3;
                return js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token');

              case 3:
                token = _context2.sent;
                config = {
                  headers: {
                    Authorization: "Bearer " + token
                  },
                  timeout: 20000
                };
                axios__WEBPACK_IMPORTED_MODULE_10___default.a["delete"](API_URL + "users/" + this.state.toDelete, config).then(function (response) {
                  console.log(response);
                  window.location.reload();
                })["catch"](function (error) {
                  _this2.props.history.push("/");

                  console.log(error);
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "createHotel",
    value: function createHotel(e) {
      var _this3 = this;

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
        axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(API_URL + "users", bodyParameters, {
          timeout: 20000
        }).then(function (response) {
          console.log(response);
          window.location.reload();
        })["catch"](function (error) {
          console.log(error);

          if (error.response.data) {
            _this3.setState({
              error: error.response.data.message,
              error_div: true
            });

            console.log(JSON.stringify(error));
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          showHideSidenav = _this$state.showHideSidenav,
          showCreate = _this$state.showCreate;
      var hotel_data = this.state.hotels.map(function (item, index) {
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
        }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_8__["IconContext"].Provider, {
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
        }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdDeleteForever"], {
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

      var ModalHotel = function ModalHotel(_ref) {
        var handleClose = _ref.handleClose,
            show = _ref.show,
            children = _ref.children;
        var showHideClassName = show ? "modal display-block" : "modal display-none";
        return __jsx("div", {
          className: showHideClassName,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 9
          }
        }, __jsx("section", {
          className: "modal-main",
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 11
          }
        }, children, __jsx("div", {
          className: "button-row",
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }
        }, __jsx("button", {
          onClick: _this4["delete"].bind(_this4),
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 15
          }
        }, "Yes"), " ", __jsx("button", {
          onClick: handleClose,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 15
          }
        }, "Close"))));
      };

      var showHideClassNameCreate = showCreate ? "display-block" : "display-none";
      return __jsx("div", {
        className: "app-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 7
        }
      }, __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
        "delete": this["delete"].bind(this),
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
        onChange: function onChange(event) {
          return _this4.setState({
            name: event.target.value
          });
        },
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
      }, "Bbio"), __jsx("input", {
        type: "text",
        value: this.state.last_name,
        required: true,
        onChange: function onChange(event) {
          return _this4.setState({
            last_name: event.target.value
          });
        },
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
          lineNumber: 238,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "label-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 17
        }
      }, "Email"), __jsx("input", {
        type: "email",
        value: this.state.email,
        required: true,
        onChange: function onChange(event) {
          return _this4.setState({
            email: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 17
        }
      }), __jsx("p", {
        className: "label-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 17
        }
      }, "Password"), __jsx("input", {
        type: "password",
        value: this.state.password,
        minLength: 8,
        onChange: function onChange(event) {
          return _this4.setState({
            password: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "input-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "label-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 17
        }
      }, "Mobile Number(+1)"), __jsx("input", {
        type: "text",
        value: this.state.number,
        minLength: 10,
        maxLength: 10,
        onChange: function onChange(event) {
          return _this4.setState({
            number: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 17
        }
      }), __jsx("p", {
        className: "label-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 17
        }
      }, "Zip code"), __jsx("input", {
        type: "text",
        value: this.state.zip,
        minLength: 5,
        maxLength: 5,
        required: true,
        onChange: function onChange(event) {
          return _this4.setState({
            zip: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 17
        }
      }))), __jsx("p", {
        className: "label-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 13
        }
      }, "Address"), __jsx("input", {
        type: "text",
        value: this.state.address,
        required: true,
        onChange: function onChange(event) {
          return _this4.setState({
            address: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "input-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 13
        }
      }, __jsx("input", {
        type: "submit",
        value: "Create",
        className: "button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "button",
        onClick: this.handleCloseCreate.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 15
        }
      }, "Close")))), __jsx("table", {
        id: "customers",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 9
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 11
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 13
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 15
        }
      }, "S/N"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 15
        }
      }, "Hotel name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 15
        }
      }, "Email"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 15
        }
      }, "Address"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 15
        }
      }, "Action")), hotel_data))));
    }
  }]);

  return Hotels;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Hotels);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaG90ZWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vbWVudCIsInJlcXVpcmUiLCJIb3RlbHMiLCJwcm9wcyIsInN0YXRlIiwic2hvd0hpZGVTaWRlbmF2Iiwic2hvdyIsImhvdGVscyIsInRvRGVsZXRlIiwic2hvd0NyZWF0ZSIsIm51bWJlciIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJhZGRyZXNzIiwiemlwIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yX2RpdiIsImVycm9yIiwiY3NzIiwic2V0U3RhdGUiLCJpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRpbWVvdXQiLCJheGlvcyIsIkFQSV9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhpc3RvcnkiLCJwdXNoIiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsImJvZHlQYXJhbWV0ZXJzIiwiemlwY29kZSIsIm1vYmlsZV9udW1iZXIiLCJyb2xlIiwicG9zdCIsImRhdGEiLCJtZXNzYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsImhvdGVsX2RhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJoYW5kbGVTaG93IiwiYmluZCIsIl9pZCIsImNvbG9yIiwic2l6ZSIsIk1vZGFsSG90ZWwiLCJoYW5kbGVDbG9zZSIsImNoaWxkcmVuIiwic2hvd0hpZGVDbGFzc05hbWUiLCJzaG93SGlkZUNsYXNzTmFtZUNyZWF0ZSIsImhhbmRsZVNob3dDcmVhdGUiLCJjcmVhdGVIb3RlbCIsIm5hbWUiLCJldmVudCIsImhhbmRsZUNsb3NlQ3JlYXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtB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QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsQ0FERixFQVFHTCxVQVJILENBREYsQ0F2R0YsQ0FGQSxDQURGO0FBd0hEOzs7O0VBL1NrQm1CLCtDOztBQWtUTnZFLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2hvdGVscy45N2JhYTUzMjg0ZTYzYWJkMzBiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJY29uQ29udGV4dCB9IGZyb20gXCJyZWFjdC1pY29uc1wiO1xyXG5pbXBvcnQgeyBNZFNldHRpbmdzLCBNZERlbGV0ZUZvcmV2ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG4vLyBpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uLy4uLy4uL3Jvb3QuanNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO2ltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxudmFyIG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9zaWRlYmFyXCI7XHJcblxyXG5jbGFzcyBIb3RlbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93SGlkZVNpZGVuYXY6IFwiaGlkZGVuXCIsXHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBob3RlbHM6IFtdLFxyXG4gICAgICB0b0RlbGV0ZTogXCJcIixcclxuICAgICAgc2hvd0NyZWF0ZTogZmFsc2UsXHJcbiAgICAgIG51bWJlcjogXCJcIixcclxuICAgICAgZmlyc3RfbmFtZTogXCJcIixcclxuICAgICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgICB6aXA6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgZXJyb3JfZGl2OiBmYWxzZSxcclxuICAgICAgZXJyb3I6IFwiXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaWRlbmF2KCkge1xyXG4gICAgdmFyIGNzcyA9IHRoaXMuc3RhdGUuc2hvd0hpZGVTaWRlbmF2ID09PSBcImhpZGRlblwiID8gXCJzaG93XCIgOiBcImhpZGRlblwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dIaWRlU2lkZW5hdjogY3NzIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2hvdyhpZCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUsIHRvRGVsZXRlOiBpZCB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsb3NlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2hvd0NyZWF0ZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q3JlYXRlOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xvc2VDcmVhdGUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NyZWF0ZTogZmFsc2UgfSk7XHJcbiAgfVxyXG4gIGhhbmRsZU51bWJlcihlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbnVtYmVyOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy50b2tlbik7XHJcbiAgICBsZXQgdG9rZW4gPSBhd2FpdCBDb29raWVzLmdldCgndG9rZW4nKSBcclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbiB9LFxyXG4gICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgfTtcclxuICAgIC8vIGF4aW9zXHJcbiAgICAvLyAgIC5nZXQoQVBJX1VSTCArIFwiaG90ZWxzXCIsIGNvbmZpZylcclxuICAgIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIC8vICAgICBpZiAocmVzcG9uc2UuZGF0YS5tZXNzYWdlID09IFwiVG9rZW4gaXMgbm90IHZhbGlkXCIpIHtcclxuICAgIC8vICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL1wiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdmFyIGxlbiA9IHJlc3BvbnNlLmRhdGEubGVuZ3RoO1xyXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBob3RlbHM6IFtdIH0pO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIC8vICAgICAgIGxldCByb3cgPSByZXNwb25zZS5kYXRhW2ldO1xyXG4gICAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgIC8vICAgICAgICAgaG90ZWxzOiBbLi4ucHJldlN0YXRlLmhvdGVscywgcm93XVxyXG4gICAgLy8gICAgICAgfSkpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIC8vICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9cIik7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgLy8gICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGRlbGV0ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudG9EZWxldGUpO1xyXG4gICAgbGV0IHRva2VuID0gYXdhaXQgQ29va2llcy5nZXQoJ3Rva2VuJykgXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4gfSxcclxuICAgICAgdGltZW91dDogMjAwMDBcclxuICAgIH07XHJcbiAgICBheGlvc1xyXG4gICAgICAuZGVsZXRlKEFQSV9VUkwgKyBcInVzZXJzL1wiICsgdGhpcy5zdGF0ZS50b0RlbGV0ZSwgY29uZmlnKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgY3JlYXRlSG90ZWwoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzTmFOKHRoaXMuc3RhdGUubnVtYmVyKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IFwiSW52YWxpZCBNb2JpbGUgTnVtYmVyXCIsIGVycm9yX2RpdjogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSBpZiAoaXNOYU4odGhpcy5zdGF0ZS56aXApKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogXCJJbnZhbGlkIFppcCBjb2RlXCIsIGVycm9yX2RpdjogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9kaXY6IGZhbHNlIH0pO1xyXG4gICAgICB2YXIgYm9keVBhcmFtZXRlcnMgPSB7XHJcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsXHJcbiAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS5hZGRyZXNzLFxyXG4gICAgICAgIHppcGNvZGU6IHRoaXMuc3RhdGUuemlwLFxyXG4gICAgICAgIG1vYmlsZV9udW1iZXI6IHRoaXMuc3RhdGUubnVtYmVyLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IHRoaXMuc3RhdGUuZmlyc3RfbmFtZSxcclxuICAgICAgICBsYXN0X25hbWU6IHRoaXMuc3RhdGUubGFzdF9uYW1lLFxyXG4gICAgICAgIHJvbGU6IFwiaG90ZWxcIlxyXG4gICAgICB9O1xyXG4gICAgICBjb25zb2xlLmxvZyhib2R5UGFyYW1ldGVycyk7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoQVBJX1VSTCArIFwidXNlcnNcIiwgYm9keVBhcmFtZXRlcnMsIHtcclxuICAgICAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICBlcnJvcl9kaXY6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBzaG93SGlkZVNpZGVuYXYsIHNob3dDcmVhdGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBob3RlbF9kYXRhID0gdGhpcy5zdGF0ZS5ob3RlbHMubWFwKFxyXG4gICAgICBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57aXRlbS5maXJzdF9uYW1lICsgXCIgXCIgKyBpdGVtLmxhc3RfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e2l0ZW0uZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntpdGVtLnJvbGV9PC90ZD5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3cuYmluZCh0aGlzLCBpdGVtLl9pZCl9XHJcbiAgICAgICAgICAgICAgICByZWY9XCJidG5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogXCIjQjFBREFEXCIsIHNpemU6IDIyIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TWREZWxldGVGb3JldmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd0hpZGVTaWRlbmF2fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2NrLXRleHRcIj5CbG9jazwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1c3BlbmQtdGV4dFwiPlN1c3BlbmQ8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBNb2RhbEhvdGVsID0gKHsgaGFuZGxlQ2xvc2UsIHNob3csIGNoaWxkcmVuIH0pID0+IHtcclxuICAgICAgY29uc3Qgc2hvd0hpZGVDbGFzc05hbWUgPSBzaG93XHJcbiAgICAgICAgPyBcIm1vZGFsIGRpc3BsYXktYmxvY2tcIlxyXG4gICAgICAgIDogXCJtb2RhbCBkaXNwbGF5LW5vbmVcIjtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dIaWRlQ2xhc3NOYW1lfT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsLW1haW5cIj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1yb3dcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZGVsZXRlLmJpbmQodGhpcyl9PlllczwvYnV0dG9uPntcIiBcIn1cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzaG93SGlkZUNsYXNzTmFtZUNyZWF0ZSA9IHNob3dDcmVhdGVcclxuICAgICAgPyBcImRpc3BsYXktYmxvY2tcIlxyXG4gICAgICA6IFwiZGlzcGxheS1ub25lXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtYm9keVwiPlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm94XCI+XHJcbiAgICAgICAgPE1vZGFsSG90ZWxcclxuICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd31cclxuICAgICAgICAgIGhhbmRsZUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBkZWxldGU9e3RoaXMuZGVsZXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGhvdGVsPC9wPlxyXG4gICAgICAgIDwvTW9kYWxIb3RlbD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhZG1pbi1oZWFkZXJcIj5Ib3RlbDwvcD5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhZG1pbi1idXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTaG93Q3JlYXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHA+QUREIEhPVEVMPC9wPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93SGlkZUNsYXNzTmFtZUNyZWF0ZX0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhZG1pbi1oZWFkZXJcIj5BZGQgSG90ZWw8L3A+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvcl9kaXYgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e3RoaXMuc3RhdGUuZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuY3JlYXRlSG90ZWwuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPk5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+QmJpbzwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RfbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5FbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXs4fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+TW9iaWxlIE51bWJlcigrMSk8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5udW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17MTB9XHJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBudW1iZXI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPlppcCBjb2RlPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuemlwfVxyXG4gICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9ezV9XHJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17NX1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyB6aXA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+QWRkcmVzczwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1yb3dcIj5cclxuICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNyZWF0ZUhvdGVsLmJpbmQodGhpcyl9PkNyZWF0ZTwvYnV0dG9uPntcIiBcIn0gKi99XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNyZWF0ZVwiIGNsYXNzTmFtZT1cImJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VDcmVhdGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGFibGUgaWQ9XCJjdXN0b21lcnNcIj5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5TL048L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Ib3RlbCBuYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5BZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAge2hvdGVsX2RhdGF9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvdGVscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==