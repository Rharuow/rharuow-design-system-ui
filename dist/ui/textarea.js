"use client";
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
const Textarea = React.forwardRef((_a, ref) => {
    var { className, label, onFocus, onBlur, name } = _a, props = __rest(_a, ["className", "label", "onFocus", "onBlur", "name"]);
    const [focused, setFocused] = React.useState(false);
    const { control, register, formState: { errors }, } = useFormContext();
    const valueWatch = useWatch({ control, name: String(name) });
    return (React.createElement("div", { className: "relative" },
        React.createElement("textarea", Object.assign({ className: cn("flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className, {
                "border-red-700": errors && errors[String(name)],
            }), onFocus: (event) => {
                setFocused(true);
                onFocus && onFocus(event);
            } }, props, register(name, {
            onBlur: (event) => {
                setFocused(!!event.target.value);
                onBlur && onBlur(event);
            },
        }))),
        label && (React.createElement("label", { className: cn("text-white absolute top-1/2 -translate-y-1/2 left-3", {
                "animate-label-focus": focused || valueWatch,
                "animate-label-blur": !focused,
            }), htmlFor: props.id || name }, label))));
});
Textarea.displayName = "Textarea";
export { Textarea };
