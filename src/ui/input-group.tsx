import React from "react";
import { useFormContext } from "react-hook-form";

import { CustomProps, Input, InputProps } from "./input";
import { cn } from "../lib/utils";
import { Skeleton } from "./skeleton";
import { FormDescription } from "./form";

const InputGroup = React.forwardRef<HTMLInputElement, InputProps & CustomProps>(
  ({ name, onChange, onBlur, isLoading, label, hint, ...props }, ref) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();

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
          {...props}
          {...register(String(name), {
            ...(onChange && { onChange }),
            ...(onBlur && { onBlur }),
          })}
        />
        {errors && errors[String(name)] && (
          <span className="text-xs text-red-700 font-bold">
            {String(errors[String(name)]?.message)}
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

export default InputGroup;
