import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import criteriaReducer from './criteriaReducer';
import windowReducer from './windowReducer';

export default combineReducers({
    movieReducer, criteriaReducer, windowReducer
});
