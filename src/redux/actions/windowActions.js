export const SET_EDITFILM = 'SET_EDITFILM';
export const SHOW_EDITPAGE = 'SHOW_EDITPAGE';
export const SHOW_DELETEPAGE = 'SHOW_DELETEPAGE';
export const SHOW_ADDPAGE = 'SHOW_ADDPAGE';

export const setEditFilm = (filmEdit, actionType) => ({
  type: SET_EDITFILM,
  payload: {
    filmEdit,
    actionType,
  },
});

export const showEditPage = (value) => ({
  type: SHOW_EDITPAGE,
  payload: {
    isShowEditPage: value,
  },
});

export const showDeletePage = (value) => ({
  type: SHOW_DELETEPAGE,
  payload: {
    isShowDeletePage: value,
  },
});

export const showAddPage = (value) => ({
  type: SHOW_ADDPAGE,
  payload: {
    isShowAddPage: value,
  },
});
