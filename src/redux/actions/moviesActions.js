import { showAddPage, showEditPage, showDeletePage } from './windowActions';

export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const FETCH_FILMID_BEGIN = 'FETCH_FILMID_BEGIN';
export const FETCH_FILMID_SUCCESS = 'FETCH_FILMID_SUCCESS';
export const FETCH_FILMID_FAILURE = 'FETCH_FILMID_FAILURE';

export const SORT = 'SORT';
export const SET_GENRE = 'SET_GENRE';
export const SORT_GENRE = 'SORT_GENRE';

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

export const fetchMoviesSuccess = (movies, moviesByCriteria = movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies, moviesByCriteria },
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error },
});

export const fetchFilmIdBegin = () => ({
  type: FETCH_FILMID_BEGIN,
});

export const fetchFilmIdSuccess = (data) => ({
  type: FETCH_FILMID_SUCCESS,
  payload: { data },
});

export const fetchFilmIdFailure = (error) => ({
  type: FETCH_FILMID_FAILURE,
  payload: { error },
});

export const sort = (value) => ({
  type: SORT,
  payload: { value },
});

export const setGenre = (genre) => ({
  type: SET_GENRE,
  payload: { genre },
});

export function fetchMovies(sortBy, value, directLink = false) {
  const request = `http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&search=${value}&searchBy=title`;

  return (dispatch) => {
    dispatch(fetchMoviesBegin());
    return fetch(request)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchMoviesSuccess(json));
        !directLink ? dispatch(setGenre('All')) : undefined;
        return json;
      })
      .catch((error) => dispatch(fetchMoviesFailure(error)));
  };
}

export function deleteMovie(id, newMoviesByCriteria, newMovies) {
  const request = `http://localhost:4000/movies/${id}`;
  return (dispatch) =>
    fetch(request, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        } else {
          dispatch(fetchMoviesSuccess(newMovies, newMoviesByCriteria));
          dispatch(showDeletePage(false));
          return res;
        }
      })
      .catch((error) => error);
}

export function addMovie(movie) {
  const request = 'http://localhost:4000/movies';
  return (dispatch) =>
    fetch(request, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        } else {
          dispatch(showAddPage(false));
          return res.json();
        }
      })
      .catch((error) => error);
}

export function updateMovie(movie, newMoviesByCriteria, newMovies) {
  const request = 'http://localhost:4000/movies';
  return (dispatch) =>
    fetch(request, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        } else {
          dispatch(fetchMoviesSuccess(newMovies, newMoviesByCriteria));
          dispatch(showEditPage(false));
          return res.json();
        }
      })
      .catch((error) => error);
}

export function fetchMoviesByGenre(sortBy, value) {
  if (typeof value === 'object') {
    value = value.join('%2C%20');
  }

  const request = `http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&searchBy=genres&filter=${value}`;

  return (dispatch) => {
    dispatch(fetchMoviesBegin());
    return fetch(request)
      .then((res) => res.json())
      .then((json) => {
        dispatch(setGenre('All'));
        dispatch(fetchMoviesSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchMoviesFailure(error)));
  };
}

export function fetchMovieId(id) {
  const request = `http://localhost:4000/movies/${id}`;

  return (dispatch) => {
    dispatch(fetchFilmIdBegin());
    return fetch(request)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchFilmIdSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchFilmIdFailure(error)));
  };
}
