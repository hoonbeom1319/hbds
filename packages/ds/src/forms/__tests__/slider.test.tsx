import { render, screen } from '@testing-library/react';
import { Slider } from '../slider';

describe('Slider', () => {
    it('renders a slider', () => {
        render(<Slider defaultValue={[50]} />);
        expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    it('sets aria-valuenow from defaultValue', () => {
        render(<Slider defaultValue={[30]} />);
        expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '30');
    });

    it('sets aria-valuemin and aria-valuemax', () => {
        render(<Slider defaultValue={[50]} min={0} max={100} />);
        const slider = screen.getByRole('slider');
        expect(slider).toHaveAttribute('aria-valuemin', '0');
        expect(slider).toHaveAttribute('aria-valuemax', '100');
    });

    it('is disabled when disabled prop passed', () => {
        render(<Slider defaultValue={[50]} disabled />);
        expect(screen.getByRole('slider')).toHaveAttribute('data-disabled', '');
    });
});
