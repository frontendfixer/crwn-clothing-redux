/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useEffect } from 'react';

// import SHOP_DATA from '../shop-data';
// import { addCollectionAndDocument } from '../utils/firebase/firebase.utils';
import { getCollectionAndDocument } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(() => {
  //   addCollectionAndDocument('categories', SHOP_DATA, 'items');
  // }, []);

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionAndDocument();
      setCategoriesMap(categoryMap);
    };

    getCategoryMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
