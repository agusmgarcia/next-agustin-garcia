import { useEffect } from "react";

import SmoothScrollProps from "./SmoothScroll.types";

export default function SmoothScroll(_: SmoothScrollProps) {
  useEffect(() => {
    if ("scrollBehavior" in document.documentElement.style) return;
    Promise.all([
      import("smoothscroll-polyfill"),
      // @ts-ignore
      import("smoothscroll-anchor-polyfill"),
    ]).then(([smoothscrollPolyfill]) => smoothscrollPolyfill.polyfill());
  }, []);

  return <></>;
}
