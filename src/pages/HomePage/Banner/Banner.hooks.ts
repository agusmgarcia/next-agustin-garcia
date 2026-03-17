import { useHomeContent } from "#src/store";

import type BannerProps from "./Banner.types";

export default function useBanner(props: BannerProps) {
  const { homeContent } = useHomeContent();

  return { ...props, homeContent };
}
