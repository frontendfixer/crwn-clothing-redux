import { CategoryItem } from '../../store/categories/category.types'
import ProductCard from '../product-card/product-card.component'
import {
  CategoryContainer,
  CategoryHeading,
  MoreButton,
  ProductPreview,
} from './category-preview.style'

type CategoryPreviewProps = {
  title: string
  products: CategoryItem[]
}

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <CategoryContainer>
      <CategoryHeading>
        <span className="title">{title.toUpperCase()}</span>
        <MoreButton to={title}>more&#9656;</MoreButton>
      </CategoryHeading>
      <ProductPreview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </ProductPreview>
    </CategoryContainer>
  )
}

export default CategoryPreview
