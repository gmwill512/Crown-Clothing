import { CartActionTypes } from './carts-types';

export const setDropdownHidden = {
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
};

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const subtractItemQuantity = (item) => ({
  type: CartActionTypes.SUBTRACT_ITEM_QUANTITY,
  payload: item,
});
