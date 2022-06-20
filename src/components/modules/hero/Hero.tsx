import useIsomorphicLayoutEffect from "@/utils/useIsomorphicEffect";
import React, { useRef } from "react";
import styled from "styled-components";
import { smokeSimulation } from "./SmokeEffect";
import { Wrapper, Canvas, Container, Content } from "./HeroStyles";

const Hero = () => {
  const canvasRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (canvasRef?.current) {
      smokeSimulation(canvasRef.current);
    }
  }, []);

  return (
    <Wrapper>
      <Canvas ref={canvasRef}></Canvas>
      <Container>
        <div className="container">
          <div className="inner-container">
            <Content>
              <h4 className="subtitle-4">Hello,</h4>
              <h1 className="heading-1 title">
                I’m <span>Sumukha K B</span>
              </h1>
              <h2 className="heading-1 subtitle">
                I build things for the web.
              </h2>
            </Content>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
