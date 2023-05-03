/// <reference types="react" />
import "./button.css";
interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}
export declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => JSX.Element;
export {};
