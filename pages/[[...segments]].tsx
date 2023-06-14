import type { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { HomePage } from "#src/pages";
import { HomeContent } from "#src/store";
import { deepEqual } from "#src/utils";

export const getStaticPaths: GetStaticPaths<{
  segments: string[] | undefined;
}> = () => {
  return {
    fallback: false,
    paths: languages
      .flatMap<{ params: { segments: string[] | undefined } }>((l) =>
        Object.values(pages).map((p) => ({
          params: { segments: ["localized", l, ...p.paths] },
        }))
      )
      .concat(
        Object.values(pages).map((p) => ({ params: { segments: p.paths } }))
      ),
  };
};

export const getStaticProps: GetStaticProps<
  {
    _app: {
      initialsData: Partial<SpecificContent>;
      pageLanguage: string;
      pageTitle: string;
    };
    _component: {
      page: keyof typeof pages;
    };
  },
  {
    segments:
      | ["localized", string, ...(typeof pages)[keyof typeof pages]["paths"]]
      | [...(typeof pages)[keyof typeof pages]["paths"]];
  }
> = async (context) => {
  const language: string =
    context.params?.segments === undefined
      ? "en"
      : context.params.segments.length <= 1
      ? "en"
      : context.params.segments[0] !== "localized"
      ? "en"
      : context.params.segments[1];

  const segments: string[] =
    context.params?.segments === undefined
      ? []
      : context.params.segments.length === 0
      ? []
      : context.params.segments.length === 1
      ? context.params.segments
      : context.params.segments[0] === "localized"
      ? context.params.segments.slice(2)
      : context.params.segments;

  const matches = Object.keys(pages).filter((k) =>
    deepEqual(pages[k as keyof typeof pages].paths, segments)
  ) as (keyof typeof pages)[];

  if (matches.length !== 1) throw new Error("Unexpected error");
  const page = matches[0];

  const content = (await import(`#public/contents/${page}.${language}.json`))
    .default as SpecificContent[keyof SpecificContent];

  return {
    props: {
      _app: {
        initialsData: { [`${page}Content`]: content },
        pageLanguage: language,
        pageTitle: content.title,
      },
      _component: { page },
    },
  };
};

export default function Page({ page }: { page: keyof typeof pages }) {
  switch (page) {
    case "home":
      return <HomePage />;
  }
}

const languages = ["en", "es"] as const;
const pages = { home: { paths: [] } };

type SpecificContent = {
  homeContent: HomeContent;
};
