import NextJSLink from "next/link";

import LinkProps from "./Link.types";

export default function Link(props: LinkProps) {
  return <NextJSLink {...props} href={props.href ?? "#"} />;
}
