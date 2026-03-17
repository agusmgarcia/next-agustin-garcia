import { useHomeContent } from "#src/store";

import type DesktopNavigationBarProps from "./DesktopNavigationBar.types";

export default function useDesktopNavigationBar(
  props: DesktopNavigationBarProps,
) {
  const { homeContent } = useHomeContent();

  return { ...props, homeContent };
}
