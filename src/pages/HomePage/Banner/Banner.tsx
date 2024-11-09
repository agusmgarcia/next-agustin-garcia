import { twMerge } from "tailwind-merge";

import { Image } from "#src/components";
import { useHomeContent } from "#src/store";

import type BannerProps from "./Banner.types";

export default function Banner(props: BannerProps) {
  const { homeContent } = useHomeContent();
  if (homeContent === undefined) return <></>;

  return (
    <div className={twMerge(props.className, "h-screen w-full")}>
      <Image
        alt={homeContent.banner.alt}
        className="size-full object-cover"
        loading="eager"
        sizes="auto"
        src={homeContent.banner.src}
      />
    </div>
  );
}
