import { twMerge } from "tailwind-merge";

import { Image, Link, Section } from "#src/components";

import useTechnologies from "./Technologies.hooks";
import type TechnologiesProps from "./Technologies.types";

export default function Technologies(props: TechnologiesProps) {
  const { desktop, homeContent, ...rest } = useTechnologies(props);

  if (!homeContent) return <></>;

  return (
    <Section
      {...rest}
      id={homeContent.technologies.id}
      title={homeContent.technologies.subtitle}
    >
      <div
        className={twMerge(
          "grid w-full grid-cols-3 gap-2",
          "md:grid-cols-5 md:gap-4",
        )}
      >
        {homeContent.technologies.links.map((t) => (
          <Link
            key={t.href}
            className={twMerge(
              "flex items-center justify-center rounded-2xl p-4",
              "transition-[background-color,scale]",
              "hover:scale-105 hover:bg-interface",
              "focus:scale-105 focus:bg-interface",
              "active:scale-95",
            )}
            href={t.href}
            target={t.target}
            title={t.title}
          >
            <Image
              alt={t.image.alt}
              className="size-16 md:size-24"
              height={desktop ? 96 : 64}
              src={t.image.src}
              width={desktop ? 96 : 64}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
