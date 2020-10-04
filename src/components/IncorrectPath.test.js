// import React from 'react';
// import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
// import Adapter from 'enzyme-adapter-react-16';
// import Enzyme, { shallow } from 'enzyme';
// import { act } from 'react-dom/test-utils';
// import NotFound from './IncorrectPath';

// Enzyme.configure({ adapter: new Adapter() });

// describe('<IncorrectPath/>', () => {
//   let container = null;

//   beforeEach(() => {
//     container = document.createElement('div');
//     document.body.appendChild(container);
//   });

//   afterEach(() => {
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
//   });

//   it('renders with string 404 incorrect path', () => {
//     act(() => {
//       render(<NotFound />, container);
//     });
//     expect(container.textContent).toBe('404 incorrect path');
//   });

//   it('should render the component', () => {
//     const wrapper = shallow(<NotFound />).dive();
//     ReactDOM.render(<NotFound />, container);
//     ReactDOM.unmountComponentAtNode(container);
//   });
// });
