import Title from "@/elements/Title";
import React from "react";
import { Container, Content, Wrapper } from "./SkillsStyles";

const Skills = () => {
  return (
    <Wrapper className="margin-top">
      <div className="container">
        <div className="inner-container">
          <Container>
            <Title name="My Skills" />
            <Content></Content>
          </Container>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
