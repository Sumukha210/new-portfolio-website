import React from "react";
import { Container, Wrapper } from "./AboutStyles";
import NextImg from "next/image";
import Title from "@/elements/Title";

const About = () => {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,128L48,128C96,128,192,128,288,117.3C384,107,480,85,576,101.3C672,117,768,171,864,181.3C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>

      <div className="container">
        <div className="inner-container">
          <Container>
            <div className="left">
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
            </div>

            <div className="right">
              <NextImg
                src={"/AboutSvg.svg"}
                layout="responsive"
                width="100%"
                height="100%"
              />
            </div>
          </Container>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
