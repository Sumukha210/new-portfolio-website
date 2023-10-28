import canaraEveningCollege from "@/assets/canaraEveningCollege.png";
import ekart from "@/assets/ekart.png";
import mangaloremath from "@/assets/mangaloremath.png";
import platino from "@/assets/platino.png";
import { ProjectTypes } from "./types";

export const projectLists: ProjectTypes[] = [
  {
    title: "Canara Evening College",
    description:
      "A Portfolio website for Canara evening college client, mangalore",
    imageSrc: canaraEveningCollege,
    liveDemoLink: "http://canaraeveningcollege.org/",
    isCodeAvailable: false,
    tools: [
      "Wordpress",
      "SASS",
      "Bootstrap",
      "Javascript",
      "Webpack",
      "GSAP 3",
    ],
  },
  {
    title: "Ramakrishna Ashrama",
    description:
      "A Portfolio website for Ramakrishna Ashrama client, mangalore",
    imageSrc: mangaloremath,
    isCodeAvailable: false,
    liveDemoLink: "https://mangaloremath.in/",
    tools: [
      "Wordpress",
      "SASS",
      "Bootstrap",
      "Javascript",
      "Webpack",
      "GSAP 3",
    ],
  },
  // {
  //   title: "E-Kart",
  //   description: "A Fullstack e-commerce personal website.(Hosted on Heroko)",
  //   imageSrc: ekart,
  //   liveDemoLink: "https://e-kart.netlify.app/",
  //   codeLink: "https://github.com/Sumukha210/E-kart-website",
  //   tools: ["React.js", "Node.js", "Mongo DB", "Bootstrap", "SASS"],
  // },
  {
    title: "Platino",
    description: "A Portfolio resort booking website for platino resort.",
    imageSrc: platino,
    liveDemoLink: "https://platino-resort.vercel.app/",
    codeLink: "https://github.com/Sumukha210/platino-resort",
    tools: ["Next.js", "Typescript", "Mongo DB", "Styled Components", "Gsap"],
  },
];
