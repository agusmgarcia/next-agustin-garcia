import NextJSLink from "next/link";

import useLink from "./Link.hooks";
import type LinkProps from "./Link.types";

export default function Link(props: LinkProps) {
  const { ...rest } = useLink(props);

  return <NextJSLink {...rest} />;
}
