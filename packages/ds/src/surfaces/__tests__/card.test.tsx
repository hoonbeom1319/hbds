import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from '../card';

describe('Card', () => {
    it('renders children', () => {
        render(<Card>Content</Card>);
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders all sub-components together', () => {
        render(
            <Card>
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardDescription>Description</CardDescription>
                </CardHeader>
                <CardBody>Body content</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
        );
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
        expect(screen.getByText('Body content')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });

    it('CardTitle renders as h3', () => {
        render(<Card><CardTitle>Title</CardTitle></Card>);
        expect(screen.getByRole('heading', { level: 3, name: 'Title' })).toBeInTheDocument();
    });

    it('forwards className', () => {
        const { container } = render(<Card className="custom-card">Content</Card>);
        expect(container.firstChild).toHaveClass('custom-card');
    });
});
