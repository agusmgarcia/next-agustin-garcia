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
    alt: "Linkedin logo",
    src: linkedin.src,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/agusss19",
  },
  {
    alt: "Github logo",
    src: github.src,
    title: "Github",
    url: "https://github.com/agusmgarcia",
  },
  {
    alt: "Gmail logo",
    src: gmail.src,
    title: "Gmail",
    url: "mailto:agusss.garcia19@gmail.com",
  },
];

export default function useFooter() {
  return { socialLinks };
}
