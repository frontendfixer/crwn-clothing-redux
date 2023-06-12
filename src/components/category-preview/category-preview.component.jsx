import {
  CategoryContainer,
  CategoryHeading,
  ProductPreview,
  MoreButton,
} from './category-preview.style';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryContainer>
      <CategoryHeading>
        <span className="title">{title.toUpperCase()}</span>
        <MoreButton to={title}>more&#10940;</MoreButton>
      </CategoryHeading>
      <ProductPreview>
        {products
          .filter((_, index) => index < 4)
          .map(product => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </ProductPreview>
    </CategoryContainer>
  );
};

export default CategoryPreview;
