import { render, screen } from '@testing-library/react';
import { Avatar, AvatarFallback, AvatarImage } from '../avatar';

describe('Avatar', () => {
    it('renders fallback text when image is missing', async () => {
        render(
            <Avatar>
                <AvatarImage src="/nonexistent.jpg" alt="User" />
                <AvatarFallback>HB</AvatarFallback>
            </Avatar>
        );
        expect(await screen.findByText('HB')).toBeInTheDocument();
    });

    it.each([
        ['sm', 'h-8'],
        ['md', 'h-10'],
        ['lg', 'h-12'],
        ['xl', 'h-16']
    ] as const)('applies %s size class', (size, expectedClass) => {
        render(
            <Avatar size={size}>
                <AvatarFallback>HB</AvatarFallback>
            </Avatar>
        );
        const avatar = screen.getByText('HB').parentElement!;
        expect(avatar).toHaveClass(expectedClass);
    });

    it('renders without crashing when src is provided', () => {
        // jsdom cannot load real images, fallback is shown — just verify no crash
        expect(() =>
            render(
                <Avatar>
                    <AvatarImage src="https://example.com/avatar.png" alt="Avatar" />
                    <AvatarFallback>HB</AvatarFallback>
                </Avatar>
            )
        ).not.toThrow();
    });
});
