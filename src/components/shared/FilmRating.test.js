import React from 'react';
import { render } from '@testing-library/react';
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
  const store = configureStore()(initialState);

  it('should equals to snapshot of Rating', () => {
    const renderedValue = render(
      <Provider store={store}>
        <Rating />
      </Provider>
    );

    expect(renderedValue).toMatchSnapshot();
  });
});
