import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  margin-top: -3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-column-gap: 4rem;

  .right {
    color: var(--text-light);

    .description {
      line-height: 30px;
      font-weight: 400;

      &:last-of-type {
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
    }
  }

  .left {
    width: 100%;
  }
`;
