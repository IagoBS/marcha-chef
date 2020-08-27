"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _effects = require("redux-saga/effects");

var _api = _interopRequireDefault(require("../../../services/api"));

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(addTocart);

function addTocart(_ref) {
  var id, response;
  return regeneratorRuntime.wrap(function addTocart$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = _ref.id;
          _context.next = 3;
          return (0, _effects.call)(_api["default"].get, "/products/".concat(id));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return (0, _effects.put)((0, _actions.addToCartSucess)(response.data));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var _default = (0, _effects.all)([(0, _effects.takeLatest)('@cart/ADD_REQUEST', addTocart)]);

exports["default"] = _default;