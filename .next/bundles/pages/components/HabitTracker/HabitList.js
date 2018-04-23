module.exports=__NEXT_REGISTER_PAGE("/components/HabitTracker/HabitList",function(){var e=webpackJsonp([8],{392:function(e,t,n){e.exports=n(85)},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(1);var a=n.n(r);var o=n(5);var u=n(9);var i=n(0);var c=n.n(i);var f=function e(t){return a.a.createElement("div",null,a.a.createElement("p",null,"Days since "+t.title),a.a.createElement("h2",null,Math.floor(c.a.duration(c()().diff(c()(t.date))).asDays())),a.a.createElement("p",null,"Started on ",c()(t.date).format("MMMM Do YYYY")),t.configure&&a.a.createElement("button",{onClick:function e(){return t.dispatch(Object(u["delHabit"])(t.keyValue))}},"Remove"),t.remove&&a.a.createElement("button",{onClick:function e(){return t.dispatch(Object(u["resetHabit"])(t.keyValue))}},"Reset"))};t["default"]=Object(o["b"])()(f)},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(1);var a=n.n(r);var o=n(7);var u=n(9);var i=n(5);var c=n(56);var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}return function(t,n,r){n&&e(t.prototype,n);r&&e(t,r);return t}}();function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){p(t,e);function t(){l(this,t);return s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}f(t,[{key:"componentDidMount",value:function e(){var t=this;o["default"].get("/habits.json").then(function(e){var n=e.data;for(var r in n)t.props.dispatch(Object(u["setReducerState"])(n))})}},{key:"render",value:function e(){var t=this;return a.a.createElement("div",null,this.props.habits.map(function(e,n){return a.a.createElement(c["default"],{configure:t.props.configure,remove:t.props.remove,title:e.title,date:e.date,keyValue:e.key,key:n})}))}}]);return t}(a.a.Component);var d=function e(t,n){return{habits:t.habit}};t["default"]=Object(i["b"])(d)(v)},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});n.d(t,"createHabit",function(){return i});n.d(t,"addHabit",function(){return c});n.d(t,"delHabit",function(){return f});n.d(t,"removeHabit",function(){return l});n.d(t,"resetHabit",function(){return s});n.d(t,"resetReducerHabit",function(){return p});n.d(t,"setReducerState",function(){return v});var r=n(0);var a=n.n(r);var o=n(7);var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var i=function e(t){return function(e){o["default"].post("/habits.json",t).then(function(n){var r=n.data;e(c(u({},t,{key:r.name})))})}};var c=function e(t){return{type:"CREATE_HABIT",habit:t}};var f=function e(t){return function(e){o["default"].delete("/habits/"+t+".json").then(function(){console.log(t);e(l(t))})}};var l=function e(t){return{type:"REMOVE_HABIT",key:t}};var s=function e(t){return function(e){o["default"].patch("/habits/"+t+".json",{date:a()().valueOf()}).then(e(p(t)))}};var p=function e(t){return{type:"SET_REDUCER_HABIT",key:t}};var v=function e(t){return{type:"SET_STATE",payload:t}}}},[392]);return{page:e.default}});