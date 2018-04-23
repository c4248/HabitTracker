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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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

/***/ 19:
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



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
                _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_habitA__["createHabit"])(_this.state));
                _this.setState({ title: '' });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AddTracker, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'form',
                { onSubmit: this.onSubmit },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: this.state.title, onChange: this.onChange }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                )
            );
        }
    }]);

    return AddTracker;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(AddTracker));

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


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