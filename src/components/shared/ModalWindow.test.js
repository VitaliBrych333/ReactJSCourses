/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ModalWindow from './ModalWindow';

Enzyme.configure({ adapter: new Adapter() });

describe('<ModalWindowe/>', () => {
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
    const wrapper = shallow(<ModalWindow />).dive();
    ReactDOM.render(<ModalWindow />, container);
    ReactDOM.unmountComponentAtNode(container);
  });
});
