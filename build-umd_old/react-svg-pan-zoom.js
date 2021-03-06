(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSVGPanZoom"] = factory(require("prop-types"), require("react"));
	else
		root["ReactSVGPanZoom"] = factory(root["PropTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(r,t){ true?module.exports=t():undefined}(window,function(){return function(r){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,t){if(1&t&&(r=n(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)n.d(e,o,function(t){return r[t]}.bind(null,o));return e},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="",n(n.s=0)}([function(r,t,n){"use strict";function e(r,t){return{x:r.a*t.x+r.c*t.y+r.e,y:r.b*t.x+r.d*t.y+r.f}}function o(r,t){return t.map(function(t){return e(r,t)})}function u(r){return{a:parseFloat(r.a),b:parseFloat(r.b),c:parseFloat(r.c),d:parseFloat(r.d),e:parseFloat(r.e),f:parseFloat(r.f)}}n.r(t);var a=/^matrix\(\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*\)$/i;function i(r){var t=r.match(a);if(null===t||t.length<7)throw new Error("'"+r+"' is not a matrix");return{a:parseFloat(t[1]),b:parseFloat(t[2]),c:parseFloat(t[3]),d:parseFloat(t[4]),e:parseFloat(t[5]),f:parseFloat(t[6])}}function f(){return{a:1,c:0,e:0,b:0,d:1,f:0}}function c(r){var t=r.a,n=r.b,e=r.c,o=r.d,u=r.e,a=r.f,i=t*o-n*e;return{a:o/i,b:n/-i,c:e/-i,d:t/i,e:(o*u-e*a)/-i,f:(n*u-t*a)/i}}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},s=function(r){return"number"==typeof r&&!isNaN(r)&&isFinite(r)},l=function(r){return null!=r&&"object"===(void 0===r?"undefined":d(r))};function p(r){return l(r)&&r.hasOwnProperty("a")&&s(r.a)&&r.hasOwnProperty("b")&&s(r.b)&&r.hasOwnProperty("c")&&s(r.c)&&r.hasOwnProperty("d")&&s(r.d)&&r.hasOwnProperty("e")&&s(r.e)&&r.hasOwnProperty("f")&&s(r.f)}function y(r){return void 0===r}function b(r){return{a:1,c:0,e:r,b:0,d:1,f:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0}}function v(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];var e=function(r,t){return{a:r.a*t.a+r.c*t.b,c:r.a*t.c+r.c*t.d,e:r.a*t.e+r.c*t.f+r.e,b:r.b*t.a+r.d*t.b,d:r.b*t.c+r.d*t.d,f:r.b*t.e+r.d*t.f+r.f}};switch((t=Array.isArray(t[0])?t[0]:t).length){case 0:throw new Error("no matrices provided");case 1:return t[0];case 2:return e(t[0],t[1]);default:var o=function(r){return Array.isArray(r)?r:Array.from(r)}(t),u=o[0],a=o[1],i=o.slice(2),f=e(u,a);return v.apply(void 0,[f].concat(function(r){if(Array.isArray(r)){for(var t=0,n=Array(r.length);t<r.length;t++)n[t]=r[t];return n}return Array.from(r)}(i)))}}var m=Math.cos,h=Math.sin,x=Math.PI;function g(r,t,n){var e=m(r),o=h(r),u={a:e,c:-o,e:0,b:o,d:e,f:0};return y(t)||y(n)?u:v([b(t,n),u,b(-t,-n)])}function S(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return g(r*x/180,t,n)}function w(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return y(t)&&(t=r),{a:r,c:0,e:0,b:0,d:t,f:0}}function O(r,t){return{a:1,c:r,e:0,b:t,d:1,f:0}}function P(r){return j(r)}function F(r){return j(r)}function j(r){return"matrix("+r.a+","+r.b+","+r.c+","+r.d+","+r.e+","+r.f+")"}n.d(t,"applyToPoint",function(){return e}),n.d(t,"applyToPoints",function(){return o}),n.d(t,"fromObject",function(){return u}),n.d(t,"fromString",function(){return i}),n.d(t,"identity",function(){return f}),n.d(t,"inverse",function(){return c}),n.d(t,"isAffineMatrix",function(){return p}),n.d(t,"rotate",function(){return g}),n.d(t,"rotateDEG",function(){return S}),n.d(t,"scale",function(){return w}),n.d(t,"shear",function(){return O}),n.d(t,"toCSS",function(){return P}),n.d(t,"toSVG",function(){return F}),n.d(t,"toString",function(){return j}),n.d(t,"transform",function(){return v}),n.d(t,"translate",function(){return b})}])});
//# sourceMappingURL=transformation-matrix.min.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(1);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: external {"root":"PropTypes","commonjs2":"prop-types","commonjs":"prop-types","amd":"prop-types"}
var external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_ = __webpack_require__(0);
var external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_);

// EXTERNAL MODULE: ./node_modules/transformation-matrix/build-umd/transformation-matrix.min.js
var transformation_matrix_min = __webpack_require__(2);

// CONCATENATED MODULE: ./src/constants.js
var MODE_IDLE = 'idle';
var MODE_PANNING = 'panning';
var MODE_ZOOMING = 'zooming';

var TOOL_AUTO = 'auto';
var TOOL_NONE = 'none';
var TOOL_PAN = 'pan';
var TOOL_ZOOM_IN = 'zoom-in';
var TOOL_ZOOM_OUT = 'zoom-out';

var POSITION_NONE = 'none';
var POSITION_TOP = 'top';
var POSITION_RIGHT = 'right';
var POSITION_BOTTOM = 'bottom';
var POSITION_LEFT = 'left';

var ACTION_ZOOM = 'zoom';
var ACTION_PAN = 'pan';

var ALIGN_CENTER = 'center';
var ALIGN_LEFT = 'left';
var ALIGN_RIGHT = 'right';
var ALIGN_TOP = 'top';
var ALIGN_BOTTOM = 'bottom';
// CONCATENATED MODULE: ./src/features/common.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/**
 * Obtain default value
 * @returns {Object}
 */
function getDefaultValue(viewerWidth, viewerHeight, SVGWidth, SVGHeight, scaleFactorMin, scaleFactorMax) {
  return set({}, _extends({}, Object(transformation_matrix_min["identity"])(), {
    version: 2,
    mode: MODE_IDLE,
    focus: false,
    pinchPointDistance: null,
    prePinchMode: null,
    viewerWidth: viewerWidth,
    viewerHeight: viewerHeight,
    SVGWidth: SVGWidth,
    SVGHeight: SVGHeight,
    scaleFactorMin: scaleFactorMin,
    scaleFactorMax: scaleFactorMax,
    startX: null,
    startY: null,
    endX: null,
    endY: null,
    miniatureOpen: true,
    lastAction: null
  }));
}

/**
 * Change value
 * @param value
 * @param change
 * @param action
 * @returns {Object}
 */
function set(value, change) {
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  value = Object.assign({}, value, change, { lastAction: action });
  return Object.freeze(value);
}

/**
 * value valid check
 * @param value
 */
function isValueValid(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.hasOwnProperty('version');
}

/**
 * Export x,y coords relative to SVG
 * @param value
 * @param viewerX
 * @param viewerY
 * @returns {*|{x, y}|{x: number, y: number}}
 */
function getSVGPoint(value, viewerX, viewerY) {
  var matrix = Object(transformation_matrix_min["fromObject"])(value);

  var inverseMatrix = Object(transformation_matrix_min["inverse"])(matrix);
  return Object(transformation_matrix_min["applyToPoint"])(inverseMatrix, { x: viewerX, y: viewerY });
}

/**
 * Decompose matrix from value
 * @param value
 * @returns {{scaleFactor: number, translationX: number, translationY: number}}
 */
function decompose(value) {
  var matrix = Object(transformation_matrix_min["fromObject"])(value);

  return {
    scaleFactor: matrix.a,
    translationX: matrix.e,
    translationY: matrix.f
  };
}

/**
 *
 * @param value
 * @param focus
 * @returns {Object}
 */
function setFocus(value, focus) {
  return set(value, { focus: focus });
}

/**
 *
 * @param value
 * @param viewerWidth
 * @param viewerHeight
 * @returns {Object}
 */
function setViewerSize(value, viewerWidth, viewerHeight) {
  return set(value, { viewerWidth: viewerWidth, viewerHeight: viewerHeight });
}

/**
 *
 * @param value
 * @param SVGWidth
 * @param SVGHeight
 * @returns {Object}
 */
function setSVGSize(value, SVGWidth, SVGHeight) {
  return set(value, { SVGWidth: SVGWidth, SVGHeight: SVGHeight });
}

/**
 *
 * @param value
 * @param scaleFactorMin
 * @param scaleFactorMax
 * @returns {Object}
 */
function setZoomLevels(value, scaleFactorMin, scaleFactorMax) {
  return set(value, { scaleFactorMin: scaleFactorMin, scaleFactorMax: scaleFactorMax });
}

/**
 *
 * @param value
 * @param SVGPointX
 * @param SVGPointY
 * @param zoomLevel
 * @returns {Object}
 */
function common_setPointOnViewerCenter(value, SVGPointX, SVGPointY, zoomLevel) {
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;


  var matrix = Object(transformation_matrix_min["transform"])(Object(transformation_matrix_min["translate"])(-SVGPointX + viewerWidth / 2, -SVGPointY + viewerHeight / 2), //4
  Object(transformation_matrix_min["translate"])(SVGPointX, SVGPointY), //3
  Object(transformation_matrix_min["scale"])(zoomLevel, zoomLevel), //2
  Object(transformation_matrix_min["translate"])(-SVGPointX, -SVGPointY) //1
  );

  return set(value, _extends({
    mode: MODE_IDLE
  }, matrix));
}

/**
 *
 * @param value
 * @returns {Object}
 */
function common_reset(value) {
  return set(value, _extends({
    mode: MODE_IDLE
  }, Object(transformation_matrix_min["identity"])()));
}

/**
 *
 * @param value
 * @returns {Object}
 */
function resetMode(value) {
  return set(value, {
    mode: MODE_IDLE,
    startX: null,
    startY: null,
    endX: null,
    endY: null
  });
}
// CONCATENATED MODULE: ./src/events/viewer-event.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var viewer_event_ViewerEvent = function () {
  function ViewerEvent(originalEvent, value, SVGViewer) {
    _classCallCheck(this, ViewerEvent);

    this.originalEvent = originalEvent;
    this.value = value;
    this.SVGViewer = SVGViewer;
  }

  _createClass(ViewerEvent, [{
    key: 'preventDefault',
    value: function preventDefault() {
      this.originalEvent.preventDefault();
    }
  }, {
    key: 'stopPropagation',
    value: function stopPropagation() {
      this.originalEvent.stopPropagation();
    }
  }, {
    key: 'scaleFactor',
    get: function get() {
      this._cacheDecomposedValue = this._cacheDecomposedValue || decompose(this.value);
      return this._cacheDecomposedValue.scaleFactor;
    }
  }, {
    key: 'translationX',
    get: function get() {
      this._cacheDecomposedValue = this._cacheDecomposedValue || decompose(this.value);
      return this._cacheDecomposedValue.translationX;
    }
  }, {
    key: 'translationY',
    get: function get() {
      this._cacheDecomposedValue = this._cacheDecomposedValue || decompose(this.value);
      return this._cacheDecomposedValue.translationY;
    }
  }]);

  return ViewerEvent;
}();

/* harmony default export */ var viewer_event = (viewer_event_ViewerEvent);
// CONCATENATED MODULE: ./src/events/viewer-mouse-event.js
var viewer_mouse_event_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function viewer_mouse_event_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var viewer_mouse_event_ViewerMouseEvent = function (_ViewerEvent) {
  _inherits(ViewerMouseEvent, _ViewerEvent);

  function ViewerMouseEvent() {
    viewer_mouse_event_classCallCheck(this, ViewerMouseEvent);

    return _possibleConstructorReturn(this, (ViewerMouseEvent.__proto__ || Object.getPrototypeOf(ViewerMouseEvent)).apply(this, arguments));
  }

  viewer_mouse_event_createClass(ViewerMouseEvent, [{
    key: 'point',
    get: function get() {
      if (!this._cachePoint) {
        var event = this.originalEvent,
            value = this.value,
            SVGViewer = this.SVGViewer;

        var rect = SVGViewer.getBoundingClientRect();
        var x = event.clientX - Math.round(rect.left);
        var y = event.clientY - Math.round(rect.top);

        this._cachePoint = getSVGPoint(value, x, y);
      }
      return this._cachePoint;
    }
  }, {
    key: 'x',
    get: function get() {
      return this.point.x;
    }
  }, {
    key: 'y',
    get: function get() {
      return this.point.y;
    }
  }]);

  return ViewerMouseEvent;
}(viewer_event);

/* harmony default export */ var viewer_mouse_event = (viewer_mouse_event_ViewerMouseEvent);
// CONCATENATED MODULE: ./src/events/viewer-touch-event.js
var viewer_touch_event_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var viewer_touch_event_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function viewer_touch_event_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function viewer_touch_event_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function viewer_touch_event_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var viewer_touch_event_ViewerTouchEvent = function (_ViewerEvent) {
  viewer_touch_event_inherits(ViewerTouchEvent, _ViewerEvent);

  function ViewerTouchEvent() {
    viewer_touch_event_classCallCheck(this, ViewerTouchEvent);

    return viewer_touch_event_possibleConstructorReturn(this, (ViewerTouchEvent.__proto__ || Object.getPrototypeOf(ViewerTouchEvent)).apply(this, arguments));
  }

  viewer_touch_event_createClass(ViewerTouchEvent, [{
    key: 'points',
    get: function get() {
      if (!this._cachePoints) this._cachePoints = ViewerTouchEvent.touchesToPoints(this.originalEvent.touches, this.SVGViewer, this.value);

      return this._cachePoints;
    }
  }, {
    key: 'changedPoints',
    get: function get() {
      if (!this._cacheChangedPoints) this._cacheChangedPoints = ViewerTouchEvent.touchesToPoints(this.originalEvent.changedTouches, this.SVGViewer, this.value);

      return this._cacheChangedPoints;
    }
  }], [{
    key: 'touchesToPoints',
    value: function touchesToPoints(touches, SVGViewer, value) {
      var points = [];
      for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];

        var rect = SVGViewer.getBoundingClientRect();
        var x = touch.clientX - Math.round(rect.left);
        var y = touch.clientY - Math.round(rect.top);

        var point = getSVGPoint(value, x, y);

        points.push(viewer_touch_event_extends({}, point, { identifier: touch.identifier }));
      }
      return points;
    }
  }]);

  return ViewerTouchEvent;
}(viewer_event);

