import React from "react";

import {
  BarsIcon,
  Box,
  CloseIcon,
  Image,
  Link,
  Typography,
} from "#src/components";
import { useStore } from "#src/store";

import useMobileNavigationBar from "./MobileNavigationBar.hooks";
import styles from "./MobileNavigationBar.module.scss";
import MobileNavigationBarProps from "./MobileNavigationBar.types";

export default function MobileNavigationBar(props: MobileNavigationBarProps) {
  const { isOpen, screenRef, setOpen } = useMobileNavigationBar();

  return (
    <nav className={`${styles.navigationBar} ${props.className}`}>
      <div className={styles.container}>
        <Bar isOpen={isOpen} setOpen={setOpen} />
        <Body isOpen={isOpen} setOpen={setOpen} />
        <Screen ref={screenRef} isOpen={isOpen} />
      </div>
    </nav>
  );
}

function Bar({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const homeContent = useStore((store) => store.homeContent.data);

  return (
    <div className={`${styles.bar} ${isOpen ? styles.open : undefined}`}>
      <Box variant="1200px">
        <div className={styles.links}>
          {/* ABOUT ME */}
          <Link
            href={`#${homeContent.aboutMe.id}`}
            className={`${styles.link} ${styles.aboutMe}`}
            onClick={() => setOpen(false)}
          >
            <Image
              src={homeContent.navigationBar.aboutMe.image.src}
              className={styles.image}
              alt={homeContent.navigationBar.aboutMe.image.alt}
              loading="eager"
              width={40}
              height={40}
            />
          </Link>

          {/* NAME */}
          <Typography as="p" className={styles.name}>
            {homeContent.navigationBar.name}
          </Typography>

          {/* TOOGLER */}
          <button
            className={styles.toogler}
            title={
              isOpen
                ? homeContent.navigationBar.toogler.open.title
                : homeContent.navigationBar.toogler.closed.title
            }
            onClick={() => setOpen((prev) => !prev)}
          >
            {isOpen ? (
              <CloseIcon className={styles.icon} width={20} height={20} />
            ) : (
              <BarsIcon className={styles.icon} width={20} height={20} />
            )}
          </button>
        </div>
      </Box>
    </div>
  );
}

function Body({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const homeContent = useStore((store) => store.homeContent.data);

  return (
    <div className={`${styles.body} ${isOpen ? styles.open : undefined}`}>
      <Box variant="1200px">
        <div className={styles.separator} />
        <div className={styles.links}>
          {/* TECHNOLOGIES */}
          <Link
            href={`#${homeContent.technologies.id}`}
            className={`${styles.link} ${styles.technologies}`}
            onClick={() => setOpen(false)}
            tabIndex={!isOpen ? -1 : undefined}
          >
            <Typography as="span">
              {homeContent.navigationBar.technologies.text}
            </Typography>
          </Link>

          {/* COMPANIES */}
          <Link
            href={`#${homeContent.companies.id}`}
            className={`${styles.link} ${styles.companies}`}
            onClick={() => setOpen(false)}
            tabIndex={!isOpen ? -1 : undefined}
          >
            <Typography as="span">
              {homeContent.navigationBar.companies.text}
            </Typography>
          </Link>

          {/* CONTACT ME */}
          <Link
            href={`#${homeContent.contactMe.id}`}
            className={`${styles.link} ${styles.contactMe}`}
            onClick={() => setOpen(false)}
            tabIndex={!isOpen ? -1 : undefined}
          >
            <Typography as="span">
              {homeContent.navigationBar.contactMe.text}
            </Typography>
          </Link>

          {/* DOWNLOAD CV */}
          <Link
            href={homeContent.navigationBar.downloadCV.href}
            download={homeContent.navigationBar.downloadCV.download}
            className={`${styles.link} ${styles.downloadCV}`}
            onClick={() => setOpen(false)}
            tabIndex={!isOpen ? -1 : undefined}
          >
            <Typography as="span">
              {homeContent.navigationBar.downloadCV.text}
            </Typography>
          </Link>
        </div>
      </Box>
    </div>
  );
}

const Screen = React.forwardRef<HTMLDivElement, { isOpen: boolean }>(
  function Screen({ isOpen }, ref) {
    return (
      <div
        ref={ref}
        className={`${styles.screen} ${isOpen ? styles.open : undefined}`}
      />
    );
  }
);
