/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});
