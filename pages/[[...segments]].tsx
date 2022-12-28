import type { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { HomePage } from "#src/pages";
import { HomeContent } from "#src/store";

export const getStaticPaths: GetStaticPaths<{
  segments: string[] | undefined;
}> = () => {
  return {
    fallback: false,
    paths: languages
      .flatMap((l) =>
        pages.map((p) => ({
          params: { segments: ["localized", l, p] as string[] | undefined },
        }))
      )
      .concat(
        languages.map((l) => ({ params: { segments: ["localized", l] } }))
      )
      .concat(pages.map((p) => ({ params: { segments: [p] } })))
      .concat({ params: { segments: undefined } }),
  };
};

export const getStaticProps: GetStaticProps<
  {
    _app: {
      fallbacksData: Partial<SpecificContent>;
      lang: string;
    };
    _component: {
      page: typeof pages[number] | "home";
    };
  },
  {
    segments:
      | ["localized", typeof languages[number], typeof pages[number]]
      | ["localized", typeof languages[number]]
      | [typeof pages[number]]
      | undefined;
  }
> = async (context) => {
  const lang: typeof languages[number] =
    context.params?.segments === undefined
      ? "en"
      : context.params.segments.length === 1
      ? "en"
      : context.params.segments[1];

  const page: typeof pages[number] | "home" =
    context.params?.segments === undefined
      ? "home"
      : context.params.segments.length === 1
      ? context.params.segments[0]
      : context.params.segments.length === 2
      ? "home"
      : context.params.segments[2];

  const content = (await import(`#public/contents/${page}.${lang}.json`))
    .default as SpecificContent[keyof SpecificContent];

  return {
    props: {
      _app: {
        fallbacksData: {
          [`${page}Content`]: content,
        },
        lang,
      },
      _component: { page },
    },
  };
};

export default function Page({
  page,
}: {
  page: typeof pages[number] | "home";
}) {
  switch (page) {
    case "home":
      return <HomePage />;
  }
}

const languages = ["en", "es"] as const;
const pages = [] as const;

type SpecificContent = {
  homeContent: HomeContent;
};
