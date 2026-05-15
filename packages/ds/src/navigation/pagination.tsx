import { AnchorHTMLAttributes, ComponentProps, HTMLAttributes } from 'react';

import { cn } from '../lib/utils';

const Pagination = ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <nav role="navigation" aria-label="pagination" className={cn('mx-auto flex w-full justify-center', className)} {...props} />
);

const PaginationContent = ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('flex flex-row items-center gap-1', className)} {...props} />
);

const PaginationItem = ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => <li className={cn('', className)} {...props} />;

type PaginationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    isActive?: boolean;
};

const PaginationLink = ({ className, isActive, ...props }: PaginationLinkProps) => (
    <a
        aria-current={isActive ? 'page' : undefined}
        className={cn(
            'inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border text-sm transition-colors',
            isActive ? 'border-primary-300 bg-primary-50 text-primary-700' : 'border-transparent text-surface-foreground hover:bg-neutral-100',
            className
        )}
        {...props}
    />
);

const PaginationPrevious = ({ className, ...props }: ComponentProps<typeof PaginationLink>) => (
    <PaginationLink aria-label="Go to previous page" className={cn('w-auto gap-1 px-3', className)} {...props}>
        ← Previous
    </PaginationLink>
);

const PaginationNext = ({ className, ...props }: ComponentProps<typeof PaginationLink>) => (
    <PaginationLink aria-label="Go to next page" className={cn('w-auto gap-1 px-3', className)} {...props}>
        Next →
    </PaginationLink>
);

const PaginationEllipsis = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
    <span aria-hidden="true" className={cn('flex h-9 w-9 items-center justify-center text-muted', className)} {...props}>
        ...
    </span>
);

export { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis };
export type { PaginationLinkProps };
