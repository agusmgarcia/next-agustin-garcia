import ms from "ms";
import React, { useCallback, useEffect, useState } from "react";

export default function useMobileNavigationBar() {
  const screenRef = React.useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ModalState>("closed");

  const setOpen: React.Dispatch<React.SetStateAction<boolean>> = useCallback(
    (value) =>
      setState((prevState) => {
        const open =
          value instanceof Function ? value(prevState === "open") : value;

        switch (prevState) {
          case "open":
            if (open) return prevState;
            return "closing";

          case "closing":
          case "closed":
            if (open) return "open";
            return prevState;
        }
      }),
    []
  );

  useEffect(() => {
    const screen = screenRef.current;
    if (screen === null) return;

    if (state !== "closing") return;

    const transition = ms(
      getComputedStyle(screen)
        .getPropertyValue("--transition-duration")
        .replace(/\s/g, "")
    );

    const handler = setTimeout(() => setState("closed"), transition);
    return () => clearTimeout(handler);
  }, [state]);

  useEffect(() => {
    const screen = screenRef.current;
    if (screen === null) return;

    if (state !== "open") return;

    const handleClick = (e: MouseEvent) => {
      if (e.target === screen) setOpen(false);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [setOpen, state]);

  return { screenRef, setOpen, state };
}

type ModalState = "open" | "closing" | "closed";
