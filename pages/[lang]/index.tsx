import type { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { HomePage } from "#src/pages";

export const getStaticPaths: GetStaticPaths = () => {
  return { fallback: false, paths: [{ params: { lang: "en" } }] };
};

export const getStaticProps: GetStaticProps<{ lang: string }> = (context) => {
  const lang = context.params?.lang;

  if (lang === undefined)
    throw new Error("'context.params.lang' shouldn't be undefined");

  if (Array.isArray(lang))
    throw new Error("'context.params.lang' shouldn't be an array");

  return { props: { lang } };
};

export default function Home() {
  return <HomePage />;
}
