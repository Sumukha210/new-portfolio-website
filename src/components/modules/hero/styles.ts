import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background: black;
`;

export const Canvas = styled.canvas`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 3;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  right: 0%;
  z-index: 4;
  transform: translateY(-50%);
`;

export const Content = styled.div`
  color: var(--text-light);
  position: relative;
  z-index: 3;

  .title {
    span {
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .subtitle {
    opacity: 0.7;
    font-weight: 600;
  }
`;
