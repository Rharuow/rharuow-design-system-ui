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
import React from "react";
import { useFormContext } from "@rharuow-ds/core";
import { Input } from "./input";
import { cn } from "../lib/utils";
import { Skeleton } from "./skeleton";
import { FormDescription } from "./form";
const InputGroup = React.forwardRef((_a, ref) => {
    var _b;
    var { name, onChange, onBlur, isLoading, label, hint } = _a, props = __rest(_a, ["name", "onChange", "onBlur", "isLoading", "label", "hint"]);
    if (!name) {
        throw new Error("The 'name' prop is required for InputGroup.");
    }
    const methods = useFormContext();
    if (!methods) {
        throw new Error("InputGroup must be used within a FormProvider from @rharuow-ds/core.");
    }
    const { register, formState: { errors }, } = methods;
    const _c = register(String(name), {
        onChange,
        onBlur,
    }), { ref: registerRef } = _c, registerProps = __rest(_c, ["ref"]);
    return isLoading ? (React.createElement(Skeleton, { className: "h-10" })) : (React.createElement("div", { className: "flex flex-col" },
        React.createElement(Input, Object.assign({ label: label, className: cn({
                "border border-red-700": errors && errors[String(name)],
                "py-1": hint,
            }) }, registerProps, { ref: (e) => {
                registerRef(e);
                if (ref) {
                    if (typeof ref === "function") {
                        ref(e);
                    }
                    else {
                        ref.current = e;
                    }
                }
            } })),
        errors && errors[String(name)] && (React.createElement("span", { className: "text-xs text-red-700 font-bold" }, String(((_b = errors[String(name)]) === null || _b === void 0 ? void 0 : _b.message) || ""))),
        hint && Object.keys(errors).length === 0 && (React.createElement(FormDescription, { className: "text-xs" }, hint))));
});
InputGroup.displayName = "InputGroup";
export { InputGroup };
