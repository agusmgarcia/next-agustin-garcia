import React from "react";
import { twMerge } from "tailwind-merge";

import { BarsIcon, CloseIcon, Image, Link, Typography } from "#src/components";
import { useHomeContent } from "#src/store";

import useMobileNavigationBar from "./MobileNavigationBar.hooks";
import type MobileNavigationBarProps from "./MobileNavigationBar.types";

export default function MobileNavigationBar(props: MobileNavigationBarProps) {
  const { modalRef, setOpen, state } = useMobileNavigationBar();

  return (
    <nav ref={modalRef} className={twMerge(props.className, "w-full")}>
      <div className="relative">
        <Bar isOpen={state === "open"} setOpen={setOpen} />
        <Body isOpen={state === "open"} setOpen={setOpen} />
        <Screen state={state} />
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
  if (!homeContent) return <></>;

  return (
    <div
      className={twMerge(
        "relative z-[3] bg-interface/50 transition-colors",
        isOpen && "bg-interface/90",
      )}
    >
      <div className="mx-auto my-0 max-w-[calc(100%-4rem)]">
        <div className="flex h-24 flex-row items-center justify-between gap-4">
          {/* ABOUT ME */}
          <Link
            className={twMerge(
              "transition-transform will-change-transform",
              "hover:scale-105",
              "focus:scale-105",
              "active:scale-95",
              "flex items-center justify-center",
            )}
            href={`#${homeContent.aboutMe.id}`}
            onClick={() => setOpen(false)}
          >
            <Image
              alt={homeContent.navigationBar.aboutMe.image.alt}
              className="size-[40px] rounded-full border-2 border-solid border-white bg-white object-cover"
              height={40}
              loading="eager"
              src={homeContent.navigationBar.aboutMe.image.src}
              width={40}
            />
          </Link>

          {/* NAME */}
          <Typography as="p" className="flex-1">
            {homeContent.navigationBar.name}
          </Typography>

          {/* TOOGLER */}
          <button
            className={twMerge(
              "cursor-pointer border-none bg-none px-2 transition-transform will-change-transform",
              "hover:scale-105",
              "focus:scale-105",
              "active:scale-95",
            )}
            onClick={() => setOpen((prev) => !prev)}
            title={
              isOpen
                ? homeContent.navigationBar.toogler.open.title
                : homeContent.navigationBar.toogler.closed.title
            }
          >
            {isOpen ? (
              <CloseIcon color="white" height={20} width={20} />
            ) : (
              <BarsIcon color="white" height={20} width={20} />
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
  if (!homeContent) return <></>;

  return (
    <div
      aria-hidden={isOpen ? undefined : true}
      className={twMerge(
        "absolute right-0 left-0 z-[2] -translate-y-[150%] transition-[transform,_background-color] will-change-[transform,_background-color]",
        "rounded-br-[2rem] rounded-bl-[2rem] bg-interface/50",
        isOpen && "translate-y-0 bg-interface/90",
      )}
    >
      <div className="mx-auto my-0 max-w-[calc(100%-4rem)]">
        {/* SEPARATOR */}
        <div
          className={twMerge(
            "scale-x-0 border-t-[1px] border-solid border-t-white",
            "transition-transform delay-150 will-change-transform",
            isOpen && "scale-x-100",
          )}
        />

        {/* LINKS */}
        <div className="flex flex-col gap-4 pt-4 pb-8">
          {/* TECHNOLOGIES */}
          <Link
            className={twMerge(
              "w-fit bg-none px-4 py-2",
              "transition-transform will-change-transform",
              "hover:scale-105",
              "focus:scale-105",
              "active:scale-95",
            )}
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
            className={twMerge(
              "w-fit bg-none px-4 py-2",
              "transition-transform will-change-transform",
              "hover:scale-105",
              "focus:scale-105",
              "active:scale-95",
            )}
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
            className={twMerge(
              "w-fit bg-none px-4 py-2",
              "transition-transform will-change-transform",
              "hover:scale-105",
              "focus:scale-105",
              "active:scale-95",
            )}
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
            className={twMerge(
              "rounded-2xl border-2 border-solid border-white",
              "w-fit bg-none px-4 py-2",
              "transition-transform will-change-transform",
              "hover:scale-105",
              "focus:scale-105",
              "active:scale-95",
            )}
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

function Screen({
  state,
}: {
  state: "closed" | "closing" | "just-visible" | "open";
}) {
  return (
    <div
      className={twMerge(
        "fixed z-[1] bg-black transition-opacity",
        state === "closing" && "top-0 right-0 bottom-0 left-0 opacity-0",
        state === "open" && "top-0 right-0 bottom-0 left-0 opacity-75",
        state === "closed" && "top-1/2 right-1/2 bottom-1/2 left-1/2 hidden",
        state === "just-visible" &&
          "top-1/2 right-1/2 bottom-1/2 left-1/2 opacity-100",
      )}
    />
  );
}
