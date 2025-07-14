import React from "react";
import { twMerge } from "tailwind-merge";

import { Typography } from "#src/components";

import type InputProps from "./Input.types";

export default function Input({
  as,
  children,
  className,
  label,
  labelClassName,
  ...props
}: InputProps) {
  return (
    <Typography
      as="label"
      className={twMerge("flex flex-col gap-2", labelClassName)}
    >
      {label}

      <Typography
        as={as ?? "input"}
        {...(props as any)}
        className={twMerge(
          "rounded-2xl border-2 border-solid border-white bg-transparent p-4 outline-none",
          "transition-[box-shadow,_scale]",
          "disabled:cursor-not-allowed",
          "enabled:focus:scale-105 enabled:focus:shadow-[0_0_5px_5px] enabled:focus:shadow-interface",
          className,
        )}
      >
        {children}
      </Typography>
    </Typography>
  );
}
