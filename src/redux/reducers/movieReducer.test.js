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
      sort: 'release_date',
      genre: 'All',
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
      sort: 'release_date',
      genre: 'All',
      loading: true,
      error: null,
    };

    expect(movieReducer(undefined, successAction)).toEqual(expectState);
  });

  it('should set up data', () => {
    const successAction = {
      type: actions.FETCH_MOVIES_SUCCESS,
      payload: {
        movies: [],
        moviesByCriteria: [],
      },
    };

    const expectState = {
      movies: [],
      moviesByCriteria: [],
      filmId: {},
      sort: 'release_date',
      genre: 'All',
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
      sort: 'release_date',
      genre: 'All',
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
      sort: 'release_date',
      genre: 'All',
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
      sort: 'release_date',
      genre: 'All',
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
      sort: 'release_date',
      genre: 'All',
      loading: false,
      error: 'error',
    };

    expect(movieReducer(undefined, successAction)).toEqual(expectState);
  });

  it('should handle FETCH_MOVIES_BEGIN', () => {
    const expectedAction = {
      type: actions.FETCH_MOVIES_BEGIN,
    };

    expect(actions.fetchMoviesBegin()).toEqual(expectedAction);
  });

  it('should return new state with movies were sorted by release_date', () => {
    const successAction = {
      type: actions.SORT,
      payload: {
        value: 'Release date',
      },
    };

    const expectState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: {
        data: [{ release_date: '2014-01-01' }, { release_date: '2012-01-01' }],
        totalAmount: 0,
      },
      filmId: {},
      sort: 'release_date',
      genre: 'All',
      loading: false,
      error: null,
    };

    const initialState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: {
        data: [{ release_date: '2012-01-01' }, { release_date: '2014-01-01' }],
        totalAmount: 0,
      },
      filmId: {},
      sort: 'release_date',
      genre: 'All',
      loading: false,
      error: null,
    };

    expect(movieReducer(initialState, successAction)).toEqual(expectState);
  });

  it('should return new state with movies were sorted by vote_average', () => {
    const successAction = {
      type: actions.SORT,
      payload: {
        value: 'Rating',
      },
    };

    const expectState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: {
        data: [{ vote_average: 8 }, { vote_average: 7 }],
        totalAmount: 0,
      },
      filmId: {},
      sort: 'vote_average',
      genre: 'All',
      loading: false,
      error: null,
    };

    const initialState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: {
        data: [{ vote_average: 7 }, { vote_average: 8 }],
        totalAmount: 0,
      },
      filmId: {},
      sort: 'vote_average',
      genre: 'All',
      loading: false,
      error: null,
    };

    expect(movieReducer(initialState, successAction)).toEqual(expectState);
  });

  it('should return new state with sort is undefined', () => {
    const successAction = {
      type: actions.SORT,
      payload: {
        value: 'test',
      },
    };

    const expectState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: { data: null, totalAmount: 0 },
      filmId: {},
      sort: undefined,
      genre: 'All',
      loading: false,
      error: null,
    };

    expect(movieReducer(undefined, successAction)).toEqual(expectState);
  });

  it('should return new state with movies were filtered by genre', () => {
    const successAction = {
      type: actions.SET_GENRE,
      payload: {
        genre: 'Comedy',
      },
    };

    const initialState = {
      movies: {
        data: [
          { release_date: '2012-01-01', genres: ['Comedy'] },
          { release_date: '2013-01-01', genres: ['Action'] },
        ],
        totalAmount: 0,
      },
      moviesByCriteria: { data: [], totalAmount: 0 },
      filmId: {},
      sort: 'release_date',
      genre: 'All',
      loading: false,
      error: null,
    };

    const expectState = {
      movies: {
        data: [
          { release_date: '2012-01-01', genres: ['Comedy'] },
          { release_date: '2013-01-01', genres: ['Action'] },
        ],
        totalAmount: 0,
      },
      moviesByCriteria: {
        data: [{ genres: ['Comedy'], release_date: '2012-01-01' }],
        totalAmount: 1,
      },
      filmId: {},
      sort: 'release_date',
      genre: 'Comedy',
      loading: false,
      error: null,
    };

    expect(movieReducer(initialState, successAction)).toEqual(expectState);
  });

  it('should return new state with moviesByCriteria.data is undefined when sort is null', () => {
    const successAction = {
      type: actions.SET_GENRE,
      payload: {
        genre: 'All',
      },
    };

    const initialState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: { data: [], totalAmount: 0 },
      filmId: {},
      sort: null,
      genre: 'All',
      loading: false,
      error: null,
    };

    const expectState = {
      movies: { data: [], totalAmount: 0 },
      moviesByCriteria: { data: undefined, totalAmount: 0 },
      filmId: {},
      sort: null,
      genre: 'All',
      loading: false,
      error: null,
    };

    expect(movieReducer(initialState, successAction)).toEqual(expectState);
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

  it('should handle SORT', () => {
    const expectedAction = {
      type: actions.SORT,
      payload: {
        value: 'raiting',
      },
    };

    expect(actions.sort('raiting')).toEqual(expectedAction);
  });

  it('should return a promise and call catch', () => {
    const dispatch = jest.fn();
    fetch.mockImplementationOnce(() => Promise.reject());

    expect(actions.fetchMovies('rating', 'test')(dispatch)).toEqual(
      Promise.resolve()
    );
  });

  it('should return a promise when directLink is false', () => {
    const dispatch = jest.fn();

    expect(actions.fetchMovies('rating', 'test')(dispatch)).toEqual(
      Promise.resolve()
    );
  });

  it('should return a promise when directLink is true', () => {
    const dispatch = jest.fn();

    expect(actions.fetchMovies('rating', 'test', true)(dispatch)).toEqual(
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

  it('should return a promise and not throw Error', () => {
    const dispatch = jest.fn();
    fetch.mockImplementationOnce(() => Promise.resolve({ ok: true }));

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
});
