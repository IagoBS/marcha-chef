export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}
export function addToCartSucess(menu) {
  return {
    type: '@cart/ADD_SUCESS',
    menu,
  };
}
export function removeToCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}
export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}
export function updateAmountSucess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCESS',
    id,
    amount,
  };
}
