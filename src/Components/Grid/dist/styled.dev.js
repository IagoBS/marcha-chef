"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.Row = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nfloat: left;\nposition: relative;\nmin-height: 1px;\nbox-sizing: border-box;\nwidth: 100%;\n@media only screen and (max-width: 767) {\n  width: ", "%;\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  float: left;\n  &:before,\n  &:after {\n    content: '';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1500px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto; /* 1 */\n  margin-left: auto; /* 1 */\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: '';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Row = _styledComponents["default"].div(_templateObject2());

exports.Row = Row;

var Column = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.grid ? props.grid / 12 * 100 : '8:33';
});

exports.Column = Column;