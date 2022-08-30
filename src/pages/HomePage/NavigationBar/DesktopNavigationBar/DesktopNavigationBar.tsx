import { Box, Image, Link, Typography } from "#src/components";
import { useStore } from "#src/store";

import styles from "./DesktopNavigationBar.module.scss";
import DesktopNavigationBarProps from "./DesktopNavigationBar.types";

export default function DesktopNavigationBar(props: DesktopNavigationBarProps) {
  const homeContent = useStore((store) => store.homeContent);

  return (
    <nav className={`${styles.navigationBar} ${props.className}`}>
      <Box variant="1200px" className={styles.content}>
        {/* ABOUT ME */}
        <Link
          href={`#${homeContent.aboutMe.id}`}
          className={`${styles.link} ${styles.aboutMe}`}
        >
          <Image
            src={homeContent.navigationBar.aboutMe.image.src}
            className={styles.image}
            alt={homeContent.navigationBar.aboutMe.image.alt}
            loading="eager"
            width={48}
            height={48}
          />
        </Link>

        {/* NAME */}
        <Typography className={styles.name}>
          {homeContent.navigationBar.name}
        </Typography>

        {/* TECHNOLOGIES */}
        <Link
          href={`#${homeContent.technologies.id}`}
          className={`${styles.link} ${styles.technologies}`}
        >
          <Typography>{homeContent.navigationBar.technologies.text}</Typography>
        </Link>

        {/* COMPANIES */}
        <Link
          href={`#${homeContent.companies.id}`}
          className={`${styles.link} ${styles.companies}`}
        >
          <Typography>{homeContent.navigationBar.companies.text}</Typography>
        </Link>

        {/* CONTACT ME */}
        <Link
          href={`#${homeContent.contactMe.id}`}
          className={`${styles.link} ${styles.contactMe}`}
        >
          <Typography>{homeContent.navigationBar.contactMe.text}</Typography>
        </Link>

        {/* DOWNLOAD CV */}
        <Link
          href={homeContent.navigationBar.downloadCV.href}
          download={homeContent.navigationBar.downloadCV.download}
          className={`${styles.link} ${styles.downloadCV}`}
        >
          <Typography>{homeContent.navigationBar.downloadCV.text}</Typography>
        </Link>
      </Box>
    </nav>
  );
}
