import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  CartItems,
  DropdownContainer,
  EmptyMessage,
} from './cart-dropdown.style';
import { CheckoutContext } from '../../context/checkout.context';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  selectCartItems,
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const { isCheckoutOpen, setIsCheckoutOpen } = useContext(CheckoutContext);

  const handelCheckout = () => {
    if (cartCount) setIsCheckoutOpen(!isCheckoutOpen);
  };

  useEffect(() => {
    if (isCheckoutOpen) {
      dispatch(setIsCartOpen(!isCartOpen));
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
