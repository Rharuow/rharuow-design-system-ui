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
import ImageNext from "next/image";
const Image = React.forwardRef((_a, ref) => {
    var { className, src, alt, title } = _a, props = __rest(_a, ["className", "src", "alt", "title"]);
    return (React.createElement(ImageNext, Object.assign({ width: 0, height: 0, priority: true, sizes: "100vw", alt: alt, src: src, title: title }, (className && { className }))));
});
Image.displayName = "Image";
export { Image };
