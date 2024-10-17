export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string[];
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: "Suraj Jagtap",
  subtitle: "",
  description:
    "Home page for Suraj Jagtap, a software engineer works on React, LLM, GenAI.",
  image: {
    src: "/images/hello-world/profile.webp",
    alt: "Suraj Jagtap",
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Projects",
      href: "/projects",
    },
  ],
  hero: {
    title: "Hi there, I'am **Suraj Jagtap**.",
    text: [
      "- Software engineer based in Pune, India.",
      "- Work on Frontend, React, Nodejs.",
      "- Working on Gen AI, LLMs, langchain.",
      "- Mobile apps in React Native and Flutter",
    ],
    image: {
      src: "/images/hello-world/profile.jpg",
      alt: "Suraj Jagtap",
    },
    actions: [],
  },
};

export default siteConfig;
