import { DesktopNavigationBar } from "./DesktopNavigationBar";
import { MobileNavigationBar } from "./MobileNavigationBar";
import useNavigationBar from "./NavigationBar.hooks";
import type NavigationBarProps from "./NavigationBar.types";

export default function NavigationBar(props: NavigationBarProps) {
  const { desktop, ...rest } = useNavigationBar(props);

  if (desktop) return <DesktopNavigationBar {...rest} />;

  return <MobileNavigationBar {...rest} />;
}
