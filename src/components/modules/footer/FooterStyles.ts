import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 0;
  background: var(--bg-secondary);
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    flex: 1;

    color: var(--text-light);
    & > * {
      font-family: var(--primary-font);
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 600;
    }
  }

  .copyright {
    flex: 1;
    color: var(--text-light);
    opacity: 0.8;
    & > * {
      font-weight: 500;
    }
  }

  .right {
    display: flex;
    align-items: center;
    /* flex: 1; */

    a {
      --svgRadius: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      color: var(--text-light);
      background: var(--bg-gradient3);
      background-size: 300%;
      background-position: left;
      transition: all 0.3s ease-in;

      height: var(--svgRadius);
      width: var(--svgRadius);
      border-radius: 50%;

      svg {
        display: inline-block;
        height: calc(var(--svgRadius) - 12px);
        width: calc(var(--svgRadius) - 12px);
      }

      &:hover {
        background-position: right;
      }

      margin: 0 6px;
    }
  }
`;
