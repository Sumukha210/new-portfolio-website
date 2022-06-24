import Title from "@/elements/Title";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import styled from "styled-components";
import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

const Contact = () => {
  return (
    <Wrapper className="margin-top">
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY}
        scriptProps={{
          async: false,
          defer: true,
          appendTo: "body",
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
