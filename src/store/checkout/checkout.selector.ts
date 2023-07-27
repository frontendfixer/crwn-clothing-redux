import { createSelector } from 'reselect'

import { RootState } from '../store'
import { CheckoutState } from './checkout.reducer'

const selectCheckoutReducer = (state: RootState): CheckoutState =>
  state.checkout

export const selectCheckout = createSelector(
  [selectCheckoutReducer],
  (checkout) => checkout.isCheckoutOpen
)
