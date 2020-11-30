"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuSingle = exports.MenuGrid = exports.Wrapper = exports.Title = exports.Hero = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-basis: 580px;\n  margin-bottom: 30px;\n  padding-bottom: 30px;\n  border-bottom: 2px solid #dddd;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  &:hover {\n    box-shadow: 10px 1px 1px rgba(0, 0, 0, 0.5);\n  }\n  img {\n    max-width: 180px;\n    margin-right: 30px;\n    border-radius: 4%;\n    border: 1px solid #ddd;\n    padding: 3px;\n  }\n  h4 {\n    display: block;\n    align-items: center;\n    text-transform: capitalize;\n    font-size: 1.8rem;\n    margin-top: 16px;\n    border-bottom: 1px dashed #333;\n    margin-bottom: 12px;\n    color: #fff;\n    span {\n      float: right;\n      color: #ff7720;\n    }\n  }\n  p {\n    color: #fff;\n    font-family: 2rem;\n  }\n  button {\n    background: linear-gradient(\n      253.58deg,\n      #ffc000 1.55%,\n      #ff9e00 60.2%,\n      #ff8a00 95.8%\n    );\n    box-shadow: 0px 4px 100px rgba(198, 134, 10, 0.25);\n    color: #fff;\n    border: 0;\n    border-radius: 4px;\n    overflow: hidden;\n    margin-top: auto;\n    display: flex;\n    align-items: center;\n    transition: background 0.2s;\n    &:hover {\n      background: linear-gradient(\n        253.58deg,\n        #ff8a00 1.55%,\n        #ff9e00 60.2%,\n        #ffc000 95.8%\n      );\n    }\n    div {\n      display: flex;\n      align-items: center;\n      padding: 12px;\n      background: rgba(0, 0, 0, 0.1);\n      svg {\n        margin-right: 5px;\n      }\n    }\n    span {\n      flex: 1;\n      text-align: center;\n      font-weight: bold;\n    }\n  }\n  &:nth-child(5),\n  &:nth-child(6) {\n    border-bottom: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);

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