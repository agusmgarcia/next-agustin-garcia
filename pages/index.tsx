import Head from "next/head";
import React, { useState } from "react";

import AboutMe from "#src/components/AboutMe";
import Companies from "#src/components/Companies";
import ContactMe from "#src/components/ContactMe";
import Footer from "#src/components/Footer";
import Hero from "#src/components/Hero";
import NavigationBar from "#src/components/NavigationBar";
import Technologies from "#src/components/Technologies";

import styles from "./index.module.scss";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Agustin Garcia :: Profile</title>
      </Head>

      <NavigationBar onMenuOpen={setMenuOpen} />
      <main className={`${styles.main} ${menuOpen ? styles.disabled : ""}`}>
        <Hero />
        <AboutMe />
        <Technologies />
        <Companies />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
