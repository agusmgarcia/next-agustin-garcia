import { Box, Image, Link, Typography } from "#src/components";
import { useStore } from "#src/store";
import { useMediaQuery, Viewports } from "#src/utils";

import styles from "./Footer.module.scss";
import FooterProps from "./Footer.types";

export default function Footer(props: FooterProps) {
  const desktop = useMediaQuery(Viewports.MIN_MD);
  const homeContent = useStore((store) => store.homeContent.data);

  return (
    <footer className={`${styles.footer} ${props.className}`}>
      <Box variant="1200px" className={styles.content}>
        {/* INFORMATION */}
        <div className={styles.information}>
          <Typography as="h2" variant={desktop ? "1.75rem" : "1.25rem"}>
            {homeContent.footer.information.title}
          </Typography>

          <Typography as="p">
            {homeContent.footer.information.content}
          </Typography>
        </div>

        {/* SOCIAL LINKS */}
        <div className={styles.socialLinks}>
          <Typography
            as="h2"
            variant={desktop ? "1.75rem" : "1.25rem"}
            className={styles.title}
          >
            {homeContent.footer.socialLinks.title}
          </Typography>

          <div className={styles.links}>
            {homeContent.footer.socialLinks.content.map((sl) => (
              <Link
                key={sl.href}
                href={sl.href}
                className={styles.link}
                target={sl.target}
                title={sl.title}
              >
                <Image
                  src={sl.image.src}
                  className={styles.image}
                  alt={sl.image.alt}
                  width={desktop ? 40 : 32}
                  height={desktop ? 40 : 32}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* LOCATION */}
        <div className={styles.location}>
          <div className={styles.section}>
            <Typography as="h2" variant={desktop ? "1.75rem" : "1.25rem"}>
              {homeContent.footer.location.title}
            </Typography>

            <Typography as="p">
              {homeContent.footer.location.content}
            </Typography>
          </div>

          <Typography as="p" className={styles.version}>
            v{process.env.NEXT_PUBLIC_APP_VERSION ?? "0.0.0"}
          </Typography>
        </div>
      </Box>
    </footer>
  );
}
