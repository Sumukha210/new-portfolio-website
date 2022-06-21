import React from "react";
import { ProjectTypes } from "./types";
import canaraEveningCollege from "@/assets/canaraEveningCollege.png";
import mangaloremath from "@/assets/mangaloremath.png";
import ekart from "@/assets/ekart.png";
import platino from "@/assets/platino.png";
import styled from "styled-components";
import Title from "@/elements/Title";
import Card from "./Card";

const projects: ProjectTypes[] = [
  {
    title: "Canara Evening College",
    description:
      "A Portfolio website for Canara evening college client, mangalore",
    imageSrc: canaraEveningCollege,
    liveDemoLink: "http://canaraeveningcollege.org/",
    isCodeAvailable: false,
    tools: ["Wordpress", "SASS", "Bootstrap", "Javascript"],
  },
  {
    title: "Ramakrishna Ashrama",
    description:
      "A Portfolio website for Ramakrishna Ashrama client, mangalore",
    imageSrc: mangaloremath,
    isCodeAvailable: false,
    liveDemoLink: "https://mangaloremath.in/",
    tools: ["Wordpress", "SASS", "Bootstrap", "Javascript", "Webpack"],
  },
  {
    title: "E-Kart",
    description: "A Fullstack e-commerce personal website.(Hosted on Heroko)",
    imageSrc: ekart,
    liveDemoLink: "https://e-kart.netlify.app/",
    codeLink: "https://github.com/Sumukha210/E-kart-website",
    tools: ["React.js", "Node.js", "Mongo DB", "Bootstrap", "SASS"],
  },
  {
    title: "Platino",
    description: "A Portfolio resort booking website for platino resort.",
    imageSrc: platino,
    liveDemoLink: "https://platino-resort.vercel.app/",
    codeLink: "https://github.com/Sumukha210/platino-resort",
    tools: ["Next.js", "Typescript", "Mongo DB", "Styled Components", "Gsap"],
  },
];

const Project = () => {
  return (
    <Wrapper className="margin-top">
      <div className="container">
        <div className="inner-container">
          <Title name="Projects" />
          <Grid>
            {projects.map(item => (
              <Card {...item} key={item.title} />
            ))}
          </Grid>
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
    max-width: 100vw;
    width: 100vw;
    padding: 0 1rem;
    margin: 0 calc(-50vw + 50%);
  }
`;
