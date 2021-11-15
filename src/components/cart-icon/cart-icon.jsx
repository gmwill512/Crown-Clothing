import React from 'react';
import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { setDropdownHidden } from '../../redux/cart/cart-action';

function CartIcon({ setDropdownHidden }) {
  return (
    <div className="cart-icon" onClick={setDropdownHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setDropdownHidden: () => dispatch(setDropdownHidden),
});
export default connect(null, mapDispatchToProps)(CartIcon);
