import { CHECKOUT_ACTION_TYPE } from './checkout.types';

const CHECKOUT_INITIAL_STATE = {
  isCheckoutOpen: false,
};

export const checkoutReducer = (
  state = CHECKOUT_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CHECKOUT_ACTION_TYPE.IS_CHECKOUT_OPEN:
      return { ...state, isCheckoutOpen: payload };
    default:
      return state;
  }
};
