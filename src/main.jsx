import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CheckoutProvider } from './context/checkout.context';
import './main.scss';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <CheckoutProvider>
        <App />
      </CheckoutProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
