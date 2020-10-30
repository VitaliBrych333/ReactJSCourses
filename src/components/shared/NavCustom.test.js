/* eslint-disable no-unused-vars */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavCustom from './NavCustom';

describe('<NavCustom/>', () => {
  let store;
  let container = null;
  const initialState = {
    movieReducer: {
      genre: 'Documentary',
    },
  };

  const mockStore = configureStore();

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = mockStore(initialState);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should be textContent is Documentary for second link when genre is Documentary', () => {
    render(
      <Provider store={store}>
        <NavCustom />
      </Provider>
    );

    userEvent.click(screen.queryAllByRole('button')[1]);

    expect(screen.queryAllByRole('button')[1].textContent).toBe('Documentary');
  });

  it('should be textContent is Comedy for link when genre is Comedy', () => {
    store = mockStore({
      movieReducer: {
        genre: 'Comedy',
      },
    });
    render(
      <Provider store={store}>
        <NavCustom />
      </Provider>
    );

    userEvent.click(screen.queryAllByRole('button')[2]);

    expect(screen.queryAllByRole('button')[2].textContent).toBe('Comedy');
  });

  it('should be textContent is Horror for link when genre is Horror', () => {
    store = mockStore({
      movieReducer: {
        genre: 'Horror',
      },
    });
    render(
      <Provider store={store}>
        <NavCustom />
      </Provider>
    );

    userEvent.click(screen.queryAllByRole('button')[3]);

    expect(screen.queryAllByRole('button')[3].textContent).toBe('Horror');
  });

  it('should be textContent is Crime for link when genre is Crime', () => {
    store = mockStore({
      movieReducer: {
        genre: 'Crime',
      },
    });
    render(
      <Provider store={store}>
        <NavCustom />
      </Provider>
    );

    userEvent.click(screen.queryAllByRole('button')[4]);

    expect(screen.queryAllByRole('button')[4].textContent).toBe('Crime');
  });
});