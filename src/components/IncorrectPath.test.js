/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
      ReactDOM.render(<NotFound />, container);
    });
    expect(container.textContent).toBe('Page not found404Go back to home');
  });

  it('should render the component', () => {
    const wrapper = shallow(<NotFound />).dive();
    ReactDOM.render(<NotFound />, container);
    ReactDOM.unmountComponentAtNode(container);
  });

  it('should render button with string Go back to home', () => {
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    render(
      <Router history={historyMock}>
        <NotFound />
      </Router>
    );

    const countValue = screen.queryByRole('button', {
      variant: 'primary',
    });
    userEvent.click(screen.getByText('Go back to home'));

    expect(countValue.textContent).toBe('Go back to home');
  });
});
