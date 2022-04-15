import Image from "#src/components/Image";

import useTechnologies from "./Technologies.hooks";
import styles from "./Technologies.module.scss";

export default function Technologies() {
  const { technologies } = useTechnologies();

  return (
    <div className={styles.technologies} id="technologies">
      <h2 className={styles.title}>Technologies</h2>
      <div className={styles.logos}>
        {technologies.map((t, index) => (
          <Image
            key={index}
            src={t.src}
            className={styles.logo}
            sizes="100vw"
            disableSrcSet={true}
            alt={t.alt}
            title={t.title}
            loading="eager"
            onClick={() => window.open(t.url, "_blank")}
          />
        ))}
      </div>
    </div>
  );
}
