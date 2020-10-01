import { SET_SEARCH, SET_SORT } from "../actions/criteriaActions";

const initialState = {
  search: "title",
  sort: "release_date",
};

function criteriaReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH:
      return Object.assign({}, state, {
        search: action.payload.search,
      });

    case SET_SORT:
      return Object.assign({}, state, {
        sort: action.payload.sort,
      });

    default:
      return state;
  }
}

export default criteriaReducer;
