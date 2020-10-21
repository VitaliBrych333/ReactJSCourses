/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EditPage from './EditPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<NamePage/>', () => {
  let store;
  let container = null;
  const initialState = {
    movieReducer: {
      filmId: {
        id: 1,
        data: {
          vote_average: 1,
          title: 'test',
          tagline: 'test',
        },
      },
    },
    windowReducer: {
      filmEdit: {
        id: 1,
        genres: ['Comedy', 'Action'],
      },
    },
  };

  const mockStore = configureStore();

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = mockStore(initialState);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should render the component', () => {
    const wrapper = shallow(<EditPage />).dive();
    ReactDOM.render(
      <Provider store={store}>
        <EditPage />
      </Provider>,
      container
    );
    ReactDOM.unmountComponentAtNode(container);
  });
});
