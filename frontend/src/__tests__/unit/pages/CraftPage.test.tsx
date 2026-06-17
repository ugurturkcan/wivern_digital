import { render, screen } from '@testing-library/react';
import CraftPage from '@/app/craft/page';
import { vi } from 'vitest';



describe('CraftPage', () => {
  it('renders the guild process heading', () => {
    render(<CraftPage />);
    expect(screen.getAllByText(/Operational Methodology/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/The/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Guild/i)[0]).toBeInTheDocument();
  });

  it('renders the pipeline steps', () => {
    render(<CraftPage />);
    expect(screen.getAllByText(/Formulation/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Infusion/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Rendering/i)[0]).toBeInTheDocument();
  });
});
