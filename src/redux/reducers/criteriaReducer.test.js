import expect from 'expect';
import criteriaReducer from './criteriaReducer';
import * as actions from '../actions/criteriaActions';

describe('criteriaReducer', () => {
  it('should return the initial state', () => {
    expect(criteriaReducer(undefined, {})).toEqual({
      genre: 'All',
      sort: 'release_date',
    });
  });

  it('should set up the value for genre', () => {
    const successAction = {
      type: actions.SET_GENRE,
      payload: {
        genre: 'comedy',
      },
    };

    expect(criteriaReducer(undefined, successAction)).toEqual({
      sort: 'release_date',
      genre: 'comedy',
    });
  });

  it('should set up the value for sort', () => {
    const successAction = {
      type: actions.SET_SORT,
      payload: {
        sort: 'rating',
      },
    };

    expect(criteriaReducer(undefined, successAction)).toEqual({
      sort: 'rating',
      genre: 'All',
    });
  });

  it('should handle SET_GENRE', () => {
    const expectedAction = {
      type: actions.SET_GENRE,
      payload: {
        genre: 'All',
      },
    };

    expect(actions.setGenre('All')).toEqual(expectedAction);
  });

  it('should handle SET_SORT', () => {
    const expectedAction = {
      type: actions.SET_SORT,
      payload: {
        sort: 'release',
      },
    };

    expect(actions.setSort('release')).toEqual(expectedAction);
  });
});
