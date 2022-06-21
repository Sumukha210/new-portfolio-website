import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandWhatsapp } from "react-icons/tb";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { Grid, Wrapper } from "./FooterStyles";

const Footer = () => {
  return (
    <Wrapper>
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
                target="_blank">
                <GrLinkedinOption />
              </a>

              <a href="https://github.com/Sumukha210" target="_blank">
                <AiFillGithub />
              </a>

              <a href="https://api.whatsapp.com/send?phone=+91 9449022673">
                <TbBrandWhatsapp />
              </a>

              <a href="mailto:sumukhakb210@gmail.com?subject=subject&cc=cc@example.com">
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
