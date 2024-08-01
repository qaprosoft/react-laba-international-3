import React from 'react';
import ChangeInput from './ChangeInput';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';

afterEach(cleanup);

test('displays the correct greeting', () => {
  render(<ChangeInput />);
  const input = screen.getByLabelText('user-name');
  const greeting = screen.getByTestId('change-input-greeting');
  expect(input.value).toBe('');
  expect(greeting.textContent).toBe('Welcome, Anonymous User!');
  fireEvent.change(input, {target: {value: 'Rafael'}});
  expect(input.value).toBe('Rafael');
  expect(greeting.textContent).toBe('Welcome, Rafael!');
});