/* harmony default export */ var viewer_touch_event = (viewer_touch_event_ViewerTouchEvent);
// CONCATENATED MODULE: ./src/events/event-factory.js



/* harmony default export */ var event_factory = (function (originalEvent, value, SVGViewer) {

  var eventType = originalEvent.type;

  switch (eventType) {
    case "mousemove":
    case "mouseup":
    case "mousedown":
    case "click":
    case "dblclick":
      return new viewer_mouse_event(originalEvent, value, SVGViewer);

    case "touchstart":
    case "touchmove":
    case "touchend":
    case "touchcancel":
      return new viewer_touch_event(originalEvent, value, SVGViewer);

    default:
      throw new Error(eventType + ' not supported');
  }
});
// CONCATENATED MODULE: ./src/features/pan.js
var pan_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();





/**
 *
 * @param value
 * @param SVGDeltaX
 * @param SVGDeltaY
 * @param panLimit
 * @returns {Object}
 */
function pan_pan(value, SVGDeltaX, SVGDeltaY) {
  var panLimit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;


  var matrix = Object(transformation_matrix_min["transform"])(Object(transformation_matrix_min["fromObject"])(value), //2
  Object(transformation_matrix_min["translate"])(SVGDeltaX, SVGDeltaY) //1
  );

  // apply pan limits
  if (panLimit) {
    var _applyToPoints = Object(transformation_matrix_min["applyToPoints"])(matrix, [{ x: panLimit, y: panLimit }, { x: value.SVGWidth - panLimit, y: value.SVGHeight - panLimit }]),
        _applyToPoints2 = _slicedToArray(_applyToPoints, 2),
        _applyToPoints2$ = _applyToPoints2[0],
        x1 = _applyToPoints2$.x,
        y1 = _applyToPoints2$.y,
        _applyToPoints2$2 = _applyToPoints2[1],
        x2 = _applyToPoints2$2.x,
        y2 = _applyToPoints2$2.y;

    //x limit


    var moveX = 0;
    if (value.viewerWidth - x1 < 0) moveX = value.viewerWidth - x1;else if (x2 < 0) moveX = -x2;

    //y limit
    var moveY = 0;
    if (value.viewerHeight - y1 < 0) moveY = value.viewerHeight - y1;else if (y2 < 0) moveY = -y2;

    //apply limits
    matrix = Object(transformation_matrix_min["transform"])(Object(transformation_matrix_min["translate"])(moveX, moveY), matrix);
  }

  return set(value, pan_extends({
    mode: MODE_IDLE
  }, matrix), ACTION_PAN);
}

function startPanning(value, viewerX, viewerY) {
  return set(value, {
    mode: MODE_PANNING,
    startX: viewerX,
    startY: viewerY,
    endX: viewerX,
    endY: viewerY
  }, ACTION_PAN);
}

function updatePanning(value, viewerX, viewerY, panLimit) {
  if (value.mode !== MODE_PANNING) throw new Error('update pan not allowed in this mode ' + value.mode);

  var endX = value.endX,
      endY = value.endY;


  var start = getSVGPoint(value, endX, endY);
  var end = getSVGPoint(value, viewerX, viewerY);

  var deltaX = end.x - start.x;
  var deltaY = end.y - start.y;

  var nextValue = pan_pan(value, deltaX, deltaY, panLimit);
  return set(nextValue, {
    mode: MODE_PANNING,
    endX: viewerX,
    endY: viewerY
  }, ACTION_PAN);
}

function stopPanning(value) {
  return set(value, {
    mode: MODE_IDLE,
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }, ACTION_PAN);
}

function autoPanIfNeeded(value, viewerX, viewerY) {
  var deltaX = 0;
  var deltaY = 0;

  if (viewerY <= 20) deltaY = 2;
  if (value.viewerWidth - viewerX <= 20) deltaX = -2;
  if (value.viewerHeight - viewerY <= 20) deltaY = -2;
  if (viewerX <= 20) deltaX = 2;

  deltaX = deltaX / value.d;
  deltaY = deltaY / value.d;

  return deltaX === 0 && deltaY === 0 ? value : pan_pan(value, deltaX, deltaY);
}
// CONCATENATED MODULE: ./src/utils/calculateBox.js
function calculateBox(start, end) {
  if (start.x <= end.x && start.y <= end.y) {
    return {
      x: start.x,
      y: start.y,
      width: end.x - start.x,
      height: end.y - start.y
    };
  } else if (start.x >= end.x && start.y <= end.y) {
    return {
      x: end.x,
      y: start.y,
      width: start.x - end.x,
      height: end.y - start.y
    };
  } else if (start.x >= end.x && start.y >= end.y) {
    return {
      x: end.x,
      y: end.y,
      width: start.x - end.x,
      height: start.y - end.y
    };
  } else if (start.x <= end.x && start.y >= end.y) {
    return {
      x: start.x,
      y: end.y,
      width: end.x - start.x,
      height: start.y - end.y
    };
  }
}
// CONCATENATED MODULE: ./src/features/zoom.js
var zoom_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







