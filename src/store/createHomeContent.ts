import { createMemoryStorageSlice } from "@agusmgarcia/swr";

import banner from "#public/assets/banner.png";
import cityparking from "#public/assets/company-cityparking.png";
import contaduria from "#public/assets/company-contaduria.png";
import facultad from "#public/assets/company-facultad.png";
import fullstacklabs from "#public/assets/company-fullstacklabs.png";
import mgmresorts from "#public/assets/company-mgmresorts.png";
import novit from "#public/assets/company-novit.png";
import supremegolf from "#public/assets/company-supremegolf.png";
import uruit from "#public/assets/company-uruit.png";
import github from "#public/assets/icon-github.svg";
import gmail from "#public/assets/icon-gmail.svg";
import linkedin from "#public/assets/icon-linkedin.svg";
import azure from "#public/assets/logo-azure.svg";
import css from "#public/assets/logo-css.svg";
import firebase from "#public/assets/logo-firebase.svg";
import git from "#public/assets/logo-git.svg";
import golang from "#public/assets/logo-golang.svg";
import graphql from "#public/assets/logo-graphql.svg";
import html from "#public/assets/logo-html.svg";
import javascript from "#public/assets/logo-javascript.svg";
import net from "#public/assets/logo-net.svg";
import nextjs from "#public/assets/logo-nextjs.svg";
import nodejs from "#public/assets/logo-nodejs.svg";
import react from "#public/assets/logo-react.svg";
import redux from "#public/assets/logo-redux.svg";
import sass from "#public/assets/logo-sass.svg";
import typescript from "#public/assets/logo-typescript.svg";
import profile from "#public/assets/profile.png";

import type HomeContentSlice from "./createHomeContent.types";

