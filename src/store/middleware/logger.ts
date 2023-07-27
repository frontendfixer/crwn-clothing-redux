/* eslint-disable consistent-return */
import { Middleware } from 'redux'

import { RootState } from '../store'

export const loggerMIddleware: Middleware<{}, RootState> =
  (state) => (next) => (action) => {
    if (!action.type) return next(action)

    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    console.log('currentState: ', state.getState())

    next(action)
    console.log('nextState: ', state.getState())
  }
