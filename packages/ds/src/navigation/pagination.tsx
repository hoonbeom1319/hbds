import * as React from 'react';

import * as PaginationPrimitive from '../primitives/pagination';
import { cn } from '../lib/utils';

const Pagination = ({ className, ...props }: React.ComponentPropsWithRef<typeof PaginationPrimitive.Pagination>) => (
    <PaginationPrimitive.Pagination className={cn('mx-auto flex w-full justify-center', className)} {...props} />
);

const PaginationContent = ({ className, ...props }: React.ComponentPropsWithRef<typeof PaginationPrimitive.PaginationContent>) => (
    <PaginationPrimitive.PaginationContent className={cn('flex flex-row items-center gap-1', className)} {...props} />
);

const PaginationItem = ({ className, ...props }: React.ComponentPropsWithRef<typeof PaginationPrimitive.PaginationItem>) => (
    <PaginationPrimitive.PaginationItem className={cn('', className)} {...props} />
);

type PaginationLinkProps = PaginationPrimitive.PaginationLinkProps & {
    className?: string;
};

const PaginationLink = ({ className, isActive, ...props }: PaginationLinkProps) => (
    <PaginationPrimitive.PaginationLink
        isActive={isActive}
        className={cn(
            'inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border text-sm transition-colors',
            isActive ? 'border-primary-300 bg-primary-50 text-primary-700' : 'border-transparent text-surface-foreground hover:bg-neutral-100',
            className
        )}
        {...props}
    />
);

const PaginationPrevious = ({ className, ...props }: React.ComponentPropsWithRef<typeof PaginationPrimitive.PaginationPrevious>) => (
    <PaginationPrimitive.PaginationPrevious
        className={cn('inline-flex h-9 w-auto cursor-pointer items-center justify-center gap-1 rounded-md border border-transparent px-3 text-sm transition-colors hover:bg-neutral-100', className)}
        {...props}
    >
        ← Previous
    </PaginationPrimitive.PaginationPrevious>
);

const PaginationNext = ({ className, ...props }: React.ComponentPropsWithRef<typeof PaginationPrimitive.PaginationNext>) => (
    <PaginationPrimitive.PaginationNext
        className={cn('inline-flex h-9 w-auto cursor-pointer items-center justify-center gap-1 rounded-md border border-transparent px-3 text-sm transition-colors hover:bg-neutral-100', className)}
        {...props}
    >
        Next →
    </PaginationPrimitive.PaginationNext>
);

const PaginationEllipsis = ({ className, ...props }: React.ComponentPropsWithRef<typeof PaginationPrimitive.PaginationEllipsis>) => (
    <PaginationPrimitive.PaginationEllipsis className={cn('flex h-9 w-9 items-center justify-center text-muted', className)} {...props}>
        ...
    </PaginationPrimitive.PaginationEllipsis>
);

export { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis };
