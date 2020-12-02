"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseModal = exports.CustomizeSelect = exports.ModalContent = exports.ModalImg = exports.ModalWrapper = exports.Background = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fa = require("react-icons/fa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  z-index: 10;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 207px;\n  height: 34px;\n  overflow: hidden;\n  background: transparent;\n  border-radius: 3px;\n  select {\n    background: transparent;\n    width: 233px;\n    color: #474747;\n    padding: 8px 5px 5px 5px;\n    font-size: 12px;\n    line-height: 1;\n    border: 0;\n    border-radius: 0;\n    height: 34px;\n    option {\n      height: 30px;\n      border: 1px solid #cbcbcb;\n      padding-left: 17px;\n      padding-top: 12px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.8;\n  color: #5c5c5c;\n\n  h1 {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    color: #5c5c5c;\n    font-size: 2.2rem;\n    margin-top: 8px;\n  }\n  p {\n    font-size: 1.6rem;\n    color: #5c5c5c;\n    margin-top: 16px;\n  }\n  small {\n    display: flex;\n    align-items: center;\n    font-size: 2.5rem;\n    justify-content: start;\n  }\n\n  button {\n    background: linear-gradient(\n      253.58deg,\n      #ffc000 1.55%,\n      #ff9e00 60.2%,\n      #ff8a00 95.8%\n    );\n    box-shadow: 0px 4px 100px rgba(198, 134, 10, 0.25);\n    color: #fff;\n    border: 0;\n    border-radius: 4px;\n    overflow: hidden;\n    margin-top: auto;\n    display: flex;\n    align-items: center;\n    transition: background 0.2s;\n    &:hover {\n      background: linear-gradient(\n        253.58deg,\n        #ff8a00 1.55%,\n        #ff9e00 60.2%,\n        #ffc000 95.8%\n      );\n    }\n    div {\n      display: flex;\n      align-items: center;\n      padding: 24px;\n      background: rgba(0, 0, 0, 0.1);\n      svg {\n        margin-right: 5px;\n      }\n    }\n    span {\n      flex: 1;\n      text-align: center;\n      font-weight: bold;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n         display: block;\n         height: auto;\n\n         width: 100%;\n         \n         overflow: hidden;\n         content: '';\n         z-index: -1;\n         border-radius: 4px;\n         max-width: 100%;\n       "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 700px;\n  height: auto;\n  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  color: #000;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  grid-template-columns: 1fr 1fr;\n  position: relative;\n  z-index: 10;\n  border-radius: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Background = _styledComponents["default"].div(_templateObject());

exports.Background = Background;

var ModalWrapper = _styledComponents["default"].div(_templateObject2());

exports.ModalWrapper = ModalWrapper;

var ModalImg = _styledComponents["default"].img(_templateObject3());

exports.ModalImg = ModalImg;

var ModalContent = _styledComponents["default"].div(_templateObject4());

exports.ModalContent = ModalContent;

var CustomizeSelect = _styledComponents["default"].div(_templateObject5());

exports.CustomizeSelect = CustomizeSelect;
var CloseModal = (0, _styledComponents["default"])(_fa.FaCloudscale)(_templateObject6());
exports.CloseModal = CloseModal;