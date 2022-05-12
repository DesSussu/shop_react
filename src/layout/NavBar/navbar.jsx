import React from "react";
import "../../App.css";
import "../../index.css";
import home from "../../assets/img/home.svg";

function Navbar() {
  return (
    <div className="menu">
      <img src={home} />
      <ul>
        <li>SHOP</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>FAQs</li>
      </ul>
    </div>
  );
}

export default Navbar;
