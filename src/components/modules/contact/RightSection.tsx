import React, { useState } from "react";
import { Wrapper, SubmitBtn } from "./RightSectionStyles";

const RightSection = () => {
  const [isBtnDisabled, setBtnDisabled] = useState(false);

  const handleSubmit = (e: any) => {
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

    console.log(name.value, email.value, message.value);
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
