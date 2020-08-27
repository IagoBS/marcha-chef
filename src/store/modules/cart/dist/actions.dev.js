"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCartRequest = addToCartRequest;
exports.addToCartSucess = addToCartSucess;
exports.removeToCart = removeToCart;
exports.updateAmount = updateAmount;

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

function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id: id,
    amount: amount
  };
}