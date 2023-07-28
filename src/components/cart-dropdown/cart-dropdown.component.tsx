import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setIsCartOpen } from '../../store/cart/cart.action'
import {
  selectCartCount,
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector'
import { setIsCheckoutOpen } from '../../store/checkout/checkout.action'
import { selectCheckout } from '../../store/checkout/checkout.selector'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import {
  CartItems,
  DropdownContainer,
  EmptyMessage,
} from './cart-dropdown.style'

const CartDropdown = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cartItems = useSelector(selectCartItems)
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)
  const isCheckoutOpen = useSelector(selectCheckout)

  const handelCheckout = () => {
    if (cartCount) dispatch(setIsCheckoutOpen(!isCheckoutOpen))
  }

  useEffect(() => {
    if (isCheckoutOpen) {
      dispatch(setIsCartOpen(!isCartOpen))
      navigate('/checkout')
      dispatch(setIsCheckoutOpen(!isCheckoutOpen))
    }
  }, [isCheckoutOpen])

  return (
    <DropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Cart is empty</EmptyMessage>
        )}
        {}
      </CartItems>
      <Button onClick={handelCheckout}>Go to checkout</Button>
    </DropdownContainer>
  )
}

export default CartDropdown
