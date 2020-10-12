import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SignSearch from './SignSearch';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignSearch/>', () => {
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

  it('should render the component', () => {
    ReactDOM.render(
      <Router>
        <SignSearch />
      </Router>,
      container
    );
    ReactDOM.unmountComponentAtNode(container);
  });

  it('should equals to snapshot of SignSearch', () => {
    const renderedValue = renderer
      .create(
        <Router>
          <SignSearch />
        </Router>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
