import React from 'react';
import Counter from './Counter';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';

afterEach(cleanup);

test('count starts with 0', () => {
  render(<Counter />);
  expect(screen.getByTestId('count').textContent).toBe('Clicked 0 times');
});

test('clicking on button increments counter', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByTestId('count').textContent).toBe('Clicked 1 time');
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByTestId('count').textContent).toBe('Clicked 2 times');
});

test('window title changes after every increment if checkbox is checked', () => {
  global.window.document.title = 'My Awesome App';
  render(<Counter />);

  // When checkbox is unchecked, incrementing has no effect
  fireEvent.click(screen.getByText('Increment'));
  expect(global.window.document.title).toBe('My Awesome App');

  // Check and assert the document title changes
  const checkbox = screen.getByLabelText(
    'Check to display count in document title',
  );
  fireEvent.click(checkbox);
  expect(global.window.document.title).toBe('Total number of clicks: 1');

  // Works if you increment multiple times
  fireEvent.click(screen.getByText('Increment'));
  expect(global.window.document.title).toBe('Total number of clicks: 2');

  // Unchecking will return to the original document title
  fireEvent.click(checkbox);
  expect(global.window.document.title).toBe('My Awesome App');
});
