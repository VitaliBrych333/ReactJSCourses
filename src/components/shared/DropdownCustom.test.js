import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropdownCustom from './DropdownCustom';

global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});

describe('<DropdownCustom/>', () => {
  const initialState = {
    movieReducer: {
      moviesByCriteria: {
        data: [],
      },
    },
    criteriaReducer: {
      sort: 'release_date',
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

  it('should not set Release date or Rating', () => {
    render(
      <Provider store={store}>
        <DropdownCustom />
      </Provider>
    );

    const countValue = screen.queryByRole('button', {
      class: 'dropdown-item',
    });
    screen.queryAllByText('Release date')[1].textContent = 'test';
    userEvent.click(screen.getByText('test'));

    expect(countValue.textContent).toBe('test');
  });
});
