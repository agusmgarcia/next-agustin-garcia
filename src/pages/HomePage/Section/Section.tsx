import { Box, Typography } from "#src/components";

import styles from "./Section.module.scss";
import SectionProps from "./Section.types";

export default function Section(props: SectionProps) {
  return (
    <Box
      as="section"
      variant="800px"
      id={props.id}
      className={`${styles.section} ${props.className}`}
    >
      {/* SUBTITLE */}
      {props.subtitle && (
        <Typography as="h2" variant="2rem" className={styles.subtitle}>
          {props.subtitle}
        </Typography>
      )}

      {/* CHILDREN */}
      <div className={styles.children}>{props.children}</div>
    </Box>
  );
}
