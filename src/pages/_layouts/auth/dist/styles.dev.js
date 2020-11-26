"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 320px;\n  text-align: center;\n  margin-top: 128px;\n  form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 32px;\n    input {\n      background: rgba(0, 0, 0, 0.1);\n      border-radius: 8px;\n      border: 0;\n      padding: 0px 16px;\n      height: 44px;\n      margin: 0 0 10px;\n      &::placeholder {\n        color: rgba(255, 255, 255, 0.7);\n      }\n      \n    }\n    span {\n      color: '#F64C75';\n      align-self: center;\n      margin: 0 0 10px;\n      font-weight: bold;\n      font-size: 16px;\n    }\n    button {\n      margin: 5px 0 0;\n      height: 44px;\n      background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);\n      color: rgba(255, 255, 255, 0.7);\n      border-radius: 4px;\n      font-weight: bold;\n      font-size: 16px;\n      transition: background 0.2;\n      &:hover {\n        background: ", ";\n      }\n    }\n    a {\n      color: #fff;\n      margin-top: 15px;\n      font-size: 16px;\n      opacity: 0.8;\n      &:hover {\n        opacity: 1;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

exports.Wrapper = Wrapper;

var Content = _styledComponents.default.div(_templateObject2(), (0, _polished.darken)(0.03, '#ffc000'));

exports.Content = Content;