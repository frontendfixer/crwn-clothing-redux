import { useSelector } from 'react-redux';

import { CheckoutContainer, CartTotal, Heading } from './checkout.style';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
