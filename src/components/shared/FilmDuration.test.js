import React from 'react';
import { render } from '@testing-library/react';
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
  const store = configureStore()(initialState);

  it('should equals to snapshot of Duration', () => {
    const renderedValue = render(
      <Provider store={store}>
        <Duration />
      </Provider>
    );

    expect(renderedValue).toMatchSnapshot();
  });
});
