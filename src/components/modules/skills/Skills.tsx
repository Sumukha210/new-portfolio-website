import React from "react";
import { Container, Content, Wrapper } from "./SkillsStyles";
import NextImage from "next/image";
import skillsImage from "@/assets/skills.svg";
import Intro from "./Intro";

const Skills = () => {
  return (
    <Wrapper className="margin-top" id="skillsSection">
      <div className="container">
        <div className="inner-container">
          <Container>
            <Content>
              <div className="left">
                <Intro />
              </div>

              <div className="right">
                <NextImage
                  src={skillsImage}
                  layout="responsive"
                  alt="skills image"
                />
              </div>
            </Content>
          </Container>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
