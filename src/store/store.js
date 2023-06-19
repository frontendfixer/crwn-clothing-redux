/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { rootReducer } from './root.reducer';
// root-reducer

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// import { loggerMIddleware } from './middleware/logger';
// const middleWares = [loggerMIddleware];
// don't show 'logger' when we are in production
const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhancer);
export const store = createStore(persistedReducer, undefined, composedEnhancer);
export const persistor = persistStore(store);
