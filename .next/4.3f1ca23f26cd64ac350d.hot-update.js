webpackHotUpdate(4,{

/***/ "./pages/actions/habitA.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export createHabit */
/* unused harmony export addHabit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delHabit; });
/* unused harmony export removeHabit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetHabit; });
/* unused harmony export resetReducerHabit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setReducerState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__axios_axios__ = __webpack_require__("./pages/axios/axios.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



// export const createHabit = ({title, date}) => ({
//     type: 'CREATE_HABIT',
//     title,
//     date
// })

var createHabit = function createHabit(habit) {
    return function (dispatch) {
        __WEBPACK_IMPORTED_MODULE_1__axios_axios__["a" /* default */].post('/habits.json', habit).then(function (_ref) {
            var data = _ref.data;

            dispatch(addHabit(_extends({}, habit, { key: data.name })));
        });
    };
};

var addHabit = function addHabit(habit) {
    return {
        type: 'CREATE_HABIT',
        habit: habit
    };
};

var delHabit = function delHabit(key) {
    return function (dispatch) {
        __WEBPACK_IMPORTED_MODULE_1__axios_axios__["a" /* default */].delete('/habits/' + key + '.json').then(function () {
            console.log(key);
            dispatch(removeHabit(key));
        });
    };
};

var removeHabit = function removeHabit(key) {
    return {
        type: 'REMOVE_HABIT',
        key: key
    };
};

var resetHabit = function resetHabit(key) {
    return function (dispatch) {
        __WEBPACK_IMPORTED_MODULE_1__axios_axios__["a" /* default */].patch('/habits/' + key + '.json', { date: __WEBPACK_IMPORTED_MODULE_0_moment___default()().valueOf() }).then(dispatch(resetReducerHabit(key)));
    };
};

var resetReducerHabit = function resetReducerHabit(key) {
    return {
        type: 'SET_REDUCER_HABIT',
        key: key
    };
};

// export const resetHabit = (title) => ({
//     type: 'RESET_HABIT',
//     title
// })

var setReducerState = function setReducerState(payload) {
    return {
        type: 'SET_STATE',
        payload: payload
    };
};
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(createHabit, 'createHabit', '/home/c/projects/log/pages/actions/habitA.js');
    reactHotLoader.register(addHabit, 'addHabit', '/home/c/projects/log/pages/actions/habitA.js');
    reactHotLoader.register(delHabit, 'delHabit', '/home/c/projects/log/pages/actions/habitA.js');
    reactHotLoader.register(removeHabit, 'removeHabit', '/home/c/projects/log/pages/actions/habitA.js');
    reactHotLoader.register(resetHabit, 'resetHabit', '/home/c/projects/log/pages/actions/habitA.js');
    reactHotLoader.register(resetReducerHabit, 'resetReducerHabit', '/home/c/projects/log/pages/actions/habitA.js');
    reactHotLoader.register(setReducerState, 'setReducerState', '/home/c/projects/log/pages/actions/habitA.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/actions/habitA")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/components/HabitTracker/AddTracker.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token, expected ; (21:42)\n\n\u001b[0m \u001b[90m 19 | \u001b[39m            ()\u001b[33m=>\u001b[39m{\n \u001b[90m 20 | \u001b[39m                \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mdispatch(createHabit(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate))\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 | \u001b[39m                \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msetState({title\u001b[33m:\u001b[39m \u001b[32m''\u001b[39m}))\n \u001b[90m    | \u001b[39m                                          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 22 | \u001b[39m            }\n \u001b[90m 23 | \u001b[39m        )\n \u001b[90m 24 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msetState({title\u001b[33m:\u001b[39m\u001b[32m''\u001b[39m})   \u001b[0m\n");

/***/ }),

/***/ "./pages/components/HabitTracker/Habit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_habitA__ = __webpack_require__("./pages/actions/habitA.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var _jsxFileName = '/home/c/projects/log/pages/components/HabitTracker/Habit.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();





var Habit = function Habit(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            'Days since ' + props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            Math.floor(__WEBPACK_IMPORTED_MODULE_3_moment___default.a.duration(__WEBPACK_IMPORTED_MODULE_3_moment___default()().diff(__WEBPACK_IMPORTED_MODULE_3_moment___default()(props.date))).asDays())
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            'Started on ',
            __WEBPACK_IMPORTED_MODULE_3_moment___default()(props.date).format('MMMM Do YYYY')
        ),
        props.configure && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                    return props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["a" /* delHabit */])(props.keyValue));
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            },
            'Remove'
        ),
        props.remove && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                    return props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["b" /* resetHabit */])(props.keyValue));
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            },
            'Reset'
        )
    );
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])()(Habit);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Habit, 'Habit', '/home/c/projects/log/pages/components/HabitTracker/Habit.js');
    reactHotLoader.register(_default, 'default', '/home/c/projects/log/pages/components/HabitTracker/Habit.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/HabitTracker/Habit")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/components/HabitTracker/HabitList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__axios_axios__ = __webpack_require__("./pages/axios/axios.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_habitA__ = __webpack_require__("./pages/actions/habitA.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Habit__ = __webpack_require__("./pages/components/HabitTracker/Habit.js");
var _jsxFileName = '/home/c/projects/log/pages/components/HabitTracker/HabitList.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var HabitList = function (_React$Component) {
    _inherits(HabitList, _React$Component);

    function HabitList() {
        _classCallCheck(this, HabitList);

        return _possibleConstructorReturn(this, (HabitList.__proto__ || Object.getPrototypeOf(HabitList)).apply(this, arguments));
    }

    _createClass(HabitList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__axios_axios__["a" /* default */].get('/habits.json').then(function (_ref) {
                var data = _ref.data;

                for (var habit in data) {
                    _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["c" /* setReducerState */])(data));
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                },
                this.props.habits.map(function (habit, i) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Habit__["a" /* default */], {
                        configure: _this3.props.configure,
                        remove: _this3.props.remove,
                        title: habit.title,
                        date: habit.date,
                        keyValue: habit.key,
                        key: i,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    });
                })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return HabitList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        habits: state.habit
    };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps)(HabitList);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(HabitList, 'HabitList', '/home/c/projects/log/pages/components/HabitTracker/HabitList.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/home/c/projects/log/pages/components/HabitTracker/HabitList.js');
    reactHotLoader.register(_default, 'default', '/home/c/projects/log/pages/components/HabitTracker/HabitList.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/HabitTracker/HabitList")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/configure.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HabitTracker_AddTracker__ = __webpack_require__("./pages/components/HabitTracker/AddTracker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HabitTracker_AddTracker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_HabitTracker_AddTracker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_HabitTracker_HabitList__ = __webpack_require__("./pages/components/HabitTracker/HabitList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_Layout__ = __webpack_require__("./pages/layout/Layout.js");
var _jsxFileName = '/home/c/projects/log/pages/configure.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();






var Configure = function Configure() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__layout_Layout__["a" /* default */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_HabitTracker_HabitList__["a" /* default */], { configure: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_HabitTracker_AddTracker__["default"], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        })
    );
};

var _default = Configure;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Configure, 'Configure', '/home/c/projects/log/pages/configure.js');
    reactHotLoader.register(_default, 'default', '/home/c/projects/log/pages/configure.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/configure")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.3f1ca23f26cd64ac350d.hot-update.js.map