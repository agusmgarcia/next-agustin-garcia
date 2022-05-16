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

const technologies: {
  src: string;
  alt: string;
  title: string;
  url: string;
}[] = [
  {
    alt: "NextJS logo",
    src: nextjs.src,
    title: "NextJS",
    url: "https://nextjs.org/",
  },
  {
    alt: "React logo",
    src: react.src,
    title: "React",
    url: "https://reactjs.org/",
  },
  {
    alt: "Redux logo",
    src: redux.src,
    title: "Redux",
    url: "https://redux.js.org/",
  },
  {
    alt: "Typescript logo",
    src: typescript.src,
    title: "Typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    alt: "Javascript logo",
    src: javascript.src,
    title: "Javascript",
    url: "https://www.javascript.com/",
  },
  {
    alt: "NodeJS logo",
    src: nodejs.src,
    title: "NodeJS",
    url: "https://nodejs.org/",
  },
  {
    alt: "GraphQL logo",
    src: graphql.src,
    title: "GraphQL",
    url: "https://graphql.org/",
  },
  {
    alt: ".Net Core logo",
    src: net.src,
    title: ".Net Core",
    url: "https://dotnet.microsoft.com/",
  },
  {
    alt: "CSS logo",
    src: css.src,
    title: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    alt: "Golang logo",
    src: golang.src,
    title: "Golang",
    url: "https://golang.org/",
  },
  {
    alt: "Azure logo",
    src: azure.src,
    title: "Azure",
    url: "https://azure.microsoft.com/",
  },
  {
    alt: "Git logo",
    src: git.src,
    title: "Git",
    url: "https://git-scm.com/",
  },
  {
    alt: "HTML logo",
    src: html.src,
    title: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    alt: "SASS logo",
    src: sass.src,
    title: "SASS",
    url: "https://sass-lang.com/",
  },
  {
    alt: "Firebase logo",
    src: firebase.src,
    title: "Firebase",
    url: "https://firebase.google.com/",
  },
];

export default function useTechnologies() {
  return { technologies };
}
