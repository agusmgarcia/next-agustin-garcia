import { useMediaQuery } from "@agusmgarcia/react-core";
import clsx from "clsx";

import { Image, Link } from "#src/components";
import { useHomeContent } from "#src/store";

import Section from "../Section";
import CompaniesProps from "./Companies.types";

export default function Companies(props: CompaniesProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();

  if (homeContent === undefined) return <></>;

  return (
    <Section
      className={props.className}
      id={homeContent.companies.id}
      title={homeContent.companies.subtitle}
    >
      <div
        className={clsx(
          "grid w-full grid-cols-1 items-center gap-2",
          "gap-4 md:grid-cols-2",
        )}
      >
        {homeContent.companies.links.map((c) => (
          <Link
            key={c.href}
            className={clsx(
              "rounded-2xl border-2 border-solid border-interface bg-white p-2",
              "md:p-4",
              "flex items-center justify-center",
              "transition will-change-transform",
              "hover:scale-105 hover:shadow-md hover:shadow-interface",
              "focus:scale-105 focus:shadow-md focus:shadow-interface",
              "active:scale-95",
            )}
            href={c.href}
            target={c.target}
            title={c.title}
          >
            <Image
              alt={c.image.alt}
              className="!h-[80px] !w-[288px] object-contain"
              height={desktop ? 80 : 16}
              src={c.image.src}
              width={desktop ? 288 : 224}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
