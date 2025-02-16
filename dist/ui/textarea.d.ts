import * as React from "react";
import { CustomProps } from "./input";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & CustomProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
