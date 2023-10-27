import React from "react";

import styles from "./Box.module.scss";
import BoxProps from "./Box.types";

export default function Box({
  as,
  children,
  className,
  variant,
  ...props
}: BoxProps) {
  return React.createElement(
    as ?? "div",
    {
      ...props,
      className: `${getVariant(variant)} ${className}`,
    },
    children,
  );
}

function getVariant(variant: BoxProps["variant"]): string {
  switch (variant) {
    case "1200px":
    default:
      return styles.b1;

    case "800px":
      return styles.b2;
  }
}
