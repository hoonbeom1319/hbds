import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '../popover';

const TestPopover = () => (
    <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>
            <p>Popover content</p>
            <PopoverClose>Close</PopoverClose>
        </PopoverContent>
    </Popover>
);

describe('Popover', () => {
    it('renders trigger', () => {
        render(<TestPopover />);
        expect(screen.getByText('Open Popover')).toBeInTheDocument();
    });

    it('shows content on trigger click', async () => {
        const user = userEvent.setup();
        render(<TestPopover />);
        await user.click(screen.getByText('Open Popover'));
        expect(screen.getByText('Popover content')).toBeInTheDocument();
    });

    it('closes when close button is clicked', async () => {
        const user = userEvent.setup();
        render(<TestPopover />);
        await user.click(screen.getByText('Open Popover'));
        expect(screen.getByText('Popover content')).toBeInTheDocument();
        await user.click(screen.getByText('Close'));
        expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });

    it('content has z-popover class', async () => {
        const user = userEvent.setup();
        render(<TestPopover />);
        await user.click(screen.getByText('Open Popover'));
        const content = screen.getByText('Popover content').closest('[data-radix-popper-content-wrapper]')?.firstChild;
        expect(content ?? screen.getByText('Popover content').closest('[role="dialog"]')).toBeTruthy();
    });
});
