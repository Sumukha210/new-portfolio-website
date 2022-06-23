import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div``;

export const Content = styled.div`
  color: var(--text-light);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-column-gap: 4rem;

  @media (max-width: 991.98px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 2rem;

    .left {
      order: 2;
    }

    .right {
      order: 1;
    }
  }

  @media (max-width: 767.98px) {
    grid-row-gap: 2rem;
  }

  .left {
    .description {
      line-height: 30px;
      font-weight: 400;

      &:not(:first-of-type) {
        margin-top: 1rem;
      }
    }

    ul {
      margin-top: 1.5rem;
      margin-left: 1rem;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-row-gap: 14px;
      align-items: center;

      @media (max-width: 380px) {
        grid-row-gap: 14px;
        grid-column-gap: 1.9rem;
      }

      li {
        list-style-type: disclosure-closed;

        &::marker {
          color: var(--secondary-color);
        }
      }
    }
  }

  .right {
    @media (min-width: 768px) and (max-width: 991.98px) {
      & > span {
        height: 500px !important;
      }
    }
  }
`;

export const Card = styled.div``;
