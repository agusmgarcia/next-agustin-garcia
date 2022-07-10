import { useEffect, useState } from "react";

export const Viewports = { MIN_MD: "(min-width: 768px)" };

export default function useMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList>();

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEffect(() => {
    if (mediaQueryList === undefined) return;
    const handler = (event: MediaQueryListEvent) => setIsMatch(event.matches);
    mediaQueryList.addEventListener("change", handler);
    return () => mediaQueryList.removeEventListener("change", handler);
  }, [mediaQueryList]);

  return isMatch;
}
