"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCartRequest = addToCartRequest;
exports.addToCartSucess = addToCartSucess;
exports.removeToCart = removeToCart;
exports.updateAmountRequest = updateAmountRequest;
exports.updateAmountSucess = updateAmountSucess;

function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id: id
  };
}

function addToCartSucess(menu) {
  return {
    type: '@cart/ADD_SUCESS',
    menu: menu
  };
}

function removeToCart(id) {
  return {
    type: '@cart/REMOVE',
    id: id
  };
}

function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id: id,
    amount: amount
  };
}

function updateAmountSucess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCESS',
    id: id,
    amount: amount
  };
}