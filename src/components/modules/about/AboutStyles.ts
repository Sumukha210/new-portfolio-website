import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-column-gap: 4rem;

  .left {
    color: var(--text-light);

    .title {
      margin-bottom: 2rem;
      position: relative;
      color: var(--secondary-color);

      &::after {
        content: "";
        display: inline-block;
        margin-top: 8px;
        width: 140px;
        height: 3px;
        margin-left: 2px;
        /* background: var(--primary-gradient); */
        background-color: var(--text-light);
      }
    }

    .description {
      line-height: 30px;
      font-weight: 400;

      &:last-of-type {
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
    }
  }
`;
