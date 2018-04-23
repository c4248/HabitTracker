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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/actions/agendaA.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addTaskSuccess */
/* unused harmony export removeTask */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setReducerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateTask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios_axios__ = __webpack_require__("./pages/axios/axios.js");


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
        __WEBPACK_IMPORTED_MODULE_0__axios_axios__["a" /* default */].post('/tasks.json', task).then(function (response) {
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
        __WEBPACK_IMPORTED_MODULE_0__axios_axios__["a" /* default */].patch('/tasks/' + task.key + '.json', { task: task.task }).then(function (response) {
            console.log(response.data);
        });
    };
};

/***/ }),

/***/ "./pages/actions/habitA.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createHabit; });
/* unused harmony export addHabit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return delHabit; });
/* unused harmony export removeHabit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return resetHabit; });
/* unused harmony export resetReducerHabit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setReducerState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__axios_axios__ = __webpack_require__("./pages/axios/axios.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



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

/***/ }),

/***/ "./pages/axios/axios.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


var instance = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: 'https://planner-7d357.firebaseio.com/'
});

/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ "./pages/components/Agenda/AgendaTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_agendaA__ = __webpack_require__("./pages/actions/agendaA.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__axios_axios__ = __webpack_require__("./pages/axios/axios.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TaskRow__ = __webpack_require__("./pages/components/Agenda/TaskRow.js");
var _jsxFileName = '/home/c/projects/log/pages/components/Agenda/AgendaTable.js';

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

            __WEBPACK_IMPORTED_MODULE_5__axios_axios__["a" /* default */].get('/tasks.json').then(function (response) {
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
                    className: 'jsx-2614392368',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'tbody',
                    {
                        className: 'jsx-2614392368',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    },
                    this.state.days.map(function (day) {
                        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,
                            { key: day, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 55
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'tr',
                                {
                                    className: 'jsx-2614392368',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 56
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'th',
                                    { colSpan: '2', className: 'jsx-2614392368',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 57
                                        }
                                    },
                                    day.format('dddd, MMMM Do YYYY')
                                )
                            ),
                            _this3.state.hours.map(function (hour) {
                                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,
                                    { key: hour, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 61
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TaskRow__["a" /* default */], { keyValue: _this3.getKey(day, hour), task: _this3.getTask(day, hour), hour: hour, day: day, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 62
                                        }
                                    })
                                );
                            })
                        );
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '2614392368',
                    css: 'table.jsx-2614392368,th.jsx-2614392368,td.jsx-2614392368{border:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBvbmVudHMvQWdlbmRhL0FnZW5kYVRhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFNEIsQUFHZ0QsdUJBQzNCIiwiZmlsZSI6InBhZ2VzL2NvbXBvbmVudHMvQWdlbmRhL0FnZW5kYVRhYmxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2MvcHJvamVjdHMvbG9nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IGdldFRhc2tzLCBzZXRSZWR1Y2VyU3RhdGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FnZW5kYUEnXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vYXhpb3MvYXhpb3MnXG5cbmltcG9ydCBUYXNrUm93IGZyb20gJy4vVGFza1JvdydcblxuY2xhc3MgQWdlbmRhVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgYXhpb3MuZ2V0KCcvdGFza3MuanNvbicpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7dGFza3M6IHJlc3BvbnNlLmRhdGF9KVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0UmVkdWNlclN0YXRlKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBkYXlzOiBbXG4gICAgICAgICAgICBtb21lbnQoKSxcbiAgICAgICAgICAgIG1vbWVudCgpLmFkZCgxLCAnZGF5cycpLFxuICAgICAgICAgICAgbW9tZW50KCkuYWRkKDIsICdkYXlzJyksXG4gICAgICAgIF0sXG4gICAgICAgIGhvdXJzOiBbJzggQU0nLCAnMTIgQU0nLCAnMyBQTScsICc3IFBNJ10sXG4gICAgfVxuXG4gICAgZ2V0VGFzayA9IChkYXksIGhvdXIpID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hZ2VuZGEpe1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5wcm9wcy5hZ2VuZGEpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuYWdlbmRhW2tleV0uZGF5ID09IGRheS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMucHJvcHMuYWdlbmRhW2tleV0uaG91ciA9PSBob3VyKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWdlbmRhW2tleV0udGFza1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEtleSA9IChkYXksIGhvdXIpID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hZ2VuZGEpe1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5wcm9wcy5hZ2VuZGEpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuYWdlbmRhW2tleV0uZGF5ID09IGRheS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMucHJvcHMuYWdlbmRhW2tleV0uaG91ciA9PSBob3VyKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWdlbmRhW2tleV0ua2V5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF5cy5tYXAoZGF5PT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17ZGF5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPntkYXkuZm9ybWF0KCdkZGRkLCBNTU1NIERvIFlZWVknKX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaG91cnMubWFwKGhvdXI9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2hvdXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXNrUm93IGtleVZhbHVlPXt0aGlzLmdldEtleShkYXksIGhvdXIpfSB0YXNrPXt0aGlzLmdldFRhc2soZGF5LCBob3VyKX0gaG91cj17aG91cn0gZGF5PXtkYXl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgdGFibGUsIHRoLCB0ZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFnZW5kYTogc3RhdGUuYWdlbmRhXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4oe1xuICAgICAgICBzZXRSZWR1Y2VyU3RhdGU6ICh0YXNrcykgPT4ge2Rpc3BhdGNoKHNldFJlZHVjZXJTdGF0ZSh0YXNrcykpfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFnZW5kYVRhYmxlKSJdfQ== */\n/*@ sourceURL=pages/components/Agenda/AgendaTable.js */'
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
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions_agendaA__["b" /* setReducerState */])(tasks));
        }
    };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(AgendaTable));

