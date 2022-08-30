import { Image, Link } from "#src/components";
import { useStore } from "#src/store";
import { useMediaQuery, Viewports } from "#src/utils";

import Section from "../Section";
import styles from "./Companies.module.scss";
import CompaniesProps from "./Companies.types";

export default function Companies(props: CompaniesProps) {
  const desktop = useMediaQuery(Viewports.MIN_MD);
  const homeContent = useStore((store) => store.homeContent);

  return (
    <Section
      id={homeContent.companies.id}
      subtitle={homeContent.companies.subtitle}
      className={props.className}
    >
      <div className={styles.companies}>
        {homeContent.companies.links.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            target={c.target}
            className={styles.link}
            title={c.title}
          >
            <Image
              src={c.image.src}
              className={styles.image}
              alt={c.image.alt}
              width={desktop ? 288 : 224}
              height={desktop ? 80 : 16}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
