import React from "react";

interface InputFieldProps {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  isRequired?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type = "text",
  isRequired = true,
}) => {
  const inputProps = {
    name,
    required: isRequired,
    placeholder: `Enter your ${name}`,
  };

  if (name === "message") {
    return (
      <section>
        <textarea {...inputProps} cols={30} rows={10}></textarea>;
      </section>
    );
  }

  return (
    <section>
      <input {...inputProps} type={type}></input>
    </section>
  );
};

export default InputField;
