import packageJSON from "package.json";

import Image from "#src/components/Image";

import useFooter from "./Footer.hooks";
import styles from "./Footer.module.scss";

export default function Footer() {
  const { socialLinks } = useFooter();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* INFORMATION */}
        <div className={styles.information}>
          <h2 className={styles.title}>Agustin Garcia</h2>
          <p className={styles.description}>
            This website was developed by myself using NextJS, Typescript, Imgix
            and Firebase. This application has no commercial purposes. All the
            assets belongs to the corresponding owners.
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className={styles.socialLinks}>
          <h2 className={styles.title}>Social Links</h2>
          <div className={styles.links}>
            {socialLinks.map((sl, index) => (
              <div key={index} onClick={() => window.open(sl.url, "_blank")}>
                <Image
                  src={sl.src}
                  className={styles.image}
                  sizes="100vw"
                  disableSrcSet={true}
                  alt={sl.alt}
                  title={sl.title}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>

        {/* LOCATION */}
        <div className={styles.location}>
          <div className={styles.section}>
            <h2 className={styles.title}>Location</h2>
            <p className={styles.description}>Uruguay, Montevideo</p>
          </div>
          <p className={styles.version}>v{packageJSON.version}</p>
        </div>
      </div>
    </footer>
  );
}
