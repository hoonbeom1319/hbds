import type { Meta, StoryObj } from '@storybook/react';

import { Alert, AlertTitle, AlertDescription } from './alert';

const meta: Meta<typeof Alert> = {
    title: 'Feedback/Alert',
    component: Alert,
    tags: ['autodocs'],
    parameters: { layout: 'padded' },
    argTypes: {
        variant: { control: 'select', options: ['default', 'info', 'success', 'warning', 'danger'] }
    }
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    render: () => (
        <Alert>
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
        </Alert>
    )
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-3 w-full max-w-lg">
            <Alert variant="info">
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>This is an informational message.</AlertDescription>
            </Alert>
            <Alert variant="success">
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Your changes have been saved successfully.</AlertDescription>
            </Alert>
            <Alert variant="warning">
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>Your session will expire in 5 minutes.</AlertDescription>
            </Alert>
            <Alert variant="danger">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong. Please try again.</AlertDescription>
            </Alert>
        </div>
    )
};
