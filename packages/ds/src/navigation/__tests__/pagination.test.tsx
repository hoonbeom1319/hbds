import { render, screen } from '@testing-library/react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from '../pagination';

const TestPagination = () => (
    <Pagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
                <PaginationNext href="#" />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
);

describe('Pagination', () => {
    it('renders nav with aria-label=pagination', () => {
        render(<TestPagination />);
        expect(screen.getByRole('navigation', { name: 'pagination' })).toBeInTheDocument();
    });

    it('renders previous and next links', () => {
        render(<TestPagination />);
        expect(screen.getByLabelText('Go to previous page')).toBeInTheDocument();
        expect(screen.getByLabelText('Go to next page')).toBeInTheDocument();
    });

    it('active page has aria-current=page', () => {
        render(<TestPagination />);
        expect(screen.getByText('2')).toHaveAttribute('aria-current', 'page');
    });

    it('inactive page does not have aria-current', () => {
        render(<TestPagination />);
        expect(screen.getByText('1')).not.toHaveAttribute('aria-current');
    });

    it('active link has primary styling', () => {
        render(<TestPagination />);
        expect(screen.getByText('2')).toHaveClass('bg-primary-50');
    });

    it('ellipsis is hidden from assistive tech', () => {
        render(<TestPagination />);
        const ellipsis = screen.getByText('...');
        expect(ellipsis).toHaveAttribute('aria-hidden', 'true');
    });
});
