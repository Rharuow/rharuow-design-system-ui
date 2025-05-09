import React from "react";
import { useFormContext } from "@rharuow-ds/core";

import { CustomProps, Input, InputProps } from "./input";
import { cn } from "../lib/utils";
import { Skeleton } from "./skeleton";
import { FormDescription } from "./form";

const InputGroup = React.forwardRef<HTMLInputElement, InputProps & CustomProps>(
  ({ name, onChange, onBlur, isLoading, label, hint, ...props }, ref) => {
    if (!name) {
      throw new Error("The 'name' prop is required for InputGroup.");
    }

    const methods = useFormContext();

    if (!methods) {
      throw new Error(
        "InputGroup must be used within a FormProvider from @rharuow-ds/core."
      );
    }

    const {
      register,
      formState: { errors },
    } = methods;

    const { ref: registerRef, ...registerProps } = register(String(name), {
      onChange,
      onBlur,
    });

    return isLoading ? (
      <Skeleton className="h-10" />
    ) : (
      <div className="flex flex-col">
        <Input
          label={label}
          className={cn({
            "border border-red-700": errors && errors[String(name)],
            "py-1": hint,
          })}
          {...registerProps}
          ref={(e) => {
            registerRef(e);
            if (ref) {
              if (typeof ref === "function") {
                ref(e);
              } else {
                ref.current = e;
              }
            }
          }}
          {...props}
        />
        {errors && errors[String(name)] && (
          <span className="text-xs text-red-700 font-bold">
            {String(errors[String(name)]?.message || "")}
          </span>
        )}
        {hint && Object.keys(errors).length === 0 && (
          <FormDescription className="text-xs">{hint}</FormDescription>
        )}
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export { InputGroup };
