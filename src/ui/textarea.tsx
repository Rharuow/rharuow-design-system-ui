"use client";
import * as React from "react";

import { cn } from "../lib/utils";
import { useFormContext, useWatch } from "react-hook-form";
import { CustomProps } from "./input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps & CustomProps
>(({ className, label, onFocus, onBlur, name, ...props }, ref) => {
  const [focused, setFocused] = React.useState(false);

  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const valueWatch = useWatch({ control, name: String(name) });

  return (
    <div className="relative">
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          {
            "border-red-700": errors && errors[String(name)],
          }
        )}
        onFocus={(event) => {
          setFocused(true);
          onFocus && onFocus(event);
        }}
        {...props}
        {...register(name, {
          onBlur: (event) => {
            setFocused(!!event.target.value);
            onBlur && onBlur(event);
          },
        })}
      />
      {label && (
        <label
          className={cn("text-white absolute top-1/2 -translate-y-1/2 left-3", {
            "animate-label-focus": focused || valueWatch,
            "animate-label-blur": !focused,
          })}
          htmlFor={props.id || name}
        >
          {label}
        </label>
      )}
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
