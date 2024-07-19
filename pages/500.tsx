import { type GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const getStaticProps: GetStaticProps<{
  _app: {
    initialsData: {};
    pageLanguage: string;
    pageTitle: string;
  };
}> = () => {
  return {
    props: {
      _app: {
        initialsData: {},
        pageLanguage: "en",
        pageTitle: "Error",
      },
    },
  };
};

export default function Error() {
  const { replace } = useRouter();

  useEffect(() => {
    replace("/");
  }, [replace]);

  return <></>;
}
