import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import { useMemo } from "react";
import Imgix, { SharedImigixAndSourceProps } from "react-imgix";

import ImageProps from "./Image.types";

export default function Image(props: ImageProps) {
  if (process.env.NODE_ENV === "production") return ImageImgix(props);
  return ImageSimple(props);
}

function ImageImgix({
  className,
  height,
  loading,
  sizes,
  src,
  width,
  ...props
}: ImageProps) {
  const imageProps = useMemo<SharedImigixAndSourceProps>(() => {
    if (src === undefined || isSVG(src))
      return {
        className,
        disableSrcSet: true,
        height: toNumber(height),
        htmlAttributes: { loading },
        sizes: "auto",
        src: toImgixURL(src),
        width: toNumber(width),
      };

    return {
      attributeConfig: {
        sizes: "data-sizes",
        src: "data-src",
        srcSet: "data-srcset",
      },
      className: `lazyload ${className}`,
      height: toNumber(height),
      htmlAttributes: {
        loading,
        src: `${toImgixURL(src)}?auto=compress&px=16&blur=200&fm=webp`,
      },
      imgixParams: { auto: "compress", fm: "webp" },
      sizes,
      src: toImgixURL(src),
      width: toNumber(width),
    };
  }, [className, height, loading, sizes, src, width]);

  return (
    <Imgix
      {...imageProps}
      // @ts-ignore
      htmlAttributes={{ ...props, ...imageProps.htmlAttributes }}
    />
  );
}

function ImageSimple({
  className,
  loading,
  sizes,
  src,
  srcSet,
  ...props
}: ImageProps) {
  const imageProps = useMemo(() => {
    if (src === undefined || isSVG(src))
      return { className, loading, sizes, src, srcSet };

    return {
      className: `lazyload ${className}`,
      ["data-sizes"]: sizes,
      ["data-src"]: src,
      ["data-srcset"]: srcSet,
      loading,
      src: `/_next/image?url=${encodeURIComponent(src)}&w=8&q=70`,
    };
  }, [loading, src, className, sizes, srcSet]);

  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} {...imageProps} />;
}

function isSVG(src: string): boolean {
  return src.split(".").pop() === "svg";
}

function toNumber(value: string | number | undefined): number | undefined {
  if (value === undefined) return undefined;
  if (typeof value === "number") return value;
  if (isNaN(+value)) return undefined;
  return +value;
}

function toImgixURL(src: string | undefined): string {
  return src !== undefined
    ? `${src.replace(
        "/_next/static/media/",
        "https://agustin-garcia.imgix.net/"
      )}`
    : "";
}
