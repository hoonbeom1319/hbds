import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '../textarea';

describe('Textarea', () => {
    it('renders a textarea element', () => {
        render(<Textarea />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('accepts user input', async () => {
        const user = userEvent.setup();
        render(<Textarea />);
        await user.type(screen.getByRole('textbox'), 'hello world');
        expect(screen.getByRole('textbox')).toHaveValue('hello world');
    });

    it('sets aria-invalid when invalid prop is true', () => {
        render(<Textarea invalid />);
        expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('is disabled when disabled prop passed', () => {
        render(<Textarea disabled />);
        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('forwards rows prop', () => {
        render(<Textarea rows={5} />);
        expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5');
    });
});
