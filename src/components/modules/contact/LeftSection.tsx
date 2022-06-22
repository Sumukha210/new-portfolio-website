import React from "react";
import { MdLocationOn } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Wrapper } from "./LeftSectionStyles";

const LeftSection = () => {
  return (
    <Wrapper>
      <section>
        <div>
          <MdLocationOn />
        </div>

        <div>
          <h3 className="subtitle-4">
            Sorab,karnataka. <br /> India
          </h3>
        </div>
      </section>

      <section>
        <div>
          <AiFillMail />
        </div>

        <div>
          <h3 className="subtitle-4 email">
            Sumukhakb210<span>@gmail.com</span>
          </h3>
        </div>
      </section>

      <section>
        <div>
          <BsFillTelephoneFill />
        </div>

        <div>
          <h3 className="subtitle-4">9449022673</h3>
        </div>
      </section>
    </Wrapper>
  );
};

export default LeftSection;
