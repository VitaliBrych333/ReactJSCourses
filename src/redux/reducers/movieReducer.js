import {
    FETCH_MOVIES_BEGIN,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_FILMID_BEGIN,
    FETCH_FILMID_SUCCESS,
    FETCH_FILMID_FAILURE,
    SORT_RELEASE,
    SORT_RATING,
    SET_EDITFILM
} from '../actions/moviesActions';

const initialState = {
    movies: { data: [], total: 0 },
    filmId: {},
    filmEdit: [],
    loading: false,
    error: null
};

export default function movieReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.data
            };

        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                movies: { data: [], total: 0 },
            };

        case FETCH_FILMID_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_FILMID_SUCCESS:
            return {
                ...state,
                loading: false,
                filmId: action.payload
            };

        case FETCH_FILMID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                filmId: {},
            };

        case SORT_RELEASE:
            let sortDataByRelease = state.movies.data.slice().sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
            return Object.assign({}, state, {
                movies: {
                    data: sortDataByRelease,
                    total: state.movies.total
                }
            });

        case SORT_RATING:
            let sortDataByRating = state.movies.data.slice().sort((a, b) => b.vote_average - a.vote_average);
            return Object.assign({}, state, {
                movies: {
                    data: sortDataByRating,
                    total: state.movies.total
                }
            });

        case SET_EDITFILM:
            return {
                ...state,
                filmEdit: action.payload.filmEdit,
            };

        default:
            return state;
    };
};
