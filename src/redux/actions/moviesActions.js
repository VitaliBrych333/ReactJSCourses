import { showAddPage, showEditPage } from './windowActions';

export const FETCH_MOVIES_BEGIN   = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const FETCH_FILMID_BEGIN   = 'FETCH_FILMID_BEGIN';
export const FETCH_FILMID_SUCCESS = 'FETCH_FILMID_SUCCESS';
export const FETCH_FILMID_FAILURE = 'FETCH_FILMID_FAILURE';

export const SORT_RELEASE = 'SORT_RELEASE';
export const SORT_RATING = 'SORT_RATING';
export const SORT_GENRE = 'SORT_GENRE';

export const SET_EDITFILM = 'SET_EDITFILM';
export const SET_MOVIES_BY_GENRE = 'SET_MOVIES_BY_GENRE';

export const fetchMoviesBegin = () => ({
    type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = data => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: { data }
});

export const fetchMoviesFailure = error => ({
    type: FETCH_MOVIES_FAILURE,
    payload: { error }
});

export const fetchFilmIdBegin = () => ({
    type: FETCH_FILMID_BEGIN
});

export const fetchFilmIdSuccess = data => ({
    type: FETCH_FILMID_SUCCESS,
    payload: { data }
});

export const fetchFilmIdFailure = error => ({
    type: FETCH_FILMID_FAILURE,
    payload: { error }
});

export const sortRelease = data => ({
    type: SORT_RELEASE,
    payload: {
        data: data
    }
});

export const sortRating = data => ({
    type: SORT_RATING,
    payload: {
        data: data
    }
});

export const setEditFilm = filmEdit => ({
    type: SET_EDITFILM,
    payload: {
        filmEdit: filmEdit
    }
});

export const setMoviesByGenre = data => ({
    type: SET_MOVIES_BY_GENRE,
    payload: {
        moviesByCriteria: data
    }
});

export function fetchMovies(sortBy, value) {
    const request = `http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&search=${value}&searchBy=title`
    return dispatch => {
        dispatch(fetchMoviesBegin());
        return fetch(request)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchMoviesSuccess(json));
                dispatch(setMoviesByGenre(json));
                return json;
            })
            .catch(error => dispatch(fetchMoviesFailure(error)));
    };
}

export function deleteMovie(id) {
    const request = `http://localhost:4000/movies/${id}`
    return () => {
        return fetch(request, { method: 'DELETE' })
            .then(res => {
              return res.json()
            })
            .catch(error => error);
    };
}

export function addMovie(movie) {
    const request = `http://localhost:4000/movies`
    return dispatch => {
        return fetch(request, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(movie)})
            .then(res => {
                if(!res.ok) {
                    throw new Error()
                } else {
                    dispatch(showAddPage(false))
                    return res.json()
                }
            })
            .catch(error => error);
    };
}

export function updateMovie(movie) {
    const request = `http://localhost:4000/movies`
    return dispatch => {
        return fetch(request, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(movie)})
            .then(res => {
                if(!res.ok) {
                    throw new Error()
                } else {
                    dispatch(showEditPage(false))
                    return res.json()
                }
            })
            .catch(error => error);
    };
}

export function fetchMoviesByGenre(sortBy, value) {
    if (typeof value === 'object') {
        value = value.join('%2C%20');
    }

    const request = `http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&searchBy=genres&filter=${value}`;

    return dispatch => {
        dispatch(fetchMoviesBegin());
        return fetch(request)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchMoviesSuccess(json));
                dispatch(setMoviesByGenre(json));
                return json;
            })
            .catch(error => dispatch(fetchMoviesFailure(error)));
    };
}

export function fetchMovieId(id) {
    const request = `http://localhost:4000/movies/${id}`

    return dispatch => {
        dispatch(fetchFilmIdBegin());
        return fetch(request)
            .then(res => {
              return res.json()
            })
            .then(json => {
                dispatch(fetchFilmIdSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchFilmIdFailure(error)));
    };
}

export function filterByGenre(data, genre) {
    const newData = data.slice().filter(film => film.genres.includes(genre));

    return dispatch => {
        dispatch(setMoviesByGenre({ data: newData, totalAmount: newData.length }));
    };
}

