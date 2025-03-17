import React from "react";
import { useFormContext } from "@rharuow-ds/core";
import { cn } from "../lib/utils";
import { Skeleton } from "./skeleton";
import { Input } from "./input";
import { Card } from "./card";
const Loading = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Skeleton, { className: "h-7 w-full" }),
        React.createElement(Skeleton, { className: "h-7 w-full" })));
};
const AsyncSelectGroup = ({ name, label, options, handleOnFocusField, handleSelectOption, isLoading, className, }) => {
    var _a;
    const methods = useFormContext();
    const { register, watch, formState: { errors }, } = methods;
    const resourceWatch = watch(name);
    return (React.createElement("div", { className: cn("flex flex-col", className) },
        React.createElement(Input, Object.assign({ label: label, className: "rounded-none rounded-t-md z-50" }, register(name), (handleOnFocusField && { onFocus: handleOnFocusField }))),
        isLoading ? (React.createElement(Loading, null)) : !options || options.length === 0 ? (React.createElement(Card, { className: "flex justify-center border-0 rounded-none rounded-b-sm" },
            React.createElement("span", null, "Nenhum morador encontrado"))) : (options.map((option, index) => (React.createElement(Card, { key: option.value, className: cn("flex justify-center border-0 rounded-none", {
                "transition duration-500 bg-gray-950 text-white": resourceWatch === option.label,
                "rounded-b-sm": index === options.length - 1,
            }), onClick: () => handleSelectOption(option) },
            React.createElement("span", null, option.label))))),
        errors && errors[String(name)] && (React.createElement("span", { className: "text-xs text-red-700 font-bold" }, String((_a = errors[String(name)]) === null || _a === void 0 ? void 0 : _a.message)))));
};
export { AsyncSelectGroup };
