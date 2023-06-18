import { useDispatch, useSelector } from 'react-redux';

import {
  ItemContainer,
  ImageContainer,
  FlexContainer,
  SpanBlock,
  Button,
} from './checkout-item.styles';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

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