function lessThanScaleFactorMin(value, scaleFactor) {
  return value.scaleFactorMin && value.d * scaleFactor <= value.scaleFactorMin;
}

function moreThanScaleFactorMax(value, scaleFactor) {
  return value.scaleFactorMax && value.d * scaleFactor >= value.scaleFactorMax;
}

function isZoomLevelGoingOutOfBounds(value, scaleFactor) {
  return lessThanScaleFactorMin(value, scaleFactor) && scaleFactor < 1 || moreThanScaleFactorMax(value, scaleFactor) && scaleFactor > 1;
}

function limitZoomLevel(value, matrix) {
  var scaleLevel = matrix.a;

  if (value.scaleFactorMin != null) {
    // limit minimum zoom
    scaleLevel = Math.max(scaleLevel, value.scaleFactorMin);
  }

  if (value.scaleFactorMax != null) {
    // limit maximum zoom
    scaleLevel = Math.min(scaleLevel, value.scaleFactorMax);
  }

  return set(matrix, {
    a: scaleLevel,
    d: scaleLevel
  });
}

function zoom_zoom(value, SVGPointX, SVGPointY, scaleFactor) {
  if (isZoomLevelGoingOutOfBounds(value, scaleFactor)) {
    // Do not change translation and scale of value
    return value;
  }

  var matrix = Object(transformation_matrix_min["transform"])(Object(transformation_matrix_min["fromObject"])(value), Object(transformation_matrix_min["translate"])(SVGPointX, SVGPointY), Object(transformation_matrix_min["scale"])(scaleFactor, scaleFactor), Object(transformation_matrix_min["translate"])(-SVGPointX, -SVGPointY));

  return set(value, zoom_extends({
    mode: MODE_IDLE
  }, limitZoomLevel(value, matrix), {
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }), ACTION_ZOOM);
}

function zoom_fitSelection(value, selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight) {
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;


  var scaleX = viewerWidth / selectionWidth;
  var scaleY = viewerHeight / selectionHeight;

  var scaleLevel = Math.min(scaleX, scaleY);

  var matrix = Object(transformation_matrix_min["transform"])(Object(transformation_matrix_min["scale"])(scaleLevel, scaleLevel), //2
  Object(transformation_matrix_min["translate"])(-selectionSVGPointX, -selectionSVGPointY) //1
  );

  if (isZoomLevelGoingOutOfBounds(value, scaleLevel / value.d)) {
    // Do not allow scale and translation
    return set(value, {
      mode: MODE_IDLE,
      startX: null,
      startY: null,
      endX: null,
      endY: null
    });
  }

  return set(value, zoom_extends({
    mode: MODE_IDLE
  }, limitZoomLevel(value, matrix), {
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }), ACTION_ZOOM);
}

function zoom_fitToViewer(value) {
  var SVGAlignX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ALIGN_LEFT;
  var SVGAlignY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ALIGN_TOP;
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight,
      SVGWidth = value.SVGWidth,
      SVGHeight = value.SVGHeight;


  var scaleX = viewerWidth / SVGWidth;
  var scaleY = viewerHeight / SVGHeight;
  var scaleLevel = Math.min(scaleX, scaleY);

  var scaleMatrix = Object(transformation_matrix_min["scale"])(scaleLevel, scaleLevel);
  var translationMatrix = Object(transformation_matrix_min["translate"])(0, 0);

  // after fitting, SVG and the viewer will match in width (1) or in height (2)
  if (scaleX < scaleY) {
    //(1) match in width, meaning scaled SVGHeight <= viewerHeight
    var remainderY = viewerHeight - scaleX * SVGHeight;

    if (SVGAlignY === ALIGN_CENTER) translationMatrix = Object(transformation_matrix_min["translate"])(0, Math.round(remainderY / 2));
    if (SVGAlignY === ALIGN_BOTTOM) translationMatrix = Object(transformation_matrix_min["translate"])(0, remainderY);
  } else {
    //(2) match in height, meaning scaled SVGWidth <= viewerWidth
    var remainderX = viewerWidth - scaleY * SVGWidth;

    if (SVGAlignX === ALIGN_CENTER) translationMatrix = Object(transformation_matrix_min["translate"])(Math.round(remainderX / 2), 0);
    if (SVGAlignX === ALIGN_RIGHT) translationMatrix = Object(transformation_matrix_min["translate"])(remainderX, 0);
  }

  var matrix = Object(transformation_matrix_min["transform"])(translationMatrix, //2
  scaleMatrix //1
  );

  if (isZoomLevelGoingOutOfBounds(value, scaleLevel / value.d)) {
    // Do not allow scale and translation
    return set(value, {
      mode: MODE_IDLE,
      startX: null,
      startY: null,
      endX: null,
      endY: null
    });
  }

  return set(value, zoom_extends({
    mode: MODE_IDLE
  }, limitZoomLevel(value, matrix), {
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }), ACTION_ZOOM);
}

function zoom_zoomOnViewerCenter(value, scaleFactor) {
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;

  var SVGPoint = getSVGPoint(value, viewerWidth / 2, viewerHeight / 2);
  return zoom_zoom(value, SVGPoint.x, SVGPoint.y, scaleFactor);
}

function startZooming(value, viewerX, viewerY) {
  return set(value, {
    mode: MODE_ZOOMING,
    startX: viewerX,
    startY: viewerY,
    endX: viewerX,
    endY: viewerY
  });
}

function updateZooming(value, viewerX, viewerY) {
  if (value.mode !== MODE_ZOOMING) throw new Error('update selection not allowed in this mode ' + value.mode);

  return set(value, {
    endX: viewerX,
    endY: viewerY
  });
}

