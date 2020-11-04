import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropdownCustom from './DropdownCustom';

describe('<DropdownCustom/>', () => {
  const initialState = {
    movieReducer: {
      moviesByCriteria: {
        data: [],
      },
      sort: 'release_date',
    },
  };
  const store = configureStore()(initialState);

  it('should set Rating', () => {
    render(
      <Provider store={store}>
        <DropdownCustom />
      </Provider>
    );

    const countValue = screen.queryByRole('button', {
      class: 'dropdown-item',
    });
    userEvent.click(screen.getByText('Rating'));

    expect(countValue.textContent).toBe('Rating');
  });

  it('should set Release date', () => {
    render(
      <Provider store={store}>
        <DropdownCustom />
      </Provider>
    );

    const countValue = screen.queryByRole('button', {
      class: 'dropdown-item',
    });
    userEvent.click(screen.queryAllByText('Release date')[1]);

    expect(countValue.textContent).toBe('Release date');
  });
});
