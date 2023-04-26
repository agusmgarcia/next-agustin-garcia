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
        alt={homeContent.banner.alt}
        className={styles.image}
        loading="eager"
        sizes="auto"
        src={homeContent.banner.src}
      />
    </div>
  );
}
