webpackHotUpdate(4,{

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
                    return props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["b" /* removeHabit */])(props.title));
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
                    return props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["c" /* resetHabit */])(props.key));
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

/***/ })

})
//# sourceMappingURL=4.9ef942fc9d407f3b9cdb.hot-update.js.map