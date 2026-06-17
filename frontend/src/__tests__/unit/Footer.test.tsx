import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  it('renders correctly', () => {
    render(<Footer />);
    
    // Check if the logo/text is present
    expect(screen.getAllByText(/Wivern/i)[0]).toBeInTheDocument();
    
    // Check if standard links are present
    expect(screen.getByText(/Privacy & Data Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms of Service/i)).toBeInTheDocument();
  });
});
