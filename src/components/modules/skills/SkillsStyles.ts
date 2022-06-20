import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div``;

export const Content = styled.div`
  color: var(--text-light);
  max-width: 90%;

  .left {
    .description {
      line-height: 30px;
      font-weight: 400;

      &:not(:first-of-type) {
        margin-top: 1rem;
      }
    }
  }

  .right {
    margin-top: 2rem;

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1rem;
      align-items: center;

      .tool {
        background: var(--bg-secondary);
        text-align: center;
        padding: 1rem 10px;
        position: relative;
        overflow: hidden;
        font-weight: 600;
        /* border-radius: 30px; */

        span {
          display: inline-block;
          position: relative;
          z-index: 4;
        }

        &::before {
          content: "";
          width: 0%;
          position: absolute;
          top: 0%;
          height: 100%;
          background: var(--bg-gradient4);
          transition: all 0.5s ease-out;
          z-index: 1;
          left: 0%;
        }

        &:hover {
          &::before {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const Card = styled.div``;
