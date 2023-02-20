import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('heaader renders', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', {name: /Derek's Blog/i})
  expect(linkElement).toBeInTheDocument();
});