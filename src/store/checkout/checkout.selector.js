import { createSelector } from 'reselect';

const selectCheckoutReducer = store => store.checkout;

export const selectCheckout = createSelector(
  [selectCheckoutReducer],
  checkout => checkout.isCheckoutOpen
);
