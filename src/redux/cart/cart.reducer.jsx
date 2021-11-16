import { CartActionTypes } from './carts-types';
import { addItemToCart } from './cart.utils';
const INITAL_STATE = {
  hidden: true,
  cartItems: [],
};

function cartReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
}
export default cartReducer;
