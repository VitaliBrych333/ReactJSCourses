/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import NotFound from './IncorrectPath';

Enzyme.configure({ adapter: new Adapter() });

describe('<IncorrectPath/>', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders with string Page not found404Go back to home', () => {
    act(() => {
      render(<NotFound />, container);
    });
    expect(container.textContent).toBe('Page not found404Go back to home');
  });

  it('should render the component', () => {
    const wrapper = shallow(<NotFound />).dive();
    ReactDOM.render(<NotFound />, container);
    ReactDOM.unmountComponentAtNode(container);
  });
});
