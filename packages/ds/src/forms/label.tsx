import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '../lib/utils';

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(
            'text-surface-foreground text-sm leading-none font-medium',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            className
        )}
        {...props}
    />
));
Label.displayName = 'Label';

export { Label };
export type { LabelProps };
