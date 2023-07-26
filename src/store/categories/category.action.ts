import {
  ActionWithoutPayload,
  ActionWithPayload,
  createAction,
} from '../../utils/reducer/reducer.utils'
import {
  CATEGORIES_ACTION_TYPE,
  Category,
} from './category.types'

export type FetchCategoryStart =
  ActionWithoutPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>

export type FetchCategorySuccess =
  ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoryFailed =
  ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, Error>

export type CategoryAction = FetchCategoryStart | FetchCategorySuccess | FetchCategoryFailed

export const fetchCategoriesStart = (): FetchCategoryStart =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray: Category[]): FetchCategorySuccess =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = (error :Error): FetchCategoryFailed =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error)
