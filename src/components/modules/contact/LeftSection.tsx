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
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 1rem;
    text-align: center;
  }

  section {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      &:not(:first-of-type) {
        margin-top: 2rem;
      }
    }

    @media (max-width: 575.98px) {
      display: flex;
      align-items: center;
      &:not(:first-of-type) {
        margin-top: 2rem;
      }
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

        @media (min-width: 576px) and (max-width: 767.98px) {
          margin-inline: auto;
          margin-bottom: 1rem;
        }

        svg {
          height: 30px;
          width: 30px;
        }
        @media (max-width: 575.98px) {
          height: 50px;
          width: 50px;

          svg {
            height: 20px;
            width: 20px;
          }
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
