module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_habitA__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);





var Habit = function Habit(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Days since ' + props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            Math.floor(__WEBPACK_IMPORTED_MODULE_3_moment___default.a.duration(__WEBPACK_IMPORTED_MODULE_3_moment___default()().diff(__WEBPACK_IMPORTED_MODULE_3_moment___default()(props.date))).asDays())
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Started on ',
            __WEBPACK_IMPORTED_MODULE_3_moment___default()(props.date).format('MMMM Do YYYY')
        ),
        props.configure && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                    return props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["delHabit"])(props.keyValue));
                } },
            'Remove'
        ),
        props.remove && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                    return props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["resetHabit"])(props.keyValue));
                } },
            'Reset'
        )
    );
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(Habit));

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__axios_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_habitA__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Habit__ = __webpack_require__(15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



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

            __WEBPACK_IMPORTED_MODULE_1__axios_axios__["default"].get('/habits.json').then(function (_ref) {
                var data = _ref.data;

                for (var habit in data) {
                    _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["setReducerState"])(data));
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                this.props.habits.map(function (habit, i) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Habit__["default"], {
                        configure: _this3.props.configure,
                        remove: _this3.props.remove,
                        title: habit.title,
                        date: habit.date,
                        keyValue: habit.key,
                        key: i
                    });
                })
            );
        }
    }]);

    return HabitList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        habits: state.habit
    };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps)(HabitList));

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


var instance = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: 'https://planner-7d357.firebaseio.com/'
});

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHabit", function() { return createHabit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHabit", function() { return addHabit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delHabit", function() { return delHabit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeHabit", function() { return removeHabit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetHabit", function() { return resetHabit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetReducerHabit", function() { return resetReducerHabit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReducerState", function() { return setReducerState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__axios_axios__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



// export const createHabit = ({title, date}) => ({
//     type: 'CREATE_HABIT',
//     title,
//     date
// })

var createHabit = function createHabit(habit) {
    return function (dispatch) {
        __WEBPACK_IMPORTED_MODULE_1__axios_axios__["default"].post('/habits.json', habit).then(function (_ref) {
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
        __WEBPACK_IMPORTED_MODULE_1__axios_axios__["default"].delete('/habits/' + key + '.json').then(function () {
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
        __WEBPACK_IMPORTED_MODULE_1__axios_axios__["default"].patch('/habits/' + key + '.json', { date: __WEBPACK_IMPORTED_MODULE_0_moment___default()().valueOf() }).then(dispatch(resetReducerHabit(key)));
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

/***/ })

/******/ });