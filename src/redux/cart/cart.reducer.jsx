import { CartActionTypes } from './carts-types';
import { addItemToCart, subtractItemQuantity } from './cart.utils';

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

    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (items) => items.id !== action.payload.id
        ),
      };
    case CartActionTypes.SUBTRACT_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: subtractItemQuantity(state.cartItems, action.payload),
      };

    default:
      return state;
  }
}
export default cartReducer;
