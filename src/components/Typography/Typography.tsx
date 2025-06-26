import React from "react";
import { twMerge } from "tailwind-merge";

import type TypographyProps from "./Typography.types";

export default function Typography({
  as,
  children,
  className,
  variant,
  ...props
}: TypographyProps) {
  return React.createElement(
    as ?? "p",
    {
      ...props,
      className: twMerge(
        "font-medium text-white",
        variant === "1.875rem" && "text-3xl",
        variant === "2.25rem" && "text-4xl",
        variant === "3rem" && "text-5xl",
        variant === "1rem" && "text-base",
        variant === "1.25rem" && "text-xl",
        variant === "0.75rem" && "text-xs",
        className,
      ),
    },
    children,
  );
}
