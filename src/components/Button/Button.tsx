import clsx from "clsx";

import ButtonProps from "./Button.types";

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        props.className,
        "rounded-2xl border-2 border-solid border-white bg-transparent px-8 py-4 text-white",
        "transition-[transform,_background-color] will-change-[transform,_background-color]",
        "disabled:cursor-not-allowed",
        "enabled:focus:scale-110 enabled:focus:bg-interface",
        "enabled:hover:scale-110 enabled:hover:bg-interface",
        "enabled:active:scale-95",
      )}
    />
  );
}
