import { CartActionTypes } from './carts-types';

export const setDropdownHidden = {
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
};

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
