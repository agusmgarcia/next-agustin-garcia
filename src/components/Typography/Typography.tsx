import clsx from "clsx";
import React from "react";

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
      className: clsx(className, "text-white font-medium", {
        "text-3xl": variant === "1.875rem",
        "text-4xl": variant === "2.25rem",
        "text-5xl": variant === "3rem",
        "text-base": variant === "1rem",
        "text-xl": variant === "1.25rem",
        "text-xs": variant === "0.75rem",
      }),
    },
    children,
  );
}
