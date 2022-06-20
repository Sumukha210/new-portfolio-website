import React from "react";
import styled from "styled-components";

interface CustomTitleProps {
  lineWidth?: number;
}

interface TitleProps extends CustomTitleProps {
  name: string;
}

const Title: React.FC<TitleProps> = ({ name, lineWidth = 140 }) => {
  return (
    <CustomTitle className="heading-3" lineWidth={lineWidth}>
      {name}
    </CustomTitle>
  );
};

export default Title;

const CustomTitle = styled.h2<CustomTitleProps>`
  margin-bottom: 2rem;
  position: relative;
  color: var(--secondary-color);

  &::after {
    content: "";
    display: inline-block;
    margin-top: 8px;
    width: ${props => `${props.lineWidth}px`};
    height: 3px;
    margin-left: 2px;
    background-color: var(--text-light);

    @media (max-width: 575.98px) {
      margin-top: 8px;
      display: block;
      width: 90px;
      height: 4px;
    }
  }
`;
