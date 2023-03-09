import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import Index from './';

describe('index', () => {
  it('Should render the title correctly', () => {
    render(<Index />);
    const header = screen.getByRole('heading');
    expect(header).toHaveTextContent('Olá');
  });
});
