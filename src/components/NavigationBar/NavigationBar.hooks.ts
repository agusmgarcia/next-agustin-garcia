import React, { useCallback, useEffect, useState } from "react";

import NavigationBarProps from "./NavigationBar.types";

export default function useNavigationBar(props: NavigationBarProps) {
  const navBarRef = React.useRef<HTMLDivElement>(null);

  const [isMenuMobileOpen, setMenuMobileOpen] = useState(false);
  useEffect(() => {
    const body = document.getElementsByTagName("body").item(0);
    if (body === null) return;
    body.style.overflow = isMenuMobileOpen ? "hidden" : "";
  }, [isMenuMobileOpen]);

  useEffect(() => {
    const onMenuOpen = props.onMenuOpen;
    onMenuOpen(isMenuMobileOpen);
  }, [isMenuMobileOpen, props.onMenuOpen]);

  const handleClick = useCallback(
    (id: string) => {
      return () => {
        if (id === "downloadCV") {
          const downloadCV = document.createElement("a");
          downloadCV.href = "/agustin-garcia-cv.pdf";
          downloadCV.download = "agustin-garcia-cv.pdf";
          downloadCV.click();
          return;
        }

        if (!navBarRef.current) return;

        const target = document.getElementById(id);
        if (!target) return;

        const { y } = target.getBoundingClientRect();
        const scrollX = 0;
        const scrollY = y - navBarRef.current.clientHeight + window.pageYOffset;

        setMenuMobileOpen(false);
        window.scrollTo({ behavior: "smooth", left: scrollX, top: scrollY });
      };
    },
    [navBarRef, setMenuMobileOpen]
  );

  const toogleMenuMobile = useCallback(
    () => setMenuMobileOpen((prev) => !prev),
    [setMenuMobileOpen]
  );

  useEffect(() => {
    if (!navBarRef.current) return;
    if (!isMenuMobileOpen) return;

    const navBar = navBarRef.current.parentElement;
    if (!navBar) return;

    const handleClick = (e: MouseEvent) => {
      const rect = navBar.getBoundingClientRect();
      if (
        e.y >= rect.top &&
        e.y <= rect.bottom &&
        e.x >= rect.left &&
        e.x <= rect.right
      )
        return;

      setMenuMobileOpen(false);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isMenuMobileOpen, setMenuMobileOpen]);

  return { handleClick, isMenuMobileOpen, navBarRef, toogleMenuMobile };
}
