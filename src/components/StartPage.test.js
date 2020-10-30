import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import StartPage from './StartPage';

describe('<StartPage/>', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

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
      <Router
        initialEntries={[
          'search/movies?sortBy=release_date&sortOrder=desc&search=king&searchBy=title',
        ]}
      >
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
      <Router
        initialEntries={[
          'search/movies?sortBy=vote_average&sortOrder=desc&searchBy=genres&filter=animation',
        ]}
      >
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
