module.exports=__NEXT_REGISTER_PAGE("/actions/agendaA",function(){var t=webpackJsonp([14],{17:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:true});e.d(n,"addTaskSuccess",function(){return u});e.d(n,"removeTask",function(){return r});e.d(n,"setReducerState",function(){return o});e.d(n,"addTask",function(){return s});e.d(n,"updateTask",function(){return c});var a=e(7);var u=function t(n){return{type:"ADD_TASK",task:n}};var r=function t(n){return{type:"REMOVE_TASK",taskName:n}};var o=function t(n){return{type:"SET_REDUCER_STATE",tasks:n}};var s=function t(n){return function(t){a["default"].post("/tasks.json",n).then(function(e){var a={task:n.task,day:n.day,key:e.data.name,hour:n.hour};t(u(a))})}};var c=function t(n){return function(t){a["default"].patch("/tasks/"+n.key+".json",{task:n.task}).then(function(t){console.log(t.data)})}}},358:function(t,n,e){t.exports=e(17)}},[358]);return{page:t.default}});