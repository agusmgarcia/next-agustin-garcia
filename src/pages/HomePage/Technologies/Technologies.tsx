import { Image, Link } from "#src/components";
import { useHomeContent } from "#src/store";
import { useMediaQuery, Viewports } from "#src/utils";

import Section from "../Section";
import styles from "./Technologies.module.scss";
import TechnologiesProps from "./Technologies.types";

export default function Technologies(props: TechnologiesProps) {
  const desktop = useMediaQuery(Viewports.MIN_MD);
  const { homeContent } = useHomeContent();

  if (homeContent === undefined) return <></>;

  return (
    <Section
      className={props.className}
      id={homeContent.technologies.id}
      subtitle={homeContent.technologies.subtitle}
    >
      <div className={styles.technologies}>
        {homeContent.technologies.links.map((t) => (
          <Link
            key={t.href}
            className={styles.link}
            href={t.href}
            target={t.target}
            title={t.title}
          >
            <Image
              alt={t.image.alt}
              className={styles.image}
              height={desktop ? 96 : 64}
              src={t.image.src}
              width={desktop ? 96 : 64}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
