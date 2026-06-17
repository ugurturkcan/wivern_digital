import { render, screen } from '@testing-library/react';
import FPSMonitor from '@/components/FPSMonitor';
import { vi } from 'vitest';

describe('FPSMonitor Component', () => {
  beforeEach(() => {
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: any) => setTimeout(cb, 16));
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation((id: any) => clearTimeout(id));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the base layout and text', () => {
    render(<FPSMonitor />);
    expect(screen.getByText((content, element) => content.includes('Client Render'))).toBeInTheDocument();
  });

  it('renders the canvas element', () => {
    const { container } = render(<FPSMonitor />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });
});
