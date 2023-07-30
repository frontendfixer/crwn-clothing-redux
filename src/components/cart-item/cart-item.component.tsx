import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import { CartItem as CartItemType } from '../../store/cart/cart.types'
import {
  Arrow,
  ItemBody,
  ItemContainer,
  ItemImage,
  ItemName,
  ItemQuantity,
} from './cart-item.style'

export type CartItemProps = {
  cartItem: CartItemType
}

const CartItem = memo(({ cartItem }: CartItemProps) => {
  const { name, quantity, price, imageUrl } = cartItem
  const dispatch = useDispatch()

  const cartItems = useSelector(selectCartItems)

  const addCartItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeCartItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem))

  return (
    <ItemContainer>
      <ItemImage src={imageUrl} alt={name} />
      <ItemBody>
        <ItemName>{name}</ItemName>
        <ItemQuantity>
          <Arrow onClick={removeCartItemHandler}>&#x027E8;</Arrow>
          {`${quantity} x $${price * quantity}`}
          <Arrow onClick={addCartItemHandler}>&#x027E9;</Arrow>
        </ItemQuantity>
      </ItemBody>
    </ItemContainer>
  )
})

export default CartItem