function stopZooming(value, viewerX, viewerY, scaleFactor, props) {
  var startX = value.startX,
      startY = value.startY,
      endX = value.endX,
      endY = value.endY;


  var start = getSVGPoint(value, startX, startY);
  var end = getSVGPoint(value, endX, endY);

  if (Math.abs(startX - endX) > 7 && Math.abs(startY - endY) > 7) {
    var box = calculateBox(start, end);
    return zoom_fitSelection(value, box.x, box.y, box.width, box.height);
  } else {
    var SVGPoint = getSVGPoint(value, viewerX, viewerY);
    return zoom_zoom(value, SVGPoint.x, SVGPoint.y, scaleFactor, props);
  }
}
// CONCATENATED MODULE: ./src/utils/mapRange.js
function mapRange(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
// CONCATENATED MODULE: ./src/features/interactions.js






function interactions_onMouseDown(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  var x = void 0,
      y = void 0;
  if (coords) {
    x = coords.x;
    y = coords.y;
  } else {
    var _ViewerDOM$getBoundin = ViewerDOM.getBoundingClientRect(),
        left = _ViewerDOM$getBoundin.left,
        top = _ViewerDOM$getBoundin.top;

    x = event.clientX - Math.round(left);
    y = event.clientY - Math.round(top);
  }

  var nextValue = value;

  switch (tool) {
    case TOOL_ZOOM_OUT:
      var SVGPoint = getSVGPoint(value, x, y);
      nextValue = zoom_zoom(value, SVGPoint.x, SVGPoint.y, 1 / props.scaleFactor, props);
      break;

    case TOOL_ZOOM_IN:
      nextValue = startZooming(value, x, y);
      break;

    case TOOL_AUTO:
    case TOOL_PAN:
      nextValue = startPanning(value, x, y);
      break;

    default:
      return value;
  }

  event.preventDefault();
  return nextValue;
}

function interactions_onMouseMove(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  var x = void 0,
      y = void 0;
  if (coords) {
    x = coords.x;
    y = coords.y;
  } else {
    var _ViewerDOM$getBoundin2 = ViewerDOM.getBoundingClientRect(),
        left = _ViewerDOM$getBoundin2.left,
        top = _ViewerDOM$getBoundin2.top;

    x = event.clientX - Math.round(left);
    y = event.clientY - Math.round(top);
  }

  var forceExit = event.buttons === 0; //the mouse exited and reentered into svg
  var nextValue = value;

  switch (tool) {
    case TOOL_ZOOM_IN:
      if (value.mode === MODE_ZOOMING) nextValue = forceExit ? stopZooming(value, x, y, props.scaleFactor, props) : updateZooming(value, x, y);
      break;

    case TOOL_AUTO:
    case TOOL_PAN:
      if (value.mode === MODE_PANNING) nextValue = forceExit ? stopPanning(value) : updatePanning(value, x, y, props.preventPanOutside ? 20 : undefined);
      break;

    default:
      return value;
  }

  event.preventDefault();
  return nextValue;
}

function interactions_onMouseUp(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  var x = void 0,
      y = void 0;
  if (coords) {
    x = coords.x;
    y = coords.y;
  } else {
    var _ViewerDOM$getBoundin3 = ViewerDOM.getBoundingClientRect(),
        left = _ViewerDOM$getBoundin3.left,
        top = _ViewerDOM$getBoundin3.top;

    x = event.clientX - Math.round(left);
    y = event.clientY - Math.round(top);
  }

  var nextValue = value;

  switch (tool) {
    case TOOL_ZOOM_OUT:
      if (value.mode === MODE_ZOOMING) nextValue = stopZooming(value, x, y, 1 / props.scaleFactor, props);
      break;

    case TOOL_ZOOM_IN:
      if (value.mode === MODE_ZOOMING) nextValue = stopZooming(value, x, y, props.scaleFactor, props);
      break;

    case TOOL_AUTO:
    case TOOL_PAN:
      if (value.mode === MODE_PANNING) nextValue = stopPanning(value, x, y);
      break;

    default:
      return value;
  }

  event.preventDefault();
  return nextValue;
}

function interactions_onDoubleClick(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  var x = void 0,
      y = void 0;
  if (coords) {
    x = coords.x;
    y = coords.y;
  } else {
    var _ViewerDOM$getBoundin4 = ViewerDOM.getBoundingClientRect(),
        left = _ViewerDOM$getBoundin4.left,
        top = _ViewerDOM$getBoundin4.top;

    x = event.clientX - Math.round(left);
    y = event.clientY - Math.round(top);
  }

  var nextValue = value;

  switch (tool) {
    case TOOL_AUTO:
      if (!props.disableDoubleClickZoomWithToolAuto) {
        var SVGPoint = getSVGPoint(value, x, y);
        var modifierKeysReducer = function modifierKeysReducer(current, modifierKey) {
          return current || event.getModifierState(modifierKey);
        };
        var modifierKeyActive = props.modifierKeys.reduce(modifierKeysReducer, false);
        var scaleFactor = modifierKeyActive ? 1 / props.scaleFactor : props.scaleFactor;
        nextValue = zoom_zoom(value, SVGPoint.x, SVGPoint.y, scaleFactor, props);
      }
      break;

    default:
      return value;
  }

  event.preventDefault();
  return nextValue;
}

function interactions_onWheel(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  var x = void 0,
      y = void 0;
  if (coords) {
    x = coords.x;
    y = coords.y;
  } else {
    var _ViewerDOM$getBoundin5 = ViewerDOM.getBoundingClientRect(),
        left = _ViewerDOM$getBoundin5.left,
        top = _ViewerDOM$getBoundin5.top;

    x = event.clientX - Math.round(left);
    y = event.clientY - Math.round(top);
  }

  if (!props.detectWheel) return value;

  var delta = Math.max(-1, Math.min(1, event.deltaY));
  var scaleFactor = mapRange(delta, -1, 1, props.scaleFactorOnWheel, 1 / props.scaleFactorOnWheel);

  var SVGPoint = getSVGPoint(value, x, y);
  var nextValue = zoom_zoom(value, SVGPoint.x, SVGPoint.y, scaleFactor, props);

  event.preventDefault();
  return nextValue;
}

function onMouseEnterOrLeave(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  var nextValue = setFocus(value, event.type === 'mouseenter');

  event.preventDefault();
  return nextValue;
}

function onInterval(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var x = coords.x,
      y = coords.y;


  if (!([TOOL_NONE, TOOL_AUTO].indexOf(tool) >= 0)) return value;
  if (!props.detectAutoPan) return value;
  if (!value.focus) return value;

  return autoPanIfNeeded(value, x, y);
}
// CONCATENATED MODULE: ./src/features/interactions-touch.js
var interactions_touch_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







function hasPinchPointDistance(value) {
  return typeof value.pinchPointDistance === 'number';
}

function onMultiTouch(event, ViewerDOM, tool, value, props) {
  var _ViewerDOM$getBoundin = ViewerDOM.getBoundingClientRect(),
      left = _ViewerDOM$getBoundin.left,
      top = _ViewerDOM$getBoundin.top;

  var x1 = event.touches[0].clientX - Math.round(left);
  var y1 = event.touches[0].clientY - Math.round(top);
  var x2 = event.touches[1].clientX - Math.round(left);
  var y2 = event.touches[1].clientY - Math.round(top);
  var pinchPointDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  var previousPointDistance = hasPinchPointDistance(value) ? value.pinchPointDistance : pinchPointDistance;
  var svgPoint = getSVGPoint(value, (x1 + x2) / 2, (y1 + y2) / 2);
  var distanceFactor = pinchPointDistance / previousPointDistance;

  if (isZoomLevelGoingOutOfBounds(value, distanceFactor)) {
    // Do not change translation and scale of value
    return value;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  var matrix = Object(transformation_matrix_min["transform"])(Object(transformation_matrix_min["fromObject"])(value), Object(transformation_matrix_min["translate"])(svgPoint.x, svgPoint.y), Object(transformation_matrix_min["scale"])(distanceFactor, distanceFactor), Object(transformation_matrix_min["translate"])(-svgPoint.x, -svgPoint.y));

  return set(value, set(interactions_touch_extends({
    mode: MODE_ZOOMING
  }, limitZoomLevel(value, matrix), {
    startX: null,
    startY: null,
    endX: null,
    endY: null,
    prePinchMode: value.prePinchMode ? value.prePinchMode : value.mode,
    pinchPointDistance: pinchPointDistance
  })));
}

function isMultiTouch(event, props) {
  return props.detectPinchGesture && event.touches.length > 1;
}

function shouldResetPinchPointDistance(event, value, props) {
  return props.detectPinchGesture && hasPinchPointDistance(value) && event.touches.length < 2;
}

function getTouchPosition(touch, ViewerDOM) {
  var _ViewerDOM$getBoundin2 = ViewerDOM.getBoundingClientRect(),
      left = _ViewerDOM$getBoundin2.left,
      top = _ViewerDOM$getBoundin2.top;

  var x = touch.clientX - Math.round(left);
  var y = touch.clientY - Math.round(top);

  return { x: x, y: y };
}

function getNextValue(event, ViewerDOM, tool, value, props, nextValueFn) {
  var nextValue = event.touches.length === 0 ? set(value, { mode: value.prePinchMode ? MODE_IDLE : value.mode, prePinchMode: null }) : value;
  var touch = event.touches.length > 0 ? event.touches[0] : event.changedTouches[0];
  var touchPosition = getTouchPosition(touch, ViewerDOM);

  switch (tool) {
    case TOOL_ZOOM_OUT:
    case TOOL_ZOOM_IN:
    case TOOL_AUTO:
    case TOOL_PAN:
      event.stopPropagation();
      event.preventDefault();
      return nextValueFn(event, ViewerDOM, tool, nextValue, props, touchPosition);

    default:
      return nextValue;
  }
}

function interactions_touch_onTouchStart(event, ViewerDOM, tool, value, props) {
  if (isMultiTouch(event, props)) {
    return onMultiTouch(event, ViewerDOM, tool, value, props);
  }

  if (event.touches.length !== 1) {
    if ([MODE_PANNING, MODE_ZOOMING].indexOf(value.mode) >= 0) {
      return resetMode(value);
    } else if ([MODE_IDLE].indexOf(value.mode) >= 0) {
      return value;
    }
  }

  return getNextValue(event, ViewerDOM, tool, value, props, interactions_onMouseDown);
}

function interactions_touch_onTouchMove(event, ViewerDOM, tool, value, props) {
  if (isMultiTouch(event, props)) {
    return onMultiTouch(event, ViewerDOM, tool, value, props);
  }

  if (!([MODE_PANNING, MODE_ZOOMING].indexOf(value.mode) >= 0)) {
    return value;
  }

  return getNextValue(event, ViewerDOM, tool, value, props, interactions_onMouseMove);
}

function interactions_touch_onTouchEnd(event, ViewerDOM, tool, value, props) {
  if (!([MODE_PANNING, MODE_ZOOMING].indexOf(value.mode) >= 0)) {
    return value;
  }

  var nextValue = shouldResetPinchPointDistance(event, value, props) ? set(value, { pinchPointDistance: null }) : value;

  if (event.touches.length > 0) {
    return nextValue;
  }

  return getNextValue(event, ViewerDOM, tool, nextValue, props, interactions_onMouseUp);
}

function interactions_touch_onTouchCancel(event, ViewerDOM, tool, value, props) {
  event.stopPropagation();
  event.preventDefault();

  return resetMode(value);
}
// CONCATENATED MODULE: ./src/features/miniature.js


function miniature_openMiniature(value) {
  return set(value, {
    miniatureOpen: true
  });
}

function miniature_closeMiniature(value) {
  return set(value, {
    miniatureOpen: false
  });
}
// CONCATENATED MODULE: ./src/ui/cursor-polyfill.js
//specs: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

var needPrefix = function needPrefix(cursor) {
  return ['zoom-in', 'zoom-out', 'grab', 'grabbing'].indexOf(cursor) > -1;
};
var userAgent = function userAgent() {
  return navigator.userAgent.toLowerCase();
};
var isFirefox = function isFirefox() {
  return userAgent().indexOf('firefox') > -1;
};
var isWebkit = function isWebkit() {
  return userAgent().indexOf('webkit') > -1;
};

/* harmony default export */ var cursor_polyfill = (function (cursor) {
  if (!needPrefix(cursor)) return cursor;
  if (isFirefox()) return '-moz-' + cursor;
  if (isWebkit()) return '-webkit-' + cursor;
});
// CONCATENATED MODULE: ./src/utils/getDisplayName.js
//https://facebook.github.io/react/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
// CONCATENATED MODULE: ./src/utils/RandomUID.js
var RandomUID_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RandomUID_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function RandomUID_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RandomUID_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function RandomUID_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var uid = 1;
var nextUID = function nextUID() {
  return "uid" + uid++;
};

function RandomUID_RandomUID(WrappedComponent) {
  var RandomUID = function (_React$Component) {
    RandomUID_inherits(RandomUID, _React$Component);

    function RandomUID(props) {
      RandomUID_classCallCheck(this, RandomUID);

      var _this = RandomUID_possibleConstructorReturn(this, (RandomUID.__proto__ || Object.getPrototypeOf(RandomUID)).call(this, props));

      _this.state = { uid: nextUID() };
      return _this;
    }

    RandomUID_createClass(RandomUID, [{
      key: "render",
      value: function render() {
        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(WrappedComponent, RandomUID_extends({ _uid: this.state.uid }, this.props));
      }
    }]);

    return RandomUID;
  }(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

  RandomUID.displayName = "RandomUID(" + getDisplayName(WrappedComponent) + ")";

  return RandomUID;
}
// CONCATENATED MODULE: ./src/ui/border-gradient.js





var prefixID = 'react-svg-pan-zoom_border_gradient';

function BorderGradient(_ref) {
  var direction = _ref.direction,
      width = _ref.width,
      height = _ref.height,
      _uid = _ref._uid;


  var transform = void 0;

  switch (direction) {
    case POSITION_TOP:
      transform = 'translate(' + width + ', 0) rotate(90)';
      break;

    case POSITION_RIGHT:
      transform = 'translate(' + width + ', ' + height + ') rotate(180)';
      break;

    case POSITION_BOTTOM:
      transform = 'translate(0, ' + height + ') rotate(270)';
      break;

    case POSITION_LEFT:
      transform = " ";
      break;
  }

  var gradientID = prefixID + '_gradient_' + _uid;
  var maskID = prefixID + '_mask_' + _uid;

  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    'g',
    null,
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      'defs',
      null,
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        'linearGradient',
        { id: gradientID, x1: '0%', y1: '0%', x2: '100%', y2: '0%', spreadMethod: 'pad' },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('stop', { offset: '0%', stopColor: '#fff', stopOpacity: '0.8' }),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('stop', { offset: '100%', stopColor: '#000', stopOpacity: '0.5' })
      ),
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        'mask',
        { id: maskID, x: '0', y: '0', width: '20', height: Math.max(width, height) },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('rect', { x: '0', y: '0', width: '20', height: Math.max(width, height),
          style: { stroke: "none", fill: 'url(#' + gradientID + ')' } })
      )
    ),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('rect', { x: '0', y: '0', width: '20', height: Math.max(width, height),
      style: { stroke: "none", fill: "#000", mask: 'url(#' + maskID + ')' }, transform: transform })
  );
}

