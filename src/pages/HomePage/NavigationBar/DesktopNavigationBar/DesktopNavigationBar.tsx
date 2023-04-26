import { Box, Image, Link, Typography } from "#src/components";
import { useHomeContent } from "#src/store";

import styles from "./DesktopNavigationBar.module.scss";
import DesktopNavigationBarProps from "./DesktopNavigationBar.types";

export default function DesktopNavigationBar(props: DesktopNavigationBarProps) {
  const { homeContent } = useHomeContent();
  if (homeContent === undefined) return <></>;

  return (
    <nav className={`${styles.navigationBar} ${props.className}`}>
      <Box className={styles.content} variant="1200px">
        {/* ABOUT ME */}
        <Link
          className={`${styles.link} ${styles.aboutMe}`}
          href={`#${homeContent.aboutMe.id}`}
        >
          <Image
            alt={homeContent.navigationBar.aboutMe.image.alt}
            className={styles.image}
            height={48}
            loading="eager"
            src={homeContent.navigationBar.aboutMe.image.src}
            width={48}
          />
        </Link>

        {/* NAME */}
        <Typography as="p" className={styles.name}>
          {homeContent.navigationBar.name}
        </Typography>

        {/* TECHNOLOGIES */}
        <Link
          className={`${styles.link} ${styles.technologies}`}
          href={`#${homeContent.technologies.id}`}
        >
          <Typography as="span">
            {homeContent.navigationBar.technologies.text}
          </Typography>
        </Link>

        {/* COMPANIES */}
        <Link
          className={`${styles.link} ${styles.companies}`}
          href={`#${homeContent.companies.id}`}
        >
          <Typography as="span">
            {homeContent.navigationBar.companies.text}
          </Typography>
        </Link>

        {/* CONTACT ME */}
        <Link
          className={`${styles.link} ${styles.contactMe}`}
          href={`#${homeContent.contactMe.id}`}
        >
          <Typography as="span">
            {homeContent.navigationBar.contactMe.text}
          </Typography>
        </Link>

        {/* DOWNLOAD CV */}
        <Link
          className={`${styles.link} ${styles.downloadCV}`}
          download={homeContent.navigationBar.downloadCV.download}
          href={homeContent.navigationBar.downloadCV.href}
        >
          <Typography as="span">
            {homeContent.navigationBar.downloadCV.text}
          </Typography>
        </Link>
      </Box>
    </nav>
  );
}
