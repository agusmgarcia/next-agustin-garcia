import "./_app.css";

import { type AppProps } from "next/app";
import Head from "next/head";

import { StoreProvider } from "#src/store";

export default function App({ Component, pageProps }: AppProps<any>) {
  const appProps = pageProps._app;
  const componentProps = pageProps._component;

  return (
    <>
      <Head>
        <title>{appProps?.pageTitle}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico`}
          rel="icon"
          type="image/x-icon"
        />
      </Head>

      <StoreProvider initialState={appProps?.initialsData}>
        <Component {...componentProps} />
      </StoreProvider>
    </>
  );
}
