import * as React from 'react';

import { cn } from '../lib/utils';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    invalid?: boolean;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, invalid, rows = 4, ...props }, ref) => (
    <textarea
        ref={ref}
        rows={rows}
        aria-invalid={invalid || undefined}
        className={cn(
            'border-border bg-surface text-surface-foreground flex w-full rounded-md border px-3 py-2 text-sm',
            'placeholder:text-muted',
            'focus-visible:ring-primary-500 focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'aria-[invalid=true]:border-danger aria-[invalid=true]:focus-visible:ring-danger',
            'resize-y',
            className
        )}
        {...props}
    />
));
Textarea.displayName = 'Textarea';

export { Textarea };
export type { TextareaProps };
