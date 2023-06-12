import { useContext } from 'react';

import {
  ItemContainer,
  ItemBody,
  ItemImage,
  ItemName,
  ItemQuantity,
  Arrow,
} from './cart-item.style';
import { CartContext } from '../../context/cart.context';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const { removeItemToCart, addItemToCart } = useContext(CartContext);
  const addCartItemHandler = () => addItemToCart(cartItem);
  const removeCartItemHandler = () => removeItemToCart(cartItem);

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
