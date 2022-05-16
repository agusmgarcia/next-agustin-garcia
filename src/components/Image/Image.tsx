/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";
import Imgix, { SharedImigixAndSourceProps } from "react-imgix";

import ImageProps from "./Image.types";

const blankImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' %3E%3C/svg%3E";

export default function Image(props: ImageProps) {
  if (process.env.NODE_ENV === "production") return ImageImgix(props);
  return ImageSimple(props);
}

function ImageImgix({
  src,
  className,
  sizes,
  alt,
  disableSrcSet,
  loading,
  onClick,
  title,
}: ImageProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => setScriptLoaded(true), []);

  const imageProps = useMemo<SharedImigixAndSourceProps>(() => {
    const result = {
      attributeConfig: {
        sizes: "data-sizes",
        src: "data-src",
        srcSet: "data-srcset",
      },
      className,
      disableSrcSet,
      htmlAttributes: {
        alt,
        loading,
        onClick,
        src: blankImage,
        title,
      },
      imgixParams: { auto: "compress" },
      sizes,
      src: "https://agustin-garcia.web.app/",
    };

    if (!scriptLoaded) return result;

    result.src = `${src.replace(
      "/_next/static/media/",
      "https://agustin-garcia.imgix.net/"
    )}`;
    result.className = `lazyload ${className ?? ""}`;
    result.htmlAttributes.src = `${result.src}?auto=compress&px=16&blur=200&fm=webp`;

    return result;
  }, [
    scriptLoaded,
    src,
    className,
    sizes,
    alt,
    disableSrcSet,
    loading,
    onClick,
    title,
  ]);

  return <Imgix {...imageProps} />;
}

function ImageSimple({
  src,
  className,
  sizes,
  alt,
  loading,
  onClick,
  title,
}: ImageProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => setScriptLoaded(true), []);

  const imageProps = useMemo<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >
  >(() => {
    const result = {
      alt,
      className,
      loading,
      onClick,
      sizes,
      src: blankImage,
      title,
    };

    if (!scriptLoaded) return result;

    // Don't use image api for svg files.
    if (src.split(".").pop() === "svg") {
      result.src = src;
      return result;
    }

    result.src = `_next/image?url=${encodeURIComponent(src)}&w=8&q=70`;
    result.className = `lazyload ${className ?? ""}`;
    (result as any)["data-src"] = src;

    return result;
  }, [scriptLoaded, src, className, sizes, alt, loading, onClick, title]);

  return <img {...imageProps} />;
}
