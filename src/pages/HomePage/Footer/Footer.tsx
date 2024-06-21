import { useMediaQuery } from "@agusmgarcia/react-core";
import clsx from "clsx";

import { Image, Link, Typography } from "#src/components";
import { useHomeContent } from "#src/store";

import FooterProps from "./Footer.types";

export default function Footer(props: FooterProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();

  if (homeContent === undefined) return <></>;

  return (
    <footer
      className={clsx(
        props.className,
        "mt-12 w-full border-t-[1px] border-solid border-t-white bg-interface py-12",
      )}
    >
      <div
        className={clsx(
          "mx-auto my-0 max-w-[calc(100%-4rem)] xl:max-w-[1216px]",
          "grid grid-cols-1 gap-4",
          "md:grid-cols-10 md:gap-0",
        )}
      >
        {/* INFORMATION */}
        <div
          className={clsx(
            "flex flex-col justify-between gap-2",
            "md:col-span-3 md:gap-4",
          )}
        >
          <Typography as="h2" variant={desktop ? "1.875rem" : "1.25rem"}>
            {homeContent.footer.information.title}
          </Typography>

          <Typography as="p">
            {homeContent.footer.information.content}
          </Typography>
        </div>

        {/* SOCIAL LINKS */}
        <div
          className={clsx(
            "flex flex-row items-center border-b-[1px] border-t-[1px] border-solid border-b-white border-t-white py-4",
            "md:col-span-4 md:flex-col md:border-none md:p-0 md:text-center",
          )}
        >
          <Typography as="h2" variant={desktop ? "1.875rem" : "1.25rem"}>
            {homeContent.footer.socialLinks.title}
          </Typography>

          <div
            className={clsx(
              "flex flex-1 flex-row items-center justify-end gap-4",
              "md:gap-6",
            )}
          >
            {homeContent.footer.socialLinks.content.map((sl) => (
              <Link
                key={sl.href}
                className={clsx(
                  "grayscale transition-transform will-change-transform",
                  "hover:scale-105 hover:grayscale-0",
                  "focus:scale-105 focus:grayscale-0",
                  "active:scale-95",
                )}
                href={sl.href}
                target={sl.target}
                title={sl.title}
              >
                <Image
                  alt={sl.image.alt}
                  className="h-[32px] w-[32px] object-contain md:h-[40px] md:w-[40px]"
                  height={desktop ? 40 : 32}
                  src={sl.image.src}
                  width={desktop ? 40 : 32}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* LOCATION */}
        <div
          className={clsx(
            "flex flex-row justify-between",
            "md:col-span-3 md:flex-col md:text-right",
          )}
        >
          <div className="flex flex-col gap-2 md:gap-4">
            <Typography as="h2" variant={desktop ? "1.875rem" : "1.25rem"}>
              {homeContent.footer.location.title}
            </Typography>

            <Typography as="p">
              {homeContent.footer.location.content}
            </Typography>
          </div>

          <Typography as="p" className="self-end">
            v{process.env.NEXT_PUBLIC_APP_VERSION ?? "0.0.0"}
          </Typography>
        </div>
      </div>
    </footer>
  );
}
