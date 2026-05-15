import { AnchorHTMLAttributes, HTMLAttributes } from 'react';

import { cn } from '../lib/utils';

const Breadcrumb = ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <nav aria-label="breadcrumb" className={cn('flex', className)} {...props} />
);

const BreadcrumbList = ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('flex flex-wrap items-center gap-1.5 text-sm text-muted', className)} {...props} />
);

const BreadcrumbItem = ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li className={cn('flex items-center gap-1.5', className)} {...props} />
);

const BreadcrumbLink = ({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className={cn('transition-colors hover:text-surface-foreground', className)} {...props} />
);

const BreadcrumbPage = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
    <span aria-current="page" className={cn('font-medium text-surface-foreground', className)} {...props} />
);

const BreadcrumbSeparator = ({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) => (
    <span role="presentation" aria-hidden="true" className={cn('text-muted', className)} {...props}>
        {children ?? '/'}
    </span>
);

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator };
