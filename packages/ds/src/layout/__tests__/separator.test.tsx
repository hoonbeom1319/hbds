import { render } from '@testing-library/react';
import { Separator } from '../separator';

describe('Separator', () => {
    it('is horizontal by default', () => {
        const { container } = render(<Separator />);
        expect(container.firstChild).toHaveClass('h-px', 'w-full');
    });

    it('applies vertical classes when orientation=vertical', () => {
        const { container } = render(<Separator orientation="vertical" />);
        expect(container.firstChild).toHaveClass('h-full', 'w-px');
    });

    it('has data-orientation attribute', () => {
        const { container } = render(<Separator />);
        expect(container.firstChild).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('has role=none when decorative (default)', () => {
        const { container } = render(<Separator />);
        expect(container.firstChild).toHaveAttribute('role', 'none');
    });

    it('has role=separator when not decorative', () => {
        const { container } = render(<Separator decorative={false} />);
        expect(container.firstChild).toHaveAttribute('role', 'separator');
    });

    it('forwards className', () => {
        const { container } = render(<Separator className="my-4" />);
        expect(container.firstChild).toHaveClass('my-4');
    });
});
