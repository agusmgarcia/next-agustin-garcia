import { twMerge } from "tailwind-merge";

import { Typography } from "#src/components";

import useSection from "./Section.hooks";
import type SectionProps from "./Section.types";

export default function Section(props: SectionProps) {
  const { children, className, title, ...rest } = useSection(props);

  return (
    <section
      {...rest}
      className={twMerge(
        "mx-auto my-0 min-h-screen w-full max-w-[calc(100%-6rem)]",
        "md:max-w-3xl",
        "flex flex-col items-center justify-center gap-8",
        className,
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
      {children}
    </section>
  );
}
