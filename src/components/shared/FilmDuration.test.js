import React from 'react';
import renderer from 'react-test-renderer';
import Duration from './FilmDuration';

describe('<Duration/>', () => {
  it('should equals to snapshot of Duration', () => {
    const mockPropValue = {
      release_date: '2019-12-12',
      runtime: 12,
    };
    const renderedValue = renderer
      .create(<Duration propValue={mockPropValue} />)
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
