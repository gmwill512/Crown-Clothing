export function addItemToCart(cartItems, cartItemToAdd) {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCart) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}
