import Document, { Head, Html, Main, NextScript } from "next/document";
import packageJSON from "package.json";

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="description" content={packageJSON.description} />
          <meta property="og:title" content="Agustin Garcia's profile" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://agustin-garcia.web.app/" />
          <meta property="og:image" content="/image.png" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
