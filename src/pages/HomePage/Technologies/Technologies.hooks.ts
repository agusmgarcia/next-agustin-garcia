import { useMediaQuery } from "@agusmgarcia/react-essentials-utils";

import { useHomeContent } from "#src/store";

import type TechnologiesProps from "./Technologies.types";

export default function useTechnologies(props: TechnologiesProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();

  return { desktop, homeContent, ...props };
}
