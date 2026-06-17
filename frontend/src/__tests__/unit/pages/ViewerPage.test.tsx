import { render, screen } from '@testing-library/react';
import ViewerPage from '@/app/viewer/page';
import { vi } from 'vitest';



describe('ViewerPage', () => {
  it('renders the back to dashboard link', () => {
    render(<ViewerPage />);
    expect(screen.getAllByText(/Back to Dashboard/i)[0]).toBeInTheDocument();
  });
});
