import React from "react";
declare const AsyncSelectGroup: ({ name, label, options, handleOnFocusField, handleSelectOption, isLoading, className, }: {
    name: string;
    label: string;
    isLoading?: boolean;
    options?: Array<{
        value: string;
        label: string;
    }>;
    resources?: any;
    handleSelectOption: (option: {
        value: string;
        label: string;
    }) => void;
    handleOnFocusField?: () => void;
    className?: string;
}) => React.JSX.Element;
export default AsyncSelectGroup;
