"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuSingle = exports.MenuGrid = exports.Wrapper = exports.Title = exports.Hero = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\nflex-basis: 580px;\nmargin-bottom: 20px;\npadding-bottom: 20px;\nborder-bottom: 2px solid #ddd;\nimg {\n  display: block;\n  max-width: 100%;\n  height: 180px;\n  margin-right: 30px;\n}\n&:nth-child(5), &:nth-child(6) {\n  border-bottom: 0;\n\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\ngrid-gap:  wrap;\njustify-content: space-between;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1200px;\n  margin: 100px auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin: 60px;\n  text-transform: capitalize;\n\n  color: #5c5c5c;\n  font-size: 3rem;\n  position: relative;\n  font-family: italic sans-serif;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 32px;\n  align-items: center;\n  justify-content: center;\n  .restaurantImg {\n    display: block;\n    border-radius: 4px;\n    max-width: 100%;\n  }\n  .logoRestaurant {\n    display: block;\n    justify-content: start;\n    align-items: center;\n    margin-left: 16px;\n    height: 100px;\n    max-width: 100%;\n  }\n  p {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    line-height: 50px;\n    font-weight: bold;\n    font-size: 1.3rem;\n    color: #fff;\n    &:nth-child(1) {\n      font-size: 1.9rem;\n    }\n    &:nth-child(2) {\n      font-size: 2rem;\n    }\n    > span {\n      width: 16px;\n      height: 16px;\n      background-color: green;\n      border-radius: 100%;\n      margin-left: 8px;\n    }\n    small {\n      display: flex;\n      font-size: 1.5rem;\n      text-transform: uppercase;\n      margin-left: 8px;\n    }\n  }\n  span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    text-align: end;\n    font-size: 1.6rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Hero = _styledComponents["default"].section(_templateObject());

exports.Hero = Hero;

var Title = _styledComponents["default"].h1(_templateObject2());

exports.Title = Title;

var Wrapper = _styledComponents["default"].div(_templateObject3());

exports.Wrapper = Wrapper;

var MenuGrid = _styledComponents["default"].div(_templateObject4());

exports.MenuGrid = MenuGrid;

var MenuSingle = _styledComponents["default"].div(_templateObject5());

exports.MenuSingle = MenuSingle;