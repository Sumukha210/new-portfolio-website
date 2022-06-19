import useIsomorphicLayoutEffect from "@/utils/useIsomorphicEffect";
import React, { useRef } from "react";
import styled from "styled-components";
import { smokeSimulation } from "./SmokeEffect";

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
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div``;

const Canvas = styled.canvas`
  height: 100vh;
  width: 100%;
  background: black;
`;
