import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../input';

describe('Input', () => {
    it('renders an input element', () => {
        render(<Input />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('defaults to type=text', () => {
        render(<Input />);
        expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
    });

    it('accepts user input', async () => {
        const user = userEvent.setup();
        render(<Input />);
        await user.type(screen.getByRole('textbox'), 'hello');
        expect(screen.getByRole('textbox')).toHaveValue('hello');
    });

    it('calls onChange', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        render(<Input onChange={handleChange} />);
        await user.type(screen.getByRole('textbox'), 'a');
        expect(handleChange).toHaveBeenCalled();
    });

    it('sets aria-invalid when invalid prop is true', () => {
        render(<Input invalid />);
        expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('does not set aria-invalid when invalid is false', () => {
        render(<Input invalid={false} />);
        expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
    });

    it('is disabled when disabled prop passed', () => {
        render(<Input disabled />);
        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('forwards className', () => {
        render(<Input className="custom" />);
        expect(screen.getByRole('textbox')).toHaveClass('custom');
    });

    it('forwards placeholder', () => {
        render(<Input placeholder="Enter text" />);
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });
});
