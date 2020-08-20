import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import criteriaReducer from './criteriaReducer';

export default combineReducers({
    movieReducer, criteriaReducer
});
