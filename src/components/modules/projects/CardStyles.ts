import styled from "styled-components";

export const CustomCard = styled.div`
  background: var(--bg-secondary);

  @media (max-width: 379.98px) {
    figure {
      & > span {
        height: 250px !important;
      }
    }
  }
`;

export const CardContent = styled.div`
  padding: 1rem 1.5rem 2rem 1.5rem;
  color: var(--text-light);

  @media (max-width: 575.98px) {
    padding: 1rem 1rem 1.5rem 1rem;
  }

  .title {
    font-family: var(--primary-font);
  }

  .tools {
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 1rem;

    .tool {
      padding: 0.8rem;
      text-align: center;
      background-color: var(--bg-primary);
      transition: background-color 0.3s ease-in;
      margin: 5px;

      &:hover {
        background-color: var(--secondary-color);

        span {
          opacity: 1;
        }
      }

      span {
        opacity: 0.9;
        transition: opacity 0.3s ease-in;
      }
    }
  }

  .content {
    margin-left: 10px;
  }

  .description {
    margin-top: 0.5rem;
    font-weight: 500;
    opacity: 0.8;
  }

  .btnContainer {
    margin-top: 0.5rem;

    button {
      &:first-of-type {
        margin-right: 1rem;
      }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
      button {
        min-width: 110px;
      }
    }

    @media (max-width: 379.98px) {
      button {
        min-width: 100px;
      }
    }
  }
`;
