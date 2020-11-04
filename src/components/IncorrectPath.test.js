import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotFound from './IncorrectPath';

describe('<IncorrectPath/>', () => {
  it('should render button with string Go back to home', () => {
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    render(
      <Router history={historyMock}>
        <NotFound />
      </Router>
    );

    const countValue = screen.queryByRole('button', {
      variant: 'primary',
    });
    userEvent.click(screen.getByText('Go back to home'));

    expect(countValue.textContent).toBe('Go back to home');
  });
});
