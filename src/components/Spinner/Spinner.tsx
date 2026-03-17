import { twMerge } from "tailwind-merge";

import useSpinner from "./Spinner.hooks";
import type SpinnerProps from "./Spinner.types";

export default function Spinner(props: SpinnerProps) {
  const { className, color, strokeWidth, ...rest } = useSpinner(props);

  return (
    <svg
      {...rest}
      aria-label="audio-loading"
      className={twMerge("animate-spin", className)}
      stroke={color}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <g strokeWidth={strokeWidth} transform="translate(1 1)">
          <circle cx="18" cy="18" r="18" strokeOpacity=".5" />
          <path d="M36 18c0-9.94-8.06-18-18-18" />
        </g>
      </g>
    </svg>
  );
}
