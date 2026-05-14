import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '../lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = ({ className, sideOffset = 4, children, ref, ...props }: React.ComponentPropsWithRef<typeof TooltipPrimitive.Content>) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                'z-tooltip bg-neutral-900 text-white rounded-md px-2.5 py-1.5 text-xs',
                'data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0',
                'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
                className
            )}
            {...props}
        >
            {children}
            <TooltipPrimitive.Arrow className="fill-neutral-900" />
        </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
);

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
