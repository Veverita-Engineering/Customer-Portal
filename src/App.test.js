import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const textElement = screen.getByText(/Customer Portal/i);
  expect(textElement).toBeInTheDocument();
});

test('renders app link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn more/i);
  expect(linkElement).toBeInTheDocument();
});
