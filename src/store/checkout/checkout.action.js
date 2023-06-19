import { CHECKOUT_ACTION_TYPE } from './checkout.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setIsCheckoutOpen = boolean =>
  createAction(CHECKOUT_ACTION_TYPE.IS_CHECKOUT_OPEN, boolean);
