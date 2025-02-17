import React from "react";
import { useFormContext } from "react-hook-form";

import { cn } from "../lib/utils";
import { Skeleton } from "./skeleton";
import { Input } from "./input";
import { Card } from "./card";

const Loading = () => {
  return (
    <>
      <Skeleton className="h-7 w-full" />
      <Skeleton className="h-7 w-full" />
    </>
  );
};

const AsyncSelectGroup = ({
  name,
  label,
  options,
  handleOnFocusField,
  handleSelectOption,
  isLoading,
  className,
}: {
  name: string;
  label: string;
  isLoading?: boolean;
  options?: Array<{ value: string; label: string }>;
  resources?: any;
  handleSelectOption: (option: { value: string; label: string }) => void;
  handleOnFocusField?: () => void;
  className?: string;
}) => {
  const methods = useFormContext();

  const {
    register,
    watch,
    formState: { errors },
  } = methods;

  const resourceWatch = watch(name);

  return (
    <div className={cn("flex flex-col", className)}>
      <Input
        label={label}
        className="rounded-none rounded-t-md z-50"
        {...register(name)}
        {...(handleOnFocusField && { onFocus: handleOnFocusField })}
      />
      {isLoading ? (
        <Loading />
      ) : !options || options.length === 0 ? (
        <Card className="flex justify-center border-0 rounded-none rounded-b-sm">
          <span>Nenhum morador encontrado</span>
        </Card>
      ) : (
        options.map((option, index) => (
          <Card
            key={option.value}
            className={cn("flex justify-center border-0 rounded-none", {
              "transition duration-500 bg-gray-950 text-white":
                resourceWatch === option.label,
              "rounded-b-sm": index === options.length - 1,
            })}
            onClick={() => handleSelectOption(option)}
          >
            <span>{option.label}</span>
          </Card>
        ))
      )}
      {errors && errors[String(name)] && (
        <span className="text-xs text-red-700 font-bold">
          {String(errors[String(name)]?.message)}
        </span>
      )}
    </div>
  );
};

export default AsyncSelectGroup;
