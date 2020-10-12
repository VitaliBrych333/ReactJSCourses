import React from 'react';
import renderer from 'react-test-renderer';
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

  it('should equals to snapshot of ButtonsCriteriaSearch', () => {
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <ButtonsCriteriaSearch />
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
