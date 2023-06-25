import { createSelector } from 'reselect';

const selectCartReducer = store => store.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cart => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, el) => el.quantity + acc, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, el) => el.quantity * el.price + acc, 0)
);
