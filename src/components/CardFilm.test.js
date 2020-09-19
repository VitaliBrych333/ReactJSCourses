import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import CardFilm from './CardFilm';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('<CardFilm/>', () => {
    const initialState = {
        movieReducer: {
            movies: {
                data: [],
                total: 0
            }
        },
        criteriaReducer: {
            search: 'search',
            sort: 'sort',
        },
        windowReducer: {
            showModal: false,
            showEditPage: false,
            showDeletePage: false,
            showAddPage: false
        }
    };

    const info = {
        poster_path: 'test',
        release_date: 'test',
        genres: [],
        title: 'test',
        id: 1
    };

    const props = {
        info,
    };

    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        store = mockStore(initialState);
        store.dispatch = jest.fn();
        wrapper = shallow(<Provider store={store}><Router><CardFilm {...props}/></Router></Provider>)
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('render component', () => {
        expect(wrapper.find(CardFilm).length).toEqual(1);
    });

    it('should equals to snapshot of CardFilm', () => {
        const renderedValue = renderer.create(<Provider store={store}><Router><CardFilm {...props}/></Router></Provider>).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });

    it('should call dispatch once', () => {
        const dispath = store.dispatch;

        act(() => {
            ReactDOM.render(<Provider store={store}><Router><CardFilm {...props}/></Router></Provider>, container);
        });

        const link = container.querySelector('a');
        act(() => {
            link.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(dispath).toHaveBeenCalledTimes(1);
    });

    it('should call dispatch thrice', () => {
        const dispath = store.dispatch;
        const info = {
            poster_path: 'test',
            release_date: 'test',
            genres: [1],
            title: 'test',
            id: 1
        };

        const props = {
            info,
        };

        act(() => {
            ReactDOM.render(<Provider store={store}><Router><CardFilm {...props}/></Router></Provider>, container);
        });

        const link = container.querySelector('a');
        const button = container.querySelector('button');

        act(() => {
            link.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(dispath).toHaveBeenCalledTimes(2);
    });
})
