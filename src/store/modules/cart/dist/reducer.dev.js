"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cart;

var _immer = _interopRequireDefault(require("immer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function cart() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case '@cart/ADD_SUCESS':
      return (0, _immer["default"])(state, function (draft) {
        var menuIndex = draft.findIndex(function (r) {
          return r.id === action.menu.id;
        });

        if (menuIndex >= 0) {
          draft[menuIndex].amount += 1;
        } else {
          draft.push(_objectSpread({}, action.menu, {
            amount: 1
          }));
        }
      });

    case '@cart/REMOVE':
      return (0, _immer["default"])(state, function (draft) {
        var menuIndex = draft.findIndex(function (r) {
          return r.id === action.id;
        });

        if (menuIndex >= 0) {
          draft.splice(menuIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT':
      {
        if (action.amount <= 0) {
          return state;
        }

        return (0, _immer["default"])(state, function (draft) {
          var menuIndex = draft.findIndex(function (r) {
            return r.id === action.id;
          });

          if (menuIndex >= 0) {
            draft[menuIndex].amount = Number(action.amount);
          }
        });
      }

    default:
      return state;
  }
}