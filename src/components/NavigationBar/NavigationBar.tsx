import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import profile from "#public/assets/profile.png";
import Image from "#src/components/Image";

import useNavigationBar from "./NavigationBar.hooks";
import styles from "./NavigationBar.module.scss";
import NavigationBarProps from "./NavigationBar.types";

export default function NavigationBar(props: NavigationBarProps) {
  const { navBarRef, handleClick, isMenuMobileOpen, toogleMenuMobile } =
    useNavigationBar(props);

  return (
    <nav
      className={`${styles.navigationBar} ${
        isMenuMobileOpen ? styles.open : ""
      }`}
    >
      <div className={styles.content} ref={navBarRef}>
        {/* PROFILE */}
        <div className={styles.profile}>
          <Image
            src={profile.src}
            className={styles.image}
            sizes="52px, (max-width: 768px) 48px, (max-width: 576px) 38px"
            alt="Author's face"
            title="Agustin Garcia"
            loading="lazy"
            onClick={handleClick("aboutMe")}
          />
          <p className={styles.name}>Agustin Garcia</p>
        </div>

        {/* LINKS */}
        <div className={styles.links}>
          <MenuItems handleClick={handleClick} />
        </div>

        {/* MOBILE TOOGLER */}
        <div className={styles.mobileToogler}>
          <button
            type="button"
            className={styles.button}
            title="Open the menu to access all the links"
            onClick={toogleMenuMobile}
          >
            {isMenuMobileOpen ? (
              <FontAwesomeIcon icon={faTimes} className={styles.bars} />
            ) : (
              <FontAwesomeIcon icon={faBars} className={styles.bars} />
            )}
          </button>
        </div>
      </div>

      {isMenuMobileOpen && (
        <div className={styles.submenu}>
          <MenuItems handleClick={handleClick} />
        </div>
      )}
    </nav>
  );
}

function MenuItems({
  handleClick,
}: {
  handleClick: (_id: string) => () => void;
}) {
  return (
    <>
      <button
        type="button"
        className={styles.item}
        title="Show all technologies I manage"
        onClick={handleClick("technologies")}
      >
        Technologies
      </button>
      <button
        type="button"
        className={styles.item}
        title="Show all companies I've been working for"
        onClick={handleClick("companies")}
      >
        Companies
      </button>
      <button
        type="button"
        className={styles.item}
        title="Let's talk!"
        onClick={handleClick("contactMe")}
      >
        Contact Me
      </button>
      <DownloadCVButton onClick={handleClick("downloadCV")} />
    </>
  );
}

function DownloadCVButton({ onClick }: { onClick: () => void }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const handler = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(handler);
  }, [loading]);

  const handleClick = useCallback(() => {
    setLoading(true);
    onClick();
  }, [onClick]);

  return (
    <button
      type="button"
      className={`${styles.item} ${styles.button}`}
      title="Let's talk!"
      disabled={loading}
      onClick={handleClick}
    >
      {!loading && "Download CV"}
      {loading && <Loader type="Oval" color="white" width={16} height={16} />}
    </button>
  );
}
