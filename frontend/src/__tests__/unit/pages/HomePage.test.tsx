import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import { vi } from 'vitest';



// Mock window.matchMedia for framer-motion if needed
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock dynamic components that might use 3D/WebGL
vi.mock('next/dynamic', () => ({
  default: () => {
    const MockComponent = () => <div data-testid="dynamic-component-mock">Dynamic Mock</div>;
    return MockComponent;
  },
}));

describe('HomePage', () => {
  it('renders the main hero heading', () => {
    render(<HomePage />);
    expect(screen.getAllByText(/Digital/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Alchemy/i)[0]).toBeInTheDocument();
  });
});
