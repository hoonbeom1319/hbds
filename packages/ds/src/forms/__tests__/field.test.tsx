import { render, screen } from '@testing-library/react';
import { FormField, FormLabel, FormControl, FormDescription, FormError } from '../field';
import { Input } from '../input';

describe('FormField', () => {
    it('renders children', () => {
        render(
            <FormField id="email">
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input />
                </FormControl>
            </FormField>
        );
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('wires label htmlFor to input id', () => {
        render(
            <FormField id="email">
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input />
                </FormControl>
            </FormField>
        );
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('renders description with correct id', () => {
        render(
            <FormField id="name">
                <FormDescription>Helper text</FormDescription>
            </FormField>
        );
        const description = screen.getByText('Helper text');
        expect(description).toHaveAttribute('id', 'name-description');
    });

    it('renders error when invalid=true', () => {
        render(
            <FormField id="email" invalid>
                <FormError>Email is required</FormError>
            </FormField>
        );
        expect(screen.getByText('Email is required')).toBeInTheDocument();
    });

    it('hides error when invalid=false', () => {
        render(
            <FormField id="email" invalid={false}>
                <FormError>Email is required</FormError>
            </FormField>
        );
        expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
    });

    it('sets aria-invalid on FormControl child when invalid', () => {
        render(
            <FormField id="email" invalid>
                <FormControl>
                    <Input />
                </FormControl>
            </FormField>
        );
        expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });
});
