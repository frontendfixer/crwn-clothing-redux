/* eslint-disable react/jsx-no-useless-fragment */
import { Fragment } from 'react'
import { useSelector } from 'react-redux'

import CategoryPreview from '../../components/category-preview/category-preview.component'
import Spinner from '../../components/spinner/spinner.component'
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return (
            <Fragment key={title}>
              <CategoryPreview title={title} products={products} />
            </Fragment>
          )
        })
      )}
    </>
  )
}

export default CategoriesPreview
