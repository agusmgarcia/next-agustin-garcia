import React from "react";

import { BarsIcon, CloseIcon, Image, Link, Typography } from "#src/components";
import { useHomeContent } from "#src/store";

import useMobileNavigationBar from "./MobileNavigationBar.hooks";
import styles from "./MobileNavigationBar.module.scss";
import MobileNavigationBarProps from "./MobileNavigationBar.types";

export default function MobileNavigationBar(props: MobileNavigationBarProps) {
  const { screenRef, setOpen, state } = useMobileNavigationBar();

  return (
    <nav className={`${styles.navigationBar} ${props.className}`}>
      <div className={styles.container}>
        <Bar isOpen={state === "open"} setOpen={setOpen} />
        <Body isOpen={state === "open"} setOpen={setOpen} />
        <Screen ref={screenRef} state={state} />
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
  const { homeContent } = useHomeContent();
  if (homeContent === undefined) return <></>;

  return (
    <div className={`${styles.bar} ${isOpen ? styles.open : undefined}`}>
      <div>
        <div className={styles.links}>
          {/* ABOUT ME */}
          <Link
            className={`${styles.link} ${styles.aboutMe}`}
            href={`#${homeContent.aboutMe.id}`}
            onClick={() => setOpen(false)}
          >
            <Image
              alt={homeContent.navigationBar.aboutMe.image.alt}
              className={styles.image}
              height={40}
              loading="eager"
              src={homeContent.navigationBar.aboutMe.image.src}
              width={40}
            />
          </Link>

          {/* NAME */}
          <Typography as="p" className={styles.name}>
            {homeContent.navigationBar.name}
          </Typography>

          {/* TOOGLER */}
          <button
            className={styles.toogler}
            onClick={() => setOpen((prev) => !prev)}
            title={
              isOpen
                ? homeContent.navigationBar.toogler.open.title
                : homeContent.navigationBar.toogler.closed.title
            }
          >
            {isOpen ? (
              <CloseIcon className={styles.icon} height={20} width={20} />
            ) : (
              <BarsIcon className={styles.icon} height={20} width={20} />
            )}
          </button>
        </div>
      </div>
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
  const { homeContent } = useHomeContent();
  if (homeContent === undefined) return <></>;

  return (
    <div
      aria-hidden={isOpen ? undefined : true}
      className={`${styles.body} ${isOpen ? styles.open : undefined}`}
    >
      <div>
        <div className={styles.separator} />
        <div className={styles.links}>
          {/* TECHNOLOGIES */}
          <Link
            className={`${styles.link} ${styles.technologies}`}
            href={`#${homeContent.technologies.id}`}
            onClick={() => setOpen(false)}
            tabIndex={!isOpen ? -1 : undefined}
          >
            <Typography as="span">
              {homeContent.navigationBar.technologies.text}
            </Typography>
          </Link>

          {/* COMPANIES */}
          <Link
            className={`${styles.link} ${styles.companies}`}
            href={`#${homeContent.companies.id}`}
            onClick={() => setOpen(false)}
            tabIndex={!isOpen ? -1 : undefined}
          >
            <Typography as="span">
              {homeContent.navigationBar.companies.text}
            </Typography>
          </Link>

          {/* CONTACT ME */}
          <Link
            className={`${styles.link} ${styles.contactMe}`}
            href={`#${homeContent.contactMe.id}`}
            onClick={() => setOpen(false)}
            tabIndex={!isOpen ? -1 : undefined}
          >
            <Typography as="span">
              {homeContent.navigationBar.contactMe.text}
            </Typography>
          </Link>

          {/* DOWNLOAD CV */}
          <Link
            className={`${styles.link} ${styles.downloadCV}`}
            download={homeContent.navigationBar.downloadCV.download}
            href={homeContent.navigationBar.downloadCV.href}
            onClick={() => setOpen(false)}
            tabIndex={!isOpen ? -1 : undefined}
          >
            <Typography as="span">
              {homeContent.navigationBar.downloadCV.text}
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}

const Screen = React.forwardRef<
  HTMLDivElement,
  { state: "closed" | "closing" | "open" }
>(function Screen({ state }, ref) {
  return <div ref={ref} className={`${styles.screen} ${styles[state]}`} />;
});
