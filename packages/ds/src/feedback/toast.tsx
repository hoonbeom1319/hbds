import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';

import { cn } from '../lib/utils';

const ToastProvider = ToastPrimitive.Provider;

const ToastViewport = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof ToastPrimitive.Viewport>) => (
    <ToastPrimitive.Viewport
        ref={ref}
        className={cn(
            'z-toast fixed top-0 right-0 flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-[420px]',
            className
        )}
        {...props}
    />
);

type ToastVariant = 'default' | 'success' | 'warning' | 'danger';

const variantClass: Record<ToastVariant, string> = {
    default: 'bg-surface text-surface-foreground border-border',
    success: 'bg-success/10 text-success border-success/30',
    warning: 'bg-warning/10 text-warning border-warning/30',
    danger: 'bg-danger/10 text-danger border-danger/30'
};

type ToastProps = React.ComponentPropsWithRef<typeof ToastPrimitive.Root> & {
    variant?: ToastVariant;
};

const Toast = ({ className, variant = 'default', ref, ...props }: ToastProps) => (
    <ToastPrimitive.Root
        ref={ref}
        className={cn(
            'pointer-events-auto relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-md border p-4 pr-6 shadow-lg',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
            'data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=move]:transition-none',
            'data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out]',
            'data-[swipe=end]:animate-out data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x)',
            variantClass[variant],
            className
        )}
        {...props}
    />
);

const ToastTitle = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof ToastPrimitive.Title>) => (
    <ToastPrimitive.Title ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
);

const ToastDescription = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof ToastPrimitive.Description>) => (
    <ToastPrimitive.Description ref={ref} className={cn('text-sm opacity-90', className)} {...props} />
);

const ToastAction = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof ToastPrimitive.Action>) => (
    <ToastPrimitive.Action
        ref={ref}
        type="button"
        className={cn(
            'border-border hover:bg-neutral-100 inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium',
            'focus-visible:ring-primary-500 focus-visible:ring-2 focus-visible:outline-none',
            'disabled:pointer-events-none disabled:opacity-50',
            className
        )}
        {...props}
    />
);

const ToastClose = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof ToastPrimitive.Close>) => (
    <ToastPrimitive.Close
        ref={ref}
        type="button"
        aria-label="Close"
        className={cn(
            'text-muted hover:text-surface-foreground absolute top-2 right-2 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100',
            'focus-visible:ring-primary-500 focus-visible:ring-2 focus-visible:outline-none',
            className
        )}
        toast-close=""
        {...props}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    </ToastPrimitive.Close>
);

export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastAction, ToastClose };
export type { ToastProps, ToastVariant };
