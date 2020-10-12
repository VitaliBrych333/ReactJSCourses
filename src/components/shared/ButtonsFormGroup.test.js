/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ButtonsFormGroup from './ButtonsFormGroup';

Enzyme.configure({ adapter: new Adapter() });

describe('<ButtonsFormGroup/>', () => {
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
    const wrapper = shallow(<ButtonsFormGroup />).dive();
    ReactDOM.render(<ButtonsFormGroup />, container);
    ReactDOM.unmountComponentAtNode(container);
  });
});
