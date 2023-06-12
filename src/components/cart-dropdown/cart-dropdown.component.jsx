import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CartItems,
  DropdownContainer,
  EmptyMessage,
} from './cart-dropdown.style';
import { CartContext } from '../../context/cart.context';
import { CheckoutContext } from '../../context/checkout.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const navigate = useNavigate();

  const { cartItems, cartCount, isCartOpen, setIsCartOpen } =
    useContext(CartContext);

  const { isCheckoutOpen, setIsCheckoutOpen } = useContext(CheckoutContext);

  const handelCheckout = () => {
    if (cartCount) setIsCheckoutOpen(!isCheckoutOpen);
  };

  useEffect(() => {
    if (isCheckoutOpen) {
      setIsCartOpen(!isCartOpen);
      navigate('/checkout');
      setIsCheckoutOpen(!isCheckoutOpen);
    }
  }, [isCartOpen, isCheckoutOpen, navigate, setIsCartOpen, setIsCheckoutOpen]);

  return (
    <DropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Cart is empty</EmptyMessage>
        )}
        {}
      </CartItems>
      <Button onClick={handelCheckout}>Go to checkout</Button>
    </DropdownContainer>
  );
};

export default CartDropdown;
