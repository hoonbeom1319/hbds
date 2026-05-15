import { render } from '@testing-library/react';
import Container from '../container';

describe('Container', () => {
    it('renders children', () => {
        const { getByText } = render(<Container variant="mobile">Content</Container>);
        expect(getByText('Content')).toBeInTheDocument();
    });

    it('applies mobile variant class', () => {
        const { getByText } = render(<Container variant="mobile">Content</Container>);
        expect(getByText('Content')).toHaveClass('max-w-[480px]');
    });

    it('forwards className', () => {
        const { getByText } = render(<Container variant="mobile" className="custom">Content</Container>);
        expect(getByText('Content')).toHaveClass('custom');
    });
});
