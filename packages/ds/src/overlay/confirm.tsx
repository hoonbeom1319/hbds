import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import { cn } from '../lib/utils';
import {
    Button,
    useConfirm,
    Confirm as PConfirm,
    ConfirmOverlay,
    ConfirmContent as PConfirmContent,
    ConfirmTitle as PConfirmTitle,
    ConfirmClose,
    ConfirmButton as PConfirmButton,
    CancelButton as PCancelButton,
} from '../primitives';

const Confirm = ({ name, children, className }: Omit<ComponentProps<typeof PConfirm>, 'children'> & { className?: string; children: ReactNode | ((data: unknown) => ReactNode) }) => {
    return (
        <PConfirm name={name}>
            <ConfirmOverlay className="z-backdrop fixed inset-0 bg-black/50" />
            <PConfirmContent
                className={cn('z-modal fixed top-1/2 left-1/2 min-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-4 pb-4', className)}
            >
                {children}
            </PConfirmContent>
        </PConfirm>
    );
};

const ConfirmTitle = ({ children, hidden, hideClose, className }: ComponentProps<typeof PConfirmTitle> & { hideClose?: boolean }) => {
    return (
        <div className={cn('flex w-full items-center justify-between py-4', hidden && hideClose && 'pt-0 pb-4', className)}>
            <PConfirmTitle hidden={hidden}>{children}</PConfirmTitle>
            {!hideClose && (
                <ConfirmClose asChild>
                    <Button className="hb-focus-ring-primary min-h-none min-w-none ml-auto flex cursor-pointer items-center justify-center">
                        X
                    </Button>
                </ConfirmClose>
            )}
        </div>
    );
};

const ConfirmBody = ({ children, className }: PropsWithChildren<{ className?: string }>) => <div className={cn('pb-4', className)}>{children}</div>;

const ConfirmButtonGroup = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
    <div className={cn('flex justify-end gap-2', className)}>{children}</div>
);

const ConfirmButton = ({ className, name, children, onClick }: ComponentProps<typeof PConfirmButton>) => {
    return (
        <PConfirmButton className={className} name={name} onClick={onClick}>
            {children}
        </PConfirmButton>
    );
};

const CancelButton = ({ className, name, children, onClick }: ComponentProps<typeof PCancelButton>) => {
    return (
        <PCancelButton className={className} name={name} onClick={onClick}>
            {children}
        </PCancelButton>
    );
};

export { useConfirm, Confirm, ConfirmTitle, ConfirmBody, ConfirmButtonGroup, ConfirmButton, CancelButton };
