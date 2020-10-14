"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

require("react-toastify/dist/ReactToastify.css");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: #FFF7DF;\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased !important;\n}\nbody, input, button {\n  font: 'Roboto', sans-serif;\n}\n#root {\nmax-width: 1200px;\npadding: 0 20px 50px;\nmargin: 0 auto;\n\n}\nbutton {\n  cursor: pointer;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _styledComponents.createGlobalStyle)(_templateObject());

exports["default"] = _default;