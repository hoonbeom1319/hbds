import * as React from 'react';

import { Avatar as PAvatar, AvatarImage as PAvatarImage, AvatarFallback as PAvatarFallback } from '../primitives';
import { cn } from '../lib/utils';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

const sizeClass: Record<AvatarSize, string> = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg'
};

type AvatarProps = React.ComponentPropsWithRef<typeof PAvatar> & {
    size?: AvatarSize;
};

const Avatar = ({ className, size = 'md', ref, ...props }: AvatarProps) => (
    <PAvatar ref={ref} className={cn('relative flex shrink-0 overflow-hidden rounded-full', sizeClass[size], className)} {...props} />
);

const AvatarImage = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof PAvatarImage>) => (
    <PAvatarImage ref={ref} className={cn('aspect-square h-full w-full object-cover', className)} {...props} />
);

const AvatarFallback = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof PAvatarFallback>) => (
    <PAvatarFallback
        ref={ref}
        className={cn('flex h-full w-full items-center justify-center rounded-full bg-neutral-100 font-medium text-neutral-600', className)}
        {...props}
    />
);

export { Avatar, AvatarImage, AvatarFallback };
export type { AvatarProps, AvatarSize };
