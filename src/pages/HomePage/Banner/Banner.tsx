import { twMerge } from "tailwind-merge";

import { Image } from "#src/components";

import useBanner from "./Banner.hooks";
import type BannerProps from "./Banner.types";

export default function Banner(props: BannerProps) {
  const { className, homeContent, ...rest } = useBanner(props);

  if (!homeContent) return <></>;

  return (
    <div {...rest} className={twMerge(className, "h-screen w-full")}>
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
