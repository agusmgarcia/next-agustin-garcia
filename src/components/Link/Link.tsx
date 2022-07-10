import styles from "./Link.module.scss";
import LinkProps from "./Link.types";

export default function Link(props: LinkProps) {
  return <a {...props} className={`${styles.link} ${props.className}`} />;
}
