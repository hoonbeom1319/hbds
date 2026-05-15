import * as React from 'react';

import * as AccordionPrimitives from '../primitives/accordion';
import { cn } from '../lib/utils';

const Accordion = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof AccordionPrimitives.Accordion>) => (
    <AccordionPrimitives.Accordion ref={ref} className={cn('divide-border border-border w-full divide-y rounded-lg border', className)} {...props} />
);

const AccordionItem = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof AccordionPrimitives.AccordionItem>) => (
    <AccordionPrimitives.AccordionItem ref={ref} className={className} {...props} />
);

const AccordionHeader = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof AccordionPrimitives.AccordionHeader>) => (
    <AccordionPrimitives.AccordionHeader ref={ref} className={className} {...props} />
);

const AccordionTrigger = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof AccordionPrimitives.AccordionTrigger>) => (
    <AccordionPrimitives.AccordionTrigger
        ref={ref}
        className={cn(
            'text-surface-foreground flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium',
            'focus-visible:ring-primary-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
            'disabled:pointer-events-none disabled:opacity-50',
            className
        )}
        {...props}
    />
);

const AccordionContent = ({ className, ref, children, ...props }: React.ComponentPropsWithRef<typeof AccordionPrimitives.AccordionContent>) => (
    <AccordionPrimitives.AccordionContent
        ref={ref}
        className={cn('text-muted overflow-hidden text-sm', 'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down')}
        {...props}
    >
        <div className={cn('px-4 pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitives.AccordionContent>
);

export { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent };
