import type { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { HomePage } from "#src/pages";
import { HomeContent } from "#src/store";

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
  { _app: { initialData: { homeContent: HomeContent }; lang: string } },
  { segments: ["localized", string] | undefined }
> = async (context) => {
  const lang = context.params?.segments?.[1] ?? "en";
  const homeContent = (await import(`#public/contents/index.${lang}.json`))
    .default as HomeContent;

  return {
    props: {
      _app: { initialData: { homeContent }, lang },
    },
  };
};

export default function Home() {
  return <HomePage />;
}
