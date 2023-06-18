import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { setCategories } from '../../store/categories/category.action';
import { getCollectionAndDocument } from '../../utils/firebase/firebase.utils';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoriesArray = await getCollectionAndDocument('categories');

      dispatch(setCategories(categoriesArray));
    };

    getCategoryMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
