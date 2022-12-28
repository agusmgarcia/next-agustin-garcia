import dynamic from "next/dynamic";
import Head from "next/head";

import { useHomeContent } from "#src/store";

import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Companies from "./Companies";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import styles from "./HomePage.module.scss";
import HomePageProps from "./HomePage.types";
import NavigationBar from "./NavigationBar";
import Technologies from "./Technologies";

const Toast = dynamic(() => import("./Toast"), { ssr: false });

export default function HomePage(_: HomePageProps) {
  const { homeContent } = useHomeContent();
  if (homeContent === undefined) return <></>;

  return (
    <>
      <Head>
        <title>{homeContent.title}</title>
      </Head>

      <NavigationBar className={styles.navigationBar} />
      <main className={styles.main}>
        <Toast />
        <Banner className={styles.banner} />
        <AboutMe />
        <Technologies />
        <Companies />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
