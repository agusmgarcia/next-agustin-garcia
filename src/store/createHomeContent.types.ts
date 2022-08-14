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
    location: { content: string; title: string };
    personal: { content: string; title: string };
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
    toogler: { title: string };
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

export type HomeContentSlice = {
  homeContent: HomeContent;
};

export default HomeContentSlice;
