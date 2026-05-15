import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../checkbox';

describe('Checkbox', () => {
    it('renders a checkbox', () => {
        render(<Checkbox />);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('is unchecked by default', () => {
        render(<Checkbox />);
        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('can be checked by clicking', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        render(<Checkbox onCheckedChange={handleChange} />);
        await user.click(screen.getByRole('checkbox'));
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('renders as checked when defaultChecked is true', () => {
        render(<Checkbox defaultChecked />);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('is disabled when disabled prop passed', () => {
        render(<Checkbox disabled />);
        expect(screen.getByRole('checkbox')).toBeDisabled();
    });
});
