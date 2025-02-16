"use client";
import React from "react";
import { Button } from "./button";
import { cn } from "../lib/utils";
import { Eye } from "lucide-react";
export const ShowButton = ({ className, size = 18, onClick, }) => {
    return (React.createElement(Button, { className: cn(`rounded-full`, className), onClick: onClick, variant: "ghost" },
        React.createElement(Eye, { size: size })));
};
