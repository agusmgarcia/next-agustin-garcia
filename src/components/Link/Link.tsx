import NextJSLink from "next/link";

import styles from "./Link.module.scss";
import LinkProps from "./Link.types";

export default function Link(props: LinkProps) {
  return (
    <NextJSLink
      {...props}
      className={`${styles.link} ${props.className}`}
      href={props.href ?? "#"}
    />
  );
}
