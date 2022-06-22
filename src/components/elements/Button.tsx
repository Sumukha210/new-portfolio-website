import React from "react";
import styled, { css } from "styled-components";

interface CustomBtnProps {
  isOutlineBtn?: boolean;
  isPrimaryGradient?: boolean;
  marginTop?: string;
  size?: "normal" | "small";
}

interface ButtonProps extends CustomBtnProps {
  name: string;
  btnHandler: () => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  isOutlineBtn = false,
  isPrimaryGradient = true,
  marginTop = "1rem",
  btnHandler,
  size = "normal",
}) => {
  return (
    <CustomBtn
      size={size}
      onClick={btnHandler}
      marginTop={marginTop}
      className={`smallText-${size === "normal" ? "1" : "2"} customBtn`}
      isOutlineBtn={isOutlineBtn}
      isPrimaryGradient={isPrimaryGradient}>
      {name}
    </CustomBtn>
  );
};

export default Button;

export const CustomBtn = styled.button<CustomBtnProps>`
  border-radius: 30px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  background: ${props =>
    props.isOutlineBtn ? "transparent" : "var(--bg-gradient5)"};
  border: ${props =>
    props.isOutlineBtn ? "2px solid var(--secondary-color)" : "none"};
  background-size: 300%;
  background-position: left;
  margin-top: ${props => props.marginTop};
  transition: all 0.5s ease-in;

  ${props =>
    props.size === "normal"
      ? css`
          padding: ${props.isOutlineBtn ? "1rem" : "18px"} 10px;
          min-width: 140px;

          @media (max-width: 575.98px) {
            padding: ${props.isOutlineBtn ? "14px" : "16px"} 10px;
          }
        `
      : css`
          padding: ${props.isOutlineBtn ? "14px" : "16px"} 10px;
          min-width: 120px;

          @media (max-width: 575.98px) {
            padding: ${props.isOutlineBtn ? "12px" : "14px"} 10px;
          }
        `}

  &:hover {
    background-position: right;
    ${props =>
      props.isOutlineBtn &&
      css`
        background: var(--secondary-color);
      `}
  }
`;
