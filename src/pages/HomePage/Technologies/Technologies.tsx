import { Image, Link } from "#src/components";
import { useHomeContent } from "#src/store";
import { useMediaQuery, Viewports } from "#src/utils";

import Section from "../Section";
import styles from "./Technologies.module.scss";
import TechnologiesProps from "./Technologies.types";

export default function Technologies(props: TechnologiesProps) {
  const desktop = useMediaQuery(Viewports.MIN_MD);
  const { homeContent } = useHomeContent();

  return (
    <Section
      id={homeContent.technologies.id}
      subtitle={homeContent.technologies.subtitle}
      className={props.className}
    >
      <div className={styles.technologies}>
        {homeContent.technologies.links.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            target={t.target}
            className={styles.link}
            title={t.title}
          >
            <Image
              src={t.image.src}
              className={styles.image}
              alt={t.image.alt}
              width={desktop ? 96 : 64}
              height={desktop ? 96 : 64}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
