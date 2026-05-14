import * as React from 'react';

import { cn } from '../lib/utils';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type = 'text', invalid, ...props }, ref) => (
    <input
        ref={ref}
        type={type}
        aria-invalid={invalid || undefined}
        className={cn(
            'border-border bg-surface text-surface-foreground flex h-10 w-full rounded-md border px-3 py-2 text-sm',
            'placeholder:text-muted',
            'focus-visible:ring-primary-500 focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'aria-[invalid=true]:border-danger aria-[invalid=true]:focus-visible:ring-danger',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            className
        )}
        {...props}
    />
));
Input.displayName = 'Input';

export { Input };
export type { InputProps };
