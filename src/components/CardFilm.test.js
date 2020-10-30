/* eslint-disable no-shadow */
import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import CardFilm from './CardFilm';

Enzyme.configure({ adapter: new Adapter() });

describe('<CardFilm/>', () => {
  const initialState = {
    movieReducer: {
      movies: {
        data: [],
        total: 0,
      },
      sort: 'vote_average',
    },
  };

  const info = {
    poster_path: 'test',
    release_date: 'test',
    genres: ['Comedy'],
    title: 'test',
    id: 1,
  };

  const props = {
    info,
  };

  const mockStore = configureStore();

  let store;
  let wrapper;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    wrapper = shallow(
      <Provider store={store}>
        <Router>
          <CardFilm {...props} />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.body.removeChild(container);
    container = null;
  });

  it('render component', () => {
    expect(wrapper.find(CardFilm).length).toEqual(1);
  });

  it('should equals to snapshot of CardFilm', () => {
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <Router>
            <CardFilm {...props} />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  it('should call dispatch thrice', () => {
    const dispath = store.dispatch;

    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <Router>
            <CardFilm {...props} />
          </Router>
        </Provider>,
        container
      );
    });

    const link = container.querySelector('a');
    const button = container.querySelector('button');
    const img = container.querySelector('img');

    act(() => {
      link.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      img.dispatchEvent(new Event('mouseover', { bubbles: true }));
    });

    const svg = container.querySelector('svg');

    act(() => {
      svg.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const p = container.querySelector('p');

    act(() => {
      p.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(dispath).toHaveBeenCalledTimes(1);
  });
});
