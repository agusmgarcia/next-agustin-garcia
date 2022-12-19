import dynamic from "next/dynamic";

import { useMediaQuery, Viewports } from "#src/utils";

import DesktopNavigationBar from "./DesktopNavigationBar";
import NavigationBarProps from "./NavigationBar.types";

const MobileNavigationBar = dynamic(() => import("./MobileNavigationBar"), {
  ssr: false,
});

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
