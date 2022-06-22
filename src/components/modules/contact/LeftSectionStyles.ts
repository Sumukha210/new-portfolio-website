import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 1rem;
    text-align: center;
  }

  section {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      &:not(:first-of-type) {
        margin-top: 2rem;
      }
    }

    @media (max-width: 575.98px) {
      display: flex;
      align-items: center;
      &:not(:first-of-type) {
        margin-top: 2rem;
      }
    }

    div {
      &:first-of-type {
        background: var(--primary-gradient);
        height: 70px;
        width: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: 576px) and (max-width: 767.98px) {
          margin-inline: auto;
          margin-bottom: 1rem;
        }

        svg {
          height: 30px;
          width: 30px;
        }
        @media (max-width: 575.98px) {
          height: 50px;
          width: 50px;

          svg {
            height: 20px;
            width: 20px;
          }
        }
      }

      &:last-of-type {
        color: var(--text-light);
        margin-left: 1rem;

        @media (max-width: 380px) {
          .email span {
            display: block;
          }
        }

        & > * {
          font-weight: 500;
        }
      }
    }
  }
`;
