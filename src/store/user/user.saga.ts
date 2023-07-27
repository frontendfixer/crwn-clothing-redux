import { User } from 'firebase/auth'
import { all, call, put, takeLatest } from 'typed-redux-saga/macro'

import {
  AdditionalInformation,
  createUserDocumentFromAuth,
  createUserEmailAndPassword,
  getCurrentUser,
  signInUserEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from '../../utils/firebase/firebase.utils'
import {
  EmailSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  SignUpStart,
  SignUpSuccess,
  signUpSuccess,
} from './user.action'
import { USER_ACTION_TYPE } from './user.types'

export function* getSnapshotFromUserAuth(
  userAuth: User,
  otherDetails?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      otherDetails
    )
    if (userSnapshot) {
      yield* put(signInSuccess({ ...userSnapshot.data() }))
    }
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser)
    if (!userAuth) return
    yield* call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup)
    yield* call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInUserEmailAndPassword,
      email,
      password
    )
    if (userCredential) {
      const { user } = userCredential
      yield* call(getSnapshotFromUserAuth, user)
    }
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createUserEmailAndPassword,
      email,
      password
    )
    if (userCredential) {
      const { user } = userCredential

      yield* put(signUpSuccess(user, { displayName }))
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error))
  }
}

export function* signInAfterSignUp({
  payload: { user, otherDetails },
}: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, otherDetails)
}

export function* signOut() {
  try {
    yield* call(signOutUser)
    yield* put(signOutSuccess())
  } catch (error) {
    yield* put(signOutFailed(error as Error))
  }
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPE.SIGN_OUT_START, signOut)
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ])
}
