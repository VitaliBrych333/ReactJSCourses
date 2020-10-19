import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import windowReducer from './windowReducer';

export default combineReducers({
  movieReducer,
  windowReducer,
});
