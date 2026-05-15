import { render, screen } from '@testing-library/react';
import { Badge } from '../badge';

describe('Badge', () => {
    it('renders children', () => {
        render(<Badge>New</Badge>);
        expect(screen.getByText('New')).toBeInTheDocument();
    });

    it.each([
        ['default', 'bg-neutral-100'],
        ['primary', 'bg-primary-50'],
        ['secondary', 'bg-secondary-50'],
        ['success', 'text-success'],
        ['warning', 'text-warning'],
        ['danger', 'text-danger']
    ] as const)('applies %s variant', (variant, expectedClass) => {
        render(<Badge variant={variant}>Badge</Badge>);
        expect(screen.getByText('Badge')).toHaveClass(expectedClass);
    });

    it.each([
        ['sm', 'px-1.5'],
        ['md', 'px-2.5']
    ] as const)('applies %s size', (size, expectedClass) => {
        render(<Badge size={size}>Badge</Badge>);
        expect(screen.getByText('Badge')).toHaveClass(expectedClass);
    });

    it('is rendered as a span', () => {
        render(<Badge>Badge</Badge>);
        expect(screen.getByText('Badge').tagName).toBe('SPAN');
    });

    it('forwards className', () => {
        render(<Badge className="extra">Badge</Badge>);
        expect(screen.getByText('Badge')).toHaveClass('extra');
    });
});
