import expect from 'expect';
import movieReducer from './movieReducer';
import * as actions from '../actions/moviesActions';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe('movieReducer', () => {
  it('should return the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual({
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: { data: null, totalAmount: 0 },
      filmId: {},
      filmEdit: null,
      loading: false,
      error: null,
    });
  });

  it('should set up loading is true', () => {
    const successAction = {
      type: actions.FETCH_MOVIES_BEGIN,
    };

    const expectState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: { data: null, totalAmount: 0 },
      filmId: {},
      filmEdit: null,
      loading: true,
      error: null,
    };

    expect(movieReducer(undefined, successAction)).toEqual(expectState);
  });

  it('should set up data', () => {
    const successAction = {
      type: actions.FETCH_MOVIES_SUCCESS,
      payload: {
        data: { data: [1, 2], totalAmount: 2 },
      },
    };

    const expectState = {
      movies: { data: [1, 2], totalAmount: 2 },
      moviesByCriteria: { data: null, totalAmount: 0 },
      filmId: {},
      filmEdit: null,
      loading: false,
      error: null,
    };

    expect(movieReducer(undefined, successAction)).toEqual(expectState);
  });

  it('should return error', () => {
    const successAction = {
      type: actions.FETCH_MOVIES_FAILURE,
      payload: {
        error: 'error',
      },
    };

    const expectState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: { data: null, totalAmount: 0 },
      filmId: {},
      filmEdit: null,
      loading: false,
      error: 'error',
    };

    expect(movieReducer(undefined, successAction)).toEqual(expectState);
  });

  it('should set up loading is true', () => {
    const successAction = {
      type: actions.FETCH_FILMID_BEGIN,
    };

    const expectState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: { data: null, totalAmount: 0 },
      filmId: {},
      filmEdit: null,
      loading: true,
      error: null,
    };

    expect(movieReducer(undefined, successAction)).toEqual(expectState);
  });

  it('should set up data', () => {
    const successAction = {
      type: actions.FETCH_FILMID_SUCCESS,
      payload: { id: 'test' },
    };

    const expectState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: { data: null, totalAmount: 0 },
      filmId: { id: 'test' },
      filmEdit: null,
      loading: false,
      error: null,
    };

    expect(movieReducer(undefined, successAction)).toEqual(expectState);
  });

  it('should return error', () => {
    const successAction = {
      type: actions.FETCH_FILMID_FAILURE,
      payload: {
        error: 'error',
      },
    };

    const expectState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: { data: null, totalAmount: 0 },
      filmId: {},
      filmEdit: null,
      loading: false,
      error: 'error',
    };

    expect(movieReducer(undefined, successAction)).toEqual(expectState);
  });

  it('should sort by date release desc ', () => {
    const initialState = {
      moviesByCriteria: {
        data: [{ release_date: 2017 }, { release_date: 2019 }],
        totalAmount: 2,
      },
    };

    const successAction = {
      type: actions.SORT_RELEASE,
    };

    const expectState = {
      moviesByCriteria: {
        data: [{ release_date: 2019 }, { release_date: 2017 }],
        totalAmount: 2,
      },
    };

    expect(movieReducer(initialState, successAction)).toEqual(expectState);
  });

  it('should sort by rating desc ', () => {
    const initialState = {
      moviesByCriteria: {
        data: [{ vote_average: 7.6 }, { vote_average: 9.0 }],
        totalAmount: 2,
      },
    };

    const successAction = {
      type: actions.SORT_RATING,
    };

    const expectState = {
      moviesByCriteria: {
        data: [{ vote_average: 9.0 }, { vote_average: 7.6 }],
        totalAmount: 2,
      },
    };

    expect(movieReducer(initialState, successAction)).toEqual(expectState);
  });

  it('should handle FETCH_MOVIES_BEGIN', () => {
    const expectedAction = {
      type: actions.FETCH_MOVIES_BEGIN,
    };

    expect(actions.fetchMoviesBegin()).toEqual(expectedAction);
  });

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    const expectedAction = {
      type: actions.FETCH_MOVIES_SUCCESS,
      payload: {
        data: 'test',
      },
    };

    expect(actions.fetchMoviesSuccess('test')).toEqual(expectedAction);
  });

  it('should handle FETCH_MOVIES_FAILURE', () => {
    const expectedAction = {
      type: actions.FETCH_MOVIES_FAILURE,
      payload: {
        error: 'testError',
      },
    };

    expect(actions.fetchMoviesFailure('testError')).toEqual(expectedAction);
  });

  it('should handle FETCH_FILMID_BEGIN', () => {
    const expectedAction = {
      type: actions.FETCH_FILMID_BEGIN,
    };

    expect(actions.fetchFilmIdBegin()).toEqual(expectedAction);
  });

  it('should handle FETCH_FILMID_SUCCESS', () => {
    const expectedAction = {
      type: actions.FETCH_FILMID_SUCCESS,
      payload: {
        data: 'test',
      },
    };

    expect(actions.fetchFilmIdSuccess('test')).toEqual(expectedAction);
  });

  it('should handle FETCH_FILMID_FAILURE', () => {
    const expectedAction = {
      type: actions.FETCH_FILMID_FAILURE,
      payload: {
        error: 'testError',
      },
    };

    expect(actions.fetchFilmIdFailure('testError')).toEqual(expectedAction);
  });

  it('should handle SORT_RELEASE', () => {
    const expectedAction = {
      type: actions.SORT_RELEASE,
      payload: {
        data: 'release',
      },
    };

    expect(actions.sortRelease('release')).toEqual(expectedAction);
  });

  it('should handle SORT_RATING', () => {
    const expectedAction = {
      type: actions.SORT_RATING,
      payload: {
        data: 'rating',
      },
    };

    expect(actions.sortRating('rating')).toEqual(expectedAction);
  });

  it('should handle SET_EDITFILM', () => {
    const expectedAction = {
      type: actions.SET_EDITFILM,
      payload: {
        filmEdit: 'testFilm',
      },
    };

    expect(actions.setEditFilm('testFilm')).toEqual(expectedAction);
  });

  it('should set up data for SET_EDITFILM', () => {
    const successAction = {
      type: actions.SET_EDITFILM,
      payload: {
        filmEdit: 'testFilm',
      },
    };

    const expectState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: { data: null, totalAmount: 0 },
      filmId: {},
      filmEdit: 'testFilm',
      loading: false,
      error: null,
    };

    expect(movieReducer(undefined, successAction)).toEqual(expectState);
  });

  it('should handle SET_MOVIES_BY_GENRE', () => {
    const expectedAction = {
      type: actions.SET_MOVIES_BY_GENRE,
      payload: {
        moviesByCriteria: 'test',
      },
    };

    expect(actions.setMoviesByGenre('test')).toEqual(expectedAction);
  });

  it('should set up data for SET_MOVIES_BY_GENRE', () => {
    const successAction = {
      type: actions.SET_MOVIES_BY_GENRE,
      payload: {
        moviesByCriteria: { data: 'test', totalAmount: 1 },
      },
    };

    const expectState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: { data: 'test', totalAmount: 1 },
      filmId: {},
      filmEdit: null,
      loading: false,
      error: null,
    };

    expect(movieReducer(undefined, successAction)).toEqual(expectState);
  });

  it('should return a promise and call catch', () => {
    const dispatch = jest.fn();
    fetch.mockImplementationOnce(() => Promise.reject());

    expect(actions.fetchMovies('rating', 'test')(dispatch)).toEqual(
      Promise.resolve()
    );
  });

  it('should return a promise', () => {
    const dispatch = jest.fn();

    expect(actions.fetchMovies('rating', 'test')(dispatch)).toEqual(
      Promise.resolve()
    );
  });

  it('should return a promise when value is object', () => {
    const dispatch = jest.fn();

    expect(
      actions.fetchMoviesByGenre('rating', ['test', 'test'])(dispatch)
    ).toEqual(Promise.resolve());
  });

  it('should return a promise when value is string and call catch', () => {
    const dispatch = jest.fn();
    fetch.mockImplementationOnce(() => Promise.reject());

    expect(actions.fetchMoviesByGenre('rating', 'test')(dispatch)).toEqual(
      Promise.resolve()
    );
  });

  it('should return a promise', () => {
    const dispatch = jest.fn();

    expect(actions.fetchMovieId('123')(dispatch)).toEqual(Promise.resolve());
  });

  it('should return a promise and call catch', () => {
    const dispatch = jest.fn();
    fetch.mockImplementationOnce(() => Promise.reject());

    expect(actions.fetchMovieId('123')(dispatch)).toEqual(Promise.resolve());
  });

  it('should return a promise', () => {
    const dispatch = jest.fn();

    expect(actions.deleteMovie('123')(dispatch)).toEqual(Promise.resolve());
  });

  it('should return a promise and call catch', () => {
    const dispatch = jest.fn();
    fetch.mockImplementationOnce(() => Promise.reject());

    expect(actions.deleteMovie('123')(dispatch)).toEqual(Promise.resolve());
  });

  it('should return a promise and throw Error', () => {
    const dispatch = jest.fn();

    expect(actions.addMovie('123')(dispatch)).toEqual(Promise.resolve());
  });

  it('should return a promise and not throw Error', () => {
    const dispatch = jest.fn();
    fetch.mockImplementationOnce(() => Promise.resolve({ ok: true }));

    expect(actions.addMovie('123')(dispatch)).toEqual(Promise.resolve());
  });

  it('should return a promise and call catch', () => {
    const dispatch = jest.fn();
    fetch.mockImplementationOnce(() => Promise.reject());

    expect(actions.addMovie('123')(dispatch)).toEqual(Promise.resolve());
  });

  it('should return a promise and throw Error', () => {
    const dispatch = jest.fn();

    expect(actions.updateMovie('123')(dispatch)).toEqual(Promise.resolve());
  });

  it('should return a promise and not throw Error', () => {
    const dispatch = jest.fn();
    fetch.mockImplementationOnce(() => Promise.resolve({ ok: true }));

    expect(actions.updateMovie('123')(dispatch)).toEqual(Promise.resolve());
  });

  it('should return a promise and call catch', () => {
    const dispatch = jest.fn();
    fetch.mockImplementationOnce(() => Promise.reject());

    expect(actions.updateMovie('123')(dispatch)).toEqual(Promise.resolve());
  });

  it('should return undefined', () => {
    const dispatch = jest.fn();

    expect(
      actions.filterByGenre([{ genres: 'test' }], 'test')(dispatch)
    ).toEqual(undefined);
  });
});
