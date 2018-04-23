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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 16:
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


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

/***/ 6:
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

/***/ })

/******/ });