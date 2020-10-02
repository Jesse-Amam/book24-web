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
        value: this.state.first_name,
        required: true,
        onChange: function onChange(event) {
          return _this4.setState({
            first_name: event.target.value
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
      }, "Last Name"), __jsx("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaG90ZWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vbWVudCIsInJlcXVpcmUiLCJIb3RlbHMiLCJwcm9wcyIsInN0YXRlIiwic2hvd0hpZGVTaWRlbmF2Iiwic2hvdyIsImhvdGVscyIsInRvRGVsZXRlIiwic2hvd0NyZWF0ZSIsIm51bWJlciIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJhZGRyZXNzIiwiemlwIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yX2RpdiIsImVycm9yIiwiY3NzIiwic2V0U3RhdGUiLCJpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRpbWVvdXQiLCJheGlvcyIsIkFQSV9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhpc3RvcnkiLCJwdXNoIiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsImJvZHlQYXJhbWV0ZXJzIiwiemlwY29kZSIsIm1vYmlsZV9udW1iZXIiLCJyb2xlIiwicG9zdCIsImRhdGEiLCJtZXNzYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsImhvdGVsX2RhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJoYW5kbGVTaG93IiwiYmluZCIsIl9pZCIsImNvbG9yIiwic2l6ZSIsIk1vZGFsSG90ZWwiLCJoYW5kbGVDbG9zZSIsImNoaWxkcmVuIiwic2hvd0hpZGVDbGFzc05hbWUiLCJzaG93SGlkZUNsYXNzTmFtZUNyZWF0ZSIsImhhbmRsZVNob3dDcmVhdGUiLCJjcmVhdGVIb3RlbCIsImV2ZW50IiwiaGFuZGxlQ2xvc2VDcmVhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FF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Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixDQURGLEVBUUdMLFVBUkgsQ0FERixDQXZHRixDQUZBLENBREY7QUF3SEQ7Ozs7RUEvU2tCa0IsK0M7O0FBa1ROdEUscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vaG90ZWxzLjAxMDJiNDI3NWZkYzA2ZjliMTc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEljb25Db250ZXh0IH0gZnJvbSBcInJlYWN0LWljb25zXCI7XHJcbmltcG9ydCB7IE1kU2V0dGluZ3MsIE1kRGVsZXRlRm9yZXZlciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbi8vIGltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vLi4vLi4vcm9vdC5qc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7aW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG52YXIgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL3NpZGViYXJcIjtcclxuXHJcbmNsYXNzIEhvdGVscyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dIaWRlU2lkZW5hdjogXCJoaWRkZW5cIixcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIGhvdGVsczogW10sXHJcbiAgICAgIHRvRGVsZXRlOiBcIlwiLFxyXG4gICAgICBzaG93Q3JlYXRlOiBmYWxzZSxcclxuICAgICAgbnVtYmVyOiBcIlwiLFxyXG4gICAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgICBsYXN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgIHppcDogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBlcnJvcl9kaXY6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogXCJcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNpZGVuYXYoKSB7XHJcbiAgICB2YXIgY3NzID0gdGhpcy5zdGF0ZS5zaG93SGlkZVNpZGVuYXYgPT09IFwiaGlkZGVuXCIgPyBcInNob3dcIiA6IFwiaGlkZGVuXCI7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0hpZGVTaWRlbmF2OiBjc3MgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTaG93KGlkKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSwgdG9EZWxldGU6IGlkIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xvc2UoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTaG93Q3JlYXRlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDcmVhdGU6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbG9zZUNyZWF0ZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q3JlYXRlOiBmYWxzZSB9KTtcclxuICB9XHJcbiAgaGFuZGxlTnVtYmVyKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBudW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnRva2VuKTtcclxuICAgIGxldCB0b2tlbiA9IGF3YWl0IENvb2tpZXMuZ2V0KCd0b2tlbicpIFxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuIH0sXHJcbiAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICB9O1xyXG4gICAgLy8gYXhpb3NcclxuICAgIC8vICAgLmdldChBUElfVVJMICsgXCJob3RlbHNcIiwgY29uZmlnKVxyXG4gICAgLy8gICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgLy8gICAgIGlmIChyZXNwb25zZS5kYXRhLm1lc3NhZ2UgPT0gXCJUb2tlbiBpcyBub3QgdmFsaWRcIikge1xyXG4gICAgLy8gICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB2YXIgbGVuID0gcmVzcG9uc2UuZGF0YS5sZW5ndGg7XHJcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvdGVsczogW10gfSk7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgLy8gICAgICAgbGV0IHJvdyA9IHJlc3BvbnNlLmRhdGFbaV07XHJcbiAgICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgLy8gICAgICAgICBob3RlbHM6IFsuLi5wcmV2U3RhdGUuaG90ZWxzLCByb3ddXHJcbiAgICAvLyAgICAgICB9KSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL1wiKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAvLyAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVsZXRlKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50b0RlbGV0ZSk7XHJcbiAgICBsZXQgdG9rZW4gPSBhd2FpdCBDb29raWVzLmdldCgndG9rZW4nKSBcclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbiB9LFxyXG4gICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgfTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5kZWxldGUoQVBJX1VSTCArIFwidXNlcnMvXCIgKyB0aGlzLnN0YXRlLnRvRGVsZXRlLCBjb25maWcpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBjcmVhdGVIb3RlbChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaXNOYU4odGhpcy5zdGF0ZS5udW1iZXIpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogXCJJbnZhbGlkIE1vYmlsZSBOdW1iZXJcIiwgZXJyb3JfZGl2OiB0cnVlIH0pO1xyXG4gICAgfSBlbHNlIGlmIChpc05hTih0aGlzLnN0YXRlLnppcCkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBcIkludmFsaWQgWmlwIGNvZGVcIiwgZXJyb3JfZGl2OiB0cnVlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX2RpdjogZmFsc2UgfSk7XHJcbiAgICAgIHZhciBib2R5UGFyYW1ldGVycyA9IHtcclxuICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCxcclxuICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLmFkZHJlc3MsXHJcbiAgICAgICAgemlwY29kZTogdGhpcy5zdGF0ZS56aXAsXHJcbiAgICAgICAgbW9iaWxlX251bWJlcjogdGhpcy5zdGF0ZS5udW1iZXIsXHJcbiAgICAgICAgZmlyc3RfbmFtZTogdGhpcy5zdGF0ZS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZTogdGhpcy5zdGF0ZS5sYXN0X25hbWUsXHJcbiAgICAgICAgcm9sZTogXCJob3RlbFwiXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKGJvZHlQYXJhbWV0ZXJzKTtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChBUElfVVJMICsgXCJ1c2Vyc1wiLCBib2R5UGFyYW1ldGVycywge1xyXG4gICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgIGVycm9yX2RpdjogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IHNob3dIaWRlU2lkZW5hdiwgc2hvd0NyZWF0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGhvdGVsX2RhdGEgPSB0aGlzLnN0YXRlLmhvdGVscy5tYXAoXHJcbiAgICAgIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPntpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntpdGVtLmZpcnN0X25hbWUgKyBcIiBcIiArIGl0ZW0ubGFzdF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57aXRlbS5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e2l0ZW0ucm9sZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvdy5iaW5kKHRoaXMsIGl0ZW0uX2lkKX1cclxuICAgICAgICAgICAgICAgIHJlZj1cImJ0blwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbG9yOiBcIiNCMUFEQURcIiwgc2l6ZTogMjIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZERlbGV0ZUZvcmV2ZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93SGlkZVNpZGVuYXZ9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2stdGV4dFwiPkJsb2NrPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VzcGVuZC10ZXh0XCI+U3VzcGVuZDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IE1vZGFsSG90ZWwgPSAoeyBoYW5kbGVDbG9zZSwgc2hvdywgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgICBjb25zdCBzaG93SGlkZUNsYXNzTmFtZSA9IHNob3dcclxuICAgICAgICA/IFwibW9kYWwgZGlzcGxheS1ibG9ja1wiXHJcbiAgICAgICAgOiBcIm1vZGFsIGRpc3BsYXktbm9uZVwiO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd0hpZGVDbGFzc05hbWV9PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwtbWFpblwiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5kZWxldGUuYmluZCh0aGlzKX0+WWVzPC9idXR0b24+e1wiIFwifVxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNob3dIaWRlQ2xhc3NOYW1lQ3JlYXRlID0gc2hvd0NyZWF0ZVxyXG4gICAgICA/IFwiZGlzcGxheS1ibG9ja1wiXHJcbiAgICAgIDogXCJkaXNwbGF5LW5vbmVcIjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1ib2R5XCI+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3hcIj5cclxuICAgICAgICA8TW9kYWxIb3RlbFxyXG4gICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93fVxyXG4gICAgICAgICAgaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgIGRlbGV0ZT17dGhpcy5kZWxldGUuYmluZCh0aGlzKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaG90ZWw8L3A+XHJcbiAgICAgICAgPC9Nb2RhbEhvdGVsPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFkbWluLWhlYWRlclwiPkhvdGVsPC9wPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFkbWluLWJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dDcmVhdGUuYmluZCh0aGlzKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cD5BREQgSE9URUw8L3A+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dIaWRlQ2xhc3NOYW1lQ3JlYXRlfT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkbWluLWhlYWRlclwiPkFkZCBIb3RlbDwvcD5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yX2RpdiAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57dGhpcy5zdGF0ZS5lcnJvcn08L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5jcmVhdGVIb3RlbC5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+TmFtZTwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaXJzdF9uYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5MYXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0X25hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+RW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+UGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17OH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPk1vYmlsZSBOdW1iZXIoKzEpPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9ezEwfVxyXG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezEwfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbnVtYmVyOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5aaXAgY29kZTwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnppcH1cclxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXs1fVxyXG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezV9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgemlwOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPkFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtcm93XCI+XHJcbiAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVIb3RlbC5iaW5kKHRoaXMpfT5DcmVhdGU8L2J1dHRvbj57XCIgXCJ9ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDcmVhdGVcIiBjbGFzc05hbWU9XCJidXR0b25cIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlQ3JlYXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+Uy9OPC90aD5cclxuICAgICAgICAgICAgICA8dGg+SG90ZWwgbmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICA8dGg+QWRkcmVzczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIHtob3RlbF9kYXRhfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3RlbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=