import React from 'react';
import Duration from './FilmDuration';
import renderer from 'react-test-renderer';

describe('<Duration/>', () => {
  it('should equals to snapshot of Duration', () => {
    const mockPropValue = {
      release_date: '2019-12-12',
      runtime: '12'
    };
    const renderedValue = renderer.create(<Duration propValue={mockPropValue}/>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
})
