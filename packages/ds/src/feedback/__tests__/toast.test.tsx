import { render, screen } from '@testing-library/react';
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription } from '../toast';

const TestToast = ({ variant = 'default' as const, open = true }) => (
    <ToastProvider>
        <Toast open={open} variant={variant}>
            <ToastTitle>Title</ToastTitle>
            <ToastDescription>Description</ToastDescription>
        </Toast>
        <ToastViewport />
    </ToastProvider>
);

describe('Toast', () => {
    it('renders title and description when open', () => {
        render(<TestToast />);
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it.each([
        ['success', 'text-success'],
        ['warning', 'text-warning'],
        ['danger', 'text-danger']
    ] as const)('applies %s variant class', (variant, expectedClass) => {
        render(<TestToast variant={variant} />);
        const toast = screen.getByText('Title').closest('[data-radix-toast-root]') ?? screen.getByText('Title').parentElement!;
        expect(toast).toHaveClass(expectedClass);
    });

    it('viewport has z-toast class', () => {
        const { container } = render(<TestToast />);
        const viewport = container.querySelector('ol');
        expect(viewport).toHaveClass('z-toast');
    });
});
