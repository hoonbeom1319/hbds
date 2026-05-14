import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';

import { cn } from '../lib/utils';

const ToastProvider = ToastPrimitive.Provider;

const ToastViewport = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Viewport>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>>(
    ({ className, ...props }, ref) => (
        <ToastPrimitive.Viewport
            ref={ref}
            className={cn(
                'z-toast fixed top-0 right-0 flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-[420px]',
                className
            )}
            {...props}
        />
    )
);
ToastViewport.displayName = 'ToastViewport';

type ToastVariant = 'default' | 'success' | 'warning' | 'danger';

const variantClass: Record<ToastVariant, string> = {
    default: 'bg-surface text-surface-foreground border-border',
    success: 'bg-success/10 text-success border-success/30',
    warning: 'bg-warning/10 text-warning border-warning/30',
    danger: 'bg-danger/10 text-danger border-danger/30'
};

type ToastProps = React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> & {
    variant?: ToastVariant;
};

const Toast = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Root>, ToastProps>(({ className, variant = 'default', ...props }, ref) => (
    <ToastPrimitive.Root
        ref={ref}
        className={cn(
            'pointer-events-auto relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-md border p-4 pr-6 shadow-lg',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
            'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]',
            variantClass[variant],
            className
        )}
        {...props}
    />
));
Toast.displayName = 'Toast';

const ToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Title>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>>(
    ({ className, ...props }, ref) => <ToastPrimitive.Title ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
);
ToastTitle.displayName = 'ToastTitle';

const ToastDescription = React.forwardRef<
    React.ElementRef<typeof ToastPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => <ToastPrimitive.Description ref={ref} className={cn('text-sm opacity-90', className)} {...props} />);
ToastDescription.displayName = 'ToastDescription';

const ToastAction = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Action>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>>(
    ({ className, ...props }, ref) => (
        <ToastPrimitive.Action
            ref={ref}
            className={cn(
                'border-border hover:bg-neutral-100 inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium',
                'focus-visible:ring-primary-500 focus-visible:ring-2 focus-visible:outline-none',
                'disabled:pointer-events-none disabled:opacity-50',
                className
            )}
            {...props}
        />
    )
);
ToastAction.displayName = 'ToastAction';

const ToastClose = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Close>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>>(
    ({ className, ...props }, ref) => (
        <ToastPrimitive.Close
            ref={ref}
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
    )
);
ToastClose.displayName = 'ToastClose';

export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastAction, ToastClose };
export type { ToastProps, ToastVariant };
