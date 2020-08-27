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
export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}