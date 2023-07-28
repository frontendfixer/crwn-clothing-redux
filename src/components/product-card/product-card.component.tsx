import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import { CategoryItem } from '../../store/categories/category.types'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductImage,
  ProductName,
  ProductPrice,
} from './product-card.style'

type ProductCardProps = {
  product: CategoryItem
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product
  const dispatch = useDispatch()

  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <ProductCardContainer>
      <ProductImage>
        <img src={imageUrl} alt={`${name}`} />
      </ProductImage>
      <ProductCardFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
