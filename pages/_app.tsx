import "./_app.css";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import smoothscroll from "smoothscroll-polyfill";

if (typeof window !== "undefined") smoothscroll.polyfill();
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
