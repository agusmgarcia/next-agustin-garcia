import { useMediaQuery } from "@agusmgarcia/react-core";

import { Image, Link } from "#src/components";
import { useHomeContent } from "#src/store";

import Section from "../Section";
import styles from "./Companies.module.scss";
import CompaniesProps from "./Companies.types";

export default function Companies(props: CompaniesProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();

  if (homeContent === undefined) return <></>;

  return (
    <Section
      className={props.className}
      id={homeContent.companies.id}
      subtitle={homeContent.companies.subtitle}
    >
      <div className={styles.companies}>
        {homeContent.companies.links.map((c) => (
          <Link
            key={c.href}
            className={styles.link}
            href={c.href}
            target={c.target}
            title={c.title}
          >
            <Image
              alt={c.image.alt}
              className={styles.image}
              height={desktop ? 80 : 16}
              src={c.image.src}
              width={desktop ? 288 : 224}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
