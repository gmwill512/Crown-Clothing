import React from 'react';
import CustomButton from '../button/custom-button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import { setDropdownHidden } from '../../redux/cart/cart-action';

function CartDropdown({ cartItems, dispatch }) {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((items) => <CartItem key={items.id} item={items} />)
        ) : (
          <span className="empty-message">YOUR CART IS EMPTY</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(setDropdownHidden);
          navigate('/checkout');
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps)(CartDropdown);
