import { twMerge } from "tailwind-merge";

import type ButtonProps from "./Button.types";

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded-2xl border-2 border-solid border-white bg-transparent px-8 py-4 text-white",
        "transition-[background-color,_scale]",
        "disabled:cursor-not-allowed",
        "enabled:focus:scale-110 enabled:focus:bg-interface",
        "enabled:hover:scale-110 enabled:hover:bg-interface",
        "enabled:active:scale-95",
        props.className,
      )}
    />
  );
}
