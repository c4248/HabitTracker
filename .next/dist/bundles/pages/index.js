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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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
/* 5 */
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

/***/ }),
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
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
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_agendaA__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TaskRow = function (_React$Component) {
    _inherits(TaskRow, _React$Component);

    function TaskRow(props) {
        _classCallCheck(this, TaskRow);

        var _this = _possibleConstructorReturn(this, (TaskRow.__proto__ || Object.getPrototypeOf(TaskRow)).call(this, props));

        _this.onClick = function () {
            _this.setState(function (prevState) {
                return {
                    isForm: !prevState.isForm
                };
            });
        };

        _this.dispatchAddTask = function () {
            if (_this.state.keyValue) {
                console.log('key has been found in row');
                var task = {
                    task: _this.state.task,
                    key: _this.state.keyValue
                };
                _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_agendaA__["updateTask"])(task));
            } else {
                var _task = {
                    task: _this.state.task,
                    hour: _this.state.hour,
                    day: _this.state.day
                };
                _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_agendaA__["addTask"])(_task));
            }
        };

        _this.onChange = function (e) {
            _this.setState({ changed: true, task: e.target.value });
        };

        _this.onBlur = function () {
            if (_this.state.changed) {
                _this.dispatchAddTask();
            }
            _this.setState(function (prevState) {
                return {
                    isForm: !prevState.isForm,
                    changed: false
                };
            });
        };

        _this.state = {
            keyValue: props.keyValue,
            isForm: false,
            task: props.task,
            hour: props.hour,
            day: props.day.format('MMMM Do YYYY'),
            changed: false
        };
        return _this;
    }
    //UNABLE TO USE DUE TO THIRD PARTY LIBRARIES USING LEGACY LIFECYCLE METHODS
    // static getDerivedStateFromProps(nextProps, prevState){
    //     if(nextProps.task !== prevState.task){
    //         return {task: nextProps.task}
    //     }
    //     return prevState
    // }

    _createClass(TaskRow, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.task !== this.props.task) {
                this.setState({ task: this.props.task, keyValue: this.props.keyValue });
            }
        }
    }, {
        key: 'moveCaret',
        value: function moveCaret(e) {
            var tempValue = e.target.value;
            e.target.value = '';
            e.target.value = tempValue;
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'tr',
                {
                    className: 'jsx-848409320'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'td',
                    {
                        className: 'jsx-848409320'
                    },
                    this.props.hour
                ),
                this.state.isForm ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'td',
                    {
                        className: 'jsx-848409320'
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('textarea', { autoFocus: true, onFocus: this.moveCaret, onBlur: this.onBlur, value: this.state.task, onChange: this.onChange, className: 'jsx-848409320'
                    })
                ) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'td',
                    { onClick: this.onClick, className: 'jsx-848409320'
                    },
                    this.state.task
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '848409320',
                    css: ['textarea.jsx-848409320{width:100%;resize:none;}', 'tr.jsx-848409320{border:1 px solid;}', 'td.jsx-848409320{border:1px solid;min-width:300px;height:1.9rem;white-space:pre-line;}', 'table.jsx-848409320{border:1px solid black;}']
                })
            );
        }
    }]);

    return TaskRow;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])()(TaskRow));

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_agendaA__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__axios_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TaskRow__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var AgendaTable = function (_React$Component) {
    _inherits(AgendaTable, _React$Component);

    function AgendaTable() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AgendaTable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AgendaTable.__proto__ || Object.getPrototypeOf(AgendaTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            days: [__WEBPACK_IMPORTED_MODULE_3_moment___default()(), __WEBPACK_IMPORTED_MODULE_3_moment___default()().add(1, 'days'), __WEBPACK_IMPORTED_MODULE_3_moment___default()().add(2, 'days')],
            hours: ['8 AM', '12 AM', '3 PM', '7 PM']
        }, _this.getTask = function (day, hour) {
            if (_this.props.agenda) {
                for (var key in _this.props.agenda) {
                    if (_this.props.agenda[key].day == day.format('MMMM Do YYYY') && _this.props.agenda[key].hour == hour) {
                        return _this.props.agenda[key].task;
                    }
                }
            }
        }, _this.getKey = function (day, hour) {
            if (_this.props.agenda) {
                for (var key in _this.props.agenda) {
                    if (_this.props.agenda[key].day == day.format('MMMM Do YYYY') && _this.props.agenda[key].hour == hour) {
                        return _this.props.agenda[key].key;
                    }
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AgendaTable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_5__axios_axios__["default"].get('/tasks.json').then(function (response) {
                //this.setState({tasks: response.data})
                _this2.props.setReducerState(response.data);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'table',
                {
                    className: 'jsx-2614392368'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'tbody',
                    {
                        className: 'jsx-2614392368'
                    },
                    this.state.days.map(function (day) {
                        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,
                            { key: day },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'tr',
                                {
                                    className: 'jsx-2614392368'
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'th',
                                    { colSpan: '2', className: 'jsx-2614392368'
                                    },
                                    day.format('dddd, MMMM Do YYYY')
                                )
                            ),
                            _this3.state.hours.map(function (hour) {
                                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,
                                    { key: hour },
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TaskRow__["default"], { keyValue: _this3.getKey(day, hour), task: _this3.getTask(day, hour), hour: hour, day: day })
                                );
                            })
                        );
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '2614392368',
                    css: ['table.jsx-2614392368,th.jsx-2614392368,td.jsx-2614392368{border:1px solid black;}']
                })
            );
        }
    }]);

    return AgendaTable;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        agenda: state.agenda
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        setReducerState: function setReducerState(tasks) {
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions_agendaA__["setReducerState"])(tasks));
        }
    };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(AgendaTable));

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HabitTracker_HabitList__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_Layout__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Agenda_AgendaTable__ = __webpack_require__(18);





var Index = function Index() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__layout_Layout__["default"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_HabitTracker_HabitList__["default"], { remove: true }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Agenda_AgendaTable__["default"], null)
        )
    );
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })
/******/ ]);