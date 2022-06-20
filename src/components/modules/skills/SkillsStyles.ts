import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  align-items: center;
  color: var(--text-light);

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
    /* align-self: self-end; */

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
      align-items: center;

      .tool {
        background: var(--bg-secondary);
        text-align: center;
        padding: 2.5rem 10px;
        position: relative;
        overflow: hidden;

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

        /* &:hover {
          background: var(--bg-gradient1);
        } */
      }
    }
  }
`;

export const Card = styled.div``;
