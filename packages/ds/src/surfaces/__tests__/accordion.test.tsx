import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionHeader } from '../accordion';

const TestAccordion = () => (
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionHeader>
                <AccordionTrigger>Section 1</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionHeader>
                <AccordionTrigger>Section 2</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
    </Accordion>
);

describe('Accordion', () => {
    it('renders all triggers', () => {
        render(<TestAccordion />);
        expect(screen.getByRole('button', { name: 'Section 1' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Section 2' })).toBeInTheDocument();
    });

    it('content is hidden by default', () => {
        render(<TestAccordion />);
        expect(screen.getByRole('button', { name: 'Section 1' })).toHaveAttribute('aria-expanded', 'false');
    });

    it('expands content when trigger is clicked', async () => {
        const user = userEvent.setup();
        render(<TestAccordion />);
        await user.click(screen.getByRole('button', { name: 'Section 1' }));
        expect(screen.getByRole('button', { name: 'Section 1' })).toHaveAttribute('aria-expanded', 'true');
    });

    it('collapses when clicked again (collapsible mode)', async () => {
        const user = userEvent.setup();
        render(<TestAccordion />);
        await user.click(screen.getByRole('button', { name: 'Section 1' }));
        await user.click(screen.getByRole('button', { name: 'Section 1' }));
        expect(screen.getByRole('button', { name: 'Section 1' })).toHaveAttribute('aria-expanded', 'false');
    });
});
