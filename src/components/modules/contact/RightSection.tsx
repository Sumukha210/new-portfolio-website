import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Wrapper, SubmitBtn } from "./RightSectionStyles";
import axios from "axios";
import { responseTypes } from "@/utils/types";

const RightSection = () => {
  const [isBtnDisabled, setBtnDisabled] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [response, setResponse] = useState<responseTypes | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0];
    const email = e.target[1];
    const message = e.target[2];

    [name, email, message].forEach(item => {
      if (item.validity.valid === false && item.validity.valid) {
        return;
      }
    });

    setBtnDisabled(true);

    if (!executeRecaptcha) {
      return;
    }

    try {
      const token = await executeRecaptcha();
      if (!token) {
        setResponse({ message: "Failed to Send!!!", status: "Failed" });
        return;
      }

      const result = await axios.post("/api/contactUs", {
        token,
        name: name.value,
        email: email.value,
        message: message.value,
      });

      if (result.data) {
        setResponse({
          message: result.data.message,
          status: result.data.status,
        });
      }
      setBtnDisabled(false);
    } catch (error) {
      console.log(error);
      setResponse({ message: "Failed to Send!!!", status: "Failed" });
      setBtnDisabled(false);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <section>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
          </section>

          <section>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </section>
        </div>

        <section>
          <textarea
            name="message"
            placeholder="Enter your message"
            cols={30}
            rows={10}></textarea>
        </section>

        <div className="responseText">
          <h3
            className="subtitle-4"
            style={{
              color: response?.status === "Failed" ? "red" : "#24ff72",
            }}>
            {response?.message}
          </h3>
        </div>

        <div className="btnContainer">
          <SubmitBtn disabled={isBtnDisabled} type="submit" marginTop="2rem">
            <span>Submit{isBtnDisabled && "ting"}</span>
            {isBtnDisabled && <span className="loader"></span>}
          </SubmitBtn>
        </div>
      </form>
    </Wrapper>
  );
};

export default RightSection;