/***/ }),

/***/ "./pages/components/Agenda/TaskRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_agendaA__ = __webpack_require__("./pages/actions/agendaA.js");
var _jsxFileName = '/home/c/projects/log/pages/components/Agenda/TaskRow.js';

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
                _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_agendaA__["c" /* updateTask */])(task));
            } else {
                var _task = {
                    task: _this.state.task,
                    hour: _this.state.hour,
                    day: _this.state.day
                };
                _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_agendaA__["a" /* addTask */])(_task));
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
                    className: 'jsx-848409320',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'td',
                    {
                        className: 'jsx-848409320',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        }
                    },
                    this.props.hour
                ),
                this.state.isForm ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'td',
                    {
                        className: 'jsx-848409320',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('textarea', { autoFocus: true, onFocus: this.moveCaret, onBlur: this.onBlur, value: this.state.task, onChange: this.onChange, className: 'jsx-848409320',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        }
                    })
                ) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'td',
                    { onClick: this.onClick, className: 'jsx-848409320',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87
                        }
                    },
                    this.state.task
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '848409320',
                    css: 'textarea.jsx-848409320{width:100%;resize:none;}tr.jsx-848409320{border:1 px solid;}td.jsx-848409320{border:1px solid;min-width:300px;height:1.9rem;white-space:pre-line;}table.jsx-848409320{border:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBvbmVudHMvQWdlbmRhL1Rhc2tSb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUY0QixBQUdvQyxBQUlPLEFBR0QsQUFNTSxXQVpYLE1BT0ksQ0FIcEIsS0FIQSxBQVlBLFVBTGtCLGNBQ08scUJBQ3pCIiwiZmlsZSI6InBhZ2VzL2NvbXBvbmVudHMvQWdlbmRhL1Rhc2tSb3cuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYy9wcm9qZWN0cy9sb2ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBhZGRUYXNrLCB1cGRhdGVUYXNrIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hZ2VuZGFBJ1xuXG5jbGFzcyBUYXNrUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAga2V5VmFsdWU6IHByb3BzLmtleVZhbHVlLFxuICAgICAgICAgICAgaXNGb3JtOiBmYWxzZSxcbiAgICAgICAgICAgIHRhc2s6IHByb3BzLnRhc2ssXG4gICAgICAgICAgICBob3VyOiBwcm9wcy5ob3VyLFxuICAgICAgICAgICAgZGF5OiBwcm9wcy5kYXkuZm9ybWF0KCdNTU1NIERvIFlZWVknKSxcbiAgICAgICAgICAgIGNoYW5nZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4vL1VOQUJMRSBUTyBVU0UgRFVFIFRPIFRISVJEIFBBUlRZIExJQlJBUklFUyBVU0lORyBMRUdBQ1kgTElGRUNZQ0xFIE1FVEhPRFNcbiAgICAvLyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKXtcbiAgICAvLyAgICAgaWYobmV4dFByb3BzLnRhc2sgIT09IHByZXZTdGF0ZS50YXNrKXtcbiAgICAvLyAgICAgICAgIHJldHVybiB7dGFzazogbmV4dFByb3BzLnRhc2t9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHByZXZTdGF0ZVxuICAgIC8vIH1cbiAgICBcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpe1xuICAgICAgICBpZihwcmV2UHJvcHMudGFzayAhPT0gdGhpcy5wcm9wcy50YXNrKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Rhc2s6IHRoaXMucHJvcHMudGFzaywga2V5VmFsdWU6IHRoaXMucHJvcHMua2V5VmFsdWV9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9PihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc0Zvcm06ICFwcmV2U3RhdGUuaXNGb3JtLFxuICAgICAgICAgICAgfVxuICAgICAgICApKVxuICAgIH1cblxuICAgIGRpc3BhdGNoQWRkVGFzayA9ICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5rZXlWYWx1ZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygna2V5IGhhcyBiZWVuIGZvdW5kIGluIHJvdycpXG4gICAgICAgICAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICAgICAgICAgIHRhc2s6IHRoaXMuc3RhdGUudGFzayxcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuc3RhdGUua2V5VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlVGFzayh0YXNrKSlcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgICAgICAgICB0YXNrOiB0aGlzLnN0YXRlLnRhc2ssXG4gICAgICAgICAgICAgICAgaG91cjogdGhpcy5zdGF0ZS5ob3VyLFxuICAgICAgICAgICAgICAgIGRheTogdGhpcy5zdGF0ZS5kYXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkVGFzayh0YXNrKSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NoYW5nZWQ6dHJ1ZSwgdGFzazogZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIG9uQmx1ciA9ICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jaGFuZ2VkKXtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hBZGRUYXNrKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpPT4oe1xuICAgICAgICAgICAgaXNGb3JtOiAhcHJldlN0YXRlLmlzRm9ybSxcbiAgICAgICAgICAgIGNoYW5nZWQ6IGZhbHNlXG4gICAgICAgIH0pKSAgXG4gICAgfVxuXG4gICAgbW92ZUNhcmV0KGUpIHtcbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJydcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSB0ZW1wVmFsdWVcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLmhvdXJ9PC90ZD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0Zvcm0gPyBcbiAgICAgICAgICAgICAgICAgICAgPHRkPiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBhdXRvRm9jdXMgb25Gb2N1cz17dGhpcy5tb3ZlQ2FyZXR9IG9uQmx1cj17dGhpcy5vbkJsdXJ9IHZhbHVlPXt0aGlzLnN0YXRlLnRhc2t9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+IDogICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9e3RoaXMub25DbGlja30+e3RoaXMuc3RhdGUudGFza308L3RkPiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWF7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMSBweCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS45cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxle1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoVGFza1JvdykiXX0= */\n/*@ sourceURL=pages/components/Agenda/TaskRow.js */'
                })
            );
        }
    }]);

    return TaskRow;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])()(TaskRow));

