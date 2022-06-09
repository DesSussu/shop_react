import React from "react";
import "../../App.css";
import "../../index.css";
import home from "../../assets/img/home.svg";
import { Link } from "react-router-dom";
import CartWidget from "../../../src/components/CartWidget/CartWidget";

function Navbar() {
  return (
    <div className="menu">
      <Link to="/">
        <img src={home} />
      </Link>
      <ul>
        <Link to="/product">
          <li>SHOP</li>
        </Link>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>FAQs</li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default Navbar;
