"use strict";

var _reactotronReactJs = _interopRequireDefault(require("reactotron-react-js"));

var _reactotronRedux = require("reactotron-redux");

var _reactotronReduxSaga = _interopRequireDefault(require("reactotron-redux-saga"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.NODE_ENV === 'development') {
  var tron = _reactotronReactJs["default"].configure().use((0, _reactotronRedux.reactotronRedux)()).use((0, _reactotronReduxSaga["default"])()).connect();

  tron.clear();
  console.tron = tron;
}