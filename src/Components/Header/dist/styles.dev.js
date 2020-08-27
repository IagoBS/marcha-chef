"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = exports.Perfil = exports.Cart = exports.Side = exports.List = exports.Navigation = exports.Content = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-left: 32px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  bottom: 95.53%;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2;\n  justify-content: center;\n\n  img {\n    height: 34px;\n    width: 35px;\n    border-radius: 50%;\n  }\n  strong {\n    display: flex;\n    align-items: center;\n    color: '#fff';\n    font-weight: bold;\n  }\n  &:hover {\n    opacity: 0.7;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2;\n  margin-right: 24px;\n  &:hover {\n    opacity: 0.7;\n  }\n  div {\n    text-align: right;\n    margin-right: 10px;\n  }\n  strong {\n    display: block;\n    font-size: 16px;\n    color: #5c5c5c;\n  }\n  span {\n    font-size: 12px;\n    color: #a6aab4;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2;\n  margin-right: 48px;\n  &:hover {\n    opacity: 0.7;\n  }\n  color: #ff8a00;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');\n  ul {\n    display: flex;\n    list-style: none;\n  }\n  li {\n    display: flex;\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n    font-weight: bold;\n    font-size: 16px;\n\n    line-height: 18px;\n    color: #ff8a00;\n    margin-left: 16px;\n  }\n\n  li:first-child {\n    margin: 0;\n  }\n  img {\n    margin-right: 8px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1500px;\n  background: #ffff;\n  padding: 0 30px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = _styledComponents["default"].header(_templateObject());

exports.Content = Content;

var Navigation = _styledComponents["default"].nav(_templateObject2());

exports.Navigation = Navigation;
var List = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject3());
exports.List = List;

var Side = _styledComponents["default"].div(_templateObject4());

exports.Side = Side;
var Cart = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject5());
exports.Cart = Cart;
var Perfil = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject6());
exports.Perfil = Perfil;

var Logo = _styledComponents["default"].div(_templateObject7());

exports.Logo = Logo;