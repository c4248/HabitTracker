webpackHotUpdate(4,{

/***/ "./pages/components/HabitTracker/AddTracker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_habitA__ = __webpack_require__("./pages/actions/habitA.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var _jsxFileName = '/home/c/projects/log/pages/components/HabitTracker/AddTracker.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AddTracker = function (_React$Component) {
    _inherits(AddTracker, _React$Component);

    function AddTracker() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AddTracker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddTracker.__proto__ || Object.getPrototypeOf(AddTracker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            title: '',
            date: null
        }, _this.onChange = function (e) {
            _this.setState({ title: e.target.value });
        }, _this.onSubmit = function (e) {
            e.preventDefault();
            _this.setState({ date: __WEBPACK_IMPORTED_MODULE_3_moment___default()().valueOf() }, function () {
                _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["a" /* createHabit */])(_this.state));
                _this.setState({ title: '' });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AddTracker, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'form',
                { onSubmit: this.onSubmit, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: this.state.title, onChange: this.onChange, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { type: 'submit', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    },
                    'Submit'
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return AddTracker;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])()(AddTracker);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(AddTracker, 'AddTracker', '/home/c/projects/log/pages/components/HabitTracker/AddTracker.js');
    reactHotLoader.register(_default, 'default', '/home/c/projects/log/pages/components/HabitTracker/AddTracker.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/HabitTracker/AddTracker")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.efe8a58c2c7a90e49979.hot-update.js.map