import { useContext } from 'react';

import {
  ItemContainer,
  ImageContainer,
  FlexContainer,
  SpanBlock,
  Button,
} from './checkout-item.styles';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <ItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <FlexContainer flex="column">
        <SpanBlock className="name"> {name} </SpanBlock>
        <FlexContainer flex="row">
          <SpanBlock className="quantity">
            <Button onClick={removeItemHandler}>&#10094;</Button>
            <SpanBlock>{quantity}</SpanBlock>
            <Button onClick={addItemHandler}>&#10095;</Button>
          </SpanBlock>
          <SpanBlock>${price}</SpanBlock>
        </FlexContainer>
      </FlexContainer>
      <Button onClick={clearItemHandler}>&#10005;</Button>
    </ItemContainer>
  );
};

export default CheckoutItem;
