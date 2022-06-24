import styled from "styled-components";

export const Nav = styled.div`
  --navBackgroundColor: rgba(0, 0, 0, 0.5);
  --navBlur: blur(2px);

  @media (max-width: 767.98px) {
    --navBackgroundColor: rgba(0, 0, 0, 0.95);
    --navBlur: blur(20px);
  }

  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  z-index: 100;

  background: var(--navBackgroundColor);
  backdrop-filter: var(--navBlur);

  @media (max-width: 767.98px) {
    &.activeMenu {
      transition: all 0.5s ease-in;
    }

    &:not(.activeMenu) {
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(6px);
      transition: all 0.5s ease-in;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-light);
  padding: 14px 0;
  width: 100%;

  .logo {
    font-family: var(--primary-font);
    color: var(--secondary-color);

    span {
      font-weight: 500;
    }
  }

  .mobileMenu {
    display: none;
  }

  .navMenu {
    ul {
      display: flex;
      align-items: center;
    }

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

        @media (max-width: 991.98px) {
          margin-left: 1.4rem;
        }
      }
    }
  }

  /* on small screen */
  @media (max-width: 767.98px) {
    .mobileMenu {
      display: block;

      svg {
        height: 25px;
        width: 30px;
      }
    }

    .navMenu {
      position: absolute;
      top: 60px;
      right: -150%;
      height: 100vh;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
      transition: right 0.7s ease-out;

      background: var(--navBackgroundColor);
      backdrop-filter: var(--navBlur);

      ul {
        flex-direction: column;
        align-items: flex-start;
        padding-top: 5rem;

        width: 540px;
        margin-inline: auto;
      }

      li {
        margin-left: 0px !important;
        font-size: 2.369rem; // 37px
        line-height: 50.52px;
        font-family: var(--primary-font);
        letter-spacing: 1px;

        margin-bottom: 3rem;
      }
    }

    @media (max-width: 575.98px) {
      .navMenu {
        ul {
          padding-top: 2.5rem;
          width: 90%;

          li {
            margin-bottom: 2.5rem;
          }
        }
      }
    }
  }

  /* Mobile menu open */
  &.mobileMenuOpen {
    .navMenu {
      right: 0%;
      transition: right 0.55s ease-out;
    }
  }
`;
