export const SHOW_EDITPAGE = 'SHOW_EDITPAGE';
export const SHOW_DELETEPAGE = 'SHOW_DELETEPAGE';
export const SHOW_ADDPAGE = 'SHOW_ADDPAGE';

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
