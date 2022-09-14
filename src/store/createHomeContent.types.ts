import { Slice } from "@agusmgarcia/swr";

type Image = {
  alt: string;
  src: string;
};

type HomeContent = {
  aboutMe: {
    description: string;
    id: string;
    image: Image;
    name: string;
  };
  banner: Image;
  companies: {
    id: string;
    links: {
      href: string;
      image: Image;
      target: string;
      title: string;
    }[];
    subtitle: string;
  };
  contactMe: {
    id: string;
    inputs: {
      company: { ["aria-label"]: string; placeholder: string };
      details: { ["aria-label"]: string; placeholder: string };
      email: { ["aria-label"]: string; placeholder: string };
      name: { ["aria-label"]: string; placeholder: string };
      phone: { ["aria-label"]: string; placeholder: string };
    };
    submit: { text: string };
    subtitle: string;
  };
  footer: {
    information: { content: string; title: string };
    location: { content: string; title: string };
    socialLinks: {
      content: {
        href: string;
        image: Image;
        target: string;
        title: string;
      }[];
      title: string;
    };
  };
  navigationBar: {
    aboutMe: { image: Image };
    companies: { text: string };
    contactMe: { text: string };
    downloadCV: { download: string; href: string; text: string };
    name: string;
    technologies: { text: string };
    toogler: { closed: { title: string }; open: { title: string } };
  };
  technologies: {
    id: string;
    links: {
      href: string;
      image: Image;
      target: string;
      title: string;
    }[];
    subtitle: string;
  };
  title: string;
};

type HomeContentSlice = Slice<"homeContent", {}, HomeContent, {}, void>;

export default HomeContentSlice;
