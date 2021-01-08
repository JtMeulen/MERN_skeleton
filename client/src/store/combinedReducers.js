import { combineReducers } from 'redux';
import AppReducer from './app-reducer';

const combinedReducers = combineReducers({
  app: AppReducer
});

export default combinedReducers;
