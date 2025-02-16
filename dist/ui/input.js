var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { cn } from "../lib/utils";
import { useFormContext, useWatch } from "react-hook-form";
const Input = React.forwardRef((_a, ref) => {
    var { className, type, label, onFocus, onBlur, Icon, iconClassName, iconAction, containerClassName } = _a, props = __rest(_a, ["className", "type", "label", "onFocus", "onBlur", "Icon", "iconClassName", "iconAction", "containerClassName"]);
    const [focused, setFocused] = React.useState(false);
    const { control, watch } = useFormContext();
    const valueWatch = useWatch({ control, name: String(props.name) });
    return (React.createElement("div", { className: cn("relative", containerClassName) },
        React.createElement("input", Object.assign({ id: props.id || props.name, type: type, className: cn("flex h-10 w-full border z-10 border-input rounded-full text-white bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", className), onFocus: (event) => {
                setFocused(true);
                onFocus && onFocus(event);
            }, onBlur: (event) => {
                setFocused(!!event.target.value);
                onBlur && onBlur(event);
            }, ref: ref }, props)),
        label && (React.createElement("label", { className: cn("text-white absolute top-1/2 -translate-y-1/2 left-3 text-nowrap", {
                "animate-label-focus": focused || valueWatch,
                "animate-label-blur": !focused,
            }), htmlFor: props.id || props.name }, label)),
        Icon && (React.createElement("div", { className: cn("text-white absolute top-1/2 -translate-y-1/2 right-3", iconClassName), onClick: iconAction },
            React.createElement(Icon, null)))));
});
Input.displayName = "Input";
export { Input };
