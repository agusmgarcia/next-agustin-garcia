import Document, { Head, Html, Main, NextScript } from "next/document";
import packageJSON from "package.json";

export default class AppDocument extends Document {
  override render() {
    return (
      <Html
        className="scroll-smooth bg-gray-800"
        lang={this.props.__NEXT_DATA__.props.pageProps._app?.pageLanguage}
      >
        <Head>
          <link
            href="/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href="/site.webmanifest" rel="manifest" />
          <meta content={packageJSON.description} name="description" />
          <meta content="Agustin Garcia's profile" property="og:title" />
          <meta content="website" property="og:type" />
          <meta content="https://agustin-garcia.web.app/" property="og:url" />
          <meta content="/image.png" property="og:image" />
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
