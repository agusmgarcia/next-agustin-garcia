import React, { useEffect, useState } from "react";

export default function useMobileNavigationBar() {
  const screenRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const screen = screenRef.current;
    if (screen === null) return;

    if (!isOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (e.target === screen) setOpen(false);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);

  return { isOpen, screenRef, setOpen };
}
