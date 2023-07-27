/* eslint-disable @typescript-eslint/default-param-last */
import { AnyAction } from 'redux'

import { setIsCheckoutOpen } from './checkout.action'

export type CheckoutState = {
  readonly isCheckoutOpen: boolean
}

const CHECKOUT_INITIAL_STATE: CheckoutState = {
  isCheckoutOpen: false,
}

export const checkoutReducer = (
  state = CHECKOUT_INITIAL_STATE,
  action: AnyAction
) => {
  if (setIsCheckoutOpen.match(action)) {
    return { ...state, isCheckoutOpen: action.payload }
  }
  return state
}
