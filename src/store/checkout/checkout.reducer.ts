import { AnyAction } from 'redux'

import { setIsCheckoutOpen } from './checkout.action'

export type CheckoutState = {
  readonly isCheckoutOpen: boolean
}

const CHECKOUT_INITIAL_STATE: CheckoutState = {
  isCheckoutOpen: false,
}

export const checkoutReducer = (
  action: AnyAction,
  state = CHECKOUT_INITIAL_STATE
) => {
  if (setIsCheckoutOpen.match(action)) {
    return { ...state, isCheckoutOpen: action.payload }
  }
  return state
}
