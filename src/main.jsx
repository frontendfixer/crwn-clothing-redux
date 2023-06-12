import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CartProvider } from './context/cart.context';
import { CategoriesProvider } from './context/categories.context';
import { CheckoutProvider } from './context/checkout.context';
import { UserProvider } from './context/user.context';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CheckoutProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CheckoutProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
