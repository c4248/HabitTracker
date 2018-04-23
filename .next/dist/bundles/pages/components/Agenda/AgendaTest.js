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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTaskSuccess", function() { return addTaskSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTask", function() { return removeTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReducerState", function() { return setReducerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTask", function() { return addTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTask", function() { return updateTask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios_axios__ = __webpack_require__(3);


var addTaskSuccess = function addTaskSuccess(task) {
    return {
        type: 'ADD_TASK',
        task: task
    };
};

var removeTask = function removeTask(taskName) {
    return {
        type: 'REMOVE_TASK',
        taskName: taskName
    };
};

var setReducerState = function setReducerState(tasks) {
    return {
        type: 'SET_REDUCER_STATE',
        tasks: tasks
    };
};

var addTask = function addTask(task) {
    return function (dispatch) {
        __WEBPACK_IMPORTED_MODULE_0__axios_axios__["default"].post('/tasks.json', task).then(function (response) {
            var taskToDispatch = {
                task: task.task,
                day: task.day,
                key: response.data.name,
                hour: task.hour
            };
            dispatch(addTaskSuccess(taskToDispatch));
        });
    };
};

var updateTask = function updateTask(task) {
    return function (dispatch) {
        __WEBPACK_IMPORTED_MODULE_0__axios_axios__["default"].patch('/tasks/' + task.key + '.json', { task: task.task }).then(function (response) {
            console.log(response.data);
        });
    };
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var taskList = [];

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : taskList;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_TASK':
            return [].concat(_toConsumableArray(state), [action.task]);
        case 'REMOVE_TASK':
            return state.filter(function (task) {
                return action.taskName !== task.task;
            });
        case 'SET_REDUCER_STATE':
            var initialList = [];
            for (var task in action.tasks) {
                var taskWithKey = _extends({}, action.tasks[task], { key: task });
                initialList.push(taskWithKey);
            }
            return initialList;
        default:
            return state;
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var habitList = [];

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : habitList;
    var action = arguments[1];

    switch (action.type) {
        case 'CREATE_HABIT':
            return [].concat(_toConsumableArray(state), [_extends({}, action.habit)]);

        case 'REMOVE_HABIT':
            return state.filter(function (habit) {
                return action.key !== habit.key;
            });

        case 'SET_REDUCER_HABIT':
            return state.map(function (habit) {
                if (habit.key == action.key) {
                    return _extends({}, habit, { date: __WEBPACK_IMPORTED_MODULE_0_moment___default()().valueOf() });
                } else {
                    return habit;
                }
            });

        case 'SET_STATE':
            var initialHabitList = [];
            for (var habit in action.payload) {
                initialHabitList.push(_extends({}, action.payload[habit], { key: habit }));
            }
            return initialHabitList;

        default:
            return state;
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_agendaR__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_habitR__ = __webpack_require__(8);





/* harmony default export */ __webpack_exports__["default"] = (function () {

    var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
        habit: __WEBPACK_IMPORTED_MODULE_3__reducers_habitR__["default"],
        agenda: __WEBPACK_IMPORTED_MODULE_2__reducers_agendaR__["default"]
    });
    var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(rootReducer, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a));
    return store;
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_configureStore__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);





var store = Object(__WEBPACK_IMPORTED_MODULE_2__store_configureStore__["default"])();

var Layout = function Layout(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
        { store: store },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { href: '/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    null,
                    'Home'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { href: '/configure' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    null,
                    'Settings'
                )
            ),
            props.children
        )
    );
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_Layout__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_agendaA__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AgendaTest = function (_React$Component) {
    _inherits(AgendaTest, _React$Component);

    function AgendaTest() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AgendaTest);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AgendaTest.__proto__ || Object.getPrototypeOf(AgendaTest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            task: ''
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AgendaTest, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: this.state.task, onChange: function onChange(e) {
                        return _this2.setState({ task: e.target.value });
                    } }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_agendaA__["addTask"])({ momentStart: 20, momentEnd: 2000, task: _this2.state.task }));
                        } },
                    'Add Task'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: function onClick() {
                            return console.log(_this2.props.agenda);
                        } },
                    'Console Log'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_agendaA__["removeTask"])(_this2.state.task));
                        } },
                    'Remove'
                )
            );
        }
    }]);

    return AgendaTest;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        agenda: state.agenda
    };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(AgendaTest));

/***/ })
/******/ ]);