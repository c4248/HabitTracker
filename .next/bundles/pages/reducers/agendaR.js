module.exports=__NEXT_REGISTER_PAGE("/reducers/agendaR",function(){var r=webpackJsonp([12],{18:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:true});var a=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r};function n(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return Array.from(r)}var u=[];e["default"]=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;var e=arguments[1];switch(e.type){case"ADD_TASK":return[].concat(n(r),[e.task]);case"REMOVE_TASK":return r.filter(function(r){return e.taskName!==r.task});case"SET_REDUCER_STATE":var t=[];for(var o in e.tasks){var s=a({},e.tasks[o],{key:o});t.push(s)}return t;default:return r}}},398:function(r,e,t){r.exports=t(18)}},[398]);return{page:r.default}});