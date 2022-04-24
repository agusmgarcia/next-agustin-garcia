import github from "#public/assets/icon-github.svg";
import gmail from "#public/assets/icon-gmail.svg";
import linkedin from "#public/assets/icon-linkedin.svg";

const socialLinks: {
  src: string;
  alt: string;
  title: string;
  url: string;
}[] = [
  {
    src: linkedin.src,
    alt: "Linkedin logo",
    title: "Linkedin",
    url: "https://www.linkedin.com/in/agusss19",
  },
  {
    src: github.src,
    alt: "Github logo",
    title: "Github",
    url: "https://github.com/agusmgarcia",
  },
  {
    src: gmail.src,
    alt: "Gmail logo",
    title: "Gmail",
    url: "mailto:agusss.garcia19@gmail.com",
  },
];

export default function useFooter() {
  return { socialLinks };
}
