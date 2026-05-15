import { render, screen } from '@testing-library/react';
import { Progress } from '../progress';

describe('Progress', () => {
    it('has role=progressbar', () => {
        render(<Progress value={50} />);
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('sets aria-valuenow from value prop', () => {
        render(<Progress value={75} />);
        expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '75');
    });

    it('sets aria-valuemin and aria-valuemax', () => {
        render(<Progress value={50} />);
        const bar = screen.getByRole('progressbar');
        expect(bar).toHaveAttribute('aria-valuemin', '0');
        expect(bar).toHaveAttribute('aria-valuemax', '100');
    });

    it('defaults to 0 when value is not provided', () => {
        render(<Progress />);
        expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    });

    it('forwards className', () => {
        render(<Progress value={50} className="w-80" />);
        expect(screen.getByRole('progressbar')).toHaveClass('w-80');
    });
});
