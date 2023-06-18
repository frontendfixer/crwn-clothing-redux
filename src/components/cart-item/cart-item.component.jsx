import { useDispatch, useSelector } from 'react-redux';

import {
  ItemContainer,
  ItemBody,
  ItemImage,
  ItemName,
  ItemQuantity,
  Arrow,
} from './cart-item.style';
import {
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addCartItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeCartItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

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
  );
};

export default CartItem;