const createHomeContent = createMemoryStorageSlice<HomeContentSlice>(
  (store) => ({
    initialData: {
      aboutMe: {
        description:
          "I'm a software engineer who loves creating and architecting new apps using the best design patterns. My favourite languages are C#, Typescript and Golang.",
        id: "aboutMe",
        image: { alt: "Author's face", src: profile.src },
        name: "Agustin Garcia",
      },
      banner: { alt: "Banner", src: banner.src },
      companies: {
        id: "companies",
        links: [
          {
            href: "https://www.mgmresorts.com/",
            image: {
              alt: "MGM Resorts logo",
              src: mgmresorts.src,
            },
            target: "_blank",
            title: "MGM Resorts",
          },
          {
            href: "https://www.fullstacklabs.co/",
            image: {
              alt: "Fullstack Labs logo",
              src: fullstacklabs.src,
            },
            target: "_blank",
            title: "Fullstack Labs",
          },
          {
            href: "https://supremegolf.com/",
            image: {
              alt: "Supreme Golf logo",
              src: supremegolf.src,
            },
            target: "_blank",
            title: "Supreme Golf",
          },
          {
            href: "https://uruit.com/",
            image: {
              alt: "UruIT logo",
              src: uruit.src,
            },
            target: "_blank",
            title: "UruIT",
          },
          {
            href: "https://city-parking.com/",
            image: {
              alt: "City Parking logo",
              src: cityparking.src,
            },
            target: "_blank",
            title: "City Parking",
          },
          {
            href: "https://www.novit.com.ar/",
            image: {
              alt: "Novit logo",
              src: novit.src,
            },
            target: "_blank",
            title: "Novit",
          },
          {
            href: "https://gba.gob.ar/",
            image: {
              alt: "General Accounting Office of the Province of Buenos Aires logo",
              src: contaduria.src,
            },
            target: "_blank",
            title: "General Accounting Office of the Province of Buenos Aires",
          },
          {
            href: "https://www.info.unlp.edu.ar/",
            image: {
              alt: "Faculty of computer science UNLP logo",
              src: facultad.src,
            },
            target: "_blank",
            title: "Faculty of computer science UNLP",
          },
        ],
        subtitle: "Companies",
      },
      contactMe: {
        id: "contactMe",
        inputs: {
          company: {
            label: "Company",
            placeholder: "Company Name",
          },
          details: {
            label: "Details",
            placeholder: "Project Details *",
          },
          email: {
            label: "Email",
            placeholder: "Email Address *",
          },
          name: {
            label: "Name",
            placeholder: "Name *",
          },
          phone: {
            label: "Phone",
            placeholder: "Phone Number",
          },
        },
        submit: { text: "Submit" },
        subtitle: "Let's talk",
      },
      footer: {
        information: {
          content:
            "This website was developed by myself using NextJS, Typescript, Imgix and Firebase. This application has no commercial purposes. All the assets belong to the corresponding owners.",
          title: "Agustin Garcia",
        },
        location: {
          content: "Montevideo, Uruguay",
          title: "Location",
        },
        socialLinks: {
          content: [
            {
              href: "https://www.linkedin.com/in/agusss19",
              image: {
                alt: "Linkedin logo",
                src: linkedin.src,
              },
              target: "_blank",
              title: "Linkedin",
            },
            {
              href: "https://github.com/agusmgarcia",
              image: {
                alt: "Github logo",
                src: github.src,
              },
              target: "_blank",
              title: "Github",
            },
            {
              href: "mailto:agusss.garcia19@gmail.com",
              image: {
                alt: "Gmail logo",
                src: gmail.src,
              },
              target: "_blank",
              title: "Gmail",
            },
          ],
          title: "Social Links",
        },
      },
      navigationBar: {
        aboutMe: { image: { alt: "About Me", src: profile.src } },
        companies: { text: "Companies" },
        contactMe: { text: "Contact Me" },
        downloadCV: {
          download: "agustin-garcia-cv.pdf",
          href: "https://github.com/agusmgarcia/tex-cv/raw/master/main.english.pdf",
          text: "Download CV",
        },
        name: "Agustin Garcia",
        technologies: { text: "Technologies" },
        toogler: {
          closed: { title: "Open the menu to access all the links" },
          open: { title: "Close the menu" },
        },
      },
      technologies: {
        id: "technologies",
        links: [
          {
            href: "https://nextjs.org/",
            image: {
              alt: "NextJS logo",
              src: nextjs.src,
            },
            target: "_blank",
            title: "NextJS",
          },
          {
            href: "https://reactjs.org/",
            image: {
              alt: "React logo",
              src: react.src,
            },
            target: "_blank",
            title: "React",
          },
          {
            href: "https://redux.js.org/",
            image: {
              alt: "Redux logo",
              src: redux.src,
            },
            target: "_blank",
            title: "Redux",
          },
          {
            href: "https://www.typescriptlang.org/",
            image: {
              alt: "Typescript logo",
              src: typescript.src,
            },
            target: "_blank",
            title: "Typescript",
          },
          {
            href: "https://www.javascript.com/",
            image: {
              alt: "Javascript logo",
              src: javascript.src,
            },
            target: "_blank",
            title: "Javascript",
          },
          {
            href: "https://nodejs.org/",
            image: {
              alt: "NodeJS logo",
              src: nodejs.src,
            },
            target: "_blank",
            title: "NodeJS",
          },
          {
            href: "https://graphql.org/",
            image: {
              alt: "GraphQL logo",
              src: graphql.src,
            },
            target: "_blank",
            title: "GraphQL",
          },
          {
            href: "https://dotnet.microsoft.com/",
            image: {
              alt: ".Net Core logo",
              src: net.src,
            },
            target: "_blank",
            title: ".Net Core",
          },
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            image: {
              alt: "CSS logo",
              src: css.src,
            },
            target: "_blank",
            title: "CSS",
          },
          {
            href: "https://golang.org/",
            image: {
              alt: "Golang logo",
              src: golang.src,
            },
            target: "_blank",
            title: "Golang",
          },
          {
            href: "https://azure.microsoft.com/",
            image: {
              alt: "Azure logo",
              src: azure.src,
            },
            target: "_blank",
            title: "Azure",
          },
          {
            href: "https://git-scm.com/",
            image: {
              alt: "Git logo",
              src: git.src,
            },
            target: "_blank",
            title: "Git",
          },
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            image: {
              alt: "HTML logo",
              src: html.src,
            },
            target: "_blank",
            title: "HTML",
          },
          {
            href: "https://sass-lang.com/",
            image: {
              alt: "SASS logo",
              src: sass.src,
            },
            target: "_blank",
            title: "SASS",
          },
          {
            href: "https://firebase.google.com/",
            image: {
              alt: "Firebase logo",
              src: firebase.src,
            },
            target: "_blank",
            title: "Firebase",
          },
        ],
        subtitle: "Technologies",
      },
      title: "Agustin Garcia :: Profile",
    },
    name: "homeContent",
    onInit: () => store.get().homeContent.fetch({}),
  })
);

export default createHomeContent;
