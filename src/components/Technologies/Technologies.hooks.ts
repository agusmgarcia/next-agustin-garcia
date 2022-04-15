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
    src: nextjs.src,
    alt: "NextJS logo",
    title: "NextJS",
    url: "https://nextjs.org/",
  },
  {
    src: react.src,
    alt: "React logo",
    title: "React",
    url: "https://reactjs.org/",
  },
  {
    src: redux.src,
    alt: "Redux logo",
    title: "Redux",
    url: "https://redux.js.org/",
  },
  {
    src: typescript.src,
    alt: "Typescript logo",
    title: "Typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    src: javascript.src,
    alt: "Javascript logo",
    title: "Javascript",
    url: "https://www.javascript.com/",
  },
  {
    src: nodejs.src,
    alt: "NodeJS logo",
    title: "NodeJS",
    url: "https://nodejs.org/",
  },
  {
    src: graphql.src,
    alt: "GraphQL logo",
    title: "GraphQL",
    url: "https://graphql.org/",
  },
  {
    src: net.src,
    alt: ".Net Core logo",
    title: ".Net Core",
    url: "https://dotnet.microsoft.com/",
  },
  {
    src: css.src,
    alt: "CSS logo",
    title: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    src: golang.src,
    alt: "Golang logo",
    title: "Golang",
    url: "https://golang.org/",
  },
  {
    src: azure.src,
    alt: "Azure logo",
    title: "Azure",
    url: "https://azure.microsoft.com/",
  },
  {
    src: git.src,
    alt: "Git logo",
    title: "Git",
    url: "https://git-scm.com/",
  },
  {
    src: html.src,
    alt: "HTML logo",
    title: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    src: sass.src,
    alt: "SASS logo",
    title: "SASS",
    url: "https://sass-lang.com/",
  },
  {
    src: firebase.src,
    alt: "Firebase logo",
    title: "Firebase",
    url: "https://firebase.google.com/",
  },
];

export default function useTechnologies() {
  return { technologies };
}
