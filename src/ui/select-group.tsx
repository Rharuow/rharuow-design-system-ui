import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem } from "./form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { cn } from "../lib/utils";
import { Skeleton } from "./skeleton";

const SelectGroup = ({
  name,
  options,
  isLoading,
  className,
  position,
  defaultValue,
}: {
  name: string;
  isLoading?: boolean;
  options: Array<{ value: string; label: string | ReactNode }>;
  className?: string;
  defaultValue?: string;
  position?: "popper" | "item-aligned";
}) => {
  const methods = useFormContext();

  const {
    formState: { errors },
    getValues,
  } = methods;

  return isLoading ? (
    <Skeleton className="h-10 w-full" />
  ) : (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className={cn("z-50", className)}>
          <Select onValueChange={field.onChange} defaultValue={defaultValue}>
            <FormControl>
              <SelectTrigger
                className={cn({
                  "border border-red-700": errors && errors[name],
                })}
              >
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="flex" position={position}>
              {options.map((option) => (
                <SelectItem
                  className="z-50"
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors && errors[name] && (
            <span className="text-xs text-red-400 font-bold">
              {String(errors[name]?.message)}
            </span>
          )}
        </FormItem>
      )}
      {...methods}
    />
  );
};

export default SelectGroup;
