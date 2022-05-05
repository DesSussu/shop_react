import React from "react";
import "./App.css";

const Button = ({ title, color, disabled = false }) => {
  return (
    <button className={`button button--${color}`} disabled={disabled}>
      <div className="textButton"> {title}</div>
    </button>
  );
};

export default Button;
