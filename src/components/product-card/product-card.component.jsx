import { useContext } from 'react';

import {
  ProductCardContainer,
  ProductCardFooter,
  ProductImage,
  ProductName,
  ProductPrice,
} from './product-card.style';
import { CartContext } from '../../context/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const handelAddToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductImage>
        <img src={imageUrl} alt={`${name}`} />
      </ProductImage>
      <ProductCardFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={handelAddToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
