"use client";
import React from "react";

import { Button } from "./button";
import { cn } from "../lib/utils";
import { Eye } from "lucide-react";

export const ShowButton = ({
  className,
  size = 18,
  onClick,
}: {
  className?: string;
  size?: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      className={cn(`rounded-full`, className)}
      onClick={onClick}
      variant={"ghost"}
    >
      <Eye size={size} />
    </Button>
  );
};
