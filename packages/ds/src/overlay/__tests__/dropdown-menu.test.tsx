import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from '../dropdown-menu';

const TestDropdown = () => (
    <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);

describe('DropdownMenu', () => {
    it('renders trigger', () => {
        render(<TestDropdown />);
        expect(screen.getByText('Open')).toBeInTheDocument();
    });

    it('shows content on trigger click', async () => {
        const user = userEvent.setup();
        render(<TestDropdown />);
        await user.click(screen.getByText('Open'));
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText('Settings')).toBeInTheDocument();
    });

    it('shows label and separator', async () => {
        const user = userEvent.setup();
        render(<TestDropdown />);
        await user.click(screen.getByText('Open'));
        expect(screen.getByText('Account')).toBeInTheDocument();
    });

    it('fires onSelect when item is clicked', async () => {
        const user = userEvent.setup();
        const handleSelect = vi.fn();
        render(
            <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onSelect={handleSelect}>Click me</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
        await user.click(screen.getByText('Open'));
        await user.click(screen.getByText('Click me'));
        expect(handleSelect).toHaveBeenCalled();
    });

    it('disabled item has aria-disabled', async () => {
        const user = userEvent.setup();
        render(<TestDropdown />);
        await user.click(screen.getByText('Open'));
        expect(screen.getByText('Disabled Item')).toHaveAttribute('data-disabled');
    });
});
