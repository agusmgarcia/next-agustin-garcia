import { MouseEventHandler } from "react";

type ImageProps = {
  src: string;
} & Partial<{
  className: string;
  sizes: string;
  disableSrcSet: boolean;
  alt: string;
  title: string;
  loading: "eager" | "lazy";
  onClick: MouseEventHandler<HTMLImageElement>;
}>;

export default ImageProps;
