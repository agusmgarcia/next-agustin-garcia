import Document, { Head, Html, Main, NextScript } from "next/document";

export default class AppDocument extends Document {
  override render() {
    return (
      <Html
        className="scroll-smooth bg-gray-800"
        lang={this.props.__NEXT_DATA__.props.pageProps._app.pageLanguage}
      >
        <Head>
          <link href="favicon.ico" rel="icon" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
