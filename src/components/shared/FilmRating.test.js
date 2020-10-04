import React from 'react';
import renderer from 'react-test-renderer';
import Rating from './FilmRating';

describe('<Rating/>', () => {
  it('should equals to snapshot of Rating', () => {
    const mockPropValue = {
      title: 'test',
      tagline: 'test',
      vote_average: 1,
    };
    const renderedValue = renderer
      .create(<Rating propValue={mockPropValue} />)
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
