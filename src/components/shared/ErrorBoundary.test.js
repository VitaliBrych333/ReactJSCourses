import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';
import NotFound from '../IncorrectPath';

Enzyme.configure({ adapter: new Adapter() });

describe('<ErrorBoundary/>', () => {
  it('should equals to snapshot of ErrorBoundary', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <NotFound />
      </ErrorBoundary>
    );

    const error = new Error('test');
    wrapper.find(NotFound).simulateError(error);

    expect(wrapper).toMatchSnapshot();
  });
});
