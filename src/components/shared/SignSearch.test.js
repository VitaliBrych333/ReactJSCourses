// import React from 'react';
// import ReactDOM, { unmountComponentAtNode } from 'react-dom';
// import Adapter from 'enzyme-adapter-react-16';
// import Enzyme, { shallow } from 'enzyme';
// import { BrowserRouter as Router } from 'react-router-dom';
// import renderer from 'react-test-renderer';
// import SignSearch from './SignSearch';

// Enzyme.configure({ adapter: new Adapter() });

// describe('<SignSearch/>', () => {
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

//   it('should render the component', () => {
//     const wrapper = shallow(
//       <Router>
//         <SignSearch />
//       </Router>,
//     ).dive();
//     ReactDOM.render(
//       <Router>
//         <SignSearch />
//       </Router>,
//       container,
//     );
//     ReactDOM.unmountComponentAtNode(container);
//   });

//   it('should equals to snapshot of CriteriaSearch', () => {
//     const renderedValue = renderer
//       .create(
//         <Router>
//           <SignSearch />
//         </Router>,
//       )
//       .toJSON();
//     expect(renderedValue).toMatchSnapshot();
//   });
// });
