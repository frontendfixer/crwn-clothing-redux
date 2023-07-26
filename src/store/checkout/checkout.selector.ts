import { createSelector } from 'reselect'

import { CheckoutState } from './checkout.reducer'

const selectCheckoutReducer = (state): CheckoutState => state.checkout

export const selectCheckout = createSelector(
  [selectCheckoutReducer],
  (checkout) => checkout.isCheckoutOpen
)
