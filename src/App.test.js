import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AuthApp header and home page heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to AuthApp/i);
  expect(headingElement).toBeInTheDocument();
});