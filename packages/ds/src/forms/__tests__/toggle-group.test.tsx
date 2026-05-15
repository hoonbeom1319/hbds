import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleGroup, ToggleGroupItem } from '../toggle-group';

describe('ToggleGroup', () => {
    it('renders a group element', () => {
        const { container } = render(
            <ToggleGroup type="single">
                <ToggleGroupItem value="a">A</ToggleGroupItem>
                <ToggleGroupItem value="b">B</ToggleGroupItem>
            </ToggleGroup>
        );
        expect(container.firstChild).toHaveAttribute('role', 'group');
    });

    it('applies custom className on root', () => {
        const { container } = render(
            <ToggleGroup type="single" className="gap-2">
                <ToggleGroupItem value="a">A</ToggleGroupItem>
            </ToggleGroup>
        );
        expect(container.firstChild).toHaveClass('gap-2');
    });

    it('renders items as buttons', () => {
        const { container } = render(
            <ToggleGroup type="single">
                <ToggleGroupItem value="a">A</ToggleGroupItem>
                <ToggleGroupItem value="b">B</ToggleGroupItem>
            </ToggleGroup>
        );
        const buttons = container.querySelectorAll('button');
        expect(buttons).toHaveLength(2);
    });

    it('items start with data-state=off', () => {
        const { container } = render(
            <ToggleGroup type="single">
                <ToggleGroupItem value="a">A</ToggleGroupItem>
            </ToggleGroup>
        );
        const button = container.querySelector('button');
        expect(button).toHaveAttribute('data-state', 'off');
    });

    it('selects item on click in single mode', async () => {
        const user = userEvent.setup();
        const { container } = render(
            <ToggleGroup type="single">
                <ToggleGroupItem value="a">A</ToggleGroupItem>
                <ToggleGroupItem value="b">B</ToggleGroupItem>
            </ToggleGroup>
        );
        const [btnA] = container.querySelectorAll('button');
        await user.click(btnA!);
        expect(btnA).toHaveAttribute('data-state', 'on');
    });

    it('calls onValueChange with selected value', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        const { container } = render(
            <ToggleGroup type="single" onValueChange={handleChange}>
                <ToggleGroupItem value="bold">B</ToggleGroupItem>
            </ToggleGroup>
        );
        await user.click(container.querySelector('button')!);
        expect(handleChange).toHaveBeenCalledWith('bold');
    });
});
