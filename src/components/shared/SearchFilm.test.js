import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { FormControl } from 'react-bootstrap';
import SearchFilm from './SearchFilm';

Enzyme.configure({ adapter: new Adapter() });

describe('<SearchFilm/>', () => {
  const initialState = {
    criteriaReducer: {
      sort: 'sort',
    },
    windowReducer: {
      isShowAddPage: false,
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
        <SearchFilm />
      </Provider>
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('render component', () => {
    expect(wrapper.find(SearchFilm).length).toEqual(1);
  });

  it('should equals to snapshot of SearchFilm', () => {
    const renderedValue = renderer
      .create(
        <Router>
          <Provider store={store}>
            <SearchFilm />
          </Provider>
        </Router>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  it('should not call onChange', () => {
    const onChange = jest.fn();
    const wrap = mount(
      <Router>
        <Provider store={store}>
          <SearchFilm />
        </Provider>
      </Router>
    );
    wrap.find(FormControl).at(0).simulate('change');
    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
