import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import CriteriaSearch from './ButtonsCriteriaSearch'
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

describe('<CriteriaSearch/>', () => {
  const initialState = {
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
    wrapper = shallow(<Provider store={store}><CriteriaSearch /></Provider>);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('render component', () => {
     expect(wrapper.find(CriteriaSearch).length).toEqual(1);
  });

  it('should equals to snapshot of CriteriaSearch', () => {
    const state = {
      kind: 'Sort',
      left: 'Release date',
      right: 'Rating'
    };
    const renderedValue = renderer.create(<Provider store={store}><CriteriaSearch buttonNames={state}/></Provider>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  it('should click on buttons when sort by release/rating', () => {
    const state = {
      kind: 'Sort',
      left: 'Release date',
      right: 'Rating'
    };
    act(() => {
      ReactDOM.render(<Provider store={store}><CriteriaSearch buttonNames={state}/></Provider>, container);
    });

    const button = container.querySelectorAll('button');
    act(() => {
      button[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.title).toBe('');

    act(() => {
      button[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.title).toBe('');
  });

  it('should click on buttons when sort by name/genre', () => {
    const state = {
      kind: 'Sort',
      left: 'Title',
      right: 'Genre'
    };
    act(() => {
      ReactDOM.render(<Provider store={store}><CriteriaSearch buttonNames={state}/></Provider>, container);
    });

    const button = container.querySelectorAll('button');
    act(() => {
      button[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.title).toBe('');

    act(() => {
      button[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.title).toBe('');
  });
})
