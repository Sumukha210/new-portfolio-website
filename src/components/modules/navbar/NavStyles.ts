import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  z-index: 100;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-light);
  padding: 14px 0;
  width: 100%;

  .logo {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
      font-weight: bold;
    }
  }

  .navMenu {
    display: flex;
    align-items: center;

    li {
      list-style: none;
      font-weight: 600;
      position: relative;
      cursor: pointer;

      &:after {
        content: "";
        position: absolute;
        bottom: -16px;
        left: 0%;
        width: 0%;
        height: 4px;
        background: var(--primary-gradient);
        transition: width 0.3s ease-in;
      }

      &:hover::after {
        width: 100%;
      }

      &:not(:first-of-type) {
        margin-left: 2rem;
      }
    }
  }
`;
