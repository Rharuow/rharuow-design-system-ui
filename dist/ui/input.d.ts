import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
export interface CustomProps {
    name: string;
    label?: string;
    Icon?: React.ElementType;
    iconClassName?: string;
    containerClassName?: string;
    iconAction?: React.MouseEventHandler<HTMLDivElement>;
    hint?: string;
    validationMessage?: string;
    isLoading?: Boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & CustomProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
