// action types
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const CLEAR_FROM_CART = "REMOVE_CART_ITEM";
export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";

// action creators
export const addItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});
export const removeItem = (item) => ({
  type: REMOVE_CART_ITEM,
});
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});
