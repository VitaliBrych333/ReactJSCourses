export const SHOW_MODAL = "SHOW_MODAL";
export const SHOW_EDITPAGE = "SHOW_EDITPAGE";
export const SHOW_DELETEPAGE = "SHOW_DELETEPAGE";
export const SHOW_ADDPAGE = "SHOW_ADDPAGE";

export const showModal = (value) => ({
  type: SHOW_MODAL,
  payload: {
    showModal: value,
  },
});

export const showEditPage = (value) => ({
  type: SHOW_EDITPAGE,
  payload: {
    showEditPage: value,
  },
});

export const showDeletePage = (value) => ({
  type: SHOW_DELETEPAGE,
  payload: {
    showDeletePage: value,
  },
});

export const showAddPage = (value) => ({
  type: SHOW_ADDPAGE,
  payload: {
    showAddPage: value,
  },
});
