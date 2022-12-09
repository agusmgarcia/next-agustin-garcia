import "./_app.css";

import type { AppProps } from "next/app";

import { StoreProvider } from "#src/store";
import { useIsomorphicLayoutEffect } from "#src/utils";

export default function App({ Component, pageProps }: AppProps) {
  useIsomorphicLayoutEffect(() => {
    const htmls = document.getElementsByTagName("html");
    if (htmls.length !== 1)
      throw new Error("Multiple html's elements found in the document");

    const html = htmls.item(0);
    if (html === null) throw new Error("No html element found in the document");

    const lang = pageProps._app?.lang;
    if (lang !== undefined) html.setAttribute("lang", lang);
    else html.removeAttribute("lang");
  }, [pageProps._app?.lang]);

  return (
    <StoreProvider initialData={pageProps._app?.initialData}>
      <Component {...pageProps._component} />
    </StoreProvider>
  );
}
