import * as React from 'react';

import { Separator as PSeparator } from '../primitives';
import { cn } from '../lib/utils';

type SeparatorProps = React.ComponentPropsWithRef<typeof PSeparator>;

const Separator = ({ className, orientation = 'horizontal', decorative = true, ref, ...props }: SeparatorProps) => (
    <PSeparator
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn('shrink-0 bg-border', orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px', className)}
        {...props}
    />
);

export { Separator };
export type { SeparatorProps };
