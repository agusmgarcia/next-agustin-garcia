import type { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { HomePage } from "#src/pages";
import { HomeContent, StoreProvider } from "#src/store";

export const getStaticPaths: GetStaticPaths<{
  segments: ["localized", string] | undefined;
}> = () => {
  return {
    fallback: false,
    paths: [
      { params: { segments: undefined } },
      { params: { segments: ["localized", "en"] } },
      { params: { segments: ["localized", "es"] } },
    ],
  };
};

export const getStaticProps: GetStaticProps<
  { _document: { lang: string }; homeContent: HomeContent },
  { segments: ["localized", string] | undefined }
> = async (context) => {
  const lang = context.params?.segments?.[1] ?? "en";
  const homeContent = (await import(`#public/contents/index.${lang}.json`))
    .default as HomeContent;

  return {
    props: {
      _document: { lang },
      homeContent,
    },
  };
};

export default function Home({ homeContent }: { homeContent: HomeContent }) {
  return (
    <StoreProvider initialData={{ homeContent }}>
      <HomePage />
    </StoreProvider>
  );
}
