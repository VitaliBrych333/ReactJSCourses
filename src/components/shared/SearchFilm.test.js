import React, { createRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { FormControl, Button } from 'react-bootstrap';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import SearchFilm from './SearchFilm';

Enzyme.configure({ adapter: new Adapter() });

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
  const mockStore = configureStore(middlewares);
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

  it('should equals to snapshot of SearchFilm when isShowAddPage is false', () => {
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

  it('should equals to snapshot of SearchFilm isShowAddPage is true', () => {
    const newInitialState = {
      movieReducer: {
        sort: 'sort',
      },
      windowReducer: {
        isShowAddPage: true,
      },
    };
    store = mockStore(newInitialState);
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

  it('should not call onChange and onClick', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const wrap = mount(
      <Router>
        <Provider store={store}>
          <SearchFilm />
        </Provider>
      </Router>
    );

    wrap.find(FormControl).at(0).simulate('change');
    wrap.find(Button).at(0).simulate('click');
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should render button with string Search', () => {
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

    const countValue = screen.queryByText('Search');
    userEvent.click(countValue);

    expect(countValue.textContent).toBe('Search');
  });
});
