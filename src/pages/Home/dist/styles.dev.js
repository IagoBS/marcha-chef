"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dish = exports.Calendario = exports.Post = exports.FaturedPosts = exports.About = exports.Box = exports.Fatured = exports.FeatureTitle = exports.TitleFilter = exports.Feature = exports.HeroListRestaurant = exports.Promocoes = exports.HeroCard = exports.ContainerHero = exports.Filters = exports.Order = exports.Search = exports.ToolsProduct = exports.ContentProduct = exports.NewProduct = exports.ContainerProduct = exports.Signature = exports.ListRestaurants = exports.Single = exports.Separator = exports.HeadLine = exports.ContainerNavigation = exports.Hero = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _unnamed = _interopRequireDefault(require("~/assets/images/unnamed.png"));

var _hambuerguer = _interopRequireDefault(require("~/assets/images/hambuerguer.jpg"));

var _cozinheiros = _interopRequireDefault(require("~/assets/images/cozinheiros.jpeg"));

var _images = _interopRequireDefault(require("~/assets/images/images.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject29() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  img {\n    width: 100%;\n    max-width: 100%;\n    height: 300px;\n    margin-bottom: 20px;\n  }\n  p {\n    line-height: 25px;\n    text-align: justify;\n    font-weight: 600;\n    color: #333;\n    font-size: 2.4rem;\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  grid-row: 1/4;\n  h2 {\n    display: flex;\n    color: #fff;\n    margin: 20px 0px;\n    font-size: 4rem;\n    letter-spacing: 8px;\n    span {\n      color: #ff8a00;\n      font-size: 2rem;\n      margin-left: 16px;\n    }\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 8px;\n  display: grid;\n  grid-template-columns: 400px 400px 400px;\n  grid-gap: 20px 20px;\n  margin: 0 auto;\n  padding: 20px 0px;\n  background-color: #ffae84;\n  background-image: linear-gradient(62deg, #ffae84 0%, #ffd35e 100%);\n  border-radius: 8px;\n  box-shadow: 0 0 20px #eee;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  letter-spacing: 4px;\n  bottom: 0;\n  margin: 5px 10px;\n  color: #fff;\n  div {\n    border-left: 1px solid #fff;\n  }\n  p {\n    display: flex;\n    align-items: center;\n    letter-spacing: 2px;\n    a {\n      color: #222;\n      margin: 0 15px;\n    }\n  }\n  h1 {\n    font-size: 2rem;\n    display: flex;\n    align-items: center;\n    text-align: center;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  background: #333;\n  opacity: 50%;\n  width: 100%;\n  max-width: 1400;\n  height: 22%;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  @media (max-width: 767.9px) {\n    margin-top: 16px;\n  }\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  &:nth-child(1) {\n    grid-row: 1/3;\n  }\n  &:nth-child(4) {\n    grid-row: 1/3;\n    grid-column: 3/4;\n  }\n  &:nth-child(2) h1 {\n    font-size: 1rem;\n  }\n  &:nth-child(3) h1 {\n    font-size: 1rem;\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 50% 25% 25%;\n  grid-template-rows: 300px 300px;\n  grid-gap: 5px 5px;\n  margin: 0 auto;\n  @media (max-width: 767.9px) {\n    display: block;\n    margin-top: 16px;\n  }\n  &:nth-child(1) {\n    grid-row: 1/3;\n  }\n  &:nth-child(4) {\n    grid-row: 1/3;\n    grid-column: 3/4;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);\n  background-image: url(", ");\n  border-radius: 10px;\n\n  height: 150px;\n  width: 300px;\n\n  h1 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    color: #fff;\n    font-size: 3rem;\n    font-weight: 600;\n    text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  width: 100%;\n  flex-direction: column;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 30px;\n  justify-content: center;\n\n  align-items: center;\n  margin-top: 16px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 8px;\n  margin-right: auto; /* 1 */\n  margin-left: auto; /* 1 */\n  max-width: 1024px; /* 2 */\n  padding-right: 10px; /* 3 */\n  padding-left: 10px; /* 3 */\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  div {\n    display: flex;\n    margin-right: 25px;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    height: 40px;\n    height: 40px;\n    border-radius: 100%;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  width: 450px;\n  height: 150px;\n  margin: 10px;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n  font-weight: 600;\n  color: #fff;\n  border-radius: 8px;\n  border: none;\n  box-shadow: 4px 7px 21px rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  p {\n    color: #fff;\n    font-size: 3rem;\n    font-weight: 600;\n    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);\n    margin-top: 24px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  width: 450px;\n  height: 150px;\n  background-color: #b1b11b;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-size: auto;\n  text-align: center;\n  font-weight: 600;\n  color: #fff;\n  border-radius: 8px;\n  border: none;\n  box-shadow: 4px 7px 21px rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  > p {\n    color: #fff;\n    font-size: 2.5rem;\n    font-weight: 600;\n    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);\n    margin-top: 12px;\n  }\n  div {\n    margin-top: 8px;\n    background-color: #f1f1f1;\n    border-radius: 20px;\n    width: 250px;\n    height: 35px;\n    justify-content: space-evenly;\n    align-items: center;\n    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);\n    input {\n      border: none;\n      background-color: transparent;\n      color: #000000;\n      align-items: center;\n      outline: 0;\n\n      height: 100%;\n    }\n    button {\n      align-items: center;\n      border: none;\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: 560px;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  max-width: 1200px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 540px;\n  height: auto;\n  max-width: 100%;\n  border-radius: 10px;\n  background-image: url(", ");\n\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n  font-weight: 600;\n  color: #fff;\n  border: none;\n  box-shadow: 4px 7px 21px rgba(0, 0, 0, 0.7);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  p {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    line-height: 50px;\n    font-weight: bold;\n    font-size: 2.6rem;\n    &:nth-child(1) {\n      font-size: 2.6rem;\n    }\n    &:nth-child(2) {\n      font-size: 2.8rem;\n    }\n  }\n  button {\n    width: 120px;\n    height: 35px;\n    margin-left: 200px;\n    border-radius: 8px;\n    background-color: #ff8a00;\n    text-align: center;\n    font-weight: bold;\n    border: 0;\n    outline: 0;\n    text-align: center;\n    color: #fff;\n    box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.25);\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background-color: #eb648c;\n  border-radius: 2rem;\n  color: #fafafa;\n  display: inline-block;\n  margin-top: 2rem;\n  padding: 1rem 2.5rem;\n  text-transform: uppercase;\n  transition: background-color 1s;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  list-style: none;\n  li {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    background: #fff;\n    border-radius: 10px;\n    img {\n      align-self: center;\n      max-width: 300px;\n    }\n    > strong {\n      font-size: 16px;\n      line-height: 20px;\n      color: #333;\n      margin-top: 5px;\n    }\n    > span {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 5px 0 20px;\n    }\n    button {\n      background: linear-gradient(\n        253.58deg,\n        #ffc000 1.55%,\n        #ff9e00 60.2%,\n        #ff8a00 95.8%\n      );\n      box-shadow: 0px 4px 100px rgba(198, 134, 10, 0.25);\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-top: auto;\n      display: flex;\n      align-items: center;\n      transition: background 0.2s;\n      &:hover {\n        background: linear-gradient(\n          253.58deg,\n          #ff8a00 1.55%,\n          #ff9e00 60.2%,\n          #ffc000 95.8%\n        );\n      }\n      div {\n        display: flex;\n        align-items: center;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.1);\n        svg {\n          margin-right: 5px;\n        }\n      }\n      span {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n      }\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  a {\n    margin: 10px;\n    padding: 15px 45px;\n    text-align: center;\n    text-transform: uppercase;\n    transition: 0.5s;\n    background-size: 200% auto;\n    color: white;\n    box-shadow: 0 0 20px #eee;\n    border-radius: 10px;\n    display: block;\n    &:hover {\n      background: ", ";\n    }\n    &:focus {\n      color: #fff;\n      background-color: ", ";\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .line {\n    width: 100%;\n    max-width: 8.4rem;\n    height: 0.25rem;\n    background-color: #fff;\n    position: relative;\n  }\n  .line-right::before,\n  .line-left::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    border: 0.6rem solid transparent;\n  }\n  .line-right::before {\n    border-right-color: #fff;\n    right: 0;\n  }\n  .line-left::before {\n    border-left-color: #fff;\n    left: 0;\n  }\n  .astericks {\n    font-size: 1.2rem;\n    color: var(--secondary-font-color);\n    margin: 0 1.6rem;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  font-size: 1.4rem;\n  font-weight: 100;\n  text-transform: uppercase;\n  margin-bottom: 1.2rem;\n  letter-spacing: 3px;\n  margin-right: -3px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  h2 {\n    font-family: Proxima Nova;\n    line-height: 158.34%;\n    color: #ffffff;\n    font-size: 8rem;\n    font-weight: 100;\n    line-height: 0.8;\n    letter-spacing: 2px;\n  }\n  span {\n    text-transform: uppercase;\n    font-size: 10.3rem;\n  }\n  h1 {\n    color: #fff;\n    font-size: 3.7rem;\n    text-transform: uppercase;\n    font-weight: 900;\n    letter-spacing: 0.5rem;\n    margin-right: -0.5rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 60vh;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin-top: 64px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-right: auto; /* 1 */\n  margin-left: auto; /* 1 */\n\n  max-width: 1500px; /* 2 */\n\n  padding-right: 10px; /* 3 */\n  padding-left: 10px; /* 3 */\n  svg {\n    bottom: 0;\n    width: 100%;\n    height: 100px;\n    margin: 0 auto;\n    padding: 0 15px;\n  }\n  > h1 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    padding: 10px;\n    font-size: 40px;\n    font-weight: bold;\n\n    margin: 5px 0 20px;\n    font-family: Proxima Nova;\n    font-size: 40px;\n    line-height: 158.34%;\n\n    text-align: center;\n    color: #ffc099;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Hero = _styledComponents["default"].section(_templateObject2());

exports.Hero = Hero;

var ContainerNavigation = _styledComponents["default"].div(_templateObject3());

exports.ContainerNavigation = ContainerNavigation;

var HeadLine = _styledComponents["default"].div(_templateObject4());

exports.HeadLine = HeadLine;

var Separator = _styledComponents["default"].div(_templateObject5());

exports.Separator = Separator;

var Single = _styledComponents["default"].div(_templateObject6(), (0, _polished.darken)(0.03, '#FF8A00'), (0, _polished.lighten)(0.03, '#FF8A44'));

exports.Single = Single;

var ListRestaurants = _styledComponents["default"].ul(_templateObject7());

exports.ListRestaurants = ListRestaurants;

var Signature = _styledComponents["default"].button(_templateObject8());

exports.Signature = Signature;

var ContainerProduct = _styledComponents["default"].div(_templateObject9());

exports.ContainerProduct = ContainerProduct;

var NewProduct = _styledComponents["default"].div(_templateObject10(), _hambuerguer["default"]);

exports.NewProduct = NewProduct;

var ContentProduct = _styledComponents["default"].div(_templateObject11());

exports.ContentProduct = ContentProduct;

var ToolsProduct = _styledComponents["default"].div(_templateObject12());

exports.ToolsProduct = ToolsProduct;

var Search = _styledComponents["default"].div(_templateObject13(), _cozinheiros["default"]);

exports.Search = Search;

var Order = _styledComponents["default"].div(_templateObject14(), _images["default"]);

exports.Order = Order;

var Filters = _styledComponents["default"].div(_templateObject15());

exports.Filters = Filters;

var ContainerHero = _styledComponents["default"].div(_templateObject16());

exports.ContainerHero = ContainerHero;

var HeroCard = _styledComponents["default"].div(_templateObject17());

exports.HeroCard = HeroCard;

var Promocoes = _styledComponents["default"].div(_templateObject18(), _images["default"]);

exports.Promocoes = Promocoes;

var HeroListRestaurant = _styledComponents["default"].div(_templateObject19());

exports.HeroListRestaurant = HeroListRestaurant;

var Feature = _styledComponents["default"].div(_templateObject20());

exports.Feature = Feature;

var TitleFilter = _styledComponents["default"].div(_templateObject21());

exports.TitleFilter = TitleFilter;

var FeatureTitle = _styledComponents["default"].div(_templateObject22());

exports.FeatureTitle = FeatureTitle;

var Fatured = _styledComponents["default"].div(_templateObject23());

exports.Fatured = Fatured;

var Box = _styledComponents["default"].div(_templateObject24());

exports.Box = Box;

var About = _styledComponents["default"].div(_templateObject25());

exports.About = About;

var FaturedPosts = _styledComponents["default"].div(_templateObject26());

exports.FaturedPosts = FaturedPosts;

var Post = _styledComponents["default"].div(_templateObject27());

exports.Post = Post;

var Calendario = _styledComponents["default"].div(_templateObject28());

exports.Calendario = Calendario;

var Dish = _styledComponents["default"].div(_templateObject29());

exports.Dish = Dish;