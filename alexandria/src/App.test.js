import { render, screen } from '@testing-library/react';
import JSBasics from './pages/javascript/JSBasics';
import JSHofs from './pages/javascript/JSHof';

describe('Suite de tests das rotas JavaScript', () => {
  test('Renderiza a rota de JavaScript Basics', () => {
    render(<JSBasics />);
    const titleJS = screen.getByText(/JSBasics/i);
    const altText = screen.getByAltText(/function/i);
    expect(titleJS).toBeInTheDocument();
    expect(altText).toBeInTheDocument();
  });

  test('Renderiza a rota de JavaScript ES6/7 HOFs', () => {
    render(<JSHofs />);
    const titleHOF = screen.getByText(/javascript/i);
    expect(titleHOF).toBeInTheDocument();
  });
});
