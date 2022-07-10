import styles from "./Button.module.scss";
import ButtonProps from "./Button.types";

export default function Button(props: ButtonProps) {
  return (
    <button {...props} className={`${styles.button} ${props.className}`} />
  );
}
