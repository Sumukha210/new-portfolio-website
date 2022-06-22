import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 0;
  background: var(--bg-secondary);

  position: absolute;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: space-between;
  align-items: center;

  .left {
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
    color: var(--text-light);
    opacity: 0.8;
    & > * {
      font-weight: 500;
    }
  }

  .right {
    display: flex;
    align-items: center;
    margin-left: auto;

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

  @media (max-width: 991.98px) {
    .left {
      order: 1;
    }

    .right {
      order: 2;
    }

    .copyright {
      order: 3;
    }

    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
    text-align: center;

    .right {
      margin-inline: auto;
    }
  }
`;
