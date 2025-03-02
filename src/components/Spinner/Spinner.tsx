import { twMerge } from "tailwind-merge";

import type SpinnerProps from "./Spinner.types";

export default function Spinner(props: SpinnerProps) {
  return (
    <svg
      aria-label="audio-loading"
      className={twMerge("animate-spin", props.className)}
      height={props.height}
      stroke={props.color}
      viewBox="0 0 38 38"
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <g strokeWidth={props.strokeWidth} transform="translate(1 1)">
          <circle cx="18" cy="18" r="18" strokeOpacity=".5" />
          <path d="M36 18c0-9.94-8.06-18-18-18" />
        </g>
      </g>
    </svg>
  );
}
