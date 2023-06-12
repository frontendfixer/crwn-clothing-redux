import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  CategoryContainer,
  CategoryTitle,
  CategoryItems,
} from './category.style';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../context/categories.context';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <CategoryContainer>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryItems>
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryItems>
    </CategoryContainer>
  );
};

export default Category;