BorderGradient.propTypes = {
  direction: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([POSITION_TOP, POSITION_RIGHT, POSITION_BOTTOM, POSITION_LEFT]).isRequired,
  width: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
  height: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired
};

/* harmony default export */ var border_gradient = (RandomUID_RandomUID(BorderGradient));
// CONCATENATED MODULE: ./src/ui/selection.jsx




function Selection(_ref) {
  var startX = _ref.startX,
      startY = _ref.startY,
      endX = _ref.endX,
      endY = _ref.endY;

  if (!startX || !startY || !endX || !endY) return null;

  var box = calculateBox({ x: startX, y: startY }, { x: endX, y: endY });

  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('rect', {
    stroke: '#969FFF',
    strokeOpacity: 0.7,
    fill: '#F3F4FF',
    fillOpacity: 0.7,
    x: box.x,
    y: box.y,
    width: box.width,
    height: box.height,
    style: { pointerEvents: "none" } });
}

Selection.propTypes = {
  startX: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
  startY: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
  endX: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
  endY: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired
};
// CONCATENATED MODULE: ./src/ui-toolbar/icon-cursor.jsx


//credits https://materialdesignicons.com/icon/cursor-default-outline

function IconCursor() {
  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    "svg",
    { width: 24, height: 24, stroke: "currentColor" },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
      d: "M10.07,14.27C10.57,14.03 11.16,14.25 11.4,14.75L13.7,19.74L15.5,18.89L13.19,13.91C12.95,13.41 13.17,12.81 13.67,12.58L13.95,12.5L16.25,12.05L8,5.12V15.9L9.82,14.43L10.07,14.27M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z" })
  );
}
// CONCATENATED MODULE: ./src/ui-toolbar/icon-pan.jsx


//https://materialdesignicons.com/icon/cursor-move

function IconPan() {
  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    "svg",
    { width: 24, height: 24, stroke: "currentColor" },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
      d: "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z" })
  );
}
// CONCATENATED MODULE: ./src/ui-toolbar/icon-zoom-in.jsx


//https://material.io/icons/#ic_zoom_in

function IconZoomIn() {
  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    "svg",
    { width: 24, height: 24, stroke: "currentColor" },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      "g",
      null,
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
    )
  );
}
// CONCATENATED MODULE: ./src/ui-toolbar/icon-zoom-out.jsx


//https://material.io/icons/#ic_zoom_out

function IconZoomOut() {
  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    "svg",
    { width: 24, height: 24, stroke: "currentColor" },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" })
  );
}
// CONCATENATED MODULE: ./src/ui-toolbar/icon-fit.jsx


//credits https://materialdesignicons.com/icon/cursor-default-outline

function IconFit() {
  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    "svg",
    { width: 24, height: 24, stroke: "currentColor" },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
      d: "M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z" })
  );
}
// CONCATENATED MODULE: ./src/ui-toolbar/toolbar-button.jsx
var toolbar_button_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function toolbar_button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function toolbar_button_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function toolbar_button_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var toolbar_button_ToolbarButton = function (_React$Component) {
  toolbar_button_inherits(ToolbarButton, _React$Component);

  function ToolbarButton(props) {
    toolbar_button_classCallCheck(this, ToolbarButton);

    var _this = toolbar_button_possibleConstructorReturn(this, (ToolbarButton.__proto__ || Object.getPrototypeOf(ToolbarButton)).call(this, props));

    _this.state = { hover: false };
    return _this;
  }

  toolbar_button_createClass(ToolbarButton, [{
    key: 'change',
    value: function change(event) {
      event.preventDefault();
      event.stopPropagation();

      switch (event.type) {
        case 'mouseenter':
        case 'touchstart':
          this.setState({ hover: true });
          break;
        case 'mouseleave':
        case 'touchend':
        case 'touchcancel':
          this.setState({ hover: false });
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = {
        display: "block",
        width: "24px",
        height: "24px",
        margin: [POSITION_TOP, POSITION_BOTTOM].indexOf(this.props.toolbarPosition) >= 0 ? "2px 1px" : "1px 2px",
        color: this.props.active || this.state.hover ? '#1CA6FC' : '#FFF',
        transition: "color 200ms ease",
        background: "none",
        padding: "0px",
        border: "0px",
        outline: "0px",
        cursor: "pointer"
      };

      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        'button',
        {
          onMouseEnter: function onMouseEnter(e) {
            return _this2.change(e);
          },
          onMouseLeave: function onMouseLeave(e) {
            return _this2.change(e);
          },

          onTouchStart: function onTouchStart(e) {
            _this2.change(e);
            _this2.props.onClick(e);
          },
          onTouchEnd: function onTouchEnd(e) {
            return _this2.change(e);
          },
          onTouchCancel: function onTouchCancel(e) {
            return _this2.change(e);
          },

          onClick: this.props.onClick,

          style: style,
          title: this.props.title,
          name: this.props.name,
          role: 'button',
          type: 'button'
        },
        this.props.children
      );
    }
  }]);

  return ToolbarButton;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var toolbar_button = (toolbar_button_ToolbarButton);


toolbar_button_ToolbarButton.propTypes = {
  title: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string.isRequired,
  name: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string.isRequired,
  toolbarPosition: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string.isRequired,
  onClick: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func.isRequired,
  active: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.bool.isRequired
};
// CONCATENATED MODULE: ./src/ui-toolbar/toolbar.jsx












function Toolbar(_ref) {
  var tool = _ref.tool,
      value = _ref.value,
      onChangeValue = _ref.onChangeValue,
      onChangeTool = _ref.onChangeTool,
      position = _ref.position,
      SVGAlignX = _ref.SVGAlignX,
      SVGAlignY = _ref.SVGAlignY;


  var handleChangeTool = function handleChangeTool(event, tool) {
    onChangeTool(tool);
    event.stopPropagation();
    event.preventDefault();
  };

  var handleFit = function handleFit(event) {
    onChangeValue(zoom_fitToViewer(value, SVGAlignX, SVGAlignY));
    event.stopPropagation();
    event.preventDefault();
  };

  var isHorizontal = [POSITION_TOP, POSITION_BOTTOM].indexOf(position) >= 0;

  var style = {
    //position
    position: "absolute",
    transform: [POSITION_TOP, POSITION_BOTTOM].indexOf(position) >= 0 ? "translate(-50%, 0px)" : "none",
    top: [POSITION_LEFT, POSITION_RIGHT, POSITION_TOP].indexOf(position) >= 0 ? "5px" : "unset",
    left: [POSITION_TOP, POSITION_BOTTOM].indexOf(position) >= 0 ? "50%" : POSITION_LEFT === position ? "5px" : "unset",
    right: [POSITION_RIGHT].indexOf(position) >= 0 ? "5px" : "unset",
    bottom: [POSITION_BOTTOM].indexOf(position) >= 0 ? "5px" : "unset",

    //inner styling
    backgroundColor: "rgba(19, 20, 22, 0.90)",
    borderRadius: "2px",
    display: "flex",
    flexDirection: isHorizontal ? "row" : "column",
    padding: isHorizontal ? "1px 2px" : "2px 1px"
  };

  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    'div',
    { style: style, role: 'toolbar' },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      toolbar_button,
      {
        toolbarPosition: position,
        active: tool === TOOL_NONE,
        name: 'unselect-tools',
        title: 'Selection',
        onClick: function onClick(event) {
          return handleChangeTool(event, TOOL_NONE);
        } },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(IconCursor, null)
    ),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      toolbar_button,
      {
        toolbarPosition: position,
        active: tool === TOOL_PAN,
        name: 'select-tool-pan',
        title: 'Pan',
        onClick: function onClick(event) {
          return handleChangeTool(event, TOOL_PAN);
        } },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(IconPan, null)
    ),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      toolbar_button,
      {
        toolbarPosition: position,
        active: tool === TOOL_ZOOM_IN,
        name: 'select-tool-zoom-in',
        title: 'Zoom in',
        onClick: function onClick(event) {
          return handleChangeTool(event, TOOL_ZOOM_IN);
        } },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(IconZoomIn, null)
    ),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      toolbar_button,
      {
        toolbarPosition: position,
        active: tool === TOOL_ZOOM_OUT,
        name: 'select-tool-zoom-out',
        title: 'Zoom out',
        onClick: function onClick(event) {
          return handleChangeTool(event, TOOL_ZOOM_OUT);
        } },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(IconZoomOut, null)
    ),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      toolbar_button,
      {
        toolbarPosition: position,
        active: false,
        name: 'fit-to-viewer',
        title: 'Fit to viewer',
        onClick: function onClick(event) {
          return handleFit(event);
        } },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(IconFit, null)
    )
  );
}

