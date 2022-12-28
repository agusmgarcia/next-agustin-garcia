import { Image } from "#src/components";
import { useHomeContent } from "#src/store";

import styles from "./Banner.module.scss";
import BannerProps from "./Banner.types";

export default function Banner(props: BannerProps) {
  const { homeContent } = useHomeContent();
  if (homeContent === undefined) return <></>;

  return (
    <div className={`${styles.banner} ${props.className}`}>
      <Image
        src={homeContent.banner.src}
        className={styles.image}
        alt={homeContent.banner.alt}
        loading="eager"
        sizes="auto"
      />
    </div>
  );
}
