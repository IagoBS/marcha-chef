"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

require("react-toastify/dist/ReactToastify.css");

require("react-perfect-scrollbar/dist/css/styles.css");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  box-sizing: border-box;\n\n}\n\nbody {\n  background-color: #f6d365;\n  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);\n  background-size: cover;\n  height: 100vh;\n  font-size: 14px;\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased !important;\n}\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  font-size: 1.6rem;\n}\n\na {\ntext-decoration: none;\n}\nul {\nlist-style: none;\n}\nbutton {\ncursor: pointer;\n}\nmain {\n  min-height: calc(100vh - 100px - 180px);\n}\n\n#root {\nmargin: 0 auto;\nfont-size: 63.5%;\n\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _styledComponents.createGlobalStyle)(_templateObject());

exports["default"] = _default;