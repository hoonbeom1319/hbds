import { HTMLAttributes } from 'react';

import { cn } from '../lib/utils';

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

const Badge = ({ className, ...props }: BadgeProps) => (
    <span className={cn('inline-flex items-center', className)} {...props} />
);

export { Badge };
