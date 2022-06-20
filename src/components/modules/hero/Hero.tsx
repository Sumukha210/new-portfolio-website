import useIsomorphicLayoutEffect from "@/utils/useIsomorphicEffect";
import React, { useRef } from "react";
import styled from "styled-components";
import { Wrapper, Canvas, Container, Content } from "./HeroStyles";
import Button from "@/elements/Button";
import { useRouter } from "next/router";

const Hero = () => {
  const canvasRef = useRef(null);
  const route = useRouter();

  const lazyLoadSmokeEffect = async (canvas: any) => {
    const { smokeSimulation } = await import("./SmokeEffect");
    smokeSimulation(canvas);
  };

  useIsomorphicLayoutEffect(() => {
    if (canvasRef?.current && window.innerWidth >= 1200) {
      lazyLoadSmokeEffect(canvasRef.current);
    }
  }, []);

  return (
    <Wrapper>
      <Canvas ref={canvasRef}></Canvas>
      <Container>
        <div className="container">
          <div className="inner-container">
            <Content>
              <h4 className="subtitle-4 caption">Hello,</h4>
              <h1 className="heading-1 title">
                I’m <span>Sumukha K B</span>
              </h1>
              <h2 className="heading-1 subtitle">
                I build things for the web.
              </h2>

              <Button
                name="Resume"
                isOutlineBtn={true}
                btnHandler={() => route.push("/resume")}
              />
            </Content>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
