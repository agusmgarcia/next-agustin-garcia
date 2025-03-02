import { useMediaQuery } from "@agusmgarcia/react-core";
import { twMerge } from "tailwind-merge";

import { Image, Typography } from "#src/components";
import { useHomeContent } from "#src/store";

import Section from "../Section";
import type AboutMeProps from "./AboutMe.types";

export default function AboutMe(props: AboutMeProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();

  if (!homeContent) return <></>;

  return (
    <Section className={props.className} id={homeContent.aboutMe.id}>
      <div className="flex flex-col items-center justify-center gap-12">
        <Image
          alt={homeContent.aboutMe.image.alt}
          className={twMerge(
            "rounded-full border-2 border-solid border-white object-cover",
            "h-[224px] w-[224px] md:h-[256px] md:w-[256px]",
          )}
          height={desktop ? 256 : 224}
          loading="eager"
          src={homeContent.aboutMe.image.src}
          width={desktop ? 256 : 224}
        />

        <div className="flex flex-col items-center justify-center gap-4">
          <Typography as="h1" variant="3rem">
            {homeContent.aboutMe.name}
          </Typography>

          <Typography
            as="p"
            className="rounded-lg border-2 border-solid border-transparent bg-black/40 p-4 text-center"
            variant="1.25rem"
          >
            {homeContent.aboutMe.description}
          </Typography>
        </div>
      </div>
    </Section>
  );
}
