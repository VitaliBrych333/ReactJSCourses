import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SignSearch from './SignSearch';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignSearch/>', () => {
  const initialState = {
    movieReducer: {
      sort: 'vote_average',
    },
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    store = mockStore(initialState);
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should render the component', () => {
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <SignSearch />
        </Router>
      </Provider>,
      container
    );
    ReactDOM.unmountComponentAtNode(container);
  });

  it('should equals to snapshot of SignSearch', () => {
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SignSearch />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
