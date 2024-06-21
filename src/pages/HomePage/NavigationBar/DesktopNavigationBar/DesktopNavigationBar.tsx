import clsx from "clsx";

import { Image, Link, Typography } from "#src/components";
import { useHomeContent } from "#src/store";

import DesktopNavigationBarProps from "./DesktopNavigationBar.types";

export default function DesktopNavigationBar(props: DesktopNavigationBarProps) {
  const { homeContent } = useHomeContent();
  if (homeContent === undefined) return <></>;

  return (
    <nav
      className={clsx(
        props.className,
        "h-24 w-full bg-interface bg-opacity-50",
      )}
    >
      <div
        className={clsx(
          "mx-auto my-0 max-w-[calc(100%-4rem)] xl:max-w-[1216px]",
          "flex h-full flex-row items-center justify-between gap-4",
        )}
      >
        {/* ABOUT ME */}
        <Link
          className={clsx(
            "transition-transform will-change-transform",
            "hover:scale-105",
            "focus:scale-105",
            "active:scale-95",
            "flex flex-row items-center justify-center",
          )}
          href={`#${homeContent.aboutMe.id}`}
        >
          <Image
            alt={homeContent.navigationBar.aboutMe.image.alt}
            className="rounded-full border-2 border-solid border-white bg-white object-cover"
            height={48}
            loading="eager"
            src={homeContent.navigationBar.aboutMe.image.src}
            width={48}
          />
        </Link>

        {/* NAME */}
        <Typography as="p" className="flex-1">
          {homeContent.navigationBar.name}
        </Typography>

        {/* TECHNOLOGIES */}
        <Link
          className={clsx(
            "transition will-change-transform",
            "hover:scale-105",
            "focus:scale-105",
            "active:scale-95",
            "px-4 py-2",
            "hover:rounded-2xl hover:bg-interface",
            "focus:rounded-2xl focus:bg-interface",
          )}
          href={`#${homeContent.technologies.id}`}
        >
          <Typography as="span">
            {homeContent.navigationBar.technologies.text}
          </Typography>
        </Link>

        {/* COMPANIES */}
        <Link
          className={clsx(
            "transition will-change-transform",
            "hover:scale-105",
            "focus:scale-105",
            "active:scale-95",
            "px-4 py-2",
            "hover:rounded-2xl hover:bg-interface",
            "focus:rounded-2xl focus:bg-interface",
          )}
          href={`#${homeContent.companies.id}`}
        >
          <Typography as="span">
            {homeContent.navigationBar.companies.text}
          </Typography>
        </Link>

        {/* CONTACT ME */}
        <Link
          className={clsx(
            "transition will-change-transform",
            "hover:scale-105",
            "focus:scale-105",
            "active:scale-95",
            "px-4 py-2",
            "hover:rounded-2xl hover:bg-interface",
            "focus:rounded-2xl focus:bg-interface",
          )}
          href={`#${homeContent.contactMe.id}`}
        >
          <Typography as="span">
            {homeContent.navigationBar.contactMe.text}
          </Typography>
        </Link>

        {/* DOWNLOAD CV */}
        <Link
          className={clsx(
            "transition will-change-transform",
            "hover:scale-105",
            "focus:scale-105",
            "active:scale-95",
            "rounded-2xl border-2 border-solid border-white px-4 py-2",
            "hover:rounded-2xl hover:bg-interface",
            "focus:rounded-2xl focus:bg-interface",
          )}
          download={homeContent.navigationBar.downloadCV.download}
          href={homeContent.navigationBar.downloadCV.href}
        >
          <Typography as="span">
            {homeContent.navigationBar.downloadCV.text}
          </Typography>
        </Link>
      </div>
    </nav>
  );
}
