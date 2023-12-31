import { all, call, put, takeLatest } from 'typed-redux-saga/macro'

import { getCategoriesAndDocument } from '../../utils/firebase/firebase.utils'
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from './category.action'
import { CATEGORIES_ACTION_TYPE } from './category.types'

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocument)
    yield* put(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error))
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  )
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)])
}
