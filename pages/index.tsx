import { type GetStaticProps } from "next";

import { HomePage } from "#src/pages";
import { type HomeContent } from "#src/store";

export const getStaticProps: GetStaticProps<{
  _app: {
    initialsData: Partial<{ homeContent: HomeContent }>;
    pageLanguage: string;
    pageTitle: string;
  };
}> = async () => {
  const homeContent = (await import("#public/contents/home.en.json")).default;

  return {
    props: {
      _app: {
        initialsData: { homeContent },
        pageLanguage: "en",
        pageTitle: homeContent.title,
      },
    },
  };
};

export default function Home() {
  return <HomePage />;
}
