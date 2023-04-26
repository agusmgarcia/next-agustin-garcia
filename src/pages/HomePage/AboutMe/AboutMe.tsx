import { Image, Typography } from "#src/components";
import { useHomeContent } from "#src/store";
import { useMediaQuery, Viewports } from "#src/utils";

import Section from "../Section";
import styles from "./AboutMe.module.scss";
import AboutMeProps from "./AboutMe.types";

export default function AboutMe(props: AboutMeProps) {
  const desktop = useMediaQuery(Viewports.MIN_MD);
  const { homeContent } = useHomeContent();

  if (homeContent === undefined) return <></>;

  return (
    <Section className={props.className} id={homeContent.aboutMe.id}>
      <div className={styles.aboutMe}>
        <Image
          alt={homeContent.aboutMe.image.alt}
          className={styles.image}
          height={desktop ? 256 : 224}
          loading="eager"
          src={homeContent.aboutMe.image.src}
          width={desktop ? 256 : 224}
        />

        <div className={styles.content}>
          <Typography as="h1" variant="2.75rem">
            {homeContent.aboutMe.name}
          </Typography>

          <Typography as="p" className={styles.description} variant="1.25rem">
            {homeContent.aboutMe.description}
          </Typography>
        </div>
      </div>
    </Section>
  );
}
