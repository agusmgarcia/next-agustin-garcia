import { useMediaQuery, Viewports } from "#src/utils";

import DesktopNavigationBar from "./DesktopNavigationBar";
import MobileNavigationBar from "./MobileNavigationBar";
import NavigationBarProps from "./NavigationBar.types";

export default function NavigationBar(props: NavigationBarProps) {
  const desktop = useMediaQuery(Viewports.MIN_MD);

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
