import React from "react";
import "../../App.css";
import "../../index.css";

import "./Button.css";

const Button = ({ title, color, disabled = false }) => {
  return (
    <button className={`button button--${color}`} disabled={disabled}>
      <span className={`textButton textButton--${color}`}> {title}</span>
    </button>
  );
};

export default Button;
