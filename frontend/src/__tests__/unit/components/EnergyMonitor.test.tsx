import { render, screen } from '@testing-library/react';
import EnergyMonitor from '@/components/EnergyMonitor';
import { vi } from 'vitest';

describe('EnergyMonitor Component', () => {
  beforeEach(() => {
    // Mock requestAnimationFrame and cancelAnimationFrame for Canvas
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: any) => setTimeout(cb, 16));
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation((id: any) => clearTimeout(id));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the base layout and text', () => {
    render(<EnergyMonitor />);
    expect(screen.getByText(/Est. Resource Cost/i)).toBeInTheDocument();
    expect(screen.getByText(/1x 30s Reel/i)).toBeInTheDocument();
  });

  it('renders the canvas element', () => {
    const { container } = render(<EnergyMonitor />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveAttribute('width', '70');
    expect(canvas).toHaveAttribute('height', '32');
  });
});
