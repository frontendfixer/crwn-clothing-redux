import { useContext } from 'react';

import { CheckoutContainer, CartTotal, Heading } from './checkout.style';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <Heading>Items in cart to checkout</Heading>
      {cartItems.map(cartItem => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
          cartTotal={cartTotal}
        />
      ))}
      <CartTotal>TOTAL: ${cartTotal}</CartTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
