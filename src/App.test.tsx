import React from 'react';
import {render, screen} from '@testing-library/react';
import Page from './Page';


test('heaader renders', () => {
  render(<Page/>);
  const linkElement = screen.getByRole('heading', {name: /Derek's Blog/i})
  expect(linkElement).toBeInTheDocument();
});