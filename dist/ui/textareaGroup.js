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
import { useFormContext } from "react-hook-form";
import { Textarea } from "./textarea";
const TextareaGroup = React.forwardRef((_a, ref) => {
    var _b;
    var { name, onChange, onBlur, label, validationMessage } = _a, props = __rest(_a, ["name", "onChange", "onBlur", "label", "validationMessage"]);
    const { register, formState: { errors }, } = useFormContext();
    return (React.createElement("div", { className: "flex flex-col" },
        React.createElement(Textarea, Object.assign({}, register(name), { label: "Justificativa" }, props)),
        errors && errors[name] && validationMessage && (React.createElement("span", { className: "text-xs text-red-700 font-bold" }, String((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.message) || validationMessage))));
});
TextareaGroup.displayName = "TextareaGroup";
export default TextareaGroup;
