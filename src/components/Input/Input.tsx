import clsx from "clsx";
import React from "react";

import Typography from "../Typography";
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
      className={clsx(labelClassName, "flex flex-col gap-2")}
    >
      {label}

      <Typography
        as={as ?? "input"}
        {...(props as any)}
        className={clsx(
          className,
          "rounded-2xl border-2 border-solid border-white bg-transparent p-4 outline-none",
          "transition-[transform,_box-shadow] will-change-[transform,_box-shadow]",
          "disabled:cursor-not-allowed",
          "enabled:focus:scale-105 enabled:focus:shadow-[0_0_5px_5px] enabled:focus:shadow-interface",
        )}
      >
        {children}
      </Typography>
    </Typography>
  );
}
