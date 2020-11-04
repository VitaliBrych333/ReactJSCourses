import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SignSearch from './SignSearch';

describe('<SignSearch/>', () => {
  const initialState = {
    movieReducer: {
      sort: 'vote_average',
    },
  };
  const middlewares = [thunk];
  const store = configureStore(middlewares)(initialState);

  it('should equals to snapshot of SignSearch', () => {
    const renderedValue = render(
      <Provider store={store}>
        <Router>
          <SignSearch />
        </Router>
      </Provider>
    );

    expect(renderedValue).toMatchSnapshot();
  });
});
