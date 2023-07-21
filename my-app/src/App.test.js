import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Class test: Checking checkbox functionality', () => {
  render(<App />);

  // Event: Click on the checkbox
  userEvent.click(screen.getByTestID("checkbox"));
  // Checking if checkbox is not checked.
  expect(screen.getByTestID("checkbox")).toBeChecked()

});

test("My test: Test to see if there is a button", () => {
  render(<App />);
  expect(screen.getByRole('button')).toBeInTheDocument();
})
