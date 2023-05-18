import "./_app.css";

import type { AppProps } from "next/app";

import { StoreProvider } from "#src/store";

export default function App({ Component, pageProps }: AppProps<any>) {
  return (
    <StoreProvider initialsData={pageProps._app?.initialsData}>
      <Component {...pageProps._component} />
    </StoreProvider>
  );
}
