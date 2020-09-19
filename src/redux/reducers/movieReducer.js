import {
    FETCH_MOVIES_BEGIN,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_FILMID_BEGIN,
    FETCH_FILMID_SUCCESS,
    FETCH_FILMID_FAILURE,
    SORT_RELEASE,
    SORT_RATING,
    SET_EDITFILM,
    SET_MOVIES_BY_GENRE
} from '../actions/moviesActions';

const initialState = {
    movies: { data: [], totalAmount: 0 },
    moviesByCriteria: { data: [], totalAmount: 0 },
    filmId: {},
    filmEdit: null,
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
            const sortDataByRelease = state.moviesByCriteria.data.slice().sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
            return Object.assign({}, state, {
                moviesByCriteria: {
                    data: sortDataByRelease,
                    totalAmount: state.moviesByCriteria.totalAmount
                }
            });

        case SORT_RATING:
            const sortDataByRating = state.moviesByCriteria.data.slice().sort((a, b) => b.vote_average - a.vote_average);
            return Object.assign({}, state, {
                moviesByCriteria: {
                    data: sortDataByRating,
                    totalAmount: state.moviesByCriteria.totalAmount
                }
            });

        case SET_EDITFILM:
            return {
                ...state,
                filmEdit: action.payload.filmEdit,
            };

        case SET_MOVIES_BY_GENRE:
            return {
                ...state,
                moviesByCriteria: action.payload.moviesByCriteria
            };

        default:
            return state;
    }
}
