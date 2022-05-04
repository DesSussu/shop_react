import React from "react";
import "./App.css";

const Button = ({ title, disabled = false }) => {
  return (
    <button className="button" disabled={disabled}>
      <div className="textButton"> {title}</div>
    </button>
  );
};

export default Button;
