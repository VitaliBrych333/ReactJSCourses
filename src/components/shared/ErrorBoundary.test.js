import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount,shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary'
import NotFound from '../IncorrectPath';

Enzyme.configure({ adapter: new Adapter() });

describe('<ErrorBoundary/>', () => {
    it('should returns undefined', () => {
        expect(shallow(<ErrorBoundary />).equals(undefined)).toBe(true);
    });

    it('should display an ErrorMessage if wrapped component throws', () => {
      const wrapper = mount(
          <ErrorBoundary>
              <NotFound />
          </ErrorBoundary>
      );

      const error = new Error('test');
      wrapper.find(NotFound).simulateError(error);
    })
})
