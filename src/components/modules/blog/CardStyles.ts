import styled from "styled-components";

export const CustomCard = styled.div`
  position: relative;
  background: var(--bg-secondary);

  figure {
    position: relative;
  }
`;

export const Content = styled.div`
  position: relative;
  padding: 1rem 1.5rem 2rem 1.5rem;
  color: var(--text-light);

  & > div:first-of-type {
  }

  @media (max-width: 575.98px) {
    padding: 1rem 1rem 1.5rem 1rem;
  }

  .title {
    font-family: var(--primary-font);
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: 0.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .description {
    margin-top: 0.5rem;
    font-weight: 500;
    opacity: 0.8;
  }
`;
