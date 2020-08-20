import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import SearchFilm from './SearchFilm';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { FormControl } from 'react-bootstrap';

Enzyme.configure({ adapter: new Adapter() });

describe('<SearchFilm/>', () => {
  const initialState = {
    criteriaReducer: {
      search: 'search',
      sort: 'sort'
    },
    movieReducer: {
      movies: [{id: 1}]
    }
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = mockStore(initialState);
    wrapper = shallow(<Provider store={store}><SearchFilm /></Provider>);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('render component', () => {
     expect(wrapper.find(SearchFilm).length).toEqual(1);
  });

  it('should equals to snapshot of CriteriaSearch', () => {
    const renderedValue = renderer.create(<Provider store={store}><SearchFilm /></Provider>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  it('should not call onChange', () => {
    const onChange = jest.fn();
    const wrap = mount(<Provider store={store}><SearchFilm /></Provider>);
    wrap.find(FormControl).simulate('change');
    expect(onChange).toHaveBeenCalledTimes(0);
  });
})
