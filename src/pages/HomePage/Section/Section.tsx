import { twMerge } from "tailwind-merge";

import { Typography } from "#src/components";

import type SectionProps from "./Section.types";

export default function Section({ title, ...props }: SectionProps) {
  return (
    <section
      {...props}
      className={twMerge(
        "mx-auto my-0 min-h-screen w-full max-w-[calc(100%-6rem)]",
        "md:max-w-3xl",
        "flex flex-col items-center justify-center gap-8",
        props.className,
      )}
    >
      {/* TITLE */}
      {title && (
        <Typography
          as="h2"
          className="border-b-2 border-solid border-b-interface pt-32 pb-4"
          variant="2.25rem"
        >
          {title}
        </Typography>
      )}

      {/* CHILDREN */}
      {props.children}
    </section>
  );
}
