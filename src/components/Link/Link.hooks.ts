import { useMemo } from "react";

import type LinkProps from "./Link.types";

export default function useLink({ href: hrefFromProps, ...rest }: LinkProps) {
  const href = useMemo(() => hrefFromProps || "#", [hrefFromProps]);

  return { ...rest, href };
}
