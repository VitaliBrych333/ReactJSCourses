import movieReducer from './movieReducer';
import * as actions from '../actions/moviesActions';
import expect from 'expect';

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
}

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  }
  const next = jest.fn()

  const invoke = action => thunk(store)(next)(action);

  return { store, next, invoke };
}

describe('movieReducer', () => {
    it('should return the initial state', () => {
        expect(movieReducer(undefined, {})).toEqual({ movies: { data: [], total: 0 }, filmId: {}, filmEdit: [], loading: false, error: null});
    });

    it('should set up loading is true', () => {
        const successAction = {
            type: actions.FETCH_MOVIES_BEGIN,
        };

        const expectState = {
            movies: { data: [], total: 0 },
            filmId: {},
            filmEdit: [],
            loading: true,
            error: null
        };

        expect(movieReducer(undefined, successAction)).toEqual(expectState);
    });

    it('should set up data', () => {
        const successAction = {
            type: actions.FETCH_MOVIES_SUCCESS,
            payload: {
                data: { data: [1, 2], total: 2 }
            },
        };

        const expectState = {
            movies: { data: [1, 2], total: 2 },
            filmId: {},
            filmEdit: [],
            loading: false,
            error: null
        };

        expect(movieReducer(undefined, successAction)).toEqual(expectState);
    });

    it('should return error', () => {
        const successAction = {
            type: actions.FETCH_MOVIES_FAILURE,
            payload: {
                error: 'error'
            },
        };

        const expectState = {
            movies: { data: [], total: 0 },
            filmId: {},
            filmEdit: [],
            loading: false,
            error: 'error'
        };

        expect(movieReducer(undefined, successAction)).toEqual(expectState);
    });

    it('should set up loading is true', () => {
        const successAction = {
            type: actions.FETCH_FILMID_BEGIN,
        };

        const expectState = {
            movies: { data: [], total: 0 },
            filmId: {},
            filmEdit: [],
            loading: true,
            error: null
        };

        expect(movieReducer(undefined, successAction)).toEqual(expectState);
    });

    it('should set up data', () => {
        const successAction = {
            type: actions.FETCH_FILMID_SUCCESS,
            payload: { id: 'test'}
        };

        const expectState = {
            movies: { data: [], total: 0 },
            filmId: { id: 'test'},
            filmEdit: [],
            loading: false,
            error: null
        };

        expect(movieReducer(undefined, successAction)).toEqual(expectState);
    });

    it('should return error', () => {
        const successAction = {
            type: actions.FETCH_FILMID_FAILURE,
            payload: {
                error: 'error'
            }
        };

        const expectState = {
            movies: { data: [], total: 0 },
            filmId: {},
            filmEdit: [],
            loading: false,
            error: 'error'
        };

        expect(movieReducer(undefined, successAction)).toEqual(expectState);
    });

    it('should sort by date release desc ', () => {
        const initialState = {
            movies: { data: [ {release_date: 2017}, {release_date: 2019} ], total: 2 },
        };

        const successAction = {
            type: actions.SORT_RELEASE,
        };

        const expectState = {
            movies: { data: [ {release_date: 2019}, {release_date: 2017} ], total: 2 },
        };

        expect(movieReducer(initialState, successAction)).toEqual(expectState);
    });

    it('should sort by rating desc ', () => {
        const initialState = {
            movies: { data: [ {vote_average: 7.6}, {vote_average: 9.0} ], total: 2 },
        };

        const successAction = {
            type: actions.SORT_RATING,
        };

        const expectState = {
            movies: { data: [ {vote_average: 9.0}, {vote_average: 7.6} ], total: 2 },
        };

        expect(movieReducer(initialState, successAction)).toEqual(expectState);
    });

    it('should handle FETCH_MOVIES_BEGIN', () => {
        const expectedAction = {
            type: actions.FETCH_MOVIES_BEGIN,
        }

        expect(actions.fetchMoviesBegin()).toEqual(expectedAction);
    });

    it('should handle FETCH_MOVIES_SUCCESS', () => {
        const expectedAction = {
            type: actions.FETCH_MOVIES_SUCCESS,
            payload: {
                data: 'test',
            },
        }

        expect(actions.fetchMoviesSuccess('test')).toEqual(expectedAction);
    });

    it('should handle FETCH_MOVIES_FAILURE', () => {
        const expectedAction = {
            type: actions.FETCH_MOVIES_FAILURE,
            payload: {
                error: 'testError',
            },
        }

        expect(actions.fetchMoviesFailure('testError')).toEqual(expectedAction);
    });

    it('should handle FETCH_FILMID_BEGIN', () => {
        const expectedAction = {
            type: actions.FETCH_FILMID_BEGIN,
        }

        expect(actions.fetchFilmIdBegin()).toEqual(expectedAction);
    });

    it('should handle FETCH_FILMID_SUCCESS', () => {
        const expectedAction = {
            type: actions.FETCH_FILMID_SUCCESS,
            payload: {
                data: 'test',
            },
        }

        expect(actions.fetchFilmIdSuccess('test')).toEqual(expectedAction);
    });

    it('should handle FETCH_FILMID_FAILURE', () => {
        const expectedAction = {
            type: actions.FETCH_FILMID_FAILURE,
            payload: {
                error: 'testError',
            },
        }

        expect(actions.fetchFilmIdFailure('testError')).toEqual(expectedAction);
    });

    it('should handle SORT_RELEASE', () => {
        const expectedAction = {
            type: actions.SORT_RELEASE,
            payload: {
                data: 'release'
            }
        }

        expect(actions.sortRelease('release')).toEqual(expectedAction);
    });

    it('should handle SORT_RATING', () => {
        const expectedAction = {
            type: actions.SORT_RATING,
            payload: {
                data: 'rating'
            }
        }

        expect(actions.sortRating('rating')).toEqual(expectedAction);
    });

    it('should return a promise', () => {
        const dispatch = jest.fn();

        expect(actions.fetchMovies('rating', 'title', 'test')(dispatch).then().then()).toEqual(Promise.resolve());
    });


    it('should return a promise when value is object', () => {
        const dispatch = jest.fn();

        expect(actions.fetchMoviesByGenre('rating', ['test', 'test'])(dispatch)).toEqual(Promise.resolve());
    });

    it('should return a promise when value is string', () => {
        const dispatch = jest.fn();

        expect(actions.fetchMoviesByGenre('rating', 'test')(dispatch)).toEqual(Promise.resolve());
    });

    it('should return a promise', () => {
        const dispatch = jest.fn();

        expect(actions.fetchMovieId('123')(dispatch)).toEqual(Promise.resolve());
    });
});