Toolbar.propTypes = {
  position: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([POSITION_TOP, POSITION_RIGHT, POSITION_BOTTOM, POSITION_LEFT]).isRequired,
  tool: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string.isRequired,
  value: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.object.isRequired,
  onChangeValue: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func.isRequired,
  onChangeTool: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func.isRequired,
  SVGAlignX: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([ALIGN_CENTER, ALIGN_LEFT, ALIGN_RIGHT]),
  SVGAlignY: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([ALIGN_CENTER, ALIGN_TOP, ALIGN_BOTTOM])
};

Toolbar.defaultProps = {
  SVGAlignX: ALIGN_LEFT,
  SVGAlignY: ALIGN_TOP
};
// CONCATENATED MODULE: ./src/ui/detect-touch.js
//http://stackoverflow.com/a/4819886/1398836

function isTouchDevice() {
  return 'ontouchstart' in window // works on most browsers
  || navigator.maxTouchPoints; // works on IE10/11 and Surface
};
// CONCATENATED MODULE: ./src/ui-miniature/icon-arrow.jsx




//credits https://materialdesignicons.com/icon/chevron-up

function IconArrow(_ref) {
  var open = _ref.open,
      position = _ref.position;


  var transform = 0;

  switch (position) {
    case POSITION_LEFT:
      transform = open ? "rotate(225, 12, 13)" : "rotate(45, 12, 13)";
      break;

    case POSITION_RIGHT:
      transform = transform = open ? "rotate(135, 12, 13)" : "rotate(-45, 12, 13)";
  }

  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    'svg',
    { width: 24, height: 24, stroke: 'currentColor' },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      'g',
      { transform: transform },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('path', { fill: '#000000', d: 'M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z' })
    )
  );
}

IconArrow.propTypes = {
  open: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.bool.isRequired,
  position: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([POSITION_RIGHT, POSITION_LEFT]).isRequired
};
// CONCATENATED MODULE: ./src/ui-miniature/miniature-toggle-button.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MiniatureToggleButton(_ref) {
  var _style;

  var value = _ref.value,
      onChangeValue = _ref.onChangeValue,
      position = _ref.position;

  var style = (_style = {
    width: "24px",
    height: "24px",
    display: "block",
    position: "absolute",
    bottom: 0
  }, _defineProperty(_style, position === POSITION_LEFT ? 'left' : 'right', '0px'), _defineProperty(_style, 'background', "rgba(19, 20, 22, 0.901961)"), _defineProperty(_style, 'border', 0), _defineProperty(_style, 'padding', 0), _defineProperty(_style, 'outline', 0), _defineProperty(_style, 'color', "#fff"), _style);

  var action = value.miniatureOpen ? miniature_closeMiniature : miniature_openMiniature;

  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    'button',
    { role: 'button', type: 'button', style: style, onClick: function onClick(event) {
        return onChangeValue(action(value));
      } },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(IconArrow, { open: value.miniatureOpen, position: position })
  );
}

MiniatureToggleButton.propTypes = {
  value: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.object.isRequired,
  onChangeValue: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func.isRequired,
  position: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([POSITION_RIGHT, POSITION_LEFT]).isRequired
};
// CONCATENATED MODULE: ./src/ui-miniature/miniature-mask.jsx




var miniature_mask_prefixID = 'react-svg-pan-zoom_miniature';

function MiniatureMask(_ref) {
  var SVGWidth = _ref.SVGWidth,
      SVGHeight = _ref.SVGHeight,
      x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2,
      zoomToFit = _ref.zoomToFit,
      _uid = _ref._uid;

  var maskID = miniature_mask_prefixID + '_mask_' + _uid;

  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    'g',
    null,
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      'defs',
      null,
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        'mask',
        { id: maskID },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('rect', { x: '0', y: '0', width: SVGWidth, height: SVGHeight, fill: '#ffffff' }),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('rect', { x: x1, y: y1, width: x2 - x1, height: y2 - y1 })
      )
    ),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('rect', {
      x: '0',
      y: '0',
      width: SVGWidth,
      height: SVGHeight,
      style: {
        stroke: "none",
        fill: "#000",
        mask: 'url(#' + maskID + ')',
        opacity: 0.4
      }
    })
  );
}

MiniatureMask.propTypes = {
  SVGWidth: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
  SVGHeight: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
  x1: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
  y1: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
  x2: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
  y2: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
  zoomToFit: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired
};

/* harmony default export */ var miniature_mask = (RandomUID_RandomUID(MiniatureMask));
// CONCATENATED MODULE: ./src/ui-miniature/miniature.jsx
var miniature_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function miniature_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var min = Math.min,
    max = Math.max;


function Miniature(props) {
  var _style;

  var value = props.value,
      onChangeValue = props.onChangeValue,
      position = props.position,
      children = props.children,
      background = props.background,
      SVGBackground = props.SVGBackground,
      miniatureWidth = props.width,
      miniatureHeight = props.height;
  var SVGWidth = value.SVGWidth,
      SVGHeight = value.SVGHeight,
      viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;


  var ratio = SVGHeight / SVGWidth;

  var zoomToFit = ratio >= 1 ? miniatureHeight / SVGHeight : miniatureWidth / SVGWidth;

  var _applyToPoints = Object(transformation_matrix_min["applyToPoints"])(Object(transformation_matrix_min["inverse"])(value), [{ x: 0, y: 0 }, { x: viewerWidth, y: viewerHeight }]),
      _applyToPoints2 = miniature_slicedToArray(_applyToPoints, 2),
      _applyToPoints2$ = _applyToPoints2[0],
      x1 = _applyToPoints2$.x,
      y1 = _applyToPoints2$.y,
      _applyToPoints2$2 = _applyToPoints2[1],
      x2 = _applyToPoints2$2.x,
      y2 = _applyToPoints2$2.y;

  var width = void 0,
      height = void 0;
  if (value.miniatureOpen) {
    width = miniatureWidth;
    height = miniatureHeight;
  } else {
    width = 24;
    height = 24;
  }

  var style = (_style = {
    position: "absolute",
    overflow: "hidden",
    outline: "1px solid rgba(19, 20, 22, 0.90)",
    transition: "width 200ms ease, height 200ms ease, bottom 200ms ease",
    width: width + "px",
    height: height + "px",
    bottom: "6px"
  }, miniature_defineProperty(_style, position === POSITION_LEFT ? 'left' : 'right', "6px"), miniature_defineProperty(_style, 'background', background), _style);

  var centerTranslation = ratio >= 1 ? 'translate(' + (miniatureWidth - SVGWidth * zoomToFit) / 2 + ', 0)' : 'translate(0, ' + (miniatureHeight - SVGHeight * zoomToFit) / 2 + ')';

  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    'div',
    { role: 'navigation', style: style },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      'svg',
      {
        width: miniatureWidth,
        height: miniatureHeight,
        style: { pointerEvents: "none" } },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        'g',
        { transform: centerTranslation },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          'g',
          { transform: 'scale(' + zoomToFit + ', ' + zoomToFit + ')' },
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('rect', {
            fill: SVGBackground,
            x: 0,
            y: 0,
            width: value.SVGWidth,
            height: value.SVGHeight }),
          children,
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(miniature_mask, {
            SVGWidth: SVGWidth,
            SVGHeight: SVGHeight,
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            zoomToFit: zoomToFit
          })
        )
      )
    ),
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(MiniatureToggleButton, { value: value, onChangeValue: onChangeValue, position: position })
  );
}

Miniature.propTypes = {
  position: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([POSITION_RIGHT, POSITION_LEFT]).isRequired,
  value: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.object.isRequired,
  onChangeValue: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func.isRequired,
  background: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string.isRequired,
  SVGBackground: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string.isRequired,
  width: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired
};
// CONCATENATED MODULE: ./src/viewer.js
var viewer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var viewer_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function viewer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function viewer_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function viewer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





//events


//features








//ui









