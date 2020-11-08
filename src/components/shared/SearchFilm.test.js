import React, { createRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import SearchFilm from './SearchFilm';

describe('<SearchFilm/>', () => {
  const initialState = {
    movieReducer: {
      sort: 'sort',
    },
    windowReducer: {
      isShowAddPage: false,
    },
  };
  const middlewares = [thunk];
  const store = configureStore(middlewares)(initialState);

  it('should equals to snapshot of SearchFilm when isShowAddPage is false', () => {
    const renderedValue = render(
      <Router>
        <Provider store={store}>
          <SearchFilm />
        </Provider>
      </Router>
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('should equals to snapshot of SearchFilm isShowAddPage is true', () => {
    const newInitialState = {
      movieReducer: {
        sort: 'sort',
      },
      windowReducer: {
        isShowAddPage: true,
      },
    };
    const newStore = configureStore(middlewares)(newInitialState);
    const renderedValue = render(
      <Router>
        <Provider store={newStore}>
          <SearchFilm />
        </Provider>
      </Router>
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('should not change values for elements by events', () => {
    const realUseState = React.useState;
    const stubInitialState = {
      disabled: false,
      myRef: createRef(),
    };
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => realUseState(stubInitialState));

    render(
      <Router>
        <Provider store={store}>
          <SearchFilm />
        </Provider>
      </Router>
    );

    const button = screen.queryByText('+ Add movie');
    const input = screen.queryByPlaceholderText('Please write the film name');
    const buttonInput = screen.queryByText('Search');

    userEvent.click(buttonInput);
    userEvent.click(button);
    userEvent.type(input, 'r');

    expect(input.getAttribute('placeholder')).toBe(
      'Please write the film name'
    );
    expect(button.textContent).toBe('+ Add movie');
  });
});
