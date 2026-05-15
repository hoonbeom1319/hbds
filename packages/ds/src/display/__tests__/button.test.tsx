import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';

describe('Button', () => {
    it('renders children', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('defaults to type=button', () => {
        render(<Button>Submit</Button>);
        expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it.each([
        ['primary', 'bg-primary-600'],
        ['secondary', 'bg-secondary-600'],
        ['outline', 'border-border'],
        ['ghost', 'border-transparent'],
        ['danger', 'bg-danger']
    ] as const)('applies %s variant class', (variant, expectedClass) => {
        render(<Button variant={variant}>Btn</Button>);
        expect(screen.getByRole('button')).toHaveClass(expectedClass);
    });

    it.each([
        ['sm', 'h-8'],
        ['md', 'h-10'],
        ['lg', 'h-12']
    ] as const)('applies %s size class', (size, expectedClass) => {
        render(<Button size={size}>Btn</Button>);
        expect(screen.getByRole('button')).toHaveClass(expectedClass);
    });

    it('is disabled when disabled prop passed', () => {
        render(<Button disabled>Disabled</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('fires onClick when clicked', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click</Button>);
        await user.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledOnce();
    });

    it('does not fire onClick when disabled', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();
        render(<Button disabled onClick={handleClick}>Disabled</Button>);
        await user.click(screen.getByRole('button'));
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('forwards className', () => {
        render(<Button className="custom-class">Btn</Button>);
        expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('renders as child element when asChild is true', () => {
        render(
            <Button asChild>
                <a href="/home">Link Button</a>
            </Button>
        );
        // Primitive sets role="button" on the child, so query by name
        const el = screen.getByText('Link Button');
        expect(el.tagName).toBe('A');
        expect(el).toHaveAttribute('href', '/home');
    });
});
