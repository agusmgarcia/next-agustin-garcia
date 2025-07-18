import { useMediaQuery } from "@agusmgarcia/react-essentials-utils";
import { twMerge } from "tailwind-merge";

import { Image, Link } from "#src/components";
import { useHomeContent } from "#src/store";

import Section from "../Section";
import type TechnologiesProps from "./Technologies.types";

export default function Technologies(props: TechnologiesProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();

  if (!homeContent) return <></>;

  return (
    <Section
      className={props.className}
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
              "transition-[background-color,_scale]",
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
              className="size-[64px] md:size-[96px]"
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
