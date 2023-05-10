import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: any;
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
