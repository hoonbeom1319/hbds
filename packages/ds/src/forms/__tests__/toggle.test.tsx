import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from '../toggle';

describe('Toggle', () => {
    it('renders a button', () => {
        render(<Toggle>Bold</Toggle>);
        expect(screen.getByRole('button', { name: 'Bold' })).toBeInTheDocument();
    });

    it('is not pressed by default', () => {
        render(<Toggle>Bold</Toggle>);
        expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
    });

    it('becomes pressed on click', async () => {
        const user = userEvent.setup();
        render(<Toggle>Bold</Toggle>);
        await user.click(screen.getByRole('button'));
        expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
    });

    it('toggles back to unpressed on second click', async () => {
        const user = userEvent.setup();
        render(<Toggle>Bold</Toggle>);
        await user.click(screen.getByRole('button'));
        await user.click(screen.getByRole('button'));
        expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
    });

    it('calls onPressedChange with new state', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        render(<Toggle onPressedChange={handleChange}>Bold</Toggle>);
        await user.click(screen.getByRole('button'));
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    it.each([
        ['sm', 'h-8'],
        ['md', 'h-10'],
        ['lg', 'h-12']
    ] as const)('applies %s size class', (size, expectedClass) => {
        render(<Toggle size={size}>B</Toggle>);
        expect(screen.getByRole('button')).toHaveClass(expectedClass);
    });

    it('is disabled when disabled prop passed', () => {
        render(<Toggle disabled>Bold</Toggle>);
        expect(screen.getByRole('button')).toBeDisabled();
    });
});
