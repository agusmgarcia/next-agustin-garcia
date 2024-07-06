import clsx from "clsx";

import { Image } from "#src/components";
import { useHomeContent } from "#src/store";

import type BannerProps from "./Banner.types";

export default function Banner(props: BannerProps) {
  const { homeContent } = useHomeContent();
  if (homeContent === undefined) return <></>;

  return (
    <div className={clsx(props.className, "h-screen w-full")}>
      <Image
        alt={homeContent.banner.alt}
        className="h-full w-full object-cover"
        loading="eager"
        sizes="auto"
        src={homeContent.banner.src}
      />
    </div>
  );
}
