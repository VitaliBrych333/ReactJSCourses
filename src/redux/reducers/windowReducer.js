import { SHOW_MODAL, SHOW_EDITPAGE, SHOW_DELETEPAGE, SHOW_ADDPAGE  } from '../actions/windowActions';

const initialState = {
    showModal: false,
    showEditPage: false,
    showDeletePage: false,
    showAddPage: false
};

function windowReducer(state = initialState, action) {
    switch(action.type) {
        case SHOW_MODAL:
            return Object.assign({}, state, {
                showModal: action.payload.showModal
            });

        case SHOW_EDITPAGE:
            return Object.assign({}, state, {
                showEditPage: action.payload.showEditPage
            });

        case SHOW_DELETEPAGE:
            return Object.assign({}, state, {
                showDeletePage: action.payload.showDeletePage
            });

        case SHOW_ADDPAGE:
            return Object.assign({}, state, {
                showAddPage: action.payload.showAddPage
            });

        default:
            return state;
    }
}

export default windowReducer;
