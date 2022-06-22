import Title from "@/elements/Title";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import styled from "styled-components";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Contact = () => {
  return (
    <Wrapper className="margin-top">
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY}
        scriptProps={{
          async: false, // optional, default to false,
          defer: true, // optional, default to false
          appendTo: "body", // optional, default to "head", can be "head" or "body",
          nonce: undefined,
        }}>
        <div className="container">
          <div className="inner-container">
            <Title name="Get in touch" />
            <Grid>
              <LeftSection />
              <RightSection />
            </Grid>
          </div>
        </div>
      </GoogleReCaptchaProvider>
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
