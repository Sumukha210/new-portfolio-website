import Button, { CustomBtn } from "@/elements/Button";
import SEO from "@/utils/SEO";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Resume = () => {
  const route = useRouter();

  return (
    <>
      <Wrapper>
        <SEO />
        <div className="container">
          <div className="inner-container">
            <div className="btnContainer">
              <Button
                name="Back"
                isOutlineBtn
                btnHandler={() => route.replace("/")}
              />

              <DownloadBtn
                as="a"
                href="/sumukha-resume.pdf"
                download="Sumukha Resume"
              >
                Download
              </DownloadBtn>
            </div>

            <ResumeContainer>
              <iframe
                src="/sumukha-resume.pdf"
                width="100%"
                height="600px"
                title="PDF Viewer"
              ></iframe>
            </ResumeContainer>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Resume;

const Wrapper = styled.div`
  overflow: hidden;

  .btnContainer {
    margin: 2rem 0;

    @media (max-width: 575.98px) {
      button {
        min-width: 118px;
      }
    }
  }
`;

const DownloadBtn = styled(CustomBtn)`
  margin-left: 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 16.4px 10px;

  @media (max-width: 575.98px) {
    padding: 12.4px 10px;
  }
`;

const ResumeContainer = styled.div``;
