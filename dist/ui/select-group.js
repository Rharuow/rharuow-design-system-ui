import React from "react";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem } from "./form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "./select";
import { cn } from "../lib/utils";
import { Skeleton } from "./skeleton";
const SelectGroup = ({ name, options, isLoading, className, position, defaultValue, }) => {
    const methods = useFormContext();
    const { formState: { errors }, getValues, } = methods;
    return isLoading ? (React.createElement(Skeleton, { className: "h-10 w-full" })) : (React.createElement(FormField, Object.assign({ name: name, render: ({ field }) => {
            var _a;
            return (React.createElement(FormItem, { className: cn("z-50", className) },
                React.createElement(Select, { onValueChange: field.onChange, defaultValue: defaultValue },
                    React.createElement(FormControl, null,
                        React.createElement(SelectTrigger, { className: cn({
                                "border border-red-700": errors && errors[name],
                            }) },
                            React.createElement(SelectValue, { placeholder: "Tipo" }))),
                    React.createElement(SelectContent, { className: "flex", position: position }, options.map((option) => (React.createElement(SelectItem, { className: "z-50", key: option.value, value: option.value }, option.label))))),
                errors && errors[name] && (React.createElement("span", { className: "text-xs text-red-400 font-bold" }, String((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.message)))));
        } }, methods)));
};
export default SelectGroup;