var viewer_ReactSVGPanZoom = function (_React$Component) {
  viewer_inherits(ReactSVGPanZoom, _React$Component);

  function ReactSVGPanZoom(props, context) {
    viewer_classCallCheck(this, ReactSVGPanZoom);

    var _this = viewer_possibleConstructorReturn(this, (ReactSVGPanZoom.__proto__ || Object.getPrototypeOf(ReactSVGPanZoom)).call(this, props, context));

    var _this$props = _this.props,
        tool = _this$props.tool,
        value = _this$props.value,
        viewerWidth = _this$props.width,
        viewerHeight = _this$props.height,
        scaleFactorMin = _this$props.scaleFactorMin,
        scaleFactorMax = _this$props.scaleFactorMax,
        children = _this$props.children;
    var _children$props = children.props,
        SVGWidth = _children$props.width,
        SVGHeight = _children$props.height;


    _this.state = {
      value: value ? value : getDefaultValue(viewerWidth, viewerHeight, SVGWidth, SVGHeight, scaleFactorMin, scaleFactorMax),
      tool: tool ? tool : TOOL_NONE
    };
    _this.ViewerDOM = null;

    _this.autoPanLoop = _this.autoPanLoop.bind(_this);
    return _this;
  }

  viewer_createClass(ReactSVGPanZoom, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = this.getValue();
      var needUpdate = false;
      var nextValue = value;

      if (value.viewerWidth !== nextProps.width || value.viewerHeight !== nextProps.height) {
        nextValue = setViewerSize(nextValue, nextProps.width, nextProps.height);
        needUpdate = true;
      }

      var _nextProps$children$p = nextProps.children.props,
          SVGWidth = _nextProps$children$p.width,
          SVGHeight = _nextProps$children$p.height;

      if (value.SVGWidth !== SVGWidth || value.SVGHeight !== SVGHeight) {
        nextValue = setSVGSize(nextValue, SVGWidth, SVGHeight);
        needUpdate = true;
      }

      if (value.scaleFactorMin !== nextProps.scaleFactorMin || value.scaleFactorMax !== nextProps.scaleFactorMax) {
        nextValue = setZoomLevels(nextValue, nextProps.scaleFactorMin, nextProps.scaleFactorMax);
        needUpdate = true;
      }

      if (needUpdate) {
        this.setValue(nextValue);
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.props.value ? this.props.value : this.state.value;
    }
  }, {
    key: 'getTool',
    value: function getTool() {
      return this.props.tool ? this.props.tool : this.state.tool;
    }
  }, {
    key: 'getSvgStyle',
    value: function getSvgStyle(cursor) {
      var style = { display: 'block' };

      if (cursor) {
        style.cursor = cursor;
      }

      if (this.props.detectPinchGesture || [TOOL_PAN, TOOL_AUTO].indexOf(this.getTool()) !== -1) {
        style.touchAction = 'none';
      }

      return style;
    }
  }, {
    key: 'setValue',
    value: function setValue(nextValue) {
      var _props = this.props,
          onChangeValue = _props.onChangeValue,
          onZoom = _props.onZoom,
          onPan = _props.onPan;

      this.setState({ value: nextValue });
      if (onChangeValue) onChangeValue(nextValue);
      if (nextValue.lastAction) {
        if (onZoom && nextValue.lastAction === ACTION_ZOOM) onZoom(nextValue);
        if (onPan && nextValue.lastAction === ACTION_PAN) onPan(nextValue);
      }
    }
  }, {
    key: 'pan',
    value: function pan(SVGDeltaX, SVGDeltaY) {
      var nextValue = pan_pan(this.getValue(), SVGDeltaX, SVGDeltaY);
      this.setValue(nextValue);
    }
  }, {
    key: 'zoom',
    value: function zoom(SVGPointX, SVGPointY, scaleFactor) {
      var nextValue = zoom_zoom(this.getValue(), SVGPointX, SVGPointY, scaleFactor);
      this.setValue(nextValue);
    }
  }, {
    key: 'fitSelection',
    value: function fitSelection(selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight) {
      var nextValue = zoom_fitSelection(this.getValue(), selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight);
      this.setValue(nextValue);
    }
  }, {
    key: 'fitToViewer',
    value: function fitToViewer() {
      var SVGAlignX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ALIGN_LEFT;
      var SVGAlignY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ALIGN_TOP;

      var nextValue = zoom_fitToViewer(this.getValue(), SVGAlignX, SVGAlignY);
      this.setValue(nextValue);
    }
  }, {
    key: 'zoomOnViewerCenter',
    value: function zoomOnViewerCenter(scaleFactor) {
      var nextValue = zoom_zoomOnViewerCenter(this.getValue(), scaleFactor);
      this.setValue(nextValue);
    }
  }, {
    key: 'setPointOnViewerCenter',
    value: function setPointOnViewerCenter(SVGPointX, SVGPointY, zoomLevel) {
      var nextValue = common_setPointOnViewerCenter(this.getValue(), SVGPointX, SVGPointY, zoomLevel);
      this.setValue(nextValue);
    }
  }, {
    key: 'reset',
    value: function reset() {
      var nextValue = common_reset(this.getValue());
      this.setValue(nextValue);
    }
  }, {
    key: 'changeTool',
    value: function changeTool(tool) {
      this.setState({ tool: tool });
      if (this.props.onChangeTool) this.props.onChangeTool(tool);
    }
  }, {
    key: 'openMiniature',
    value: function openMiniature() {
      var nextValue = miniature_openMiniature(this.getValue());
      this.setValue(nextValue);
    }
  }, {
    key: 'closeMiniature',
    value: function closeMiniature() {
      var nextValue = miniature_closeMiniature(this.getValue());
      this.setValue(nextValue);
    }
  }, {
    key: 'handleViewerEvent',
    value: function handleViewerEvent(event) {
      var props = this.props,
          value = this.state.value,
          ViewerDOM = this.ViewerDOM;


      if (!([TOOL_NONE, TOOL_AUTO].indexOf(this.getTool()) >= 0)) return;
      if (event.target === ViewerDOM) return;

      var eventsHandler = {
        click: props.onClick,
        dblclick: props.onDoubleClick,

        mousemove: props.onMouseMove,
        mouseup: props.onMouseUp,
        mousedown: props.onMouseDown,

        touchstart: props.onTouchStart,
        touchmove: props.onTouchMove,
        touchend: props.onTouchEnd,
        touchcancel: props.onTouchCancel
      };

      var onEventHandler = eventsHandler[event.type];
      if (!onEventHandler) return;

      onEventHandler(event_factory(event, value, ViewerDOM));
    }
  }, {
    key: 'autoPanLoop',
    value: function autoPanLoop() {
      var coords = { x: this.state.viewerX, y: this.state.viewerY };
      var nextValue = onInterval(null, this.ViewerDOM, this.getTool(), this.getValue(), this.props, coords);

      if (this.getValue() !== nextValue) {
        this.setValue(nextValue);
      }

      if (this.autoPanIsRunning) {
        requestAnimationFrame(this.autoPanLoop);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var props = this.props,
          state = this.state;

      if (props.onChangeValue) props.onChangeValue(state.value);

      this.autoPanIsRunning = true;
      requestAnimationFrame(this.autoPanLoop);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.autoPanIsRunning = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props,
          _state = this.state,
          viewerX = _state.viewerX,
          viewerY = _state.viewerY;

      var tool = this.getTool();
      var value = this.getValue();
      var CustomToolbar = props.customToolbar,
          CustomMiniature = props.customMiniature;


      var panningWithToolAuto = tool === TOOL_AUTO && value.mode === MODE_PANNING && value.startX !== value.endX && value.startY !== value.endY;

      var cursor = void 0;

      if (tool === TOOL_PAN) cursor = cursor_polyfill(value.mode === MODE_PANNING ? 'grabbing' : 'grab');

      if (tool === TOOL_ZOOM_IN) cursor = cursor_polyfill('zoom-in');

      if (tool === TOOL_ZOOM_OUT) cursor = cursor_polyfill('zoom-out');

      if (panningWithToolAuto) cursor = cursor_polyfill('grabbing');

      var blockChildEvents = [TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT].indexOf(tool) >= 0;
      blockChildEvents = false//blockChildEvents || panningWithToolAuto;

      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        'div',
        {
          style: viewer_extends({ position: "relative", width: value.viewerWidth, height: value.viewerHeight }, props.style),
          className: this.props.className },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          'svg',
          {
            ref: function ref(ViewerDOM) {
              return _this2.ViewerDOM = ViewerDOM;
            },
            width: value.viewerWidth,
            height: value.viewerHeight,
            style: this.getSvgStyle(cursor),

            onMouseDown: function onMouseDown(event) {
              var nextValue = interactions_onMouseDown(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
              if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
              _this2.handleViewerEvent(event);
            },
            onMouseMove: function onMouseMove(event) {
              var _ViewerDOM$getBoundin = _this2.ViewerDOM.getBoundingClientRect(),
                  left = _ViewerDOM$getBoundin.left,
                  top = _ViewerDOM$getBoundin.top;

              var x = event.clientX - Math.round(left);
              var y = event.clientY - Math.round(top);

              var nextValue = interactions_onMouseMove(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props, { x: x, y: y });
              if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
              _this2.setState({ viewerX: x, viewerY: y });
              _this2.handleViewerEvent(event);
            },
            onMouseUp: function onMouseUp(event) {
              var nextValue = interactions_onMouseUp(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
              if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
              _this2.handleViewerEvent(event);
            },

            onClick: function onClick(event) {
              _this2.handleViewerEvent(event);
            },
            onDoubleClick: function onDoubleClick(event) {
              var nextValue = interactions_onDoubleClick(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
              if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
              _this2.handleViewerEvent(event);
            },

            onWheel: function onWheel(event) {
              var nextValue = interactions_onWheel(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
              if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
            },

            onMouseEnter: function onMouseEnter(event) {
              if (isTouchDevice()) return;
              var nextValue = onMouseEnterOrLeave(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
              if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
            },
            onMouseLeave: function onMouseLeave(event) {
              var nextValue = onMouseEnterOrLeave(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
              if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
            },

            onTouchStart: function onTouchStart(event) {
              var nextValue = interactions_touch_onTouchStart(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
              if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
              _this2.handleViewerEvent(event);
            },
            onTouchMove: function onTouchMove(event) {
              var nextValue = interactions_touch_onTouchMove(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
              if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
              _this2.handleViewerEvent(event);
            },
            onTouchEnd: function onTouchEnd(event) {
              var nextValue = interactions_touch_onTouchEnd(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
              if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
              _this2.handleViewerEvent(event);
            },
            onTouchCancel: function onTouchCancel(event) {
              var nextValue = interactions_touch_onTouchCancel(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
              if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
              _this2.handleViewerEvent(event);
            } },
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('rect', {
            fill: props.background,
            x: 0,
            y: 0,
            width: value.viewerWidth,
            height: value.viewerHeight,
            style: { pointerEvents: "none" }
          }),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
            'g',
            {
              transform: Object(transformation_matrix_min["toSVG"])(value),
              style: blockChildEvents ? { pointerEvents: "none" } : {} },
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('rect', {
              fill: this.props.SVGBackground,
              style: this.props.SVGStyle,
              x: 0,
              y: 0,
              width: value.SVGWidth,
              height: value.SVGHeight }),
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              'g',
              null,
              props.children.props.children
            )
          ),
          !([TOOL_NONE, TOOL_AUTO].indexOf(tool) >= 0 && props.detectAutoPan && value.focus) ? null : external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
            'g',
            { style: { pointerEvents: "none" } },
            !(viewerY <= 20) ? null : external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(border_gradient, { direction: POSITION_TOP, width: value.viewerWidth, height: value.viewerHeight }),
            !(value.viewerWidth - viewerX <= 20) ? null : external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(border_gradient, { direction: POSITION_RIGHT, width: value.viewerWidth, height: value.viewerHeight }),
            !(value.viewerHeight - viewerY <= 20) ? null : external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(border_gradient, { direction: POSITION_BOTTOM, width: value.viewerWidth, height: value.viewerHeight }),
            !(value.focus && viewerX <= 20) ? null : external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(border_gradient, { direction: POSITION_LEFT, width: value.viewerWidth, height: value.viewerHeight })
          ),
          !(value.mode === MODE_ZOOMING) ? null : external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Selection, { startX: value.startX, startY: value.startY, endX: value.endX, endY: value.endY })
        ),
        props.toolbarPosition === POSITION_NONE ? null : external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(CustomToolbar, viewer_extends({
          position: props.toolbarPosition,
          value: value,
          onChangeValue: function onChangeValue(value) {
            return _this2.setValue(value);
          },
          tool: tool,
          onChangeTool: function onChangeTool(tool) {
            return _this2.changeTool(tool);
          }
        }, this.props.toolbarProps)),
        props.miniaturePosition === POSITION_NONE ? null : external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          CustomMiniature,
          {
            position: props.miniaturePosition,
            value: value,
            onChangeValue: function onChangeValue(value) {
              return _this2.setValue(value);
            },
            SVGBackground: this.props.SVGBackground,
            background: this.props.miniatureBackground,
            width: this.props.miniatureWidth,
            height: this.props.miniatureHeight
          },
          props.children.props.children
        )
      );
    }
  }]);

  return ReactSVGPanZoom;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var viewer = (viewer_ReactSVGPanZoom);


viewer_ReactSVGPanZoom.propTypes = {
  //width of the viewer displayed on screen
  width: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,

  //height of the viewer displayed on screen
  height: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,

  //background of the viewer
  background: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string,

  //background of the svg
  SVGBackground: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string,

  //style of the svg
  SVGStyle: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.object,

  //value of the viewer (current point of view)
  value: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.shape({
    version: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([2]).isRequired,
    mode: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([MODE_IDLE, MODE_PANNING, MODE_ZOOMING]).isRequired,
    focus: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.bool.isRequired,
    a: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
    b: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
    c: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
    d: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
    e: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
    f: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
    viewerWidth: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
    viewerHeight: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
    SVGWidth: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
    SVGHeight: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number.isRequired,
    startX: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number,
    startY: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number,
    endX: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number,
    endY: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number,
    miniatureOpen: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.bool.isRequired
  }),

  //CSS style of the Viewer
  style: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.object,

  //className of the Viewer
  className: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string,

  //perform zoom operation on mouse scroll
  detectWheel: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.bool,

  //perform PAN if the mouse is on viewer border
  detectAutoPan: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.bool,

  //perform zoom operation on pinch gesture
  detectPinchGesture: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.bool,

  //toolbar position
  toolbarPosition: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([POSITION_NONE, POSITION_TOP, POSITION_RIGHT, POSITION_BOTTOM, POSITION_LEFT]),

  //handler something changed
  onChangeValue: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func,

  //handler tool changed
  onChangeTool: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func,

  //handler zoom level changed
  onZoom: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func,

  //handler pan action performed
  onPan: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func,

  //handler click
  onClick: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func,

  //handler double click
  onDoubleClick: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func,

  //handler mouseup
  onMouseUp: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func,

  //handler mousemove
  onMouseMove: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func,

  //handler mousedown
  onMouseDown: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func,

  //if disabled the user can move the image outside the viewer
  preventPanOutside: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.bool,

  //how much scale in or out
  scaleFactor: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number,

  //how much scale in or out on mouse wheel (requires detectWheel enabled)
  scaleFactorOnWheel: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number,

  // maximum amount of scale a user can zoom in to
  scaleFactorMax: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number,

  // minimum amount of a scale a user can zoom out of
  scaleFactorMin: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number,

  //current active tool (TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT)
  tool: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([TOOL_AUTO, TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT]),

  //modifier keys //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
  modifierKeys: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.array,

  //override toolbar component
  customToolbar: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.element, external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func]),

  //miniature position
  miniaturePosition: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([POSITION_NONE, POSITION_RIGHT, POSITION_LEFT]),

  //miniature height
  miniatureBackground: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.string,

  //miniature width
  miniatureWidth: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number,

  //miniature height
  miniatureHeight: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.number,

  //override miniature component
  customMiniature: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.element, external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.func]),

  //Turn off zoom on double click
  disableDoubleClickZoomWithToolAuto: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.bool,

  //toolbar props
  toolbarProps: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.shape({
    SVGAlignX: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([ALIGN_CENTER, ALIGN_LEFT, ALIGN_RIGHT]),
    SVGAlignY: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_default.a.oneOf([ALIGN_CENTER, ALIGN_TOP, ALIGN_BOTTOM])
  }),

  //accept only one node SVG
  children: function children(props, propName, componentName) {
    // Only accept a single child, of the appropriate type
    //credits: http://www.mattzabriskie.com/blog/react-validating-children
    var prop = props[propName];
    var types = ['svg'];
    if (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.count(prop) !== 1 || types.indexOf(prop.type) === -1) {
      return new Error('`' + componentName + '` ' + 'should have a single child of the following types: ' + ' `' + types.join('`, `') + '`.');
    }
    if (!prop.props.hasOwnProperty('width') || !prop.props.hasOwnProperty('height')) {
      return new Error('SVG should have props `width` and `height`');
    }
  }
};

