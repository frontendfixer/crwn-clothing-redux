/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

export const CheckoutContext = createContext({
  isCheckoutOpen: false,
  setIsCheckoutOpen: () => {},
});

export const CheckoutProvider = ({ children }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const value = { isCheckoutOpen, setIsCheckoutOpen };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
