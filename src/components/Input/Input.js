import React from "react";

const Input = ({ size, ...rest }) => {
  return (
    <>
      <input className={`input-field input-field--${size}`} {...rest} />
    </>
  );
};

export default Input;
