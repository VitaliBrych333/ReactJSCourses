import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import DeleteWindow from './DeleteWindow';

describe('<DeleteWindow/>', () => {
  const initialState = {
    movieReducer: {
      moviesByCriteria: {
        data: [{ id: 1 }],
        totalAmount: 1,
      },
      movies: {
        data: [{ id: 1 }],
        totalAmount: 1,
      },
      sort: 'release_date',
    },
    windowReducer: {
      filmEdit: {
        id: 1,
      },
    },
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
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

  it('should not change Confirm', () => {
    render(
      <Provider store={store}>
        <DeleteWindow />
      </Provider>
    );

    const countValue = screen.getByText('Confirm');
    userEvent.click(countValue);

    expect(countValue.textContent).toBe('Confirm');
  });
});
