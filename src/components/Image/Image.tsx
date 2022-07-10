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
        height: height !== undefined ? +height : height,
        htmlAttributes: { loading },
        sizes: "auto",
        src: src
          ? `${src.replace(
              "/_next/static/media/",
              "https://agustin-garcia.imgix.net/"
            )}`
          : "",
        width: width !== undefined ? +width : width,
      };

    if (loading === "eager")
      return {
        className,
        height: height !== undefined ? +height : height,
        htmlAttributes: { loading },
        imgixParams: { auto: "compress" },
        sizes,
        src: `${src.replace(
          "/_next/static/media/",
          "https://agustin-garcia.imgix.net/"
        )}`,
        width: width !== undefined ? +width : width,
      };

    return {
      attributeConfig: {
        sizes: "data-sizes",
        src: "data-src",
        srcSet: "data-srcset",
      },
      className: `lazyload ${className ?? ""}`,
      height: height !== undefined ? +height : height,
      htmlAttributes: {
        loading,
        src: `${src}?auto=compress&px=16&blur=200&fm=webp`,
      },
      imgixParams: { auto: "compress" },
      sizes,
      src: `${src.replace(
        "/_next/static/media/",
        "https://agustin-garcia.imgix.net/"
      )}`,
      width: width !== undefined ? +width : width,
    };
  }, [className, height, loading, sizes, src, width]);

  return (
    <Imgix
      {...imageProps}
      // @ts-ignore
      htmlAttributes={{ ...imageProps.htmlAttributes, ...props }}
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
    if (loading === "eager" || src === undefined || isSVG(src))
      return { className, loading, sizes, src, srcSet };

    return {
      className: `lazyload ${className}`,
      ["data-sizes"]: sizes,
      ["data-src"]: src,
      ["data-srcset"]: srcSet,
      src: `/_next/image?url=${encodeURIComponent(src)}&w=8&q=70`,
    };
  }, [loading, src, className, sizes, srcSet]);

  // eslint-disable-next-line @next/next/no-img-element
  return <img {...imageProps} {...props} />;
}

function isSVG(src: string): boolean {
  return src.split(".").pop() === "svg";
}
