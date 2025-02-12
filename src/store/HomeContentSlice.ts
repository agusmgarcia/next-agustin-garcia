import {
  createServerSlice,
  type CreateServerSliceTypes,
} from "@agusmgarcia/react-core";

export type HomeContent = {
  aboutMe: { description: string; id: string; image: Image; name: string };
  banner: Image;
  companies: {
    id: string;
    links: { href: string; image: Image; target: string; title: string }[];
    subtitle: string;
  };
  contactMe: {
    feedback: { error: string; success: string };
    id: string;
    inputs: {
      company: { label: string; placeholder: string };
      details: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      name: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
    };
    submit: { text: string };
    subtitle: string;
  };
  footer: {
    information: { content: string; title: string };
    location: { content: string; title: string };
    socialLinks: {
      content: { href: string; image: Image; target: string; title: string }[];
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
    links: { href: string; image: Image; target: string; title: string }[];
    subtitle: string;
  };
  title: string;
};

type Image = { alt: string; src: string };

export type HomeContentSlice = CreateServerSliceTypes.SliceOf<
  "homeContent",
  HomeContent
>;

export default createServerSlice<HomeContentSlice>("homeContent", () =>
  import("#public/contents/home.en.json").then((result) => result.default),
);
