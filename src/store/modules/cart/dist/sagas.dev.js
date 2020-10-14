"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _effects = require("redux-saga/effects");

var _reactToastify = require("react-toastify");

var _api = _interopRequireDefault(require("../../../services/api"));

var _format = require("../../../ultil/format");

var _actions = require("./actions");

var _history = _interopRequireDefault(require("../../../services/history"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(addTocart),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(updateAmount);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function addTocart(_ref) {
  var id, response, MenuExists, stock, stockAmount, stockCurrentAmount, amount, data;
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
          _context.next = 9;
          return (0, _effects.call)(_api["default"].get, "/stock/".concat(id));

        case 9:
          stock = _context.sent;
          stockAmount = stock.data.amount;
          stockCurrentAmount = MenuExists ? MenuExists.amount : 0;
          amount = stockCurrentAmount + 1;

          if (!(amount > stockAmount)) {
            _context.next = 17;
            break;
          }

          console.tron.warn('ERRO');

          _reactToastify.toast.error('Quantidade fora do estoque ');

          return _context.abrupt("return");

        case 17:
          if (!MenuExists) {
            _context.next = 22;
            break;
          }

          _context.next = 20;
          return (0, _effects.put)((0, _actions.updateAmountSucess)(id, amount));

        case 20:
          _context.next = 25;
          break;

        case 22:
          data = _objectSpread({}, response.data, {
            amount: 1,
            priceFormated: (0, _format.formatPrice)(response.data.price)
          });
          _context.next = 25;
          return (0, _effects.put)((0, _actions.addToCartSucess)(data));

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function updateAmount(_ref2) {
  var id, amount, stock, stockAmount;
  return regeneratorRuntime.wrap(function updateAmount$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = _ref2.id, amount = _ref2.amount;

          if (!(amount <= 0)) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return");

        case 3:
          _context2.next = 5;
          return (0, _effects.call)(_api["default"].get, "/stock/".concat(id));

        case 5:
          stock = _context2.sent;
          stockAmount = stock.data.amount;

          if (!(amount >= stockAmount)) {
            _context2.next = 10;
            break;
          }

          _reactToastify.toast.error('Quantidade fora do estoque ');

          return _context2.abrupt("return");

        case 10:
          _context2.next = 12;
          return (0, _effects.put)((0, _actions.updateAmountSucess)(id, amount));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

var _default = (0, _effects.all)([(0, _effects.takeLatest)('@cart/ADD_REQUEST', addTocart), (0, _effects.takeLatest)('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)]);

exports["default"] = _default;