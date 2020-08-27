"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _effects = require("redux-saga/effects");

var _api = _interopRequireDefault(require("../../../services/api"));

var _format = require("../../../ultil/format");

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(addTocart);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function addTocart(_ref) {
  var id, response, MenuExists, amount, data;
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
          return (0, _effects.select)(function (state) {
            return state.cart.find(function (p) {
              return p.id === id;
            });
          });

        case 6:
          MenuExists = _context.sent;

          if (!MenuExists) {
            _context.next = 13;
            break;
          }

          amount = MenuExists.amount + 1;
          _context.next = 11;
          return (0, _effects.put)((0, _actions.updateAmount)(id, amount));

        case 11:
          _context.next = 16;
          break;

        case 13:
          data = _objectSpread({}, response.data, {
            amount: 1,
            priceFormated: (0, _format.formatPrice)(response.data.price)
          });
          _context.next = 16;
          return (0, _effects.put)((0, _actions.addToCartSucess)(data));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var _default = (0, _effects.all)([(0, _effects.takeLatest)('@cart/ADD_REQUEST', addTocart)]);

exports["default"] = _default;