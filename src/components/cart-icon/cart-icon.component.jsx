import { useDispatch, useSelector } from 'react-redux';

import { IconContainer, ItemCount, CountContainer } from './cart-icon.style';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selector';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <IconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon alt="" aria-hidden="true" className="icon" />
      {cartCount !== 0 && (
        <CountContainer>
          <ItemCount>{cartCount}</ItemCount>
        </CountContainer>
      )}
    </IconContainer>
  );
};

export default CartIcon;
