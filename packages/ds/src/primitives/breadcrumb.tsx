import * as React from 'react';

const Breadcrumb = ({ ref, ...props }: React.ComponentPropsWithRef<'nav'>) => (
    <nav ref={ref} aria-label="breadcrumb" {...props} />
);

const BreadcrumbList = ({ ref, ...props }: React.ComponentPropsWithRef<'ol'>) => (
    <ol ref={ref} {...props} />
);

const BreadcrumbItem = ({ ref, ...props }: React.ComponentPropsWithRef<'li'>) => (
    <li ref={ref} {...props} />
);

const BreadcrumbLink = ({ ref, ...props }: React.ComponentPropsWithRef<'a'>) => (
    <a ref={ref} {...props} />
);

const BreadcrumbPage = ({ ref, ...props }: React.ComponentPropsWithRef<'span'>) => (
    <span ref={ref} aria-current="page" {...props} />
);

const BreadcrumbSeparator = ({ ref, ...props }: React.ComponentPropsWithRef<'span'>) => (
    <span ref={ref} role="presentation" aria-hidden="true" {...props} />
);

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator };
