import { render, screen } from '@testing-library/react';
import { Alert, AlertDescription, AlertTitle } from '../alert';

describe('Alert', () => {
    it('has role=alert', () => {
        render(<Alert>Message</Alert>);
        expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it.each([
        ['default', 'bg-neutral-50'],
        ['info', 'text-info'],
        ['success', 'text-success'],
        ['warning', 'text-warning'],
        ['danger', 'text-danger']
    ] as const)('applies %s variant', (variant, expectedClass) => {
        render(<Alert variant={variant}>Alert</Alert>);
        expect(screen.getByRole('alert')).toHaveClass(expectedClass);
    });

    it('renders AlertTitle', () => {
        render(
            <Alert>
                <AlertTitle>Title text</AlertTitle>
            </Alert>
        );
        expect(screen.getByText('Title text')).toBeInTheDocument();
    });

    it('renders AlertDescription', () => {
        render(
            <Alert>
                <AlertDescription>Description text</AlertDescription>
            </Alert>
        );
        expect(screen.getByText('Description text')).toBeInTheDocument();
    });

    it('renders title and description together', () => {
        render(
            <Alert variant="success">
                <AlertTitle>Done</AlertTitle>
                <AlertDescription>Saved successfully.</AlertDescription>
            </Alert>
        );
        expect(screen.getByText('Done')).toBeInTheDocument();
        expect(screen.getByText('Saved successfully.')).toBeInTheDocument();
    });
});
