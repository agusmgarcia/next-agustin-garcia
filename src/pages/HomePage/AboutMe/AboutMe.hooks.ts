import { useMediaQuery } from "@agusmgarcia/react-essentials-utils";

import { useHomeContent } from "#src/store";

import type AboutMeProps from "./AboutMe.types";

export default function useAboutMe(props: AboutMeProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();

  return { ...props, desktop, homeContent };
}
