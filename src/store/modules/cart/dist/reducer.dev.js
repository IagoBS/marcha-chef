"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cart;

var _immer = _interopRequireDefault(require("immer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function cart() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case '@cart/ADD_SUCESS':
      return (0, _immer["default"])(state, function (draft) {
        var menu = action.menu;
        draft.push(menu);
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

    case '@cart/UPDATE_AMOUNT_SUCESS':
      {
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