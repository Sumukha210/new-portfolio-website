import React from "react";
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

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
          <h3 className="subtitle-4">Sumukhakb210@gmail.com</h3>
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

const Wrapper = styled.div`
  section {
    display: flex;
    align-items: center;

    &:not(:first-of-type) {
      margin-top: 2rem;
    }

    div {
      &:first-of-type {
        background: var(--primary-gradient);
        height: 70px;
        width: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          height: 30px;
          width: 30px;
        }
      }

      &:last-of-type {
        color: var(--text-light);
        margin-left: 1rem;

        & > * {
          font-weight: 500;
        }
      }
    }
  }
`;
