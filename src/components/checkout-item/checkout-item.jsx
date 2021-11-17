import React from 'react';
import './checkout-item.scss';
import { connect } from 'react-redux';
import {
  removeItem,
  subtractItemQuantity,
  addItem,
} from '../../redux/cart/cart-action';

function CheckoutItem({
  cartItems,
  removeItem,
  addItem,
  subtractItemQuantity,
}) {
  const { name, imageUrl, price, quantity } = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => subtractItemQuantity(cartItems)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItems)}>
        &#10006;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  subtractItemQuantity: (item) => dispatch(subtractItemQuantity(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
