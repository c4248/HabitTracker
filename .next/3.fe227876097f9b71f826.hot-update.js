webpackHotUpdate(3,{

/***/ "./pages/actions/habitA.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createHabit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeHabit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return resetHabit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setReducerState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios_axios__ = __webpack_require__("./pages/axios/axios.js");
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
        __WEBPACK_IMPORTED_MODULE_0__axios_axios__["a" /* default */].post('/habits.json', habit).then(function (_ref) {
            var data = _ref.data;
            return console.log(data);
        });
    };
};

var removeHabit = function removeHabit(title) {
    return {
        type: 'REMOVE_HABIT',
        title: title
    };
};

var resetHabit = function resetHabit(title) {
    return {
        type: 'RESET_HABIT',
        title: title
    };
};

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
    reactHotLoader.register(removeHabit, 'removeHabit', '/home/c/projects/log/pages/actions/habitA.js');
    reactHotLoader.register(resetHabit, 'resetHabit', '/home/c/projects/log/pages/actions/habitA.js');
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

/***/ })

})
//# sourceMappingURL=3.fe227876097f9b71f826.hot-update.js.map