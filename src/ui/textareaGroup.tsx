import React from "react";
import { useFormContext } from "react-hook-form";

import { Textarea, TextareaProps } from "./textarea";
import { CustomProps } from "./input";

const TextareaGroup = React.forwardRef<
  HTMLInputElement,
  TextareaProps & CustomProps
>(({ name, onChange, onBlur, label, validationMessage, ...props }, ref) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col">
      <Textarea {...register(name)} label="Justificativa" {...props} />
      {errors && errors[name] && validationMessage && (
        <span className="text-xs text-red-700 font-bold">
          {String(errors[name]?.message) || validationMessage}
        </span>
      )}
    </div>
  );
});

TextareaGroup.displayName = "TextareaGroup";

export default TextareaGroup;
