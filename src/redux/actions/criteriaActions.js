export const SET_SEARCH = 'SET_SEARCH';
export const SET_SORT = 'SET_SORT';
export const SET_GENRE = 'SET_GENRE';

export const setSearch = (text) => ({
  type: SET_SEARCH,
  payload: {
    search: text,
  },
});

export const setSort = (text) => ({
  type: SET_SORT,
  payload: {
    sort: text,
  },
});

export const setGenre = (text) => ({
  type: SET_GENRE,
  payload: {
    genre: text,
  },
});
