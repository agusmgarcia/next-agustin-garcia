import { twMerge } from "tailwind-merge";

import { Image, Link, Section } from "#src/components";

import useCompanies from "./Companies.hooks";
import type CompaniesProps from "./Companies.types";

export default function Companies(props: CompaniesProps) {
  const { desktop, homeContent, ...rest } = useCompanies(props);

  if (!homeContent) return <></>;

  return (
    <Section
      {...rest}
      id={homeContent.companies.id}
      title={homeContent.companies.subtitle}
    >
      <div
        className={twMerge(
          "grid w-full grid-cols-1 items-center gap-2",
          "gap-4 md:grid-cols-2",
        )}
      >
        {homeContent.companies.links.map((c) => (
          <Link
            key={c.href}
            className={twMerge(
              "rounded-2xl border-2 border-solid border-interface bg-white p-2",
              "md:p-4",
              "flex items-center justify-center",
              "transition-[box-shadow,scale]",
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
              className="h-16 w-56 object-contain md:h-20 md:w-[288px]"
              height={desktop ? 80 : 64}
              src={c.image.src}
              width={desktop ? 288 : 224}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
