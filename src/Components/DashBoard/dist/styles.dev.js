"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchItem = exports.Content = exports.SideBarMenu = exports.SideBarHeader = exports.SideBar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  input {\n    width: 100%;\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    border: 0;\n    padding: 0px 16px;\n    height: 44px;\n    margin: 0 0 10px;\n    &::placeholder {\n      color: rgba(255, 255, 255, 0.7);\n    }\n  }\n\n  button {\n    border: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    svg {\n      display: flex;\n      align-items: center;\n      margin-right: 8px;\n      float: right;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-left: 240px;\n\n  div {\n    left: 300px;\n    top: 0;\n    z-index: 100;\n    background: transparent;\n    height: 60px;\n    width: 100%;\n    padding: 0 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid #ccc;\n  }\n  main {\n    margin-top: 60px;\n    margin-left: 8px;\n    min-height: 90vh;\n    padding: 60px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  ul {\n    li {\n      margin-bottom: 24px;\n      &:first-child {\n        background: rgba(0, 0, 0, 0.1);\n      }\n      a {\n        color: #fff;\n        font-size: 2rem;\n        span {\n          font-family: Verdana, Geneva, Tahoma, sans-serif;\n          text-transform: capitalize;\n\n          &:last-child {\n            padding-left: 0 16px;\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  padding: 8px;\n\n  img {\n    height: 50px;\n    width: 25%;\n  }\n  h3 {\n    font-size: 2rem;\n    text-transform: uppercase;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 240px;\n  position: fixed;\n  left: 0;\n  z-index: 100;\n  color: #fff;\n  background: #ff8a00;\n  padding: 14px;\n  overflow-y: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SideBar = _styledComponents["default"].div(_templateObject());

exports.SideBar = SideBar;

var SideBarHeader = _styledComponents["default"].div(_templateObject2());

exports.SideBarHeader = SideBarHeader;

var SideBarMenu = _styledComponents["default"].div(_templateObject3());

exports.SideBarMenu = SideBarMenu;

var Content = _styledComponents["default"].div(_templateObject4());

exports.Content = Content;

var SearchItem = _styledComponents["default"].div(_templateObject5());

exports.SearchItem = SearchItem;