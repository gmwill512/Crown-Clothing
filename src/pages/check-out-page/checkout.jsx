import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item';

function CheckoutPage({ cartItems, cartTotal }) {
  console.log(cartTotal);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <span classNamer="header-block">Product</span>
        <span classNamer="header-block">Name</span>
        <span classNamer="header-block">Quantity</span>
        <span classNamer="header-block">Price</span>
        <span classNamer="header-block">Remove</span>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem cartItems={item} key={item.id} />
      ))}

      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
