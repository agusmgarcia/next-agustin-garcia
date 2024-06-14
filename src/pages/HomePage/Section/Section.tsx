import { Typography } from "#src/components";

import styles from "./Section.module.scss";
import SectionProps from "./Section.types";

export default function Section(props: SectionProps) {
  return (
    <div className={`${styles.section} ${props.className}`} id={props.id}>
      {/* SUBTITLE */}
      {props.subtitle && (
        <Typography as="h2" className={styles.subtitle} variant="2.25rem">
          {props.subtitle}
        </Typography>
      )}

      {/* CHILDREN */}
      <div className={styles.children}>{props.children}</div>
    </div>
  );
}
