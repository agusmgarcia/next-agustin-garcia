import { twMerge } from "tailwind-merge";

import { Image, Link, Typography } from "#src/components";
import { useHomeContent } from "#src/store";

import type DesktopNavigationBarProps from "./DesktopNavigationBar.types";

export default function DesktopNavigationBar(props: DesktopNavigationBarProps) {
  const { homeContent } = useHomeContent();
  if (homeContent === undefined) return <></>;

  return (
    <nav
      className={twMerge(
        "h-24 w-full bg-interface bg-opacity-50",
        props.className,
      )}
    >
      <div
        className={twMerge(
          "mx-auto my-0 max-w-[calc(100%-4rem)] xl:max-w-[1216px]",
          "flex h-full flex-row items-center justify-between gap-4",
        )}
      >
        {/* ABOUT ME */}
        <Link
          className={twMerge(
            "flex flex-row items-center justify-center",
            "transition-transform will-change-transform",
            "hover:scale-105",
            "focus:scale-105",
            "active:scale-95",
          )}
          href={`#${homeContent.aboutMe.id}`}
        >
          <Image
            alt={homeContent.navigationBar.aboutMe.image.alt}
            className="size-[48px] rounded-full border-2 border-solid border-white bg-white object-cover"
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
          className={twMerge(
            "rounded-2xl px-4 py-2",
            "transition-[transform,_background-color] will-change-[transform,_background-color]",
            "hover:scale-105 hover:bg-interface",
            "focus:scale-105 focus:bg-interface",
            "active:scale-95",
          )}
          href={`#${homeContent.technologies.id}`}
        >
          <Typography as="span">
            {homeContent.navigationBar.technologies.text}
          </Typography>
        </Link>

        {/* COMPANIES */}
        <Link
          className={twMerge(
            "rounded-2xl px-4 py-2",
            "transition-[transform,_background-color] will-change-[transform,_background-color]",
            "hover:scale-105 hover:bg-interface",
            "focus:scale-105 focus:bg-interface",
            "active:scale-95",
          )}
          href={`#${homeContent.companies.id}`}
        >
          <Typography as="span">
            {homeContent.navigationBar.companies.text}
          </Typography>
        </Link>

        {/* CONTACT ME */}
        <Link
          className={twMerge(
            "rounded-2xl px-4 py-2",
            "transition-[transform,_background-color] will-change-[transform,_background-color]",
            "hover:scale-105 hover:bg-interface",
            "focus:scale-105 focus:bg-interface",
            "active:scale-95",
          )}
          href={`#${homeContent.contactMe.id}`}
        >
          <Typography as="span">
            {homeContent.navigationBar.contactMe.text}
          </Typography>
        </Link>

        {/* DOWNLOAD CV */}
        <Link
          className={twMerge(
            "rounded-2xl border-2 border-solid border-white px-4 py-2",
            "transition-[transform,_background-color] will-change-[transform,_background-color]",
            "hover:scale-105 hover:bg-interface",
            "focus:scale-105 focus:bg-interface",
            "active:scale-95",
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
