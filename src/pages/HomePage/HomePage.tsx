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

export default function HomePage(_: HomePageProps) {
  const { homeContent } = useHomeContent();

  return (
    <>
      <Head>
        <title>{homeContent.title}</title>
      </Head>

      <NavigationBar className={styles.navigationBar} />
      <main>
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