import {
  SHOW_EDITPAGE,
  SHOW_DELETEPAGE,
  SHOW_ADDPAGE,
} from '../actions/windowActions';

const initialState = {
  isShowEditPage: false,
  isShowDeletePage: false,
  isShowAddPage: false,
};

function windowReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_EDITPAGE:
      return { ...state, isShowEditPage: action.payload.isShowEditPage };

    case SHOW_DELETEPAGE:
      return { ...state, isShowDeletePage: action.payload.isShowDeletePage };

    case SHOW_ADDPAGE:
      return { ...state, isShowAddPage: action.payload.isShowAddPage };

    default:
      return state;
  }
}

export default windowReducer;
