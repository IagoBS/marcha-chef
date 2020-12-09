"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = exports.ExtraSection = exports.WrapperText = exports.Product = exports.Recipe = exports.WrapperGrid = exports.Wrapper = exports.Hero = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FoodAndDrinkDesignColour = _interopRequireDefault(require("~/assets/images/FoodAndDrinkDesignColour.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  justify-content: center;\n  position: absolute;\n  padding: 10px 15px;\n  bottom: 3px;\n  color: #fff;\n  h5 {\n    color: #f4551f;\n    padding: 4px;\n    align-items: center;\n    text-align: center;\n    font-size: 2.5rem;\n    font-weight: 600;\n  }\n  p {\n    font-weight: 300;\n    font-size: 1.5rem;\n    text-align: center;\n    align-items: center;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: 100%;\n  width: auto;\n  background-color: black;\n  overflow: hidden;\n  border-radius: 4px;\n  img {\n    border-radius: 4px;\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    transition: all 2s;\n    &:hover {\n      transform: scale(1.1, 1.1);\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 70px 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  width: 100%;\n  flex-direction: column;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 30px;\n  justify-content: center;\n\n  align-items: center;\n  margin-top: 16px;\n \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: 100%;\n  max-width: 1200px;\n  margin: 100px auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 70vh;\n  display: block;\n  justify-content: center;\n  align-items: center;\n  background-image: linear-gradient(#f4511e, #f4511e),\n    url(", ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-blend-mode: multiply;\n  h1 {\n    color: #fff;\n    font-size: 5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 600;\n    text-transform: uppercase;\n    padding-top: 50px;\n    text-decoration: overline underline;\n  }\n\n  p {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    letter-spacing: 2px;\n    font-size: 2.5rem;\n    color: #fff;\n    font-weight: bold;\n  }\n  button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    padding: 16px;\n    border: 0;\n    border-radius: 5px;\n    background-color: #5c5c5c;\n    color: #fff;\n    font-size: 3rem;\n    text-transform: uppercase;\n    margin-top: 24px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Hero = _styledComponents["default"].section(_templateObject(), _FoodAndDrinkDesignColour["default"]);

exports.Hero = Hero;

var Wrapper = _styledComponents["default"].div(_templateObject2());

exports.Wrapper = Wrapper;

var WrapperGrid = _styledComponents["default"].div(_templateObject3());

exports.WrapperGrid = WrapperGrid;

var Recipe = _styledComponents["default"].div(_templateObject4());

exports.Recipe = Recipe;

var Product = _styledComponents["default"].div(_templateObject5());

exports.Product = Product;

var WrapperText = _styledComponents["default"].div(_templateObject6());

exports.WrapperText = WrapperText;

var ExtraSection = _styledComponents["default"].div(_templateObject7());

exports.ExtraSection = ExtraSection;

var Category = _styledComponents["default"].div(_templateObject8());

exports.Category = Category;