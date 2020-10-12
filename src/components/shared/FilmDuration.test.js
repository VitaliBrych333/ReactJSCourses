import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Duration from './FilmDuration';

describe('<Duration/>', () => {
  const initialState = {
    movieReducer: {
      filmId: {
        data: {
          release_date: '2019-12-12',
          runtime: 1,
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

  it('should equals to snapshot of Duration', () => {
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <Duration />
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
