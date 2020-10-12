import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import StartPage from './StartPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<StartPage/>', () => {
  const initialState = {
    movieReducer: {
      moviesByCriteria: {
        data: [],
      },
    },
    criteriaReducer: {
      search: 'search',
      sort: 'sort',
    },
    windowReducer: {
      isShowEditPage: false,
      isShowDeletePage: false,
    },
  };
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = mockStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <StartPage />
      </Provider>
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('render component', () => {
    expect(wrapper.find(StartPage).length).toEqual(1);
  });

  it('should equals to snapshot of StartPage', () => {
    const renderedValue = renderer
      .create(
        <Router>
          <Provider store={store}>
            <StartPage />
          </Provider>
        </Router>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
