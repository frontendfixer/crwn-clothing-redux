import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/product-card/product-card.component'
import Spinner from '../../components/spinner/spinner.component'
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector'
import {
  CategoryContainer,
  CategoryItems,
  CategoryTitle,
} from './category.style'

type CategoryRoutsParams = {
  category: string
}

const Category = memo(() => {
  const { category } = useParams<
    keyof CategoryRoutsParams
  >() as CategoryRoutsParams
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  return (
    <CategoryContainer>
      <CategoryTitle>{category}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryItems>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryItems>
      )}
    </CategoryContainer>
  )
})

export default Category
