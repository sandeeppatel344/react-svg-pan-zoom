'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Selection;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _calculateBox = require('../utils/calculateBox');

var _calculateBox2 = _interopRequireDefault(_calculateBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Selection(_ref) {
  var startX = _ref.startX,
      startY = _ref.startY,
      endX = _ref.endX,
      endY = _ref.endY;

  if (!startX || !startY || !endX || !endY) return null;

  var box = (0, _calculateBox2.default)({ x: startX, y: startY }, { x: endX, y: endY });

  return _react2.default.createElement('rect', {
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
  startX: _propTypes2.default.number.isRequired,
  startY: _propTypes2.default.number.isRequired,
  endX: _propTypes2.default.number.isRequired,
  endY: _propTypes2.default.number.isRequired
};