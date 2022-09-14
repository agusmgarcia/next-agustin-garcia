import { Image, Typography } from "#src/components";
import { useStore } from "#src/store";
import { useMediaQuery, Viewports } from "#src/utils";

import Section from "../Section";
import styles from "./AboutMe.module.scss";
import AboutMeProps from "./AboutMe.types";

export default function AboutMe(props: AboutMeProps) {
  const desktop = useMediaQuery(Viewports.MIN_MD);
  const homeContent = useStore((store) => store.homeContent.data);

  return (
    <Section id={homeContent.aboutMe.id} className={props.className}>
      <div className={styles.aboutMe}>
        <Image
          src={homeContent.aboutMe.image.src}
          className={styles.image}
          alt={homeContent.aboutMe.image.alt}
          loading="eager"
          width={desktop ? 256 : 224}
          height={desktop ? 256 : 224}
        />

        <div className={styles.content}>
          <Typography as="h1" variant="2.75rem">
            {homeContent.aboutMe.name}
          </Typography>

          <Typography as="p" variant="1.25rem" className={styles.description}>
            {homeContent.aboutMe.description}
          </Typography>
        </div>
      </div>
    </Section>
  );
}