/***/ }),

/***/ "./pages/components/HabitTracker/Habit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_habitA__ = __webpack_require__("./pages/actions/habitA.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var _jsxFileName = '/home/c/projects/log/pages/components/HabitTracker/Habit.js';





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
                    return props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["b" /* delHabit */])(props.keyValue));
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
                    return props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["c" /* resetHabit */])(props.keyValue));
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            },
            'Reset'
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(Habit));

/***/ }),

/***/ "./pages/components/HabitTracker/HabitList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__axios_axios__ = __webpack_require__("./pages/axios/axios.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_habitA__ = __webpack_require__("./pages/actions/habitA.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Habit__ = __webpack_require__("./pages/components/HabitTracker/Habit.js");
var _jsxFileName = '/home/c/projects/log/pages/components/HabitTracker/HabitList.js';

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

            __WEBPACK_IMPORTED_MODULE_1__axios_axios__["a" /* default */].get('/habits.json').then(function (_ref) {
                var data = _ref.data;

                for (var habit in data) {
                    _this2.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["d" /* setReducerState */])(data));
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
    }]);

    return HabitList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        habits: state.habit
    };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps)(HabitList));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HabitTracker_HabitList__ = __webpack_require__("./pages/components/HabitTracker/HabitList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_Layout__ = __webpack_require__("./pages/layout/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Agenda_AgendaTable__ = __webpack_require__("./pages/components/Agenda/AgendaTable.js");
var _jsxFileName = '/home/c/projects/log/pages/index.js';





var Index = function Index() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__layout_Layout__["a" /* default */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_HabitTracker_HabitList__["a" /* default */], { remove: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Agenda_AgendaTable__["a" /* default */], {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            })
        )
    );
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_configureStore__ = __webpack_require__("./pages/store/configureStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = '/home/c/projects/log/pages/layout/Layout.js';





var store = Object(__WEBPACK_IMPORTED_MODULE_2__store_configureStore__["a" /* default */])();

var Layout = function Layout(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
        { store: store, __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { href: '/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        }
                    },
                    'Home'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { href: '/configure', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    },
                    'Settings'
                )
            ),
            props.children
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/reducers/agendaR.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var taskList = [];

/* harmony default export */ __webpack_exports__["a"] = (function () {
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

/***/ "./pages/reducers/habitR.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var habitList = [];

/* harmony default export */ __webpack_exports__["a"] = (function () {
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

/***/ "./pages/store/configureStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_agendaR__ = __webpack_require__("./pages/reducers/agendaR.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_habitR__ = __webpack_require__("./pages/reducers/habitR.js");





/* harmony default export */ __webpack_exports__["a"] = (function () {

    var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
        habit: __WEBPACK_IMPORTED_MODULE_3__reducers_habitR__["a" /* default */],
        agenda: __WEBPACK_IMPORTED_MODULE_2__reducers_agendaR__["a" /* default */]
    });
    var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(rootReducer, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a));
    return store;
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map