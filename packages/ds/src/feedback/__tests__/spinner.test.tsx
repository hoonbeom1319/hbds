import { render, screen } from '@testing-library/react';
import { Spinner } from '../spinner';

describe('Spinner', () => {
    it('has role=status', () => {
        render(<Spinner />);
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('has aria-label', () => {
        render(<Spinner />);
        expect(screen.getByLabelText('Loading')).toBeInTheDocument();
    });

    it.each([
        ['sm', 'h-4'],
        ['md', 'h-6'],
        ['lg', 'h-8']
    ] as const)('applies %s size class', (size, expectedClass) => {
        render(<Spinner size={size} />);
        expect(screen.getByRole('status')).toHaveClass(expectedClass);
    });

    it('has animate-spin class', () => {
        render(<Spinner />);
        expect(screen.getByRole('status')).toHaveClass('animate-spin');
    });
});
