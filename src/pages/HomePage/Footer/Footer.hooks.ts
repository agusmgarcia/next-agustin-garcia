import { useMediaQuery } from "@agusmgarcia/react-essentials-utils";

import { useHomeContent } from "#src/store";

import type FooterProps from "./Footer.types";

export default function useFooter(props: FooterProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();

  return { ...props, desktop, homeContent };
}
