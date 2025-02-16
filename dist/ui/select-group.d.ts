import React, { ReactNode } from "react";
declare const SelectGroup: ({ name, options, isLoading, className, position, defaultValue, }: {
    name: string;
    isLoading?: boolean;
    options: Array<{
        value: string;
        label: string | ReactNode;
    }>;
    className?: string;
    defaultValue?: string;
    position?: "popper" | "item-aligned";
}) => React.JSX.Element;
export default SelectGroup;
