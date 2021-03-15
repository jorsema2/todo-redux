import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo List title', () => {
  render(<App />);
  const listTitle = screen.getByText(/Todo List/i);
  expect(listTitle).toBeInTheDocument();
})