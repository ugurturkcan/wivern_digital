import { render, screen, fireEvent } from '@testing-library/react';
import Nav from '@/components/Nav';
import { vi } from 'vitest';

describe('Nav Component', () => {
  it('renders all navigation links', () => {
    render(<Nav />);
    expect(screen.getAllByText('The Shop')[0]).toBeInTheDocument();
    expect(screen.getAllByText('The Guild')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Commission')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Ecology Fund & Data')[0]).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<Nav />);
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    
    // Initial state: mobile menu is closed (has opacity-0)
    const mobileMenu = screen.getByText('Guild of Avatarists · Est. 2011').parentElement;
    expect(mobileMenu).toHaveClass('opacity-0');

    // Click to open
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass('opacity-100');

    // Click to close
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass('opacity-0');
  });
});
