(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _viewRockmanJs = require('./view/Rockman.js');

var _viewRockmanJs2 = _interopRequireDefault(_viewRockmanJs);

var App =

/**
 * エントリポイント
 */
function App() {
  _classCallCheck(this, App);

  this.FPS = 60;
  console.log(this.FPS);
  this.stage = new createjs.Stage('app');

  //_rockman = new Rockman();
  //_stage.addChild(_rockman);
};

},{"./view/Rockman.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rockman = function Rockman() {
  _classCallCheck(this, Rockman);
};

exports["default"] = Rockman;
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3Nhd2FkYXRha2F5b3NoaS9kZXZlbG9wL2F0dGFjay9zcmMvYXBwLmpzIiwiL1VzZXJzL3Nhd2FkYXRha2F5b3NoaS9kZXZlbG9wL2F0dGFjay9zcmMvdmlldy9Sb2NrbWFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OzZCQ0FvQixtQkFBbUI7Ozs7SUFFakMsR0FBRzs7Ozs7QUFLSSxTQUxQLEdBQUcsR0FLTzt3QkFMVixHQUFHOztBQU1MLE1BQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2QsU0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsTUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Q0FJeEM7Ozs7Ozs7Ozs7O0lDZEcsT0FBTyxHQUVBLFNBRlAsT0FBTyxHQUVHO3dCQUZWLE9BQU87Q0FJVjs7cUJBSVksT0FBTyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUm9ja21hbiBmcm9tICcuL3ZpZXcvUm9ja21hbi5qcyc7XG5cbmNsYXNzIEFwcCB7XG5cbiAgLyoqXG4gICAqIOOCqOODs+ODiOODquODneOCpOODs+ODiFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5GUFMgPSA2MDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLkZQUyk7XG4gICAgdGhpcy5zdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZSgnYXBwJyk7XG5cbiAgICAvL19yb2NrbWFuID0gbmV3IFJvY2ttYW4oKTtcbiAgICAvL19zdGFnZS5hZGRDaGlsZChfcm9ja21hbik7XG4gIH1cblxufVxuIiwiY2xhc3MgUm9ja21hbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvY2ttYW47XG4iXX0=
