"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _rootReducer = _interopRequireDefault(require("./modules/rootReducer"));

var _rootSaga = _interopRequireDefault(require("./modules/rootSaga"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sagaMiddleware = (0, _reduxSaga["default"])();
var enhancer = process.env.NODE_ENV === 'development' ? (0, _redux.compose)(console.tron.createEnhancer(), (0, _redux.applyMiddleware)(sagaMiddleware)) : (0, _redux.applyMiddleware)(sagaMiddleware);
var store = (0, _redux.createStore)(_rootReducer["default"], enhancer);
sagaMiddleware.run(_rootSaga["default"]);
var _default = store;
exports["default"] = _default;