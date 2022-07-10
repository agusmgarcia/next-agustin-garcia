import "./_app.css";

import type { AppProps } from "next/app";

import { AppPage } from "#src/pages";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppPage>
      <Component {...pageProps} />
    </AppPage>
  );
}
