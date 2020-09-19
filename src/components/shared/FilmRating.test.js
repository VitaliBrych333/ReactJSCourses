import React from 'react';
import Rating from './FilmRating';
import renderer from 'react-test-renderer';

describe('<Rating/>', () => {
    it('should equals to snapshot of Rating', () => {
        const mockPropValue = {
            title: 'test',
            tagline: 'test',
            vote_average: 1
        };
        const renderedValue = renderer.create(<Rating propValue={mockPropValue}/>).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
})
