import { SET_SORT, SET_GENRE } from '../actions/criteriaActions';

const initialState = {
  sort: 'release_date',
  genre: 'All',
};

function criteriaReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SORT:
      return { ...state, sort: action.payload.sort };

    case SET_GENRE:
      return { ...state, genre: action.payload.genre };

    default:
      return state;
  }
}

export default criteriaReducer;
