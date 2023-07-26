import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/reducer.utils'
import { CHECKOUT_ACTION_TYPE } from './checkout.types'

export type SetIsCheckoutOpen = ActionWithPayload<
  CHECKOUT_ACTION_TYPE.IS_CHECKOUT_OPEN,
  boolean
>

export const setIsCheckoutOpen = withMatcher(
  (boolean: boolean): SetIsCheckoutOpen =>
    createAction(CHECKOUT_ACTION_TYPE.IS_CHECKOUT_OPEN, boolean)
)
