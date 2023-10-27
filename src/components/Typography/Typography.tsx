import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

import React from "react";

import styles from "./Typography.module.scss";
import TypographyProps from "./Typography.types";

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
      className: `${styles.typography} ${getVariant(variant)} ${className}`,
    },
    children,
  );
}

function getVariant(variant: TypographyProps["variant"]): string {
  switch (variant) {
    case "2.75rem":
      return styles.t1;

    case "2rem":
      return styles.t2;

    case "1.75rem":
      return styles.t3;

    case "1.25rem":
      return styles.t4;

    case "1rem":
    default:
      return styles.t5;

    case "0.75rem":
      return styles.t6;
  }
}