viewer_ReactSVGPanZoom.defaultProps = {
  value: null,
  tool: null,
  style: {},
  background: "#616264",
  SVGBackground: "#fff",
  SVGStyle: {},
  detectWheel: true,
  detectAutoPan: true,
  detectPinchGesture: true,
  toolbarPosition: POSITION_RIGHT,
  modifierKeys: ["Alt", "Shift", "Control"],
  customToolbar: Toolbar,
  preventPanOutside: true,
  scaleFactor: 1.1,
  scaleFactorOnWheel: 1.06,
  miniaturePosition: POSITION_LEFT,
  miniatureWidth: 100,
  miniatureHeight: 80,
  miniatureBackground: "#616264",
  customMiniature: Miniature,
  disableZoomWithToolAuto: false,
  onZoom: null,
  onPan: null,
  toolbarProps: {}
};
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewer", function() { return Viewer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ReactSVGPanZoom", function() { return viewer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Miniature", function() { return Miniature; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "setPointOnViewerCenter", function() { return common_setPointOnViewerCenter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "reset", function() { return common_reset; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "pan", function() { return pan_pan; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "zoom", function() { return zoom_zoom; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "fitSelection", function() { return zoom_fitSelection; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "fitToViewer", function() { return zoom_fitToViewer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "zoomOnViewerCenter", function() { return zoom_zoomOnViewerCenter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "openMiniature", function() { return miniature_openMiniature; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "closeMiniature", function() { return miniature_closeMiniature; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MODE_IDLE", function() { return MODE_IDLE; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MODE_PANNING", function() { return MODE_PANNING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MODE_ZOOMING", function() { return MODE_ZOOMING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TOOL_AUTO", function() { return TOOL_AUTO; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TOOL_NONE", function() { return TOOL_NONE; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TOOL_PAN", function() { return TOOL_PAN; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TOOL_ZOOM_IN", function() { return TOOL_ZOOM_IN; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TOOL_ZOOM_OUT", function() { return TOOL_ZOOM_OUT; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "POSITION_NONE", function() { return POSITION_NONE; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "POSITION_TOP", function() { return POSITION_TOP; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "POSITION_RIGHT", function() { return POSITION_RIGHT; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "POSITION_BOTTOM", function() { return POSITION_BOTTOM; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "POSITION_LEFT", function() { return POSITION_LEFT; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ACTION_ZOOM", function() { return ACTION_ZOOM; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ACTION_PAN", function() { return ACTION_PAN; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ALIGN_CENTER", function() { return ALIGN_CENTER; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ALIGN_LEFT", function() { return ALIGN_LEFT; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ALIGN_RIGHT", function() { return ALIGN_RIGHT; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ALIGN_TOP", function() { return ALIGN_TOP; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ALIGN_BOTTOM", function() { return ALIGN_BOTTOM; });









var Viewer = function Viewer() {
  var msg = "HEY! You are trying to use an older version of ReactSVGPanZoom. " + "Read here https://github.com/chrvadala/react-svg-pan-zoom/blob/master/docs/migrate-from-v1-to-v2.md";

  console.error(msg);
  return null;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-svg-pan-zoom.js.map