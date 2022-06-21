import { CustomBtn } from "@/elements/Button";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  .flex {
    display: flex;

    section:first-of-type {
      margin-right: 1rem;
    }

    section:last-of-type {
      margin-left: 1rem;
    }

    @media (max-width: 575.98px) {
      section:first-of-type {
        margin-right: 0.5rem;
      }

      section:last-of-type {
        margin-left: 0.5rem;
      }
    }
  }

  .responseText {
    margin-top: 1rem;
    & > * {
      font-weight: 600;
    }
  }

  section {
    flex: 1;

    input,
    textarea {
      background: transparent;
      outline: none;
      border: 2px solid var(--secondary-color);
      width: 100%;
      color: var(--text-light);
      padding: 1rem;

      &::placeholder {
        color: var(--text-light);
      }
    }

    input {
      height: 50px;
      border-radius: 50px;
    }

    textarea {
      border-radius: 15px;
      margin-top: 2rem;
    }
  }

  .btnContainer {
    text-align: end;
  }
`;

const rotate = keyframes`
   to {
        transform: rotate(360deg);
      }
`;

export const SubmitBtn = styled(CustomBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  text-align: center;
  min-width: 150px;

  &:disabled {
    opacity: 0.9;
  }

  span {
    display: inline-block;
    &:last-of-type {
      margin-left: 6px;
    }
  }

  .loader {
    background: transparent;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-top-color: #fff;
    height: 20px;
    width: 20px;
    animation: ${rotate} 600ms linear infinite;
  }
`;
