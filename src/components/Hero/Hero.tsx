import hero from "#public/assets/hero.png";
import Image from "#src/components/Image";

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <Image
      src={hero.src}
      className={styles.hero}
      sizes="100vw"
      alt="Hero banner"
      loading="lazy"
    />
  );
}
