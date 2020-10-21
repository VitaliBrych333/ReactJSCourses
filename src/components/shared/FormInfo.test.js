import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';
import selectEvent from 'react-select-event';
import { act } from 'react-dom/test-utils';
import FormInfo from './FormInfo';

describe('<FormInfo/>', () => {
  const initialState = {
    movieReducer: {
      moviesByCriteria: {
        data: [],
      },
      sort: 'release_date',
    },
    windowReducer: {
      filmEdit: {
        id: 1,
        genres: ['Comedy', 'Action'],
      },
      isShowEditPage: true,
      isShowDeletePage: true,
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

  it('should not reset name of page for Edit', async () => {
    render(
      <Provider store={store}>
        <FormInfo namePage="Edit movie" nameButton="Save" />
      </Provider>
    );

    const reset = screen.getByText('Reset');
    const close = screen.queryAllByRole('button');
    const h2 = screen.getByText('Edit movie');

    act(() => {
      fireEvent.click(reset);
      fireEvent.click(close[0]);
    });

    expect(h2.textContent).toBe('Edit movie');
  });

  it('should not change textContent for Reset button if namePage is Test', async () => {
    render(
      <Provider store={store}>
        <FormInfo namePage="Test" nameButton="Save" />
      </Provider>
    );

    const reset = screen.getByText('Reset');
    const close = screen.queryAllByRole('button');

    act(() => {
      fireEvent.click(reset);
      fireEvent.click(close[0]);
    });

    expect(reset.textContent).toBe('Reset');
  });

  it('should not reset name of page for Add', async () => {
    render(
      <Provider store={store}>
        <FormInfo namePage="Add movie" nameButton="Save" />
      </Provider>
    );

    const reset = screen.getByText('Reset');
    const close = screen.queryAllByRole('button');

    const h2 = screen.getByText('Add movie');

    act(() => {
      fireEvent.click(reset);
      fireEvent.click(close[0]);
    });

    expect(h2.textContent).toBe('Add movie');
  });

  it('should show Required for empty Title', async () => {
    render(
      <Provider store={store}>
        <FormInfo namePage="Add movie" nameButton="Save" />
      </Provider>
    );
    const title = screen.getByPlaceholderText('Title');
    const genre = document.querySelector('.select');

    await selectEvent.select(genre, ['Comedy']);

    act(() => {
      fireEvent.blur(title);
    });

    expect(title.nextSibling.innerHTML).toBe('Required');
  });

  it('should show Required for empty Url', async () => {
    render(
      <Provider store={store}>
        <FormInfo namePage="Add movie" nameButton="Save" />
      </Provider>
    );
    const url = screen.getByPlaceholderText('Movie URL here');
    const genre = document.querySelector('.select');

    await selectEvent.select(genre, ['Comedy']);

    act(() => {
      fireEvent.blur(url);
    });

    expect(url.nextSibling.innerHTML).toBe('Required');
  });

  it('should show Required for empty Date', async () => {
    render(
      <Provider store={store}>
        <FormInfo namePage="Add movie" nameButton="Save" />
      </Provider>
    );
    const date = screen.getByPlaceholderText('Select Date');
    const genre = document.querySelector('.select');

    await selectEvent.select(genre, ['Comedy']);

    act(() => {
      fireEvent.blur(date);
    });

    expect(date.nextSibling.innerHTML).toBe('Required');
  });

  it('should show Required for empty Overview', async () => {
    render(
      <Provider store={store}>
        <FormInfo namePage="Add movie" nameButton="Save" />
      </Provider>
    );
    const overview = screen.getByPlaceholderText('Overview here');
    const genre = document.querySelector('.select');

    await selectEvent.select(genre, ['Comedy']);

    act(() => {
      fireEvent.blur(overview);
    });

    expect(overview.nextSibling.innerHTML).toBe('Required');
  });

  it('should show Required for empty Runtime', async () => {
    render(
      <Provider store={store}>
        <FormInfo namePage="Add movie" nameButton="Save" />
      </Provider>
    );
    const runtime = screen.getByPlaceholderText('Runtime here');
    const genre = document.querySelector('.select');

    await selectEvent.select(genre, ['Comedy']);

    act(() => {
      fireEvent.blur(runtime);
    });

    expect(runtime.nextSibling.innerHTML).toBe('Required');
  });
});
