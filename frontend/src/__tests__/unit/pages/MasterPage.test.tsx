import { render, screen } from '@testing-library/react';
import EcologyFundPage from '@/app/master/page';
import { vi } from 'vitest';



describe('MasterPage / Ecology Fund', () => {
  it('renders the ecology fund heading', () => {
    render(<EcologyFundPage />);
    expect(screen.getAllByText(/Commitment to the Planet/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Ecology Fund/i)[0]).toBeInTheDocument();
  });
});
