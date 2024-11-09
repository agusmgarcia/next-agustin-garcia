import dynamic from "next/dynamic";

import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Companies from "./Companies";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import type HomePageProps from "./HomePage.types";
import NavigationBar from "./NavigationBar";
import Technologies from "./Technologies";

export default function HomePage(_: HomePageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar className="fixed top-0 z-[1] flex-initial" />
      <main className="relative flex flex-auto flex-col">
        <Toast />
        <Banner className="absolute z-[-1]" />
        <AboutMe />
        <Technologies />
        <Companies />
        <ContactMe />
      </main>
      <Footer className="flex-initial" />
    </div>
  );
}

const Toast = dynamic(() => import("./Toast"), { ssr: false });
