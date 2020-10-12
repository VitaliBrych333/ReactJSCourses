import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rating from './FilmRating';

describe('<Rating/>', () => {
  const initialState = {
    movieReducer: {
      filmId: {
        data: {
          vote_average: 1,
          title: 'test',
          tagline: 'test',
        },
      },
    },
  };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = mockStore(initialState);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should equals to snapshot of Rating', () => {
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <Rating />
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
