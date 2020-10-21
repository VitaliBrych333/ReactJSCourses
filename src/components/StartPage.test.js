import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import StartPage from './StartPage';

describe('<StartPage/>', () => {
  const mockStore = configureStore();

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should equals to snapshot of StartPage', () => {
    const initialState = {
      movieReducer: {
        moviesByCriteria: {
          data: [],
          totalAmount: 1,
        },
      },
      criteriaReducer: {
        search: 'search',
        sort: 'sort',
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

    const store = mockStore(initialState);
    const renderedValue = render(
      <Router>
        <Provider store={store}>
          <StartPage />
        </Provider>
      </Router>
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('should equals to snapshot of StartPage when data is not empty', () => {
    const newInitialState = {
      movieReducer: {
        moviesByCriteria: {
          data: [
            {
              release_date: 'test',
              genres: ['Comedy'],
              id: 11,
            },
          ],
          totalAmount: 1,
        },
      },
      criteriaReducer: {
        search: 'search',
        sort: 'sort',
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

    const store = mockStore(newInitialState);
    const renderedValue = render(
      <Router>
        <Provider store={store}>
          <StartPage />
        </Provider>
      </Router>
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('should equals to snapshot of StartPage when data is null', () => {
    const newInitialState = {
      movieReducer: {
        moviesByCriteria: {
          data: null,
          totalAmount: 0,
        },
      },
      criteriaReducer: {
        search: 'search',
        sort: 'sort',
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

    const store = mockStore(newInitialState);
    const renderedValue = render(
      <Router>
        <Provider store={store}>
          <StartPage />
        </Provider>
      </Router>
    );

    expect(renderedValue).toMatchSnapshot();
  });
});
