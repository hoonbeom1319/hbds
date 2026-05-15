import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../tabs';

const TestTabs = ({ defaultValue = 'a', variant }: { defaultValue?: string; variant?: 'line' | 'pill' }) => (
    <Tabs defaultValue={defaultValue} variant={variant}>
        <TabsList>
            <TabsTrigger value="a">Tab A</TabsTrigger>
            <TabsTrigger value="b">Tab B</TabsTrigger>
            <TabsTrigger value="c" disabled>Tab C</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Content A</TabsContent>
        <TabsContent value="b">Content B</TabsContent>
        <TabsContent value="c">Content C</TabsContent>
    </Tabs>
);

describe('Tabs', () => {
    it('renders all triggers', () => {
        render(<TestTabs />);
        expect(screen.getByRole('tab', { name: 'Tab A' })).toBeInTheDocument();
        expect(screen.getByRole('tab', { name: 'Tab B' })).toBeInTheDocument();
        expect(screen.getByRole('tab', { name: 'Tab C' })).toBeInTheDocument();
    });

    it('shows default tab content', () => {
        render(<TestTabs defaultValue="a" />);
        expect(screen.getByText('Content A')).toBeInTheDocument();
        expect(screen.queryByText('Content B')).not.toBeInTheDocument();
    });

    it('switches content on click', async () => {
        const user = userEvent.setup();
        render(<TestTabs />);
        await user.click(screen.getByRole('tab', { name: 'Tab B' }));
        expect(screen.getByText('Content B')).toBeInTheDocument();
        expect(screen.queryByText('Content A')).not.toBeInTheDocument();
    });

    it('active trigger has data-state=active', () => {
        render(<TestTabs defaultValue="a" />);
        expect(screen.getByRole('tab', { name: 'Tab A' })).toHaveAttribute('data-state', 'active');
        expect(screen.getByRole('tab', { name: 'Tab B' })).toHaveAttribute('data-state', 'inactive');
    });

    it('disabled trigger is not clickable', async () => {
        const user = userEvent.setup();
        render(<TestTabs defaultValue="a" />);
        await user.click(screen.getByRole('tab', { name: 'Tab C' }));
        expect(screen.getByText('Content A')).toBeInTheDocument();
        expect(screen.queryByText('Content C')).not.toBeInTheDocument();
    });

    it('applies pill variant class on TabsList', () => {
        const { container } = render(<TestTabs variant="pill" />);
        const list = container.querySelector('[role="tablist"]');
        expect(list).toHaveClass('rounded-lg');
    });

    it('applies line variant class on TabsList by default', () => {
        const { container } = render(<TestTabs />);
        const list = container.querySelector('[role="tablist"]');
        expect(list).toHaveClass('border-b');
    });
});
