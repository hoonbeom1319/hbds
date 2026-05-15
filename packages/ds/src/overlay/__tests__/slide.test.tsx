import { render, screen, waitFor } from '@testing-library/react';
import { Slide } from '../slide';

describe('Slide', () => {
    it('renders children when open', () => {
        render(<Slide open>Slide content</Slide>);
        expect(screen.getByText('Slide content')).toBeInTheDocument();
    });

    it('is not mounted by default when closed and keepMounted=false', () => {
        render(<Slide open={false}>Hidden content</Slide>);
        expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
    });

    it('stays mounted when keepMounted=true even when closed', () => {
        render(<Slide open={false} keepMounted>Kept content</Slide>);
        expect(screen.getByText('Kept content')).toBeInTheDocument();
    });

    it('has data-state=entered when open', async () => {
        const { container } = render(<Slide open>Content</Slide>);
        await waitFor(() => {
            expect(container.firstChild).toHaveAttribute('data-state', 'entered');
        });
    });

    it('has data-state=exited when closed and keepMounted', () => {
        const { container } = render(<Slide open={false} keepMounted>Content</Slide>);
        expect(container.firstChild).toHaveAttribute('data-state', 'exited');
    });
});
