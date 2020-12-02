"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = exports.ExtraSection = exports.About = exports.WrapperText = exports.Product = exports.RecipesGrid = exports.Recipe = exports.Hero = void 0;

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
  var data = _taggedTemplateLiteral([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 70px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 70vh;\n  display: block;\n  justify-content: center;\n  align-items: center;\n  background-image: linear-gradient(#f4511e, #f4511e),\n    url(", ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-blend-mode: multiply;\n  h1 {\n    color: #fff;\n    font-size: 7rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 600;\n    text-transform: uppercase;\n    padding-top: 100px;\n    text-decoration: overline underline;\n  }\n\n  p {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    letter-spacing: 2px;\n    font-size: 3.5rem;\n    color: #fff;\n    font-weight: bold;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Hero = _styledComponents["default"].section(_templateObject(), _FoodAndDrinkDesignColour["default"]);

exports.Hero = Hero;

var Recipe = _styledComponents["default"].div(_templateObject2());

exports.Recipe = Recipe;

var RecipesGrid = _styledComponents["default"].div(_templateObject3());

exports.RecipesGrid = RecipesGrid;

var Product = _styledComponents["default"].div(_templateObject4());

exports.Product = Product;

var WrapperText = _styledComponents["default"].div(_templateObject5());

exports.WrapperText = WrapperText;

var About = _styledComponents["default"].div(_templateObject6());

exports.About = About;

var ExtraSection = _styledComponents["default"].div(_templateObject7());

exports.ExtraSection = ExtraSection;

var Category = _styledComponents["default"].div(_templateObject8());

exports.Category = Category;