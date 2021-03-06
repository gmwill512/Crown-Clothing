import React from 'react';
import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { setDropdownHidden } from '../../redux/cart/cart-action';
import { selectCartItemCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

function CartIcon({ setDropdownHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={setDropdownHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setDropdownHidden: () => dispatch(setDropdownHidden),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
