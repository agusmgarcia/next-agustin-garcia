import { useMediaQuery } from "@agusmgarcia/react-essentials-utils";

import type NavigationBarProps from "./NavigationBar.types";

export default function useNavigationBar(props: NavigationBarProps) {
  const desktop = useMediaQuery("(min-width: 768px)");

  return { ...props, desktop };
}
