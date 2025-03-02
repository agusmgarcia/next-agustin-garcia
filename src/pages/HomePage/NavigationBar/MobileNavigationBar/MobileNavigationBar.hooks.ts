import { useCallback, useEffect, useRef, useState } from "react";

export default function useMobileNavigationBar() {
  const modalRef = useRef<HTMLElement>(null);

  const [state, setState] = useState<State>("closed");

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    if (state === "just-visible") {
      const handler = setTimeout(
        () =>
          setState((prevState) =>
            prevState === "just-visible" ? "open" : prevState,
          ),
        0,
      );

      return () => clearTimeout(handler);
    }

    if (state === "closing") {
      const handleTransitionEnd = () =>
        setState((prevState) =>
          prevState === "closing" ? "closed" : prevState,
        );

      modal.addEventListener("transitionend", handleTransitionEnd);
      return () =>
        modal.removeEventListener("transitionend", handleTransitionEnd);
    }
  }, [state]);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const handleClick = (event: MouseEvent) => {
      if (state !== "open") return;

      const dimensions = modal.getBoundingClientRect();
      if (
        event.clientX >= dimensions.left &&
        event.clientX <= dimensions.right &&
        event.clientY >= dimensions.top &&
        event.clientY <= dimensions.bottom
      )
        return;

      setState((prevState) => {
        switch (prevState) {
          case "just-visible":
          case "open":
            return "closing";

          case "closing":
          case "closed":
            return prevState;
        }
      });
    };

    modal.addEventListener("click", handleClick);
    return () => modal.removeEventListener("click", handleClick);
  }, [state]);

  const setOpen: React.Dispatch<React.SetStateAction<boolean>> = useCallback(
    (value) =>
      setState((prevState) => {
        const open =
          value instanceof Function
            ? value(prevState === "open" || prevState === "just-visible")
            : value;

        switch (prevState) {
          case "just-visible":
          case "open":
            return open ? prevState : "closing";

          case "closing":
          case "closed":
            return open ? "just-visible" : prevState;
        }
      }),
    [],
  );

  return { modalRef, setOpen, state };
}

type State = "closed" | "closing" | "just-visible" | "open";
