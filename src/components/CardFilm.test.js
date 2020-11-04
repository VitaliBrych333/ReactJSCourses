import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import CardFilm from './CardFilm';

describe('<CardFilm/>', () => {
  const initialState = {
    movieReducer: {
      movies: {
        data: [],
        total: 0,
      },
      sort: 'vote_average',
    },
  };

  const info = {
    poster_path: 'test',
    release_date: 'test',
    genres: ['Comedy'],
    title: 'test',
    id: 1,
  };

  const props = {
    info,
  };

  let store = configureStore()(initialState);
  store.dispatch = jest.fn();

  it('should call dispatch thrice', () => {
    const dispath = store.dispatch;

    render(
      <Provider store={store}>
        <Router>
          <CardFilm {...props} />
        </Router>
      </Provider>
    );

    const button = screen.getByRole('button');
    const link = screen.getByRole('link');
    const img = screen.getByRole('img');

    userEvent.click(button);
    userEvent.click(link);
    userEvent.hover(img);

    const svg = screen.getByTestId('custom-element');
    userEvent.click(svg);

    const p = screen.queryByText('Edit');
    userEvent.click(p);

    expect(dispath).toHaveBeenCalledTimes(1);
  });
});
