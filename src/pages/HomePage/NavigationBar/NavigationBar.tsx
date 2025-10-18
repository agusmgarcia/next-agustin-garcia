import { useMediaQuery } from "@agusmgarcia/react-essentials-utils";

import { DesktopNavigationBar } from "./DesktopNavigationBar";
import { MobileNavigationBar } from "./MobileNavigationBar";
import type NavigationBarProps from "./NavigationBar.types";

export default function NavigationBar(props: NavigationBarProps) {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {desktop ? (
        <DesktopNavigationBar className={props.className} />
      ) : (
        <MobileNavigationBar className={props.className} />
      )}
    </>
  );
}
