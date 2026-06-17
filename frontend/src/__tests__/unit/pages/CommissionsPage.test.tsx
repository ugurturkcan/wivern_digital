import { render, screen } from '@testing-library/react';
import CommissionsPage from '@/app/commissions/page';
import { vi } from 'vitest';



describe('CommissionsPage', () => {
  it('renders the tariffs heading', () => {
    render(<CommissionsPage />);
    expect(screen.getAllByText(/Official Register/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Requisition/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Tariffs/i)[0]).toBeInTheDocument();
  });

  it('renders the pricing tiers', () => {
    render(<CommissionsPage />);
    expect(screen.getByText(/Single Specimen/i)).toBeInTheDocument();
    expect(screen.getByText(/Quarterly Batch/i)).toBeInTheDocument();
    expect(screen.getByText(/Guild Retainer/i)).toBeInTheDocument();
  });
});
