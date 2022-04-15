import packageJSON from "package.json";

import profile from "#public/assets/profile.png";
import Image from "#src/components/Image";

import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.aboutMe} id="aboutMe">
      <Image
        src={profile.src}
        className={styles.image}
        sizes="(max-width: 992px) 272px, (max-width: 576px) 224px, 320px"
        alt="Author's face"
        loading="lazy"
      />
      <h1 className={styles.name}>Agustin Garcia</h1>
      <p className={styles.occupation}>{packageJSON.description}</p>
    </div>
  );
}
