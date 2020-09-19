import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import StartPage from './StartPage';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

describe('<StartPage/>', () => {
    const initialState = {
        movieReducer: {
            movies: {
                data: [],
                total: 0
            }
        },
        criteriaReducer: {
            search: 'search',
            sort: 'sort'
        },
        windowReducer: {
            showModal: false,
            showEditPage: false,
            showDeletePage: false,
            showAddPage: false
        }
    };
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        store = mockStore(initialState);
        wrapper = shallow(<Provider store={store}><StartPage /></Provider>);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('render component', () => {
        expect(wrapper.find(StartPage).length).toEqual(1);
    });

    it('should equals to snapshot of CriteriaSearch', () => {
        const renderedValue = renderer.create(<Router><Provider store={store}><StartPage /></Provider></Router>).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
})
