import React from "react";
import './Button.css';

const Button = ({ variant = "primary" }) => {
  return (
    <>
    <button className={`btn btn-${variant}`}>
        Button
    </button>
    </>
  );
};

export default Button;
