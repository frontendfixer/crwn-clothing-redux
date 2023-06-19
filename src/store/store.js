/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root.reducer';

// root-reducer

const loggerMIddleware = store => next => action => {
  if (!action.type) return next(action);

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());

  next(action);
  console.log('nextState: ', store.getState());
};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];
// const middleWares = [loggerMIddleware];

const composedEnhancer = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhancer);
export const store = createStore(persistedReducer, undefined, composedEnhancer);
export const persistor = persistStore(store);
