import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandWhatsapp } from "react-icons/tb";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { Grid, Wrapper } from "./FooterStyles";

const Footer = () => {
  return (
    <Wrapper className="margin-top">
      <div className="container">
        <div className="inner-container">
          <Grid>
            <div className="left">
              <h3 className="subtitle-1">Kbs.</h3>
            </div>

            <div className="copyright">
              <h3 className="subtitle-5">
                © Copyright 2022. All right reserved
              </h3>
            </div>

            <div className="right">
              <a
                href="https://www.linkedin.com/in/sumukha-kb-1251a71b8/"
                target="_blank"
                aria-label="Linkedin"
                rel="noreferrer">
                <GrLinkedinOption />
              </a>

              <a
                href="https://github.com/Sumukha210"
                target="_blank"
                aria-label="Github"
                rel="noreferrer">
                <AiFillGithub />
              </a>

              <a
                aria-label="Whatsapp"
                href="https://api.whatsapp.com/send?phone=+91 9449022673">
                <TbBrandWhatsapp />
              </a>

              <a
                aria-label="Mail"
                href="mailto:sumukhakb210@gmail.com?subject=Contact us Form&cc=cc@example.com">
                <AiOutlineMail />
              </a>
            </div>
          </Grid>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
