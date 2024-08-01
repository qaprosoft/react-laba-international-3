import React from 'react';
import Button from './Button';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';

afterEach(cleanup);

const defaultProps = {
  onClick: jest.fn(),
  text: 'Submit',
};

test('button renders with correct text', () => {
  const {rerender} = render(<Button {...defaultProps} />);
  expect(screen.getByText('Submit')).toBeTruthy();

  // Change props
  rerender(<Button {...defaultProps} text="Go" />);
  expect(screen.getByText('Go')).toBeTruthy();
});

test('calls correct function on click', () => {
  const onClick = jest.fn();
  render(<Button {...defaultProps} onClick={onClick} />);
  fireEvent.click(screen.getByText(defaultProps.text));
  expect(onClick).toHaveBeenCalled();
  // expect(onClick).toHaveBeenCalledTimes(1);
});
