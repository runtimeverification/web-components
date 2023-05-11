/// <reference types="react" />
import * as React from 'react';
import React__default, { FC } from 'react';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => React__default.JSX.Element;

type User = {
    name: string;
};
interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
declare const Header: ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => React__default.JSX.Element;

declare function Footer(): React.JSX.Element;

interface Props {
    dotGraphData?: string;
    onNodeClick?: (self: any) => void;
    onEdgeClick?: (self: any) => void;
}
declare const ReusableGraph: FC<Props>;

declare const Page: React__default.FC;

export { Button, Footer, ReusableGraph as GraphViz, Header, Page };
