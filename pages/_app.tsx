import "./_app.css";

import type { AppProps } from "next/app";

import { StoreProvider } from "#src/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider initialData={pageProps._app?.initialData}>
      <Component {...pageProps._component} />
    </StoreProvider>
  );
}
