import { AnyAction } from 'redux'

import { UserData } from '../../utils/firebase/firebase.utils'
import {
  emailSignInStart,
  googleSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from './user.action'

export type UserState = {
  readonly currentUser: UserData | null
  readonly isLoading: boolean
  readonly error: Error | null
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const userReducer = (action: AnyAction, state = INITIAL_STATE) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      isLoading: false,
    }
  }

  if (emailSignInStart.match(action) || googleSignInStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
      isLoading: false,
    }
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload }
  }

  return state
}
