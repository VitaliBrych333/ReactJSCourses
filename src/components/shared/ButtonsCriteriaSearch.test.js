import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ButtonsCriteriaSearch from './ButtonsCriteriaSearch';

describe('<ButtonsCriteriaSearch/>', () => {
  const initialState = {
    movieReducer: {
      moviesByCriteria: {
        data: [],
      },
    },
    criteriaReducer: {
      sort: 'sort',
    },
  };

  const store = configureStore()(initialState);

  it('should equals to snapshot of ButtonsCriteriaSearch', () => {
    const renderedValue = render(
      <Provider store={store}>
        <ButtonsCriteriaSearch />
      </Provider>
    );

    expect(renderedValue).toMatchSnapshot();
  });
});
