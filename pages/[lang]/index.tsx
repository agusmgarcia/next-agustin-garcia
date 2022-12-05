import type { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { HomePage } from "#src/pages";
import { HomeContent, StoreProvider } from "#src/store";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: false,
    paths: [{ params: { lang: "en" } }, { params: { lang: "es" } }],
  };
};

export const getStaticProps: GetStaticProps<{
  homeContent: HomeContent;
  lang: string;
}> = async (context) => {
  const lang = context.params?.lang;

  if (lang === undefined)
    throw new Error("'context.params.lang' shouldn't be undefined");

  if (Array.isArray(lang))
    throw new Error("'context.params.lang' shouldn't be an array");

  return {
    props: {
      homeContent: (await import(`#public/contents/index.${lang}.json`))
        .default,
      lang,
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
