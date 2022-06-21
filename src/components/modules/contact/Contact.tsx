import Title from "@/elements/Title";
import React from "react";
import styled from "styled-components";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Contact = () => {
  return (
    <Wrapper className="margin-top">
      <div className="container">
        <div className="inner-container">
          <Title name="Get in touch" />
          <Grid>
            <LeftSection />
            <RightSection />
          </Grid>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 3rem;
  margin-top: 5rem;

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
  }
`;
