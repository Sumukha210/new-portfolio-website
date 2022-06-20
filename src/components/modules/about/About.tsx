import React from "react";
import { Container, Wrapper } from "./AboutStyles";
import NextImg from "next/image";
import Title from "@/elements/Title";
import Button from "@/elements/Button";
import { useRouter } from "next/router";
import AboutImage from "@/assets/AboutSvg.svg";

const About = () => {
  const route = useRouter();
  return (
    <Wrapper className="margin-top">
      <div className="container">
        <div className="inner-container">
          <Container>
            <div className="left">
              <NextImg src={AboutImage} />
            </div>

            <div className="right">
              <Title name="About Myself" />
              <p className="subtitle-5 description">
                Hello! i’m Sumukha k b, i have a passion for creating designs
                with code or better knows as a <span>Front End developer</span>.
                I am from sorab, india. I love creating visual and interactive
                designs that engage the user. My goal is to bring your ideas to
                life on the web.
              </p>
              <p className="subtitle-5 description">
                I’m worked as Front End developer in a startup company called
                <b> Beauty Wall Spot</b>, mangalore for almost 1 Year. Here i
                worked with building custom wordpress websites. I’m also worked
                with <b>Moonhive</b> company as intern for 3 months.
              </p>

              <div className="btnContainer">
                <Button
                  name="Contact Me"
                  marginTop="0rem"
                  btnHandler={() => {}}
                />
                <Button
                  name="Resume"
                  marginTop="0rem"
                  isOutlineBtn
                  btnHandler={() => route.push("/resume")}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
