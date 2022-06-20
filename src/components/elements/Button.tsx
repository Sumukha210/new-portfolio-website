import React from "react";
import styled from "styled-components";

interface CustomBtnProps {
  isOutlineBtn?: boolean;
  isPrimaryGradient?: boolean;
  marginTop?: string;
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
}) => {
  return (
    <CustomBtn
      onClick={btnHandler}
      marginTop={marginTop}
      className="smallText-1"
      isOutlineBtn={isOutlineBtn}
      isPrimaryGradient={isPrimaryGradient}>
      {name}
    </CustomBtn>
  );
};

export default Button;

const CustomBtn = styled.button<CustomBtnProps>`
  border-radius: 30px;
  padding: ${props => (props.isOutlineBtn ? "1rem" : "18px")} 10px;
  min-width: 140px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  background: ${props =>
    props.isOutlineBtn ? "transparent" : "var(--bg-gradient5)"};
  border: ${props =>
    props.isOutlineBtn ? "2px solid var(--secondary-color)" : "none"};

  margin-top: ${props => props.marginTop};
`;
