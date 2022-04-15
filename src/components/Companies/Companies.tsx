import Image from "#src/components/Image";

import useCompanies from "./Companies.hooks";
import styles from "./Companies.module.scss";

export default function Companies() {
  const { companies } = useCompanies();

  return (
    <div className={styles.companies} id="companies">
      <h2 className={styles.title}>Companies</h2>
      <div className={styles.banners}>
        {companies.map((c, index) => (
          <Image
            key={index}
            src={c.src}
            className={styles.image}
            sizes="360px, (max-width: 992px) 35vw, (max-width: 768px) 60vw"
            alt={c.alt}
            title={c.title}
            onClick={() => window.open(c.url, "_blank")}
            loading={"lazy"}
          />
        ))}
      </div>
    </div>
  );
}
