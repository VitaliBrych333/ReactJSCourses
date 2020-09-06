export const FETCH_MOVIES_BEGIN   = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const FETCH_FILMID_BEGIN   = 'FETCH_FILMID_BEGIN';
export const FETCH_FILMID_SUCCESS = 'FETCH_FILMID_SUCCESS';
export const FETCH_FILMID_FAILURE = 'FETCH_FILMID_FAILURE';

export const SORT_RELEASE = 'SORT_RELEASE';
export const SORT_RATING = 'SORT_RATING';

export const SET_EDITFILM = 'SET_EDITFILM';

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

export function fetchMovies(sortBy, searchBy, value) {
    const request = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${value}&searchBy=${searchBy}`

    return dispatch => {
        dispatch(fetchMoviesBegin());
        return fetch(request)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchMoviesSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchMoviesFailure(error)));
    };
};

export function fetchMoviesByGenre(sortBy, value) {

    if (typeof value === 'object') {
        value = value.join('%2C%20');
    }

    const request = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&searchBy=genres&filter=${value}`;

    return dispatch => {
        dispatch(fetchMoviesBegin());
        return fetch(request)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchMoviesSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchMoviesFailure(error)));
    };
};

export function fetchMovieId(id) {
    const request = `https://reactjs-cdp.herokuapp.com/movies/${id}`

    return dispatch => {
        dispatch(fetchFilmIdBegin());
        return fetch(request)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchFilmIdSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchFilmIdFailure(error)));
    };
};
