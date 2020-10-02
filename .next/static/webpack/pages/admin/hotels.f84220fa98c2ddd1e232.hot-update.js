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
      }, "Bio"), __jsx("textarea", {
        type: "text",
        value: this.state.bio,
        required: true,
        onChange: function onChange(event) {
          return _this4.setState({
            bio: event.target.value
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
      }, "Location"), __jsx("input", {
        type: "text",
        value: this.state.mail,
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
          lineNumber: 249,
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
          lineNumber: 250,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "input-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "label-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
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
          lineNumber: 261,
          columnNumber: 17
        }
      }), __jsx("p", {
        className: "label-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
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
          lineNumber: 271,
          columnNumber: 17
        }
      }))), __jsx("p", {
        className: "label-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
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
          lineNumber: 282,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "input-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 13
        }
      }, __jsx("input", {
        type: "submit",
        value: "Create",
        className: "button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "button",
        onClick: this.handleCloseCreate.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 15
        }
      }, "Close")))), __jsx("table", {
        id: "customers",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 9
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 11
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 13
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 15
        }
      }, "S/N"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 15
        }
      }, "Hotel name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 15
        }
      }, "Email"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 15
        }
      }, "Address"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaG90ZWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vbWVudCIsInJlcXVpcmUiLCJIb3RlbHMiLCJwcm9wcyIsInN0YXRlIiwic2hvd0hpZGVTaWRlbmF2Iiwic2hvdyIsImhvdGVscyIsInRvRGVsZXRlIiwic2hvd0NyZWF0ZSIsIm51bWJlciIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJhZGRyZXNzIiwiemlwIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yX2RpdiIsImVycm9yIiwiY3NzIiwic2V0U3RhdGUiLCJpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRpbWVvdXQiLCJheGlvcyIsIkFQSV9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhpc3RvcnkiLCJwdXNoIiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsImJvZHlQYXJhbWV0ZXJzIiwiemlwY29kZSIsIm1vYmlsZV9udW1iZXIiLCJyb2xlIiwicG9zdCIsImRhdGEiLCJtZXNzYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsImhvdGVsX2RhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJoYW5kbGVTaG93IiwiYmluZCIsIl9pZCIsImNvbG9yIiwic2l6ZSIsIk1vZGFsSG90ZWwiLCJoYW5kbGVDbG9zZSIsImNoaWxkcmVuIiwic2hvd0hpZGVDbGFzc05hbWUiLCJzaG93SGlkZUNsYXNzTmFtZUNyZWF0ZSIsImhhbmRsZVNob3dDcmVhdGUiLCJjcmVhdGVIb3RlbCIsIm5hbWUiLCJldmVudCIsImJpbyIsIm1haWwiLCJoYW5kbGVDbG9zZUNyZWF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFBMEI7O0FBQzFCLElBQUlBLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQywrQ0FBRCxDQUFwQjs7QUFDQTs7SUFFTUMsTTs7Ozs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxxQkFBZSxFQUFFLFFBRE47QUFFWEMsVUFBSSxFQUFFLEtBRks7QUFHWEMsWUFBTSxFQUFFLEVBSEc7QUFJWEMsY0FBUSxFQUFFLEVBSkM7QUFLWEMsZ0JBQVUsRUFBRSxLQUxEO0FBTVhDLFlBQU0sRUFBRSxFQU5HO0FBT1hDLGdCQUFVLEVBQUUsRUFQRDtBQVFYQyxlQUFTLEVBQUUsRUFSQTtBQVNYQyxhQUFPLEVBQUUsRUFURTtBQVVYQyxTQUFHLEVBQUUsRUFWTTtBQVdYQyxXQUFLLEVBQUUsRUFYSTtBQVlYQyxjQUFRLEVBQUUsRUFaQztBQWFYQyxlQUFTLEVBQUUsS0FiQTtBQWNYQyxXQUFLLEVBQUU7QUFkSSxLQUFiO0FBRmlCO0FBa0JsQjs7OztvQ0FFZTtBQUNkLFVBQUlDLEdBQUcsR0FBRyxLQUFLZixLQUFMLENBQVdDLGVBQVgsS0FBK0IsUUFBL0IsR0FBMEMsTUFBMUMsR0FBbUQsUUFBN0Q7QUFDQSxXQUFLZSxRQUFMLENBQWM7QUFBRWYsdUJBQWUsRUFBRWM7QUFBbkIsT0FBZDtBQUNEOzs7K0JBRVVFLEUsRUFBSTtBQUNiLFdBQUtELFFBQUwsQ0FBYztBQUFFZCxZQUFJLEVBQUUsSUFBUjtBQUFjRSxnQkFBUSxFQUFFYTtBQUF4QixPQUFkO0FBQ0Q7OztrQ0FFYTtBQUNaLFdBQUtELFFBQUwsQ0FBYztBQUFFZCxZQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsV0FBS2MsUUFBTCxDQUFjO0FBQUVYLGtCQUFVLEVBQUU7QUFBZCxPQUFkO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS1csUUFBTCxDQUFjO0FBQUVYLGtCQUFVLEVBQUU7QUFBZCxPQUFkO0FBQ0Q7OztpQ0FDWWEsQyxFQUFHO0FBQ2QsV0FBS0YsUUFBTCxDQUFjO0FBQUVWLGNBQU0sRUFBRVksQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQW5CLE9BQWQ7QUFDRDs7Ozs7Ozs7OztBQUdDQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksS0FBS3ZCLEtBQUwsQ0FBV3dCLEtBQXZCOzt1QkFDa0JDLGlEQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEM7OztBQUFkRixxQjtBQUNBRyxzQixHQUFTO0FBQ1hDLHlCQUFPLEVBQUU7QUFBRUMsaUNBQWEsRUFBRSxZQUFZTDtBQUE3QixtQkFERTtBQUVYTSx5QkFBTyxFQUFFO0FBRkUsaUIsRUFJYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQVIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUt0QixLQUFMLENBQVdJLFFBQXZCOzt1QkFDa0JvQixpREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDOzs7QUFBZEYscUI7QUFDQUcsc0IsR0FBUztBQUNYQyx5QkFBTyxFQUFFO0FBQUVDLGlDQUFhLEVBQUUsWUFBWUw7QUFBN0IsbUJBREU7QUFFWE0seUJBQU8sRUFBRTtBQUZFLGlCO0FBSWJDLDZEQUFLLFVBQUwsQ0FDVUMsT0FBTyxHQUFHLFFBQVYsR0FBcUIsS0FBSy9CLEtBQUwsQ0FBV0ksUUFEMUMsRUFDb0RzQixNQURwRCxFQUVHTSxJQUZILENBRVEsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCWix5QkFBTyxDQUFDQyxHQUFSLENBQVlXLFFBQVo7QUFDQUMsd0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDRCxpQkFMSCxXQU1TLFVBQUF0QixLQUFLLEVBQUk7QUFDZCx3QkFBSSxDQUFDZixLQUFMLENBQVdzQyxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixHQUF4Qjs7QUFDQWpCLHlCQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUNELGlCQVRIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBV1VJLEMsRUFBRztBQUFBOztBQUNiQSxPQUFDLENBQUNxQixjQUFGOztBQUNBLFVBQUlDLEtBQUssQ0FBQyxLQUFLeEMsS0FBTCxDQUFXTSxNQUFaLENBQVQsRUFBOEI7QUFDNUIsYUFBS1UsUUFBTCxDQUFjO0FBQUVGLGVBQUssRUFBRSx1QkFBVDtBQUFrQ0QsbUJBQVMsRUFBRTtBQUE3QyxTQUFkO0FBQ0QsT0FGRCxNQUVPLElBQUkyQixLQUFLLENBQUMsS0FBS3hDLEtBQUwsQ0FBV1UsR0FBWixDQUFULEVBQTJCO0FBQ2hDLGFBQUtNLFFBQUwsQ0FBYztBQUFFRixlQUFLLEVBQUUsa0JBQVQ7QUFBNkJELG1CQUFTLEVBQUU7QUFBeEMsU0FBZDtBQUNELE9BRk0sTUFFQTtBQUNMLGFBQUtHLFFBQUwsQ0FBYztBQUFFSCxtQkFBUyxFQUFFO0FBQWIsU0FBZDtBQUNBLFlBQUk0QixjQUFjLEdBQUc7QUFDbkI5QixlQUFLLEVBQUUsS0FBS1gsS0FBTCxDQUFXVyxLQURDO0FBRW5CQyxrQkFBUSxFQUFFLEtBQUtaLEtBQUwsQ0FBV1ksUUFGRjtBQUduQkgsaUJBQU8sRUFBRSxLQUFLVCxLQUFMLENBQVdTLE9BSEQ7QUFJbkJpQyxpQkFBTyxFQUFFLEtBQUsxQyxLQUFMLENBQVdVLEdBSkQ7QUFLbkJpQyx1QkFBYSxFQUFFLEtBQUszQyxLQUFMLENBQVdNLE1BTFA7QUFNbkJDLG9CQUFVLEVBQUUsS0FBS1AsS0FBTCxDQUFXTyxVQU5KO0FBT25CQyxtQkFBUyxFQUFFLEtBQUtSLEtBQUwsQ0FBV1EsU0FQSDtBQVFuQm9DLGNBQUksRUFBRTtBQVJhLFNBQXJCO0FBVUF2QixlQUFPLENBQUNDLEdBQVIsQ0FBWW1CLGNBQVo7QUFDQVgscURBQUssQ0FDRmUsSUFESCxDQUNRZCxPQUFPLEdBQUcsT0FEbEIsRUFDMkJVLGNBRDNCLEVBQzJDO0FBQ3ZDWixpQkFBTyxFQUFFO0FBRDhCLFNBRDNDLEVBSUdHLElBSkgsQ0FJUSxVQUFBQyxRQUFRLEVBQUk7QUFDaEJaLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVcsUUFBWjtBQUNBQyxnQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNELFNBUEgsV0FRUyxVQUFBdEIsS0FBSyxFQUFJO0FBQ2RPLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjs7QUFDQSxjQUFJQSxLQUFLLENBQUNtQixRQUFOLENBQWVhLElBQW5CLEVBQXlCO0FBQ3ZCLGtCQUFJLENBQUM5QixRQUFMLENBQWM7QUFDWkYsbUJBQUssRUFBRUEsS0FBSyxDQUFDbUIsUUFBTixDQUFlYSxJQUFmLENBQW9CQyxPQURmO0FBRVpsQyx1QkFBUyxFQUFFO0FBRkMsYUFBZDs7QUFJQVEsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZMEIsSUFBSSxDQUFDQyxTQUFMLENBQWVuQyxLQUFmLENBQVo7QUFDRDtBQUNGLFNBakJIO0FBa0JEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUFBLHdCQUMrQixLQUFLZCxLQURwQztBQUFBLFVBQ0RDLGVBREMsZUFDREEsZUFEQztBQUFBLFVBQ2dCSSxVQURoQixlQUNnQkEsVUFEaEI7QUFFUCxVQUFNNkMsVUFBVSxHQUFHLEtBQUtsRCxLQUFMLENBQVdHLE1BQVgsQ0FBa0JnRCxHQUFsQixDQUNqQixVQUFTQyxJQUFULEVBQWVDLEtBQWYsRUFBc0I7QUFDcEIsZUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQSxLQUFLLEdBQUcsQ0FBYixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLRCxJQUFJLENBQUM3QyxVQUFMLEdBQWtCLEdBQWxCLEdBQXdCNkMsSUFBSSxDQUFDNUMsU0FBbEMsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSzRDLElBQUksQ0FBQ3pDLEtBQVYsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS3lDLElBQUksQ0FBQ1IsSUFBVixDQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQ0UsY0FBSSxFQUFDLEdBRFA7QUFFRSxpQkFBTyxFQUFFLEtBQUtVLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLEVBQTJCSCxJQUFJLENBQUNJLEdBQWhDLENBRlg7QUFHRSxhQUFHLEVBQUMsS0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBS0UsTUFBQyx1REFBRCxDQUFhLFFBQWI7QUFBc0IsZUFBSyxFQUFFO0FBQUVDLGlCQUFLLEVBQUUsU0FBVDtBQUFvQkMsZ0JBQUksRUFBRTtBQUExQixXQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FMRixDQURGLEVBVUU7QUFBSyxtQkFBUyxFQUFFekQsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUcsbUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFHLG1CQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLENBVkYsQ0FMRixDQURGO0FBdUJELE9BeEJELENBd0JFc0QsSUF4QkYsQ0F3Qk8sSUF4QlAsQ0FEaUIsQ0FBbkI7O0FBNEJBLFVBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXFDO0FBQUEsWUFBbENDLFdBQWtDLFFBQWxDQSxXQUFrQztBQUFBLFlBQXJCMUQsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsWUFBZjJELFFBQWUsUUFBZkEsUUFBZTtBQUN0RCxZQUFNQyxpQkFBaUIsR0FBRzVELElBQUksR0FDMUIscUJBRDBCLEdBRTFCLG9CQUZKO0FBSUEsZUFDRTtBQUFLLG1CQUFTLEVBQUU0RCxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQVMsbUJBQVMsRUFBQyxZQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0dELFFBREgsRUFFRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBUSxpQkFBTyxFQUFFLE1BQUksVUFBSixDQUFZTixJQUFaLENBQWlCLE1BQWpCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFDd0QsR0FEeEQsRUFFRTtBQUFRLGlCQUFPLEVBQUVLLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsQ0FGRixDQURGLENBREY7QUFXRCxPQWhCRDs7QUFpQkEsVUFBTUcsdUJBQXVCLEdBQUcxRCxVQUFVLEdBQ3RDLGVBRHNDLEdBRXRDLGNBRko7QUFJQSxhQUNFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEQSxFQUVBO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLFVBQUQ7QUFDRSxZQUFJLEVBQUUsS0FBS0wsS0FBTCxDQUFXRSxJQURuQjtBQUVFLG1CQUFXLEVBQUUsS0FBSzBELFdBQUwsQ0FBaUJMLElBQWpCLENBQXNCLElBQXRCLENBRmY7QUFHRSxrQkFBUSxlQUFZQSxJQUFaLENBQWlCLElBQWpCLENBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBTEYsQ0FERixFQVFFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsRUFTRTtBQUNFLGlCQUFTLEVBQUMsY0FEWjtBQUVFLGVBQU8sRUFBRSxLQUFLUyxnQkFBTCxDQUFzQlQsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixDQVRGLEVBZUU7QUFBSyxpQkFBUyxFQUFFUSx1QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRyxLQUFLL0QsS0FBTCxDQUFXYSxTQUFYLElBQ0M7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF3QixLQUFLYixLQUFMLENBQVdjLEtBQW5DLENBSEosRUFLRTtBQUFNLGdCQUFRLEVBQUUsS0FBS21ELFdBQUwsQ0FBaUJWLElBQWpCLENBQXNCLElBQXRCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsYUFBSyxFQUFFLEtBQUt2RCxLQUFMLENBQVdrRSxJQUZwQjtBQUdFLGdCQUFRLE1BSFY7QUFJRSxnQkFBUSxFQUFFLGtCQUFBQyxLQUFLO0FBQUEsaUJBQ2IsTUFBSSxDQUFDbkQsUUFBTCxDQUFjO0FBQUVrRCxnQkFBSSxFQUFFQyxLQUFLLENBQUNoRCxNQUFOLENBQWFDO0FBQXJCLFdBQWQsQ0FEYTtBQUFBLFNBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQVVFO0FBQUcsaUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRixFQVdFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV29FLEdBRnBCO0FBR0UsZ0JBQVEsTUFIVjtBQUlFLGdCQUFRLEVBQUUsa0JBQUFELEtBQUs7QUFBQSxpQkFDYixNQUFJLENBQUNuRCxRQUFMLENBQWM7QUFBRW9ELGVBQUcsRUFBRUQsS0FBSyxDQUFDaEQsTUFBTixDQUFhQztBQUFwQixXQUFkLENBRGE7QUFBQSxTQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWEYsQ0FERixFQXFCRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUUsS0FBS3BCLEtBQUwsQ0FDUHFFLElBSEY7QUFJRSxnQkFBUSxNQUpWO0FBS0UsZ0JBQVEsRUFBRSxrQkFBQUYsS0FBSztBQUFBLGlCQUNiLE1BQUksQ0FBQ25ELFFBQUwsQ0FBYztBQUFFTCxpQkFBSyxFQUFFd0QsS0FBSyxDQUFDaEQsTUFBTixDQUFhQztBQUF0QixXQUFkLENBRGE7QUFBQSxTQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFXRTtBQUFHLGlCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhGLEVBWUU7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGFBQUssRUFBRSxLQUFLcEIsS0FBTCxDQUFXWSxRQUZwQjtBQUdFLGlCQUFTLEVBQUUsQ0FIYjtBQUlFLGdCQUFRLEVBQUUsa0JBQUF1RCxLQUFLO0FBQUEsaUJBQ2IsTUFBSSxDQUFDbkQsUUFBTCxDQUFjO0FBQUVKLG9CQUFRLEVBQUV1RCxLQUFLLENBQUNoRCxNQUFOLENBQWFDO0FBQXpCLFdBQWQsQ0FEYTtBQUFBLFNBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFaRixDQXJCRixFQTBDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV00sTUFGcEI7QUFHRSxpQkFBUyxFQUFFLEVBSGI7QUFJRSxpQkFBUyxFQUFFLEVBSmI7QUFLRSxnQkFBUSxFQUFFLGtCQUFBNkQsS0FBSztBQUFBLGlCQUNiLE1BQUksQ0FBQ25ELFFBQUwsQ0FBYztBQUFFVixrQkFBTSxFQUFFNkQsS0FBSyxDQUFDaEQsTUFBTixDQUFhQztBQUF2QixXQUFkLENBRGE7QUFBQSxTQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFXRTtBQUFHLGlCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhGLEVBWUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGFBQUssRUFBRSxLQUFLcEIsS0FBTCxDQUFXVSxHQUZwQjtBQUdFLGlCQUFTLEVBQUUsQ0FIYjtBQUlFLGlCQUFTLEVBQUUsQ0FKYjtBQUtFLGdCQUFRLE1BTFY7QUFNRSxnQkFBUSxFQUFFLGtCQUFBeUQsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQ25ELFFBQUwsQ0FBYztBQUFFTixlQUFHLEVBQUV5RCxLQUFLLENBQUNoRCxNQUFOLENBQWFDO0FBQXBCLFdBQWQsQ0FBSjtBQUFBLFNBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFaRixDQTFDRixDQURGLEVBaUVFO0FBQUcsaUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakVGLEVBa0VFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV1MsT0FGcEI7QUFHRSxnQkFBUSxNQUhWO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQTBELEtBQUs7QUFBQSxpQkFBSSxNQUFJLENBQUNuRCxRQUFMLENBQWM7QUFBRVAsbUJBQU8sRUFBRTBELEtBQUssQ0FBQ2hELE1BQU4sQ0FBYUM7QUFBeEIsV0FBZCxDQUFKO0FBQUEsU0FKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWxFRixFQXdFRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUU7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFLLEVBQUMsUUFBM0I7QUFBb0MsaUJBQVMsRUFBQyxRQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFHRTtBQUNFLGlCQUFTLEVBQUMsUUFEWjtBQUVFLGVBQU8sRUFBRSxLQUFLa0QsaUJBQUwsQ0FBdUJmLElBQXZCLENBQTRCLElBQTVCLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixDQXhFRixDQUxGLENBZkYsRUF3R0U7QUFBTyxVQUFFLEVBQUMsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLENBREYsRUFRR0wsVUFSSCxDQURGLENBeEdGLENBRkEsQ0FERjtBQXlIRDs7OztFQWhUa0JxQiwrQzs7QUFtVE56RSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9ob3RlbHMuZjg0MjIwZmE5OGMyZGRkMWUyMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tIFwicmVhY3QtaWNvbnNcIjtcclxuaW1wb3J0IHsgTWRTZXR0aW5ncywgTWREZWxldGVGb3JldmVyIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbi8vIGltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuLy8gaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi8uLi9yb290LmpzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcbnZhciBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vc2lkZWJhclwiO1xyXG5cclxuY2xhc3MgSG90ZWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hvd0hpZGVTaWRlbmF2OiBcImhpZGRlblwiLFxyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgaG90ZWxzOiBbXSxcclxuICAgICAgdG9EZWxldGU6IFwiXCIsXHJcbiAgICAgIHNob3dDcmVhdGU6IGZhbHNlLFxyXG4gICAgICBudW1iZXI6IFwiXCIsXHJcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgemlwOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIGVycm9yX2RpdjogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBcIlwiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2lkZW5hdigpIHtcclxuICAgIHZhciBjc3MgPSB0aGlzLnN0YXRlLnNob3dIaWRlU2lkZW5hdiA9PT0gXCJoaWRkZW5cIiA/IFwic2hvd1wiIDogXCJoaWRkZW5cIjtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93SGlkZVNpZGVuYXY6IGNzcyB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNob3coaWQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlLCB0b0RlbGV0ZTogaWQgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbG9zZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNob3dDcmVhdGUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NyZWF0ZTogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsb3NlQ3JlYXRlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDcmVhdGU6IGZhbHNlIH0pO1xyXG4gIH1cclxuICBoYW5kbGVOdW1iZXIoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG51bWJlcjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudG9rZW4pO1xyXG4gICAgbGV0IHRva2VuID0gYXdhaXQgQ29va2llcy5nZXQoJ3Rva2VuJykgXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4gfSxcclxuICAgICAgdGltZW91dDogMjAwMDBcclxuICAgIH07XHJcbiAgICAvLyBheGlvc1xyXG4gICAgLy8gICAuZ2V0KEFQSV9VUkwgKyBcImhvdGVsc1wiLCBjb25maWcpXHJcbiAgICAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAvLyAgICAgaWYgKHJlc3BvbnNlLmRhdGEubWVzc2FnZSA9PSBcIlRva2VuIGlzIG5vdCB2YWxpZFwiKSB7XHJcbiAgICAvLyAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9cIik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHZhciBsZW4gPSByZXNwb25zZS5kYXRhLmxlbmd0aDtcclxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgaG90ZWxzOiBbXSB9KTtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAvLyAgICAgICBsZXQgcm93ID0gcmVzcG9uc2UuZGF0YVtpXTtcclxuICAgIC8vICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAvLyAgICAgICAgIGhvdGVsczogWy4uLnByZXZTdGF0ZS5ob3RlbHMsIHJvd11cclxuICAgIC8vICAgICAgIH0pKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIC8vICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBkZWxldGUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRvRGVsZXRlKTtcclxuICAgIGxldCB0b2tlbiA9IGF3YWl0IENvb2tpZXMuZ2V0KCd0b2tlbicpIFxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuIH0sXHJcbiAgICAgIHRpbWVvdXQ6IDIwMDAwXHJcbiAgICB9O1xyXG4gICAgYXhpb3NcclxuICAgICAgLmRlbGV0ZShBUElfVVJMICsgXCJ1c2Vycy9cIiArIHRoaXMuc3RhdGUudG9EZWxldGUsIGNvbmZpZylcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIGNyZWF0ZUhvdGVsKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc05hTih0aGlzLnN0YXRlLm51bWJlcikpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBcIkludmFsaWQgTW9iaWxlIE51bWJlclwiLCBlcnJvcl9kaXY6IHRydWUgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGlzTmFOKHRoaXMuc3RhdGUuemlwKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IFwiSW52YWxpZCBaaXAgY29kZVwiLCBlcnJvcl9kaXY6IHRydWUgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfZGl2OiBmYWxzZSB9KTtcclxuICAgICAgdmFyIGJvZHlQYXJhbWV0ZXJzID0ge1xyXG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkLFxyXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUuYWRkcmVzcyxcclxuICAgICAgICB6aXBjb2RlOiB0aGlzLnN0YXRlLnppcCxcclxuICAgICAgICBtb2JpbGVfbnVtYmVyOiB0aGlzLnN0YXRlLm51bWJlcixcclxuICAgICAgICBmaXJzdF9uYW1lOiB0aGlzLnN0YXRlLmZpcnN0X25hbWUsXHJcbiAgICAgICAgbGFzdF9uYW1lOiB0aGlzLnN0YXRlLmxhc3RfbmFtZSxcclxuICAgICAgICByb2xlOiBcImhvdGVsXCJcclxuICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2coYm9keVBhcmFtZXRlcnMpO1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KEFQSV9VUkwgKyBcInVzZXJzXCIsIGJvZHlQYXJhbWV0ZXJzLCB7XHJcbiAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgZXJyb3JfZGl2OiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgc2hvd0hpZGVTaWRlbmF2LCBzaG93Q3JlYXRlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgaG90ZWxfZGF0YSA9IHRoaXMuc3RhdGUuaG90ZWxzLm1hcChcclxuICAgICAgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+e2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e2l0ZW0uZmlyc3RfbmFtZSArIFwiIFwiICsgaXRlbS5sYXN0X25hbWV9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntpdGVtLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57aXRlbS5yb2xlfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTaG93LmJpbmQodGhpcywgaXRlbS5faWQpfVxyXG4gICAgICAgICAgICAgICAgcmVmPVwiYnRuXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29sb3I6IFwiI0IxQURBRFwiLCBzaXplOiAyMiB9fT5cclxuICAgICAgICAgICAgICAgICAgPE1kRGVsZXRlRm9yZXZlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dIaWRlU2lkZW5hdn0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9jay10ZXh0XCI+QmxvY2s8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdXNwZW5kLXRleHRcIj5TdXNwZW5kPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgICB9LmJpbmQodGhpcylcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgTW9kYWxIb3RlbCA9ICh7IGhhbmRsZUNsb3NlLCBzaG93LCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNob3dIaWRlQ2xhc3NOYW1lID0gc2hvd1xyXG4gICAgICAgID8gXCJtb2RhbCBkaXNwbGF5LWJsb2NrXCJcclxuICAgICAgICA6IFwibW9kYWwgZGlzcGxheS1ub25lXCI7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93SGlkZUNsYXNzTmFtZX0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2RhbC1tYWluXCI+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tcm93XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpfT5ZZXM8L2J1dHRvbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2hvd0hpZGVDbGFzc05hbWVDcmVhdGUgPSBzaG93Q3JlYXRlXHJcbiAgICAgID8gXCJkaXNwbGF5LWJsb2NrXCJcclxuICAgICAgOiBcImRpc3BsYXktbm9uZVwiO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWJvZHlcIj5cclxuICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJveFwiPlxyXG4gICAgICAgIDxNb2RhbEhvdGVsXHJcbiAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3d9XHJcbiAgICAgICAgICBoYW5kbGVDbG9zZT17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgZGVsZXRlPXt0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBob3RlbDwvcD5cclxuICAgICAgICA8L01vZGFsSG90ZWw+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWRtaW4taGVhZGVyXCI+SG90ZWw8L3A+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWRtaW4tYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd0NyZWF0ZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwPkFERCBIT1RFTDwvcD5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd0hpZGVDbGFzc05hbWVDcmVhdGV9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWRtaW4taGVhZGVyXCI+QWRkIEhvdGVsPC9wPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JfZGl2ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPnt0aGlzLnN0YXRlLmVycm9yfTwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmNyZWF0ZUhvdGVsLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm94XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5OYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPkJpbzwvcD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJpb31cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJpbzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5Mb2NhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLlxyXG4gICAgICAgICAgICAgICAgICBtYWlsfVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9ezh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5Nb2JpbGUgTnVtYmVyKCsxKTwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXsxMH1cclxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG51bWJlcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbC10ZXh0XCI+WmlwIGNvZGU8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS56aXB9XHJcbiAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17NX1cclxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs1fVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHppcDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5BZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgYWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJvd1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY3JlYXRlSG90ZWwuYmluZCh0aGlzKX0+Q3JlYXRlPC9idXR0b24+e1wiIFwifSAqL31cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUNyZWF0ZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0YWJsZSBpZD1cImN1c3RvbWVyc1wiPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlMvTjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkhvdGVsIG5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICB7aG90ZWxfZGF0YX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG90ZWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9