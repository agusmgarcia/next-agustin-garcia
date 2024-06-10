import { useMediaQuery } from "@agusmgarcia/react-core";

import { Box, Image, Link, Typography } from "#src/components";
import { useHomeContent } from "#src/store";

import styles from "./Footer.module.scss";
import FooterProps from "./Footer.types";

export default function Footer(props: FooterProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();

  if (homeContent === undefined) return <></>;

  return (
    <footer className={`${styles.footer} ${props.className}`}>
      <Box className={styles.content} variant="1200px">
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
            className={styles.title}
            variant={desktop ? "1.75rem" : "1.25rem"}
          >
            {homeContent.footer.socialLinks.title}
          </Typography>

          <div className={styles.links}>
            {homeContent.footer.socialLinks.content.map((sl) => (
              <Link
                key={sl.href}
                className={styles.link}
                href={sl.href}
                target={sl.target}
                title={sl.title}
              >
                <Image
                  alt={sl.image.alt}
                  className={styles.image}
                  height={desktop ? 40 : 32}
                  src={sl.image.src}
                  width={desktop ? 40 : 32}
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
