import Title from "@/elements/Title";
import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { projectLists } from "./ProjectLists";

const Project = () => {
  return (
    <Wrapper className="margin-top" id="projectSection">
      <div className="container">
        <div className="inner-container">
          <Title name="Projects" />
          <Grid>
            {projectLists.map((item) => (
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
    max-width: 100vw;
    width: 100vw;
    padding: 0 1rem;
    margin: 0 calc(-50vw + 50%);
  }
`;
